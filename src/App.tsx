import React, { useState, useEffect, useRef } from "react";
import { 
  Scale, 
  Search, 
  FileText, 
  UploadCloud, 
  Languages, 
  BookOpen, 
  ShieldAlert, 
  X, 
  Copy, 
  Check, 
  Gavel, 
  ChevronRight, 
  Sparkles, 
  FileCheck,
  RotateCcw,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PPC_DATABASE, PPCSection } from "./data/ppc_sections";

export default function App() {
  // Query Console State
  const [searchQuery, setSearchQuery] = useState("");
  const [languageMode, setLanguageMode] = useState<"english" | "urdu" | "bilingual">("english");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [detectedSections, setDetectedSections] = useState<PPCSection[]>([]);
  
  // Document Analyzer State
  const [activeTab, setActiveTab] = useState<"query" | "document">("query");
  const [pastedCaseText, setPastedCaseText] = useState("");
  const [attachedFile, setAttachedFile] = useState<{
    name: string;
    base64: string;
    mimeType: string;
    size: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [analysisMatchedSections, setAnalysisMatchedSections] = useState<PPCSection[]>([]);
  
  // Interactive Offline Database Sidebar State
  const [selectedSection, setSelectedSection] = useState<PPCSection | null>(PPC_DATABASE[3]); // Default to Section 302
  const [dbSearchTerm, setDbSearchTerm] = useState("");
  
  // UI States
  const [copiedText, setCopiedText] = useState(false);
  const [backendHealthy, setBackendHealthy] = useState<boolean | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load Health Check
  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(data => {
        setBackendHealthy(data.status === "healthy");
      })
      .catch(() => {
        setBackendHealthy(false);
      });
  }, []);

  // Pre-loaded Pakistani Legal Case & FIR templates for quick testing
  const CASE_TEMPLATES = [
    {
      label: "📍 Fraud & Cheating (Section 420 PPC)",
      text: "The complainant alleges that the accused defrauded him of Rs. 15,000,000 by intentionally inducing him to transfer ownership of commercial plots in Gulberg, Lahore, using forged authority letters, promising cash payments that never materialized.",
    },
    {
      label: "📍 Cheque Bounce Dispute (Section 489-F PPC)",
      text: "FIR registered at Police Station Margalla, Islamabad. The accused issued a bank cheque worth Rs. 4,500,000 to settle a business debt. Upon presentation to Bank Alfalah, the cheque was dishonoured with a memo reading 'Insufficient Funds'.",
    },
    {
      label: "📍 Criminal Conspiracy / Murder (302/34 PPC)",
      text: "FIR states that on the night of June 12, four armed individuals entered the courtyard of the deceased in Faisalabad. In furtherance of their common intention, the primary accused opened fire, causing fatal injuries, while others acted as lookouts.",
    },
  ];

  // Quick statutory search queries
  const SUGGESTED_QUERIES = [
    "What is the punishment for intentional murder in Pakistan PPC 302?",
    "Explain Section 489-F on cheque bouncing",
    "What happens if five or more people commit robbery under Section 395?",
    "What is common intention (Section 34 PPC) and how does joint liability work?",
  ];

  // Filter local database by search term
  const filteredDatabase = PPC_DATABASE.filter(item => {
    const term = dbSearchTerm.toLowerCase();
    return (
      item.section.toLowerCase().includes(term) ||
      item.title.toLowerCase().includes(term) ||
      (item.urduTitle && item.urduTitle.includes(dbSearchTerm)) ||
      item.keywords.some(kw => kw.toLowerCase().includes(term))
    );
  });

  // Handle Search Q&A Call
  const handleLegalSearch = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const queryToUse = customQuery || searchQuery;
    if (!queryToUse.trim()) return;

    setIsSearching(true);
    setSearchResult(null);
    setDetectedSections([]);

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: queryToUse,
          lang: languageMode
        })
      });
      const data = await response.json();
      if (response.ok) {
        setSearchResult(data.text);
        if (data.detectedSections && data.detectedSections.length > 0) {
          setDetectedSections(data.detectedSections);
          // Highlight first detected section in sidebar for instant access
          setSelectedSection(data.detectedSections[0]);
        }
      } else {
        setSearchResult(`### Error\n\n${data.error || "Failed to search legal query. Please try again."}`);
      }
    } catch (err) {
      setSearchResult(`### Connection Error\n\nCould not reach the PPC legal backend. Please verify your server is running.`);
    } finally {
      setIsSearching(false);
    }
  };

  // Convert File to Base64 for scanning
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    
    // Support text files (read text) or images (send base64 to Gemini)
    const reader = new FileReader();
    if (file.type.startsWith("image/") || file.type === "application/pdf") {
      reader.onloadend = () => {
        setAttachedFile({
          name: file.name,
          base64: (reader.result as string).split(",")[1] || "",
          mimeType: file.type,
          size: `${sizeInMB} MB`
        });
      };
      reader.readAsDataURL(file);
    } else {
      // Treat as plain text
      reader.onload = (event) => {
        setPastedCaseText(event.target?.result as string || "");
        setAttachedFile({
          name: file.name,
          base64: "",
          mimeType: "text/plain",
          size: `${sizeInMB} MB`
        });
      };
      reader.readAsText(file);
    }
  };

  // Clean current document state
  const clearDocument = () => {
    setPastedCaseText("");
    setAttachedFile(null);
    setAnalysisResult(null);
    setAnalysisMatchedSections([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Handle Document Analysis
  const handleCaseAnalysis = async () => {
    if (!pastedCaseText.trim() && !attachedFile) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setAnalysisMatchedSections([]);

    try {
      const response = await fetch("/api/analyze-case", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: pastedCaseText,
          fileData: attachedFile ? {
            base64: attachedFile.base64,
            mimeType: attachedFile.mimeType,
            filename: attachedFile.name
          } : undefined,
          lang: languageMode
        })
      });
      const data = await response.json();
      if (response.ok) {
        setAnalysisResult(data.analysis);
        if (data.matchedSections && data.matchedSections.length > 0) {
          setAnalysisMatchedSections(data.matchedSections);
        }
      } else {
        setAnalysisResult(`### Error in Analysis\n\n${data.error || "An error occurred during case analysis."}`);
      }
    } catch (err) {
      setAnalysisResult(`### Connection Error\n\nCould not communicate with the PPC AI Engine. Please check server status.`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Copy text helper
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Format response for beautiful markdown viewing (simple regex replacement for rendering titles, bullets, and blocks)
  const renderMarkdown = (text: string) => {
    if (!text) return "";
    
    // Split into paragraphs & blocks and map beautifully
    return text.split("\n").map((line, index) => {
      // Headings
      if (line.startsWith("###")) {
        return <h4 key={index} className="text-md font-bold text-gray-900 mt-4 mb-2 border-b pb-1 flex items-center gap-2 font-display">{line.replace("###", "")}</h4>;
      }
      if (line.startsWith("##")) {
        return <h3 key={index} className="text-lg font-bold text-gray-900 mt-5 mb-3 border-b-2 border-legal-gold pb-1 font-display">{line.replace("##", "")}</h3>;
      }
      if (line.startsWith("#")) {
        return <h2 key={index} className="text-xl font-extrabold text-gray-900 mt-6 mb-4 font-display text-legal-dark">{line.replace("#", "")}</h2>;
      }

      // Bold titles/icons
      if (line.startsWith("📌")) {
        const parts = line.split(":");
        const title = parts[0];
        const content = parts.slice(1).join(":");
        return (
          <div key={index} id={`line-index-${index}`} className="mb-2 bg-gradient-to-r from-legal-gold-light to-transparent p-2 rounded-r border-l-4 border-legal-gold">
            <span className="font-semibold text-legal-dark text-sm">{title}:</span>
            <span className="text-gray-700 font-sans text-sm ml-1">{content}</span>
          </div>
        );
      }

      // Bullet points
      if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
        return (
          <li key={index} className="ml-6 list-disc text-sm text-gray-700 mb-1 font-sans">
            {line.trim().substring(1).trim()}
          </li>
        );
      }

      // Blockquotes / Disclaimer Block
      if (line.includes("This response is based on the Pakistan Penal Code") || line.includes("legal research assistance")) {
        return (
          <div key={index} className="mt-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded text-xs text-orange-850 font-sans flex gap-3">
            <ShieldAlert className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block mb-0.5">Statutory Disclaimer & Guide:</span>
              {line}
            </div>
          </div>
        );
      }

      if (line.trim() === "") return <div key={index} className="h-2" />;

      return <p key={index} className="text-sm text-gray-700 mb-2 leading-relaxed font-sans">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-850 antialiased font-sans selection:bg-indigo-100">
      
      {/* SLEEK TOP NAVIGATION BAR */}
      <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 bg-white border-b border-slate-200 shadow-sm z-10 shrink-0 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold shadow-sm">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800 flex items-center gap-2">
              PPC Legal Assistant 
              <span className="text-xs font-normal bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">v2.4 AI</span>
            </h1>
            <p className="text-[10px] text-slate-500 hidden sm:block">Pakistan Penal Code Act XLV of 1860 Research Workspace</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {/* Language Mode Selector */}
          <div className="bg-slate-50 rounded-lg px-2.5 py-1 border border-slate-200 flex items-center gap-1.5 shadow-sm">
            <Languages className="w-4 h-4 text-indigo-500 shrink-0" />
            <select
              id="lang-mode-select"
              value={languageMode}
              onChange={(e) => setLanguageMode(e.target.value as any)}
              className="bg-transparent text-slate-700 text-xs font-semibold focus:outline-none pr-1 py-0.5 cursor-pointer border-none"
            >
              <option value="english" className="bg-white text-slate-800">English Mode</option>
              <option value="urdu" className="bg-white text-slate-800">Urdu (اردو) Mode</option>
              <option value="bilingual" className="bg-white text-slate-800">Bilingual Match</option>
            </select>
          </div>

          {/* Connected Server Status Pill */}
          <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-2 shadow-sm">
            <span className={`w-2 h-2 rounded-full ${backendHealthy ? "bg-emerald-500" : backendHealthy === false ? "bg-rose-500" : "bg-amber-400 animate-ping"}`} />
            <span className="text-[11px] font-mono text-slate-600 font-semibold">
              {backendHealthy ? "connected" : backendHealthy === false ? "local backup" : "connecting..."}
            </span>
          </div>

          {/* Active Advocate Chambers representation */}
          <div className="flex items-center gap-2.5 border-l pl-4 border-slate-200">
            <div className="text-right hidden md:block">
              <p className="text-xs font-semibold leading-none text-slate-800">Adv. Rizwan Saleem</p>
              <p className="text-[10px] text-slate-500">Created by</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-xs flex items-center justify-center">
              RS
            </div>
          </div>
        </div>
      </nav>

      {/* WORKSPACE CONTAINER */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">

        {/* SIDEBAR: INTERACTIVE STATUTORY INDEX */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-4 bg-slate-900 text-slate-300 rounded-xl shadow-md border border-slate-800 overflow-hidden" id="sidebar-ppc-index">
          
          {/* Sidebar Header */}
          <div className="p-4 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-indigo-400 shrink-0" />
              <h2 className="text-sm font-bold font-display text-white uppercase tracking-wider">
                Statutory Offline Index
              </h2>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans mb-3">
              Explore immediate, verified codified segments of the Pakistan Penal Code. Click a card to view.
            </p>

            {/* Inner Search/Filter */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
              <input
                id="sidebar-db-search"
                type="text"
                placeholder="Filter by Sec, Keyword, Crime..."
                value={dbSearchTerm}
                onChange={(e) => setDbSearchTerm(e.target.value)}
                className="w-full bg-slate-800 text-slate-100 text-xs pl-8 pr-3 py-2 rounded-md border border-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans placeholder-slate-500"
              />
              {dbSearchTerm && (
                <button 
                  onClick={() => setDbSearchTerm("")}
                  className="absolute right-2 top-2.5 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Active Database Status Card Segment */}
          <div className="px-4">
            <p className="text-[9px] uppercase font-bold text-slate-550 tracking-wider mb-2 px-1 font-mono text-slate-500">Active Database</p>
            <div className="flex items-center gap-3 p-2.5 bg-slate-950/50 rounded-lg border border-slate-800">
              <div className="text-indigo-400 shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-medium text-white truncate">PPC_XLV_1860_v2.pdf</p>
                <p className="text-[10px] text-slate-500 font-mono">Last synced: Oct 2024</p>
              </div>
            </div>
          </div>

          {/* Quick List Scrolling Space */}
          <div className="flex-1 overflow-y-auto max-h-[300px] lg:max-h-[440px] p-2 divide-y divide-slate-800/50" id="offline-law-cards">
            {filteredDatabase.length > 0 ? (
              filteredDatabase.map((sec) => (
                <button
                  key={sec.id}
                  id={`statute-btn-${sec.id}`}
                  onClick={() => setSelectedSection(sec)}
                  className={`w-full text-left p-2.5 rounded-lg transition-all flex items-start gap-2.5 my-0.5 ${
                    selectedSection?.id === sec.id
                      ? "bg-slate-800 text-white border-l-4 border-indigo-500 shadow-sm"
                      : "hover:bg-slate-800/50 hover:text-slate-200 border-l-4 border-transparent text-slate-300"
                  }`}
                >
                  <div className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded transition-all shrink-0 ${
                    selectedSection?.id === sec.id ? "bg-indigo-600 text-white" : "bg-slate-950 text-slate-400"
                  }`}>
                    PPC-{sec.section}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold truncate text-slate-200">{sec.title}</h3>
                    {sec.urduTitle && (
                      <p className="text-[10px] font-urdu text-indigo-450/90 truncate mt-0.5 rtl text-indigo-400">{sec.urduTitle}</p>
                    )}
                  </div>
                  <ChevronRight className="w-3 h-3 text-slate-600 shrink-0 self-center" />
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-slate-550 font-sans text-slate-500">
                No local PPC sections matched the search.
              </div>
            )}
          </div>

          {/* Connected state indicators */}
          <div className="p-4 border-t border-slate-850 bg-slate-950/30 flex items-center justify-between text-[10px] text-slate-500 font-sans">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Connected to Legal Hub
            </div>
            <span className="font-mono text-[9px] text-slate-600">v2.4 LTS</span>
          </div>
        </aside>

        {/* MAIN PANEL WORKSPACE */}
        <main className="flex-1 flex flex-col gap-6" id="main-legal-canvas">

          {/* THE SECTIONS EXPLORATION PANEL (OFFLINE DETAIL VIEW) */}
          <AnimatePresence mode="wait">
            {selectedSection && (
              <motion.div
                key={selectedSection.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                id="sec-statutory-detail-card"
              >
                {/* Refined Crimson/Indigo Top Navigation Header block */}
                <div className="bg-indigo-600 px-5 py-4 text-white relative">
                  {/* Visual Gavel Background */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
                    <Gavel className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-indigo-100 font-mono">
                        {selectedSection.chapter}
                      </p>
                      <h3 className="text-lg font-bold leading-tight font-display text-white mt-1">
                        Section {selectedSection.section}: {selectedSection.title}
                      </h3>
                      {selectedSection.urduTitle && (
                        <h4 className="text-md font-urdu text-indigo-200 font-medium tracking-tight mt-1 rtl text-right">
                          دفعہ {selectedSection.section}: {selectedSection.urduTitle}
                        </h4>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => setSelectedSection(null)}
                      className="p-1.5 hover:bg-indigo-500/50 rounded-lg text-white transition-all shrink-0"
                      title="Close Details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Statutory Definitions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block font-mono">
                        🇬🇧 Codified English definition
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">{selectedSection.definition}</p>
                    </div>
                    
                    {selectedSection.urduDefinition && (
                      <div className="bg-indigo-50/30 p-4 rounded-lg border border-indigo-100 space-y-2 text-right">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-indigo-600 block font-mono">
                          قا نو نی تشریح (اردو) 🇵🇰
                        </span>
                        <p className="text-xs font-urdu text-slate-850 leading-relaxed rtl">{selectedSection.urduDefinition}</p>
                      </div>
                    )}
                  </div>

                  {/* Punishment Details */}
                  <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Gavel className="w-4 h-4 text-rose-600" />
                      <span className="text-[11px] uppercase tracking-wider font-bold text-rose-800 font-display">
                        Prescribed Penal Punishment Under Pakistan Laws
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 font-sans tracking-wide leading-relaxed font-semibold">
                      {selectedSection.punishment}
                    </p>
                    {selectedSection.urduPunishment && (
                      <p className="text-xs font-urdu text-rose-950 mt-1.5 text-right rtl leading-relaxed font-medium">
                        {selectedSection.urduPunishment}
                      </p>
                    )}
                  </div>

                  {/* Ingredients & Related items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block mb-1.5 font-display">Prosecution Essentials:</span>
                      <ul className="space-y-1">
                        {selectedSection.keyPoints.map((pt, i) => (
                          <li key={i} className="text-xs text-slate-650 flex items-start gap-1.5 font-sans text-slate-600">
                            <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-800 block mb-1.5 font-display">Related Penal Provisions:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSection.relatedSections.map((rel, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              const exactMatch = PPC_DATABASE.find(item => item.section.toLowerCase() === rel.toLowerCase());
                              if (exactMatch) setSelectedSection(exactMatch);
                            }}
                            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1.5 rounded-md border border-slate-200 transition-colors font-mono"
                          >
                            PPC-{rel}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* AI INTERACTIVE SECTION (SEARCH / CONSULTATION OR DOCUMENT ANALYZER) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col" id="ai-workbench-card">
            
            {/* Header Tabs switcher */}
            <div className="bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-stretch sm:items-center p-3 gap-3">
              <div className="flex p-1 bg-slate-200/80 rounded-lg shrink-0 gap-1 self-start">
                <button
                  onClick={() => setActiveTab("query")}
                  id="tab-query-console"
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === "query"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  Search & Legal Consultation
                </button>
                <button
                  onClick={() => setActiveTab("document")}
                  id="tab-document-analyzer"
                  className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === "document"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Case Document Analyzer
                </button>
              </div>

              {/* Status Note */}
              <div className="text-[11px] text-slate-500 font-sans flex items-center gap-1.5 px-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Standard models: <strong className="text-slate-700">gemini-3.5-flash</strong></span>
              </div>
            </div>

            {/* TAB CONTENT: QUERY & RESEARCH CONSOLE */}
            {activeTab === "query" && (
              <div className="p-5 flex-1 flex flex-col gap-4">
                <form onSubmit={(e) => handleLegalSearch(e)} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      id="search-input-box"
                      type="text"
                      placeholder="Ask any question, describe an incident, or type a section number (e.g., 'What is cheating and fraud PPC 420?')..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 pl-10 pr-4 py-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans shadow-inner placeholder-slate-400"
                    />
                    {searchQuery && (
                      <button 
                        type="button" 
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <button
                    id="search-submit-btn"
                    type="submit"
                    disabled={isSearching}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all shrink-0 disabled:opacity-50"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Gavel className="w-4 h-4" />
                        Query AI
                      </>
                    )}
                  </button>
                </form>

                {/* Pre-suggested quick queries */}
                <div className="space-y-1.5" id="suggested-queries-box">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block font-mono">
                    💡 Suggested Statutory Inquiries
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUERIES.map((sq, i) => (
                      <button
                        key={i}
                        id={`suggested-q-${i}`}
                        onClick={() => {
                          setSearchQuery(sq);
                          handleLegalSearch(undefined, sq);
                        }}
                        className="text-xs bg-slate-50 hover:bg-indigo-50/50 hover:text-indigo-900 text-slate-700 text-left px-3 py-1.5 rounded-lg border border-slate-200 transition-all font-sans cursor-pointer hover:border-indigo-200"
                      >
                        {sq}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Query Result Display Stage */}
                {searchResult && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="mt-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col"
                    id="search-result-stage"
                  >
                    
                    {/* Header bar of query report */}
                    <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4.5 h-4.5 text-indigo-600" />
                        <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-800">
                          AI Counsel Research Report
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => copyToClipboard(searchResult)}
                          className="px-2.5 py-1 text-xs text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-md border border-slate-200 flex items-center gap-1 transition-all"
                        >
                          {copiedText ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-550 text-emerald-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy Brief
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => setSearchResult(null)}
                          className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-650"
                          title="Clear Result"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Result Content */}
                    <div className="p-5 overflow-y-auto max-h-[480px] legal-markdown prose prose-sm text-slate-800 bg-white">
                      {renderMarkdown(searchResult)}
                    </div>

                    {/* Footer list of referenced statutory cards detected */}
                    {detectedSections.length > 0 && (
                      <div className="p-3 bg-indigo-50/25 border-t border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-indigo-900 tracking-wider block mb-2 font-mono">
                          📌 DIRECTLY MATCHED STATUTORY REFERENCE:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {detectedSections.map((sec) => (
                            <button
                              key={sec.id}
                              onClick={() => setSelectedSection(sec)}
                              className="text-xs bg-white hover:bg-indigo-50 text-indigo-950 px-3 py-1.5 rounded border border-indigo-150 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                            >
                              <Scale className="w-3.5 h-3.5 text-indigo-600" />
                              PPC-{sec.section}: {sec.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </motion.div>
                )}
              </div>
            )}

            {/* TAB CONTENT: CASE DOCUMENT ANALYZER */}
            {activeTab === "document" && (
              <div className="p-5 flex-1 flex flex-col gap-4">
                
                {/* Visual Onboarding Case Document Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Pasting area */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700 font-sans" htmlFor="case-text-area">
                      Paste Legal Complaint, Court Narratives, or F.I.R. Details:
                    </label>
                    <textarea
                      id="case-text-area"
                      rows={5}
                      placeholder="Pasted court transcripts, FIR summaries, or criminal charge summaries here..."
                      value={pastedCaseText}
                      onChange={(e) => setPastedCaseText(e.target.value)}
                      className="w-full bg-slate-50 p-3 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-sans resize-y placeholder-slate-450"
                    />
                  </div>

                  {/* Uploading zone */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-slate-700 font-sans">
                      Upload Incident Report Photo / PDF Scans (Multimodal Scan):
                    </span>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`flex-1 min-h-[120px] rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all ${
                        attachedFile 
                          ? "border-emerald-400 bg-emerald-50/20" 
                          : "border-slate-300 hover:border-indigo-500 bg-slate-50 hover:bg-slate-100/50"
                      }`}
                      id="file-dropzone"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*,text/*,application/pdf"
                        className="hidden"
                      />
                      
                      {attachedFile ? (
                        <div className="space-y-1 text-center">
                          <div className="inline-block p-2 bg-emerald-100 rounded-full text-emerald-700 shadow-sm mb-1">
                            <FileCheck className="w-6 h-6" />
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 truncate max-w-xs">{attachedFile.name}</h4>
                          <p className="text-[10px] text-slate-500 font-mono">Size: {attachedFile.size} | {attachedFile.mimeType.split("/")[1]?.toUpperCase()}</p>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearDocument();
                            }}
                            className="text-[10px] text-rose-600 hover:underline block mx-auto font-sans"
                          >
                            Remove File
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1 text-center">
                          <UploadCloud className="w-8 h-8 text-indigo-500 mx-auto" />
                          <h4 className="text-xs font-bold text-slate-700">Drag & drop or Click to Upload</h4>
                          <p className="text-[10px] text-slate-500 font-sans leading-normal max-w-xs mx-auto mt-0.5">
                            Supports scanned photos of FIRs (JPG/PNG OCR scans) or document text files (.txt, .md)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Templates pre-load section */}
                <div className="space-y-1.5" id="templates-loading-box">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block font-mono">
                    📑 Immediate FIR & Narrative Templates for Analysis
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {CASE_TEMPLATES.map((temp, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setPastedCaseText(temp.text);
                          setAttachedFile(null); // Clear manual attached file to prioritize selection text
                        }}
                        className="text-xs bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-250 text-slate-800 text-left p-2.5 rounded-lg border border-slate-200 transition-all font-sans cursor-pointer flex flex-col justify-between shadow-sm"
                      >
                        <span className="font-bold block tracking-tight mb-1 text-slate-800 text-[11px]">{temp.label}</span>
                        <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{temp.text}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions button */}
                <div className="flex gap-2.5 justify-end mt-2">
                  {(pastedCaseText || attachedFile) && (
                    <button
                      onClick={clearDocument}
                      className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1 transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset Workspace
                    </button>
                  )}
                  <button
                    onClick={handleCaseAnalysis}
                    disabled={isAnalyzing || (!pastedCaseText.trim() && !attachedFile)}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        AI Parsing Case Files...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        Analyze Case Document & FIR
                      </>
                    )}
                  </button>
                </div>

                {/* Case Analysis outcome workspace */}
                {analysisResult && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="mt-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col"
                    id="analysis-result-stage"
                  >
                    
                    {/* Header bar of query report */}
                    <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4.5 h-4.5 text-indigo-600" />
                        <span className="text-xs font-bold font-display uppercase tracking-wider text-slate-800">
                          AI Document Mapping & Penal Assessment Report
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => copyToClipboard(analysisResult)}
                          className="px-2.5 py-1 text-xs text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-md border border-slate-200 flex items-center gap-1 transition-all"
                        >
                          {copiedText ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-555 text-emerald-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              Copy Brief
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => setAnalysisResult(null)}
                          className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600"
                          title="Clear Result"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Assessment Report Text */}
                    <div className="p-5 overflow-y-auto max-h-[500px] legal-markdown prose prose-sm text-slate-800 bg-white">
                      {renderMarkdown(analysisResult)}
                    </div>

                    {/* Matched offline references cards */}
                    {analysisMatchedSections.length > 0 && (
                      <div className="p-3 bg-indigo-50/25 border-t border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-indigo-900 tracking-wider block mb-2 font-mono">
                          🛡️ LOCAL DATABASE CODIFIED MATCHES:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {analysisMatchedSections.map((sec) => (
                            <button
                              key={sec.id}
                              onClick={() => setSelectedSection(sec)}
                              className="text-xs bg-white hover:bg-indigo-50 text-indigo-950 px-3 py-1.5 rounded border border-indigo-150 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                            >
                              <Scale className="w-3.5 h-3.5 text-indigo-600" />
                              PPC-{sec.section}: {sec.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                  </motion.div>
                )}

              </div>
            )}

          </div>

        </main>

      </div>

      {/* FOOTER METADATA */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 border-t border-slate-800 shrink-0 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <p className="font-sans">
            PPC Legal Assistant is an AI-powered academic and litigation research interface for the <strong>Pakistan Penal Code (XLV of 1860)</strong>.
          </p>
          <p className="text-[11px] text-slate-500 leading-normal max-w-3xl mx-auto font-sans">
            Designed for Advocates, legal researchers, law students, and researchers. AI-generated responses are sourced from digitized penal records and historical statutory texts. Always double-check references in original printed official government gazettes before legal submissions.
          </p>
          <p className="text-[11px] text-indigo-400 font-sans font-medium">
            © 2026 Pakistan Legal Research Alliance. Refined litigation counseling.
          </p>
        </div>
      </footer>

    </div>
  );
}
