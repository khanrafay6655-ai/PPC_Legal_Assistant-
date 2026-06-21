import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { PPC_DATABASE, PPCSection } from "./src/data/ppc_sections";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// High limit to support processing base64 image uploads for document scanning (OCR + Analysis)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize GoogleGenAI client (Server-Side Only)
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. AI capabilities will be offline.");
      throw new Error("GEMINI_API_KEY is not configured in environment variables.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// Global System Instruction for authoritative legal matching and precise compliance with PPC rules
const SYSTEM_INSTRUCTION = `You are "PPC Legal Assistant", an elite AI assistant designed to help advocates, lawyers, law students, and legal researchers search, understand, and interpret the Pakistan Penal Code (XLV of 1860).

You must answer questions based on the Pakistan Penal Code (PPC). Follow these strict rules:

1. DOCUMENT AUTHORITY:
- You must always prioritize accuracy. Use standard historical and current provisions of the Pakistan Penal Code (XLV of 1860).
- If information is not related to Pakistan laws or the PPC, clearly state:
  "This information is not available in the uploaded Pakistan Penal Code document."
- Never invent section numbers or create fake legal provisions. If unsure, state clearly that you cannot find it.

2. SECTION SEARCH FORMATS:
When a user asks about a section or when you output a specific penal section, you must provide the answer structured in the following combined layout:

Section Number: [e.g. Section 420 PPC]
Section Title: [Title of the section]
Legal Explanation: [A simple, rigorous, and professional legal explanation of the offence]
Punishment: [State the exact punishment provided under the PPC]
Related Sections: [List connected sections or amendments]

And always follow up or organize the response using these precise markdown headers/lists:
📌 Section: [Section number]
📌 Offence: [Offence title]
📌 Definition: [Clear definition of what constitutes this offence]
📌 Punishment: [Exact punishment duration, fines (Arsh, Daman, or Diyet if applicable), and nature]
📌 Key Points: [List of crucial elements, e.g., Common Intention, possession, etc.]
📌 Related Sections: [Mention related offences relative to this crime]

3. CRIME SEARCH:
If the user searches by crime name or legal concept (e.g., "Theft", "Fraud", "Murder", "Cheque bounce", "Intimidation", "Zina", "Abduction"), you must:
- List and explain all relevant PPC sections.
- Identify their specific section numbers.
- Give the complete legal definition, key components, and exact punishment for each related section.

4. MULTILINGUAL SUPPORT:
- If the user queries in Urdu, explain and format everything in rich, accurate Urdu legal terminology.
- If the user queries in English, respond in English.
- If 'bilingual' is selected or requested, or when helpful, provide consecutive versions of the legal definition and punishments in BOTH English and Urdu.

5. PROFESSIONAL LEGAL PROCEDURAL ADVICE:
- You must always advise the user of the realistic and proper litigation/trial procedures under Pakistan's Code of Criminal Procedure (CrPC) 1898 associated with the offense.
- Detail the exact legal steps (e.g., lodging a First Information Report (FIR) under Section 154 CrPC, filing a private complaint before the Magistrate under Section 200 CrPC, submitting bail applications, or navigating the trial in criminal courts).
- Explicitly emphasize that these strategic steps must only be taken after consulting with a licensed, practising Advocate (of Lower Courts, High Courts, or the Supreme Court of Pakistan) registered with the respective Provincial Bar Council (e.g., Punjab Bar Council, Sindh Bar Council, KP Bar Council, Balochistan Bar Council, Islamabad Bar Council).

6. LEGAL DISCLAIMER:
At the end of EVERY legal explanation or analysis, you MUST append the following exact legal disclaimer block:
"This response is based on the Pakistan Penal Code document and is for legal research assistance. It does not replace professional legal advice."`;

// Local search function to quickly identify which PPC sections in our static database might be related
function findLocalMatchedSections(userQuery: string): PPCSection[] {
  const queryLower = userQuery.toLowerCase();
  
  // Look for direct numbers in the text (e.g. 302, 420, 489-f)
  const numbersInQuery = queryLower.match(/\b\d+(?:-[a-zA-Z])?\b/g) || [];
  
  const matched: PPCSection[] = [];
  
  // 1. Match by Section Number first
  for (const num of numbersInQuery) {
    const directMatch = PPC_DATABASE.find(item => item.section.toLowerCase() === num);
    if (directMatch && !matched.some(m => m.id === directMatch.id)) {
      matched.push(directMatch);
    }
  }

  // 2. Match by Keywords, Title, or definition
  for (const section of PPC_DATABASE) {
    if (matched.some(m => m.id === section.id)) continue;
    
    const iskeywordMatch = section.keywords.some(kw => queryLower.includes(kw));
    const isTitleMatch = section.title.toLowerCase().includes(queryLower) || 
                         (section.urduTitle && section.urduTitle.includes(userQuery));
    const isChapterMatch = section.chapter.toLowerCase().includes(queryLower);

    if (iskeywordMatch || isTitleMatch || isChapterMatch) {
      matched.push(section);
    }
  }

  return matched;
}

// API: Check status/health of backend
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", hasApiKey: !!apiKey });
});

// API: Dynamically load/synthesize any PPC Section by its number
app.post("/api/get-section", async (req, res) => {
  try {
    const { section } = req.body;
    if (!section) {
      return res.status(400).json({ error: "Missing section number in request." });
    }

    const cleanSecNum = section.toString().trim().toLowerCase();

    // 1. Look up in static PPC_DATABASE
    const existing = PPC_DATABASE.find(item => item.section.toLowerCase() === cleanSecNum);
    if (existing) {
      return res.json({ success: true, section: existing, source: "database" });
    }

    // 2. Synthesize using AI on-demand
    try {
      const gClient = getAIClient();
      
      const dynamicPrompt = `Generate a structured PPCSection object for section number "${section}" of the Pakistan Penal Code (XLV of 1860).
Please make sure the returned JSON perfectly conforms to the schema. Make the definition, punishment, and key points extremely accurate and authentic to the statutory provisions of Pakistan Penal Code. Include Urdu translations for title, definition and punishment where possible.`;

      const response = await gClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: dynamicPrompt,
        config: {
          systemInstruction: `You are a legal schema synthesizer for the Pakistan Penal Code (XLV of 1860).
Your job is to return a strict, valid JSON object representing the requested section of the Pakistan Penal Code.

The JSON MUST exactly match this TypeScript interface:
interface PPCSection {
  id: string; // The section number as a string (same as the 'section' field, e.g. "307")
  section: string; // The section number (e.g., "307" or "377-A")
  title: string; // The English title of the section
  chapter: string; // The exact chapter number and title (e.g., "Chapter XVI: Of Offences Affecting the Human Body")
  definition: string; // Detailed English statutory definition/explanation
  punishment: string; // Detailed English punishment description
  keyPoints: string[]; // At least 2-4 key legal/prosecutorial elements as bullet points in English
  relatedSections: string[]; // List of related sections under PPC (just the numbers, e.g. ["302", "324"])
  keywords: string[]; // 4-8 relevant English keywords for search matching
  urduTitle?: string; // The Urdu title of the section (e.g., "اقدامِ قتل")
  urduDefinition?: string; // Clear, grammatically correct and legally accurate Urdu definition/explanation
  urduPunishment?: string; // Clear and accurate Urdu punishment description
}

Rules:
1. ONLY return the valid JSON, no markdown code block surrounds, no additional text or introductory phrases.
2. Ensure all fields are filled with accurate legal provisions from the official Pakistan Penal Code (XLV of 1860).
3. If the section does not exist in the actual Pakistan Penal Code, return a JSON with an error field like:
{ "error": "This section does not exist in the Pakistan Penal Code." }
4. Always provide precise legal information. Never invent or hallucinate provisions.`,
          temperature: 0.1,
        }
      });

      let responseText = response.text || "";
      responseText = responseText.trim();
      
      // Clean potential markdown quotes
      if (responseText.startsWith("```json")) {
        responseText = responseText.substring(7);
      } else if (responseText.startsWith("```")) {
        responseText = responseText.substring(3);
      }
      if (responseText.endsWith("```")) {
        responseText = responseText.substring(0, responseText.length - 3);
      }
      responseText = responseText.trim();

      const parsed = JSON.parse(responseText);

      if (parsed.error) {
        return res.status(404).json({ error: parsed.error });
      }

      // Ensure id is present
      if (!parsed.id) {
        parsed.id = parsed.section || section;
      }

      return res.json({ success: true, section: parsed, source: "ai" });
    } catch (aiErr: any) {
      console.error("AI dynamic section generation failed:", aiErr);
      
      // Offline fallback template generator
      const cleanNum = cleanSecNum.toUpperCase();
      const fallbackSection: PPCSection = {
        id: cleanNum,
        section: cleanNum,
        title: `Section ${cleanNum} of Pakistan Penal Code`,
        chapter: "Chapter Not Set (Offline)",
        definition: `Section ${cleanNum} of the Pakistan Penal Code (XLV of 1860). Complete text and interpretation requires a server connection with an active GEMINI_API_KEY.`,
        punishment: "Details offline. Please configure your GEMINI_API_KEY to retrieve on-demand section punishments dynamically.",
        keyPoints: ["Requires live server authentication"],
        relatedSections: [],
        keywords: [cleanNum.toLowerCase()]
      };
      
      return res.json({ success: true, section: fallbackSection, source: "fallback" });
    }
  } catch (err: any) {
    console.error("Error in get-section:", err);
    res.status(500).json({ error: err.message || "An error occurred retrieving the section." });
  }
});

// API: Search and execute reasoning Q&A against the PPC database
app.post("/api/search", async (req, res) => {
  try {
    const { message, lang = "english" } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Missing message or search query in request." });
    }

    // 1. Scan PPC database locally for instant matches to show in visual Cards
    const localMatches = findLocalMatchedSections(message);

    // 2. Query Gemini for deep AI legal reasoning and proper legal formatting
    let aiResponseText = "";
    
    try {
      const gClient = getAIClient();
      
      // Inject local matches into context to ensure 100% database authority matching
      const localContext = localMatches.length > 0 
        ? `Here is the precise ground truth data for relevant sections found in our database for reference:\n${JSON.stringify(localMatches, null, 2)}`
        : "No direct section matched in the local index. Retrieve the exact provisions, definitions, and punishments from your authoritative historical Pakistan Penal Code (XLV of 1860) records.";

      const prompt = `User Query: "${message}"
Language Mode Selected: ${lang}

${localContext}

Please generate an authoritative search result and answer legal questions accurately. If matching a specific section, remember to supply BOTH formats requested in your system instructions, and finalize with the mandatory disclaimer.`;

      const response = await gClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.2, // Low temperature for high precision and authoritative alignment
        }
      });

      aiResponseText = response.text || "";
    } catch (aiErr: any) {
      console.error("AI Generation error:", aiErr);
      // Fallback response with offline/static database matching when API Key is missing or quota is hit
      if (localMatches.length > 0) {
        aiResponseText = `### [⚠️ Local Database Result - AI Offline]\n\nI have matched the following relevant Pakistan Penal Code sections in our local database:\n\n`;
        for (const sec of localMatches) {
          aiResponseText += `Section Number: Section ${sec.section} PPC\n`;
          aiResponseText += `Section Title: ${sec.title}\n`;
          aiResponseText += `Legal Explanation: ${sec.definition}\n`;
          aiResponseText += `Punishment: ${sec.punishment}\n`;
          aiResponseText += `Related Sections: ${sec.relatedSections.join(", ")}\n\n`;
          
          aiResponseText += `📌 Section: Section ${sec.section} PPC\n`;
          aiResponseText += `📌 Offence: ${sec.title}\n`;
          aiResponseText += `📌 Definition: ${sec.definition}\n`;
          aiResponseText += `📌 Punishment: ${sec.punishment}\n`;
          aiResponseText += `📌 Key Points:\n${sec.keyPoints.map(kp => `- ${kp}`).join("\n")}\n`;
          aiResponseText += `📌 Related Sections: ${sec.relatedSections.join(", ")}\n\n`;
          aiResponseText += `--- \n`;
        }
        aiResponseText += `\n*Note: AI analysis is currently unavailable as the backend is offline. Retrying with local records.* \n\nThis response is based on the Pakistan Penal Code document and is for legal research assistance. It does not replace professional legal advice.`;
      } else {
        aiResponseText = `### [⚠️ PPC Assistant Offline]\n\n"This information is not available in the uploaded Pakistan Penal Code document."\n\nPlease ensure your **GEMINI_API_KEY** is configured in **Settings > Secrets** to enable advanced AI-powered case matching and queries.\n\nThis response is based on the Pakistan Penal Code document and is for legal research assistance. It does not replace professional legal advice.`;
      }
    }

    res.json({
      text: aiResponseText,
      detectedSections: localMatches
    });

  } catch (err: any) {
    console.error("Server API Search Error:", err);
    res.status(500).json({ error: err.message || "An error occurred on the legal server." });
  }
});

// API: Analyze case documents (text uploads or image FIR/OCR scans)
app.post("/api/analyze-case", async (req, res) => {
  try {
    const { text, fileData, lang = "english" } = req.body;
    
    if (!text && !fileData) {
      return res.status(400).json({ error: "No case narrative or document provided for analysis." });
    }

    // Identify matches
    const searchString = `${text || ""} ${fileData?.filename || ""}`;
    const localMatches = findLocalMatchedSections(searchString);

    let aiResponseText = "";

    try {
      const gClient = getAIClient();

      const parts: any[] = [];

      // If document is a scanned image, attach the inline image part to Gemini
      if (fileData && fileData.base64 && fileData.mimeType) {
        parts.push({
          inlineData: {
            data: fileData.base64,
            mimeType: fileData.mimeType
          }
        });
      }

      // Add context and instruction prompt
      const analysisPrompt = `Please perform a detailed legal document analysis of the attached file or pasted narrative against the Pakistan Penal Code (PPC).

${text ? `Pasted Narrative / Context Details:\n"${text}"` : ""}
${fileData ? `Attached Document Filename: "${fileData.filename}"` : ""}
Language Mode Selected: ${lang}

Local Matched Reference Sections: ${JSON.stringify(localMatches, null, 2)}

Your analysis must:
1. Identify all potential offences/crimes alleged or committed in the document (e.g. Theft, Fraud, Homicide, Threat, Assault).
2. Recommend the exact relevant PPC code sections (e.g., Section 302, 420, 324, 489-F).
3. Elaborate on what the prosecution has to prove (Ingredients of the offence).
4. Provide the exact punishments prescribed under each highlighted PPC section.
5. Provide a strategic legal perspective for defence advocacy OR prosecution.
6. Adopt Urdu terminology and structured sections if Urdu is targeted, otherwise English.
7. Structure results clearly with markdowns, icons, and include the mandatory legal disclaimer at the bottom.`;

      parts.push({ text: analysisPrompt });

      const response = await gClient.models.generateContent({
        model: "gemini-3.5-flash",
        contents: { parts: parts },
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.2,
        }
      });

      aiResponseText = response.text || "";
    } catch (aiErr: any) {
      console.error("Case Analysis AI error:", aiErr);
      
      // Fallback offline report generator
      aiResponseText = `### 📋 Case Document Legal Report [AI Offline]\n\n`;
      aiResponseText += `*Analyzing Case Content*: ${text ? `"${text.substring(0, 100)}..."` : "(Uploaded document image)"}\n`;
      
      if (localMatches.length > 0) {
        aiResponseText += `\nBased on a local keyword scan, the following potential PPC provisions may be triggered by this case file:\n\n`;
        for (const sec of localMatches) {
          aiResponseText += `#### 📌 Section: Section ${sec.section} PPC\n`;
          aiResponseText += `- **Offence**: ${sec.title}\n`;
          aiResponseText += `- **Legal Description**: ${sec.definition}\n`;
          aiResponseText += `- **Punishment**: ${sec.punishment}\n`;
          aiResponseText += `- **Key Prosecution Ingredients**:\n`;
          sec.keyPoints.forEach(kp => {
            aiResponseText += `  * ${kp}\n`;
          });
          aiResponseText += `--- \n`;
        }
      } else {
        aiResponseText += `\nNo direct matches found in our local key sections database. To unlock deep AI-powered transcription and legal case mapping, please configure your **GEMINI_API_KEY** in **Settings > Secrets**.\n`;
      }
      
      aiResponseText += `\n\nThis response is based on the Pakistan Penal Code document and is for legal research assistance. It does not replace professional legal advice.`;
    }

    res.json({
      analysis: aiResponseText,
      matchedSections: localMatches
    });

  } catch (err: any) {
    console.error("Server API Case Analysis Error:", err);
    res.status(500).json({ error: err.message || "An error occurred during case document analysis." });
  }
});


// Serve dynamic Vite client in development or compiled static index page in production
const distPath = path.join(process.cwd(), "dist");

async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PPC Legal Assistant backend running on http://0.0.0.0:${PORT}`);
  });
}

bootstrap().catch(err => {
  console.error("Failed to start full-stack server:", err);
});
