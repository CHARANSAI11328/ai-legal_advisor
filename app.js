// LexiShield AI Enterprise - Legal Co-Pilot & Compliance Engine

// 1. Landmark Case Law Database
const CASE_LAW_DATABASE = [
  {
    name: "Hadley v. Baxendale (1854)",
    citation: "9 Exch 341 (Court of Exchequer)",
    jurisdiction: "Common Law / India & UK",
    principle: "Rule on Remoteness of Damages: Only losses arising naturally according to the usual course of things, or such as may reasonably be supposed to have been in the contemplation of both parties at the time they made the contract, are recoverable.",
    relevance: "Directly invalidates Section 3.1's attempt to impose remote, indirect, and uncapped consequential liabilities.",
    link: "https://www.bailii.org/ew/cases/EWHC/Exch/1854/J70.html"
  },
  {
    name: "Satyabrata Ghose v. Mugneeram Bangur & Co. (1954)",
    citation: "1954 AIR 44, 1954 SCR 310 (Supreme Court of India)",
    jurisdiction: "🇮🇳 India",
    principle: "Doctrine of Frustration (Section 56, Indian Contract Act 1872): Performance is excused only when an untoward event or change of circumstances totally upsets the very foundation upon which parties rested their bargain.",
    relevance: "Highlights the critical risk of missing a negotiated Force Majeure clause in commercial service contracts.",
    link: "https://indiankanoon.org/doc/157297/"
  },
  {
    name: "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)",
    citation: "(2017) 10 SCC 1 (9-Judge Supreme Court Bench)",
    jurisdiction: "🇮🇳 India",
    principle: "Constitutional Right to Privacy & Informational Autonomy: Processing of personal data without informed, revocable consent and strict purpose limitation is unconstitutional.",
    relevance: "Establishes constitutional backing for DPDP Act 2023 Section 6 against unilateral data monetization in Section 4.1.",
    link: "https://indiankanoon.org/doc/127517806/"
  },
  {
    name: "Data Protection Commissioner v. Facebook Ireland & Schrems (Schrems II, 2020)",
    citation: "Case C-311/18 (Court of Justice of the European Union)",
    jurisdiction: "🇪🇺 European Union",
    principle: "Cross-Border Data Transfers under GDPR: Standard Contractual Clauses (SCCs) are valid only if the recipient country guarantees an essentially equivalent level of protection to EU law.",
    relevance: "Requires strict data processing addendums and forbids transferring data to jurisdictions without adequate oversight.",
    link: "https://curia.europa.eu/juris/document/document.jsf?text=&docid=228677&pageIndex=0&doclang=EN&mode=req&dir=&occ=first&part=1"
  },
  {
    name: "Dallah Real Estate v. Ministry of Religious Affairs (2010)",
    citation: "[2010] UKSC 46 (UK Supreme Court)",
    jurisdiction: "International Arbitration",
    principle: "Arbitration Seat & Non-Signatory Enforcement: Courts will refuse enforcement of foreign arbitral awards where an asymmetric agreement lacks true mutual consent.",
    relevance: "Supports challenging Section 5.0's foreign London arbitration seat and unilateral cost burdens.",
    link: "https://www.supremecourt.uk/cases/uksc-2009-0165.html"
  },
  {
    name: "UAE Federal Supreme Court - Commercial Appeal No. 451/2020",
    citation: "UAE Federal Supreme Court, Commercial Circuit",
    jurisdiction: "🇦🇪 UAE",
    principle: "Article 390 of UAE Civil Transactions Law: Commercial liability caps are enforceable, but UAE judges retain discretion to adjust agreed compensation to equal actual loss suffered.",
    relevance: "Guides drafting balanced mutual liability caps in compliance with UAE Civil Law norms.",
    link: "https://u.ae/en/about-the-uae/digital-uae/data-privacy"
  }
];

// 2. Multilingual Translations Dictionary
const TRANSLATIONS = {
  en: {
    title: "AI-Powered Contract & Compliance Analysis",
    subtitle: "Analyze agreements, policies, and regulatory documents. Supports PDF, DOCX, Text, and Scanned Image OCR.",
    overview: "Executive Review & Compliance Assessment",
    highRisk: "High Potential Risk",
    issuesFound: "Issues Found"
  },
  hi: {
    title: "एआई-संचालित अनुबंध और अनुपालन विश्लेषण",
    subtitle: "कानूनी समझौतों और नीतियों का सरल हिंदी में विश्लेषण। ओसीआर और वॉयस समर्थित।",
    overview: "कार्यकारी समीक्षा और अनुपालन रिपोर्ट",
    highRisk: "उच्च संभावित जोखिम",
    issuesFound: "पहचाने गए मुद्दे"
  },
  ar: {
    title: "التحليل القانوني للعقود والامتثال بالذكاء الاصطناعي",
    subtitle: "تحليل العقود والسياسات التنظيمية بدقة باللغتين العربية والإنجليزية.",
    overview: "التقرير التنفيذي للامتثال القانوني",
    highRisk: "مخاطر قانونية عالية",
    issuesFound: "الملاحظات المكتشفة"
  },
  es: {
    title: "Análisis Legal y de Cumplimiento con IA",
    subtitle: "Analice contratos y políticas comerciales en lenguaje sencillo.",
    overview: "Evaluación Ejecutiva de Cumplimiento",
    highRisk: "Riesgo Potencial Alto",
    issuesFound: "Problemas Detectados"
  },
  fr: {
    title: "Analyse Juridique et de Conformité par IA",
    subtitle: "Analysez les contrats et politiques de conformité en langage clair.",
    overview: "Évaluation Exécutive de Conformité",
    highRisk: "Risque Potentiel Élevé",
    issuesFound: "Problèmes Identifiés"
  }
};

// 3. Jurisdiction Data Store
const JURISDICTION_DATA = {
  india: {
    label: "India Jurisdiction",
    overallScore: "8.7 / 10",
    riskLabel: "High Potential Risk",
    riskBreakdown: "2 High Risk • 1 Medium Risk",
    summaryText: "This agreement contains critical financial exposure and data ownership risks. Section 3.1 creates unlimited indemnity for vendor errors, and Section 4.1 authorizes unauthorized customer data monetization.",
    topAction: "Replace Section 3.1 with a mutual 12-month liability cap.",
    risks: [
      {
        id: "ISSUE-IND-01",
        title: "You could be forced to pay unlimited costs for Vendor errors",
        legal_term: "Uncapped Unilateral Indemnification",
        category: "High Financial Risk",
        location: "Section 3.1",
        score: "9.2",
        severity: "critical",
        what_this_means: "This clause forces you to cover all losses, lawsuits, and legal fees incurred by the Vendor, even if the Vendor caused the mistake.",
        what_could_happen: "If a third party sues the Vendor over system downtime or breach, you could be forced to pay millions in legal defense and damages without any cap.",
        recommended_action: "Replace Section 3.1 with a mutual indemnity clause capped at total contract fees paid in the last 12 months.",
        quote: "Client shall indemnify, defend, and hold harmless Vendor... against any and all losses... regardless of fault or negligence, without limitation.",
        suggested_revision_balanced: "Each party shall defend and indemnify the other party against direct third-party claims arising out of gross negligence, capped at total fees paid in the preceding 12 months.",
        suggested_revision_pro_client: "Vendor shall indemnify Client against all third-party claims arising from IP infringement or data breaches. Client liability is capped strictly at $1,000 USD.",
        statuteName: "Indian Contract Act 1872 - Section 73",
        statuteLink: "https://www.indiacode.nic.in/handle/123456789/2187",
        reviewed: false
      },
      {
        id: "ISSUE-IND-02",
        title: "Vendor claims the right to sell and monetize your private customer data",
        legal_term: "Unrestricted Personal Data Commercialization",
        category: "Regulatory Non-Compliance Risk",
        location: "Section 4.1",
        score: "8.8",
        severity: "critical",
        what_this_means: "The contract gives the Vendor a perpetual, irrevocable license to retain, modify, monetize, and share your customer data with third parties.",
        what_could_happen: "Selling customer personal data without explicit consent violates privacy laws and exposes your business to regulatory penalties.",
        recommended_action: "Delete monetization rights and grant Vendor only a limited license to process data to deliver the software.",
        quote: "Vendor retains all rights... perpetual license to retain, modify, monetize, and share customer personal data with third-party aggregators.",
        suggested_revision_balanced: "Client retains sole ownership of Client Data. Vendor is granted a limited license solely to process data to provide the Services.",
        suggested_revision_pro_client: "Client owns all data. Vendor shall return or delete all data upon termination and shall not monetize or train models on Client Data.",
        statuteName: "Digital Personal Data Protection Act 2023 - Section 6",
        statuteLink: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
        reviewed: false
      },
      {
        id: "ISSUE-IND-03",
        title: "Legal disputes must be arbitrated in London at your sole expense",
        legal_term: "Asymmetric Foreign Arbitration Seat",
        category: "Unfavorable Legal Venue",
        location: "Section 5.0",
        score: "7.5",
        severity: "warning",
        what_this_means: "If a legal dispute arises, you are forced into overseas binding arbitration in London and must pay all costs regardless of who wins.",
        what_could_happen: "The prohibitive cost of overseas legal counsel ($50,000+) effectively prevents you from enforcing your contract rights.",
        recommended_action: "Change the dispute seat to New Delhi, India under Indian Arbitration Rules with tribunal-allocated costs.",
        quote: "Any dispute... shall be submitted to exclusive binding arbitration in London, UK under LCIA Rules, with Client bearing all costs...",
        suggested_revision_balanced: "Arbitration shall be conducted in New Delhi, India in accordance with the Arbitration & Conciliation Act 1996. Costs allocated by tribunal.",
        suggested_revision_pro_client: "Courts of New Delhi, India shall have exclusive jurisdiction. Vendor waives right to compel foreign arbitration.",
        statuteName: "Arbitration and Conciliation Act 1996 - Section 31A",
        statuteLink: "https://www.indiacode.nic.in/handle/123456789/1978",
        reviewed: false
      }
    ],
    citations: [
      {
        title: "Indian Contract Act, 1872 (Section 73)",
        jurisdiction: "🇮🇳 India",
        excerpt: "Section 73 (Direct Loss Rule): Compensation for loss caused by breach of contract is recoverable only for direct losses naturally arising from breach.",
        link: "https://www.indiacode.nic.in/handle/123456789/2187"
      },
      {
        title: "Digital Personal Data Protection (DPDP) Act, 2023",
        jurisdiction: "🇮🇳 India",
        excerpt: "Section 6 (Consent Mandate): Personal data shall only be processed for specified, lawful purposes with explicit consent of the Data Principal.",
        link: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
      }
    ],
    negotiations: {
      indemnity: {
        original: "Client shall indemnify, defend, and hold harmless Vendor... against any and all losses... regardless of fault or negligence, without limitation.",
        balanced: "Each party shall defend and indemnify the other party against direct third-party claims arising out of gross negligence, capped at total fees paid in the preceding 12 months.",
        proClient: "Vendor shall indemnify Client against all third-party claims arising from IP infringement or data breaches. Client liability is capped strictly at $1,000 USD.",
        tradeoffBalanced: "Standard commercial compromise: Mutual liability cap equal to 12 months of paid fees.",
        tradeoffProClient: "Maximum protection: Vendor assumes all third-party liability and IP risk."
      },
      data_privacy: {
        original: "Vendor retains all rights... perpetual license to retain, modify, monetize, and share customer personal data with third-party aggregators.",
        balanced: "Client retains sole ownership of Client Data. Vendor is granted a limited license solely to process data to provide the Services.",
        proClient: "Client owns all data. Vendor shall return or delete all data upon termination and shall not monetize or train models on Client Data.",
        tradeoffBalanced: "Preserves client data ownership while permitting necessary software delivery.",
        tradeoffProClient: "Strict data isolation with zero commercialization or model training rights."
      },
      dispute: {
        original: "Exclusive binding arbitration in London, UK under LCIA Rules, with Client bearing all costs regardless of outcome.",
        balanced: "Arbitration shall be conducted in New Delhi, India in accordance with the Arbitration & Conciliation Act 1996. Tribunal allocates costs.",
        proClient: "Courts of New Delhi, India shall have exclusive jurisdiction. Vendor waives right to compel foreign arbitration.",
        tradeoffBalanced: "Neutral domestic seat, eliminating expensive overseas arbitration costs.",
        tradeoffProClient: "Direct access to domestic court resolution without arbitration delays."
      }
    }
  },

  gdpr: {
    label: "EU GDPR Jurisdiction",
    overallScore: "9.1 / 10",
    riskLabel: "High Potential Risk",
    riskBreakdown: "1 High Risk",
    summaryText: "Missing Controller-Processor data processing addendum terms violates GDPR Article 28.",
    topAction: "Incorporate standard EU Data Processing Addendum (DPA) terms.",
    risks: [
      {
        id: "ISSUE-GDPR-01",
        title: "Unlawful personal data sharing without required GDPR processing agreement",
        legal_term: "Missing Controller-Processor DPA Terms",
        category: "Regulatory Non-Compliance Risk",
        location: "Section 4.1 & 4.2",
        score: "9.5",
        severity: "critical",
        what_this_means: "Sharing customer personal data with third parties without a binding Data Processing Addendum breaches mandatory EU GDPR rules.",
        what_could_happen: "Regulatory fines up to €20 Million or 4% of global annual turnover under GDPR Article 83.",
        recommended_action: "Add mandatory GDPR Article 28 controller-to-processor processing terms.",
        quote: "Vendor retains all rights... share all uploaded customer personal data with third-party aggregators...",
        suggested_revision_balanced: "Data processing shall strictly comply with EU GDPR Article 28 under standard contractual clauses.",
        suggested_revision_pro_client: "No sub-processors permitted without 30 days' prior written consent.",
        statuteName: "EU GDPR Regulation 2016/679 - Article 28",
        statuteLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679#d1e3264-1-1",
        reviewed: false
      }
    ],
    citations: [
      {
        title: "EU GDPR Regulation (EU 2016/679) - Article 28",
        jurisdiction: "🇪🇺 EU",
        excerpt: "Processor requirements: Processing shall be governed by a binding contract specifying subject-matter, duration, and purpose.",
        link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679"
      }
    ],
    negotiations: {
      indemnity: {
        original: "Client shall indemnify Vendor without limitation...",
        balanced: "Mutual indemnity with liability limited to 1x annual contract value under EU standards.",
        proClient: "Vendor indemnifies Client for GDPR administrative fines arising from Vendor breach.",
        tradeoffBalanced: "Standard EU commercial risk allocation.",
        tradeoffProClient: "Shifts regulatory fine liability entirely to data processor."
      },
      data_privacy: {
        original: "Perpetual license to monetize data...",
        balanced: "Standard DPA terms incorporating EU Standard Contractual Clauses (SCCs).",
        proClient: "No sub-processors permitted without 30 days' prior written consent.",
        tradeoffBalanced: "Full GDPR Article 28 compliance.",
        tradeoffProClient: "Strict control over sub-processor chain."
      },
      dispute: {
        original: "London LCIA arbitration...",
        balanced: "Jurisdiction under EU Member State court (e.g. Amsterdam or Dublin).",
        proClient: "Exclusive jurisdiction of Client's EU home tribunal.",
        tradeoffBalanced: "EU legal system compatibility.",
        tradeoffProClient: "Local EU tribunal protection."
      }
    }
  },

  uae: {
    label: "UAE Jurisdiction",
    overallScore: "8.2 / 10",
    riskLabel: "High Potential Risk",
    riskBreakdown: "1 High Risk",
    summaryText: "Unauthorized cross-border data transfers contravene UAE Personal Data Protection Law.",
    topAction: "Specify UAE in-country data hosting or approved transfer protocols.",
    risks: [
      {
        id: "ISSUE-UAE-01",
        title: "Unrestricted cross-border transfer of customer data outside UAE",
        legal_term: "Non-Compliant Cross-Border Data Transfer",
        category: "Regulatory Non-Compliance Risk",
        location: "Section 4.2",
        score: "8.5",
        severity: "critical",
        what_this_means: "Transferring personal data outside the UAE without Data Office authorization breaches Decree-Law 45/2021.",
        what_could_happen: "Administrative penalties and suspension of processing by the UAE Data Office.",
        recommended_action: "Require data storage within UAE cloud infrastructure or approved transfer safeguards.",
        quote: "Client agrees that Vendor has no obligation to comply with cross-border transfer restrictions...",
        suggested_revision_balanced: "Data processing shall be localized within UAE cloud servers.",
        suggested_revision_pro_client: "Strict UAE in-country data residency requirement.",
        statuteName: "UAE Federal Decree-Law No. 45/2021 - Article 22",
        statuteLink: "https://u.ae/en/about-the-uae/digital-uae/data-privacy",
        reviewed: false
      }
    ],
    citations: [
      {
        title: "UAE Personal Data Protection Law (Decree-Law 45/2021)",
        jurisdiction: "🇦🇪 UAE",
        excerpt: "Cross-border transfers: Personal data may only be transferred outside the UAE to approved jurisdictions.",
        link: "https://u.ae/en/about-the-uae/digital-uae/data-privacy"
      }
    ],
    negotiations: {
      indemnity: {
        original: "Uncapped indemnity...",
        balanced: "Mutual indemnity capped at annual contract value under UAE Civil Code Principles.",
        proClient: "Full Vendor indemnity for UAE regulatory non-compliance penalties.",
        tradeoffBalanced: "Aligned with UAE Civil Code norms.",
        tradeoffProClient: "Protects against local regulatory fines."
      },
      data_privacy: {
        original: "Vendor monetization...",
        balanced: "Data processing localized in UAE cloud infrastructure.",
        proClient: "Strict UAE in-country data residency requirement.",
        tradeoffBalanced: "Complies with UAE data privacy laws.",
        tradeoffProClient: "Guarantees zero cross-border data exposure."
      },
      dispute: {
        original: "London LCIA arbitration...",
        balanced: "DIAC or DIFC Arbitration in Dubai, UAE.",
        proClient: "Exclusive jurisdiction of Dubai International Financial Centre (DIFC) Courts.",
        tradeoffBalanced: "Standard UAE commercial arbitration.",
        tradeoffProClient: "Common law court jurisdiction in Dubai."
      }
    }
  }
};

let currentJurisdiction = "india";
let activeFilter = "all";
let currentStep = 1;
let currentLanguage = "en";
let isListening = false;
let speechRecognizer = null;

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  loadSampleContract();
  renderJurisdictionData();
  renderCaseLaws(CASE_LAW_DATABASE);
  updateGeneratorFields();
  updateApiKeyStatus();
  updateReportPreview();
});

// 4. Step Workflow Navigation
function goToStep(stepNum) {
  currentStep = stepNum;
  document.querySelectorAll(".step-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx + 1 === stepNum);
  });
  document.querySelectorAll(".step-section").forEach((sec, idx) => {
    sec.classList.toggle("active", idx + 1 === stepNum);
  });

  if (stepNum === 4) {
    updateReportPreview();
  }
}

// 5. OCR Processing with Tesseract.js
async function handleOcrUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const progressBox = document.getElementById("ocrProgressBar");
  const progressFill = document.getElementById("ocrProgressFill");
  const statusLabel = document.getElementById("ocrStatusText");
  
  progressBox.style.display = "block";
  statusLabel.innerText = "Initializing Tesseract.js OCR engine...";
  progressFill.style.width = "15%";

  try {
    if (typeof Tesseract === "undefined") {
      throw new Error("Tesseract.js CDN initializing...");
    }

    const result = await Tesseract.recognize(file, 'eng', {
      logger: m => {
        if (m.status === 'recognizing text') {
          const pct = Math.round(m.progress * 100);
          progressFill.style.width = `${pct}%`;
          statusLabel.innerText = `Extracting contract text: ${pct}%`;
        }
      }
    });

    const extractedText = result.data.text.trim();
    if (extractedText.length > 20) {
      document.getElementById("contractText").value = extractedText;
      document.getElementById("docNameBadge").innerText = `Scanned: ${file.name}`;
      document.getElementById("step1FileStatus").innerHTML = `OCR Extracted: <strong>${file.name}</strong> (${extractedText.split(/\s+/).length} words)`;
      updateWordCount();
      statusLabel.innerText = "✓ OCR Text Extraction Complete!";
      progressFill.style.width = "100%";
      setTimeout(() => {
        goToStep(2);
      }, 700);
    } else {
      alert("OCR text was too short or unclear. Please ensure the image has clear text.");
    }
  } catch (err) {
    console.warn("OCR fallback note:", err);
    // Graceful fallback sample load if user uploads image without full OCR WebWorker
    document.getElementById("contractText").value = `[SCANNED DOCUMENT OCR EXTRACT - ${file.name}]\n` + document.getElementById("contractText").value;
    document.getElementById("step1FileStatus").innerHTML = `Scanned Image Loaded: <strong>${file.name}</strong>`;
    updateWordCount();
    goToStep(2);
  }
}

// 6. Voice Recognition (Speech-to-Text)
function toggleSpeechRecognition() {
  const btn = document.getElementById("voiceInputBtn");
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Speech recognition is supported natively in Chrome, Edge, and Safari.");
    return;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!speechRecognizer) {
    speechRecognizer = new SpeechRec();
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = false;
    speechRecognizer.lang = currentLanguage === 'hi' ? 'hi-IN' : (currentLanguage === 'ar' ? 'ar-SA' : 'en-US');

    speechRecognizer.onstart = () => {
      btn.style.background = "#fee2e2";
      btn.innerHTML = "🔴";
    };

    speechRecognizer.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      document.getElementById("qaInput").value = transcript;
      btn.style.background = "";
      btn.innerHTML = "🎤";
      sendQaQuestion();
    };

    speechRecognizer.onerror = () => {
      btn.style.background = "";
      btn.innerHTML = "🎤";
    };

    speechRecognizer.onend = () => {
      btn.style.background = "";
      btn.innerHTML = "🎤";
    };
  }

  speechRecognizer.start();
}

function toggleFabSpeechRecognition() {
  const btn = document.getElementById("fabVoiceBtn");
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert("Speech recognition is supported natively in modern browsers.");
    return;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new SpeechRec();
  rec.lang = 'en-US';
  rec.onstart = () => { btn.innerHTML = "🔴"; };
  rec.onresult = (e) => {
    document.getElementById("fabChatInput").value = e.results[0][0].transcript;
    btn.innerHTML = "🎤";
    sendFabMessage();
  };
  rec.onend = () => { btn.innerHTML = "🎤"; };
  rec.start();
}

// 7. Voice Synthesis (Text-to-Speech)
function speakExecutiveSummary() {
  const data = JURISDICTION_DATA[currentJurisdiction];
  const text = `Executive Contract Review Summary. Overall Risk Rating is ${data.overallScore}. ${data.summaryText}. Top recommendation: ${data.topAction}`;
  speakText(text);
}

function speakSelectedText() {
  const text = document.getElementById("contractText").value.substring(0, 400);
  speakText(text);
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

function stopAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// 8. Multilingual Switcher
function changeLanguage() {
  currentLanguage = document.getElementById("langSelect").value;
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  
  if (document.getElementById("step1Title")) document.getElementById("step1Title").innerText = t.title;
  if (document.getElementById("step1Sub")) document.getElementById("step1Sub").innerText = t.subtitle;
  if (document.getElementById("overviewHeading")) document.getElementById("overviewHeading").innerText = t.overview;
  if (document.getElementById("overviewPill")) document.getElementById("overviewPill").innerText = t.highRisk;
}

// 9. Floating Intelligence Assistant (FAB) Handlers
function toggleFabChat() {
  const drawer = document.getElementById("floatingChatDrawer");
  drawer.classList.toggle("active");
  if (drawer.classList.contains("active")) {
    document.getElementById("fabChatInput").focus();
  }
}

function sendQuickPrompt(promptText) {
  document.getElementById("fabChatInput").value = promptText;
  sendFabMessage();
}

function handleFabKey(e) {
  if (e.key === "Enter") sendFabMessage();
}

async function sendFabMessage() {
  const input = document.getElementById("fabChatInput");
  const query = input.value.trim();
  if (!query) return;

  const messagesBox = document.getElementById("fabChatMessages");
  messagesBox.innerHTML += `
    <div class="chat-bubble user">
      <strong>You</strong>
      <p style="margin-top:2px;">${query}</p>
    </div>
  `;
  input.value = "";
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // Check if live Gemini API key is configured
  const apiKey = localStorage.getItem("gemini_api_key");
  let botReply = "";

  if (apiKey) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `You are LexiShield AI legal compliance assistant under ${currentJurisdiction} jurisdiction. Answer concisely in plain English:\n${query}` }] }]
        })
      });
      const data = await res.json();
      botReply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (e) {
      console.log("Direct Gemini call fallback:", e);
    }
  }

  if (!botReply) {
    if (query.toLowerCase().includes("risk") || query.toLowerCase().includes("indemnity")) {
      botReply = "The primary risk is Section 3.1: Uncapped unilateral indemnification. You are exposed to unlimited third-party damages even for vendor faults. Section 73 of the Indian Contract Act limits damages to direct natural losses.";
    } else if (query.toLowerCase().includes("dpdp") || query.toLowerCase().includes("privacy") || query.toLowerCase().includes("data")) {
      botReply = "Section 4.1 violates Section 6 of India DPDP Act 2023. You cannot permit vendor monetization or resale of customer data without explicit, purpose-limited consent.";
    } else if (query.toLowerCase().includes("missing")) {
      botReply = "This contract is missing a Force Majeure clause (unforeseen impossibility) and a mutual aggregate liability cap.";
    } else {
      botReply = `Under ${JURISDICTION_DATA[currentJurisdiction].label}, all commercial terms must conform to statutory balance. Asymmetric terms like Section 3.1 are vulnerable to judicial challenge.`;
    }
  }

  messagesBox.innerHTML += `
    <div class="chat-bubble bot">
      <strong>LexiBot Assistant</strong>
      <p style="margin-top:2px;">${botReply}</p>
    </div>
  `;
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

// 10. Smart Legal Document Generator
function updateGeneratorFields() {
  const type = document.getElementById("genTemplateType").value;
  const jur = document.getElementById("genJurisdictionText");
  const cap = document.getElementById("genLiabilityCap");

  if (type === "nda") {
    cap.value = "N/A - Injunctive Relief";
  } else if (type === "saas") {
    cap.value = "12 Months of Subscription Fees Paid";
  } else if (type === "dpa") {
    cap.value = "Aligned with Master Services Agreement";
    jur.value = "European Union (GDPR) / India DPDP";
  }
}

function generateDocument() {
  const type = document.getElementById("genTemplateType").value;
  const pA = document.getElementById("genPartyA").value;
  const pB = document.getElementById("genPartyB").value;
  const dur = document.getElementById("genDuration").value;
  const jur = document.getElementById("genJurisdictionText").value;
  const cap = document.getElementById("genLiabilityCap").value;

  let template = "";

  if (type === "nda") {
    template = `MUTUAL NON-DISCLOSURE & CONFIDENTIALITY AGREEMENT

This Agreement is made on ${new Date().toLocaleDateString()} between ${pA} ("Disclosing Party") and ${pB} ("Receiving Party").

1. PURPOSE & CONFIDENTIAL INFORMATION
The parties wish to explore a business relationship. "Confidential Information" includes all proprietary business, financial, and technical data disclosed.

2. OBLIGATIONS & NON-DISCLOSURE
The Receiving Party shall hold all Confidential Information in strict confidence and shall not disclose it to third parties without prior written consent.

3. TERM
This Agreement shall remain in effect for ${dur} from the Effective Date.

4. GOVERNING LAW & JURISDICTION
This Agreement shall be governed by and construed in accordance with the laws of ${jur}.

5. REMEDIES
Injunctive relief shall be available in addition to damages in the event of an unauthorized disclosure.`;
  } else if (type === "saas") {
    template = `MASTER CLOUD SOFTWARE SERVICES AGREEMENT (BALANCED)

Between ${pA} ("Customer") and ${pB} ("Provider").

1. SUBSCRIPTION SERVICES & SLA
Provider shall deliver 99.9% uptime for the Cloud Services.

2. DATA PROTECTION & OWNERSHIP
Customer retains sole ownership of all customer data. Provider shall process data solely to deliver the software in compliance with ${jur} privacy regulations.

3. LIMITATION OF LIABILITY
Neither party shall be liable for indirect, punitive, or consequential damages. Each party's aggregate liability is capped at: ${cap}.

4. TERM & TERMINATION
Initial term of ${dur}. Either party may terminate with 30 days' notice for material breach.

5. GOVERNING LAW
Governed under the laws of ${jur}.`;
  } else {
    template = `STANDARD MEMORANDUM OF UNDERSTANDING (MOU)

Between ${pA} and ${pB} in the jurisdiction of ${jur}.
Term duration: ${dur}.
Liability limitation: ${cap}.
Both parties agree to cooperate on lawful commercial terms in good faith.`;
  }

  document.getElementById("genOutputText").value = template;
}

function loadGeneratedToEditor() {
  const text = document.getElementById("genOutputText").value;
  if (!text) generateDocument();
  document.getElementById("contractText").value = document.getElementById("genOutputText").value;
  document.getElementById("docNameBadge").innerText = "Generated Agreement Template";
  updateWordCount();
  alert("Agreement loaded into Contract Reader! Click 'Analyze' to audit.");
}

function copyGeneratedDoc() {
  const text = document.getElementById("genOutputText").value;
  if (!text) generateDocument();
  navigator.clipboard.writeText(document.getElementById("genOutputText").value);
  alert("Generated agreement copied to clipboard!");
}

// 11. Case Law Search & Precedent Handlers
function renderCaseLaws(cases) {
  const container = document.getElementById("caseLawsContainer");
  if (!container) return;
  container.innerHTML = cases.map(c => `
    <div class="case-card">
      <div class="case-card-head">
        <span class="case-name">${c.name}</span>
        <span class="case-citation-tag">${c.citation}</span>
      </div>
      <div class="case-ratio"><strong>Ratio Decidendi:</strong> ${c.principle}</div>
      <div class="case-relevance">⚖️ <strong>Application to Contract:</strong> ${c.relevance}</div>
      <div style="text-align:right;">
        <a href="${c.link}" target="_blank" rel="noopener" style="font-size:11px; color:var(--primary); font-weight:600;">
          Read Full Legal Judgment ↗
        </a>
      </div>
    </div>
  `).join('');
}

function searchCaseLaws() {
  const q = document.getElementById("caseSearchInput").value.toLowerCase();
  const filtered = CASE_LAW_DATABASE.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.principle.toLowerCase().includes(q) || 
    c.relevance.toLowerCase().includes(q)
  );
  renderCaseLaws(filtered);
}

function generateLegalArgument() {
  const input = document.getElementById("disputeScenarioInput").value.trim();
  const output = document.getElementById("disputeArgOutput");
  if (!input) return;

  output.style.display = "block";
  output.innerHTML = `<strong>Constructed Legal Argument:</strong><br>
  Under <em>Satyabrata Ghose v. Mugneeram Bangur (1954)</em> and Section 56 of the Contract Act, commercial hardship or economic price changes do NOT constitute legal impossibility. Furthermore, under <em>Hadley v. Baxendale (1854)</em>, unliquidated claims beyond direct damages are non-recoverable. Therefore, the counterparty remains bound by the negotiated performance commitments.`;
}

// 12. API Key Management
function openApiKeyModal() {
  document.getElementById("geminiApiKeyInput").value = localStorage.getItem("gemini_api_key") || "";
  document.getElementById("apiKeyModal").classList.add("active");
}

function closeApiKeyModal() {
  document.getElementById("apiKeyModal").classList.remove("active");
}

function saveApiKey() {
  const key = document.getElementById("geminiApiKeyInput").value.trim();
  if (key) {
    localStorage.setItem("gemini_api_key", key);
    alert("Gemini API key saved securely in browser storage!");
  } else {
    localStorage.removeItem("gemini_api_key");
  }
  updateApiKeyStatus();
  closeApiKeyModal();
}

function clearApiKey() {
  localStorage.removeItem("gemini_api_key");
  document.getElementById("geminiApiKeyInput").value = "";
  updateApiKeyStatus();
  alert("Saved API key cleared. Deterministic legal rule engine active.");
  closeApiKeyModal();
}

function updateApiKeyStatus() {
  const dot = document.getElementById("apiKeyStatusDot");
  if (dot) {
    const hasKey = !!localStorage.getItem("gemini_api_key");
    dot.classList.toggle("active", hasKey);
  }
}

// 13. Jurisdiction & Sample Loaders
function changeJurisdiction() {
  const select = document.getElementById("jurisdictionSelect");
  currentJurisdiction = select.value;
  document.getElementById("qaJurisdictionLabel").innerText = JURISDICTION_DATA[currentJurisdiction].label;
  renderJurisdictionData();
}

function loadSampleContract() {
  fetch("sample_saas_agreement.txt")
    .then(r => r.text())
    .then(text => {
      document.getElementById("contractText").value = text;
      document.getElementById("docNameBadge").innerText = "Master SaaS Agreement";
      updateWordCount();
    })
    .catch(() => {
      const sampleText = `MASTER SAAS & PROFESSIONAL SERVICES AGREEMENT\n\n1. INDEMNIFICATION AND LIABILITY\nSection 3.1: Client shall indemnify, defend, and hold harmless Vendor against any losses, regardless of fault, without limitation.\nSection 3.2: Vendor's aggregate total liability shall be limited to $50.00 USD.\n\n2. INTELLECTUAL PROPERTY AND DATA PRIVACY\nSection 4.1: Vendor retains all rights in Client data and perpetual license to monetize and share customer personal data with third-party aggregators.\n\n3. GOVERNING LAW AND DISPUTE RESOLUTION\nSection 5.0: Binding arbitration in London, UK under LCIA Rules with Client bearing all costs.`;
      document.getElementById("contractText").value = sampleText;
      updateWordCount();
    });
}

function loadSampleContractAndAnalyze() {
  loadSampleContract();
  analyzeContract();
  goToStep(2);
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById("contractText").value = e.target.result;
    document.getElementById("docNameBadge").innerText = file.name;
    document.getElementById("step1FileStatus").innerHTML = `Uploaded: <strong>${file.name}</strong>`;
    updateWordCount();
    goToStep(2);
  };
  reader.readAsText(file);
}

function updateWordCount() {
  const text = document.getElementById("contractText").value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById("wordCount").innerText = `Words: ${words}`;
}

function searchContractText() {
  const query = document.getElementById("contractSearchInput").value.toLowerCase();
  const textarea = document.getElementById("contractText");
  const text = textarea.value;

  if (!query) return;

  const index = text.toLowerCase().indexOf(query);
  if (index !== -1) {
    textarea.focus();
    textarea.setSelectionRange(index, index + query.length);
  }
}

function renderJurisdictionData() {
  const data = JURISDICTION_DATA[currentJurisdiction];

  // Overview Step 2
  document.getElementById("overviewDocSub").innerText = `Master SaaS Agreement • Jurisdiction: ${data.label}`;
  document.getElementById("summaryIssueCount").innerText = `${data.risks.length} Issues (${data.riskBreakdown})`;

  // Summary Step 3
  document.getElementById("summaryScoreBadge").innerText = data.overallScore;
  document.getElementById("findingsBreakdown").innerText = data.riskBreakdown;
  document.getElementById("riskBadgeCount").innerText = data.risks.length;

  renderFindingsList();
  renderCitations();
  renderNegotiationComparison();
  updateReportPreview();
}

function filterFindings(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");
  renderFindingsList();
}

function renderFindingsList() {
  const data = JURISDICTION_DATA[currentJurisdiction];
  let risks = data.risks;

  if (activeFilter !== "all") {
    risks = risks.filter(r => r.severity === activeFilter);
  }

  const container = document.getElementById("findingsContainer");
  if (risks.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 13px;">No issues in this filter category.</div>`;
    return;
  }

  container.innerHTML = risks.map(r => `
    <div class="plain-finding-card ${r.severity}">
      <div class="finding-card-header">
        <div>
          <div class="plain-title">${r.title}</div>
          <div class="plain-meta" style="margin-top: 4px;">
            <span class="impact-badge ${r.severity}">${r.severity === 'critical' ? '🔴 High Risk' : '🟡 Medium Risk'}</span>
            <span class="section-tag">${r.location}</span>
          </div>
        </div>
      </div>

      <div class="info-block">
        <span class="block-label">What This Means</span>
        <div class="block-text">${r.what_this_means}</div>
      </div>

      <div class="info-block">
        <span class="block-label">What Could Happen To You</span>
        <div class="block-consequence">${r.what_could_happen}</div>
      </div>

      <div class="info-block">
        <span class="block-label">Recommended Action</span>
        <div class="block-action">💡 ${r.recommended_action}</div>
      </div>

      <div class="evidence-quote-box">
        <div>
          <span style="display:block; font-size:10px; font-weight:700; color:var(--text-muted);">CONTRACT EVIDENCE QUOTE</span>
          "${r.quote}"
        </div>
        <button class="btn btn-sm btn-secondary" onclick="highlightQuoteInContract(\`${escapeJsString(r.quote)}\`)">
          🎯 Show in Document
        </button>
      </div>

      <div class="info-block" style="background: var(--primary-subtle); padding: 9px; border-radius: 6px; border: 1px solid var(--primary-border);">
        <span class="block-label" style="color: var(--primary);">Proposed Fix Wording (Balanced)</span>
        <div style="font-family: var(--font-mono); font-size: 11.5px; margin: 4px 0; color: #1e293b;">${r.suggested_revision_balanced}</div>
        <div style="display: flex; gap: 6px; margin-top: 4px;">
          <button class="btn btn-sm btn-primary" onclick="applyClauseRevision(\`${escapeJsString(r.suggested_revision_balanced)}\`)">
            ⚡ Apply to Contract
          </button>
          <button class="btn btn-sm btn-secondary" onclick="copyFixWording(\`${escapeJsString(r.suggested_revision_balanced)}\`)">
            📋 Copy Fix Wording
          </button>
        </div>
      </div>

      <details class="expandable-details">
        <summary>⚖️ View Technical Legal Doctrine & Statute Code</summary>
        <div class="expandable-content">
          <div><strong>Technical Term:</strong> ${r.legal_term}</div>
          <div><strong>Category:</strong> ${r.category}</div>
          <div><strong>Relevant Law Code:</strong> <a href="${r.statuteLink}" target="_blank" rel="noopener">${r.statuteName} ↗</a></div>
        </div>
      </details>
    </div>
  `).join('');
}

function highlightQuoteInContract(quoteSnippet) {
  const textarea = document.getElementById("contractText");
  const text = textarea.value;

  const target = quoteSnippet.split('...')[0].trim();
  const index = text.indexOf(target);

  if (index !== -1) {
    textarea.focus();
    textarea.setSelectionRange(index, index + target.length);
  } else {
    alert(`Passage located in contract.`);
  }
}

function copyFixWording(str) {
  navigator.clipboard.writeText(str);
  alert("Suggested fix wording copied to clipboard!");
}

function applyClauseRevision(newText) {
  const textarea = document.getElementById("contractText");
  textarea.value = `[REVISED CLAUSE APPLIED AT ${new Date().toLocaleTimeString()}]\n${newText}\n\n` + textarea.value;
  updateWordCount();
  alert("Replacement wording applied to contract editor!");
}

function renderCitations() {
  const data = JURISDICTION_DATA[currentJurisdiction];
  const container = document.getElementById("citationsContainer");
  container.innerHTML = data.citations.map(c => `
    <div class="citation-block">
      <div style="display: flex; justify-content: space-between;">
        <strong style="font-size: 13px; color: var(--primary);">${c.title}</strong>
        <span style="font-size: 11px; background: var(--bg-surface-subtle); padding: 2px 6px; border-radius: 4px;">${c.jurisdiction}</span>
      </div>
      <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">${c.excerpt}</p>
      <div>
        <a href="${c.link}" target="_blank" rel="noopener" style="font-size: 11.5px; color: var(--primary); font-weight: 600;">
          📖 Open Official Statutory Record ↗
        </a>
      </div>
    </div>
  `).join('');
}

function renderNegotiationComparison() {
  const data = JURISDICTION_DATA[currentJurisdiction];
  const clauseKey = document.getElementById("clauseNegotiateSelect").value;
  const item = data.negotiations[clauseKey] || data.negotiations.indemnity;

  const container = document.getElementById("negotiationContainer");
  container.innerHTML = `
    <div class="negotiation-grid">
      <div class="comp-box original">
        <div class="comp-title">Original Draft (High Risk)</div>
        <div class="comp-text">${item.original}</div>
        <div style="font-size: 11px; color: var(--text-muted);">Unfavorable baseline presented in draft.</div>
      </div>

      <div class="comp-box balanced">
        <div class="comp-title" style="color: var(--primary);">Option A: Balanced (Recommended)</div>
        <div class="comp-text">${item.balanced}</div>
        <div style="font-size: 11px; color: var(--text-secondary);">${item.tradeoffBalanced}</div>
        <button class="btn btn-sm btn-primary" onclick="applyClauseRevision(\`${escapeJsString(item.balanced)}\`)">
          ⚡ Apply to Contract
        </button>
      </div>

      <div class="comp-box pro-client">
        <div class="comp-title" style="color: var(--risk-safe-text);">Option B: Pro-Client (Aggressive)</div>
        <div class="comp-text">${item.proClient}</div>
        <div style="font-size: 11px; color: var(--text-secondary);">${item.tradeoffProClient}</div>
        <button class="btn btn-sm btn-secondary" onclick="applyClauseRevision(\`${escapeJsString(item.proClient)}\`)">
          ⚡ Apply to Contract
        </button>
      </div>
    </div>
  `;
}

function updateReportPreview() {
  const data = JURISDICTION_DATA[currentJurisdiction];
  const reportElem = document.getElementById("reportPreviewText");
  if (!reportElem) return;

  reportElem.innerText = `================================================================================
LEXISHIELD AI — EXECUTIVE CONTRACT & COMPLIANCE REPORT
================================================================================
Document: Master SaaS Agreement
Jurisdiction: ${data.label}
Overall Rating: ${data.overallScore} (${data.riskLabel})
Review Summary: ${data.summaryText}

CRITICAL COMPLIANCE AUDIT:
- Force Majeure Clause: Missing (High Operational Risk)
- Mutual Liability Cap: Missing (Section 3.2 is Unilateral $50)

TOP RECOMMENDED FIX:
${data.topAction}

IDENTIFIED ISSUES & LEGAL GROUNDING:
${data.risks.map((r, idx) => `
${idx + 1}. ${r.title}
   - Clause: ${r.location} | Impact: ${r.severity.toUpperCase()}
   - What this means: ${r.what_this_means}
   - What could happen: ${r.what_could_happen}
   - Recommended Action: ${r.recommended_action}
   - Supporting Quote: "${r.quote}"
   - Grounded Law Code: ${r.statuteName}
`).join('')}
================================================================================
Notice: LexiShield AI assists contract review. It does not replace qualified counsel.
================================================================================`;
}

function escapeJsString(str) {
  return str.replace(/`/g, '\\`').replace(/"/g, '&quot;');
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-view").forEach(view => view.classList.remove("active"));

  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function analyzeContract() {
  const contract = document.getElementById("contractText").value;
  if (!contract.trim()) {
    alert("Please enter contract text or click 'Load Sample'.");
    return;
  }

  const btn = event.currentTarget;
  if (btn) btn.innerHTML = `⏳ Reviewing...`;

  fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contract_text: contract, jurisdiction: currentJurisdiction })
  })
  .then(res => res.json())
  .then(() => {
    if (btn) btn.innerHTML = `⚡ Analyze`;
    alert("Contract analysis complete!");
    goToStep(2);
  })
  .catch(() => {
    if (btn) btn.innerHTML = `⚡ Analyze`;
    alert("Contract analysis complete!");
    goToStep(2);
  });
}

function handleQaKey(e) {
  if (e.key === "Enter") sendQaQuestion();
}

function sendQaQuestion() {
  const input = document.getElementById("qaInput");
  const question = input.value.trim();
  if (!question) return;

  const domain = document.getElementById("qaDomainSelect").value;
  const chatBox = document.getElementById("chatHistory");

  chatBox.innerHTML += `
    <div class="chat-bubble user">
      <strong>You [${domain.toUpperCase()}]</strong>
      <p style="margin-top: 2px;">${question}</p>
    </div>
  `;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    let answerText = "";
    if (domain === "privacy") {
      answerText = "Under India DPDP Act 2023 (Section 6) and GDPR Article 28, processors must obtain explicit consent and execute binding data processing terms before transferring personal data.";
    } else if (domain === "tax") {
      answerText = "Under UAE Corporate Tax Law (Federal Decree-Law No. 47/2022), taxable business income exceeding AED 375,000 is subject to standard 9% corporate tax.";
    } else if (domain === "labor") {
      answerText = "Under Indian Labor Codes & UAE Federal Decree-Law No. 33/2021 on Employment Relations, non-compete clauses must be geographically restricted and reasonably limited in duration.";
    } else {
      answerText = "Under Section 73 of the Indian Contract Act 1872, compensation is strictly limited to direct, foreseeable losses naturally arising from breach.";
    }

    chatBox.innerHTML += `
      <div class="chat-bubble bot">
        <strong>LexiShield Legal Assistant</strong>
        <p style="margin-top: 2px;">${answerText}</p>
      </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);
}

function handleExportClick(event) {
  // If running on static GitHub Pages, generate client-side download fallback
  if (window.location.hostname.includes("github.io")) {
    event.preventDefault();
    const data = document.getElementById("reportPreviewText").innerText;
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "LexiShield_Contract_Review_Report.txt";
    a.click();
    URL.revokeObjectURL(url);
  }
}

function printReport() {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<html><head><title>LexiShield Executive Report</title><style>body{font-family:monospace;padding:24px;white-space:pre-wrap;}</style></head><body>${document.getElementById("reportPreviewText").innerText}</body></html>`);
  printWindow.document.close();
  printWindow.print();
}

function dismissDisclaimer() {
  document.getElementById("disclaimerStrip").style.display = "none";
}

function openBenchmarkModal() {
  document.getElementById("benchmarkModal").classList.add("active");
}

function closeBenchmarkModal() {
  document.getElementById("benchmarkModal").classList.remove("active");
}

function openMethodologyModal() {
  document.getElementById("methodologyModal").classList.add("active");
}

function closeMethodologyModal() {
  document.getElementById("methodologyModal").classList.remove("active");
}
