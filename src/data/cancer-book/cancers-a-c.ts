import { CancerEntry } from "./types";

export const cancersAC: CancerEntry[] = [
  {
    id: "acoustic-neuroma",
    name: "Acoustic Neuroma",
    alternateNames: ["Vestibular Schwannoma"],
    category: "cns",
    description: "A non-cancerous tumor on the nerve connecting the ear to the brain. Can cause hearing loss, tinnitus, and balance problems.",
    commonSymptoms: ["Hearing loss in one ear", "Tinnitus", "Balance problems", "Facial numbness", "Dizziness"],
    riskFactors: ["Neurofibromatosis type 2", "Prolonged loud noise exposure", "Family history"],
    diagnostics: ["MRI scan", "Audiometry", "Brainstem Auditory Evoked Response (BAER)"],
    treatments: [
      { name: "Observation", description: "Watch-and-wait for small, slow-growing tumors", typicalCostRange: "$500 – $2,000/year" },
      { name: "Stereotactic Radiosurgery", description: "Focused radiation (Gamma Knife) to stop tumor growth", typicalCostRange: "$20,000 – $80,000" },
      { name: "Microsurgery", description: "Surgical removal of the tumor", typicalCostRange: "$30,000 – $100,000" }
    ],
    stages: ["Small (<1.5 cm)", "Medium (1.5–2.5 cm)", "Large (>2.5 cm)"],
    survivalRates: "Non-malignant; >95% long-term survival with treatment",
    supportOrganizations: [
      { name: "Acoustic Neuroma Association", url: "https://www.anausa.org/", description: "US-based patient support and education", geography: "US" },
      { name: "British Acoustic Neuroma Association", url: "https://www.bana-uk.com/", description: "UK patient support network", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Acoustic Neuroma", url: "https://www.cancer.gov/types/brain/patient/adult-brain-treatment-pdq", type: "website" },
      { title: "Mayo Clinic – Acoustic Neuroma", url: "https://www.mayoclinic.org/diseases-conditions/acoustic-neuroma/symptoms-causes/syc-20356127", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year", notableHospitals: ["Mayo Clinic", "Johns Hopkins", "UCLA Medical Center"] },
      { region: "UK", prevalence: "~1,200 new cases/year", notableHospitals: ["Queen's Medical Centre Nottingham", "King's College Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "acute-lymphoblastic-leukemia",
    name: "Acute Lymphoblastic Leukemia (ALL)",
    alternateNames: ["Acute Lymphocytic Leukemia"],
    category: "leukemia",
    description: "A fast-growing cancer of lymphoid blood cells. Most common cancer in children but also affects adults. Abnormal lymphoblasts crowd out normal blood cells.",
    commonSymptoms: ["Fatigue", "Frequent infections", "Easy bruising/bleeding", "Bone pain", "Swollen lymph nodes", "Fever", "Night sweats"],
    riskFactors: ["Age (peak in children 2-5)", "Male sex", "Down syndrome", "Radiation exposure", "Certain chemical exposures"],
    diagnostics: ["Complete Blood Count (CBC)", "Bone marrow biopsy", "Lumbar puncture", "Flow cytometry", "Cytogenetics"],
    treatments: [
      { name: "Chemotherapy", description: "Multi-drug regimen over 2-3 years (induction, consolidation, maintenance)", typicalCostRange: "$100,000 – $400,000" },
      { name: "Targeted Therapy", description: "Tyrosine kinase inhibitors for Ph+ ALL", typicalCostRange: "$50,000 – $150,000/year" },
      { name: "CAR-T Cell Therapy", description: "Engineered immune cells to attack cancer (Kymriah, Tecartus)", typicalCostRange: "$373,000 – $475,000" },
      { name: "Stem Cell Transplant", description: "Allogeneic transplant for high-risk cases", typicalCostRange: "$300,000 – $800,000" },
      { name: "Radiation Therapy", description: "Cranial radiation for CNS involvement", typicalCostRange: "$10,000 – $50,000" }
    ],
    stages: ["Standard Risk", "High Risk", "Very High Risk"],
    survivalRates: "Children: ~90% 5-year survival; Adults: ~40% 5-year survival",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "US-based research and patient support", geography: "US" },
      { name: "Leukaemia Care", url: "https://www.leukaemiacare.org.uk/", description: "UK charity for blood cancer patients", geography: "UK" },
      { name: "Leukaemia Foundation", url: "https://www.leukaemia.org.au/", description: "Australian blood cancer support", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – ALL Treatment", url: "https://www.cancer.gov/types/leukemia/patient/adult-all-treatment-pdq", type: "website" },
      { title: "ACS – ALL Overview", url: "https://www.cancer.org/cancer/types/acute-lymphocytic-leukemia.html", type: "website" },
      { title: "WHO Classification of Hematopoietic Tumors", url: "https://pubmed.ncbi.nlm.nih.gov/35304598/", type: "research" },
      { title: "LLS – Understanding ALL (Patient Guide PDF)", url: "https://www.lls.org/sites/default/files/2021-06/PS80_ALL_2021.pdf", type: "pdf" }
    ],
    videos: [
      { title: "Acute Lymphoblastic Leukemia Explained", youtubeId: "w4u3f7k-klA", channel: "Medical Education", durationMins: 8 },
      { title: "CAR-T Cell Therapy for ALL", youtubeId: "OadAW99s4Ik", channel: "Oncology Review", durationMins: 7 }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~6,500 new cases/year", screeningPrograms: "No routine screening; diagnosed via symptoms", notableHospitals: ["MD Anderson", "St. Jude Children's", "Memorial Sloan Kettering"] },
      { region: "India", prevalence: "Higher incidence in children; ~15,000 cases/year", notableHospitals: ["Tata Memorial Hospital", "AIIMS Delhi", "CMC Vellore"] },
      { region: "UK", prevalence: "~790 new cases/year", notableHospitals: ["Great Ormond Street Hospital", "Christie NHS Foundation Trust"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "acute-myeloid-leukemia",
    name: "Acute Myeloid Leukemia (AML)",
    alternateNames: ["Acute Myelogenous Leukemia", "Acute Non-lymphocytic Leukemia"],
    category: "leukemia",
    description: "A fast-growing cancer of myeloid blood cells. More common in older adults. Abnormal myeloblasts accumulate in bone marrow and blood.",
    commonSymptoms: ["Fatigue", "Fever", "Easy bruising", "Shortness of breath", "Bone pain", "Frequent infections", "Petechiae"],
    riskFactors: ["Age over 60", "Prior chemotherapy", "Radiation exposure", "Benzene exposure", "Smoking", "Myelodysplastic syndromes"],
    diagnostics: ["CBC with differential", "Bone marrow biopsy", "Flow cytometry", "Cytogenetics", "Molecular testing (FLT3, NPM1, IDH)"],
    treatments: [
      { name: "Induction Chemotherapy", description: "7+3 regimen (cytarabine + anthracycline)", typicalCostRange: "$80,000 – $200,000" },
      { name: "Consolidation Therapy", description: "High-dose cytarabine or transplant", typicalCostRange: "$50,000 – $150,000" },
      { name: "Targeted Therapy", description: "FLT3 inhibitors (midostaurin, gilteritinib), IDH inhibitors", typicalCostRange: "$30,000 – $120,000/year" },
      { name: "Stem Cell Transplant", description: "Allogeneic transplant for intermediate/high-risk", typicalCostRange: "$300,000 – $800,000" }
    ],
    stages: ["Favorable Risk", "Intermediate Risk", "Adverse Risk"],
    survivalRates: "Overall 5-year survival: ~30%; Under 60: ~45%; Over 60: ~10-15%",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "Research funding and patient support", geography: "US" },
      { name: "Bloodwise (Blood Cancer UK)", url: "https://bloodcancer.org.uk/", description: "UK blood cancer research charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – AML Treatment", url: "https://www.cancer.gov/types/leukemia/patient/adult-aml-treatment-pdq", type: "website" },
      { title: "NCCN Guidelines – AML", url: "https://www.nccn.org/patients/guidelines/content/PDF/aml-patient.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~20,000 new cases/year", notableHospitals: ["MD Anderson", "Fred Hutchinson Cancer Center", "Dana-Farber"] },
      { region: "India", prevalence: "~12,000 cases/year", notableHospitals: ["Tata Memorial Hospital", "Rajiv Gandhi Cancer Institute"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "adrenal-cancer",
    name: "Adrenal Cancer",
    alternateNames: ["Adrenocortical Carcinoma", "ACC"],
    category: "carcinoma",
    description: "A rare cancer of the adrenal glands sitting atop the kidneys. May produce excess hormones causing Cushing's syndrome or virilization.",
    commonSymptoms: ["Abdominal pain", "Weight gain", "Muscle weakness", "Excess hair growth", "High blood pressure", "Hormonal changes"],
    riskFactors: ["Li-Fraumeni syndrome", "Beckwith-Wiedemann syndrome", "Familial adenomatous polyposis", "Age (peaks in children and 40-50s)"],
    diagnostics: ["CT/MRI of abdomen", "Hormone level blood tests", "Adrenal biopsy", "PET scan"],
    treatments: [
      { name: "Surgery", description: "Adrenalectomy — primary treatment for localized disease", typicalCostRange: "$20,000 – $60,000" },
      { name: "Mitotane", description: "Adrenolytic drug to destroy adrenal cancer cells", typicalCostRange: "$5,000 – $20,000/year" },
      { name: "Chemotherapy", description: "EDP-M regimen for advanced disease", typicalCostRange: "$30,000 – $100,000" },
      { name: "Radiation", description: "Adjuvant radiation for incomplete resection", typicalCostRange: "$10,000 – $40,000" }
    ],
    stages: ["Stage I (≤5 cm)", "Stage II (>5 cm)", "Stage III (local invasion)", "Stage IV (metastatic)"],
    survivalRates: "Stage I-II: 50-80% 5-year; Stage III: 20-40%; Stage IV: <10%",
    supportOrganizations: [
      { name: "AAACE Alliance", url: "https://www.adrenalcanceralliance.org/", description: "Adrenal cancer patient advocacy", geography: "US" },
      { name: "Cancer Research UK", url: "https://www.cancerresearchuk.org/about-cancer/adrenal-cancer", description: "UK research and info", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Adrenocortical Carcinoma", url: "https://www.cancer.gov/types/adrenocortical/patient/adrenocortical-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "1-2 per million per year worldwide", screeningPrograms: "No routine screening; genetic testing for at-risk families" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "anal-cancer",
    name: "Anal Cancer",
    alternateNames: ["Anal Squamous Cell Carcinoma"],
    category: "carcinoma",
    description: "Cancer of the anal canal, strongly linked to HPV infection. Highly treatable when detected early with chemoradiation.",
    commonSymptoms: ["Rectal bleeding", "Anal pain/pressure", "Lump near anus", "Change in bowel habits", "Anal itching", "Discharge"],
    riskFactors: ["HPV infection", "HIV/AIDS", "Immunosuppression", "Smoking", "Receptive anal intercourse", "Age over 50"],
    diagnostics: ["Digital rectal exam", "Anoscopy with biopsy", "CT scan", "MRI pelvis", "PET/CT"],
    treatments: [
      { name: "Chemoradiation (Nigro Protocol)", description: "Combined 5-FU + mitomycin + radiation — standard first-line", typicalCostRange: "$30,000 – $80,000" },
      { name: "Surgery (APR)", description: "Abdominoperineal resection for persistent/recurrent disease", typicalCostRange: "$40,000 – $100,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic disease", typicalCostRange: "$150,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage IIIA", "Stage IIIB", "Stage IV"],
    survivalRates: "Localized: ~82% 5-year; Regional: ~66%; Distant: ~34%",
    supportOrganizations: [
      { name: "HPV and Anal Cancer Foundation", url: "https://www.analcancerfoundation.org/", description: "Awareness and support", geography: "US" },
      { name: "Macmillan Cancer Support", url: "https://www.macmillan.org.uk/cancer-information-and-support/anal-cancer", description: "UK cancer support charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Anal Cancer Treatment", url: "https://www.cancer.gov/types/anal/patient/anal-treatment-pdq", type: "website" },
      { title: "ACS – Anal Cancer", url: "https://www.cancer.org/cancer/types/anal-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~9,500 new cases/year", screeningPrograms: "Anal Pap smears recommended for high-risk groups" },
      { region: "Global", prevalence: "Increasing worldwide, especially in developed nations" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "bladder-cancer",
    name: "Bladder Cancer",
    alternateNames: ["Urothelial Carcinoma", "Transitional Cell Carcinoma"],
    category: "carcinoma",
    description: "Cancer of the bladder lining, most commonly urothelial carcinoma. Fourth most common cancer in men. Strongly linked to smoking.",
    commonSymptoms: ["Blood in urine (hematuria)", "Frequent urination", "Painful urination", "Pelvic pain", "Back pain"],
    riskFactors: ["Smoking", "Chemical exposure (dyes, rubber, leather)", "Chronic bladder infections", "Age over 55", "Male sex", "Arsenic in drinking water"],
    diagnostics: ["Cystoscopy with biopsy", "Urine cytology", "CT urogram", "MRI", "Blue light cystoscopy"],
    treatments: [
      { name: "TURBT", description: "Transurethral resection of bladder tumor — initial treatment", typicalCostRange: "$10,000 – $30,000" },
      { name: "BCG Immunotherapy", description: "Intravesical BCG for non-muscle-invasive disease", typicalCostRange: "$5,000 – $15,000/course" },
      { name: "Radical Cystectomy", description: "Bladder removal for muscle-invasive disease", typicalCostRange: "$50,000 – $150,000" },
      { name: "Chemotherapy", description: "Cisplatin-based neoadjuvant/adjuvant chemotherapy", typicalCostRange: "$30,000 – $80,000" },
      { name: "Immunotherapy", description: "Pembrolizumab, atezolizumab, nivolumab for advanced disease", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage 0 (non-invasive)", "Stage I", "Stage II (muscle-invasive)", "Stage III", "Stage IV (metastatic)"],
    survivalRates: "Stage 0-I: ~96% 5-year; Stage II: ~70%; Stage III: ~36%; Stage IV: ~5%",
    supportOrganizations: [
      { name: "Bladder Cancer Advocacy Network", url: "https://bcan.org/", description: "US patient advocacy and research", geography: "US" },
      { name: "Action Bladder Cancer UK", url: "https://actionbladdercanceruk.org/", description: "UK advocacy", geography: "UK" },
      { name: "Cancer Council Australia", url: "https://www.cancercouncil.com.au/bladder-cancer/", description: "Australian bladder cancer resources", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Bladder Cancer", url: "https://www.cancer.gov/types/bladder", type: "website" },
      { title: "ACS – Bladder Cancer", url: "https://www.cancer.org/cancer/types/bladder-cancer.html", type: "website" },
      { title: "European Association of Urology Guidelines", url: "https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~82,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Cleveland Clinic"] },
      { region: "India", prevalence: "~30,000 cases/year; often advanced at diagnosis", notableHospitals: ["Tata Memorial Hospital", "AIIMS", "Kidwai Memorial Institute"] },
      { region: "Middle East", prevalence: "Higher rates in Egypt due to schistosomiasis history", notableHospitals: ["King Faisal Specialist Hospital", "NCI Cairo"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "bone-cancer",
    name: "Bone Cancer",
    alternateNames: ["Osteosarcoma", "Ewing Sarcoma", "Chondrosarcoma"],
    category: "sarcoma",
    description: "Primary bone cancers originate in bone tissue. Osteosarcoma (most common in teens), Ewing sarcoma (children/young adults), and chondrosarcoma (adults) are the main types.",
    commonSymptoms: ["Bone pain (worsens at night)", "Swelling near affected bone", "Fractures", "Limping", "Limited range of motion"],
    riskFactors: ["Childhood/adolescence growth spurts", "Paget's disease", "Li-Fraumeni syndrome", "Prior radiation therapy", "Hereditary retinoblastoma"],
    diagnostics: ["X-ray", "MRI", "CT scan", "Bone biopsy", "Bone scan", "PET scan"],
    treatments: [
      { name: "Surgery", description: "Limb-sparing surgery or amputation", typicalCostRange: "$30,000 – $120,000" },
      { name: "Chemotherapy", description: "Neoadjuvant/adjuvant chemo (methotrexate, doxorubicin, cisplatin)", typicalCostRange: "$50,000 – $200,000" },
      { name: "Radiation", description: "Primary treatment for Ewing sarcoma; adjuvant in others", typicalCostRange: "$15,000 – $50,000" },
      { name: "Targeted Therapy", description: "Denosumab for giant cell tumor of bone", typicalCostRange: "$20,000 – $60,000/year" }
    ],
    stages: ["Localized", "Metastatic"],
    survivalRates: "Osteosarcoma localized: ~70% 5-year; Ewing localized: ~70%; Metastatic: ~15-30%",
    supportOrganizations: [
      { name: "MIB Agents (Make It Better)", url: "https://www.mibagents.org/", description: "Osteosarcoma research", geography: "US" },
      { name: "Bone Cancer Research Trust", url: "https://www.bcrt.org.uk/", description: "UK bone cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Bone Cancer", url: "https://www.cancer.gov/types/bone", type: "website" },
      { title: "ACS – Osteosarcoma", url: "https://www.cancer.org/cancer/types/osteosarcoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,600 new primary bone cancers/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Boston Children's Hospital"] },
      { region: "India", prevalence: "Osteosarcoma more common in younger populations", notableHospitals: ["Tata Memorial Hospital", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "brain-cancer",
    name: "Brain Cancer",
    alternateNames: ["Glioblastoma", "Glioma", "Astrocytoma", "Meningioma", "Brain Tumor"],
    category: "cns",
    description: "Cancers originating in the brain. Glioblastoma (GBM) is the most aggressive; meningiomas are most common but often benign. Symptoms depend on tumor location.",
    commonSymptoms: ["Headaches (new or worsening)", "Seizures", "Vision changes", "Personality changes", "Nausea/vomiting", "Speech difficulties", "Motor weakness"],
    riskFactors: ["Prior radiation to the head", "Neurofibromatosis", "Li-Fraumeni syndrome", "Age", "Immune system disorders"],
    diagnostics: ["MRI with contrast", "CT scan", "Stereotactic biopsy", "Spectroscopy", "Functional MRI", "PET scan"],
    treatments: [
      { name: "Surgery", description: "Maximal safe resection; craniotomy", typicalCostRange: "$50,000 – $150,000" },
      { name: "Temozolomide + Radiation", description: "Standard Stupp protocol for GBM", typicalCostRange: "$50,000 – $100,000" },
      { name: "Tumor Treating Fields", description: "Optune device — alternating electric fields", typicalCostRange: "$21,000/month" },
      { name: "Bevacizumab", description: "Anti-VEGF therapy for recurrent GBM", typicalCostRange: "$50,000 – $100,000/year" },
      { name: "Gamma Knife Radiosurgery", description: "Stereotactic radiosurgery for small tumors", typicalCostRange: "$20,000 – $80,000" }
    ],
    stages: ["Grade I (low)", "Grade II", "Grade III (anaplastic)", "Grade IV (GBM)"],
    survivalRates: "GBM: ~7% 5-year survival; Low-grade glioma: ~50-80% 5-year; Meningioma: >90%",
    supportOrganizations: [
      { name: "National Brain Tumor Society", url: "https://braintumor.org/", description: "US research and advocacy", geography: "US" },
      { name: "The Brain Tumour Charity", url: "https://www.thebraintumourcharity.org/", description: "UK brain tumour charity", geography: "UK" },
      { name: "Brain Tumour Foundation of Canada", url: "https://www.braintumour.ca/", description: "Canadian support", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Brain Tumors", url: "https://www.cancer.gov/types/brain", type: "website" },
      { title: "WHO Classification of CNS Tumours 2021", url: "https://pubmed.ncbi.nlm.nih.gov/34185076/", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~25,000 malignant brain tumors/year", notableHospitals: ["Mayo Clinic", "Johns Hopkins", "Duke University Medical Center", "MD Anderson"] },
      { region: "UK", prevalence: "~12,000 brain tumors/year", notableHospitals: ["Queen Square (UCLH)", "Addenbrooke's Hospital"] },
      { region: "India", prevalence: "~28,000 cases/year", notableHospitals: ["NIMHANS Bangalore", "Tata Memorial", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    alternateNames: ["Ductal Carcinoma", "Lobular Carcinoma", "Triple-Negative Breast Cancer", "HER2-Positive"],
    category: "carcinoma",
    description: "Most common cancer in women worldwide. Arises in breast tissue, typically ducts or lobules. Subtypes include ER+, PR+, HER2+, and triple-negative, each with different treatments.",
    commonSymptoms: ["Breast lump", "Change in breast shape/size", "Nipple discharge (especially bloody)", "Skin dimpling", "Nipple retraction", "Redness/pitting of skin"],
    riskFactors: ["Female sex", "Age over 50", "BRCA1/BRCA2 mutations", "Family history", "Obesity", "Alcohol use", "HRT use", "Early menstruation/late menopause"],
    diagnostics: ["Mammography", "Breast ultrasound", "Breast MRI", "Core needle biopsy", "Sentinel lymph node biopsy", "Oncotype DX/MammaPrint"],
    treatments: [
      { name: "Lumpectomy + Radiation", description: "Breast-conserving surgery with adjuvant radiation", typicalCostRange: "$20,000 – $50,000" },
      { name: "Mastectomy", description: "Partial or total breast removal", typicalCostRange: "$15,000 – $50,000" },
      { name: "Chemotherapy", description: "AC-T, TC, or other regimens based on subtype", typicalCostRange: "$20,000 – $100,000" },
      { name: "Hormone Therapy", description: "Tamoxifen, aromatase inhibitors for ER+ disease (5-10 years)", typicalCostRange: "$1,000 – $10,000/year" },
      { name: "HER2-Targeted Therapy", description: "Trastuzumab, pertuzumab, T-DXd for HER2+ disease", typicalCostRange: "$60,000 – $150,000/year" },
      { name: "Immunotherapy", description: "Pembrolizumab for triple-negative breast cancer", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "CDK4/6 Inhibitors", description: "Palbociclib, ribociclib for HR+/HER2- advanced disease", typicalCostRange: "$100,000 – $170,000/year" }
    ],
    stages: ["Stage 0 (DCIS)", "Stage I", "Stage II", "Stage III", "Stage IV (metastatic)"],
    survivalRates: "Stage 0-I: ~99% 5-year; Stage II: ~93%; Stage III: ~72%; Stage IV: ~29%",
    supportOrganizations: [
      { name: "Susan G. Komen Foundation", url: "https://www.komen.org/", description: "Largest US breast cancer nonprofit", geography: "US" },
      { name: "Breast Cancer Now", url: "https://breastcancernow.org/", description: "UK breast cancer research and care", geography: "UK" },
      { name: "Breast Cancer Network Australia", url: "https://www.bcna.org.au/", description: "Australian support network", geography: "Australia" },
      { name: "Indian Cancer Society", url: "https://www.indiancancersociety.org/", description: "Indian cancer awareness and support", geography: "India" }
    ],
    externalResources: [
      { title: "NCI – Breast Cancer", url: "https://www.cancer.gov/types/breast", type: "website" },
      { title: "ACS – Breast Cancer", url: "https://www.cancer.org/cancer/types/breast-cancer.html", type: "website" },
      { title: "WHO – Breast Cancer Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/breast-cancer", type: "website" },
      { title: "NCCN Breast Cancer Guidelines (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/breast-invasive-patient.pdf", type: "pdf" },
      { title: "NEJM – MONARCH-3 (CDK4/6 Inhibitors)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1815072", type: "research" },
      { title: "NEJM – DESTINY-Breast03 (T-DXd vs T-DM1)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2104140", type: "research" },
      { title: "BreastCancer.org – Comprehensive Patient Guide", url: "https://www.breastcancer.org/", type: "website" },
      { title: "Living Beyond Breast Cancer – Education Hub", url: "https://www.lbbc.org/", type: "website" }
    ],
    videos: [
      { title: "Triple-Negative Breast Cancer Diagnosis and Treatment", youtubeId: "JsVMXDeKWOw", channel: "Breastcancer.org", durationMins: 5 },
      { title: "Meet Tiffany Traina: TNBC Medical Oncologist at MSK", youtubeId: "pVsvyqfMYKE", channel: "Memorial Sloan Kettering Cancer Center", durationMins: 3 },
      { title: "Stage Three Triple-Negative Breast Cancer Patient", youtubeId: "HqptUN7RvLc", channel: "MD Anderson Cancer Center", durationMins: 4 },
      { title: "Triple Negative Breast Cancer Treatment Algorithm", youtubeId: "85EdpRO9kI4", channel: "OncBrothers", durationMins: 8 },
      { title: "How to Treat Triple Negative Breast Cancer (TNBC)", youtubeId: "GfROoYPVb_8", channel: "OncBrothers", durationMins: 11 },
      { title: "Latest Advances in TNBC Treatment and Care", youtubeId: "RLTgl9J9iAs", channel: "Outcomes4Me", durationMins: 6 },
      { title: "Metastatic Triple Negative Breast Cancer: 2023 Updates", youtubeId: "QspJonwYRJ8", channel: "Total Health Oncology", durationMins: 10 },
      { title: "Let’s Talk About TNBC - Integrative Medicine", youtubeId: "3nwmO4UKWqw", channel: "SHARE Cancer Support", durationMins: 5 },
      { title: "Triple Negative Breast Cancer Explained in Simple Steps", youtubeId: "861RVq8_g4M", channel: "Learn Look Locate", durationMins: 7 },
      { title: "Understanding Breast Cancer: A Guide", vimeoId: "235129606", channel: "Health Info Vimeo", durationMins: 12 },
      { title: "My Breast Cancer Journey (TNBC Vlog)", vimeoId: "284824559", channel: "Patient Diary", durationMins: 9 },
      { title: "Radiation at MD Anderson / 20 Sessions / TNBC", youtubeId: "uTbA3XyW4a8", channel: "Lesimpleholic", durationMins: 14 },
      { title: "Week 1: MD Anderson Visit / Medical Oncologist", youtubeId: "5uAKWxl7ZmA", channel: "Lesimpleholic", durationMins: 12 },
      { title: "Triple-Negative Breast Cancer Explained #shorts", youtubeId: "sEExjGznwTs", channel: "Yerbba – Breast Cancer", durationMins: 1 }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~310,000 new cases/year", screeningPrograms: "Mammography every 1-2 years from age 40-50", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic", "Dana-Farber"] },
      { region: "UK", prevalence: "~56,000 new cases/year", screeningPrograms: "NHS Breast Screening Programme: mammogram every 3 years, ages 50-70", notableHospitals: ["The Christie", "Royal Marsden"] },
      { region: "India", prevalence: "~200,000 new cases/year; often advanced at diagnosis", screeningPrograms: "Limited national screening; awareness campaigns growing", notableHospitals: ["Tata Memorial Hospital", "Rajiv Gandhi Cancer Institute", "HCG Oncology"] },
      { region: "Australia", prevalence: "~20,000 new cases/year", screeningPrograms: "BreastScreen Australia: free mammograms every 2 years, ages 50-74" },
      { region: "Middle East", prevalence: "Rising incidence; often diagnosed at younger ages", notableHospitals: ["King Faisal Specialist Hospital", "Cleveland Clinic Abu Dhabi"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "cervical-cancer",
    name: "Cervical Cancer",
    alternateNames: ["Cervical Squamous Cell Carcinoma", "Cervical Adenocarcinoma"],
    category: "carcinoma",
    description: "Cancer of the cervix, almost entirely caused by persistent HPV infection. One of the most preventable cancers through vaccination and screening. Still among top killers of women in developing nations.",
    commonSymptoms: ["Abnormal vaginal bleeding", "Post-coital bleeding", "Pelvic pain", "Vaginal discharge", "Pain during intercourse"],
    riskFactors: ["HPV infection (types 16, 18)", "Smoking", "Immunosuppression", "Early sexual activity", "Multiple sexual partners", "Lack of screening", "Long-term OCP use"],
    diagnostics: ["Pap smear", "HPV test", "Colposcopy with biopsy", "Cone biopsy", "MRI pelvis", "PET/CT"],
    treatments: [
      { name: "Surgery (Hysterectomy)", description: "Radical hysterectomy for early-stage disease", typicalCostRange: "$15,000 – $40,000" },
      { name: "Chemoradiation", description: "Cisplatin-based chemoradiation — standard for locally advanced", typicalCostRange: "$30,000 – $80,000" },
      { name: "Brachytherapy", description: "Internal radiation — critical component of treatment", typicalCostRange: "$10,000 – $30,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic cervical cancer", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Bevacizumab", description: "Anti-VEGF added to chemo for advanced disease", typicalCostRange: "$50,000 – $100,000/year" }
    ],
    stages: ["Stage IA", "Stage IB", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Stage I: ~93%; Stage II: ~63%; Stage III: ~35%; Stage IV: ~16%",
    supportOrganizations: [
      { name: "National Cervical Cancer Coalition", url: "https://www.nccc-online.org/", description: "US advocacy and education", geography: "US" },
      { name: "Jo's Cervical Cancer Trust", url: "https://www.jostrust.org.uk/", description: "UK cervical cancer charity", geography: "UK" },
      { name: "WHO – Cervical Cancer Elimination Initiative", url: "https://www.who.int/initiatives/cervical-cancer-elimination-initiative", description: "Global elimination strategy", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Cervical Cancer", url: "https://www.cancer.gov/types/cervical", type: "website" },
      { title: "WHO – Cervical Cancer", url: "https://www.who.int/health-topics/cervical-cancer", type: "website" },
      { title: "HPV Vaccination Evidence Review", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)30298-3/fulltext", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~14,000 new cases/year", screeningPrograms: "Pap+HPV co-testing every 5 years ages 30-65; HPV vaccine widely available" },
      { region: "India", prevalence: "~120,000 new cases/year — leading cause of cancer death in Indian women", screeningPrograms: "VIA (visual inspection with acetic acid) in rural areas; limited Pap access", notableHospitals: ["Tata Memorial", "Kidwai Memorial", "AIIMS"] },
      { region: "UK", prevalence: "~3,200 new cases/year", screeningPrograms: "NHS Cervical Screening: HPV primary screening ages 25-64" },
      { region: "Australia", prevalence: "~900 new cases/year", screeningPrograms: "National Cervical Screening Program: HPV test every 5 years ages 25-74; first country near elimination" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "cholangiocarcinoma",
    name: "Cholangiocarcinoma",
    alternateNames: ["Bile Duct Cancer"],
    category: "carcinoma",
    description: "Rare cancer of the bile ducts. Classified as intrahepatic, perihilar (Klatskin tumor), or distal. Often diagnosed late due to vague symptoms.",
    commonSymptoms: ["Jaundice", "Itching", "Abdominal pain", "Weight loss", "Fever", "Clay-colored stools", "Dark urine"],
    riskFactors: ["Primary sclerosing cholangitis", "Liver fluke infection", "Bile duct cysts", "Hepatitis B/C", "Cirrhosis", "Inflammatory bowel disease"],
    diagnostics: ["CT/MRI abdomen", "MRCP", "ERCP with brushings", "CA 19-9 blood test", "Liver biopsy", "PET scan"],
    treatments: [
      { name: "Surgery", description: "Whipple procedure or hepatectomy for resectable tumors", typicalCostRange: "$50,000 – $150,000" },
      { name: "Chemotherapy", description: "Gemcitabine + cisplatin (ABC-02 regimen)", typicalCostRange: "$30,000 – $80,000" },
      { name: "Targeted Therapy", description: "Pemigatinib/futibatinib for FGFR2 fusions; ivosidenib for IDH1 mutations", typicalCostRange: "$15,000 – $25,000/month" },
      { name: "Radiation", description: "Adjuvant or palliative radiation", typicalCostRange: "$15,000 – $40,000" }
    ],
    stages: ["Resectable", "Locally advanced", "Metastatic"],
    survivalRates: "Overall 5-year: ~10-15%; If resected: ~25-30%",
    supportOrganizations: [
      { name: "Cholangiocarcinoma Foundation", url: "https://cholangiocarcinoma.org/", description: "US advocacy and research", geography: "US" },
      { name: "AMMF – The Cholangiocarcinoma Charity", url: "https://ammf.org.uk/", description: "UK bile duct cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Bile Duct Cancer", url: "https://www.cancer.gov/types/liver/patient/bile-duct-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "Higher in Southeast Asia due to liver fluke infections" },
      { region: "US", prevalence: "~8,000 new cases/year", notableHospitals: ["Mayo Clinic", "MD Anderson", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "colorectal-cancer",
    name: "Colorectal Cancer",
    alternateNames: ["Colon Cancer", "Rectal Cancer", "Bowel Cancer", "CRC"],
    category: "carcinoma",
    description: "Third most common cancer globally. Arises from the colon or rectum lining. Highly preventable via colonoscopy screening. Rising incidence in young adults (<50).",
    commonSymptoms: ["Change in bowel habits", "Blood in stool", "Abdominal pain/cramping", "Unexplained weight loss", "Fatigue", "Feeling bowel doesn't empty completely"],
    riskFactors: ["Age over 50", "Family history", "Lynch syndrome", "FAP", "IBD", "Red/processed meat", "Obesity", "Smoking", "Sedentary lifestyle"],
    diagnostics: ["Colonoscopy with biopsy", "FIT/FOBT stool test", "CT colonography", "CEA blood test", "Molecular testing (MSI, KRAS, BRAF)"],
    treatments: [
      { name: "Surgery", description: "Colectomy or low anterior resection; laparoscopic or robotic", typicalCostRange: "$20,000 – $80,000" },
      { name: "Adjuvant Chemotherapy", description: "FOLFOX, CAPOX for stage III", typicalCostRange: "$30,000 – $80,000" },
      { name: "Targeted Therapy", description: "Bevacizumab, cetuximab, panitumumab based on biomarkers", typicalCostRange: "$50,000 – $150,000/year" },
      { name: "Immunotherapy", description: "Pembrolizumab for MSI-H/dMMR tumors — potentially curative", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Hepatic Metastasectomy", description: "Liver surgery for limited metastases — can be curative", typicalCostRange: "$40,000 – $120,000" },
      { name: "Radiation", description: "Neoadjuvant chemoradiation for rectal cancer", typicalCostRange: "$15,000 – $50,000" }
    ],
    stages: ["Stage 0 (polyp)", "Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Stage I: ~92%; Stage II: ~87%; Stage III: ~72%; Stage IV: ~14%",
    supportOrganizations: [
      { name: "Colorectal Cancer Alliance", url: "https://www.ccalliance.org/", description: "US patient support and advocacy", geography: "US" },
      { name: "Bowel Cancer UK", url: "https://www.bowelcanceruk.org.uk/", description: "UK bowel cancer charity", geography: "UK" },
      { name: "Bowel Cancer Australia", url: "https://www.bowelcanceraustralia.org/", description: "Australian advocacy", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Colorectal Cancer", url: "https://www.cancer.gov/types/colorectal", type: "website" },
      { title: "ACS – Colorectal Cancer", url: "https://www.cancer.org/cancer/types/colon-rectal-cancer.html", type: "website" },
      { title: "WHO – Colorectal Fact Sheet", url: "https://gco.iarc.fr/today/data/factsheets/cancers/10_8_9-Colorectum-fact-sheet.pdf", type: "pdf" },
      { title: "NEJM – KEYNOTE-177 (Pembrolizumab 1st-line MSI-H CRC)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2017699", type: "research" },
      { title: "CCALLIANCE – Clinical Trials Finder", url: "https://www.ccalliance.org/clinical-trials", type: "website" },
      { title: "Fight Colorectal Cancer – Patient Resources", url: "https://fightcolorectalcancer.org/", type: "website" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~153,000 new cases/year; rising in <50", screeningPrograms: "Colonoscopy every 10 years from age 45 (ACS guidelines)", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic", "Cleveland Clinic"] },
      { region: "UK", prevalence: "~42,000 new cases/year", screeningPrograms: "NHS Bowel Cancer Screening: FIT test every 2 years ages 60-74 (expanding to 50+)" },
      { region: "India", prevalence: "~65,000 cases/year; increasing in urban areas", notableHospitals: ["Tata Memorial Hospital", "AIIMS", "Rajiv Gandhi Cancer Institute"] },
      { region: "Australia", prevalence: "~17,000 new cases/year", screeningPrograms: "National Bowel Cancer Screening: free FIT test every 2 years ages 50-74" }
    ],
    lastUpdated: "2026-03-30"
  }
];
