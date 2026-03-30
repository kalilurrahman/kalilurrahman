import { CancerEntry } from "./types";

export const cancersExpanded2: CancerEntry[] = [
  {
    id: "glioblastoma",
    name: "Glioblastoma (GBM)",
    alternateNames: ["Glioblastoma Multiforme", "Grade IV Astrocytoma"],
    category: "cns",
    description: "The most common and most aggressive malignant primary brain tumor in adults. It arises from astrocytes and grows rapidly, invading nearby brain tissue. It is notoriously difficult to treat due to the blood-brain barrier and tumor heterogeneity.",
    commonSymptoms: ["Severe headaches (worse in morning)", "Seizures", "Personality/memory changes", "Nausea/vomiting", "Focal neurological deficits (weakness on one side)", "Vision changes"],
    riskFactors: ["Age (peaks at 65-75)", "Prior radiation to the head", "Certain genetic syndromes (e.g., Li-Fraumeni)"],
    diagnostics: ["MRI of brain with contrast", "Surgical biopsy", "Molecular testing (MGMT promoter methylation, IDH mutation status)"],
    treatments: [
      { name: "Maximal Safe Resection", description: "Surgery to remove as much tumor as possible without causing severe neurological damage", typicalCostRange: "$50,000 – $150,000" },
      { name: "Stupp Regimen (Chemoradiation)", description: "Standard of care: Radiation therapy concurrent with daily temozolomide", typicalCostRange: "$40,000 – $100,000" },
      { name: "Tumor Treating Fields (Optune)", description: "Wearable device delivering alternating electric fields to disrupt cell division", typicalCostRange: "$20,000+/month" },
      { name: "Bevacizumab", description: "For recurrent GBM to reduce brain edema", typicalCostRange: "$100,000 – $150,000/year" }
    ],
    stages: ["Grade IV (World Health Organization classification)"],
    survivalRates: "Median survival with standard care: ~15 months; 5-year survival is <5%. IDH-mutant/MGMT-methylated have better prognosis.",
    supportOrganizations: [
      { name: "National Brain Tumor Society", url: "https://braintumor.org/", description: "Leading US organization for brain tumor advocacy and research", geography: "US" },
      { name: "The Brain Tumour Charity", url: "https://www.thebraintumourcharity.org/", description: "Largest dedicated brain tumor charity in the UK", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Adult Brain Tumor Treatment", url: "https://www.cancer.gov/types/brain/patient/adult-brain-treatment-pdq", type: "website" },
      { title: "Defeat GBM Research Collaborative", url: "https://www.defeatgbm.org/", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~13,000 new cases/year", notableHospitals: ["Duke Cancer Institute", "UCSF", "Mayo Clinic", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "medulloblastoma",
    name: "Medulloblastoma",
    alternateNames: ["PNET (historical)"],
    category: "cns",
    description: "The most common malignant brain tumor in children, originating in the cerebellum. It has a high propensity to spread through cerebrospinal fluid (CSF) to other areas of the brain and spinal cord.",
    commonSymptoms: ["Morning vomiting", "Headaches", "Clumsiness or poor coordination (ataxia)", "Lethargy", "Double vision"],
    riskFactors: ["Age (most common in children <10)", "Gorlin syndrome (WNT subgroup)", "Turcot syndrome"],
    diagnostics: ["MRI of brain and spine", "Lumbar puncture (for CSF cytology after surgery)", "Molecular subtyping (WNT, SHH, Group 3, Group 4)"],
    treatments: [
      { name: "Surgery", description: "Maximal safe resection of the posterior fossa tumor", typicalCostRange: "$50,000 – $150,000" },
      { name: "Craniospinal Irradiation", description: "Radiation to the entire brain and spine to treat/prevent CSF spread (often avoided in very young children to preserve neurodevelopment)", typicalCostRange: "$40,000 – $80,000" },
      { name: "Chemotherapy", description: "Intense multi-agent chemotherapy regimens", typicalCostRange: "$50,000 – $100,000" }
    ],
    stages: ["Standard risk", "High risk (disseminated disease, large residual tumor, or specific molecular subtyping like c-Myc amplification)"],
    survivalRates: "Overall 5-year survival is 70-80%; highly dependent on molecular subgroup (WNT subgroup >90%; Group 3 ~50%).",
    supportOrganizations: [
      { name: "Pediatric Brain Tumor Foundation", url: "https://curethekids.org/", description: "US advocacy for children with brain tumors", geography: "US" }
    ],
    externalResources: [
      { title: "St. Jude – Medulloblastoma", url: "https://www.stjude.org/disease/medulloblastoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~350-500 cases/year (primarily pediatric)", notableHospitals: ["St. Jude Children's Research Hospital", "Boston Children's", "CHOP"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "osteosarcoma",
    name: "Osteosarcoma",
    alternateNames: ["Osteogenic Sarcoma"],
    category: "sarcoma",
    description: "The most common primary bone cancer, frequently affecting teenagers and young adults during periods of rapid bone growth. Most commonly occurs around the knee (distal femur, proximal tibia).",
    commonSymptoms: ["Bone pain (often worse at night)", "Swelling or a palpable mass around a joint", "Limping", "Pathologic bone fracture"],
    riskFactors: ["Teenage growth spurts", "Prior radiation therapy", "Li-Fraumeni syndrome", "Retinoblastoma mutation (RB1 mutation)", "Paget's disease (in older adults)"],
    diagnostics: ["X-ray (sunburst appearance, Codman triangle)", "MRI of the affected bone", "Chest CT (lungs are primary site of metastasis)", "Bone biopsy"],
    treatments: [
      { name: "Neoadjuvant Chemotherapy", description: "MAP regimen (Methotrexate, Doxorubicin, Cisplatin) given before surgery to shrink the tumor and assess necrosis", typicalCostRange: "$50,000 – $120,000" },
      { name: "Limb-Sparing Surgery", description: "Resection of the bone with endoprosthetic reconstruction, avoiding amputation in ~80% of cases", typicalCostRange: "$60,000 – $150,000" },
      { name: "Amputation", description: "Required if neurovascular bundles are involved or limb salvage is not possible", typicalCostRange: "$30,000 – $80,000" },
      { name: "Metastasectomy", description: "Surgical removal of lung metastases if present", typicalCostRange: "$30,000 – $60,000" }
    ],
    stages: ["Localized (confined to the bone of origin)", "Metastatic (usually to the lungs or other bones)"],
    survivalRates: "Localized: 70-75% 5-year survival; Metastatic: 20-30% 5-year survival.",
    supportOrganizations: [
      { name: "MIB Agents", url: "https://www.mibagents.org/", description: "Osteosarcoma patient advocacy and research funding", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Osteosarcoma Treatment", url: "https://www.cancer.gov/types/bone/patient/osteosarcoma-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Dana-Farber"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "ewing-sarcoma",
    name: "Ewing Sarcoma",
    alternateNames: ["Ewing's Sarcoma", "Peripheral PNET"],
    category: "sarcoma",
    description: "A rare, aggressive bone and soft tissue tumor characterized by a specific chromosomal translocation [t(11;22)]. It primarily affects children and young adolescents, commonly occurring in the pelvis, femur, or ribs.",
    commonSymptoms: ["Pain at the tumor site", "Swelling and warmth", "Unexplained fever", "Fatigue", "Bone fracture without obvious cause"],
    riskFactors: ["Age 10-20", "White/Caucasian descent (very rare in African or Asian populations)"],
    diagnostics: ["X-ray (onion skin appearance of periosteum)", "MRI of the affected area", "Bone marrow aspiration/biopsy", "Molecular testing for EWS-FLI1 fusion", "PET/CT"],
    treatments: [
      { name: "VDC/IE Chemotherapy", description: "Alternating Vincristine, Doxorubicin, Cyclophosphamide AND Ifosfamide, Etoposide", typicalCostRange: "$80,000 – $150,000" },
      { name: "Local Control (Surgery)", description: "Complete resection of the bone or soft tissue tumor where feasible", typicalCostRange: "$40,000 – $100,000" },
      { name: "Radiation Therapy", description: "Used definitively if surgery is not feasible, or post-operatively for positive margins", typicalCostRange: "$30,000 – $60,000" }
    ],
    stages: ["Localized", "Metastatic (lungs, bone, bone marrow)"],
    survivalRates: "Localized: ~75% 5-year survival; Metastatic: ~30% 5-year survival.",
    supportOrganizations: [
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "General sarcoma support including Ewing's", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Ewing Sarcoma Treatment", url: "https://www.cancer.gov/types/bone/patient/ewing-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~250 cases/year", notableHospitals: ["St. Jude's", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "gastrointestinal-stromal-tumor",
    name: "Gastrointestinal Stromal Tumor (GIST)",
    alternateNames: ["GIST"],
    category: "sarcoma",
    description: "The most common mesenchymal tumor of the gastrointestinal tract, originating from the Interstitial cells of Cajal. Highly driven by KIT (CD117) or PDGFRA gene mutations. Targeted therapy revolutionized its treatment.",
    commonSymptoms: ["Abdominal pain", "GI bleeding (melena or hematemesis)", "Anemia", "Palpable abdominal mass", "Often asymptomatic (found incidentally)"],
    riskFactors: ["Age over 50", "Neurofibromatosis type 1", "Familial GIST syndrome (rare)"],
    diagnostics: ["Endoscopy/Colonoscopy with biopsy", "CT abdomen/pelvis", "Endoscopic ultrasound (EUS)", "IHC for CD117 (KIT) and DOG1", "Mutational analysis (KIT, PDGFRA)"],
    treatments: [
      { name: "Surgery", description: "Wedge resection of the stomach or intestine (lymph node dissection usually not required)", typicalCostRange: "$20,000 – $60,000" },
      { name: "Imatinib (Gleevec)", description: "First-line TKI for high-risk resected GIST (adjuvant) or metastatic GIST", typicalCostRange: "$30,000 – $100,000/year" },
      { name: "Sunitinib & Regorafenib", description: "2nd and 3rd line TKIs for imatinib-resistant GIST", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Avapritinib", description: "Specific targeted therapy for the PDGFRA D842V mutation (which is totally resistant to Imatinib)", typicalCostRange: "$300,000+/year" }
    ],
    stages: ["Risk stratification used instead of TNM: Based on size, mitotic rate, and location (gastric vs non-gastric)"],
    survivalRates: "Localized (resected): >90% 5-year survival; Metastatic: Imatinib has increased median survival from 18 months to >5 years.",
    supportOrganizations: [
      { name: "The Life Raft Group", url: "https://liferaftgroup.org/", description: "Global GIST patient advocacy and research organization", geography: "Global" }
    ],
    externalResources: [
      { title: "NCCN GIST Guidelines (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/gist-patient.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~4,000 - 6,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "Dana-Farber", "MD Anderson"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "mesothelioma",
    name: "Mesothelioma",
    alternateNames: ["Pleural Mesothelioma", "Peritoneal Mesothelioma"],
    category: "other",
    description: "An aggressive cancer of the mesothelium, the thin layer of tissue that covers the majority of internal organs. The most common site is the pleura (chest wall/lungs). It is notoriously and directly linked to asbestos exposure.",
    commonSymptoms: ["Shortness of breath (pleural effusion)", "Chest wall pain", "Unexplained weight loss", "Fatigue", "Abdominal swelling (if peritoneal)"],
    riskFactors: ["Asbestos exposure (account for ~80% of cases)", "Zeolite exposure", "Radiation to the chest (rare cause)"],
    diagnostics: ["Chest X-ray (unilateral pleural effusion)", "CT chest with contrast", "Thoracentesis (fluid cytology)", "Video-assisted thoracoscopic surgery (VATS) biopsy"],
    treatments: [
      { name: "Chemotherapy", description: "Pemetrexed + Cisplatin — historical standard of care", typicalCostRange: "$30,000 – $80,000" },
      { name: "Immunotherapy (Nivolumab + Ipilimumab)", description: "Newer first-line standard of care for unresectable disease based on CheckMate 743", typicalCostRange: "$150,000 – $250,000/year" },
      { name: "Surgery", description: "Extrapleural pneumonectomy (EPP) or pleurectomy/decortication (P/D) in highly selected early-stage patients", typicalCostRange: "$60,000 – $150,000" },
      { name: "HIPEC", description: "Heated intraperitoneal chemotherapy used with surgery for peritoneal mesothelioma", typicalCostRange: "$50,000 – $100,000" }
    ],
    stages: ["Stage I, II, III (resectable vs unresectable)", "Stage IV (metastatic)"],
    survivalRates: "Overall prognosis is poor. Median survival with treatment is ~14-18 months. 5-year survival is ~10%.",
    supportOrganizations: [
      { name: "Mesothelioma Applied Research Foundation", url: "https://www.curemeso.org/", description: "US advocacy, research funding, and patient support", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Mesothelioma", url: "https://www.cancer.gov/types/mesothelioma", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year", notableHospitals: ["Brigham and Women's Hospital", "MD Anderson", "Memorial Sloan Kettering"] },
      { region: "UK", prevalence: "High incidence historically due to heavy industrial asbestos use (~2,700 cases/year)", notableHospitals: ["Royal Papworth Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "hodgkins-lymphoma",
    name: "Hodgkin's Lymphoma",
    alternateNames: ["Hodgkin Disease"],
    category: "lymphoma",
    description: "A blood cancer starting in the lymphatic system, characterized by the presence of Reed-Sternberg cells. It is one of the most curable forms of cancer, especially when diagnosed early.",
    commonSymptoms: ["Painless swelling of lymph nodes (neck, armpit, groin)", "Fever", "Drenching night sweats", "Unexplained weight loss (B symptoms)", "Severe itching (pruritus)", "Pain in lymph nodes after drinking alcohol (rare but specific)"],
    riskFactors: ["Age (bimodal: 20-30s, and over 55)", "EBV infection (Epstein-Barr virus)", "Family history", "HIV/AIDS"],
    diagnostics: ["Excisional lymph node biopsy (showing Reed-Sternberg cells)", "PET/CT scan (crucial for staging)", "Bone marrow biopsy (in advanced stages)"],
    treatments: [
      { name: "ABVD Chemotherapy", description: "Standard regimen: Adriamycin, Bleomycin, Vinblastine, Dacarbazine", typicalCostRange: "$40,000 – $100,000" },
      { name: "Brentuximab Vedotin", description: "Targeted anti-CD30 antibody-drug conjugate; often combined with AVD (dropping Bleomycin)", typicalCostRange: "$100,000 – $200,000" },
      { name: "Radiation Therapy", description: "Involved-site radiation therapy (ISRT) for localized disease or bulky tumors", typicalCostRange: "$20,000 – $50,000" },
      { name: "Immunotherapy", description: "Nivolumab or Pembrolizumab (PD-1 inhibitors) for relapsed/refractory disease", typicalCostRange: "$150,000 – $200,000/year" },
      { name: "Autologous Stem Cell Transplant", description: "Standard for first relapse", typicalCostRange: "$150,000 – $300,000" }
    ],
    stages: ["Stage I, II, III, IV – combined with 'A' (no systemic symptoms) or 'B' (fever, sweats, weight loss)"],
    survivalRates: "Highly curable. Stage I/II 5-year survival is >90%; Advanced stages ~80%.",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "Leading blood cancer support organization", geography: "US" },
      { name: "Lymphoma Action", url: "https://lymphoma-action.org.uk/", description: "UK-based lymphoma support", geography: "UK" }
    ],
    externalResources: [
      { title: "ACS – Hodgkin Lymphoma", url: "https://www.cancer.org/cancer/types/hodgkin-lymphoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~8,500 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "dlbcl",
    name: "Diffuse Large B-Cell Lymphoma (DLBCL)",
    alternateNames: ["DLBCL", "Non-Hodgkin Lymphoma - Diffuse"],
    category: "lymphoma",
    description: "The most common subtype of non-Hodgkin lymphoma. It is a fast-growing, aggressive cancer of B-cells. Despite its aggressive nature, it is potentially curable with modern chemoimmunotherapy regimens.",
    commonSymptoms: ["Rapidly enlarging lymph node mass (neck, armpit, groin)", "B symptoms (fever, night sweats, weight loss)", "Fatigue", "Abdominal pain/swelling"],
    riskFactors: ["Age (median 64)", "Autoimmune disease", "Immunosuppression (HIV, transplant)"],
    diagnostics: ["Excisional lymph node biopsy", "PET/CT for staging", "Bone marrow biopsy", "FISH testing (for MYC, BCL2, BCL6 – identifying 'Double Hit' Lymphoma)"],
    treatments: [
      { name: "R-CHOP", description: "Rituximab, Cyclophosphamide, Doxorubicin, Vincristine, Prednisone – the global standard of care for 20 years", typicalCostRange: "$60,000 – $150,000" },
      { name: "Pola-R-CHP", description: "Adding Polatuzumab vedotin (dropping vincristine); new standard for selected newly diagnosed patients (POLARIX trial)", typicalCostRange: "$150,000 – $250,000" },
      { name: "CAR T-Cell Therapy", description: "Axicabtagene ciloleucel or Tisagenlecleucel for relapsed/refractory disease", typicalCostRange: "$400,000 – $800,000" },
      { name: "Bispecific Antibodies", description: "Epcoritamab or Glofitamab for highly relapsed/refractory patients", typicalCostRange: "$200,000+/year" }
    ],
    stages: ["Ann Arbor Staging I-IV", "Revised International Prognostic Index (R-IPI) used to guide prognosis"],
    survivalRates: "Overall 5-year survival is ~65%; varies significantly by IPI score and subtype (GCB vs ABC). Double Hit lymphomas have poorer prognosis.",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "Leading blood cancer support organization", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Adult NHL Treatment", url: "https://www.cancer.gov/types/lymphoma/patient/adult-nhl-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~30,000 new cases/year", notableHospitals: ["Stanford Cancer Center", "MD Anderson", "City of Hope", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "follicular-lymphoma",
    name: "Follicular Lymphoma",
    alternateNames: ["FL", "Indolent Non-Hodgkin Lymphoma"],
    category: "lymphoma",
    description: "The most common indolent (slow-growing) non-Hodgkin lymphoma. Originates from B-cells and is characterized by the t(14;18) translocation leading to BCL2 overexpression. Often treated as a chronic, manageable condition rather than a curable one.",
    commonSymptoms: ["Painless swelling of lymph nodes (waxing and waning)", "Often asymptomatic", "Fatigue"],
    riskFactors: ["Age (over 60)"],
    diagnostics: ["Lymph node biopsy", "PET/CT or CT", "Bone marrow biopsy", "FISH for t(14;18)"],
    treatments: [
      { name: "Watch and Wait", description: "Observation for asymptomatic, low-tumor burden disease", typicalCostRange: "Monitoring costs" },
      { name: "Rituximab Monotherapy", description: "Anti-CD20 antibody for symptomatic but not highly aggressive disease", typicalCostRange: "$30,000 – $60,000" },
      { name: "Bendamustine + Rituximab (BR)", description: "Standard chemoimmunotherapy for high-tumor burden", typicalCostRange: "$60,000 – $120,000" },
      { name: "Obinutuzumab", description: "Next-generation anti-CD20 antibody", typicalCostRange: "$80,000 – $150,000" },
      { name: "CAR-T / Bispecifics", description: "For extensively relapsed disease", typicalCostRange: "$300,000+" }
    ],
    stages: ["Grade 1-2, Grade 3A (treated as indolent), Grade 3B (treated aggressively like DLBCL)"],
    survivalRates: "Median survival is >15 years. It is considered incurable with standard therapy but highly manageable.",
    supportOrganizations: [
      { name: "Follicular Lymphoma Foundation", url: "https://www.theflf.org/", description: "Dedicated FL research and support", geography: "Global" }
    ],
    externalResources: [
      { title: "FL Patient Guide (LLS)", url: "https://www.lls.org/", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~15,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "medullary-thyroid-cancer",
    name: "Medullary Thyroid Cancer (MTC)",
    alternateNames: ["Medullary Carcinoma of the Thyroid"],
    category: "carcinoma",
    description: "A rare type of thyroid cancer that originates in the parafollicular C cells of the thyroid gland, which produce calcitonin. Roughly 25% of cases are hereditary and associated with Multiple Endocrine Neoplasia type 2 (MEN2).",
    commonSymptoms: ["Painless lump in the front of the neck", "Hoarseness", "Difficulty swallowing", "Diarrhea (due to high calcitonin)", "Flushing"],
    riskFactors: ["RET gene mutation (familial cases)", "MEN2A or MEN2B syndrome"],
    diagnostics: ["Ultrasound of the neck", "Fine Needle Aspiration (FNA) biopsy", "Blood tests (Calcitonin, CEA levels)", "Genetic testing (RET mutation)"],
    treatments: [
      { name: "Total Thyroidectomy", description: "Primary and most crucial treatment, accompanied by central neck dissection", typicalCostRange: "$15,000 – $40,000" },
      { name: "Selpercatinib / Pralsetinib", description: "Highly effective RET inhibitors for RET-mutated metastatic MTC", typicalCostRange: "$150,000 – $250,000/year" },
      { name: "Vandetanib / Cabozantinib", description: "Multikinase inhibitors for advanced, progressive disease", typicalCostRange: "$150,000+/year" },
      { name: "Radiation Therapy", description: "For localized control of unresectable neck disease", typicalCostRange: "$20,000 – $50,000" }
    ],
    stages: ["Categorized differently from papillary/follicular; radioactive iodine is NOT effective because C-cells do not absorb iodine."],
    survivalRates: "10-year survival is ~75% overall; >95% if confined to the thyroid, but poorer if distant metastases are present.",
    supportOrganizations: [
      { name: "ThyCa: Thyroid Cancer Survivors' Association", url: "https://www.thyca.org/", description: "Excellent specific MTC sub-group support", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Thyroid Cancer", url: "https://www.cancer.gov/types/thyroid", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "Accounts for 1-2% of all thyroid cancers (~1,000 cases/year)", notableHospitals: ["MD Anderson", "Mayo Clinic", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "anaplastic-thyroid-cancer",
    name: "Anaplastic Thyroid Cancer",
    alternateNames: ["ATC", "Undifferentiated Thyroid Cancer"],
    category: "carcinoma",
    description: "The rarest and most aggressive, fatal form of thyroid cancer. It grows extraordinarily fast and often spreads very quickly to other parts of the body, particularly the neck, lungs, and bones.",
    commonSymptoms: ["Rapidly growing neck mass", "Severe hoarseness", "Difficulty breathing and swallowing", "Neck or jaw pain"],
    riskFactors: ["Age over 60", "Long-standing goiter", "Prior history of differentiated thyroid cancer (papillary/follicular) modifying into ATC"],
    diagnostics: ["FNA or Core Biopsy", "CT/MRI of the neck and chest", "Molecular testing (BRAF V600E mutation found in 20-50%)"],
    treatments: [
      { name: "Dabrafenib + Trametinib", description: "Targeted therapy combination for BRAF V600E mutated ATC. Highly effective at shrinking tumors rapidly.", typicalCostRange: "$200,000+/year" },
      { name: "Surgery", description: "Tracheostomy for airway protection or palliative resection; curative surgery is rarely possible", typicalCostRange: "$20,000 – $50,000" },
      { name: "Radiation + Chemotherapy", description: "Taxane-based chemotherapy with IMRT for local control", typicalCostRange: "$40,000 – $80,000" }
    ],
    stages: ["Always considered Stage IV (TNM staging considers it undifferentiated and metastatic by default)"],
    survivalRates: "Historically, median survival is less than 6 months. Patients with BRAF mutations treated with targeted therapies have significantly improved outcomes (>1-2 years).",
    supportOrganizations: [
      { name: "ThyCa: Thyroid Cancer Survivors' Association", url: "https://www.thyca.org/atc/", description: "Anaplastic thyroid cancer specific resources", geography: "US" }
    ],
    externalResources: [
      { title: "NCCN Thyroid Carcinoma Guidelines", url: "https://www.nccn.org/patients/guidelines/content/PDF/thyroid-patient.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "Extremely rare (~500-1,000 cases/year globally)", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "retinoblastoma",
    name: "Retinoblastoma",
    alternateNames: ["RB", "Cancer of the Retina"],
    category: "other",
    description: "An eye cancer that begins in the retina, primarily affecting children under the age of 5. It is strongly linked to a mutation in the RB1 tumor-suppressor gene. It can be bilateral (affecting both eyes) or unilateral.",
    commonSymptoms: ["Leukocoria (white reflection in the pupil/cat's eye reflex)", "Strabismus (crossed eyes)", "Eye redness and swelling", "Vision loss"],
    riskFactors: ["Family history (inheriting the RB1 mutation accounts for ~40% of cases)"],
    diagnostics: ["Ophthalmoscopy (funduscopy) under general anesthesia", "Ultrasound of the eye", "MRI of the orbits and brain (to check for trilateral RB - pineal gland involvement)", "Genetic testing for RB1"],
    treatments: [
      { name: "Intra-arterial Chemotherapy", description: "Melphalan injected directly into the ophthalmic artery to save the eye", typicalCostRange: "$50,000 – $100,000" },
      { name: "Enucleation", description: "Surgical removal of the eye if vision cannot be salvaged or tumor is massive", typicalCostRange: "$15,000 – $30,000" },
      { name: "Focal Therapy", description: "Laser photocoagulation or cryotherapy for small tumors", typicalCostRange: "$10,000 – $20,000" },
      { name: "Systemic Chemotherapy", description: "For extraocular or metastatic disease", typicalCostRange: "$30,000 – $80,000" }
    ],
    stages: ["International Classification of Retinoblastoma (Groups A-E based on the chance of saving the eye)"],
    survivalRates: ">95% 5-year survival rate in developed countries; preservation of vision varies significantly by Group.",
    supportOrganizations: [
      { name: "Retinoblastoma International", url: "https://www.retinoblastoma.com/", description: "Global advocacy and research for childhood eye cancer", geography: "Global" }
    ],
    externalResources: [
      { title: "St Jude – Retinoblastoma", url: "https://www.stjude.org/disease/retinoblastoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~250-300 cases/year", notableHospitals: ["Memorial Sloan Kettering (Ophthalmic Oncology Service)", "Wills Eye Hospital", "St. Jude Children's"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "uveal-melanoma",
    name: "Uveal Melanoma",
    alternateNames: ["Ocular Melanoma", "Intraocular Melanoma"],
    category: "melanoma",
    description: "The most common primary eye cancer in adults. It arises from melanocytes in the uveal tract (iris, ciliary body, choroid). It is genetically distinct from cutaneous melanoma (GNAQ/GNA11 mutations rather than BRAF). Almost 50% of patients will eventually develop fatal liver metastases.",
    commonSymptoms: ["Blurred vision", "Floaters", "Dark spot on the iris", "Changes in pupil shape", "Often asymptomatic (found on routine eye exam)"],
    riskFactors: ["Light eye color (blue, green)", "Fair skin", "Older age", "Dysplastic nevus syndrome (BAP1 mutation)"],
    diagnostics: ["Ophthalmoscopy", "Ocular ultrasound", "Fine needle aspiration biopsy (for gene expression profiling - Castle Biosciences test)", "MRI liver (screening for metastases)"],
    treatments: [
      { name: "Plaque Radiotherapy (Brachytherapy)", description: "Placement of a radioactive seed plaque (iodine-125 or ruthenium-106) temporarily on the eye to shrink the tumor", typicalCostRange: "$40,000 – $80,000" },
      { name: "Enucleation", description: "Surgical removal of the eye for very large or painful tumors", typicalCostRange: "$20,000 – $40,000" },
      { name: "Tebentafusp (Kimmtrak)", description: "First-in-class bispecific protein for HLA-A*02:01-positive metastatic uveal melanoma", typicalCostRange: "$300,000+/year" },
      { name: "Liver-Directed Therapy", description: "Radioembolization (SIRT) or chemoembolization for liver metastases", typicalCostRange: "$50,000 – $100,000" }
    ],
    stages: ["Classified primarily by Gene Expression Profiling (Class 1A: very low risk, Class 1B: intermediate risk, Class 2: very high risk of metastasis)"],
    survivalRates: "Localized: ~80% 5-year survival; Metastatic: historically very poor (~1 year median survival), modestly improving with Tebentafusp.",
    supportOrganizations: [
      { name: "Ocular Melanoma Foundation", url: "https://www.ocularmelanoma.org/", description: "Cure OM foundation", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Intraocular Melanoma", url: "https://www.cancer.gov/types/eye/patient/intraocular-melanoma-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2,500 new cases/year", notableHospitals: ["Wills Eye Hospital", "Thomas Jefferson University", "MD Anderson"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "chondrosarcoma",
    name: "Chondrosarcoma",
    alternateNames: ["Cartilage Sarcoma"],
    category: "sarcoma",
    description: "A malignancy that develops in cartilage cells. It typically affects adults over 40 and can occur in the pelvis, hip, and shoulder areas. Unlike osteosarcoma, it responds poorly to chemotherapy/radiotherapy; surgery is the absolute mainstay.",
    commonSymptoms: ["Deep, dull, aching bone pain", "Lump or mass over a bone", "Sciatica-like pain if located in the pelvis", "Pathologic fracture"],
    riskFactors: ["Ollier disease", "Maffucci syndrome", "Multiple hereditary exostoses (osteochondromas)"],
    diagnostics: ["X-ray (shows calcifications/popcorn-like appearance)", "MRI of the affected bone", "CT guided needle biopsy"],
    treatments: [
      { name: "Wide Surgical Excision", description: "Complete resection with negative margins is crucial for survival", typicalCostRange: "$40,000 – $100,000" },
      { name: "Curettage for Low-Grade", description: "Scraping out the tumor and applying cryosurgery or cement for Grade 1 tumors", typicalCostRange: "$20,000 – $40,000" },
      { name: "Radiation/Chemotherapy", description: "Generally ineffective; reserved only for rare dedifferentiated subtypes or palliation", typicalCostRange: "$30,000 – $60,000" },
      { name: "IDH Inhibitors", description: "Ivosidenib (experimental/off-label) for IDH1 mutated cases", typicalCostRange: "$150,000+/year" }
    ],
    stages: ["Graded rather than staged: Grade 1 (indolent), Grade 2 (intermediate), Grade 3 (aggressive), Dedifferentiated (highly aggressive)"],
    survivalRates: "Grade 1: >90% 5-year survival; Dedifferentiated: <20% 5-year survival.",
    supportOrganizations: [
      { name: "Sarcoma Alliance", url: "https://sarcomaalliance.org/", description: "General sarcoma support", geography: "US" }
    ],
    externalResources: [
      { title: "ACS – Bone Sarcoma Types", url: "https://www.cancer.org/cancer/bone-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2,500 new cases/year (second most common primary bone cancer)", notableHospitals: ["Memorial Sloan Kettering", "Dana-Farber"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "liposarcoma",
    name: "Liposarcoma",
    alternateNames: ["Fat Cell Sarcoma"],
    category: "sarcoma",
    description: "A type of soft tissue sarcoma that begins in fat cells, most commonly growing in the deep soft tissues of the limbs (thigh) or the retroperitoneum (deep abdomen). It can grow extremely large before causing symptoms.",
    commonSymptoms: ["Painless, slowly enlarging lump", "Abdominal swelling or pain (retroperitoneal)", "Feeling full early", "Constipation or bloody stool (if pressing on intestines)"],
    riskFactors: ["Age 50-70", "Prior radiation", "Genetic mutations (MDM2/CDK4 amplification in well-differentiated type)", "History of certain chemical exposures (rare)"],
    diagnostics: ["MRI of extremities", "CT abdomen/pelvis for retroperitoneal tumors", "Core needle biopsy", "MDM2 amplification testing via FISH"],
    treatments: [
      { name: "Resection with Margins", description: "Surgical removal of the tumor; retroperitoneal tumors often require removing adjacent organs (kidney, bowel) to achieve clear margins", typicalCostRange: "$50,000 – $150,000" },
      { name: "Radiation Therapy", description: "Primarily used for extremity liposarcomas before surgery to shrink the tumor and reduce local recurrence", typicalCostRange: "$30,000 – $70,000" },
      { name: "Chemotherapy", description: "Doxorubicin/Ifosfamide — mostly effective for the 'myxoid' or 'pleomorphic' subtypes, poorly effective for 'well-differentiated/dedifferentiated'", typicalCostRange: "$40,000 – $100,000" },
      { name: "Trabectedin / Eribulin", description: "Used specifically for advanced myxoid or pleomorphic liposarcoma", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Classified by subtypes: Well-differentiated, Dedifferentiated, Myxoid, Pleomorphic"],
    survivalRates: "Well-differentiated extremity: ~90% 5-year survival; Retroperitoneal Dedifferentiated: ~40-60%. Myxoid responds best to systemic therapy.",
    supportOrganizations: [
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "General sarcoma advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Soft Tissue Sarcoma", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/patient/adult-soft-tissue-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2,000-3,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "angiosarcoma",
    name: "Angiosarcoma",
    alternateNames: ["Hemangiosarcoma", "Vascular Sarcoma"],
    category: "sarcoma",
    description: "An extraordinarily rare, highly aggressive soft tissue sarcoma that develops in the inner lining of blood vessels or lymphatic vessels. It most commonly affects the skin (scalp) or the breast (often post-radiation).",
    commonSymptoms: ["Bruise-like skin lesion that grows (scalp/face)", "Painless lump in the breast (often years after radiation therapy)", "Swelling", "Bleeding", "Liver failure (if hepatic angiosarcoma)"],
    riskFactors: ["Prior radiation therapy (e.g. for breast cancer)", "Chronic lymphedema (Stewart-Treves syndrome)", "Exposure to vinyl chloride, arsenic, or Thorotrast (liver angiosarcoma)", "Age over 70"],
    diagnostics: ["Core needle biopsy or incisional biopsy", "MRI/CT for staging", "PET/CT"],
    treatments: [
      { name: "Wide Local Excision", description: "Surgery with extremely wide margins; often difficult on the scalp", typicalCostRange: "$30,000 – $80,000" },
      { name: "Taxane Chemotherapy", description: "Paclitaxel is highly active against angiosarcoma (unlike other soft tissue sarcomas)", typicalCostRange: "$20,000 – $60,000" },
      { name: "Radiation Therapy", description: "Extensive field radiation after surgery", typicalCostRange: "$30,000 – $60,000" },
      { name: "Immunotherapy (Pembrolizumab)", description: "Proving surprisingly effective in cutaneous angiosarcoma due to high mutational burden", typicalCostRange: "$150,000 – $200,000/year" }
    ],
    stages: ["Usually simply Localized vs Metastatic; inherently highly aggressive grade 3"],
    survivalRates: "Poor prognosis; 5-year survival is ~30-40%. High rate of local recurrence and early metastasis to lungs.",
    supportOrganizations: [
      { name: "Angiosarcoma Awareness", url: "https://www.cureasc.org/", description: "Patient advocacy group financing angiosarcoma research", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Soft Tissue Sarcoma Treatment", url: "https://www.cancer.gov/types/soft-tissue-sarcoma", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "Less than 500 cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "kaposi-sarcoma",
    name: "Kaposi Sarcoma",
    alternateNames: ["KS", "HHV-8 Sarcoma"],
    category: "sarcoma",
    description: "A tumor caused by infection with Human Herpesvirus 8 (HHV-8). It causes lesions to grow in the skin, lymph nodes, internal organs, and mucous membranes. The most common form in the West is epidemic KS, linked directly to AIDS.",
    commonSymptoms: ["Purple, red, or brown skin blotches (often on legs or face)", "Lesions in the mouth", "Swelling (lymphedema)", "Shortness of breath (if pulmonary)", "GI bleeding"],
    riskFactors: ["HIV/AIDS infection", "Organ transplant immunosuppression", "Older men of Mediterranean or Jewish descent (Classic KS)", "Endemic presence in Sub-Saharan Africa"],
    diagnostics: ["Skin biopsy (spindle cells, HHV-8 staining positive)", "Endoscopy/Bronchoscopy (if internal involvement is suspected)", "HIV testing"],
    treatments: [
      { name: "HAART (Antiretroviral Therapy)", description: "The primary and most effective treatment for Epidemic KS. Restoring immune function often resolves the lesions entirely.", typicalCostRange: "$20,000 – $40,000/year" },
      { name: "Liposomal Doxorubicin / Paclitaxel", description: "Systemic chemotherapy for widespread, organ-involving, or refractory KS", typicalCostRange: "$30,000 – $80,000" },
      { name: "Local Therapy", description: "Cryotherapy, excision, or low-dose radiation for single cosmetic lesions", typicalCostRange: "$5,000 – $15,000" },
      { name: "Immunomodulators", description: "Pomalidomide or Interferon alpha", typicalCostRange: "$100,000/year" }
    ],
    stages: ["Not typically staged via TNM; staged based on tumor extent, immune status (CD4 count), and systemic illness (ACTG staging for AIDS-KS)"],
    survivalRates: "Highly dependent on immune status. With modern HIV therapies (HAART), life expectancy approaches normal for epidemic KS.",
    supportOrganizations: [
      { name: "The AIDS Institute", url: "https://theaidsinstitute.org/", description: "General AIDS support including AIDS-defining cancers", geography: "US" }
    ],
    externalResources: [
      { title: "ACS – Kaposi Sarcoma", url: "https://www.cancer.org/cancer/types/kaposi-sarcoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "Declined drastically since HAART introduction; still thousands of cases/year", notableHospitals: ["UCSF", "NIH Clinical Center"] },
      { region: "Sub-Saharan Africa", prevalence: "Highly endemic, often a leading cancer in men", notableHospitals: ["Uganda Cancer Institute"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "gestational-trophoblastic-disease",
    name: "Gestational Trophoblastic Disease",
    alternateNames: ["GTD", "Choriocarcinoma", "Molar Pregnancy"],
    category: "carcinoma",
    description: "A group of rare tumors that involve abnormal growth of cells inside a woman's uterus. These tumors originate from the cells that would normally develop into the placenta during pregnancy (trophoblasts). Choriocarcinoma is the highly malignant form.",
    commonSymptoms: ["Vaginal bleeding during or after pregnancy", "Uterus larger than expected for gestational age", "Excessive nausea/vomiting (hyperemesis)", "Abnormally high hCG levels", "Ovarian cysts"],
    riskFactors: ["Prior molar pregnancy", "Maternal age over 35 or under 20", "Blood type (O or A)"],
    diagnostics: ["Quantitative blood beta-hCG (extraordinarily high levels)", "Pelvic ultrasound (snowstorm appearance for moles)", "Chest X-ray / CT (choriocarcinoma metastasizes rapidly to lungs)"],
    treatments: [
      { name: "Dilation and Curettage (D&C)", description: "Surgical evacuation of the uterus for molar pregnancies", typicalCostRange: "$5,000 – $15,000" },
      { name: "Methotrexate / Actinomycin D", description: "Single-agent chemotherapy for low-risk malignant GTD; highly curative", typicalCostRange: "$10,000 – $30,000" },
      { name: "EMA-CO Chemotherapy", description: "Multi-agent regimen (Etoposide, Methotrexate, Actinomycin D, Cyclophosphamide, Oncovin/Vincristine) for high-risk metastatic choriocarcinoma. Incredible cure rates.", typicalCostRange: "$60,000 – $100,000" },
      { name: "Hysterectomy", description: "If fertility preservation is not desired and disease is localized", typicalCostRange: "$15,000 – $30,000" }
    ],
    stages: ["FIGO Staging I-IV combined with a WHO risk scoring system (>7 is high risk)"],
    survivalRates: "One of the absolute most curable solid tumors. Survival rates approach ~99% for low-risk and >90% for high-risk metastatic disease.",
    supportOrganizations: [
      { name: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org/", description: "General gynecologic cancer support", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Gestational Trophoblastic Disease", url: "https://www.cancer.gov/types/gestational-trophoblastic/patient/gtd-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1 in 1,000 pregnancies (Molar); Choriocarcinoma is 1 in 40,000", notableHospitals: ["New England Trophoblastic Disease Center at Brigham and Women's", "Northwestern Medicine"] },
      { region: "Asia", prevalence: "Historically higher rates of molar pregnancies (up to 1 in 100 in parts of Southeast Asia)", notableHospitals: ["National University Hospital Singapore"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "vulvar-cancer",
    name: "Vulvar Cancer",
    alternateNames: ["Cancer of the Vulva", "Vulvar Squamous Cell Carcinoma"],
    category: "carcinoma",
    description: "A rare gynecologic cancer that occurs on the outer surface genitals of females. Typically a slow-growing squamous cell carcinoma. It is linked strongly to HPV infection in younger women, and lichen sclerosus in older women.",
    commonSymptoms: ["A lump or ulcer on the vulva", "Persistent itching (pruritus)", "Pain or burning", "Bleeding or discharge not related to menstruation", "Skin color changes (lighter, darker, or red)"],
    riskFactors: ["HPV infection (types 16, 18)", "History of cervical precancer (CIN)", "Lichen sclerosus", "Smoking", "Age (peaks in 70s)"],
    diagnostics: ["Vulvar biopsy (punch or incisional)", "Colposcopy of vulva/cervix", "MRI for pelvic staging", "Sentinel lymph node (inguinal) biopsy"],
    treatments: [
      { name: "Radical Local Excision", description: "Primary treatment: wide resection preserving as much of the clitoris/anatomy as safely possible", typicalCostRange: "$20,000 – $60,000" },
      { name: "Inguinal Lymphadenectomy", description: "Sentinel node biopsy or complete groin dissection to prevent and stage lymphatic spread", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemoradiation", description: "Cisplatin + Radiation used pre-operatively for large/bulky tumors to shrink them, or definitively", typicalCostRange: "$40,000 – $90,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent HPV-positive or PD-L1 positive metastatic cases", typicalCostRange: "$150,000 – $200,000/year" }
    ],
    stages: ["FIGO Staging: Stage I (vulva only), Stage II (extension to lower perineal structures), Stage III (inguinal nodes positive), Stage IV (distant/pelvic nodes)"],
    survivalRates: "Stage I: ~85% 5-year survival; Stage III (node positive): ~40-50% 5-year survival.",
    supportOrganizations: [
      { name: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org/", description: "General gynecologic cancer advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "ACS – Vulvar Cancer", url: "https://www.cancer.org/cancer/types/vulvar-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~6,500 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "waldenstrom-macroglobulinemia",
    name: "Waldenström Macroglobulinemia",
    alternateNames: ["Lymphoplasmacytic Lymphoma", "WM"],
    category: "lymphoma",
    description: "A rare, indolent B-cell lymphoma characterized by the overproduction of large IgM antibodies (macroglobulins). This excess protein can thicken the blood (hyperviscosity syndrome). >90% of patients carry the MYD88 L265P mutation.",
    commonSymptoms: ["Fatigue (due to anemia)", "Bleeding (nose/gums)", "Vision changes/headaches (hyperviscosity syndrome)", "Numbness in hands/feet (neuropathy)", "Enlarged lymph nodes or spleen", "Night sweats"],
    riskFactors: ["Age over 65", "White/Caucasian descent", "MGUS (Monoclonal Gammopathy of Undetermined Significance) history"],
    diagnostics: ["Blood tests (high IgM levels, serum protein electrophoresis)", "Bone marrow biopsy (lymphoplasmacytic cells)", "Molecular testing (MYD88 L265P and CXCR4 mutations)", "Eye exam (for retinal vein engorgement from hyperviscosity)"],
    treatments: [
      { name: "Plasmapheresis", description: "Plasma exchange to mechanically remove IgM from blood in urgent hyperviscosity cases", typicalCostRange: "$10,000 – $30,000" },
      { name: "BTK Inhibitors", description: "Ibrutinib, Zanubrutinib — highly targeted oral drugs that suppress the MYD88 pathway", typicalCostRange: "$150,000 – $180,000/year" },
      { name: "Chemoimmunotherapy (BDR)", description: "Bortezomib, Dexamethasone, Rituximab (or Bendamustine-Rituximab) for rapid disease control", typicalCostRange: "$80,000 – $150,000" },
      { name: "Watch and Wait", description: "Asymptomatic patients are actively monitored without treatment", typicalCostRange: "Monitoring only" }
    ],
    stages: ["Staged primarily using the IPSSWM (International Prognostic Scoring System for WM) rather than standard lymphoma stages."],
    survivalRates: "A manageable chronic disease. Median survival is extensive, often 10-15+ years depending on age and risk status.",
    supportOrganizations: [
      { name: "International Waldenstrom's Macroglobulinemia Foundation", url: "https://iwmf.com/", description: "Excellent dedicated advocacy and research group", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Waldenström Treatment", url: "https://www.cancer.gov/types/lymphoma/patient/waldenstrom-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,500 new cases/year", notableHospitals: ["Dana-Farber (Bing Center for WM)", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "hairy-cell-leukemia",
    name: "Hairy Cell Leukemia",
    alternateNames: ["HCL", "Leukemic Reticuloendotheliosis"],
    category: "leukemia",
    description: "A very rare, slow-growing cancer of B-lymphocytes. Under a microscope, these cells look 'hairy' due to fine projections on their surface. Nearly 100% of classic HCL cases are driven by the BRAF V600E mutation. Extraordinarily treatable.",
    commonSymptoms: ["Fatigue (due to anemia)", "Infections (neutropenia)", "Easy bruising/bleeding (thrombocytopenia)", "Enlarged spleen causing left-sided abdominal pain/fullness", "Weight loss"],
    riskFactors: ["Age over 50", "Male sex (4x more common than in females)", "Exposure to certain chemicals/pesticides (debated)"],
    diagnostics: ["Flow cytometry of blood (CD103+, CD11c+, CD25+, CD123+)", "Bone marrow biopsy ('fried egg' appearance, dry tap)", "BRAF V600E mutation testing"],
    treatments: [
      { name: "Cladribine or Pentostatin", description: "Purine analogs: A single 5-7 day course of Cladribine can induce remission lasting over 10 years", typicalCostRange: "$20,000 – $50,000" },
      { name: "BRAF Inhibitors", description: "Vemurafenib +/- Rituximab for relapsed/refractory HCL", typicalCostRange: "$100,000 – $180,000/year" },
      { name: "Moxetumomab Pasudotox", description: "Anti-CD22 immunotoxin for highly relapsed HCL", typicalCostRange: "$200,000+" }
    ],
    stages: ["Not formally staged; treatment initiation is based on blood count depletion and spleen size."],
    survivalRates: "Extremely favorable. Near-normal life expectancy after correct initial chemotherapy (Cladribine). Overall 10-year survival is >90%.",
    supportOrganizations: [
      { name: "Hairy Cell Leukemia Foundation", url: "https://www.hairycellleukemia.org/", description: "Specific global HCL foundation", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Hairy Cell Leukemia Treatment", url: "https://www.cancer.gov/types/leukemia/patient/hairy-cell-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,000 new cases/year", notableHospitals: ["Ohio State University (Wexner)", "Memorial Sloan Kettering", "NCI Clinical Center"] }
    ],
    lastUpdated: "2026-03-30"
  }
];
