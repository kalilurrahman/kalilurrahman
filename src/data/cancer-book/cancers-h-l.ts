import { CancerEntry } from "./types";

export const cancersHL: CancerEntry[] = [
  {
    id: "head-neck-cancer",
    name: "Head and Neck Cancer",
    alternateNames: ["Oral Cancer", "Throat Cancer", "Laryngeal Cancer", "Pharyngeal Cancer", "Oropharyngeal Cancer"],
    category: "carcinoma",
    description: "Cancers arising in the oral cavity, pharynx, larynx, sinuses, and salivary glands. HPV-positive oropharyngeal cancer is rising in younger adults and has better prognosis. Tobacco and alcohol remain primary risk factors.",
    commonSymptoms: ["Non-healing mouth sore", "Persistent sore throat", "Difficulty swallowing", "Hoarseness", "Ear pain", "Lump in neck", "White/red patches in mouth"],
    riskFactors: ["Tobacco use", "Heavy alcohol use", "HPV infection (type 16)", "Betel nut chewing", "Sun exposure (lip cancer)", "Poor oral hygiene"],
    diagnostics: ["Physical exam with endoscopy", "Biopsy", "CT/MRI of head and neck", "PET/CT", "HPV/p16 testing"],
    treatments: [
      { name: "Surgery", description: "Tumor resection with reconstruction; robotic TORS for oropharyngeal", typicalCostRange: "$30,000 – $100,000" },
      { name: "Radiation", description: "Intensity-modulated radiation (IMRT); definitive or adjuvant", typicalCostRange: "$30,000 – $80,000" },
      { name: "Chemoradiation", description: "Cisplatin-based concurrent chemoradiation", typicalCostRange: "$40,000 – $100,000" },
      { name: "Immunotherapy", description: "Pembrolizumab/nivolumab for recurrent/metastatic (KEYNOTE-048)", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Targeted Therapy", description: "Cetuximab for EGFR-positive tumors", typicalCostRange: "$40,000 – $100,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IVA", "Stage IVB", "Stage IVC"],
    survivalRates: "HPV+ oropharyngeal: ~80% 5-year; HPV-negative: ~45-55%; Larynx early: ~78%",
    supportOrganizations: [
      { name: "Head and Neck Cancer Alliance", url: "https://www.headandneck.org/", description: "US advocacy and support", geography: "US" },
      { name: "Mouth Cancer Foundation", url: "https://mouthcancerfoundation.org/", description: "UK oral cancer support", geography: "UK" },
      { name: "Oral Cancer Foundation", url: "https://oralcancerfoundation.org/", description: "US education and screening advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Head and Neck Cancers", url: "https://www.cancer.gov/types/head-and-neck", type: "website" },
      { title: "ACS – Oral Cavity and Oropharyngeal Cancer", url: "https://www.cancer.org/cancer/types/oral-cavity-and-oropharyngeal-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~66,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "University of Pittsburgh"] },
      { region: "India", prevalence: "~200,000 cases/year — #1 cancer in Indian men due to tobacco/betel nut", notableHospitals: ["Tata Memorial Hospital", "AIIMS", "Regional Cancer Centres"] },
      { region: "UK", prevalence: "~12,000 new cases/year", notableHospitals: ["The Christie", "Queen Elizabeth Hospital Birmingham"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "hepatocellular-carcinoma",
    name: "Hepatocellular Carcinoma (HCC)",
    alternateNames: ["Liver Cancer", "Primary Liver Cancer", "Hepatoma"],
    category: "carcinoma",
    description: "Most common primary liver cancer. Strongly linked to chronic hepatitis B/C and cirrhosis. Third leading cause of cancer death worldwide. Curative options available only for early-stage disease.",
    commonSymptoms: ["Abdominal pain/fullness", "Unintentional weight loss", "Jaundice", "Ascites", "Easy bruising", "Loss of appetite", "Fatigue"],
    riskFactors: ["Hepatitis B (chronic)", "Hepatitis C (chronic)", "Cirrhosis (any cause)", "Heavy alcohol use", "NAFLD/NASH", "Aflatoxin exposure", "Obesity", "Diabetes"],
    diagnostics: ["Abdominal ultrasound (screening)", "Triple-phase CT", "MRI with Eovist/Primovist", "AFP blood test", "Liver biopsy (when imaging inconclusive)"],
    treatments: [
      { name: "Surgical Resection", description: "Partial hepatectomy for early-stage with good liver function", typicalCostRange: "$30,000 – $100,000" },
      { name: "Liver Transplant", description: "Curative option within Milan criteria", typicalCostRange: "$300,000 – $800,000" },
      { name: "Ablation (RFA/MWA)", description: "Percutaneous radiofrequency or microwave ablation for small tumors", typicalCostRange: "$15,000 – $40,000" },
      { name: "TACE", description: "Transarterial chemoembolization for intermediate-stage", typicalCostRange: "$15,000 – $30,000/session" },
      { name: "Immunotherapy + Targeted", description: "Atezolizumab + bevacizumab (IMbrave150) — new standard first-line", typicalCostRange: "$150,000 – $250,000/year" },
      { name: "Sorafenib/Lenvatinib", description: "TKI therapy for advanced HCC", typicalCostRange: "$80,000 – $150,000/year" }
    ],
    stages: ["Very Early (BCLC-0)", "Early (BCLC-A)", "Intermediate (BCLC-B)", "Advanced (BCLC-C)", "Terminal (BCLC-D)"],
    survivalRates: "Localized (resected): ~35% 5-year; Liver transplant: ~60-80%; Advanced: ~3-10%",
    supportOrganizations: [
      { name: "American Liver Foundation", url: "https://liverfoundation.org/", description: "US liver disease support", geography: "US" },
      { name: "British Liver Trust", url: "https://britishlivertrust.org.uk/", description: "UK liver support", geography: "UK" },
      { name: "Hepatitis B Foundation", url: "https://www.hepb.org/", description: "Global hepatitis B resources and HCC prevention", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Liver Cancer", url: "https://www.cancer.gov/types/liver", type: "website" },
      { title: "ACS – Liver Cancer", url: "https://www.cancer.org/cancer/types/liver-cancer.html", type: "website" },
      { title: "EASL Clinical Practice Guidelines – HCC", url: "https://www.journal-of-hepatology.eu/article/S0168-8278(18)30215-0/fulltext", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~41,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "UCSF", "Mount Sinai"] },
      { region: "India", prevalence: "~30,000 cases/year; hepatitis B endemic in northeast states", notableHospitals: ["Tata Memorial", "ILBS New Delhi", "AIIMS"] },
      { region: "Global", prevalence: "~900,000 new cases/year worldwide; highest in East/Southeast Asia, Sub-Saharan Africa" },
      { region: "Middle East", prevalence: "High hepatitis B/C burden in Egypt; liver cancer declining with HCV treatment", notableHospitals: ["NCI Cairo", "King Faisal Specialist Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "hodgkin-lymphoma",
    name: "Hodgkin Lymphoma",
    alternateNames: ["Hodgkin's Disease", "HL", "Hodgkin's Lymphoma"],
    category: "lymphoma",
    description: "A cancer of the lymphatic system characterized by Reed-Sternberg cells. One of the most curable cancers. Often affects young adults (15-35) and older adults (>55). EBV associated in some cases.",
    commonSymptoms: ["Painless swollen lymph nodes", "Night sweats", "Fever (Pel-Ebstein)", "Unexplained weight loss", "Itching", "Fatigue", "Alcohol-induced lymph node pain"],
    riskFactors: ["Age 15-35 or >55", "Male sex", "EBV infection history", "Family history", "Immunodeficiency"],
    diagnostics: ["Lymph node biopsy", "CT scan", "PET/CT", "Bone marrow biopsy", "Blood tests (ESR)"],
    treatments: [
      { name: "ABVD Chemotherapy", description: "Doxorubicin, bleomycin, vinblastine, dacarbazine — standard regimen", typicalCostRange: "$20,000 – $60,000" },
      { name: "Radiation", description: "Involved-site radiation for early-stage", typicalCostRange: "$15,000 – $40,000" },
      { name: "BV-AVD", description: "Brentuximab vedotin + AVD for advanced stage (ECHELON-1)", typicalCostRange: "$100,000 – $200,000" },
      { name: "Immunotherapy", description: "Nivolumab/pembrolizumab for relapsed/refractory", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Autologous Stem Cell Transplant", description: "Salvage chemo + autologous SCT for relapsed disease", typicalCostRange: "$100,000 – $300,000" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Overall: ~89% 5-year; Stage I-II: ~95%; Stage III: ~85%; Stage IV: ~75%",
    supportOrganizations: [
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "US blood cancer support", geography: "US" },
      { name: "Lymphoma Action", url: "https://lymphoma-action.org.uk/", description: "UK lymphoma charity", geography: "UK" },
      { name: "Lymphoma Australia", url: "https://www.lymphoma.org.au/", description: "Australian lymphoma support", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Hodgkin Lymphoma", url: "https://www.cancer.gov/types/lymphoma/patient/adult-hodgkin-treatment-pdq", type: "website" },
      { title: "ACS – Hodgkin Lymphoma", url: "https://www.cancer.org/cancer/types/hodgkin-lymphoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~8,800 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Dana-Farber"] },
      { region: "UK", prevalence: "~2,100 new cases/year", notableHospitals: ["The Christie", "University College London Hospitals"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "kaposi-sarcoma",
    name: "Kaposi Sarcoma",
    alternateNames: ["KS"],
    category: "sarcoma",
    description: "Cancer caused by HHV-8 (human herpesvirus 8). Forms in blood vessel linings. Most common cancer in untreated HIV/AIDS patients. Declining with antiretroviral therapy. Endemic in sub-Saharan Africa.",
    commonSymptoms: ["Purple/red/brown skin lesions", "Lesions in mouth or throat", "Swelling in legs", "GI involvement (bleeding)", "Lung involvement (cough, shortness of breath)"],
    riskFactors: ["HIV/AIDS", "Immunosuppression (organ transplant)", "HHV-8 infection", "Male sex", "Mediterranean/African descent"],
    diagnostics: ["Skin biopsy", "Endoscopy for GI involvement", "Chest X-ray/CT", "HHV-8 testing", "CD4 count and viral load (HIV)"],
    treatments: [
      { name: "Antiretroviral Therapy (ART)", description: "First-line for HIV-associated KS — often leads to regression", typicalCostRange: "$2,000 – $30,000/year" },
      { name: "Chemotherapy", description: "Liposomal doxorubicin, paclitaxel for advanced disease", typicalCostRange: "$20,000 – $80,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for non-HIV KS", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Local Therapy", description: "Radiation, cryotherapy, or intralesional vinblastine for localized lesions", typicalCostRange: "$2,000 – $15,000" }
    ],
    stages: ["T0 (limited skin)", "T1 (extensive)", "AIDS-related staging (TIS system)"],
    survivalRates: "With ART: >80% 5-year for HIV-associated; Without treatment or advanced: much worse",
    supportOrganizations: [
      { name: "amfAR", url: "https://www.amfar.org/", description: "AIDS and KS research foundation", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Kaposi Sarcoma", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/patient/kaposi-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "Endemic in sub-Saharan Africa; epidemic form declining with ART availability" },
      { region: "US", prevalence: "Rare; primarily in HIV/AIDS and transplant patients" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "kidney-cancer",
    name: "Kidney Cancer",
    alternateNames: ["Renal Cell Carcinoma", "RCC", "Renal Cancer", "Wilms Tumor (pediatric)"],
    category: "carcinoma",
    description: "Cancer of the kidneys. Renal cell carcinoma (RCC) is the most common type in adults. Clear cell RCC accounts for ~75%. Often found incidentally on imaging. Responds to immunotherapy and targeted therapy.",
    commonSymptoms: ["Blood in urine (hematuria)", "Flank pain", "Abdominal mass", "Weight loss", "Fatigue", "Fever", "Often asymptomatic (incidental finding)"],
    riskFactors: ["Smoking", "Obesity", "High blood pressure", "Family history", "VHL syndrome", "Chronic dialysis", "Exposure to cadmium, asbestos"],
    diagnostics: ["CT scan with contrast", "MRI", "Renal mass biopsy", "Chest CT for staging", "Bone scan if indicated"],
    treatments: [
      { name: "Partial Nephrectomy", description: "Kidney-sparing surgery for small tumors (T1)", typicalCostRange: "$15,000 – $40,000" },
      { name: "Radical Nephrectomy", description: "Complete kidney removal for large or advanced tumors", typicalCostRange: "$20,000 – $60,000" },
      { name: "Immunotherapy + TKI", description: "Pembrolizumab + axitinib or nivolumab + cabozantinib — first-line for advanced RCC", typicalCostRange: "$150,000 – $300,000/year" },
      { name: "TKI Monotherapy", description: "Sunitinib, pazopanib, cabozantinib", typicalCostRange: "$100,000 – $170,000/year" },
      { name: "Active Surveillance", description: "Observation for small renal masses in elderly/comorbid patients", typicalCostRange: "$1,000 – $5,000/year" },
      { name: "Ablation", description: "Cryoablation or radiofrequency ablation for small tumors", typicalCostRange: "$10,000 – $25,000" }
    ],
    stages: ["Stage I (≤7 cm)", "Stage II (>7 cm)", "Stage III (extends to major veins or adrenal)", "Stage IV (metastatic)"],
    survivalRates: "Stage I: ~93% 5-year; Stage II: ~74%; Stage III: ~53%; Stage IV: ~8-15% (improving with IO/TKI)",
    supportOrganizations: [
      { name: "Kidney Cancer Association", url: "https://www.kidneycancer.org/", description: "US patient support and research", geography: "US" },
      { name: "James Whale Fund for Kidney Cancer", url: "https://www.jameswhalefund.org/", description: "UK kidney cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Kidney Cancer", url: "https://www.cancer.gov/types/kidney", type: "website" },
      { title: "ACS – Kidney Cancer", url: "https://www.cancer.org/cancer/types/kidney-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~79,000 new cases/year", notableHospitals: ["Cleveland Clinic", "MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "UK", prevalence: "~13,000 new cases/year", notableHospitals: ["Royal Free Hospital", "The Christie"] },
      { region: "India", prevalence: "~20,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS", "Fortis Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "laryngeal-cancer",
    name: "Laryngeal Cancer",
    alternateNames: ["Cancer of the Larynx", "Voice Box Cancer"],
    category: "carcinoma",
    description: "Cancer of the larynx (voice box). Strongly linked to smoking and alcohol. Can affect voice, breathing, and swallowing. Voice preservation is a key treatment goal.",
    commonSymptoms: ["Persistent hoarseness", "Sore throat", "Difficulty swallowing", "Ear pain", "Breathing difficulty", "Lump in neck"],
    riskFactors: ["Smoking", "Heavy alcohol use", "Asbestos exposure", "Poor nutrition", "HPV (some cases)", "GERD"],
    diagnostics: ["Laryngoscopy with biopsy", "CT/MRI of neck", "PET/CT", "Chest X-ray"],
    treatments: [
      { name: "Radiation", description: "Definitive radiation for early-stage (voice preservation)", typicalCostRange: "$20,000 – $60,000" },
      { name: "Laser Surgery", description: "Transoral laser microsurgery (TLM) for early-stage", typicalCostRange: "$15,000 – $35,000" },
      { name: "Total Laryngectomy", description: "Complete removal of voice box for advanced disease", typicalCostRange: "$40,000 – $100,000" },
      { name: "Chemoradiation", description: "Cisplatin + radiation for organ preservation in advanced", typicalCostRange: "$50,000 – $100,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IVA", "Stage IVB"],
    survivalRates: "Stage I: ~80-90%; Stage II: ~70-80%; Stage III: ~50-60%; Stage IV: ~30-40%",
    supportOrganizations: [
      { name: "International Association of Laryngectomees", url: "https://www.theial.com/", description: "Support for laryngectomy patients", geography: "Global" },
      { name: "National Association of Laryngectomee Clubs", url: "https://www.laryngectomy.org.uk/", description: "UK laryngectomy support", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Laryngeal Cancer", url: "https://www.cancer.gov/types/head-and-neck/patient/laryngeal-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~12,500 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering"] },
      { region: "India", prevalence: "High incidence due to smoking/tobacco chewing", notableHospitals: ["Tata Memorial Hospital"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer",
    alternateNames: ["Non-Small Cell Lung Cancer (NSCLC)", "Small Cell Lung Cancer (SCLC)", "Adenocarcinoma of Lung", "Squamous Cell Lung Cancer"],
    category: "carcinoma",
    description: "Leading cause of cancer death worldwide. Two main types: NSCLC (~85%) and SCLC (~15%). Molecular testing has revolutionized treatment with targeted therapies. LDCT screening reduces mortality in high-risk populations.",
    commonSymptoms: ["Persistent cough", "Coughing up blood", "Shortness of breath", "Chest pain", "Weight loss", "Fatigue", "Hoarseness", "Recurrent infections"],
    riskFactors: ["Smoking (80-90% of cases)", "Secondhand smoke", "Radon exposure", "Asbestos", "Air pollution", "Family history", "Prior radiation to chest"],
    diagnostics: ["Low-dose CT (screening)", "Chest X-ray", "CT-guided biopsy", "Bronchoscopy", "PET/CT", "Molecular testing (EGFR, ALK, ROS1, PD-L1, KRAS, BRAF, MET, RET, NTRK)"],
    treatments: [
      { name: "Surgery", description: "Lobectomy, segmentectomy, or pneumonectomy for early-stage NSCLC", typicalCostRange: "$30,000 – $80,000" },
      { name: "SBRT", description: "Stereotactic body radiation for inoperable early-stage", typicalCostRange: "$15,000 – $40,000" },
      { name: "Adjuvant Osimertinib", description: "3-year adjuvant EGFR TKI for resected EGFR+ (ADAURA trial)", typicalCostRange: "$150,000 – $200,000/year" },
      { name: "Immunotherapy", description: "Pembrolizumab ± chemo for PD-L1+ NSCLC; durvalumab for Stage III", typicalCostRange: "$100,000 – $250,000/year" },
      { name: "Targeted Therapy", description: "EGFR (osimertinib), ALK (alectinib/lorlatinib), ROS1, KRAS G12C (sotorasib)", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Chemoradiation + Durvalumab", description: "Concurrent chemoradiation followed by durvalumab for unresectable Stage III (PACIFIC)", typicalCostRange: "$150,000 – $300,000" },
      { name: "SCLC Treatment", description: "Platinum-etoposide + atezolizumab/durvalumab; PCI for limited-stage", typicalCostRange: "$60,000 – $200,000" }
    ],
    stages: ["Stage IA", "Stage IB", "Stage IIA", "Stage IIB", "Stage IIIA", "Stage IIIB", "Stage IIIC", "Stage IVA", "Stage IVB"],
    survivalRates: "Stage I NSCLC: ~68-92%; Stage II: ~53-60%; Stage III: ~13-36%; Stage IV: ~1-10%; SCLC limited: ~20-25%; SCLC extensive: ~2-5%",
    supportOrganizations: [
      { name: "Lung Cancer Research Foundation", url: "https://www.lungcancerresearchfoundation.org/", description: "US research funding", geography: "US" },
      { name: "LUNGevity Foundation", url: "https://www.lungevity.org/", description: "US patient advocacy and research", geography: "US" },
      { name: "Roy Castle Lung Cancer Foundation", url: "https://www.roycastle.org/", description: "UK lung cancer charity", geography: "UK" },
      { name: "Cancer Council Australia", url: "https://www.cancercouncil.com.au/lung-cancer/", description: "Australian lung cancer resources", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Lung Cancer", url: "https://www.cancer.gov/types/lung", type: "website" },
      { title: "ACS – Lung Cancer", url: "https://www.cancer.org/cancer/types/lung-cancer.html", type: "website" },
      { title: "WHO – Lung Cancer Factsheet", url: "https://gco.iarc.fr/today/data/factsheets/cancers/15-Lung-fact-sheet.pdf", type: "pdf" },
      { title: "NCCN Lung Cancer Screening Guidelines", url: "https://www.nccn.org/patients/guidelines/content/PDF/lung_screening-patient.pdf", type: "pdf" },
      { title: "NEJM – PACIFIC Trial (Durvalumab Stage III)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1809697", type: "research" },
      { title: "NEJM – ADAURA Trial (Osimertinib Adjuvant)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2027071", type: "research" },
      { title: "LUNGevity – Patient Resources Hub", url: "https://www.lungevity.org/for-patients-caregivers", type: "website" },
      { title: "LCRF – Lung Cancer Research Articles", url: "https://www.lungcancerresearchfoundation.org/research/research-grants/", type: "website" }
    ],
    
    geographyNotes: [
      { region: "US", prevalence: "~238,000 new cases/year", screeningPrograms: "LDCT annually for ages 50-80 with 20+ pack-year history (USPSTF)", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Dana-Farber", "Mayo Clinic", "Moffitt Cancer Center"] },
      { region: "UK", prevalence: "~49,000 new cases/year — largest cancer killer", screeningPrograms: "Targeted Lung Health Checks rolling out", notableHospitals: ["Royal Marsden", "The Christie", "Papworth Hospital"] },
      { region: "India", prevalence: "~70,000 cases/year; rising with urbanization and air pollution", notableHospitals: ["Tata Memorial", "AIIMS", "Rajiv Gandhi Cancer Institute"] },
      { region: "Australia", prevalence: "~13,000 new cases/year", screeningPrograms: "National Lung Cancer Screening Program launching" },
      { region: "Middle East", prevalence: "Rising rates especially in male populations", notableHospitals: ["King Faisal Specialist Hospital", "Cleveland Clinic Abu Dhabi"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "liver-metastases",
    name: "Liver Metastases",
    alternateNames: ["Secondary Liver Cancer", "Metastatic Liver Disease"],
    category: "other",
    description: "Cancers that have spread to the liver from other organs (most commonly colorectal, breast, lung, pancreatic). Much more common than primary liver cancer. Treatment depends on the primary cancer type and extent of liver disease.",
    commonSymptoms: ["Abdominal pain", "Ascites", "Jaundice", "Weight loss", "Fatigue", "Often asymptomatic initially"],
    riskFactors: ["Primary cancer elsewhere (especially colon, breast, lung, pancreas, stomach)", "Advanced-stage primary disease"],
    diagnostics: ["CT/MRI liver", "PET/CT", "Liver biopsy", "Blood tests (liver function, tumor markers)"],
    treatments: [
      { name: "Hepatic Metastasectomy", description: "Surgical resection of liver metastases (especially CRC) — potentially curative", typicalCostRange: "$40,000 – $120,000" },
      { name: "Ablation", description: "RFA, MWA, or cryoablation for small unresectable metastases", typicalCostRange: "$10,000 – $30,000" },
      { name: "Hepatic Artery Infusion (HAI)", description: "Floxuridine pump therapy for unresectable CRC liver mets", typicalCostRange: "$30,000 – $60,000" },
      { name: "Systemic Therapy", description: "Chemotherapy/targeted therapy/immunotherapy based on primary cancer", typicalCostRange: "Varies by primary cancer" },
      { name: "SIRT (Y-90)", description: "Selective internal radiation therapy with yttrium-90 microspheres", typicalCostRange: "$30,000 – $50,000/treatment" }
    ],
    survivalRates: "CRC liver mets (resected): ~40-60% 5-year; Unresectable: depends on systemic therapy response",
    supportOrganizations: [
      { name: "Colorectal Cancer Alliance", url: "https://www.ccalliance.org/", description: "For CRC liver metastases support", geography: "US" },
      { name: "Cancer Research UK", url: "https://www.cancerresearchuk.org/about-cancer/secondary-cancer/secondary-liver-cancer", description: "UK information on secondary liver cancer", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Metastatic Cancer", url: "https://www.cancer.gov/types/metastatic-cancer", type: "website" }
    ],
    geographyNotes: [
      { region: "US", notableHospitals: ["Memorial Sloan Kettering (HAI pump program)", "MD Anderson", "Mayo Clinic"] }
    ],
    lastUpdated: "2026-03-30"
  }
];
