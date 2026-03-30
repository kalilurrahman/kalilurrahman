import { CancerEntry } from "./types";

export const cancersMP: CancerEntry[] = [
  {
    id: "melanoma",
    name: "Melanoma",
    alternateNames: ["Malignant Melanoma", "Cutaneous Melanoma"],
    category: "other",
    description: "Deadliest form of skin cancer arising from melanocytes. Immunotherapy has transformed treatment for advanced disease. Most curable when caught early. UV exposure is the primary modifiable risk factor.",
    commonSymptoms: ["New or changing mole (ABCDE criteria)", "Asymmetric lesion", "Irregular borders", "Multiple colors", "Diameter >6mm", "Evolving appearance", "Itching or bleeding mole"],
    riskFactors: ["UV radiation (sun/tanning beds)", "Fair skin", "Many moles (>50)", "Family history", "BRAF/CDKN2A mutations", "Prior melanoma", "Immunosuppression"],
    diagnostics: ["Skin biopsy (excisional)", "Dermoscopy", "Sentinel lymph node biopsy", "CT/PET scan for staging", "BRAF mutation testing", "LDH"],
    treatments: [
      { name: "Wide Local Excision", description: "Surgical removal with margins based on thickness", typicalCostRange: "$3,000 – $10,000" },
      { name: "Immunotherapy", description: "Pembrolizumab or nivolumab (± ipilimumab) — adjuvant and advanced", typicalCostRange: "$100,000 – $250,000/year" },
      { name: "BRAF/MEK Targeted Therapy", description: "Dabrafenib + trametinib or encorafenib + binimetinib for BRAF V600E/K", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "TIL Therapy", description: "Lifileucel (tumor-infiltrating lymphocyte therapy) — FDA approved 2024", typicalCostRange: "$515,000" },
      { name: "Radiation", description: "Adjuvant for high-risk or palliative", typicalCostRange: "$15,000 – $40,000" }
    ],
    stages: ["Stage 0 (in situ)", "Stage I", "Stage II", "Stage III (regional nodes)", "Stage IV (distant metastasis)"],
    survivalRates: "Stage I: ~99%; Stage II: ~80-93%; Stage III: ~40-78%; Stage IV (with IO): ~50% 5-year",
    supportOrganizations: [
      { name: "Melanoma Research Foundation", url: "https://melanoma.org/", description: "US research and patient support", geography: "US" },
      { name: "Melanoma Institute Australia", url: "https://www.melanoma.org.au/", description: "World-leading melanoma research", geography: "Australia" },
      { name: "Melanoma UK", url: "https://www.melanomauk.org.uk/", description: "UK melanoma charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Melanoma", url: "https://www.cancer.gov/types/skin/patient/melanoma-treatment-pdq", type: "website" },
      { title: "ACS – Melanoma", url: "https://www.cancer.org/cancer/types/melanoma-skin-cancer.html", type: "website" },
      { title: "NCCN Melanoma Guidelines (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/melanoma-patient.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~100,000 new cases/year", screeningPrograms: "Full-body skin exams recommended for high-risk individuals", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Moffitt Cancer Center"] },
      { region: "Australia", prevalence: "Highest incidence worldwide; ~18,000 cases/year", screeningPrograms: "SunSmart campaigns; skin checks widely promoted", notableHospitals: ["Melanoma Institute Australia (Sydney)", "Peter MacCallum Cancer Centre"] },
      { region: "UK", prevalence: "~17,000 new cases/year", notableHospitals: ["Royal Marsden", "The Christie"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "mesothelioma",
    name: "Mesothelioma",
    alternateNames: ["Malignant Mesothelioma", "Pleural Mesothelioma", "Peritoneal Mesothelioma"],
    category: "other",
    description: "Aggressive cancer of the mesothelial lining, most commonly the pleura (lungs). Almost exclusively caused by asbestos exposure with 20-50 year latency. Poor prognosis but improving with immunotherapy.",
    commonSymptoms: ["Shortness of breath", "Chest pain", "Pleural effusion", "Weight loss", "Fatigue", "Abdominal pain/swelling (peritoneal)"],
    riskFactors: ["Asbestos exposure", "Occupational exposure (construction, shipbuilding, mining)", "Living near asbestos mines", "BAP1 mutation"],
    diagnostics: ["CT chest/abdomen", "Pleural fluid cytology", "Thoracoscopic biopsy", "Immunohistochemistry (calretinin, WT1)", "PET/CT"],
    treatments: [
      { name: "Surgery", description: "Pleurectomy/decortication or extrapleural pneumonectomy for resectable cases", typicalCostRange: "$50,000 – $150,000" },
      { name: "Immunotherapy", description: "Nivolumab + ipilimumab — first-line standard (CheckMate 743)", typicalCostRange: "$150,000 – $250,000/year" },
      { name: "Chemotherapy", description: "Pemetrexed + cisplatin/carboplatin", typicalCostRange: "$30,000 – $80,000" },
      { name: "HIPEC", description: "Heated intraperitoneal chemotherapy for peritoneal mesothelioma", typicalCostRange: "$50,000 – $100,000" }
    ],
    stages: ["Stage I (localized)", "Stage II", "Stage III", "Stage IV (distant)"],
    survivalRates: "Median survival: 12-21 months; With surgery + multimodal: 2-5 years possible",
    supportOrganizations: [
      { name: "Mesothelioma Applied Research Foundation", url: "https://www.curemeso.org/", description: "US research and patient support", geography: "US" },
      { name: "Mesothelioma UK", url: "https://www.mesothelioma.uk.com/", description: "UK specialist nurse and support network", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Mesothelioma", url: "https://www.cancer.gov/types/mesothelioma", type: "website" },
      { title: "ACS – Mesothelioma", url: "https://www.cancer.org/cancer/types/malignant-mesothelioma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year", notableHospitals: ["Brigham and Women's Hospital", "MD Anderson", "Moffitt"] },
      { region: "UK", prevalence: "~2,700 cases/year — highest rate in the world per capita due to industrial asbestos use", notableHospitals: ["Papworth Hospital", "The Christie"] },
      { region: "Australia", prevalence: "~700 new cases/year; high rates due to Wittenoom mine", notableHospitals: ["Sir Charles Gairdner Hospital (Perth)"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "multiple-myeloma",
    name: "Multiple Myeloma",
    alternateNames: ["Myeloma", "Plasma Cell Myeloma", "Kahler Disease"],
    category: "other",
    description: "Cancer of plasma cells in the bone marrow. Produces abnormal antibodies (M protein). Causes bone destruction, kidney failure, and immunodeficiency. Incurable but increasingly manageable with modern therapies.",
    commonSymptoms: ["Bone pain (especially back)", "Fatigue", "Frequent infections", "Kidney problems", "High calcium (confusion, thirst)", "Anemia", "Pathological fractures"],
    riskFactors: ["Age over 65", "Male sex", "African American descent", "MGUS (precursor condition)", "Family history", "Obesity"],
    diagnostics: ["SPEP/UPEP (M-protein)", "Bone marrow biopsy", "Skeletal survey/PET-CT/MRI", "Free light chains", "Beta-2 microglobulin", "FISH cytogenetics"],
    treatments: [
      { name: "VRd Induction", description: "Bortezomib + lenalidomide + dexamethasone — standard induction", typicalCostRange: "$50,000 – $150,000" },
      { name: "Autologous Stem Cell Transplant", description: "High-dose melphalan + auto-SCT for eligible patients", typicalCostRange: "$100,000 – $300,000" },
      { name: "Maintenance Lenalidomide", description: "Continuous lenalidomide until progression", typicalCostRange: "$15,000 – $20,000/month" },
      { name: "CAR-T Cell Therapy", description: "Ciltacabtagene autoleucel (Carvykti), idecabtagene vicleucel (Abecma) for relapsed", typicalCostRange: "$400,000 – $465,000" },
      { name: "Bispecific Antibodies", description: "Teclistamab, elranatamab for relapsed/refractory", typicalCostRange: "$30,000 – $50,000/month" },
      { name: "Daratumumab-based Regimens", description: "Anti-CD38 added to backbone regimens", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["MGUS (precursor)", "Smoldering Myeloma", "Stage I (ISS)", "Stage II (ISS)", "Stage III (ISS)"],
    survivalRates: "Standard risk: median survival >8-10 years; High-risk cytogenetics: 3-5 years; Improving with new therapies",
    supportOrganizations: [
      { name: "International Myeloma Foundation", url: "https://www.myeloma.org/", description: "Global myeloma research and patient education", geography: "Global" },
      { name: "Multiple Myeloma Research Foundation", url: "https://themmrf.org/", description: "US research and clinical trial matching", geography: "US" },
      { name: "Myeloma UK", url: "https://www.myeloma.org.uk/", description: "UK myeloma charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Multiple Myeloma", url: "https://www.cancer.gov/types/myeloma", type: "website" },
      { title: "ACS – Multiple Myeloma", url: "https://www.cancer.org/cancer/types/multiple-myeloma.html", type: "website" },
      { title: "IMF – Myeloma Patient Guide", url: "https://www.myeloma.org/sites/default/files/2021-04/understanding_myeloma_2021.pdf", type: "pdf" },
      { title: "NEJM – GRIFFIN Trial (Daratumumab Quadruplet)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2210679", type: "research" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~35,000 new cases/year", notableHospitals: ["Mayo Clinic", "Dana-Farber", "Memorial Sloan Kettering", "Emory Winship"] },
      { region: "UK", prevalence: "~5,900 new cases/year", notableHospitals: ["The Christie", "Royal Marsden"] },
      { region: "India", prevalence: "~20,000 cases/year; often younger patients than Western countries", notableHospitals: ["Tata Memorial", "CMC Vellore", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "nasopharyngeal-cancer",
    name: "Nasopharyngeal Cancer",
    alternateNames: ["NPC", "Nasopharyngeal Carcinoma"],
    category: "carcinoma",
    description: "Cancer of the nasopharynx (upper throat behind the nose). Strongly associated with EBV infection in endemic regions (Southern China, Southeast Asia). Highly sensitive to radiation and chemotherapy.",
    commonSymptoms: ["Nasal obstruction", "Bloody nasal discharge", "Ear fullness/hearing loss", "Headache", "Neck mass (cervical lymphadenopathy)", "Cranial nerve palsies"],
    riskFactors: ["EBV infection", "Southern Chinese/Southeast Asian ancestry", "Salted fish consumption", "Smoking", "Family history", "HLA subtypes"],
    diagnostics: ["Nasopharyngoscopy with biopsy", "MRI of nasopharynx and neck", "PET/CT", "EBV DNA blood test (monitoring)", "Chest X-ray/CT"],
    treatments: [
      { name: "Chemoradiation", description: "IMRT + concurrent cisplatin — primary treatment", typicalCostRange: "$40,000 – $100,000" },
      { name: "Induction Chemotherapy", description: "GP (gemcitabine + cisplatin) before chemoradiation for advanced", typicalCostRange: "$20,000 – $50,000" },
      { name: "Immunotherapy", description: "Toripalimab + chemo for recurrent/metastatic (JUPITER-02)", typicalCostRange: "$50,000 – $150,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IVA", "Stage IVB"],
    survivalRates: "Stage I: ~90%; Stage II: ~80%; Stage III: ~65-70%; Stage IV: ~40-50%",
    supportOrganizations: [
      { name: "NPC Support Group", url: "https://www.nasopharyngealcancer.org/", description: "Patient support community", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Nasopharyngeal Cancer", url: "https://www.cancer.gov/types/head-and-neck/patient/nasopharyngeal-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "~130,000 new cases/year worldwide; highest in Southern China, Southeast Asia" },
      { region: "US", prevalence: "Rare (~2,000 cases/year)", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering"] },
      { region: "India", prevalence: "Higher in northeast India (Nagaland, Manipur)", notableHospitals: ["Tata Memorial", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "neuroblastoma",
    name: "Neuroblastoma",
    alternateNames: ["Pediatric Neuroblastoma"],
    category: "other",
    description: "Most common extracranial solid tumor in children. Arises from neural crest cells, typically in adrenal glands or sympathetic ganglia. Ranges from spontaneous regression (infants) to highly aggressive (older children).",
    commonSymptoms: ["Abdominal mass/swelling", "Bone pain", "Fever", "Weight loss", "Periorbital ecchymosis (raccoon eyes)", "Opsoclonus-myoclonus (dancing eyes)"],
    riskFactors: ["Age under 5", "Rare familial cases (ALK or PHOX2B mutations)"],
    diagnostics: ["CT/MRI of primary site", "MIBG scan", "Urine catecholamines (VMA, HVA)", "Bone marrow biopsy", "MYCN amplification testing", "Tissue biopsy"],
    treatments: [
      { name: "Surgery", description: "Resection for low/intermediate-risk", typicalCostRange: "$20,000 – $60,000" },
      { name: "Chemotherapy", description: "Multi-agent chemotherapy for intermediate/high-risk", typicalCostRange: "$80,000 – $300,000" },
      { name: "High-Dose Chemo + Auto-SCT", description: "Myeloablative therapy with stem cell rescue for high-risk", typicalCostRange: "$200,000 – $500,000" },
      { name: "Anti-GD2 Immunotherapy", description: "Dinutuximab — maintenance immunotherapy for high-risk", typicalCostRange: "$100,000 – $200,000" },
      { name: "I-131 MIBG Therapy", description: "Targeted radiation therapy", typicalCostRange: "$50,000 – $100,000" },
      { name: "Observation", description: "Watch and wait for 4S (very young infants with favorable biology)", typicalCostRange: "$5,000 – $15,000/year" }
    ],
    stages: ["Stage L1 (localized)", "Stage L2 (locally invasive)", "Stage M (metastatic)", "Stage MS (metastatic special — infants)"],
    survivalRates: "Low-risk: >95%; Intermediate: 90-95%; High-risk: 40-50% 5-year (improving)",
    supportOrganizations: [
      { name: "Alex's Lemonade Stand Foundation", url: "https://www.alexslemonade.org/", description: "Pediatric cancer research", geography: "US" },
      { name: "Neuroblastoma UK", url: "https://neuroblastoma.org.uk/", description: "UK neuroblastoma research", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Neuroblastoma", url: "https://www.cancer.gov/types/neuroblastoma/patient/neuroblastoma-treatment-pdq", type: "website" },
      { title: "St. Jude – Neuroblastoma", url: "https://www.stjude.org/disease/neuroblastoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~700-800 new cases/year", notableHospitals: ["Children's Hospital of Philadelphia", "St. Jude", "Memorial Sloan Kettering"] },
      { region: "UK", prevalence: "~100 new cases/year", notableHospitals: ["Great Ormond Street Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "non-hodgkin-lymphoma",
    name: "Non-Hodgkin Lymphoma",
    alternateNames: ["NHL", "Diffuse Large B-Cell Lymphoma (DLBCL)", "Follicular Lymphoma", "Mantle Cell Lymphoma", "Burkitt Lymphoma", "Marginal Zone Lymphoma"],
    category: "lymphoma",
    description: "Diverse group of blood cancers arising from lymphocytes. DLBCL is the most common aggressive subtype; follicular is the most common indolent subtype. Over 80 subtypes exist with different treatments and prognoses.",
    commonSymptoms: ["Painless swollen lymph nodes", "Fever", "Night sweats", "Weight loss", "Fatigue", "Abdominal swelling"],
    riskFactors: ["Age over 60", "Immunodeficiency (HIV, transplant)", "Autoimmune diseases", "H. pylori (MALT lymphoma)", "HCV", "Chemical exposure (pesticides, benzene)"],
    diagnostics: ["Lymph node biopsy (excisional preferred)", "CT/PET scan", "Bone marrow biopsy", "Flow cytometry", "Cytogenetics/FISH", "Molecular testing"],
    treatments: [
      { name: "R-CHOP", description: "Rituximab + CHOP — standard for DLBCL", typicalCostRange: "$40,000 – $100,000" },
      { name: "Bendamustine + Rituximab", description: "For indolent lymphomas (follicular, marginal zone)", typicalCostRange: "$30,000 – $80,000" },
      { name: "CAR-T Cell Therapy", description: "Axicabtagene ciloleucel, lisocabtagene maraleucel for relapsed DLBCL", typicalCostRange: "$373,000 – $410,000" },
      { name: "Bispecific Antibodies", description: "Glofitamab, epcoritamab for relapsed/refractory DLBCL", typicalCostRange: "$100,000 – $200,000" },
      { name: "Watchful Waiting", description: "Observation for asymptomatic indolent lymphomas", typicalCostRange: "$2,000 – $5,000/year" },
      { name: "Radiation", description: "Involved-site radiation for localized disease", typicalCostRange: "$15,000 – $40,000" },
      { name: "BTK Inhibitors", description: "Ibrutinib, acalabrutinib for mantle cell and CLL", typicalCostRange: "$100,000 – $180,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "DLBCL: ~65% 5-year overall; Follicular: ~90% 5-year; Mantle cell: ~50-60% 5-year; Burkitt: ~75-85% with intensive chemo",
    supportOrganizations: [
      { name: "Lymphoma Research Foundation", url: "https://lymphoma.org/", description: "US lymphoma research and support", geography: "US" },
      { name: "Lymphoma Action", url: "https://lymphoma-action.org.uk/", description: "UK lymphoma charity", geography: "UK" },
      { name: "Lymphoma Australia", url: "https://www.lymphoma.org.au/", description: "Australian support", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Non-Hodgkin Lymphoma", url: "https://www.cancer.gov/types/lymphoma", type: "website" },
      { title: "ACS – Non-Hodgkin Lymphoma", url: "https://www.cancer.org/cancer/types/non-hodgkin-lymphoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~80,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Dana-Farber", "Fred Hutchinson"] },
      { region: "UK", prevalence: "~14,000 new cases/year", notableHospitals: ["The Christie", "University College London Hospitals"] },
      { region: "India", prevalence: "~30,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS", "CMC Vellore"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "ovarian-cancer",
    name: "Ovarian Cancer",
    alternateNames: ["Epithelial Ovarian Cancer", "Ovarian Carcinoma", "Fallopian Tube Cancer", "Primary Peritoneal Cancer"],
    category: "carcinoma",
    description: "Fifth leading cause of cancer death in women. Often diagnosed at advanced stages due to vague symptoms (\"the silent killer\"). BRCA mutations significantly increase risk. PARP inhibitors have improved survival.",
    commonSymptoms: ["Bloating", "Pelvic/abdominal pain", "Difficulty eating/feeling full quickly", "Urinary frequency", "Fatigue", "Change in bowel habits", "Back pain"],
    riskFactors: ["BRCA1/BRCA2 mutations", "Family history", "Age over 50", "Nulliparity", "Endometriosis", "Obesity", "HRT (estrogen-only)"],
    diagnostics: ["Transvaginal ultrasound", "CA-125 blood test", "CT chest/abdomen/pelvis", "Surgical staging/debulking", "Genetic testing (BRCA, HRD)"],
    treatments: [
      { name: "Debulking Surgery", description: "Primary or interval cytoreductive surgery — goal: no residual disease", typicalCostRange: "$30,000 – $80,000" },
      { name: "Platinum-Based Chemotherapy", description: "Carboplatin + paclitaxel — standard first-line", typicalCostRange: "$20,000 – $60,000" },
      { name: "PARP Inhibitors", description: "Olaparib, niraparib for BRCA-mutated or HRD+ maintenance", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Bevacizumab", description: "Anti-VEGF added to chemo and as maintenance", typicalCostRange: "$50,000 – $100,000/year" },
      { name: "HIPEC", description: "Heated intraperitoneal chemo during surgery", typicalCostRange: "$50,000 – $100,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for MSI-H tumors (rare in ovarian)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I (confined to ovaries)", "Stage II (pelvis)", "Stage III (abdomen/lymph nodes)", "Stage IV (distant metastasis)"],
    survivalRates: "Stage I: ~93%; Stage II: ~70%; Stage III: ~39%; Stage IV: ~17%; BRCA-mutated: better with PARP inhibitors",
    supportOrganizations: [
      { name: "Ovarian Cancer Research Alliance", url: "https://ocrahope.org/", description: "US research and advocacy", geography: "US" },
      { name: "Target Ovarian Cancer", url: "https://www.targetovariancancer.org.uk/", description: "UK ovarian cancer charity", geography: "UK" },
      { name: "Ovarian Cancer Australia", url: "https://www.ovariancancer.net.au/", description: "Australian support", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Ovarian Cancer", url: "https://www.cancer.gov/types/ovarian", type: "website" },
      { title: "ACS – Ovarian Cancer", url: "https://www.cancer.org/cancer/types/ovarian-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~20,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Mayo Clinic"] },
      { region: "UK", prevalence: "~7,500 new cases/year", notableHospitals: ["Royal Marsden", "Hammersmith Hospital"] },
      { region: "India", prevalence: "~45,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "pancreatic-cancer",
    name: "Pancreatic Cancer",
    alternateNames: ["Pancreatic Ductal Adenocarcinoma", "PDAC", "Pancreatic Adenocarcinoma"],
    category: "carcinoma",
    description: "One of the deadliest cancers with ~12% overall 5-year survival. Most are pancreatic ductal adenocarcinoma. Typically diagnosed at an advanced stage. Whipple procedure offers the only chance of cure for resectable disease.",
    commonSymptoms: ["Jaundice", "Abdominal/back pain", "Weight loss", "Loss of appetite", "New-onset diabetes", "Nausea", "Dark urine", "Pale/greasy stools"],
    riskFactors: ["Smoking", "Chronic pancreatitis", "Diabetes (long-standing)", "Family history", "BRCA2/PALB2 mutations", "Lynch syndrome", "Obesity"],
    diagnostics: ["CT pancreas protocol", "EUS with FNA biopsy", "MRI/MRCP", "CA 19-9", "Molecular testing (BRCA, MSI, NTRK, KRAS)"],
    treatments: [
      { name: "Whipple Procedure", description: "Pancreaticoduodenectomy for head tumors", typicalCostRange: "$50,000 – $200,000" },
      { name: "Distal Pancreatectomy", description: "For body/tail tumors", typicalCostRange: "$30,000 – $80,000" },
      { name: "FOLFIRINOX", description: "5-FU, leucovorin, irinotecan, oxaliplatin — standard for fit patients", typicalCostRange: "$30,000 – $80,000" },
      { name: "Gemcitabine + nab-Paclitaxel", description: "Alternative first-line for less fit patients", typicalCostRange: "$20,000 – $60,000" },
      { name: "Radiation", description: "SBRT or conventional radiation for borderline resectable/unresectable", typicalCostRange: "$15,000 – $50,000" },
      { name: "PARP Inhibitors", description: "Olaparib maintenance for BRCA-mutated metastatic disease", typicalCostRange: "$100,000 – $180,000/year" }
    ],
    stages: ["Resectable", "Borderline Resectable", "Locally Advanced", "Metastatic"],
    survivalRates: "Resected: ~20-35% 5-year; Locally advanced: ~10-15%; Metastatic: ~3%; Overall: ~12%",
    supportOrganizations: [
      { name: "Pancreatic Cancer Action Network", url: "https://www.pancan.org/", description: "US advocacy, research, and patient support", geography: "US" },
      { name: "Pancreatic Cancer UK", url: "https://www.pancreaticcancer.org.uk/", description: "UK charity", geography: "UK" },
      { name: "Lustgarten Foundation", url: "https://www.lustgarten.org/", description: "US research funding", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Pancreatic Cancer", url: "https://www.cancer.gov/types/pancreatic", type: "website" },
      { title: "ACS – Pancreatic Cancer", url: "https://www.cancer.org/cancer/types/pancreatic-cancer.html", type: "website" },
      { title: "WHO – Pancreatic Cancer Factsheet", url: "https://gco.iarc.fr/today/data/factsheets/cancers/13-Pancreas-fact-sheet.pdf", type: "pdf" },
      { title: "PanCAN – Know Your Tumor Program", url: "https://www.pancan.org/facing-pancreatic-cancer/treatment/know-your-tumor/", type: "website" },
      { title: "NEJM – POLO Trial (Olaparib Maintenance BRCA)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1903387", type: "research" },
      { title: "Lustgarten – Research Articles", url: "https://www.lustgarten.org/research/featured-research/", type: "website" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~64,000 new cases/year — 3rd leading cause of cancer death", notableHospitals: ["MD Anderson", "Johns Hopkins", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "UK", prevalence: "~10,500 new cases/year", notableHospitals: ["Royal Liverpool Hospital", "The Christie"] },
      { region: "India", prevalence: "~30,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS"] },
      { region: "EU", prevalence: "~90,000 new cases/year across EU" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "prostate-cancer",
    name: "Prostate Cancer",
    alternateNames: ["Prostatic Adenocarcinoma", "Prostate Carcinoma"],
    category: "carcinoma",
    description: "Most common cancer in men (excluding skin). Most cases are slow-growing and may not need immediate treatment. Screening with PSA is controversial. Advanced disease treated with hormonal therapy, chemotherapy, and novel agents.",
    commonSymptoms: ["Often asymptomatic (found by screening)", "Difficulty urinating", "Weak urine stream", "Blood in urine or semen", "Bone pain (metastatic)", "Erectile dysfunction"],
    riskFactors: ["Age over 50", "African American descent", "Family history", "BRCA2 mutation", "Obesity", "High-fat diet"],
    diagnostics: ["PSA blood test", "Digital rectal exam", "MRI prostate (PI-RADS)", "Transrectal or transperineal biopsy", "Gleason score / Grade Group", "Genomic tests (Oncotype, Decipher)"],
    treatments: [
      { name: "Active Surveillance", description: "Monitoring with serial PSA, MRI, and biopsies for low-risk disease", typicalCostRange: "$2,000 – $5,000/year" },
      { name: "Radical Prostatectomy", description: "Robotic-assisted laparoscopic prostatectomy (RALP)", typicalCostRange: "$20,000 – $60,000" },
      { name: "Radiation (EBRT/SBRT)", description: "External beam radiation; hypofractionated or conventional", typicalCostRange: "$20,000 – $50,000" },
      { name: "Brachytherapy", description: "LDR or HDR seeds implanted in prostate", typicalCostRange: "$10,000 – $30,000" },
      { name: "Androgen Deprivation Therapy", description: "LHRH agonists/antagonists for advanced disease", typicalCostRange: "$10,000 – $30,000/year" },
      { name: "Novel Hormonal Agents", description: "Enzalutamide, abiraterone, darolutamide, apalutamide", typicalCostRange: "$100,000 – $170,000/year" },
      { name: "Chemotherapy", description: "Docetaxel or cabazitaxel for mCRPC", typicalCostRange: "$20,000 – $60,000" },
      { name: "PARP Inhibitors", description: "Olaparib, rucaparib for BRCA-mutated mCRPC", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Lutetium-177 PSMA", description: "Radioligand therapy (Pluvicto) for PSMA+ mCRPC", typicalCostRange: "$50,000 – $60,000/cycle" }
    ],
    stages: ["Stage I (T1/T2a, Gleason ≤6)", "Stage II", "Stage III (locally advanced)", "Stage IVA (pelvic nodes)", "Stage IVB (distant metastasis)"],
    survivalRates: "Localized: ~100% 5-year; Regional: ~100%; Distant: ~34%; Overall: ~98%",
    supportOrganizations: [
      { name: "Prostate Cancer Foundation", url: "https://www.pcf.org/", description: "US research and patient resources", geography: "US" },
      { name: "ZERO Prostate Cancer", url: "https://zerocancer.org/", description: "US advocacy", geography: "US" },
      { name: "Prostate Cancer UK", url: "https://prostatecanceruk.org/", description: "UK prostate cancer charity", geography: "UK" },
      { name: "Prostate Cancer Foundation of Australia", url: "https://www.pcfa.org.au/", description: "Australian support", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Prostate Cancer", url: "https://www.cancer.gov/types/prostate", type: "website" },
      { title: "ACS – Prostate Cancer", url: "https://www.cancer.org/cancer/types/prostate-cancer.html", type: "website" },
      { title: "NCCN Guidelines – Prostate (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/prostate-patient.pdf", type: "pdf" },
      { title: "NEJM – TheraP Trial (Lutetium-177 PSMA)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107250", type: "research" },
      { title: "PCF – Prostate Cancer Patient Resources", url: "https://www.pcf.org/c/patients-families/", type: "website" },
      { title: "AUA – Prostate Cancer Guideline Summary", url: "https://www.auanet.org/guidelines/guidelines/prostate-cancer-clinically-localized", type: "website" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~300,000 new cases/year", screeningPrograms: "PSA screening: shared decision-making ages 50-70 (USPSTF)", notableHospitals: ["Johns Hopkins", "Memorial Sloan Kettering", "UCSF", "MD Anderson"] },
      { region: "UK", prevalence: "~52,000 new cases/year — most common cancer in men", screeningPrograms: "No national screening; PSA informed choice programme", notableHospitals: ["Royal Marsden", "The Christie"] },
      { region: "India", prevalence: "~40,000 cases/year; increasing with Westernization", notableHospitals: ["Tata Memorial", "AIIMS", "Rajiv Gandhi Cancer Institute"] },
      { region: "Australia", prevalence: "~18,000 new cases/year", screeningPrograms: "PSA testing widely used; no formal national screening" }
    ],
    lastUpdated: "2026-03-30"
  }
];
