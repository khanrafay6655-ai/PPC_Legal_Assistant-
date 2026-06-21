export interface PPCSection {
  id: string;
  section: string;
  title: string;
  chapter: string;
  definition: string;
  punishment: string;
  keyPoints: string[];
  relatedSections: string[];
  keywords: string[];
  urduTitle?: string;
  urduDefinition?: string;
  urduPunishment?: string;
}

export const PPC_DATABASE: PPCSection[] = [
  // --- CHAPTER I: INTRODUCTION ---
  {
    id: "1",
    section: "1",
    title: "Title and extent of operation of the Code",
    urduTitle: "مجموعہ کا نام اور اس کے نفاذ کی حد",
    chapter: "Chapter I: Introduction",
    definition: "This Act shall be called the Pakistan Penal Code, and shall take effect throughout Pakistan.",
    urduDefinition: "یہ قانون 'مجموعہ تعزیرات پاکستان' کہلائے گا، اور یہ پورے پاکستان میں نافذ العمل ہو گا۔",
    punishment: "Not applicable (Scope declaration).",
    urduPunishment: "قابلِ اطلاق نہیں (دائرہ کار کا اعلان)۔",
    keyPoints: ["Applicable throughout Pakistan", "Enacted as XLV of 1860"],
    relatedSections: ["2", "3", "4"],
    keywords: ["title", "jurisdiction", "lex loci", "pakistan", "scope", "territory", "extent"]
  },
  {
    id: "2",
    section: "2",
    title: "Punishment of offences committed within Pakistan",
    urduTitle: "داخلِ پاکستان جرائم پر سزا",
    chapter: "Chapter I: Introduction",
    definition: "Every person shall be liable to punishment under this Code and not otherwise for every act or omission contrary to the provisions thereof, of which he shall be guilty within Pakistan.",
    urduDefinition: "ہر شخص پاکستان کی حدود کے اندر اس مجموعہ کی دفعات کی خلاف ورزی کرنے والے کسی بھی فعل یا ترک فعل کے لیے سزا کا حقدار ہو گا۔",
    punishment: "Punished under relevant section guidelines.",
    urduPunishment: "متعلقہ جرم کے تحت قانون کے مطابق سزا دی جائے گی۔",
    keyPoints: ["Covers citizens and foreigners alike", "Territorial jurisdiction"],
    relatedSections: ["1", "3", "4"],
    keywords: ["offence", "guilty", "punishment", "territory", "jurisdiction", "act", "omission"]
  },
  {
    id: "4",
    section: "4",
    title: "Extension of Code to extra-territorial offences",
    urduTitle: "ملک سے باہر کے جرائم پر دائرہ کار کا اطلاق",
    chapter: "Chapter I: Introduction",
    definition: "The provisions of this Code apply also to any offence committed by any citizen of Pakistan or public servant in the service of Pakistan in any place without and beyond Pakistan, or on any ship or aircraft registered in Pakistan.",
    urduDefinition: "پاکستان سے باہر یا کسی بھی رجسٹرڈ شدہ پاکستانی جہاز یا طیارے پر جرم کرنے والے کسی بھی پاکستانی شہری یا سرکاری ملازم پر اس قانون کا اطلاق ہو گا۔",
    punishment: "Tried in Pakistan as if committed locally.",
    urduPunishment: "پاکستان میں مقدمہ چلایا جائے گا اور قانونی کارروائی ہو گی۔",
    keyPoints: ["Extra-territorial application", "Applies to registered vessels", "Includes cyber and remote offense intents"],
    relatedSections: ["3", "5"],
    keywords: ["extra-territorial", "citizen", "aircraft", "ship", "abroad", "foreign", "uganda", "london"]
  },

  // --- CHAPTER II: GENERAL EXPLANATIONS ---
  {
    id: "9",
    section: "9",
    title: "Number",
    urduTitle: "واحد اور جمع (تعداد)",
    chapter: "Chapter II: General Explanations",
    definition: "Unless the contrary appears from the context, words importing the singular number include the plural number, and words importing the plural number include the singular number.",
    urduDefinition: "جب تک کہ سیاق و سباق سے اس کے برعکس ظاہر نہ ہو، واحد الفاظ میں جمع شامل ہے اور جمع الفاظ میں واحد شامل ہے۔",
    punishment: "Not applicable (General explanation of statutory interpretation).",
    urduPunishment: "قابلِ اطلاق نہیں (قانونی مفہوم کی تشریح)۔",
    keyPoints: ["Words in singular include plural", "Words in plural include singular", "Applies unless contrary intent is shown from the context"],
    relatedSections: ["8", "10", "11"],
    keywords: ["number", "singular", "plural", "interpretation", "definitions", "context", "grammar"]
  },
  {
    id: "17",
    section: "17",
    title: "Government",
    urduTitle: "حکومت کی تعریف",
    chapter: "Chapter II: General Explanations",
    definition: "The word 'Government' denotes the person or persons authorized by law to administer executive government in Pakistan, or in any part thereof.",
    urduDefinition: "لفظ 'حکومت' سے مراد وہ شخص یا اشخاص ہیں جو پاکستان یا اس کے کسی حصے میں انتظامی حکومت چلانے کے لیے قانوناً مجاز ہوں۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریف کا حوالہ)۔",
    keyPoints: ["Denotes lawful executive authority", "Applies to provincial, federal, or local government executive tiers", "Covers legal representatives of state authority"],
    relatedSections: ["14", "19", "21"],
    keywords: ["government", "authority", "executive", "state", "administration", "pakistan", "governance"]
  },
  {
    id: "22",
    section: "22",
    title: "Movable property",
    urduTitle: "منقولہ جائیداد کی تعریف",
    chapter: "Chapter II: General Explanations",
    definition: "The words 'movable property' are intended to include corporal property of every description, except land and things attached to the earth or permanently fastened to anything which is attached to the earth.",
    urduDefinition: "لفظ 'منقولہ جائیداد' سے مراد ہر قسم کی ظاہری مادی جائیداد ہے، سوائے زمین اور زمین کے ساتھ جڑی ہوئی یا مستقل طور پر نصب شدہ چیزوں کے۔",
    punishment: "Not applicable (General explanatory reference used for theft/mischief/property crimes).",
    urduPunishment: "قابلِ اطلاق نہیں (چوری، نقضِ امن اور جائیداد کے متعلقہ جرائم کے لیے تعریف)۔",
    keyPoints: ["Includes all tangible, corporal and physical property", "Excludes land and permanent attachments to soil", "Essential threshold definition for offences such as Theft (Section 378)"],
    relatedSections: ["378", "403", "405", "425"],
    keywords: ["movable property", "property", "theft", "tangible", "corporal", "land", "earth"]
  },
  {
    id: "21",
    section: "21",
    title: "Public servant",
    urduTitle: "سرکاری ملازم کی تعریف",
    chapter: "Chapter II: General Explanations",
    definition: "The words 'public servant' denote a person falling under descriptions including Judges, police officers, commissioned military officers, and government administrators.",
    urduDefinition: "لفظ 'سرکاری ملازم' سے مراد عدالتی کارندے، ججز، پولیس اہلکار، فوجی افسران اور حکومتی افسرداران ہیں۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریف)۔",
    keyPoints: ["Wide safety network for state agents", "Critical in public corruptions cases"],
    relatedSections: ["161", "188", "409"],
    keywords: ["public servant", "judge", "police", "officer", "government", "state", "servant"]
  },
  {
    id: "34",
    section: "34",
    title: "Acts done by several persons in furtherance of common intention",
    urduTitle: "مشترکہ نیت کے تحت کئی اشخاص کے افعال",
    chapter: "Chapter II: General Explanations",
    definition: "When a criminal act is done by several persons, in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.",
    urduDefinition: "جب کوئی مجرمانہ فعل کئی اشخاص مل کر اپنی مشترکہ نیت کو پورا کرنے کے لیے کریں، تو ان میں سے ہر ایک شخص اس فعل کا اسی طرح ذمہ دار ہوگا جیسے وہ اکیلے اسی نے کیا ہو۔",
    punishment: "No separate punishment. It is applied in conjunction with other substantive offences (e.g., Section 302/34 PPC) to charge all participants.",
    urduPunishment: "کوئی الگ سزا نہیں ہے۔ یہ دفعہ جرم کے دیگر بڑے دفعات کے ساتھ ملا کر لگائی جاتی ہے (مثلاً 302/34) تاکہ تمام شرکاء کو برابر سزا دی جا سکے۔",
    keyPoints: [
      "Common intention is pre-arranged plan or prior meeting of minds",
      "Active participation, physical or constructive, is required",
      "Joint liability applies for the aggregate result of the act"
    ],
    relatedSections: ["109", "149", "120-B"],
    keywords: ["common intention", "joint liability", "sharakat", "group crime", "together", "aid", "unlawful assembly"]
  },
  {
    id: "46",
    section: "46",
    title: "Death",
    urduTitle: "موت کی تعریف",
    chapter: "Chapter II: General Explanations",
    definition: "The word 'death' denotes the death of a human being, unless the contrary appears from the context.",
    urduDefinition: "لفظ 'موت' سے مراد کسی انسان کی موت ہے، جب تک کہ سیاق و سباق سے اس کے برعکس ظاہر نہ ہو۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریف کا حوالہ)۔",
    keyPoints: ["Refers exclusively to human death in this statutory context", "Used broadly across offences affecting body and homicide (e.g. Qatl)"],
    relatedSections: ["45", "299", "300"],
    keywords: ["death", "human", "demise", "mote", "homicide", "life", "end"]
  },
  {
    id: "50",
    section: "50",
    title: "Section",
    urduTitle: "دفعہ (سیکشن) کی تعریف",
    chapter: "Chapter II: General Explanations",
    definition: "The word 'Section' denotes one of those portions of a Chapter of this Code which are distinguished by prefixed numeral figures.",
    urduDefinition: "لفظ 'دفعہ' (سیکشن) سے مراد اس مجموعہ کے کسی باب کا وہ حصہ ہے جسے عددی ہندسوں سے ممتاز کیا گیا ہو۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریف کا حوالہ)۔",
    keyPoints: ["Represents numbered fragments/articles under chapters", "Used for citations and legal references throughout courts"],
    relatedSections: ["49", "51", "52"],
    keywords: ["section", "dafah", "number", "clause", "provision", "statute", "citation"]
  },

  // --- CHAPTER III: OF PUNISHMENTS ---
  {
    id: "53",
    section: "53",
    title: "Punishments",
    urduTitle: "سزاؤں کی اقسام",
    chapter: "Chapter III: Of Punishments",
    definition: "Defines punishments: Qisas, Diyat, Arsh, Daman, Ta'zir, Death, Imprisonment for life, Imprisonment (rigorous/simple), Forfeiture of property, and Fine.",
    urduDefinition: "تعزیراتِ پاکستان کے تحت سزاؤں کی اقسام: قصاص، دیت، ارش، دمان، تعزیر، موت، عمر قید، قید، ضبطگیِ جائیداد اور جرمانہ۔",
    punishment: "Core penal guidelines.",
    urduPunishment: "بنیادی جزائی رہنمائی۔",
    keyPoints: ["Reflects statutory Islamic amendments", "Sets ground scales of penalties"],
    relatedSections: ["54", "55", "299"],
    keywords: ["punishment", "saza", "qisas", "diyat", "arsh", "daman", "tazir", "jail", "death", "fine"]
  },

  // --- CHAPTER IV: GENERAL EXCEPTIONS ---
  {
    id: "76",
    section: "76",
    title: "Act done by a person bound, or by mistake of fact believing himself bound, by law",
    urduTitle: "قانون کے پابند شخص کا فعل یا غلطیِ واقعہ کے تحت اقدام",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done by a person who is, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith believes himself to be, bound by law to do it.",
    urduDefinition: "کوئی بات جرم نہیں ہے جو ایسے شخص سے سرزد ہو جو اس کے کرنے کا پابند ہو یا نیک نیتی سے غلطیِ واقعہ کے تحت خود کو پابند سمجھتا ہو۔",
    punishment: "Complete legal immunity.",
    urduPunishment: "مکمل قانونی تحفظ اور بریت۔",
    keyPoints: ["Defense applies to mistake of fact, NOT mistake of law", "Act must be done in good faith"],
    relatedSections: ["79"],
    keywords: ["mistake of fact", "good faith", "bound by law", "exception", "soldier firing"]
  },
  {
    id: "80",
    section: "80",
    title: "Accident in doing a lawful act",
    urduTitle: "جائز کام کے دوران حادثہ",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution.",
    urduDefinition: "کوئی بات جرم نہیں جو جائز طریقے سے کام کرتے ہوئے حادثاتی طور پر بغیر کسی مجرمانہ نیت کے سرزد ہو۔",
    punishment: "Complete exemption from criminal liability.",
    urduPunishment: "مجرمانہ ذمہ داری سے مکمل استثناء۔",
    keyPoints: ["Absence of criminal intent", "Proper care and caution must be exercised", "Act itself must be lawful"],
    relatedSections: ["81"],
    keywords: ["accident", "lawful act", "without intent", "caution", "hadsa"]
  },
  {
    id: "82",
    section: "82",
    title: "Act of a child under seven years of age",
    urduTitle: "سات سال سے کم عمر بچے کا فعل",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done by a child under seven years of age (Doli incapax).",
    urduDefinition: "سات سال سے کم عمر کے بچے کا کوئی بھی فعل جرم کے زمرے میں نہیں آتا۔",
    punishment: "Absolute statutory immunity.",
    urduPunishment: "بچے کو مکمل تعزیری معافی اور تحفظ حاصل ہے۔",
    keyPoints: ["Absolute presumption of innocence", "Presumed incapable of intent"],
    relatedSections: ["83"],
    keywords: ["child", "infancy", "under seven", "doli incapax", "bacha", "innocent", "minor"]
  },
  {
    id: "83",
    section: "83",
    title: "Act of a child above seven and under twelve of immature understanding",
    urduTitle: "سات سے بارہ سال تک کے ناپختہ سمجھ بوجھ کے بچے کا فعل",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done by a child above seven years of age and under twelve, who has not attained sufficient maturity of understanding to judge of the nature and consequences of his conduct on that occasion.",
    urduDefinition: "سات سے بارہ سال کے ایسے بچے کا فعل جرم نہیں ہوگا جس نے اپنے فعل کے نتائج پر غور کرنے کی صلاحیت حاصل نہ کی ہو۔",
    punishment: "Exempt from punishment if immaturity is established.",
    urduPunishment: "ناپختہ سمجھ بوجھ ثابت ہونے پر مواخذہ سے معافی۔",
    keyPoints: ["Discretionary immunity", "Requires evaluation of mental maturity"],
    relatedSections: ["82"],
    keywords: ["child", "under twelve", "immature understanding", "minority", "exception"]
  },
  {
    id: "84",
    section: "84",
    title: "Act of a person of unsound mind",
    urduTitle: "پاگل یا غیر مستحکم دماغ شخص کا فعل",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law (McNaughten Rule).",
    urduDefinition: "وہ فعل جرم تصور نہیں ہوگا جو کوئی ایسا شخص کرے جو ذہنی معذوری کے باعث اس فعل کی نوعیت کو سمجھنے کی صلاحیت نہ رکھتا ہو۔",
    punishment: "Complete acquittal on grounds of insanity.",
    urduPunishment: "ذہنی معذوری ثابت ہونے پر تعزیری سزا سے بریت۔",
    keyPoints: ["Insanity defense must be proven at time of offense", "Cognitive incapacity is key"],
    relatedSections: ["85", "86"],
    keywords: ["insanity", "unsound mind", "madness", "mental", "disease", "pagal", "lunatic"]
  },
  {
    id: "96",
    section: "96",
    title: "Things done in private defence",
    urduTitle: "حقِ حفاظتِ خود اختیاری (دفاعِ ذاتی)",
    chapter: "Chapter IV: General Exceptions",
    definition: "Nothing is an offence which is done in the exercise of the right of private defence.",
    urduDefinition: "کوئی بھی ایسا فعل جرم نہیں مانا جائے گا جو اپنے ذاتی دفاع یا جائیداد کی حفاظت کے حق کا استعمال کرتے ہوئے کیا جائے۔",
    punishment: "Complete justification; No liability.",
    urduPunishment: "قانونی طور پر مکمل تحفظ اور معافی۔",
    keyPoints: ["Natural right to defend body and property", "Subject to limitations of Section 99"],
    relatedSections: ["97", "100", "103"],
    keywords: ["private defence", "self defence", "defense", "protect", "injury", "hifazat", "fight"]
  },
  {
    id: "99",
    section: "99",
    title: "Acts against which there is no right of private defence",
    urduTitle: "وہ افعال جن کے خلاف دفاع کا حق حاصل نہیں",
    chapter: "Chapter IV: General Exceptions",
    definition: "There is no right of private defence against acts of public servants acting in good faith under color of office, and in cases where there is time to have recourse to public authorities.",
    urduDefinition: "کسی سرکاری افسر کے نیک نیتی سے کیے گئے اقدام کے خلاف دفاع حاصل نہیں ار اگر پولیس سے رجوع کرنے کا وقت موجود ہو۔",
    punishment: "Restrictions on self-defence limits.",
    urduPunishment: "دفاعِ ذاتی کے حق پر عائد حدود۔",
    keyPoints: ["No right of private defence against public servants unless apprehension of death/grievous hurt", "Proportional force constraint"],
    relatedSections: ["96", "100", "103"],
    keywords: ["private defence restrictions", "time to appeal", "proportional force", "police", "limitations"]
  },
  {
    id: "100",
    section: "100",
    title: "When the right of private defence of the body extends to causing death",
    urduTitle: "کب اپنے دفاع کا حق دوسرے کی موت واقع کرنے تک بڑھ جاتا ہے",
    chapter: "Chapter IV: General Exceptions",
    definition: "The right of private defence of body extends to causing death if the assault raises reasonable apprehension of death, grievous hurt, rape, kidnapping, or wrongful confinement.",
    urduDefinition: "ذاتی دفاع کا حق موت واقع کرنے تک جا سکتا ہے اگر حملہ آور سے جان کا خطرہ، زیادتی، شدید چوٹ، یا اغوا کا اندیشہ ہو۔",
    punishment: "Completely justified homicide; No penalty.",
    urduPunishment: "جائز اقدامِ قتل؛ کوئی سزا نہیں۔",
    keyPoints: ["Assault must create major risk of body mutilation or death", "Immediate danger required"],
    relatedSections: ["96", "99", "103"],
    keywords: ["justified death", "kill in self defence", "lethal force", "imminent threat", "rape defence"]
  },

  // --- CHAPTER V: OF ABETMENT ---
  {
    id: "107",
    section: "107",
    title: "Abetment of a thing",
    urduTitle: "جرم کی اعانت (اکساوا، اعانت یا مدد)",
    chapter: "Chapter V: Of Abetment",
    definition: "A person abets the doing of a thing who instigates any person to do it, engages in a conspiracy to do it, or intentionally aids the doing of it.",
    urduDefinition: "جو کوئی کسی شخص کو جرم کی ترغیب دے، سازش میں ملوث ہو، یا دانستہ طور پر جرم کی تکمیل میں مدد کرے۔",
    punishment: "Defined under Section 109 based on the committed offence.",
    urduPunishment: "اعانت کی سزا دفعہ 109 کے مروجہ نرخ کے تحت ہوتی ہے۔",
    keyPoints: ["Three modes: Instigation, Conspiracy, Intentionally Aiding", "Accomplice liability"],
    relatedSections: ["34", "109", "120-A"],
    keywords: ["abetment", "instigate", "aided", "conspiracy", "accomplice", "helper", "sazish", "saholatkar"]
  },
  {
    id: "109",
    section: "109",
    title: "Punishment of abetment if the act abetted is committed in consequence",
    urduTitle: "جرم کی اعانت پر وہی سزا جو اصل مجرم کی ہے",
    chapter: "Chapter V: Of Abetment",
    definition: "Whoever abets any offence shall, if the act abetted is committed in consequence of the abetment, be punished with the punishment provided for the offence.",
    urduDefinition: "جو کوئی کسی جرم کی اعانت کرتا ہے، اگر وہ جرم اعانت کے نتیجے میں واقع ہو جائے، تو اسے اسی جرم کی سزا دی جائے گی۔",
    punishment: "Same punishment as prescribed for the principal offence abetted.",
    urduPunishment: "وہی سزا جو بنیادی جرم کے ارتکاب پر مقرر ہے۔",
    keyPoints: [
      "The crime must actually take place as a result of the abetment",
      "Often used alongside main offences (e.g., 302/109 PPC)"
    ],
    relatedSections: ["34", "120-B", "114"],
    keywords: ["abetment", "instigate", "conspiracy", "aiding", "sazish", "saholatkar", "facilitator", "accomplice"]
  },

  // --- CHAPTER V-A: CRIMINAL CONSPIRACY ---
  {
    id: "120-A",
    section: "120-A",
    title: "Definition of criminal conspiracy",
    urduTitle: "مجرمانہ سازش کی تعریف",
    chapter: "Chapter V-A: Criminal Conspiracy",
    definition: "When two or more persons agree to do, or cause to be done, an illegal act or an act which is not illegal by illegal means.",
    urduDefinition: "جب دو یا دو سے زائد اشخاص مل کر کسی غیر قانونی کام کو کرنے کا، یا کسی جائز کام کو غیر قانونی طریقے سے کرنے کا باقاعدہ معاہدہ کریں۔",
    punishment: "Defined under Section 120-B.",
    urduPunishment: "دفعہ 120B کے تحت سزا دی جاتی ہے۔",
    keyPoints: ["Agreement itself is the core element", "Minimum two minds required"],
    relatedSections: ["107", "120-B"],
    keywords: ["conspiracy", "agreement", "illegal", "collusion", "alliance", "sazish"]
  },
  {
    id: "120-B",
    section: "120-B",
    title: "Punishment of criminal conspiracy",
    urduTitle: "مجرمانہ سازش کی سزا",
    chapter: "Chapter V-A: Criminal Conspiracy",
    definition: "Whoever is a party to a criminal conspiracy to commit offenses punishable with death, life imprisonment, or rigorous imprisonment >= 2 years, shall be punished as an abettor of such offense.",
    urduDefinition: "جو کوئی ایسی سازش کا حصہ بنے گا اسے جرم کے ابیٹر (اعانت کار) کے برابر ہی سزا دی جائے گی۔",
    punishment: "Same as if the accused abetted the offence, or up to 6 months imprisonment or fine for minor offenses.",
    urduPunishment: "بڑے جرم کی سازش پر اسی جرم کی مروجہ سزا، معمولی جرم پر 6 ماہ تک قید یا جرمانہ۔",
    keyPoints: ["Joint accountability applies to conspirators", "Applies regardless of actual crime completion"],
    relatedSections: ["120-A", "121", "302"],
    keywords: ["conspiracy", "punishment", "conspirators", "collusion", "sazish saza"]
  },

  // --- CHAPTER VI: OF OFFENCES AGAINST THE STATE ---
  {
    id: "121",
    section: "121",
    title: "Waging or attempting to wage war against Pakistan",
    urduTitle: "پاکستان کے خلاف جنگ چھیڑنا یا کوشش کرنا",
    chapter: "Chapter VI: Of Offences Against the State",
    definition: "Whoever wages war against Pakistan, or attempts to wage such war, or abets the waging of such war, shall be punished with death, or imprisonment for life and shall also be liable to fine.",
    urduDefinition: "جو کوئی پاکستان کی ریاست کے خلاف ہتھیار اٹھائے یا جنگ کی کوشش کرے، اسے سزائے موت یا عمر قید دی جائے گی۔",
    punishment: "Death, or Imprisonment for life, and shall also be liable to fine.",
    urduPunishment: "موت، یا عمر قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: ["Treason and active armed rebellion", "No concession for state agents involved"],
    relatedSections: ["121-A", "122", "124-A"],
    keywords: ["wage war", "treason", "rebellion", "baghawat", "state defense", "pakistan"]
  },
  {
    id: "124-A",
    section: "124-A",
    title: "Sedition",
    urduTitle: "بغاوت (غداری / فتنہ انگیزی)",
    chapter: "Chapter VI: Of Offences Against the State",
    definition: "Whoever by words, spoken or written, or by signs, brings into hatred or contempt, or excites or attempts to excite disaffection towards the Federal or Provincial Government established by law.",
    urduDefinition: "جو کوئی زبان یا قلم کے ذریعے قانونی طور پر قائم حکومتِ پاکستان کے خلاف نفرت یا غداری کو ابھارے۔",
    punishment: "Imprisonment for life to which fine may be added, or imprisonment up to three years with fine, or fine.",
    urduPunishment: "عمر قید، یا تین سال تک قید ساتھ جرمانہ۔",
    keyPoints: ["Constitutional free speech boundaries conflict", "Must contain instigation to violence as per judicial reviews"],
    relatedSections: ["121", "153-A"],
    keywords: ["sedition", "hatred", "baghawat", "government opposition", "disloyalty"]
  },
  {
    id: "125",
    section: "125",
    title: "Waging war against any Asiatic Power in alliance with Pakistan",
    urduTitle: "پاکستان کے حلیف کسی ایشیائی ملک کے خلاف جنگ کرنا",
    chapter: "Chapter VI: Of Offences Against the State",
    definition: "Whoever wages war against the Government of any Asiatic Power in alliance or at peace with Pakistan, or attempts to wage such war, or abets the waging of such war, shall be punished.",
    urduDefinition: "جو کوئی پاکستان کی حلیف یا خلوت پسند ایشیائی ریاست کی حکومت کے خلاف جنگ چھیڑے گا، یا ایسی جنگ چھیڑنے کی کوشش کرے گا، یا اس کی اعانت کرے گا۔",
    punishment: "Imprisonment for life, to which fine may be added, or with imprisonment of either description for a term which may extend to seven years, to which fine may be added, or with fine.",
    urduPunishment: "عمر قید، یا سات سال تک قید کی سزا اور جرمانہ، یا صرف جرمانہ۔",
    keyPoints: [
      "Foreign state must be situated in Asia",
      "Foreign state must be in active treaty alliance or peace relations with Pakistan",
      "Criminalized to maintain foreign relations stability and prevent state territory from being used for proxy wars"
    ],
    relatedSections: ["121", "126", "127"],
    keywords: ["asiatic power", "alliance", "waging war", "foreign relations", "peace treaty", "diplomatic"]
  },

  // --- CHAPTER VIII: OF OFFENCES AGAINST THE PUBLIC TRANQUILLITY ---
  {
    id: "141",
    section: "141",
    title: "Unlawful assembly",
    urduTitle: "غیر قانونی اجتماع کی تعریف",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "An assembly of five or more persons is designated an 'unlawful assembly' if their common object is to overawe government by force, resist law execution, commit mischief, or force unlawful acts.",
    urduDefinition: "پانچ یا پانچ سے زائد افراد کا ایسا مجمع جس کا مشترکہ مقصد طاقت کا غیر قانونی استعمال، ہنگامہ آرائی یا سرکاری امور میں مداخلت ہو۔",
    punishment: "Defined under Section 143.",
    urduPunishment: "سزا دفعہ 143 کے تحت دی جاتی ہے۔",
    keyPoints: ["Requires exactly 5 or more people", "Shared common object element parameter"],
    relatedSections: ["143", "147", "149"],
    keywords: ["unlawful assembly", "assembly", "protest", "mob", "rally", "illegal assembly", "mela", "hujoom"]
  },
  {
    id: "143",
    section: "143",
    title: "Punishment for Unlawful Assembly",
    urduTitle: "غیر قانونی مجمع میں شمولیت کی سزا",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "Whoever is a member of an unlawful assembly shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both.",
    urduDefinition: "جو کوئی کسی غیر قانونی مجمع کا رکن بنے گا اسے چہ ماہ تک کی جیل یا جرمانہ کیا جائے گا۔",
    punishment: "Imprisonment of either description up to six months, or with fine, or with both.",
    urduPunishment: "چہ ماہ تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: ["Mere presence with knowledge of unlawful object is enough", "Often read with Section 144 (armed resistance)"],
    relatedSections: ["141", "144", "149"],
    keywords: ["unlawful assembly saza", "arrest", "jalsa", "march", "clash"]
  },
  {
    id: "144",
    section: "144",
    title: "Joining unlawful assembly armed with deadly weapon",
    urduTitle: "مسلح حالت میں غیر قانونی مجمع میں شمولیت",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "Whoever, being armed with any deadly weapon, or with anything which, used as a weapon of offence, is likely to cause death, is a member of an unlawful assembly.",
    urduDefinition: "جو کوئی کسی غیر قانونی مجمع میں اسلحہ، چھڑی، یا کسی مہلک چیز کے ساتھ شامل ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، جرمانہ، یا دونوں سزائیں۔",
    keyPoints: ["Aggravated public disturbance offense", "Must possess a weapon likely to kill"],
    relatedSections: ["141", "143", "148"],
    keywords: ["deadly weapon", "armed protesters", "arms", "riot prep", "riot"]
  },
  {
    id: "147",
    section: "147",
    title: "Punishment for rioting",
    urduTitle: "ہنگامہ آرائی اور بلوہ کی سزا",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "Whoever is guilty of rioting shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduDefinition: "بلوہ یا ہنگامہ آرائی کرنے پر دو سال تک قید کی سزا یا جرمانہ دیا جائے گا۔",
    punishment: "Imprisonment of either description up to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Rioting occurs when force/violence is used by an unlawful assembly", "Public damage core factor"],
    relatedSections: ["146", "148"],
    keywords: ["rioting", "violence", "force", "damage", "public property clash", "balwah"]
  },
  {
    id: "148",
    section: "148",
    title: "Rioting, armed with deadly weapon",
    urduTitle: "مسلح بلوہ (اسلحہ کے ساتھ ہنگامہ آرائی)",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "Whoever is guilty of rioting, being armed with a deadly weapon or with anything which, used as a weapon of offence, is likely to cause death.",
    urduDefinition: "مہلک ہتھیار کے ساتھ لیس ہو کر ہنگامہ آرائی یا توڑ پھوڑ کرنا۔",
    punishment: "Imprisonment of either description for up to three years, or with fine, or with both.",
    urduPunishment: "تین سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["More severe than standard rioting (147)", "Active combat state"],
    relatedSections: ["144", "147", "149"],
    keywords: ["riot deadly weapon", "vandalism with guns", "mob violence"]
  },
  {
    id: "149",
    section: "149",
    title: "Every member of unlawful assembly guilty of offence committed in prosecution of common object",
    urduTitle: "مشترکہ مقصد کے تحت مجمع کا ہر رکن جرم کا برابر ذمہ دار",
    chapter: "Chapter VIII: Of Offences Against the Public Tranquillity",
    definition: "If an offence is committed by any member of an unlawful assembly in prosecution of the common object of that assembly, every person who is a member is guilty of that offence.",
    urduDefinition: "اگر غیر قانونی مجمع کا کوئی بھی رکن مجمع کے مشترکہ مقصد کے تحت کوئی جرم کرے، تو ہر موجود رکن اس جرم کا مساوی ذمہ دار مانا جائے گا۔",
    punishment: "Same punishment as prescribed for the substantive offence committed.",
    urduPunishment: "وہی سزا جو اس ارتکاب شدہ جرم کی مقررہ حد ہو۔",
    keyPoints: ["Constructive dynamic group criminal liability", "Distinguished from Section 34 (Common object vs Intention)"],
    relatedSections: ["34", "141", "302"],
    keywords: ["unlawful assembly", "common object", "group crime", "liability", "rally", "mob murder"]
  },

  // --- CHAPTER IX: OF OFFENCES BY OR RELATING TO PUBLIC SERVANTS ---
  {
    id: "161",
    section: "161",
    title: "Public servant taking gratification other than legal remuneration in respect to an official act",
    urduTitle: "سرکاری ملازم کا رشوت یا ناجائز فائدہ حاصل کرنا",
    chapter: "Chapter IX: Of Offences By or Relating to Public Servants",
    definition: "Acceptance by a public servant of any gratification other than legal remuneration, as a motive or reward for doing or forbearing to do any official act.",
    urduDefinition: "کسی سرکاری افسر کا اپنی تنخواہ کے علاوہ کسی مد میں پیسے، رشوت یا تحائف وصول کرنا تاکہ وہ کوئی سرکاری کام کرے یا روکے۔",
    punishment: "Imprisonment of either description up to three years, or with fine, or with both.",
    urduPunishment: "تین سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: ["Bribe-taking, corruption, kickbacks", "Must be related to official duties"],
    relatedSections: ["162", "165", "NAB Ordinance"],
    keywords: ["bribery", "corruption", "bribe", "kickback", "private gratification", "public corruption", "rishwat"]
  },
  {
    id: "170",
    section: "170",
    title: "Personating a public servant",
    urduTitle: "سرکاری ملازم کا روپ دھارنا (جعلسازی)",
    chapter: "Chapter IX: Of Offences By or Relating to Public Servants",
    definition: "Whoever pretends to hold any particular office as a public servant, knowing that he does not hold such office, and does any act under such assumed character.",
    urduDefinition: "خود کو جھوٹا سرکاری افسر (مثلاً نام نہاد پولیس اے ایس آئی یا مجسٹریٹ) ظاہر کرنا اور رعب جھاڑنا۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، جرمانہ، یا دونوں سزائیں۔",
    keyPoints: ["Fake public officials check", "Requires an overt act in that fake role"],
    relatedSections: ["171", "419"],
    keywords: ["impersonation", "fake police", "personating officer", "fraud ranger", "pretend"]
  },

  // --- CHAPTER X: CONTEMPTS OF LAWFUL AUTHORITY ---
  {
    id: "188",
    section: "188",
    title: "Disobedience to order duly promulgated by public servant",
    urduTitle: "سرکاری افسر کے جاری کردہ حکم کی نافرمانی (دفعہ 144)",
    chapter: "Chapter X: Of Contempts of the Lawful Authority of Public Servants",
    definition: "Disobedience to an order lawfully promulgated by a public servant directing to abstain from a certain act or to take certain order with certain property in his possession or under his management.",
    urduDefinition: "کسی سرکاری ملازم کی طرف سے قانونی طور پر جاری کردہ حکم کی نافرمانی کرنا، جس کا مقصد نقص امن یا جان مال کے خطرے کو روکنا ہو۔ (عام طور پر دفعہ 144 کی خلاف ورزی پر لاگو ہوتی ہے)۔",
    punishment: "Simple imprisonment for up to 1 month or fine up to Rs. 600. If such disobedience causes danger to human life, health, or safety, imprisonment up to 6 months or fine up to Rs. 3,000, or both.",
    urduPunishment: "سادہ قید جو ایک ماہ تک ہو سکتی ہے یا جرمانہ۔ اگر نافرمانی سے انسانی جان، صحت یا حفاظت کو خطرہ لاحق ہو تو قید 6 ماہ تک یا جرمانہ 3,000 روپے یا دونوں۔",
    keyPoints: [
      "The order must be lawfully promulgated by a legally empowered public servant",
      "Often applied in violations of Section 144 CrPC (assembly bans)"
    ],
    relatedSections: ["144 (CrPC)", "143"],
    keywords: ["disobedience", "public servant", "section 144", "government order", "violation", "nafarmani", "unlawful assembly"]
  },

  // --- CHAPTER XI: OF FALSE EVIDENCE AND OFFENCES AGAINST PUBLIC JUSTICE ---
  {
    id: "191",
    section: "191",
    title: "Giving false evidence",
    urduTitle: "جھوٹی گواہی دینا (عدالت میں جھوٹ بولنا)",
    chapter: "Chapter XI: Of False Evidence and Offences Against Public Justice",
    definition: "Whoever, being legally bound by an oath or express provision of law to state the truth, makes any statement which is false, and which he knows or believes to be false.",
    urduDefinition: "حلف اٹھا کر عدالت یا کسی اتھارٹی کے سامنے شعوری طور پر کذب بیانی اور جھوٹا بیان ریکارڈ کروانا۔",
    punishment: "Defined under Section 193.",
    urduPunishment: "سزا دفعہ 193 کے تحت مقرر ہے۔",
    keyPoints: ["Requires legal obligation to state truth", "Perjury core element"],
    relatedSections: ["192", "193", "201"],
    keywords: ["perjury", "false evidence", "lying under oath", "jhooti gawahi", "court fraud"]
  },
  {
    id: "193",
    section: "193",
    title: "Punishment for false evidence",
    urduTitle: "جھوٹی گواہی یا شواہد تیار کرنے کی سزا",
    chapter: "Chapter XI: Of False Evidence and Offences Against Public Justice",
    definition: "Whoever intentionally gives false evidence in any stage of a judicial proceeding, or fabricates false evidence for that purpose.",
    urduDefinition: "عدالتی کارروائی کے دوران دانستہ طور پر جھوٹے ثبوت پیش کرنے یا جھوٹی گواہی دینے کی سزا۔",
    punishment: "Imprisonment of either description up to seven years, and shall also be liable to fine. Outside court, up to three years with fine.",
    urduPunishment: "عدالت میں سات سال تک قید اور جرمانہ۔ باہر کے معاملات میں تین سال تک قید اور جرمانہ۔",
    keyPoints: ["Fabrication and false statements", "Severe threat to judicial integrity"],
    relatedSections: ["191", "194", "195"],
    keywords: ["perjury punishment", "fabricating evidence", "false witness", "court jail", "jhoota sabot"]
  },
  {
    id: "202",
    section: "202",
    title: "Intentional omission to give information of offence by person bound to inform",
    urduTitle: "جرم کی اطلاع دینے کا پابند شخص غفلت برتے یا دیدہ و دانستہ چھپائے",
    chapter: "Chapter XI: Of False Evidence and Offences Against Public Justice",
    definition: "Whoever, knowing or having reason to believe that an offence has been committed, intentionally omits to give any information respecting that offence which he is legally bound to give, shall be punished.",
    urduDefinition: "جو کوئی یہ جانتے ہوئے یا یقین کرنے کی معقول وجہ رکھتے ہوئے کہ کوئی جرم سرزد ہوا ہے، جان بوجھ کر اس جرم کے بارے میں کوئی بھی معلومات فراہم کرنے سے گریز کرے جسے فراہم کرنے کا وہ قانوناً پابند ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to six months, or with fine, or with both.",
    urduPunishment: "چھ ماہ تک قید، یا جرمانہ، یا دونوں سزائیں۔",
    keyPoints: [
      "The person must have actual knowledge or reason to believe an offence occurred",
      "Must be legally bound by law to inform authorities of such offence",
      "The omission to inform must be intentional"
    ],
    relatedSections: ["176", "201", "203"],
    keywords: ["intentional omission", "withholding information", "hide crime", "police report", "bound to inform"]
  },

  // --- CHAPTER XII: COIN AND STAMPS ---
  {
    id: "230",
    section: "230",
    title: "Coin defined",
    urduTitle: "سکہ کی قانونی تعریف",
    chapter: "Chapter XII: Of Offences Relating to Coin and Government Stamps",
    definition: "Coin is metal used for the time being as money, stamped and issued by the authority of state sovereignty.",
    urduDefinition: "سکہ سے مراد وہ دھات ہے جو زرِ مبادلہ یا کرنسی کے طور پر ریاست کے حکم سے جاری کی گئی ہو۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریف)۔",
    keyPoints: ["Distinct from unstamped base metals", "Currency regulations context"],
    relatedSections: ["231", "232"],
    keywords: ["currency definition", "coin", "metal money", "rupee detail"]
  },
  {
    id: "232",
    section: "232",
    title: "Counterfeiting Pakistan coin",
    urduTitle: "پاکستانی جعلی سکے تیار کرنا (کرنسی کی جعل سازی)",
    chapter: "Chapter XII: Of Offences Relating to Coin and Government Stamps",
    definition: "Whoever counterfeits, or knowingly performs any part of the process of counterfeiting Pakistan coin.",
    urduDefinition: "جو کوئی دیدہ و دانستہ طور پر پاکستانی سکے کا چربہ اتارے یا جعلی سکے بنانے کا کوئی عمل انجام دے۔",
    punishment: "Imprisonment for life, or with imprisonment of either description for up to ten years, and fine.",
    urduPunishment: "عمر قید، یا دس سال تک قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: ["Counterfeit physical metal", "Economic security offenses"],
    relatedSections: ["230", "235", "489-A"],
    keywords: ["counterfeiting", "fake coins", "jaali currency", "mint fraud"]
  },
  {
    id: "245",
    section: "245",
    title: "Unlawfully taking coining instrument from mint",
    urduTitle: "ٹکسال سے سکہ سازی کا آلہ یا مشین غیر قانونی طور پر باہر لے جانا",
    chapter: "Chapter XII: Of Offences Relating to Coin and Government Stamps",
    definition: "Whoever, without lawful authority, takes out of any mint, any coining tool, instrument, or engine, shall be punished.",
    urduDefinition: "جو کوئی قانونی مجاز ہوئے بغیر کسی ٹکسال (سرکاری مِقدارِ گاہ) سے کوئی بھی سکہ سازی کا آلہ، اوزار یا مشین باہر لے جائے گا۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "سات سال تک قید اور جرمانہ۔",
    keyPoints: [
      "No actual coining is required to trigger this offence",
      "Taking coining instruments/dies from a state mint is criminalized per se",
      "Protects monetary and coin minting integrity against counterfeit operations"
    ],
    relatedSections: ["235", "244", "246"],
    keywords: ["mint", "coining instrument", "dies", "taking tool", "unauthorized removal", "token maker"]
  },

  // --- CHAPTER XIV: PUBLIC HEALTH, SAFETY, CODES ---
  {
    id: "268",
    section: "268",
    title: "Public nuisance",
    urduTitle: "عوامی خلل / پبلک نیوسینس",
    chapter: "Chapter XIV: Public Health and Safety",
    definition: "A person is guilty of a public nuisance who does any act or is guilty of an illegal omission which causes any common injury, danger or annoyance to the public.",
    urduDefinition: "معاشرے یا عوام میں کسی ایسے عمل یا کوتاہی کا مرتکب ہونا جس سے گلی، محلے یا رہائشیوں کو خطرہ، تکلیف یا خلل پہنچے۔",
    punishment: "Defined under Section 290 with fine.",
    urduPunishment: "سزا دفعہ 290 کے تحت فائن ہوتی ہے۔",
    keyPoints: ["Does not require specific victim", "Affects environment, safety or public space"],
    relatedSections: ["269", "290", "291"],
    keywords: ["public nuisance", "noise pollution", "street blocking", "environmental damage", "takleef"]
  },
  {
    id: "270",
    section: "270",
    title: "Malignant act likely to spread infection of disease dangerous to life",
    urduTitle: "جان بوجھ کر یا دشمنی میں کوئی ایسا فعل کرنا جس سے زندگی کے لیے مہلک بیماری پھیلنے کا خطرہ ہو",
    chapter: "Chapter XIV: Public Health and Safety",
    definition: "Whoever malignantly does any act which is, and which he knows or has reason to believe to be, likely to spread the infection of any disease dangerous to life, shall be punished.",
    urduDefinition: "جو کوئی عناد اور شرارت انگیز طور پر کوئی ایسا فعل کرے گا جس کے بارے میں وہ جانتا ہو یا یقین کرنے کی وجہ رکھتا ہو کہ اس سے زندگی کے لیے خطرناک کسی بیماری کا انفیکشن پھیلنے کا خدشہ ہے۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، یا جرمانہ، یا دونوں سزائیں۔",
    keyPoints: [
      "The act must be done 'malignantly' (with malicious, active ill-will or deliberate intent to harm)",
      "The disease must be dangerous to human life",
      "Requires actual knowledge or reason to believe that the act is likely to infect others"
    ],
    relatedSections: ["269", "271"],
    keywords: ["malignant act", "infection spread", "contagious disease", "life threat", "quarantine", "biosecurity", "epidemic"]
  },
  {
    id: "279",
    section: "279",
    title: "Rash driving or riding on a public way",
    urduTitle: "شاہراہ عام پر تیز رفتاری یا غفلت سے گاڑی چلانا",
    chapter: "Chapter XIV: Public Health and Safety",
    definition: "Whoever drives any vehicle, or rides, on any public way in a manner so rash or negligent as to endanger human life, or to be likely to cause hurt or injury.",
    urduDefinition: "جو کوئی سڑک پر ایسی تیز رفتاری یا غفلت سے موٹر سائیکل یا گاڑی چلائے جس سے قیمتی انسانی جان خطرے میں پڑے۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine up to Rs. 1,000, or with both.",
    urduPunishment: "دو سال تک قید، یا ایک ہزار روپے تک جرمانہ، یا دونوں۔",
    keyPoints: ["Endangering life is the gist", "No actual hit is needed, potential threat is enough"],
    relatedSections: ["280", "337-G", "320"],
    keywords: ["rash driving", "reckless driving", "speeding", "negligent driving", "tezz raftari", "accident"]
  },
  {
    id: "290",
    section: "290",
    title: "Punishment for public nuisance in cases not otherwise provided for",
    urduTitle: "عامی خلل کی عمومی سزا",
    chapter: "Chapter XIV: Public Health and Safety",
    definition: "Whoever commits a public nuisance in any case not otherwise punishable by this Code.",
    urduDefinition: "کسی ایسے عوامی خلل کی سزا جس کا تذکرہ دیگر دفعات میں نہ ہو۔",
    punishment: "Fine which may extend to six hundred rupees.",
    urduPunishment: "چہ سو روپے تک جرمانہ۔",
    keyPoints: ["Catch-all nuisance regulation", "Fines-only rule"],
    relatedSections: ["268", "291"],
    keywords: ["nuisance fine", "street fight noise", "loudspeaker", "misconduct"]
  },
  {
    id: "292",
    section: "292",
    title: "Sale, etc., of obscene books, etc.",
    urduTitle: "فحش کتابوں، تصاویر یا مواد کی فروخت اور تشہیر",
    chapter: "Chapter XIV: Public Health and Safety",
    definition: "Importing, exporting, selling, distributing, or producing obscene literature, books, pamphlets, paintings, or sexual depictions.",
    urduDefinition: "معاشرے میں فحاشی پھیلانے والی کتابیں، ننگی تصاویر، رسائل یا مخرب اخلاق ڈیجیٹل مواد کی فروخت یا کاروبار کرنا۔",
    punishment: "Imprisonment of either description for a term which may extend to three months, or with fine, or with both.",
    urduPunishment: "تین ماہ تک قید، جرمانہ، یا دونوں سزائیں۔",
    keyPoints: ["Excludes bona fide religious art or medical texts", "Aesthetic morality standard"],
    relatedSections: ["293", "294"],
    keywords: ["obscenity", "pornography", "obscene books", "fahashi", "adult content sale"]
  },

  // --- CHAPTER XV: OF OFFENCES RELATING TO RELIGION ---
  {
    id: "295",
    section: "295",
    title: "Injuring or defiling place of worship, with intent to insult the religion of any class",
    urduTitle: "عبادت گاہ کی بے حرمتی کرنا",
    chapter: "Chapter XV: Of Offences Relating to Religion",
    definition: "Destroying, damaging or defiles any place of worship, or any object held sacred, with intent to insult any class's religion.",
    urduDefinition: "کسی بھی مذہب کے ماننے والوں کی عبادت گاہ (مسجد، مندر، گرجا گھر) یا مقدس تبرک کو نقصان پہنچانا۔",
    punishment: "Imprisonment of either description for up to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: ["Intention/knowledge of emotional hurt crucial", "Applies to minorities and majority alike"],
    relatedSections: ["295-A", "295-B", "295-C"],
    keywords: ["church desecration", "temple attack", "defiling sacred object", "religion insult", "masjid damage"]
  },
  {
    id: "295-A",
    section: "295-A",
    title: "Deliberate and malicious acts intended to outrage religious feelings of any class",
    urduTitle: "مذہبی جذبات مجروح کرنے کے دانستہ اقدامات",
    chapter: "Chapter XV: Of Offences Relating to Religion",
    definition: "Deliberate and malicious intention of outraging the religious feelings of any class of citizens, by words, spoken or written, or by visible representations, insulting its religion or religious beliefs.",
    urduDefinition: "شعوری طور پر کسی بھی فرقے یا طبقے کے مذہبی جذبات کو بھڑکانا یا ان کے عقائد کی توہین کرنا۔",
    punishment: "Imprisonment of either description for up to ten years, or with fine, or with both.",
    urduPunishment: "دس سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Requires deliberate malice", "High threshold of intent needed for conviction"],
    relatedSections: ["295", "295-C", "153-A"],
    keywords: ["hate speech", "religious outrage", "sectarian incitement", "touheen-e-mazhab"]
  },
  {
    id: "295-B",
    section: "295-B",
    title: "Defiling, etc., of Holy Qur'an",
    urduTitle: "قرآن پاک کی بے حرمتی کی سزا",
    chapter: "Chapter XV: Of Offences Relating to Religion",
    definition: "Whoever wilfully defiles, damages or desecrates a copy of the Holy Qur'an or of an extract therefrom or uses it in any derogatory manner.",
    urduDefinition: "جو کوئی بھی جان بوجھ کر قرآن مجید کے صفحات یا مقدس اوراق کی توہین یا بے حرمتی کرے یا جلانے کا مرتکب ہو۔",
    punishment: "Imprisonment for life.",
    urduPunishment: "عمر قید کی سزا مقرر ہے۔",
    keyPoints: ["Desecration of Islamic holy text", "Wilful act requirement"],
    relatedSections: ["295", "2950-C"],
    keywords: ["quran desecration", "defiling holy book", "life imprisonment", "religious offense"]
  },
  {
    id: "295-C",
    section: "295-C",
    title: "Use of derogatory remarks in respect of the Holy Prophet",
    urduTitle: "نبی کریم ﷺ کی شان میں گستاخی کی سزا",
    chapter: "Chapter XV: Of Offences Relating to Religion",
    definition: "Whoever by words, spoken or written, or by visible representation, or by any imputation, directly or indirectly, defiles the sacred name of the Holy Prophet Muhammad (peace be upon him).",
    urduDefinition: "جو کوئی تقریر، تحریر، اشاروں یا کسی اشارے کنائے کے ذریعے نبی کریم حضرت محمد مصطفیٰ ﷺ کے نامِ مبارک کی گستاخی کرے۔",
    punishment: "Death and shall also be liable to fine.",
    urduPunishment: "سزائے موت اور ساتھ ہی جرمانہ عائد کیا جائے گا۔",
    keyPoints: ["Absolute non-bailable capital offense in Pakistan", "Triable exclusively by Sessions/High Court"],
    relatedSections: ["295-A", "295-B"],
    keywords: ["derogatory remarks", "blasphemy", "blasphemy law", "gustakhi saza", "decree", "religious offense", "religion"]
  },

  // --- CHAPTER XVI: OF OFFENCES AFFECTING THE HUMAN BODY ---
  {
    id: "299",
    section: "299",
    title: "Definitions (Adult, Arsh, Daman, Diyet, Qisas, Tazir)",
    urduTitle: "دیگر اصطلاحات کی تعریف (قصاص، دیت، ارش، دمان، تعزیر)",
    chapter: "Chapter XVI: Offences Affecting the Human Body",
    definition: "Establishes definitions under Islamic penal amendments: 'Adult' (age 18), 'Arsh' (specified compensation), 'Daman' (discretionary hurt fine), 'Diyat' (blood money), 'Qisas' (equal retaliation), and 'Tazir' (state-legislated punishments).",
    urduDefinition: "قصاص، دیت، ارش، دمان اور تعزیر کی قانونی تعریف اور حتیں بتاتا ہے۔",
    punishment: "Not applicable (Definition reference).",
    urduPunishment: "قابلِ اطلاق نہیں (تعریفی ضابطہ)۔",
    keyPoints: ["Integrates shariah legal criteria containing blood money into statutory law", "Standard parameters of compensation"],
    relatedSections: ["53", "323", "337-Y"],
    keywords: ["arsh", "daman", "diyat", "blood money", "qisas definition", "definition adult"]
  },
  {
    id: "300",
    section: "300",
    title: "Qatl-e-Amd (Definition of Intentional Murder)",
    urduTitle: "قتلِ عمد کی قانونی تعریف",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever, with the intention of causing death or bodily injury likely to cause death, does an act which causes death, commits Qatl-e-Amd.",
    urduDefinition: "کوئی بھی شخص جو جان بوجھ کر، موت واقع کرنے کی نیت سے یا ایسی مہلک ضرب لگانے کی نیت سے کوئی ایسا فعل کرے جو جان لے لے، وہ قتلِ عمد کا مرتکب ہوتا ہے۔",
    punishment: "Defined under Section 302.",
    urduPunishment: "اس کی سزا دفعہ 302 کے تحت دی جاتی ہے۔",
    keyPoints: ["Intention to cause death", "Knowledge of imminent danger to life"],
    relatedSections: ["301", "302", "324"],
    keywords: ["intent", "murder", "qatl", "qatl-e-amd", "killing", "homicide"]
  },
  {
    id: "301",
    section: "301",
    title: "Culpable homicide by causing death of person other than person whose death was intended",
    urduTitle: "مطلوبہ شخص کے بجائے کسی دوسرے شخص کی موت کا سبب بن کر قتلِ عمد کا ارتکاب",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "If a person, by doing anything which he intends or knows to be likely to cause death, commits culpable homicide by causing the death of any person, whose death he neither intends nor knows himself to be likely to cause, the culpable homicide committed by the offender is of the description of which it would have been if he had caused the death of the person whose death he intended or knew himself to be likely to cause.",
    urduDefinition: "اگر کوئی شخص کسی ایسے شخص کی موت کا سبب بن کر قتلِ عمد کا مرتکب ہو جس کا اقدام وہ نہیں چاہتا تھا، تو اس کا جرم اسی نوعیت کا تصور کیا جائے گا گویا اس نے اسی شخص کی موت واقع کی ہو جس کا ارادہ اس نے کیا تھا۔ (یہ 'منتقلی نیت' کا اصول کہلاتا ہے)۔",
    punishment: "Same punishment as provided for Qatl-i-Amd (Section 302) or the intended offence under this Code.",
    urduPunishment: "وہی سزا جو ارادہ کیے گئے قتل کے لیے تجویز کی گئی ہو (جیسے دفعہ 302 کے تحت بطور قتلِ عمد سزا)۔",
    keyPoints: [
      "Incorporates the 'Doctrine of Transfer of Malice'",
      "Applies when the target misses and an innocent bystander or another person gets killed",
      "The degree of liability remains identical as if the intended target had died"
    ],
    relatedSections: ["300", "302", "324"],
    keywords: ["transfer of malice", "culpable homicide", "intended victim", "bystander death", "accident death intent", "homicide transfer"]
  },
  {
    id: "302",
    section: "302",
    title: "Punishment of qatl-i-amd",
    urduTitle: "قتلِ عمد کی سزا",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever commits qatl-e-amd shall, subject to provisions be: (a) punished with death as qisas; (b) punished with death or imprisonment for life as ta'zir; (c) punished with imprisonment up to 25 years where qisas is not applicable.",
    urduDefinition: "جو کوئی قتلِ عمد का مجرم ہو گا اسے: (الف) بطور قصاص موت؛ (ب) بطور تعزیر موت یا عمر قید؛ یا (ج) پچیس سال تک قید کی سزا مل سکتی ہے۔",
    punishment: "Death as Qisas, or Death/Life Imprisonment as Ta'zir, or up to 25 years rigorous imprisonment.",
    urduPunishment: "موت بطور قصاص، یا موت/عمر قید بطور تعزیر، یا 25 سال تک قیدِ بامشقت۔",
    keyPoints: [
      "Requires clear intention to cause death",
      "Distinguished from Qatl-i-Shibh-i-Amd and Qatl-i-Khata",
      "Compounding under Diyat allows heirs of the deceased to pardon"
    ],
    relatedSections: ["300", "309", "310", "324"],
    keywords: ["murder", "qatl", "killing", "death", "qisas", "diyat", "intentional murder", "homicide", "kill"]
  },
  {
    id: "309",
    section: "309",
    title: "Waiver (Afw) of qisas in qatl-i-amd",
    urduTitle: "قصاص کا معاف کرنا (عفو)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "An adult sane heir (wali) of the deceased may, at any time and without any compensation, forgive and waive his right of qisas against the convict.",
    urduDefinition: "مقتول کا عاقل بالغ وارث بغیر کسی دباؤ یا مالی معاوضے کے قاتل کا قصاص معاف کرنے کا حق رکھتا ہے۔",
    punishment: "Leads to waiver of death penalty; state may still apply Ta'zir scaling.",
    urduPunishment: "قصاص کی موت معاف؛ تاہم عدالت فتنہ و فساد ختم کرنے کے لیے تعزیری قید دے سکتی ہے۔",
    keyPoints: ["Must be voluntary", "Underage/insane wali cannot waive", "State retains tazir discretion"],
    relatedSections: ["302", "310", "311"],
    keywords: ["forgiveness", "exemption from qisas", "reconciliation", "wali pardoning"]
  },
  {
    id: "310",
    section: "310",
    title: "Compounding of qisas (Sulh) in qatl-i-amd",
    urduTitle: "قصاص کی صلح (صلح نامہ مع مالی معاوضہ)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "The wali may compromise the case of murder on accepting Badl-i-Sulh (mutually agreed settlement or property value), which must not be less than the minimum Diyet.",
    urduDefinition: "قانون کے وارثان بدلہ یا دیت کی رقم (مالِ صلح) قبول کر کے قاتل کے ساتھ صلح نامہ داخل کر سکتے ہیں۔",
    punishment: "Compounding ends the qisas liability; court approves the compromise paper.",
    urduPunishment: "قصاص کا دعویٰ خارج؛ صلح نامہ عدالت سے منظور کروایا جاتا ہے۔",
    keyPoints: ["Female cannot be given in marriage as badl-i-sulh", "Settlement amount bound by minimum limits"],
    relatedSections: ["302", "309", "323"],
    keywords: ["settlement", "compromise paper", "badl-i-sulh", "raza nama", "sulh"]
  },
  {
    id: "315",
    section: "315",
    title: "Qatl Shibh-i-Amd",
    urduTitle: "قتلِ شبہ عمد (حادثاتی یا نیم ارادی قتل)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever, with intent to cause bodily/mental injury, causes the death of another using a weapon or act which is not likely to cause death in the ordinary course of nature.",
    urduDefinition: "ضرب یا مار پیٹ کے ارادے سے مارنا مگر ایسا سامان استعمال کرنا جس سے عام طور پر موت واقع نہیں ہوتی (مثلاً ٹوٹی چھڑی یا سوٹی مارنا) مگر اس چوٹ سے موت واقع ہو جائے۔",
    punishment: "Liable to pay Diyat to heirs, and may also be punished with imprisonment up to fourteen years as Ta'zir.",
    urduPunishment: "مقتول کے ورثاء کو دیت کی ادائیگی، اور ساتھ ہی تعزیری قید جو چودہ سال تک ہو سکتی ہے۔",
    keyPoints: ["No intent to murder", "Lethal design absent but violent physical dispute happened"],
    relatedSections: ["300", "316", "323"],
    keywords: ["shibh-i-amd", "accidental hit murder", "fatal beating"]
  },
  {
    id: "318",
    section: "318",
    title: "Qatl-i-Khata",
    urduTitle: "قتلِ خطاء (غلطی سے قتل ہونا)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever, without any intention to cause death of, or cause harm to, a person, causes the death of such person by mistake of act or mistake of fact.",
    urduDefinition: "بغیر کسی بری نیت کے غلطی کی وجہ سے کسی کی جان لے لینا (مثلاً ہرن کا نشانہ لیتے ہوئے گولی انسان کو لگ جانا)۔",
    punishment: "Saza defined in Section 319: Liable to pay Diyat to heirs.",
    urduPunishment: "دیت کی ورثاء کو مکمل شرعی ادائیگی۔",
    keyPoints: ["Total absence of malice or target intent", "Mistake of fact, not negligence"],
    relatedSections: ["319", "320", "323"],
    keywords: ["mistake death", "accidental fire hunter", "khata murder"]
  },
  {
    id: "320",
    section: "320",
    title: "Punishment for qatl-i-khata by rash or negligent driving",
    urduTitle: "غفلت سے گاڑی چلاتے ہوئے حادثاتی قتل کی سزا",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever commits qatl-i-khata by rash or negligent driving shall, in addition to paying Diyat, be punished under Ta'zir.",
    urduDefinition: "غفلت اور بدحواسی سے تیز رفتار گاڑی چلا کر کسی راہگیر یا شخص کو کچل کر ہلاک کرنا۔",
    punishment: "Liable to pay Diyat, and also punished with imprisonment of either description up to ten years as Ta'zir.",
    urduPunishment: "دیت کی د ادائیگی، اور ساتھ ہی تعزیری قید جو دس سال تک ہو سکتی ہے۔",
    keyPoints: ["Extremely common in traffic grid accidents", "Direct evaluation of speed negligence"],
    relatedSections: ["279", "318", "319", "323"],
    keywords: ["traffic crash death", "negligent drive hit", "accident fine auto", "diyat traffic"]
  },
  {
    id: "324",
    section: "324",
    title: "Attempt to commit qatl-e-amd (Attempted Murder)",
    urduTitle: "اقدامِ قتل (قتل کی کوشش)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever does any act with such intention or knowledge, and under such circumstances, that, if he by that act caused qatl, he would be guilty of qatl-e-amd.",
    urduDefinition: "جو کوئی کسی ایسی نیت یا علم کے ساتھ ایسا فعل کرے کہ اگر اس سے موت واقع ہو جاتی تو وہ قتلِ عمد کا مجرم ہوتا، تو وہ اقدامِ قتل کا مجرم ہے۔",
    punishment: "Imprisonment of either description up to 10 years, and fine. If hurt is caused, the offender is additionally liable to the punishment of the hurt caused (Arsh/Daman).",
    urduPunishment: "10 سال تک قید اور جرمانہ۔ اگر چوٹ آئی ہو، تو ملزم پر چوٹ کی متعلقہ دفعات کے تحت دمان یا ارش کا جرمانہ بھی عائد ہوگا۔",
    keyPoints: [
      "Requires intention and an overt act towards committing deliberate murder",
      "Physical injury is not mandatory to make an attempt, but if hurt occurs, additional penalties apply",
      "Extremely common in criminal FIRs alongside Section 302"
    ],
    relatedSections: ["302", "337", "511"],
    keywords: ["attempted murder", "iqdam-e-qatl", "shooting", "attack", "firing", "assault with intent to kill"]
  },
  {
    id: "337",
    section: "337",
    title: "Shajjah / Hurt (Bodily Injuries definition)",
    urduTitle: "شجاج / ضربات (سر یا چہرے کا زخم یا جسمانی چوٹ)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Hurt is divided into Shajjah (injuries on head or face) and Jurh (injuries on other parts of the body). Subsections like 337-A (Shajjah-i-Khafifah, etc.), 337-F (Ghalyarah, Damighah, etc.) define degrees of bodily damage.",
    urduDefinition: "کسی انسان کو تکلیف، بیماری، زخم یا معذوری پہنچانا۔ سر اور چہرے کے زخموں کو شجاج اور جسم کے دیگر حصوں کے زخموں کو جرح کہا جاتا ہے۔",
    punishment: "Varies from monetary compensation (Daman and Arsh) to imprisonment for up to 10 years depending on severity (e.g., Shajjah-i-Khafifah is up to 2 years, Shajjah-i-Mudihah is up to 5 years with 5% Diyet Arsh).",
    urduPunishment: "زخمی ہونے کی نوعیت کے مطابق تعزیر (قید جو 2 سے 10 سال تک ہو سکتی ہے) اور جرمانہ (دمان یا ارش جو دیت کا فیصد مقرر ہوتا ہے)۔",
    keyPoints: [
      "Shajjah-i-Khafifah: simple hurt on head/face (no exposition of bone) - up to 2 years",
      "Shajjah-i-Mudihah: bone exposed but not fractured - up to 5 years + 5% Diyet Arsh",
      "Shajjah-i-Hashimah: fracture of bone without displacement - up to 5 years + 10% Diyet Arsh",
      "Shajjah-i-Munaqqilah: fracture with displacement of bone - up to 7 years + 15% Diyet Arsh"
    ],
    relatedSections: ["324", "337-A", "337-F", "337-L"],
    keywords: ["hurt", "injury", "shajjah", "jurh", "accident", "fracture", "fight", "assault", "wound", "beating", "fight"]
  },

  // --- CHAPTER XVI-A: WRONGFUL RESTRAINT & WRONGFUL CONFINEMENT ---
  {
    id: "339",
    section: "339",
    title: "Wrongful restraint",
    urduTitle: "غیر قانونی روک ٹوک / حبسِ مجرمانہ",
    chapter: "Chapter XVI-A: Wrongful Restraint & Confinement",
    definition: "Whoever voluntarily obstructs any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed.",
    urduDefinition: "کسی شخص کو اس راستے پر جانے سے زبردستی रोकना جس پر جانے کا وہ قانونی حق رکھتا ہو۔",
    punishment: "Punished under Section 341 with simple imprisonment up to 1 month or fine up to Rs. 500, or both.",
    urduPunishment: "دفعہ 341 کے تحت ایک ماہ تک قید، پانچ سو روپے جرمانہ یا دونوں سزائیں۔",
    keyPoints: ["Partial block of freedom", "The way must reside under legitimate access"],
    relatedSections: ["340", "341"],
    keywords: ["restraint", "block path", "illegal restraint", "obstruction road"]
  },
  {
    id: "340",
    section: "340",
    title: "Wrongful confinement",
    urduTitle: "غیر قانونی قید / حبسِ بے جا",
    chapter: "Chapter XVI-A: Wrongful Restraint & Confinement",
    definition: "Whoever wrongfully restrains any person in such a manner as to prevent that person from proceeding beyond certain circumscribing limits.",
    urduDefinition: "کسی شخص کو اس طرح زبردستی قید کر رکھنا کہ وہ اس دائرے یا حد سے باہر نہ نکل سکے۔",
    punishment: "Punished under Section 342 with up to 1 year imprisonment or Rs. 1,000 fine.",
    urduPunishment: "دفعہ 342 کے تحت ایک سال تک قید یا ایک ہزار روپے جرمانہ یا دونوں سزائیں۔",
    keyPoints: ["Restricts liberty completely in all directions", "Unlawful private cells detention"],
    relatedSections: ["339", "341", "342"],
    keywords: ["confinement", "custody", "wrongful confinement", "habeas corpus", "habs-e-beja"]
  },
  {
    id: "342",
    section: "342",
    title: "Punishment for wrongful confinement",
    urduTitle: "غیر قانونی قید کی سزا (حبسِ بے جا)",
    chapter: "Chapter XVI-A: Wrongful Restraint & Confinement",
    definition: "Whoever wrongfully confines any person shall be punished with imprisonment of either description for a term which may extend to one year, or with fine which may extend to [one thousand rupees], or with both.",
    urduDefinition: "کسی کو ناکہ بندی یا کوٹھڑی میں ناجائز بند رکھنے پر ایک سال تک قید اور ایک ہزار روپے جرمانہ۔",
    punishment: "Imprisonment up to one year, or fine up to Rs. 1,000, or both.",
    urduPunishment: "ایک سال تک جیل، جرمانہ، یا دونوں۔",
    keyPoints: ["Severe infraction on civilian fundamental right to travel and liberty", "Often used against private unlawful detentions"],
    relatedSections: ["340", "343", "344"],
    keywords: ["confinement lockup", "kidnap hold", "private arrest"]
  },

  // --- OF CRIMINAL FORCE AND ASSAULT ---
  {
    id: "351",
    section: "351",
    title: "Assault definition",
    urduTitle: "حملہ / زدوکوب کی تعریف",
    chapter: "Chapter XVI-A: Of Wrongful Restraint & Criminal Force",
    definition: "Whoever makes any gesture, or any preparation intending or knowing it to be likely that such gesture or preparation will cause any person present to apprehend that he is about to use criminal force.",
    urduDefinition: "عدالت کی زبان میں حملہ۔ کسی پر ایسا ہاتھ اٹھانا، مکا دکھانا یا اشارہ کرنا جس سے دوسرے کے دل میں خوف بیٹھ جائے کہ اسے نقصان پہنچنے والا ہے۔",
    punishment: "Defined under Section 352 (up to three months imprisonment or fine up to Rs. 500, or both).",
    urduPunishment: "سزا دفعہ 352 کے تحت تین ماہ تک قید، جرمانہ یا دونوں مقرر ہے۔",
    keyPoints: ["No actual physical blow is required", "Apprehension of force in victim's mind is the core element"],
    relatedSections: ["350", "352", "353"],
    keywords: ["assault", "gesture fight", "threaten", "maka dikhana", "criminal force"]
  },
  {
    id: "353",
    section: "353",
    title: "Assault or criminal force to deter public servant from discharge of his duty",
    urduTitle: "پولیس یا سرکاری ملازم پر حملہ کر کے سرکاری کام روکنا",
    chapter: "Chapter XVI-A: Of Wrongful Restraint & Criminal Force",
    definition: "Whoever assaults or uses criminal force to any person being a public servant in the execution of his duty or to prevent him from discharging his duties.",
    urduDefinition: "سرکاری افسران (مثلاً پولیس کانسٹیبل، ت پٹی، ٹریفک کانسٹیبل) پر زبردستی حملہ کرنا یا مار پیٹ کرنا تاکہ ان کے کام میں خلل واقع ہو سکے۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Severe protection for state agents", "Non-bailable and active arrest enforcement under Criminal Procedure Code"],
    relatedSections: ["186", "224", "225"],
    keywords: ["attack police officer", "assaulting magistrate", "stop government work", "clash with rangers", "duty obstruction"]
  },
  {
    id: "354-A",
    section: "354-A",
    title: "Assault or use of criminal force to woman and stripping her of her clothes",
    urduTitle: "خاتون پر حملہ اور برہنہ کرنے کی سزا",
    chapter: "Chapter XVI-A: Of Wrongful Restraint & Criminal Force",
    definition: "Whoever assaults or uses criminal force to any woman and strips her of her clothes, exposing her in public view.",
    urduDefinition: "کوئی شخص کسی عورت پر حملہ کرے، اس کے کپڑے اتارے، پھاڑے یا اسے سرِعام برہنہ حالت میں تذلیل کا نشانہ بنائے۔",
    punishment: "Death or imprisonment for life, and shall also be liable to fine.",
    urduPunishment: "سزائے موت یا عمر قید اور ساتھ ہی بھاری جرمانہ۔",
    keyPoints: ["Severe non-bailable public modesty violation crime", "Special state fast-track courts jurisdiction"],
    relatedSections: ["354", "375", "509"],
    keywords: ["strip clothes", "stripping woman", "abuse", "shame", "public view", "modesty violation", "assault"]
  },

  // --- KIDNAPPING, ABDUCTION ---
  {
    id: "365",
    section: "365",
    title: "Kidnapping or abducting with intent secretly and wrongfully to confine person",
    urduTitle: "اغوا برائے حبس بیجا",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever kidnaps or abducts any person with intent to cause that person to be secretly and wrongfully confined, shall be punished.",
    urduDefinition: "جو کوئی کسی شخص کو اغوا کرے اس نیت سے کہ اسے خفیہ طور پر اور غیر قانونی طور پر قید میں رکھا جائے۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Requires taking a person away without consent or through force/deceit",
      "Intent must be to keep the person unlawfully and secretly confined"
    ],
    relatedSections: ["361", "362", "365-A", "342"],
    keywords: ["kidnapping", "abduction", "hostage", "wrongful confinement", "ighwa", "kidnap", "confinement", "hide"]
  },
  {
    id: "365-A",
    section: "365-A",
    title: "Kidnapping or abducting for extorting property, valuable security, etc.",
    urduTitle: "اغوا برائے تاوان",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever kidnaps or abducts any person for ransom, or to compel the Government or any foreign State, or extort a valuable security or money.",
    urduDefinition: "جو شخص کسی کو تاوان وصول کرنے کے لیے، یا حکومت پر دباؤ ڈالنے کے لیے، یا رقم یا جائیداد حاصل کرنے کے لیے اغوا کرے جس میں موت کا خوف دلایا گیا ہو۔",
    punishment: "Punished with death or imprisonment for life, and shall also be liable to forfeiture of property.",
    urduPunishment: "موت کی سزا یا عمر قید، اور جائیداد کی ضبطگی۔",
    keyPoints: [
      "Severity is extremely high as it is a non-bailable, capital offence under Pakistani laws",
      "Ransom demand is the primary defining factor",
      "Triable by Anti-Terrorism Courts (ATC)"
    ],
    relatedSections: ["365", "383"],
    keywords: ["ransom", "tawan", "kidnap for ransom", "death penalty", "extortion", "terrorist act", "force"]
  },

  // --- OF RAPE & UNNATURAL OFFENCES ---
  {
    id: "376",
    section: "376",
    title: "Punishment for rape (Zina-bil-Jabr)",
    urduTitle: "زنا بالجبیر (عصمت دری) کی سزا",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever commits rape (sexual intercourse with a female without her consent, against her will, or under deception/coercion) shall be punished.",
    urduDefinition: "جو کوئی کسی خاتون کے ساتھ اس کی مرضی یا رضا مندی کے بغیر، یا ڈرا دھمکا کر زبردستی جنسی زیادتی کا مرتکب ہو۔",
    punishment: "Punished with death or imprisonment for life (not less than 10 years and up to 25 years), and liable to fine.",
    urduPunishment: "موت کی سزا یا عمر قید (جو 10 سال سے کم نہ ہوگی اور زیادہ سے زیادہ 25 سال ہو سکتی ہے)، اور جرمانہ مقرر ہے۔ اجتماعی زیادتی کی صورت میں سزا موت یا عمر قید ہے۔",
    keyPoints: [
      "Consent given under fear of death/hurt does not legalise the act",
      "Chemical castration provisions are relevant in persistent updates"
    ],
    relatedSections: ["375", "376(2)"],
    keywords: ["rape", "zina bil jabr", "sexual assault", "abuse", "force", "assault on woman"]
  },
  {
    id: "377",
    section: "377",
    title: "Unnatural offences",
    urduTitle: "غیر فطری جنسی فعل کی سزا (بداخلاقی)",
    chapter: "Chapter XVI: Of Unnatural Offences",
    definition: "Whoever voluntarily has carnal intercourse against the order of nature with any man, woman or animal.",
    urduDefinition: "قدرت کے خلاف غیر فطری جنسی تعلقات استوار کرنا۔",
    punishment: "Imprisonment for life, or with imprisonment of either description for a term which shall not be less than two years nor more than ten years, and fine.",
    urduPunishment: "عمر قید، یا کم از کم دو سال اور زیادہ سے زیادہ دس سال قید، مع جرمانہ۔",
    keyPoints: ["Severe moral offense code", "Requires anatomical proof of penetration"],
    relatedSections: ["375", "376"],
    keywords: ["sodomy", "unnatural act", "carnal intercourse", "minor abuse case", "londabazi"]
  },

  // --- CHAPTER XVII: OF OFFENCES AGAINST PROPERTY ---
  {
    id: "378",
    section: "378",
    title: "Theft",
    urduTitle: "چوری کی قانونی تعریف",
    chapter: "Chapter XVII: Of Offences Against Property",
    definition: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    urduDefinition: "جو شخص بدنیتی کے ساتھ، کسی دوسرے کے جائز منقولہ قبضے سے اس کی رضامندی کے بغیر کوئی جائیداد ہٹائے یا چوری کرے۔",
    punishment: "Saza administered under Section 379.",
    urduPunishment: "سزا دفعہ 379 کے تحت ملتی ہے۔",
    keyPoints: ["Movable property requirement", "Taking out of possession without consent"],
    relatedSections: ["379", "380", "382"],
    keywords: ["theft", "theft definition", "rob", "steal", "stealing", "chori", "property"]
  },
  {
    id: "379",
    section: "379",
    title: "Punishment for Theft (Sarqa)",
    urduTitle: "چوری (سرقہ) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft shall be punished.",
    urduDefinition: "جو کوئی کسی شخص کے قبضے سے کوئی منقولہ جائیداد (مثلاً رقم، گاڑی، موبائل وغیرہ) اس کی مرضی کے بغیر بدنیتی سے لے لے یا اسے منتقل کرے، تو وہ چوری کا مرتکب ہوتا ہے۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "3 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Property must be movable",
      "Taking must be dishonest",
      "Property must be taken out of another person's possession"
    ],
    relatedSections: ["378", "380", "411"],
    keywords: ["theft", "stealing", "rob", "chori", "property", "stolen", "stolen goods", "movable property"]
  },
  {
    id: "380",
    section: "380",
    title: "Theft in dwelling house, etc.",
    urduTitle: "رہائشی مکان یا عمارت میں چوری",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft in any building, tent or vessel, which is used as a human dwelling, or used for the custody of property.",
    urduDefinition: "اگر چوری کسی ایسے مکان، عمارت، خیمے یا کشتی میں کی جائے جو انسانوں کی رہائش کے لیے استعمال ہوتی ہو یا مال کی حفاظت کی جگہ ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Aggravated form of theft",
      "Dwelling requirement crucial"
    ],
    relatedSections: ["379", "457"],
    keywords: ["theft in house", "house theft", "building", "dwelling", "gharoor chori", "home robbery"]
  },
  {
    id: "381-A",
    section: "381-A",
    title: "Theft of a car or other motor vehicles",
    urduTitle: "موٹر کار یا موٹر سائیکل چوری کرنے کی خصوصی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft of a car or any other motor vehicle, including motor-cycle, scooter, tractor, or electric motor of tube-well.",
    urduDefinition: "گاڑی، کار، رکشہ، یا موٹر سائیکل چوری کرنا۔ ٹیوب ویل کا برقی ٹرانسفارمر ہڑپ کرنا بھی اس میں شامل ہے۔",
    punishment: "Imprisonment of either description for up to seven years and fine not exceeding the value of the stolen vehicle.",
    urduPunishment: "سات سال تک قید، اور چوری شدہ گاڑی کی قیمت کے برابر جرمانہ۔",
    keyPoints: ["Severe vehicle theft prevention check", "Special economic crime focus"],
    relatedSections: ["379", "411"],
    keywords: ["car theft", "bike lifter", "motorcycle stealing", "transformer theft", "lifter"]
  },
  {
    id: "382",
    section: "382",
    title: "Theft after preparation made for causing death, hurt or restraint",
    urduTitle: "قتل، چوٹ یا رکاوٹ ڈالنے کی تیاری کے بعد چوری کرنا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft, having made preparation for causing death, or hurt, or restraint, or fear of death or hurt.",
    urduDefinition: "اگر چوری کرنے کے لیے ملزمان نے پہلے سے اپنے پاس اسلحہ، چاقو، یا ایسا سامان رکھا ہو جس سے وہ واردات کے وقت کسی کو قتل کرنے کی نیت رکھتے ہوں۔",
    punishment: "Rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine.",
    urduPunishment: "10 سال تک قیدِ با مشقت اور جرمانہ مقرر ہے۔",
    keyPoints: [
      "Preparation for violent resistance or escape must be proven",
      "Bordering on armed robbery"
    ],
    relatedSections: ["379", "392"],
    keywords: ["armed theft", "violent theft", "theft with weapon", "weapon preparation", "chori ba-aslah"]
  },

  // --- OF EXTORTION ---
  {
    id: "383",
    section: "383",
    title: "Extortion",
    urduTitle: "بھتہ خوری / بلیک میلنگ کی تعریف",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever intentionally puts any person in fear of any injury, and thereby dishonestly induces them to deliver any property or valuable security.",
    urduDefinition: "کسی کو نقصان یا جانی نقصان کا خوف دلا کر اس سے زبردستی پیسے، پروپرٹی یا قیمتی کاغذ دستخط کروانا (بلیک میلنگ اور بھتہ)۔",
    punishment: "Saza defined in Section 384.",
    urduPunishment: "سزا دفعہ 384 کے تحت قید ہوتی ہے۔",
    keyPoints: ["Core elements: Placing in fear + delivery of property", "Distinguished from theft (coercion is active)"],
    relatedSections: ["384", "386", "365-A"],
    keywords: ["extortion", "blackmail", "bhatta", "protection money", "extort"]
  },
  {
    id: "384",
    section: "384",
    title: "Punishment for extortion",
    urduTitle: "بھتہ خوری کی سزا (بلیک میلنگ)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits extortion shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduDefinition: "بھتہ وصول کرنے کی صورت میں تعزیری قید اور جرمانہ۔",
    punishment: "Imprisonment of either description up to three years, or with fine, or with both.",
    urduPunishment: "تین سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Applied to extortion/blackmail cases", "Non-bailable if weapons were utilized"],
    relatedSections: ["383", "385", "387"],
    keywords: ["extortion saza", "bhatta collection", "gang extortion"]
  },

  // --- ROBBERY AND DACOITY ---
  {
    id: "392",
    section: "392",
    title: "Punishment for Robbery (Harabah)",
    urduTitle: "ڈکیتی / لوٹ مار (رہزنی) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "In all robbery there is either theft or extortion. Theft becomes robbery if the offender causes or attempts to cause death, hurt, or wrongful restraint.",
    urduDefinition: "لوٹ مار یا رہزنی۔ اگر چوری کرتے وقت یا لوٹ کا مال لے جاتے ہوئے مجرم متاثرہ شخص کو قتل، زخمی یا حبس بے جا کا فوری خوف دلائے۔",
    punishment: "Rigorous imprisonment for 3 to 10 years, and fine; if committed on highway between sunset and sunrise, extended to 14 years.",
    urduPunishment: "3 سے 10 سال تک قیدِ با مشقت اور جرمانہ۔ اگر ڈکیتی ہائی وے (شاہراہ) پر غروبِ آفتاب اور طلوعِ آفتاب کے درمیان (رات میں) ہو تو یہ قید 14 سال تک ہو سکتی ہے۔",
    keyPoints: [
      "Robbery always contains elements of coercion, force, or instant fear of harm",
      "Private self-restraint is disabled by fear"
    ],
    relatedSections: ["379", "390", "395", "397"],
    keywords: ["robbery", "harabah", "highway robbery", "mugging", "gunpoint", "forceful taking", "violence", "looting", "bhatta"]
  },
  {
    id: "395",
    section: "395",
    title: "Punishment for Dacoity",
    urduTitle: "ڈکیتی (پانچ یا زائد افراد کی لوٹ مار)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "When five or more persons conjointly commit or attempt to commit a robbery, they commit 'dacoity'.",
    urduDefinition: "جب 5 یا اس سے زیادہ لوگ مل کر ڈکیتی یا رہزنی کی واردات کریں تو اسے 'ڈکیتی' کہتے ہیں۔",
    punishment: "Imprisonment for life, or rigorous imprisonment for 4 to 10 years, and fine.",
    urduPunishment: "عمر قید، یا 4 سے 10 سال تک قیدِ با مشقت، اور جرمانہ۔",
    keyPoints: [
      "Requires exactly five or more active participants",
      "Dacoity with murder (396) can lead to the death penalty for all participants"
    ],
    relatedSections: ["391", "392", "396", "397"],
    keywords: ["dacoity", "heist", "gang robbery", "group dacoity", "five people", "dacoits", "daku"]
  },
  {
    id: "396",
    section: "396",
    title: "Dacoity with murder",
    urduTitle: "ڈکیتی مع قتل (سنگین ترین واردات)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "If any one of five or more persons, who are conjointly committing dacoity, commits murder in so committing, every one of those persons shall be punished with death or life imprisonment.",
    urduDefinition: "اگر پانچ یا زائد ڈاکوؤں میں سے کوئی ایک بھی واردات کے دوران کسی کو ہلاک کر دے، تو تمام موجود ڈاکو قتل کے برابر مجرم مانے جائیں گے۔",
    punishment: "Death, or Imprisonment for life, or rigorous imprisonment for up to 10 years, and fine.",
    urduPunishment: "سزائے موت، یا عمر قید، یا دس سال تک قید مع جرمانہ۔",
    keyPoints: ["Severe state charge", "Joint conspiracy and execution holding"],
    relatedSections: ["395", "302", "397"],
    keywords: ["dacoity with murder", "robbery killed", "capital dacoity", "daku firing"]
  },

  // --- OF HIJACKING ---
  {
    id: "402-A",
    section: "402-A",
    title: "Hijacking",
    urduTitle: "طیارہ اغوا کرنا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever unlawfully, by the use or show of force, seizes or exercises control of an aircraft.",
    urduDefinition: "بذور طاقت کسی ہوائی جہاز پر قبضہ کرنا، اس کا رخ تبدیل کروانا یا مسافروں کو یرغمال بنانا۔",
    punishment: "Defined under Section 402-B.",
    urduPunishment: "سزا دفعہ 402-B کے مانیٹر ہوتی ہے۔",
    keyPoints: ["Air security threat", "International legal alignment"],
    relatedSections: ["365-A", "402-B"],
    keywords: ["hijacking", "aircraft seize", "terrorism", "plane hostage", "ransom"]
  },
  {
    id: "402-B",
    section: "402-B",
    title: "Punishment for Hijacking",
    urduTitle: "طیارہ اغوا کرنے کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits or abets the offence of hijacking shall be punished with death or life imprisonment, and forfeiture of property.",
    urduDefinition: "طیارہ اغوا کرنے یا اس کی سازش کرنے پر موت یا عمر قید کی سزا۔",
    punishment: "Death or imprisonment for life, and forfeiture of property.",
    urduPunishment: "سزائے موت یا عمر قید، اور ساتھ ہی تمام جائیداد کی ضبطگی۔",
    keyPoints: ["Special anti-terrorism court triable", "Absolutely non-bailable"],
    relatedSections: ["402-A", "402-C"],
    keywords: ["hijack punishment", "capital air crime", "death hijacking"]
  },

  // --- TRUST AND AMANAT ---
  {
    id: "406",
    section: "406",
    title: "Punishment for Criminal Breach of Trust (Amanat Mein Khayanat)",
    urduTitle: "امانت میں خیانت کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits criminal breach of trust (dishonest misappropriation, conversion, or disposal of property entrusted to them).",
    urduDefinition: "جو کوئی کسی شخص کے سپرد کی گئی امانت میں بدنیتی سے گڑبڑ کرے، اسے ہڑپ کر لے، یا اپنے ذاتی فائدے کے لیے استعمال کرے۔",
    punishment: "Imprisonment of either description for up to seven years, or with fine, or with both.",
    urduPunishment: "7 سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Property must be initially entrusted legally",
      "Subsequent dishonest conversion must occur"
    ],
    relatedSections: ["405", "409", "420"],
    keywords: ["criminal breach of trust", "entrustment", "khayanat", "misappropriation", "amanat", "partnership fraud"]
  },
  {
    id: "409",
    section: "409",
    title: "Criminal breach of trust by public servant, or by banker, merchant or agent",
    urduTitle: "سرکاری ملازم، بینکر یا ایجنٹ کی طرف سے امانت میں خیانت",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever, being in any manner entrusted with property in his capacity of a public servant or in the way of his business as a banker, merchant, attorney or agent, commits criminal breach of trust.",
    urduDefinition: "اگر کوئی سرکاری ملازم، بینکر، تاجر، یا ایجنٹ اپنے فرائضِ منصبی یا کاروباری امانت داری کے تحت سونپے گئے مال میں خیانت کرے۔",
    punishment: "Imprisonment for life, or with imprisonment of either description up to ten years, and fine.",
    urduPunishment: "عمر قید، یا 10 سال تک قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: [
      "Highly severe due to abuse of public trust",
      "NAB/FIA core enforcement tool"
    ],
    relatedSections: ["405", "406", "Prevention of Corruption Act 1947"],
    keywords: ["public servant fraud", "banker fraud", "fiduciary trust", "corruption", "embezzlement", "accountant fraud", "government money"]
  },

  // --- STOLEN PROPERTY ---
  {
    id: "411",
    section: "411",
    title: "Dishonestly receiving stolen property",
    urduTitle: "مسروقہ (چوری کا) مال بدنیتی سے حاصل کرنا یا رکھنا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever dishonestly receives or retains any stolen property, knowing or having reason to believe the same to be stolen property.",
    urduDefinition: "جو شخص یہ نیت رکھتے ہوئے یا جانتے ہوئے کہ یہ سامان یا رقم چوری شدہ ہے، اسے خریدے، اپنے پاس رکھے۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "3 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Buying items significantly below market value without receipt is a red flag",
      "Applies to receivers of stolen motor vehicles or jewelery"
    ],
    relatedSections: ["379", "410", "412"],
    keywords: ["stolen property", "stolen goods receiver", "fencing", "possession", "mal-e-masrooqa", "purchasing stolen property"]
  },

  // --- OF CHEATING ---
  {
    id: "415",
    section: "415",
    title: "Cheating",
    urduTitle: "دھوکہ دہی کی تعریف",
    chapter: "Chapter XVII: Of Cheating",
    definition: "Whoever, by deceiving any person, fraudulently or dishonestly induces the person so deceived to deliver any property, or to consent to retain property.",
    urduDefinition: "کسی شخص کو سبز باغ دکھانا یا فریب دے کر اس کی جائیداد حاصل کرنے پر اکسانا۔",
    punishment: "Defined under Section 417 (up to 1 year imprisonment or fine, or both).",
    urduPunishment: "سزا دفعہ 417 کے تحت ایک سال تک قید مقرر ہے۔",
    keyPoints: ["Deception is the key element", "Damage or harm must be caused to the victim in body, mind, reputation, or property"],
    relatedSections: ["416", "417", "420"],
    keywords: ["cheat", "scam", "deception", "fraud", "scammer", "dhoka"]
  },
  {
    id: "420",
    section: "420",
    title: "Cheating and dishonestly inducing delivery of property",
    urduTitle: "دھوکہ دہی اور بدنیتی سے جائیداد یا رقم منتقل کروانا (دفعہ 420)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Cheaters who dishonestly induce the person deceived to deliver property, or make, alter or destroy a valuable security.",
    urduDefinition: "دھوکہ دہی اور فراڈ۔ جو کوئی کسی کو دھوکہ دے کر اس کے مال، رقم، یا قیمتی دستاویز کو ہڑپ کر لے، یا معاہدہ ختم کروانے پر مجبور کرے۔",
    punishment: "Imprisonment of either description for up to seven years, and fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Requires fraudulent inducement at the time of transaction",
      "Registered alongside Section 406 (CBT) in commercial disputes"
    ],
    relatedSections: ["415", "417", "406", "489-F"],
    keywords: ["cheating", "fraud", "scam", "deception", "420", "fake commitment", "dhowka", "dhoka", "financial fraud", "property scam"]
  },

  // --- OF MISCHIEF ---
  {
    id: "425",
    section: "425",
    title: "Mischief definition",
    urduTitle: "مضر حرکت / نقصان رساں عمل کی تعریف",
    chapter: "Chapter XVII: Of Mischief",
    definition: "Whoever, with intent to cause, or knowing that he is likely to cause, wrongful loss or damage to the public or to any person, causes the destruction of any property.",
    urduDefinition: "کسی دوسرے کی منقولہ یا غیر منقولہ جائیداد کو نقصان پہنچانے، توڑ پھوڑ کرنے، اور اس کی افادیت گھٹانے کا نقصان کار اقدام۔",
    punishment: "Defined under Section 426.",
    urduPunishment: "سزا دفعہ 426 کے تحت تین ماہ تک جیل یا جرمانہ، یا دونوں دی جاتی ہے۔",
    keyPoints: ["Intent to cause loss is key", "Destructive changing of property state"],
    relatedSections: ["426", "427"],
    keywords: ["mischief", "property damage", "breaking", "vandalized", "vandalism", "destruction", "riot damage"]
  },
  {
    id: "427",
    section: "427",
    title: "Mischief causing damage to the amount of fifty rupees",
    urduTitle: "قتل، فساد یا نقصان دہ حرکت جس سے پچاس روپے یا زائد مالی نقصان ہو",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits mischief and thereby causes loss or damage to the amount of fifty rupees or upwards.",
    urduDefinition: "جائیداد کو جان بوجھ کر نقصان پہنچانا (پچاس روپے یا زائد مالیت کا نقصان کرنا)۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Damage must be active",
      "Low financial benchmark (Rs. 50) means it applies to almost all property wreckage cases"
    ],
    relatedSections: ["425", "426", "429"],
    keywords: ["mischief", "property damage", "vandalism", "destruction", "breaking", "loss", "nuqsan", "tor phor"]
  },

  // --- OF CRIMINAL TRESPASS ---
  {
    id: "441",
    section: "441",
    title: "Criminal trespass",
    urduTitle: "مداخلتِ بے جا کی تعریف",
    chapter: "Chapter XVII: Of Criminal Trespass",
    definition: "Whoever enters into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy.",
    urduDefinition: "کسی دوسرے کے مکان، دکان یا زمین پر زبردستی یا غیر قانونی داخل ہونا تاکہ وہاں ہنگامہ کھڑا کیا جا سکے یا نقصان پہنچایا جائے۔",
    punishment: "Defined under Section 447 (up to three months imprisonment or Rs. 1,500 fine, or both).",
    urduPunishment: "سزا دفعہ 447 کے تحت تین ماہ تک قید، جرمانہ یا دونوں مقرر ہے۔",
    keyPoints: ["Requires entry into someone else's possession", "Specific intent to annoy or commit offense mandatory"],
    relatedSections: ["442", "447", "448"],
    keywords: ["trespass", "encroachment", "land grab", "illegal entry", "qabza", "interfere"]
  },
  {
    id: "442",
    section: "442",
    title: "House-trespass",
    urduTitle: "گھر میں زبردستی داخل ہونا (مداخلتِ بے جا)",
    chapter: "Chapter XVII: Of Criminal Trespass",
    definition: "Whoever commits criminal trespass by entering into or remaining in any building, tent or vessel used as a human dwelling or place of worship.",
    urduDefinition: "کسی بھی رہائشی مکان، فلیٹ، خیمے یا مسجد میں غیر قانونی طور پر داخل ہونا یا چھپ بیٹھنا۔",
    punishment: "Defined under Section 448.",
    urduPunishment: "سزا دفعہ 448 کے تحت برآمد ہوتی ہے۔",
    keyPoints: ["Human dwelling or worship place boundary requirement", "More severe than entry on open fields (441)"],
    relatedSections: ["441", "448", "452"],
    keywords: ["house trespass", "home intrusion", "illegal stay", "chardiwari", "door break"]
  },
  {
    id: "447",
    section: "447",
    title: "Punishment for criminal trespass",
    urduTitle: "مداخلتِ بے جا کی سزا (قبضہ مافیا یا گھسنا)",
    chapter: "Chapter XVII: Of Criminal Trespass",
    definition: "Whoever commits criminal trespass shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to [one thousand five hundred rupees], or with both.",
    urduDefinition: "غیر قانونی طور پر کسی کی زمین پر گھسنے کی سزا۔",
    punishment: "Imprisonment of either description for up to three months, or fine up to Rs. 1,500, or both.",
    urduPunishment: "تین ماہ تک جیل، جرمانہ، یا دونوں۔",
    keyPoints: ["Applied in street brawls and land grabbing cases", "Direct action available via Criminal Procedure Code"],
    relatedSections: ["441", "448"],
    keywords: ["encroachment land", "land grabbing saza", "trespassing"]
  },
  {
    id: "448",
    section: "448",
    title: "Punishment for house-trespass",
    urduTitle: "مکان میں زبردستی داخل ہونے کی سزا",
    chapter: "Chapter XVII: Of Criminal Trespass",
    definition: "Whoever commits house-trespass shall be punished with imprisonment of either description for a term which may extend to one year, or with fine which may extend to [two thousand rupees], or with both.",
    urduDefinition: "رہائشی حدود یا گھر کے تقدس کی پامالی کر زبردستی گھسنے کی سزا۔",
    punishment: "Imprisonment of either description up to one year, or fine up to Rs. 2,000, or both.",
    urduPunishment: "ایک سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Violation of sanctity of the home", "Read alongside 452 (trespass after preparation for hurt)"],
    relatedSections: ["442", "452"],
    keywords: ["home invasion", "trespass in building", "guzzar"]
  },
  {
    id: "452",
    section: "452",
    title: "House-trespass after preparation for hurt, assault or wrongful restraint",
    urduTitle: "مار پیٹ کے ارادے سے گھر میں زبردستی گھسنا (دفعہ 452)",
    chapter: "Chapter XVII: Of Criminal Trespass",
    definition: "Whoever commits house-trespass, having made preparation for causing hurt to any person or for assaulting any person, or for wrongfully restraining any person.",
    urduDefinition: "گولیاں، چھریاں یا لٹھ لے کر کسی کو مارنے کے ارادے سے اس کے گھر کی چاردیواری پھلانگ کر یا دروازہ توڑ کر اندر داخل ہونا۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "سات سال تک کی سخت قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: [
      "Core ingredients: House trespass + prior preparation for violence",
      "Highly common in private feud and home-clash cases inside Pakistan"
    ],
    relatedSections: ["442", "448", "352", "337"],
    keywords: ["house trespass prepared", "assault in house", "vandalized home", "clash in courtyard", "sanctity breach", "chardiwari"]
  },

  // --- CHAPTER XVIII: OF OFFENCES RELATING TO DOCUMENTS AND TO TRADE OR PROPERTY MARKS ---
  {
    id: "463",
    section: "463",
    title: "Forgery",
    urduTitle: "جعلسازی / جعل سازی کی قانونی تعریف",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever makes any false document or part of a document, with intent to cause damage or injury to the public or to any person, or to support any claim or title.",
    urduDefinition: "جعلی کاغذات، جعلی چیک، یا غلط دستاویزات تیار کرنا تاکہ کسی کو مالی یا جانی نقصان پہنچایا جا سکے یا ناجائز دعویٰ دائر کیا جا سکے۔",
    punishment: "Defined under Section 465.",
    urduPunishment: "سزا دفعہ 465 کے مانیٹر دی جاتی ہے۔",
    keyPoints: ["Intent to defraud is mandatory", "Document must be forged physically or digitally"],
    relatedSections: ["464", "465", "468", "471"],
    keywords: ["forgery", "fake document", "forger", "fake signature", "property files", "jaalsazi", "jaal"]
  },
  {
    id: "465",
    section: "465",
    title: "Punishment for forgery",
    urduTitle: "جعلسازی کی سزا",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever commits forgery shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduDefinition: "سرکاری یا نجی دستاویزات میں ہیر پھیر یا دستخط کاپی کرنے کی سزا۔",
    punishment: "Imprisonment of either description for up to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک قید، جرمانہ، یا دونوں۔",
    keyPoints: ["Generic forgery penalty", "Applies to simple fake receipts or signed letters"],
    relatedSections: ["463", "468", "471"],
    keywords: ["forgery saza", "fake identity", "fake receipt"]
  },
  {
    id: "468",
    section: "468",
    title: "Forgery for purpose of cheating",
    urduTitle: "دھوکہ دہی کی نیت سے جعلسازی کرنا (جعلی کاغذات)",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever commits forgery, intending that the document forged shall be used for the purpose of cheating.",
    urduDefinition: "مخصوص دھوکہ دہی کی غرض سے بوگس فائلیں، جعلی پیدائشی سرٹیفکیٹ یا جعلی پراپرٹی پیپرز تیار کرنا (مثلاً جعلی رجسٹری)۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "سات سال تک قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: ["Higher penalty due to compounding of forgery and cheating", "Applied in registry, power of attorney scams in Pakistan"],
    relatedSections: ["463", "420", "471"],
    keywords: ["forgery for fraud", "fake registry", "fraud power of attorney", "bogus papers", "jaal sazi", "stamp papers"]
  },
  {
    id: "471",
    section: "471",
    title: "Using as genuine a forged document",
    urduTitle: "جعلی دستاویز کو اصلی بنا کر استعمال کرنا",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever fraudulently or dishonestly uses as genuine any document which he knows or has reason to believe to be a forged document.",
    urduDefinition: "یہ جانتے ہوئے بھی کہ یہ کاغذ، سند یا نوکری کا آرڈر جعلی ہے، اسے سرکاری دفتر یا بینک میں اصلی کے طور پر پیش کرنا۔",
    punishment: "Shall be punished in the same manner as if he had forged such document.",
    urduPunishment: "ملزم کو بالکل وہی سزا ملے گی جیسے اس نے خود یہ دستاوِیز تیار یا جعل سازی کی ہو۔",
    keyPoints: ["Receivers and users of fake papers are held equally liable to the forger", "Requires knowledge of forgery"],
    relatedSections: ["463", "465", "468"],
    keywords: ["using fake papers", "fraudulent presentation", "jaali degree", "submitting fake checks"]
  },

  // --- OF CURRENCY-NOTES AND BANK-NOTES ---
  {
    id: "489-A",
    section: "489-A",
    title: "Counterfeiting currency-notes or bank-notes",
    urduTitle: "جعلی نوٹ چھاپنا (کرنسی نوٹ چربہ سازی)",
    chapter: "Chapter XVIII: Of Currency-Notes",
    definition: "Whoever counterfeits, or knowingly performs any part of the process of counterfeiting, any currency-note or bank-note.",
    urduDefinition: "پاکستان یا کسی ملک کے جعلی کرنسی نوٹ چھاپنا یا تیار کرنے کے کام میں حصہ لینا۔",
    punishment: "Imprisonment for life, or with imprisonment of either description up to ten years, and fine.",
    urduPunishment: "عمر قید، یا 10 سال تک قید، اور مع جرمانہ۔",
    keyPoints: ["Severe infraction against banking sovereignty", "Includes both local and foreign currency"],
    relatedSections: ["232", "489-B", "489-C"],
    keywords: ["fake cash", "counterfeit bills", "jaali note", "printing money", "machinery stash"]
  },
  {
    id: "489-B",
    section: "489-B",
    title: "Using as genuine, forged or counterfeit currency-notes or bank-notes",
    urduTitle: "جعلی نوٹوں کا مارکیٹ میں استعمال یا لین دین",
    chapter: "Chapter XVIII: Of Currency-Notes",
    definition: "Whoever sells to, or buys or receives from, any person, or otherwise traffics in counterfeit banknotes knowing they are forged.",
    urduDefinition: "جعلی نوٹوں کی منتقلی، انہیں مارکیٹ میں خرید و فروخت پر چلانا یا جان بوجھ کر دکاندار کو دینا۔",
    punishment: "Imprisonment for life, or with imprisonment of either description up to ten years, and fine.",
    urduPunishment: "عمر قید، یا 10 سال تک قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: ["Knowledge of counterfeiting required", "Economic impact penalty"],
    relatedSections: ["489-A", "489-C"],
    keywords: ["passing fake dollar", "stolen bank notes", "jaali cash chalana", "money transfer"]
  },
  {
    id: "489-F",
    section: "489-F",
    title: "Correction / Dishonestly issuing a cheque (Cheque Bounce)",
    urduTitle: "بوگس چیک کا اجراء (چیک باؤنس ہونے کی سزا - دفعہ 489-ایف)",
    chapter: "Chapter XVIII: Of Currency-Notes and Bank-Notes",
    definition: "Whoever dishonestly issues a cheque towards repayment of a loan or fulfillment of an obligation which is dishonoured on presentation (cheque bounce).",
    urduDefinition: "بوگس چیک جاری کرنا۔ بدنیتی کے ساتھ کسی واجب الادا قرض یا کاروباری ذمہ داری کی واپسی کے لیے ایسا بینک چیک تحریر کر کے دینا جو بینک میں جمع کروانے پر ناکافی رقم یا دستخط کی غلطی کی وجہ سے مسترد (باؤنس) ہو جائے۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "تین سال تک کی قید، یا جرمانہ، یا دونوں برآمد ہوتے ہیں۔",
    keyPoints: [
      "The court requires written proof of obligation (loan, deal, contract)",
      "The bank memo showing dishonour (Insufficient Funds, Account Closed) is critical",
      "If the issuer can prove there was a prior arrangement with the bank, burden shifts"
    ],
    relatedSections: ["420", "406"],
    keywords: ["cheque bounce", "fake check", "cash bounce", "memo slip", "dishonoured check status", "check reject", "crpc 489-f", "489f", "cheque", "check", "bank slip", "dispute"]
  },

  // --- CHAPTER XX: OF OFFENCES RELATING TO MARRIAGE ---
  {
    id: "494",
    section: "494",
    title: "Marrying again during lifetime of husband or wife",
    urduTitle: "شوہر یا بیوی کی زندگی میں دوسری شادی (بغیر اجازت)",
    chapter: "Chapter XX: Of Offences Relating to Marriage",
    definition: "Whoever, having a husband or wife living, marries in any case in which such marriage is void by reason of its taking place during the life of such husband or wife.",
    urduDefinition: "پہلی بیوی یا شوہر کی موجودگی میں (اور مروجہ عائلی قوانین کے مطابق اجازت لیے بغیر) دوسری شادی رچا لینا۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "سات سال تک قید، اور ساتھ ہی جرمانہ۔",
    keyPoints: ["Exceptions: Previous marriage declared void by a competent court", "Subject to Muslim Family Laws Ordinance 1961 provisions"],
    relatedSections: ["493", "495"],
    keywords: ["bigamy", "polygamy without permission", "second marriage", "shadi fraud", "marriage violation"]
  },

  // --- CHAPTER XXI: OF DEFAMATION ---
  {
    id: "499",
    section: "499",
    title: "Defamation description",
    urduTitle: "ہتکِ عزت کی قانونی تعریف (بدنامی)",
    chapter: "Chapter XXI: Of Defamation",
    definition: "Whoever, by words spoken or intended to be read, or by signs or visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing that it will harm their reputation.",
    urduDefinition: "کسی شخص پر جھوٹا الزام لگانا، اس کی پبلک یا نجی تذلیل کرنا، یا تحریر کے ذریعے اس کے کردار کو بدنام کرنے کی کوشش کرنا (ہتک عزت)۔",
    punishment: "Defined under Section 500.",
    urduPunishment: "سزا دفعہ 500 کے مروجہ شرح کے تحت ہوتی ہے۔",
    keyPoints: ["Ten Exceptions: truth for public good, public servant performance analysis", "Libel and Slander standard"],
    relatedSections: ["500", "501", "Defamation Act"],
    keywords: ["defamation", "slander", "libel", "reputation damage", "badnami", "hataq-e-izat", "false accusation"]
  },
  {
    id: "500",
    section: "500",
    title: "Punishment for defamation",
    urduTitle: "ہتکِ عزت کی سزا",
    chapter: "Chapter XXI: Of Defamation",
    definition: "Whoever defames another shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both.",
    urduDefinition: "دوسرے کو رسوا یا بدنام کرنے کی پاداش میں دو سال قید یا جرمانہ۔",
    punishment: "Simple imprisonment up to two years, or with fine, or with both.",
    urduPunishment: "دو سال تک سادہ جیل، جرمانہ، یا دونوں۔",
    keyPoints: ["Reputational damage penalty", "Often coupled with civil damages suits"],
    relatedSections: ["499", "501", "502"],
    keywords: ["defamation punishment", "libel penalty", "court case badnami"]
  },

  // --- CHAPTER XXII: CRIMINAL INTIMIDATION, INSULT AND ANNOYANCE ---
  {
    id: "503",
    section: "503",
    title: "Criminal intimidation",
    urduTitle: "مجرمانہ دھمکی (جان، مال یا عزت کی دھمکی دینا)",
    chapter: "Chapter XXII: Criminal Intimidation",
    definition: "Whoever threatens another with any injury to his person, reputation or property, with intent to cause alarm or to force them to perform/abstain from any act.",
    urduDefinition: "کسی کو سنگین دھمکی دینا جیسے 'میں تمیں مار دوں گا' یا جائیداد ملیا میٹ کرنے کی دھمکی دے کر اپنی مرضی کا کام کروانا۔",
    punishment: "Defined under Section 506.",
    urduPunishment: "سزا دفعہ 506 کے بموجب ملتی ہے۔",
    keyPoints: ["Core: Intent to cause alarm", "Threat must be communicated to the target person"],
    relatedSections: ["504", "506", "507"],
    keywords: ["intimidation", "death threat", "harassment", "dhamki", "threat to kill"]
  },
  {
    id: "506",
    section: "506",
    title: "Punishment for criminal intimidation",
    urduTitle: "جان سے مارنے یا نقصان پہنچانے کی دھمکی کی سزا",
    chapter: "Chapter XXII: Criminal Intimidation",
    definition: "Whoever commits the offence of criminal intimidation shall be punished with imprisonment up to two years. If threat be to cause death or grievous hurt, or to cause destruction of property by fire, up to seven years.",
    urduDefinition: "سادہ دھمکی دینے کی صورت میں دو سال قید۔ اگر دھمکی جان سے مارنے، شدید چوٹ پہنچانے، یا پراپرٹی جلانے کی ہو تو سزا سات سال قید ہے۔",
    punishment: "Imprisonment of either description up to 2 years / fine (simple threat). Up to 7 years with fine if threat is to murder (aggravated).",
    urduPunishment: "معمولی دھمکی پر 2 سال قید۔ جان سے مارنے کی دھمکی پر 7 سال سخت قید اور جرمانہ۔",
    keyPoints: ["High risk threat tracking", "Includes anonymous scary letters (507)"],
    relatedSections: ["503", "507", "508"],
    keywords: ["death threat punishment", "threatened to shoot", "dhamki saza", "homicide threat"]
  },
  {
    id: "509",
    section: "509",
    title: "Word, gesture or act intended to insult the modesty of a woman",
    urduTitle: "خواتین کو ہراساں کرنا (اشاروں، آواز یا چھیڑ خانی کی سزا)",
    chapter: "Chapter XXII: Criminal Intimidation",
    definition: "Whoever, intending to insult the modesty of any woman, utters any word, makes any sound or gesture, or exhibits any object, or intrudes upon the privacy of such woman.",
    urduDefinition: "عوامی جگہوں، دفاتر یا تعلیمی اداروں میں کسی عورت پر آوازیں کسنا، نازیبا اشارے کرنا (چھیڑ خانی) یا اسے ہراساں کرنا۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "تین سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: ["Key harassment prevention penal check", "Includes catcalling and office environment issues"],
    relatedSections: ["354", "354-A", "503"],
    keywords: ["harassment", "eve teasing", "catcall", "harrasing girl", "office hazard", "modesty"]
  },

  // --- CHAPTER XXIII: OF ATTEMPTS TO COMMIT OFFENCES ---
  {
    id: "511",
    section: "511",
    title: "Punishment for attempting to commit offences",
    urduTitle: "جرم کی ناکام کوشش پر سزا کا مروجہ قانون",
    chapter: "Chapter XXIII: Of Attempts to Commit Offences",
    definition: "Whoever attempts to commit an offence punishable by this Code with imprisonment, and in such attempt does any act towards the commission of the offence.",
    urduDefinition: "جرم کرنے کی ناکام کوشش یا اقدام۔ اگر کوئی شخص کسی جرم کی با قاعدہ کوشش کرے (مثلاً چوری کے ارادے سے تجوری کھولنا مگر وہ خالی نکلے) تو اسے اقدامِ جرم کی سزا دی جائے گی۔",
    punishment: "Imprisonment of any description provided for the offence for a term which may extend to one-half of the longest term provided for that offence, or with such fine, or with both.",
    urduPunishment: "بنیادی جرم کے لیے مختص زیادہ سے زیادہ قید کی آدھی قید (ہاف جیل ٹرم)، یا جرمانہ، یا دونوں۔",
    keyPoints: ["Applies only where no express attempt provision is declared in the code (unlike murder attempt 324)", "Step towards commission must be executed"],
    relatedSections: ["324", "415", "511"],
    keywords: ["attempt", "attempt fails", "half term", "step to crime", "theft try", "iqdam-e-sarqa", "koshish"]
  }
];
