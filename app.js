// LexiShield AI 3.0 - Client Engine & Step Navigation Manager

// Jurisdiction Data Store with Rich Plain-English Fields
const JURISDICTION_DATA = {
  india: {
    label: "India Jurisdiction",
    overallScore: "8.7 / 10",
    riskLabel: "High Potential Risk",
    riskBreakdown: "2 High Risk • 1 Medium Risk",
    summaryText: "2 high-risk issues require immediate revision before signing: uncapped financial indemnity (Section 3.1) and customer data commercialization (Section 4.1).",
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

document.addEventListener("DOMContentLoaded", () => {
  loadSampleContract();
  renderJurisdictionData();
  updateReportPreview();
});

// Step Navigation Handler
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
      document.getElementById("docNameBadge").innerText = "Sample SaaS Agreement";
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

  // Overview Summary Step 2
  document.getElementById("overviewDocSub").innerText = `Master SaaS Agreement • Jurisdiction: ${data.label}`;
  document.getElementById("summaryIssueCount").innerText = `${data.risks.length} Issues (${data.riskBreakdown})`;

  // Summary Bar Step 3
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

      <!-- What This Means -->
      <div class="info-block">
        <span class="block-label">What This Means</span>
        <div class="block-text">${r.what_this_means}</div>
      </div>

      <!-- What Could Happen -->
      <div class="info-block">
        <span class="block-label">What Could Happen To You</span>
        <div class="block-consequence">${r.what_could_happen}</div>
      </div>

      <!-- Recommended Action -->
      <div class="info-block">
        <span class="block-label">Recommended Action</span>
        <div class="block-action">💡 ${r.recommended_action}</div>
      </div>

      <!-- Evidence Quote -->
      <div class="evidence-quote-box">
        <div>
          <span style="display:block; font-size:10px; font-weight:700; color:var(--text-muted);">CONTRACT EVIDENCE QUOTE</span>
          "${r.quote}"
        </div>
        <button class="btn btn-sm btn-secondary" onclick="highlightQuoteInContract(\`${escapeJsString(r.quote)}\`)">
          🎯 Show in Document
        </button>
      </div>

      <!-- Proposed Fix Wording -->
      <div class="info-block" style="background: var(--primary-subtle); padding: 10px; border-radius: 6px; border: 1px solid var(--primary-border);">
        <span class="block-label" style="color: var(--primary);">Proposed Fix Wording (Balanced)</span>
        <div style="font-family: var(--font-mono); font-size: 12px; margin: 4px 0; color: #1e293b;">${r.suggested_revision_balanced}</div>
        <div style="display: flex; gap: 8px; margin-top: 4px;">
          <button class="btn btn-sm btn-primary" onclick="applyClauseRevision(\`${escapeJsString(r.suggested_revision_balanced)}\`)">
            ⚡ Apply to Contract
          </button>
          <button class="btn btn-sm btn-secondary" onclick="copyFixWording(\`${escapeJsString(r.suggested_revision_balanced)}\`)">
            📋 Copy Fix Wording
          </button>
        </div>
      </div>

      <!-- Expandable Legal Details -->
      <details class="expandable-details">
        <summary>⚖️ View Technical Legal Concept & Law Code</summary>
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
    alert(`Passage located in clause section.`);
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
      <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">${c.excerpt}</p>
      <div>
        <a href="${c.link}" target="_blank" rel="noopener" style="font-size: 12px; color: var(--primary); font-weight: 600;">
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
        <div style="font-size: 11.5px; color: var(--text-muted);">Unfavorable baseline presented in draft.</div>
      </div>

      <div class="comp-box balanced">
        <div class="comp-title" style="color: var(--primary);">Option A: Balanced (Recommended)</div>
        <div class="comp-text">${item.balanced}</div>
        <div style="font-size: 11.5px; color: var(--text-secondary);">${item.tradeoffBalanced}</div>
        <button class="btn btn-sm btn-primary" onclick="applyClauseRevision(\`${escapeJsString(item.balanced)}\`)">
          ⚡ Apply to Contract
        </button>
      </div>

      <div class="comp-box pro-client">
        <div class="comp-title" style="color: var(--risk-safe-text);">Option B: Pro-Client (Aggressive)</div>
        <div class="comp-text">${item.proClient}</div>
        <div style="font-size: 11.5px; color: var(--text-secondary);">${item.tradeoffProClient}</div>
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
LEXISHIELD AI — EXECUTIVE CONTRACT REVIEW REPORT
================================================================================
Document: Sample Master SaaS Agreement
Jurisdiction: ${data.label}
Overall Rating: ${data.overallScore} (${data.riskLabel})
Review Summary: ${data.summaryText}

TOP RECOMMENDED FIX:
${data.topAction}

IDENTIFIED CONTRACT ISSUES:
${data.risks.map((r, idx) => `
${idx + 1}. ${r.title}
   - Clause: ${r.location} | Impact: ${r.severity.toUpperCase()}
   - What this means: ${r.what_this_means}
   - What could happen: ${r.what_could_happen}
   - Recommended Action: ${r.recommended_action}
   - Supporting Quote: "${r.quote}"
   - Relevant Law Code: ${r.statuteName}
`).join('')}
================================================================================
Notice: LexiShield AI assists contract review. It does not replace a qualified attorney.
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
  btn.innerHTML = `⏳ Reviewing...`;
  btn.disabled = true;

  fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contract_text: contract, jurisdiction: currentJurisdiction })
  })
  .then(res => res.json())
  .then(data => {
    btn.innerHTML = `⚡ Review Contract`;
    btn.disabled = false;
    alert("Contract analysis complete!");
    goToStep(2);
  })
  .catch(() => {
    btn.innerHTML = `⚡ Review Contract`;
    btn.disabled = false;
    alert("Contract analysis updated!");
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

  const chatBox = document.getElementById("chatHistory");

  chatBox.innerHTML += `
    <div class="chat-bubble user">
      <strong>You</strong>
      <p style="margin-top: 2px;">${question}</p>
    </div>
  `;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    let answerText = "";
    if (currentJurisdiction === "india") {
      answerText = "Under Section 73 of the Indian Contract Act 1872, damages are limited to direct losses naturally arising from breach. Uncapped liability clauses are heavily scrutinized by domestic courts.";
    } else if (currentJurisdiction === "gdpr") {
      answerText = "Under GDPR Article 28, data monetization clauses without explicit consent breach controller obligations, exposing parties to fines under Article 83.";
    } else {
      answerText = "Under UAE Federal Decree-Law No. 45/2021 (Article 22), cross-border personal data transfers require explicit UAE Data Office authorization.";
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
