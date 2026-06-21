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
    id: "109",
    section: "109",
    title: "Punishment of abetment if the act abetted is committed in consequence",
    urduTitle: "جرم کی اعانت (اشتعال دھانی یا مدد)",
    chapter: "Chapter V: Of Abetment",
    definition: "Whoever abets any offence shall, if the act abetted is committed in consequence of the abetment, and no express provision is made by this Code for the punishment of such abetment, be punished with the punishment provided for the offence.",
    urduDefinition: "جو کوئی کسی جرم کی اعانت (مدد یا اکساوا) کرتا ہے، اگر وہ جرم اعانت کے نتیجے میں واقع ہو جائے، تو اعانت کرنے والے کو اسی جرم کی سزا دی جائے گی۔",
    punishment: "Same punishment as prescribed for the principal offence abetted.",
    urduPunishment: "وہی سزا جو بنیادی جرم کے ارتکاب پر مقرر ہے۔",
    keyPoints: [
      "Abetment involves instigating, engaging in conspiracy, or intentionally aiding",
      "The crime must actually take place as a result of the abetment",
      "Often used alongside main offences (e.g., 302/109 PPC)"
    ],
    relatedSections: ["34", "120-B", "114"],
    keywords: ["abetment", "instigate", "conspiracy", "aiding", "sazish", "saholatkar", "facilitator", "accomplice"]
  },
  {
    id: "188",
    section: "188",
    title: "Disobedience to order duly promulgated by public servant",
    urduTitle: "سرکاری افسر کے جاری کردہ حکم کی نافرمانی (دفعہ 144)",
    chapter: "Chapter X: Of Contempts of the Lawful Authority of Public Servants",
    definition: "Disobedience to an order lawfully promulgated by a public servant directing to abstain from a certain act or to take certain order with certain property in his possession or under his management.",
    urduDefinition: "کسی سرکاری ملازم کی طرف سے قانونی طور پر جاری کردہ حکم کی نافرمانی کرنا، جس کا مقصد نقص امن یا جان مال کے خطرے کو روکنا ہو۔ (عام طور پر دفعہ 144 کی خلاف ورزی پر لاگو ہوتی ہے)۔",
    punishment: "Simple imprisonment for up to 1 month or fine up to Rs. 600, or both. If such disobedience causes danger to human life, health, or safety, imprisonment up to 6 months or fine up to Rs. 3,000, or both.",
    urduPunishment: "سادہ قید جو ایک ماہ تک ہو سکتی ہے یا جرمانہ یا دونوں۔ اگر نافرمانی سے انسانی جان، صحت یا حفاظت کو خطرہ لاحق ہو تو قید 6 ماہ تک یا جرمانہ 3,000 روپے یا دونوں۔",
    keyPoints: [
      "The order must be lawfully promulgated by a legally empowered public servant",
      "Often applied in violations of Section 144 CrPC (assembly bans)"
    ],
    relatedSections: ["144 (CrPC)", "143"],
    keywords: ["disobedience", "public servant", "section 144", "government order", "violation", "nafarmani", "unlawful assembly"]
  },
  {
    id: "302",
    section: "302",
    title: "Qatl-e-Amd (Intentional Murder)",
    urduTitle: "قتلِ عمد (دانستہ قتل)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever, with the intention of causing death or with the intention of causing bodily injury to a person, causes the death of such person or any other person, is guilty of qatl-e-amd.",
    urduDefinition: "جو شخص جان بوجھ کر کسی کو جان سے مارنے کی نیت سے یا ایسی شدید جسمانی چوٹ پہنچانے کے ارادے سے وار کرے جس سے موت واقع ہو جائے، وہ قتلِ عمد کا مرتکب ہوتا ہے۔",
    punishment: "Under PPC 302: (a) Punished with death as Qisas. (b) Punished with death or imprisonment for life as Ta'zir, keeping in view the facts of the case. (c) Punished with imprisonment of either description for a term which may extend to twenty-five years, where Qisas is not applicable.",
    urduPunishment: "(الف) موت کی سزا بطور قصاص۔ (ب) موت یا عمر قید کی سزا بطور تعزیر، مقدمے کے حالات کے تحت۔ (ج) 25 سال تک قید، جہاں قصاص لاگو نہ ہوتا ہو۔",
    keyPoints: [
      "Requires clear intention to cause death or fatal bodily harm",
      "Distinguished from Qatl-i-Shibh-i-Amd (Section 315) and Qatl-i-Khata (Section 318)",
      "Can be settled under Diyat if heirs of the deceased pardon the offender under compounding rules"
    ],
    relatedSections: ["302 PPC", "309", "310", "311", "324"],
    keywords: ["murder", "qatl", "killing", "death", "qisas", "diyat", "intentional murder", "homicide", "kill"]
  },
  {
    id: "324",
    section: "324",
    title: "Attempt to commit qatl-e-amd (Attempted Murder)",
    urduTitle: "اقدامِ قتل (قتل کی کوشش)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever does any act with such intention or knowledge, and under such circumstances, that, if he by that act caused qatl, he would be guilty of qatl-e-amd, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine; and if hurt is caused to any person by such act, the offender shall be liable to the punishment of the hurt caused, in addition to the imprisonment.",
    urduDefinition: "جو کوئی کسی ایسی نیت یا علم کے ساتھ ایسا فعل کرے کہ اگر اس سے موت واقع ہو جاتی تو وہ قتلِ عمد کا مجرم ہوتا، تو وہ اقدامِ قتل کا مجرم ہے۔",
    punishment: "Imprisonment of either description up to 10 years, and fine. If hurt is caused, the offender is additionally liable to the punishment of 'Hurt' (Arsh or Daman) as defined in relevant sections.",
    urduPunishment: "10 سال تک قید اور جرمانہ۔ اگر متاثرہ شخص کو چوٹ (زخم) آئی ہو، تو ملزم پر چوٹ کی متعلقہ دفعات کے تحت دمان یا ارش کا جرمانہ بھی عائد ہوگا۔",
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
    title: "Shajjah / Hurt (Bodily Injuries)",
    urduTitle: "شجاج / ضربات (سر یا چہرے کا زخم یا جسمانی چوٹ)",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Hurt is divided into Shajjah (injuries on head or face) and Jurh (injuries on other parts of the body). Subsections like 337-A (Shajjah-i-Khafifah, etc.), 337-F (Ghalyarah, Damighah, etc.) define degrees of bodily damage.",
    urduDefinition: "کسی انسان کو تکلیف، بیماری، زخم یا معذوری پہنچانا۔ سر اور چہرے کے زخموں کو شجاج اور جسم کے دیگر حصوں کے زخموں کو جرح کہا جاتا ہے۔",
    punishment: "Varies from monetary compensation (Daman and Arsh) to imprisonment for up to 10 years depending on severity (e.g., Shajjah-i-Khafifah is up to 2 years, Shajjah-i-Hashimah is up to 5 years with 10% Diyet Arsh).",
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
    definition: "Whoever kidnaps or abducts any person for ransom, or to compel the Government or any foreign State, or any international organization inside or outside Pakistan to do or abstain from doing any act, or to extort a valuable security or money.",
    urduDefinition: "جو شخص کسی کو تاوان وصول کرنے کے لیے، یا حکومت پر دباؤ ڈالنے کے لیے، یا رقم یا جائیداد حاصل کرنے کے لیے اغوا کرے جس میں موت کا خوف دلایا گیا ہو۔",
    punishment: "Punished with death or imprisonment for life, and shall also be liable to forfeiture of property.",
    urduPunishment: "موت کی سزا یا عمر قید، اور جائیداد کی ضبطگی۔",
    keyPoints: [
      "Severity is extremely high as it is a non-bailable, capital offence under Pakistani laws",
      "Ransom demand is the primary defining factor",
      "Triable by Anti-Terrorism Courts (ATC) under ATA 1997"
    ],
    relatedSections: ["365", "383", "Anti-Terrorism Act Section 6(2)(e)"],
    keywords: ["ransom", "tawan", "kidnap for ransom", "death penalty", "extortion", "terrorist act", "force"]
  },
  {
    id: "376",
    section: "376",
    title: "Punishment for rape (Zina-bil-Jabr)",
    urduTitle: "زنا بالجبیر (عصمت دری) کی سزا",
    chapter: "Chapter XVI: Offences Affecting Human Life",
    definition: "Whoever commits rape (sexual intercourse with a female without her consent, against her will, or under deception/coercion) shall be punished.",
    urduDefinition: "جو کوئی کسی خاتون کے ساتھ اس کی مرضی یا رضا مندی کے بغیر، یا ڈرا دھمکا کر زبردستی جنسی زیادتی کا مرتکب ہو۔",
    punishment: "Punished with death or imprisonment for life (not less than 10 years and up to 25 years), and liable to fine. Or death/life imprisonment if committed by group rape (376(2)).",
    urduPunishment: "موت کی سزا یا عمر قید (جو 10 سال سے کم نہ ہوگی اور زیادہ سے زیادہ 25 سال ہو سکتی ہے)، اور جرمانہ مقرر ہے۔ اجتماعی زیادتی کی صورت میں سزا موت یا عمر قید ہے۔",
    keyPoints: [
      "Rigid forensic and circumstantial proof standards apply",
      "Consent given under fear of death/hurt does not legalise the act",
      "Chemical castration provisions have been debated/introduced in recent amendments"
    ],
    relatedSections: ["Zina", "375", "Hudood Laws"],
    keywords: ["rape", "zina bil jabr", "sexual assault", "abuse", "force", "assault on woman"]
  },
  {
    id: "379",
    section: "379",
    title: "Punishment for Theft (Sarqa)",
    urduTitle: "چوری (سرقہ) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft (takes dishonestly any movable property out of the possession of any person without that person's consent, and moves that property in order to such taking) shall be punished.",
    urduDefinition: "جو کوئی کسی شخص کے قبضے سے کوئی منقولہ جائیداد (مثلاً رقم، گاڑی، موبائل وغیرہ) اس کی مرضی کے بغیر بدنیتی سے لے لے یا اسے منتقل کرے، تو وہ چوری کا مرتکب ہوتا ہے۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "3 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Property must be movable",
      "Taking must be dishonest (animus furandi)",
      "Property must be taken out of another person's possession"
    ],
    relatedSections: ["378", "380", "381", "382", "411"],
    keywords: ["theft", "stealing", "rob", "chori", "property", "stolen", "stolen goods", "movable property"]
  },
  {
    id: "380",
    section: "380",
    title: "Theft in dwelling house, etc.",
    urduTitle: "رہائشی مکان یا عمارت میں چوری",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft in any building, tent or vessel, which building, tent or vessel is used as a human dwelling, or used for the custody of property, shall be punished.",
    urduDefinition: "سرقہ بالا خانہ یا رہائشی مکان۔ اگر چوری کسی ایسے مکان، عمارت، خیمے یا کشتی میں کی جائے جو انسانوں کی رہائش کے لیے استعمال ہوتی ہو یا مال کی حفاظت کی جگہ ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Aggravated form of theft (Section 379 PPC)",
      "Dwelling requirement includes shops or storehouses where security guards live or watch over property"
    ],
    relatedSections: ["379", "457"],
    keywords: ["theft in house", "house theft", "building", "dwelling", "gharoor chori", "home robbery"]
  },
  {
    id: "382",
    section: "382",
    title: "Theft after preparation made for causing death, hurt or restraint",
    urduTitle: "قتل، چوٹ یا رکاوٹ ڈالنے کی تیاری کے بعد چوری کرنا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits theft, having made preparation for causing death, or hurt, or restraint, or fear of death, or of hurt, or of restraint, to any person in order to the committing of such theft, or in order to the effecting of his escape after the committing of such theft, or in order to the retaining of property taken by such theft.",
    urduDefinition: "اگر چوری کرنے کے لیے ملزمان نے پہلے سے اپنے پاس اسلحہ، چاقو، یا ایسا سامان رکھا ہو جس سے وہ واردات کے وقت کسی کو قتل کرنے، زخمی کرنے یا پکڑنے کی نیت رکھتے ہوں یا فرار ہوتے وقت گولی مارنے کی تیاری کی ہو۔",
    punishment: "Rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine.",
    urduPunishment: "10 سال تک قیدِ با مشقت اور جرمانہ مقرر ہے۔",
    keyPoints: [
      "Preparation for violent resistance or escape must be proven",
      "Very severe class of theft, bordering on armed robbery"
    ],
    relatedSections: ["379", "392"],
    keywords: ["armed theft", "violent theft", "theft with weapon", "weapon preparation", "chori ba-aslah"]
  },
  {
    id: "392",
    section: "392",
    title: "Punishment for Robbery (Harabah)",
    urduTitle: "ڈکیتی / بھتہ خوری / لوٹ مار (رہزنی) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "In all robbery there is either theft or extortion. Theft is 'robbery' if, in order to the committing of the theft, or in committing the theft, or in carrying away or attempting to carry away property obtained by the theft, the offender, for that end, voluntarily causes or attempts to cause to any person death or hurt or wrongful restraint, or fear of instant death or of instant hurt, or of instant wrongful restraint.",
    urduDefinition: "لوٹ مار یا رہزنی۔ اگر چوری کرتے وقت یا لوٹ کا مال لے جاتے ہوئے مجرم متاثرہ شخص کو قتل، زخمی یا حبس بے جا کا فوری خوف دلائے یا چوٹ پہنچائے، تو وہ رہزنی (ڈکیتی) کا مرتکب ہوتا ہے۔",
    punishment: "Rigorous imprisonment for a term which shall not be less than three years nor more than ten years, and shall also be liable to fine; and, if the robbery be committed on the highway between sunset and sunrise, the imprisonment may be extended to fourteen years.",
    urduPunishment: "3 سے 10 سال تک قیدِ با مشقت اور جرمانہ۔ اگر ڈکیتی ہائی وے (شاہراہ) پر غروبِ آفتاب اور طلوعِ آفتاب کے درمیان (یعنی رات کے وقت) کی جائے تو یہ قید 14 سال تک ہو سکتی ہے۔",
    keyPoints: [
      "Robbery always contains elements of coercion, force, or instant fear of harm",
      "A highway robbery at night carries the maximum penalty of 14 years"
    ],
    relatedSections: ["379", "390", "395", "397"],
    keywords: ["robbery", "harabah", "highway robbery", "mugging", "gunpoint", "forceful taking", "violence", "looting", "bhatta"]
  },
  {
    id: "395",
    section: "395",
    title: "Punishment for Dacoity",
    urduTitle: "ڈکیتی (پانچ یا ذائد افراد کی لوٹ مار)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "When five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing or attempting to commit a robbery, and persons present and aiding such commission or attempt, amount to five or more, every person so committing, attempting or aiding, is said to commit 'dacoity'.",
    urduDefinition: "جب 5 یا اس سے زیادہ لوگ مل کر ڈکیتی یا رہزنی کی واردات کریں تو اسے 'ڈکیتی باقاعدہ' کہتے ہیں۔ اس میں وہ لوگ بھی شامل ہیں جو موقع پر مدد کر رہے ہوں۔",
    punishment: "Imprisonment for life, or rigorous imprisonment for a term which shall not be less than four years nor more than ten years, and shall also be liable to fine.",
    urduPunishment: "عمر قید، یا 4 سے 10 سال تک قیدِ با مشقت، اور جرمانہ۔",
    keyPoints: [
      "Requires exactly five or more active participants including accessories on-site",
      "Dacoity with murder (Section 396) can lead to the death penalty for all participants"
    ],
    relatedSections: ["391", "392", "396", "397", "398"],
    keywords: ["dacoity", "heist", "gang robbery", "group dacoity", "five people", "dacoits", "daku"]
  },
  {
    id: "406",
    section: "406",
    title: "Punishment for Criminal Breach of Trust (Amanat Mein Khayanat)",
    urduTitle: "امانت میں خیانت کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits criminal breach of trust shall be punished. (Criminal breach of trust: being in any manner entrusted with property, or with any dominion over property, dishonestly misappropriates or converts to his own use that property, or dishonestly uses or disposes of that property in violation of any direction of law).",
    urduDefinition: "جو کوئی کسی شخص کے سپرد کی گئی امانت (رقم، زیوارات، کاروبار کا مال) میں بدنیتی سے گڑبڑ کرے، اسے ہڑپ کر لے، یا اپنے ذاتی فادے کے لیے استعمال کرے، تو وہ امانت میں خیانت کا مجرم ہے۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, or with fine, or with both.",
    urduPunishment: "7 سال تک قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Property must be initially entrusted legally to the accused",
      "There must be subsequent dishonest misappropriation, conversion, or disposal of the property"
    ],
    relatedSections: ["405", "408", "409", "420"],
    keywords: ["criminal breach of trust", "entrustment", "khayanat", "misappropriation", "amanat", "partnership fraud"]
  },
  {
    id: "409",
    section: "409",
    title: "Criminal breach of trust by public servant, or by banker, merchant or agent",
    urduTitle: "سرکاری ملازم، بینکر یا ایجنٹ کی طرف سے امانت میں خیانت",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever, being in any manner entrusted with property, or with any dominion over property in his capacity of a public servant or in the way of his business as a banker, merchant, factor, broker, attorney or agent, commits criminal breach of trust in respect of that property.",
    urduDefinition: "اگر کوئی سرکاری ملازم، بینکر، تاجر، بروکر یا ایجنٹ اپنے فرائضِ منصبی یا کاروباری امانت داری کے تعلق کے تحت سونپے گئے مال یا زمین میں خیانت کرے۔",
    punishment: "Imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
    urduPunishment: "عمر قید، یا 10 سال تک قید، اور ساتھ ہی جرمانہ بھی۔",
    keyPoints: [
      "Highly severe due to the abuse of public trust or fiduciary relationship",
      "Applied regularly in anti-corruption, FIA, and NAB cases"
    ],
    relatedSections: ["405", "406", "Prevention of Corruption Act 1947"],
    keywords: ["public servant fraud", "banker fraud", "fiduciary trust", "corruption", "embezzlement", "accountant fraud", "government money"]
  },
  {
    id: "411",
    section: "411",
    title: "Dishonestly receiving stolen property",
    urduTitle: "مسروقہ (چوری کا) مال بدنیتی سے حاصل کرنا یا رکھنا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever dishonestly receives or retains any stolen property, knowing or having reason to believe the same to be stolen property, shall be punished.",
    urduDefinition: "جو شخص یہ نیت رکھتے ہوئے یا جانتے ہوئے کہ یہ سامان یا رقم چوری شدہ ہے، اسے خریدے، اپنے پاس رکھے یا حاصل کرے۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "3 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Crucial legal rule: 'reason to believe' includes buying items significantly below market value without receipt",
      "Applies to receivers of stolen motor vehicles, mobiles, or jewelry"
    ],
    relatedSections: ["379", "410", "412", "413"],
    keywords: ["stolen property", "stolen goods receiver", "fencing", "possession", "mal-e-masrooqa", "purchasing stolen property"]
  },
  {
    id: "420",
    section: "420",
    title: "Cheating and dishonestly inducing delivery of property",
    urduTitle: "دھوکہ دہی اور بدنیتی سے جائیداد یا رقم منتقل کروانا (دفعہ 420)",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security.",
    urduDefinition: "دھوکہ دہی اور فراڈ۔ جو کوئی کسی کو دھوکہ دے کر اس کے مال، رقم، یا قیمتی دستاویز کو ہڑپ کر لے، یا معاہدہ تبدیل یا ختم کروانے پر مجبور کرے تو وہ دفعہ 420 کا مرتکب ہوتا ہے۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Requires fraudulent or dishonest inducement at the time of transaction",
      "Deception must cause the victim to hand over money or valuable security",
      "Frequently registered alongside Section 406 and 489-F in business disputes"
    ],
    relatedSections: ["415", "417", "406", "468", "489-F"],
    keywords: ["cheating", "fraud", "scam", "deception", "420", "fake commitment", "dhowka", "dhoka", "financial fraud", "property scam", "double shah"]
  },
  {
    id: "427",
    section: "427",
    title: "Mischief causing damage to the amount of fifty rupees",
    urduTitle: "فساد / نقصان دہ حرکت جس سے پچاس روپے یا زائد مالی نقصان ہو",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits mischief (causing destruction of property or any change in it as destroys or diminishes its value) causing loss or damage to the amount of fifty rupees or upwards, shall be punished.",
    urduDefinition: "شرانگیزی یا نقصان رساں کارروائی۔ ایسی حرکت کرنا جس سے کسی دوسرے کی ملکیت والی زمین، گھر، یا مصنوعات کو نقصان پہنچے، جس کی مالیت 50 روپے یا اس سے زائد ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    urduPunishment: "2 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "Requires intent to cause wrongful loss to the public or any person",
      "Often applied in property disputes, broke boundary walls, vandalism, etc."
    ],
    relatedSections: ["425", "426", "430", "440"],
    keywords: ["mischief", "property damage", "vandalism", "destruction", "breaking", "loss", "nuqsan", "tor phor", "vandalize"]
  },
  {
    id: "447",
    section: "447",
    title: "Punishment for criminal trespass",
    urduTitle: "غیر قانونی مداخلتِ بے جا (مداخلتِ مجرمانہ) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits criminal trespass (enters into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy any person in possession of such property) shall be punished.",
    urduDefinition: "جو کوئی کسی ایسی جائیداد یا زمین پر غیر قانونی مداخلت کرے جو کسی دوسرے کے قبضے میں ہو تاکہ کوئی جرم کیا جا سکے یا قابض کو ڈرایا دھمکایا یا پریشان کیا جائے۔",
    punishment: "Imprisonment of either description for a term which may extend to three months, or with fine which may extend to [five hundred] rupees, or with both.",
    urduPunishment: "3 ماہ تک قید، یا 500 روپے جرمانہ، یا دونوں۔",
    keyPoints: [
      "Requires intent to insult, intimidate, annoy, or commit an offence",
      "Mere civil entry is not criminal trespass without the underlying criminal intent"
    ],
    relatedSections: ["441", "442", "448", "452"],
    keywords: ["trespass", "criminal trespass", "land grab", "unlawful exit/entry", "mudakhilat be-ja", "land invasion"]
  },
  {
    id: "448",
    section: "448",
    title: "Punishment for house-trespass",
    urduTitle: "گھر میں زبردستی غیر قانونی داخلہ (مداخلتِ خانہ) کی سزا",
    chapter: "Chapter XVII: Offences Against Property",
    definition: "Whoever commits house-trespass (criminal trespass by entering into or remaining in any building, tent or vessel used as a human dwelling) shall be punished.",
    urduDefinition: "اگر کوئی شخص جرم کرنے یا ہراساں کرنے کی غرض سے کسی کے رہائشی گھر، خیمے، یا رہائشی جگہ میں غیر قانونی طور پر داخل ہو۔",
    punishment: "Imprisonment of either description for a term which may extend to one year, or with fine which may extend to [one thousand] rupees, or with both.",
    urduPunishment: "ایک سال تک قید، یا 1000 روپے جرمانہ، یا دونوں۔",
    keyPoints: [
      "Specifically protects the sanctity of homes and human dwellings",
      "Aggravated class of criminal trespass (Section 447)"
    ],
    relatedSections: ["442", "447", "452", "460"],
    keywords: ["house trespass", "entering home", "home invasion", "unlawful entry", "chardiwari"]
  },
  {
    id: "468",
    section: "468",
    title: "Forgery for purpose of cheating",
    urduTitle: "جعلسازی برائے دھوکہ دہی (دستاویزات میں ہیرا پھیری)",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever commits forgery, intending that the document or electronic record forged shall be used for the purpose of cheating, shall be punished.",
    urduDefinition: "جعلسازی برائے فریب۔ جو شخص اس نیت سے کوئی فرضی یا جھوٹی دستاویز، ڈگری، اسٹامپ پیپر یا بینک ریکارڈ تیار کرے تاکہ اس کے ذریعے دھوکہ دیا جاسکے۔",
    punishment: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    urduPunishment: "7 سال تک قید اور جرمانہ۔",
    keyPoints: [
      "Forgery must be completed (creating false documentation claiming to be signed by someone else)",
      "Essential ingredient: Specific intent to cheat",
      "Widely registered with Section 420 and 471 PPC"
    ],
    relatedSections: ["463", "464", "465", "420", "471"],
    keywords: ["forgery", "fake document", "fake decree", "fake registry", "fraud documents", "jal-sazi", "fake degree", "counterfeit"]
  },
  {
    id: "471",
    section: "471",
    title: "Using as genuine a forged document",
    urduTitle: "جعلی دستاویز کو اصلی بنا کر استعمال کرنا (جرمانہ و سزا)",
    chapter: "Chapter XVIII: Of Offences Relating to Documents",
    definition: "Whoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be a forged document, shall be punished in the same manner as if he had forged such document.",
    urduDefinition: "اگر کوئی شخص یہ جانتے ہوئے یا قوی شبہ رکھتے ہوئے کہ یہ دستاویز فرضی یا جعلی ہے، اسے کہیں اصلی بنا کر پیش کرے (مثلاً عدالت میں جعلی رجسٹری، نوکری کے لیے جعلی ڈگری)۔",
    punishment: "Shall be punished in the same manner as if he had forged such document (Refer to Section 465 or 468 PPC: up to 2 to 7 years imprisonment and fine).",
    urduPunishment: "بالکل اسی سزا کا مستحق ہوگا جیسے اس نے خود یہ دستاوِیز جعل کی ہو (2 سال سے 7 سال تک قید اور جرمانہ)۔",
    keyPoints: [
      "Guilt rests on knowledge/reason to believe that the document was forged",
      "Act of presentation ('using as genuine') is the offence hook"
    ],
    relatedSections: ["465", "468", "471 PPC"],
    keywords: ["using forged document", " জাল-পত্র উপস্থাপন", "fake stamp paper", "fake ID", "counterfeit use", "fraudulent use"]
  },
  {
    id: "489-F",
    section: "489-F",
    title: "Dishonestly issuing a cheque (Cheque Bounce)",
    urduTitle: "بدنیتی کے ساتھ چیک جاری کرنا جو کیش نہ ہو (بائونس ہونا)",
    chapter: "Chapter XVII: Offences Against Property / Financial Acts",
    definition: "Whoever dishonestly issues a cheque towards repayment of a loan or fulfillment of an obligation which is dishonoured on presentation (due to insufficient funds or any other locking intention), shall be punished, unless he can prove to the court that he had made arrangements with his bank.",
    urduDefinition: "بائونس چیک کی دفعہ۔ جو کوئی شخص بدنیتی کے ساتھ قرض کی ادائیگی یا مالی ذمہ داری پوری کرنے کے لیے ایسا چیک جاری کرے جو بینک میں پیش کرنے پر مسترد (ڈس آنر) ہو جائے (رقم کی کمی یا بدنیتی کی وجہ سے)۔",
    punishment: "Imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
    urduPunishment: "3 سال تک کی قید، یا جرمانہ، یا دونوں۔",
    keyPoints: [
      "The cheque must be issued towards repayment of a loan or fulfillment of an obligation (business debt)",
      "It is a bailable offence but widely registered to pressure settlement of financial claims",
      "Defences: Proving written arrangements with the bank or that the cheque was a mere security check with no primary cash obligation"
    ],
    relatedSections: ["420", "406"],
    keywords: ["cheque bounce", "check bounce", "cheque", "dishonoured cheque", "489-F", "financial liability", "payment dispute", "bank check"]
  },
  {
    id: "506",
    section: "506",
    title: "Punishment for criminal intimidation",
    urduTitle: "مجرمانہ دھمکی دینے کی سزا (جان سے مارنے یا نقصان پہنچانے کی دھمکی)",
    chapter: "Chapter XXII: Of Criminal Intimidation, Insult and Annoyance",
    definition: "Whoever commits the offence of criminal intimidation (threatening another with injury to their person, reputation or property with intent to cause alarm) shall be punished.",
    urduDefinition: "دھمکی دینا۔ کسی شخص کی جان، عزت یا جائیداد کو نقصان پہنچانے کی دھمکی دینا تاکہ اس کے دل میں خوف پیدا ہو جائے یا اس سے غیر قانونی کام کروایا جاسکے۔",
    punishment: "Imprisonment of either description for a term which may extend to two years, or with fine, or with both. And if threat be to cause death or grievous hurt, etc., the imprisonment may extend to seven years, or with fine, or with both.",
    urduPunishment: "سادہ دھمکی پر 2 سال تک قید، یا جرمانہ، یا دونوں۔ اگر دھمکی جان سے مارنے، شدید زخمی کرنے یا عورت پر تہمت لگانے کی ہو تو سزا 7 سال تک قید با مشقت اور جرمانہ ہو سکتی ہے۔",
    keyPoints: [
      "Criminal Intimidation (Section 503 PPC) is punishable under 506",
      "Under Part II (violent threats like death/grievous hurt), the offence becomes a severe cognizable matter"
    ],
    relatedSections: ["503", "504", "507"],
    keywords: ["criminal intimidation", "threat", "death threat", "threatening", "harrassment", "dhamki", "threaten", "jan se marna"]
  }
];
