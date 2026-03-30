import { CancerEntry } from "./types";

export const cancersExpanded: CancerEntry[] = [
  {
    id: "chronic-lymphocytic-leukemia",
    name: "Chronic Lymphocytic Leukemia (CLL)",
    alternateNames: ["CLL", "Small Lymphocytic Lymphoma (SLL)"],
    category: "leukemia",
    description: "Most common leukemia in adults in the Western world. A slow-growing cancer of B-lymphocytes. Many patients live years without treatment. BTK inhibitors have revolutionized therapy.",
    commonSymptoms: ["Often asymptomatic (found on routine blood test)", "Fatigue", "Enlarged lymph nodes", "Night sweats", "Weight loss", "Frequent infections", "Enlarged spleen"],
    riskFactors: ["Age over 60", "Male sex", "Family history", "Monoclonal B-cell lymphocytosis (MBL)", "Certain pesticide exposures", "White European descent"],
    diagnostics: ["Complete blood count (CBC)", "Flow cytometry of blood", "Lymph node biopsy", "Bone marrow biopsy", "FISH for del17p/del11q", "IGHV mutation status"],
    treatments: [
      { name: "Observation (Watch & Wait)", description: "For early-stage asymptomatic CLL — no immediate treatment needed", typicalCostRange: "$1,000 – $3,000/year" },
      { name: "BTK Inhibitors", description: "Ibrutinib, acalabrutinib, zanubrutinib — backbone of modern CLL treatment", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "BCL-2 Inhibitor", description: "Venetoclax (± obinutuzumab) — fixed-duration treatment with deep remissions", typicalCostRange: "$150,000 – $250,000/year" },
      { name: "Chemoimmunotherapy", description: "FCR (fludarabine, cyclophosphamide, rituximab) for young fit IGHV-mutated patients", typicalCostRange: "$30,000 – $80,000" },
      { name: "CAR-T / Allogeneic SCT", description: "For high-risk relapsed/refractory cases (del17p TP53)", typicalCostRange: "$300,000 – $800,000" }
    ],
    stages: ["Rai Stage 0 (lymphocytosis only)", "Rai Stage I (lymph nodes)", "Rai Stage II (spleen)", "Rai Stage III (anemia)", "Rai Stage IV (platelets)"],
    survivalRates: "Median survival: 10+ years for low-risk; 2-4 years for high-risk (del17p/TP53 mutated) — improving rapidly with BTK inhibitors",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "US blood cancer support", geography: "US" },
      { name: "CLL Society", url: "https://cllsociety.org/", description: "CLL-specific patient education and clinical trial matching", geography: "US" },
      { name: "Leukaemia Care", url: "https://www.leukaemiacare.org.uk/", description: "UK charity for blood cancer patients", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – CLL Treatment", url: "https://www.cancer.gov/types/leukemia/patient/CLL-treatment-pdq", type: "website" },
      { title: "ACS – CLL Overview", url: "https://www.cancer.org/cancer/types/chronic-lymphocytic-leukemia.html", type: "website" },
      { title: "NEJM – MURANO Trial (Venetoclax-Rituximab)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1713976", type: "research" },
      { title: "LLS – CLL Patient Guide (PDF)", url: "https://www.lls.org/sites/default/files/2021-05/PS69_CLL_2021.pdf", type: "pdf" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~20,000 new cases/year", notableHospitals: ["Ohio State University (OSU Wexner)", "MD Anderson", "Dana-Farber", "Mayo Clinic"] },
      { region: "UK", prevalence: "~4,200 new cases/year", notableHospitals: ["The Christie", "University College London Hospitals"] },
      { region: "India", prevalence: "Less common than in Western world; ~5,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "chronic-myeloid-leukemia",
    name: "Chronic Myeloid Leukemia (CML)",
    alternateNames: ["CML", "Chronic Myelogenous Leukemia"],
    category: "leukemia",
    description: "A cancer defined by the Philadelphia chromosome (BCR-ABL fusion). Imatinib (Gleevec) transformed CML from a fatal disease into a manageable chronic condition. Most patients achieve deep molecular remission with TKIs.",
    commonSymptoms: ["Fatigue", "Night sweats", "Weight loss", "Enlarged spleen (left-sided abdominal fullness)", "Easy bruising", "Often asymptomatic at diagnosis"],
    riskFactors: ["Radiation exposure", "Age (median 60)", "Male sex slightly higher"],
    diagnostics: ["CBC (high white cells)", "Philadelphia chromosome (cytogenetics/FISH)", "BCR-ABL PCR", "Bone marrow biopsy"],
    treatments: [
      { name: "Imatinib (Gleevec)", description: "First-line TKI — standard of care since 2001", typicalCostRange: "$30,000 – $100,000/year (generics now available)" },
      { name: "Dasatinib / Nilotinib / Bosutinib", description: "2nd generation TKIs for intolerance or suboptimal response", typicalCostRange: "$80,000 – $150,000/year" },
      { name: "Asciminib", description: "STAMP inhibitor — 3rd line or for T315I mutation", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Treatment-Free Remission (TFR)", description: "Stopping TKI after deep molecular response (MR4.5) — curative in ~50%", typicalCostRange: "Monitoring only" },
      { name: "Allogeneic SCT", description: "Reserved for blast crisis or multiple TKI failures", typicalCostRange: "$300,000 – $800,000" }
    ],
    stages: ["Chronic Phase (good prognosis)", "Accelerated Phase (intermediate)", "Blast Crisis (poor prognosis)"],
    survivalRates: "Chronic phase with TKI: 10-year OS ~85%; Near-normal life expectancy for optimal responders",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "US blood cancer support", geography: "US" },
      { name: "CML Support Group", url: "https://www.cmlsupport.org.uk/", description: "UK CML patient group", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – CML Treatment", url: "https://www.cancer.gov/types/leukemia/patient/CML-treatment-pdq", type: "website" },
      { title: "ACS – CML Overview", url: "https://www.cancer.org/cancer/types/chronic-myeloid-leukemia.html", type: "website" },
      { title: "NEJM – ENESTnd Trial (Nilotinib vs Imatinib)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa0810642", type: "research" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~9,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Ohio State Wexner"] },
      { region: "India", prevalence: "~30,000 cases/year; younger median age than Western patients", notableHospitals: ["Tata Memorial", "AIIMS", "CMC Vellore"] },
      { region: "UK", prevalence: "~800 new cases/year", notableHospitals: ["The Christie", "King's College Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "thymic-cancer",
    name: "Thymic Cancer",
    alternateNames: ["Thymoma", "Thymic Carcinoma"],
    category: "carcinoma",
    description: "Rare tumors of the thymus gland in the anterior mediastinum. Thymomas are usually indolent; thymic carcinomas are aggressive. Associated with autoimmune disorders (myasthenia gravis, pure red cell aplasia).",
    commonSymptoms: ["Chest pain or pressure", "Cough", "Shortness of breath", "Muscle weakness (myasthenia gravis)", "Superior vena cava syndrome (face swelling)", "Often asymptomatic"],
    riskFactors: ["Myasthenia gravis (30-40% of thymoma patients)", "Autoimmune disease", "Age 40-60"],
    diagnostics: ["CT chest", "MRI mediastinum", "PET/CT", "Biopsy (CT-guided or surgical)", "Acetylcholine receptor antibodies (myasthenia)"],
    treatments: [
      { name: "Surgery (Thymectomy)", description: "Complete resection — primary treatment; robotic approaches increasingly used", typicalCostRange: "$25,000 – $80,000" },
      { name: "Radiation", description: "Adjuvant radiation for Masaoka stage II-III", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemotherapy", description: "CAP (cisplatin, doxorubicin, prednisone) for advanced/thymic carcinoma", typicalCostRange: "$30,000 – $80,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for thymic carcinoma (caution: autoimmune flare risk)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Masaoka Stage I (intact capsule)", "Stage II (capsule invasion)", "Stage III (adjacent organs)", "Stage IVA (pleural spread)", "Stage IVB (distant metastasis)"],
    survivalRates: "Thymoma Stage I: >90% 5-year; Stage II: 70-80%; Stage III: 50-65%; Thymic carcinoma: ~30% 5-year",
    supportOrganizations: [
      { name: "Thymic Cancer Foundation", url: "https://thymic.org/", description: "US thymoma/thymic carcinoma advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Thymoma Treatment", url: "https://www.cancer.gov/types/thymoma/patient/thymoma-treatment-pdq", type: "website" },
      { title: "ACS – Thymic Cancer", url: "https://www.cancer.org/cancer/types/thymic-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~400-500 new thymoma cases/year + ~150 thymic carcinoma", notableHospitals: ["National Cancer Institute", "Memorial Sloan Kettering", "MD Anderson"] },
      { region: "Global", prevalence: "~1.5 per million per year worldwide" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "pheochromocytoma",
    name: "Pheochromocytoma",
    alternateNames: ["Pheo", "Paraganglioma", "Chromaffin Cell Tumor"],
    category: "other",
    description: "Rare tumor of chromaffin cells in the adrenal medulla (or extra-adrenal paraganglioma). Produces adrenaline/noradrenaline causing hypertension crises. Up to 40% are hereditary. Potentially fatal if undetected before surgery.",
    commonSymptoms: ["Episodic hypertension", "Pounding headache", "Profuse sweating", "Palpitations", "Pallor", "Tremor", "Anxiety attacks"],
    riskFactors: ["VHL disease", "Multiple Endocrine Neoplasia 2 (RET mutation)", "Neurofibromatosis 1", "SDH gene mutations (SDHB, SDHD)", "Family history"],
    diagnostics: ["24h urine/plasma metanephrines", "CT/MRI adrenal", "MIBG scintigraphy", "DOTATE PET/CT", "Genetic testing"],
    treatments: [
      { name: "Open or Laparoscopic Adrenalectomy", description: "Primary treatment — must pre-treat with alpha-blockade (phenoxybenzamine) for at least 2 weeks before surgery", typicalCostRange: "$20,000 – $60,000" },
      { name: "MIBG Therapy (177Lu-DOTATATE)", description: "For metastatic paraganglioma", typicalCostRange: "$50,000 – $80,000/treatment" },
      { name: "CVD Chemotherapy", description: "Cyclophosphamide, vincristine, dacarbazine for malignant paraganglioma", typicalCostRange: "$20,000 – $60,000" },
      { name: "Sunitinib", description: "TKI for SDH-mutated metastatic paraganglioma", typicalCostRange: "$80,000 – $140,000/year" }
    ],
    survivalRates: "Benign pheo (localized): >95% 5-year; Malignant paraganglioma: 50% 5-year",
    supportOrganizations: [
      { name: "Pheo Para Alliance", url: "https://www.pheopara.org/", description: "US patient support for pheochromocytoma/paraganglioma", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Pheochromocytoma Treatment", url: "https://www.cancer.gov/types/pheochromocytoma/patient/pheochromocytoma-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "~2-8 per million per year", screeningPrograms: "Annual biochemical screening for SDH/VHL/RET mutation carriers" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "primary-peritoneal-cancer",
    name: "Primary Peritoneal Cancer",
    alternateNames: ["PPC", "Extraovarian Peritoneal Serous Papillary Carcinoma"],
    category: "carcinoma",
    description: "Cancer arising from the peritoneal lining. Closely related to ovarian cancer and treated identically. Can occur even after prophylactic oophorectomy in BRCA mutation carriers. Often presents at advanced stage.",
    commonSymptoms: ["Abdominal distension", "Bloating", "Pelvic pain", "Weight loss", "Ascites", "Nausea", "Changes in bowel habits"],
    riskFactors: ["BRCA1/BRCA2 mutations", "Family history of ovarian cancer", "Female sex", "Age over 60"],
    diagnostics: ["CT abdomen/pelvis", "CA-125", "PET/CT", "Surgical staging", "BRCA testing"],
    treatments: [
      { name: "Debulking Surgery", description: "Cytoreductive surgery — goal: no visible disease", typicalCostRange: "$30,000 – $80,000" },
      { name: "Carboplatin + Paclitaxel", description: "Standard first-line chemotherapy", typicalCostRange: "$20,000 – $60,000" },
      { name: "PARP Inhibitors", description: "Olaparib, niraparib for BRCA-mutated maintenance", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Bevacizumab", description: "Anti-VEGF therapy added to chemotherapy", typicalCostRange: "$50,000 – $100,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Similar to advanced ovarian cancer: Stage III ~39% 5-year; Stage IV ~17%; BRCA-mutated: improved with PARP inhibitors",
    supportOrganizations: [
      { name: "Ovarian Cancer Research Alliance", url: "https://ocrahope.org/", description: "US research and advocacy (covers PPC)", geography: "US" },
      { name: "Target Ovarian Cancer", url: "https://www.targetovariancancer.org.uk/", description: "UK ovarian/peritoneal cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Ovarian/Fallopian Tube/Peritoneal Cancer", url: "https://www.cancer.gov/types/ovarian", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~5,000 cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "penile-cancer",
    name: "Penile Cancer",
    alternateNames: ["Penile Squamous Cell Carcinoma"],
    category: "carcinoma",
    description: "Rare cancer of the penis, predominantly squamous cell carcinoma. Strongly linked to HPV infection, phimosis, and poor hygiene. Circumcision is protective. Sentinel lymph node biopsy guides inguinal node management.",
    commonSymptoms: ["Persistent sore or lump on the penis", "Rash", "Bleeding or discharge", "Change in skin colour", "Thickening of skin", "Swollen inguinal lymph nodes"],
    riskFactors: ["HPV infection (types 16, 18)", "Phimosis", "Smoking", "Poor genital hygiene", "Lichen sclerosus", "Uncircumcised"],
    diagnostics: ["Biopsy of lesion", "MRI of penis", "CT/PET for staging", "Sentinel lymph node biopsy"],
    treatments: [
      { name: "Penile-Preserving Surgery", description: "Wide local excision or glansectomy for early disease", typicalCostRange: "$10,000 – $30,000" },
      { name: "Partial/Total Penectomy", description: "For advanced local disease", typicalCostRange: "$15,000 – $40,000" },
      { name: "Lymph Node Dissection (ILND)", description: "Inguinal lymphadenectomy for node-positive or high-risk", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemoradiation", description: "For unresectable disease; cisplatin-based", typicalCostRange: "$30,000 – $70,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage IIIA", "Stage IIIB", "Stage IV"],
    survivalRates: "Stage I: ~90% 5-year; Stage II: ~80%; Stage III: ~50-60%; Stage IV: ~10-20%",
    supportOrganizations: [
      { name: "Orchid (Male Cancer Charity)", url: "https://orchid-cancer.org.uk/", description: "UK male cancer including penile cancer", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Penile Cancer", url: "https://www.cancer.gov/types/penile/patient/penile-treatment-pdq", type: "website" },
      { title: "Cancer Research UK – Penile Cancer", url: "https://www.cancerresearchuk.org/about-cancer/penile-cancer", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2,200 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering"] },
      { region: "India", prevalence: "Higher incidence; ~15,000 cases/year — significant public health burden", notableHospitals: ["Tata Memorial", "AIIMS"] },
      { region: "Global", prevalence: "Higher in developing nations; ~36,000 cases worldwide/year" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "salivary-gland-cancer",
    name: "Salivary Gland Cancer",
    alternateNames: ["Mucoepidermoid Carcinoma", "Adenoid Cystic Carcinoma", "Acinic Cell Carcinoma"],
    category: "carcinoma",
    description: "Rare cancers of the parotid, submandibular, or minor salivary glands. Many subtypes with markedly different behaviour — adenoid cystic carcinoma has perineural spread and late recurrences decades later.",
    commonSymptoms: ["Painless facial lump", "Numbness in face", "Difficulty opening mouth", "Facial palsy", "Pain in ear or jaw", "Dysphagia"],
    riskFactors: ["Prior radiation to head/neck", "Age 50-70", "Smoking (for Warthin's — benign)", "EBV (lymphoepithelial carcinoma)"],
    diagnostics: ["MRI of head/neck", "CT scan", "FNA biopsy", "Core needle biopsy", "PET/CT for staging", "Molecular testing (MYB, NSD1, NTRK)"],
    treatments: [
      { name: "Surgery (Parotidectomy)", description: "Total or partial parotidectomy with facial nerve preservation", typicalCostRange: "$20,000 – $60,000" },
      { name: "Adjuvant Radiation", description: "Postoperative radiation for high-grade, close margins, or perineural invasion", typicalCostRange: "$20,000 – $60,000" },
      { name: "Chemotherapy", description: "Cyclophosphamide-based or cisplatin regimens for metastatic disease", typicalCostRange: "$20,000 – $60,000" },
      { name: "Androgen Deprivation Therapy", description: "For AR+ salivary gland cancers (experimental but promising)", typicalCostRange: "$10,000 – $30,000/year" },
      { name: "NTRK/RET Inhibitors", description: "If fusion positive — larotrectinib or entrectinib", typicalCostRange: "$150,000 – $250,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Low-grade: >90% 5-year; High-grade: 40-60% 5-year; Adenoid cystic: 90% 5-year but 50-60% 15-year due to late recurrences",
    supportOrganizations: [
      { name: "Adenoid Cystic Carcinoma Research Foundation", url: "https://accrf.org/", description: "Dedicated adenoid cystic carcinoma research", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Salivary Gland Cancer", url: "https://www.cancer.gov/types/head-and-neck/patient/salivary-gland-treatment-pdq", type: "website" },
      { title: "ACS – Salivary Gland Cancer", url: "https://www.cancer.org/cancer/types/salivary-gland-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~4,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "University of Pittsburgh"] },
      { region: "UK", prevalence: "~800 new cases/year", notableHospitals: ["The Christie", "Royal Marsden"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "cutaneous-t-cell-lymphoma",
    name: "Cutaneous T-Cell Lymphoma (CTCL)",
    alternateNames: ["Mycosis Fungoides", "Sézary Syndrome", "CTCL"],
    category: "lymphoma",
    description: "A group of non-Hodgkin lymphomas arising from skin T-cells. Mycosis fungoides (MF) is the most common, presenting with skin patches/plaques. Sézary syndrome is the leukemic variant. Generally indolent but can transform to aggressive disease.",
    commonSymptoms: ["Skin patches (eczema-like)", "Plaques", "Tumours on skin", "Redness (erythroderma in Sézary)", "Itching", "Lymph node enlargement", "Hair loss in affected areas"],
    riskFactors: ["Age over 50", "Male sex", "Immune dysregulation"],
    diagnostics: ["Skin biopsy (multiple sites)", "T-cell clonality (TCR gene rearrangement)", "CT/PET scan for staging", "Flow cytometry of blood (Sézary)", "Bone marrow biopsy (advanced stages)"],
    treatments: [
      { name: "Skin-Directed Therapy", description: "Topical corticosteroids, nitrogen mustard, retinoids, phototherapy (PUVA, NB-UVB) for early MF", typicalCostRange: "$2,000 – $20,000/year" },
      { name: "Total Skin Electron Beam Therapy (TSEBT)", description: "Radiation of entire skin surface for widespread plaque MF", typicalCostRange: "$30,000 – $80,000" },
      { name: "Bexarotene", description: "Oral retinoid for refractory MF/Sézary", typicalCostRange: "$30,000 – $50,000/year" },
      { name: "Mogamulizumab", description: "Anti-CCR4 antibody for relapsed/refractory MF/Sézary (MAVORIC trial)", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Extracorporeal Photopheresis (ECP)", description: "For erythrodermic MF and Sézary syndrome", typicalCostRange: "$30,000 – $100,000/year" }
    ],
    stages: ["Stage IA (patches <10% BSA)", "Stage IB (plaques >10% BSA)", "Stage IIA (nodal involvement)", "Stage IIB (skin tumours)", "Stage III (erythroderma)", "Stage IVA (Sézary)", "Stage IVB (visceral)"],
    survivalRates: "Stage IA: life expectancy near normal; Stage IB: ~12 years median; Stage IIB: ~5 years; Stage IV: ~2 years",
    supportOrganizations: [
      { name: "Cutaneous Lymphoma Foundation", url: "https://www.clfoundation.org/", description: "US CTCL patient advocacy", geography: "US" },
      { name: "Lymphoma Action", url: "https://lymphoma-action.org.uk/", description: "UK lymphoma support including CTCL", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Mycosis Fungoides Treatment", url: "https://www.cancer.gov/types/lymphoma/patient/mycosis-fungoides-treatment-pdq", type: "website" },
      { title: "CLF – CTCL Patient Resource Guide (PDF)", url: "https://www.clfoundation.org/sites/default/files/2021-01/CLF_PatientGuide2019.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year (MF + Sézary)", notableHospitals: ["Stanford Cancer Center", "MD Anderson", "Memorial Sloan Kettering", "Yale Cancer Center"] },
      { region: "UK", prevalence: "~600 new cases/year", notableHospitals: ["King's College Hospital", "The Christie"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "merkel-cell-carcinoma",
    name: "Merkel Cell Carcinoma",
    alternateNames: ["MCC", "Neuroendocrine Carcinoma of the Skin"],
    category: "carcinoma",
    description: "Rare but aggressive neuroendocrine skin cancer. Strongly linked to Merkel cell polyomavirus (MCPyV) and UV exposure. More common in elderly, immunosuppressed patients. Immunotherapy has dramatically improved outcomes in advanced disease.",
    commonSymptoms: ["Fast-growing, painless skin nodule (pink/red/purple)", "Usually on sun-exposed areas (head, neck)", "May look like a cyst or pimple", "Lymph node enlargement"],
    riskFactors: ["Age over 65", "Immunosuppression (transplant, HIV)", "MCPyV infection", "UV exposure", "Fair skin"],
    diagnostics: ["Skin biopsy (cytokeratin 20+, synaptophysin+)", "Sentinel lymph node biopsy", "CT/PET/CT staging", "MCPyV antibody testing"],
    treatments: [
      { name: "Wide Local Excision", description: "Surgery with adequate margins", typicalCostRange: "$8,000 – $20,000" },
      { name: "Sentinel Lymph Node Biopsy", description: "Routine staging — guides adjuvant therapy", typicalCostRange: "$5,000 – $15,000" },
      { name: "Adjuvant Radiation", description: "To primary site and regional nodes", typicalCostRange: "$20,000 – $50,000" },
      { name: "Immunotherapy", description: "Avelumab or pembrolizumab for advanced/metastatic MCC — remarkable response rates", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I (<2 cm)", "Stage II (>2 cm)", "Stage III (node-positive)", "Stage IV (distant metastasis)"],
    survivalRates: "Stage I: ~75-80% 5-year; Stage II: ~55-65%; Stage III: ~35-45%; Stage IV (with immunotherapy): ~30-40%",
    supportOrganizations: [
      { name: "Merkel Cell Carcinoma Research Fund", url: "https://research.fredhutch.org/nghiem/en.html", description: "University of Washington / Fred Hutch MCC research", geography: "US" }
    ],
    externalResources: [
      { title: "NCCN Merkel Cell Carcinoma (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/mcc-patient.pdf", type: "pdf" },
      { title: "MCC Research – UW Medicine", url: "https://www.mccresearch.org/", type: "website" },
      { title: "NCI – Merkel Cell Carcinoma", url: "https://www.cancer.gov/types/skin/patient/merkel-cell-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year; incidence tripling over past 20 years", notableHospitals: ["Fred Hutchinson / UW Medicine (world MCC centre)", "Memorial Sloan Kettering", "MD Anderson"] },
      { region: "Australia", prevalence: "Higher rates due to UV exposure", notableHospitals: ["Peter MacCallum Cancer Centre"] },
      { region: "UK", prevalence: "~550 new cases/year", notableHospitals: ["Royal Marsden"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "carcinoid-tumor",
    name: "Carcinoid Tumour",
    alternateNames: ["Well-Differentiated Neuroendocrine Tumour (NET)", "GI Carcinoid", "Lung Carcinoid"],
    category: "other",
    description: "Slow-growing neuroendocrine tumours arising most commonly in the GI tract (small intestine, rectum, appendix) or lungs. Can cause carcinoid syndrome (flushing, diarrhoea) when metastatic to liver. Usually discovered incidentally.",
    commonSymptoms: ["Often asymptomatic (incidental)", "Flushing (face/neck)", "Diarrhoea", "Wheezing", "Right-sided heart disease (carcinoid heart disease)", "Abdominal pain", "Carcinoid crisis (during surgery)"],
    riskFactors: ["MEN-1 syndrome", "Family history of neuroendocrine tumours", "Age 50-60"],
    diagnostics: ["Chromogranin A (CgA) blood test", "24h urine 5-HIAA", "CT/MRI abdomen", "DOTATE PET/CT (68Ga-DOTATATE) — gold standard", "Octreoscan", "Biopsy (Ki-67 grading)"],
    treatments: [
      { name: "Surgery", description: "Resection of primary and liver metastases where feasible", typicalCostRange: "$20,000 – $80,000" },
      { name: "Somatostatin Analogues", description: "Octreotide LAR, lanreotide — control symptoms and slow growth", typicalCostRange: "$30,000 – $60,000/year" },
      { name: "PRRT (177Lu-DOTATATE)", description: "Peptide receptor radionuclide therapy — NETTER-1 trial showed ~79% disease control", typicalCostRange: "$40,000 – $60,000/cycle (4 cycles)" },
      { name: "Everolimus", description: "mTOR inhibitor for progressive pancreatic NETs", typicalCostRange: "$80,000 – $130,000/year" },
      { name: "Sunitinib", description: "For pancreatic NETs", typicalCostRange: "$80,000 – $140,000/year" }
    ],
    stages: ["Grade 1 (Ki-67 <3%)", "Grade 2 (Ki-67 3-20%)", "Grade 3 (Ki-67 >20%)", "NEC (>50%)"],
    survivalRates: "Well-differentiated G1/G2: 10-year survival 50-80%; G3/NEC: <20% 5-year; PRRT improves PFS significantly",
    supportOrganizations: [
      { name: "Carcinoid Cancer Foundation", url: "https://www.carcinoid.org/", description: "US neuroendocrine tumour support", geography: "US" },
      { name: "Neuroendocrine Cancer UK", url: "https://www.neuroendocrineuk.org/", description: "UK NET advocacy", geography: "UK" },
      { name: "NET Research Foundation", url: "https://www.netrf.org/", description: "Global NET research funding", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Carcinoid Tumors Treatment", url: "https://www.cancer.gov/types/gi-carcinoid-tumors", type: "website" },
      { title: "NETTER-1 Trial (PRRT for NETs)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607427", type: "research" },
      { title: "NANETS – NET Clinical Practice Guidelines", url: "https://www.nanets.net/nanets-consensus-guidelines", type: "website" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~12,000 new GI NET cases/year; rising incidence", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic", "Moffitt"] },
      { region: "UK", prevalence: "~3,500 new cases/year", notableHospitals: ["Royal Free Hospital (London NET Centre)", "The Christie"] },
      { region: "Global", prevalence: "Incidence rising worldwide due to better imaging detection" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "ampullary-cancer",
    name: "Ampullary Cancer",
    alternateNames: ["Ampulla of Vater Cancer", "Periampullary Carcinoma"],
    category: "carcinoma",
    description: "Cancer arising at or near the ampulla of Vater (junction of bile duct and pancreatic duct at the duodenum). Better prognosis than pancreatic ductal adenocarcinoma. Whipple procedure is the primary treatment.",
    commonSymptoms: ["Jaundice", "Biliary colic", "Weight loss", "Pale stools", "Dark urine", "Pancreatitis"],
    riskFactors: ["Familial adenomatous polyposis (FAP)", "Lynch syndrome", "Chronic pancreatitis", "Biliary tract diseases"],
    diagnostics: ["ERCP with biopsy", "EUS", "CT/MRI abdomen", "CA 19-9", "HER2 and MSI testing"],
    treatments: [
      { name: "Whipple Procedure (Pancreaticoduodenectomy)", description: "Curative surgery — best outcomes of all periampullary tumors", typicalCostRange: "$50,000 – $200,000" },
      { name: "Adjuvant Chemotherapy", description: "Gemcitabine + capecitabine or CAPOX based on ESPAC-3 data", typicalCostRange: "$20,000 – $60,000" },
      { name: "Endoscopic Resection", description: "Ampullectomy for benign or early T1 ampullary adenoma/cancer", typicalCostRange: "$10,000 – $25,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for MSI-H ampullary cancer", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III (nodal)", "Stage IV (metastatic)"],
    survivalRates: "Resected: ~40-50% 5-year; Nodal positive: ~25-30%; Metastatic: ~5%",
    supportOrganizations: [
      { name: "Pancreatic Cancer Action Network", url: "https://www.pancan.org/", description: "Covers ampullary cancer resources", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Ampullary Cancer (GI)", url: "https://www.cancer.gov/types/small-intestine/patient/small-intestine-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~5,000 new cases/year", notableHospitals: ["Johns Hopkins", "MD Anderson", "Memorial Sloan Kettering"] },
      { region: "India", prevalence: "May be slightly higher due to biliary/parasitic diseases" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "small-intestine-cancer",
    name: "Small Intestine Cancer",
    alternateNames: ["Small Bowel Cancer", "Duodenal Cancer", "Jejunal Cancer", "Ileal Cancer"],
    category: "carcinoma",
    description: "Rare cancers of the small bowel. Adenocarcinoma, carcinoid, lymphoma, and sarcoma (GIST) all occur. Duodenal adenocarcinoma most common. Often diagnosed late due to non-specific symptoms and difficult endoscopic access.",
    commonSymptoms: ["Abdominal pain", "Weight loss", "Nausea/vomiting", "GI bleeding", "Obstruction", "Jaundice (if periampullary)", "Iron deficiency anaemia"],
    riskFactors: ["Crohn's disease", "Coeliac disease", "FAP", "Lynch syndrome", "Peutz-Jeghers syndrome"],
    diagnostics: ["CT enterography", "Capsule endoscopy", "Double-balloon enteroscopy with biopsy", "PET/CT staging"],
    treatments: [
      { name: "Surgery (Resection)", description: "Segmental resection or Whipple for duodenal adenocarcinoma", typicalCostRange: "$25,000 – $150,000" },
      { name: "Adjuvant Chemotherapy", description: "FOLFOX or CAPOX (extrapolated from CRC data)", typicalCostRange: "$20,000 – $60,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for MSI-H/dMMR tumors", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Resected duodenal: ~30-40% 5-year; Metastatic adenocarcinoma: 10-15%",
    supportOrganizations: [
      { name: "Fight Colorectal Cancer", url: "https://fightcolorectalcancer.org/", description: "Covers small bowel cancers", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Small Intestine Cancer", url: "https://www.cancer.gov/types/small-intestine", type: "website" },
      { title: "ACS – Small Intestine Cancer", url: "https://www.cancer.org/cancer/types/small-intestine-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~12,000 new cases/year (all types)", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "spinal-cord-tumors",
    name: "Spinal Cord Tumours",
    alternateNames: ["Ependymoma (Spinal)", "Astrocytoma (Spinal)", "Spinal Meningioma", "Schwannoma"],
    category: "cns",
    description: "Tumours arising within or adjacent to the spinal cord. Classified as intramedullary (within cord), intradural-extramedullary (in the canal), or extradural (outside dura). Ependymoma is the most common intramedullary tumor in adults.",
    commonSymptoms: ["Back pain (localized or radiating)", "Loss of sensation in limbs", "Weakness", "Bowel/bladder dysfunction", "Spasticity", "Loss of coordination"],
    riskFactors: ["Neurofibromatosis types 1 & 2", "Prior radiation", "Genetic predisposition (sporadic mostly)"],
    diagnostics: ["MRI spine with contrast (gold standard)", "CT myelogram", "Neurophysiology testing", "Surgical biopsy/pathology"],
    treatments: [
      { name: "Surgery", description: "Maximal safe resection — key for ependymoma (often curative) and meningioma", typicalCostRange: "$40,000 – $120,000" },
      { name: "Radiation Therapy", description: "Postoperative for ependymoma grade II/III; primary for high-grade astrocytoma", typicalCostRange: "$20,000 – $60,000" },
      { name: "Chemotherapy", description: "Temozolomide for high-grade spinal astrocytoma", typicalCostRange: "$20,000 – $60,000" },
      { name: "Targeted Therapy", description: "EZH2 inhibitors / experimental for NF1-associated tumors", typicalCostRange: "Experimental" }
    ],
    stages: ["Grade I (benign, WHO)", "Grade II (low grade)", "Grade III (anaplastic)", "Grade IV (most aggressive)"],
    survivalRates: "Spinal ependymoma: >90% 5-year (gross total resection); Spinal astrocytoma (Grade II): ~70% 5-year; Grade IV: very poor",
    supportOrganizations: [
      { name: "National Brain Tumor Society", url: "https://braintumor.org/", description: "Also covers spinal cord tumors", geography: "US" },
      { name: "Ependymoma Advocates", url: "https://ependymoma.org/", description: "US ependymoma-specific advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Spinal Cord Tumors", url: "https://www.cancer.gov/types/brain/patient/child-astrocytoma-treatment-pdq", type: "website" },
      { title: "AANS – Spinal Cord Tumor Overview", url: "https://www.aans.org/Patients/Neurosurgical-Conditions-and-Treatments/Spinal-Cord-Tumors", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~12,000 new primary spinal cord tumors/year", notableHospitals: ["Mayo Clinic", "Johns Hopkins", "UCSF", "Cleveland Clinic"] },
      { region: "UK", prevalence: "~1,500 new cases/year", notableHospitals: ["National Hospital for Neurology & Neurosurgery (Queen Square)", "Addenbrooke's Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "vaginal-cancer",
    name: "Vaginal Cancer",
    alternateNames: ["Vaginal Squamous Cell Carcinoma", "Vaginal Adenocarcinoma", "Clear Cell Carcinoma of Vagina"],
    category: "carcinoma",
    description: "Rare cancer of the vagina. Squamous cell carcinoma is most common (~85%). HPV-associated. Clear cell adenocarcinoma has historical link to DES (diethylstilbestrol) exposure in utero. Chemoradiation is the mainstay of treatment.",
    commonSymptoms: ["Abnormal vaginal bleeding", "Watery discharge", "Palpable mass", "Pelvic pain", "Painful urination", "Constipation"],
    riskFactors: ["HPV infection", "DES exposure in utero (clear cell type)", "Smoking", "Vaginal intraepithelial neoplasia (VAIN)", "Prior pelvic radiation", "Immunosuppression"],
    diagnostics: ["Pelvic exam", "Colposcopy with biopsy", "MRI pelvis", "CT/PET for staging"],
    treatments: [
      { name: "Chemoradiation", description: "Cisplatin-based concurrent chemoradiation with brachytherapy — standard for most stages", typicalCostRange: "$40,000 – $90,000" },
      { name: "Surgery", description: "Radical vaginectomy for very early disease; total pelvic exenteration in selected cases", typicalCostRange: "$30,000 – $80,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic (PD-L1+ or MSI-H)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I (vagina only)", "Stage II (paravaginal tissue)", "Stage III (pelvic wall/nodes)", "Stage IVA (bladder/rectum)", "Stage IVB (distant)"],
    survivalRates: "Stage I: ~75-80% 5-year; Stage II: ~50-60%; Stage III: ~30-40%; Stage IV: ~15-20%",
    supportOrganizations: [
      { name: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org/", description: "US gynecologic cancer support", geography: "US" },
      { name: "The Eve Appeal", url: "https://eveappeal.org.uk/", description: "UK gynaecological cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Vaginal Cancer", url: "https://www.cancer.gov/types/vaginal/patient/vaginal-treatment-pdq", type: "website" },
      { title: "Cancer Research UK – Vaginal Cancer", url: "https://www.cancerresearchuk.org/about-cancer/vaginal-cancer", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "UK", prevalence: "~300 new cases/year" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "unknown-primary-cancer",
    name: "Cancer of Unknown Primary (CUP)",
    alternateNames: ["CUP", "Occult Primary Cancer", "Unknown Primary Carcinoma"],
    category: "carcinoma",
    description: "Metastatic cancer where the site of origin cannot be identified after standard workup. Represents ~3-5% of all cancers. Next-generation sequencing can now identify tissue of origin in ~70% of cases, enabling tumour-agnostic therapy. Prognosis is generally poor but subset-specific treatments can help.",
    commonSymptoms: ["Varies by metastatic sites", "Lymph node enlargement", "Liver mass", "Lung lesions", "Bone pain", "Weight loss", "Fatigue"],
    riskFactors: ["Smoking", "Generally unknown"],
    diagnostics: ["CT chest/abdomen/pelvis", "PET/CT", "Extensive biopsy with IHC", "Next-generation sequencing (NGS) for tissue of origin", "Liquid biopsy (ctDNA)", "Tumour markers (CEA, CA-125, AFP, PSA)"],
    treatments: [
      { name: "Empiric Chemotherapy", description: "Paclitaxel + carboplatin + etoposide OR gemcitabine + cisplatin", typicalCostRange: "$30,000 – $80,000" },
      { name: "Site-Specific Therapy", description: "After molecular tissue-of-origin identification — treat as primary cancer type", typicalCostRange: "Varies by identified primary" },
      { name: "Immunotherapy", description: "Pembrolizumab for TMB-high, MSI-H or PD-L1+ CUP", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "NTRK Inhibitors", description: "Larotrectinib for NTRK-fusion positive CUP (tumour-agnostic)", typicalCostRange: "$150,000 – $250,000/year" }
    ],
    survivalRates: "Median survival: 8-10 months for unfavourable CUP; Favourable subsets (e.g. cervical node SCC, peritoneal carcinomatosis in women, young men with midline mass): much better",
    supportOrganizations: [
      { name: "CancerCare", url: "https://www.cancercare.org/", description: "US cancer patient support", geography: "US" },
      { name: "Unknown Primary Foundation", url: "https://www.unknownprimary.com/", description: "CUP-specific support and awareness", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Unknown Primary", url: "https://www.cancer.gov/types/unknown-primary", type: "website" },
      { title: "ESMO – CUP Clinical Practice Guidelines", url: "https://www.esmo.org/guidelines/guidelines-by-topic/esmo-clinical-practice-guidelines-for-diagnosis-management-and-follow-up/cancer-of-unknown-primary", type: "website" },
      { title: "ASCO – Molecular Profiling of CUP", url: "https://ascopubs.org/doi/full/10.1200/JCO.22.01864", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~40,000 new cases/year (3-5% of all cancers)", notableHospitals: ["MD Anderson", "Vanderbilt-Ingram", "Stanford"] },
      { region: "UK", prevalence: "~10,000 new cases/year", notableHospitals: ["The Christie", "Royal Marsden"] },
      { region: "Global", prevalence: "Declining as molecular profiling improves tissue-of-origin identification" }
    ],
    lastUpdated: "2026-03-30"
  }
];
