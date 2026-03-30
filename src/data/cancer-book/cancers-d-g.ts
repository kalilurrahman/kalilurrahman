import { CancerEntry } from "./types";

export const cancersDG: CancerEntry[] = [
  {
    id: "endometrial-cancer",
    name: "Endometrial Cancer",
    alternateNames: ["Uterine Cancer", "Cancer of the Uterus", "Uterine Corpus Cancer"],
    category: "carcinoma",
    description: "Most common gynecologic cancer. Arises from the endometrial lining of the uterus. Strongly linked to excess estrogen exposure and obesity. Excellent prognosis when caught early.",
    commonSymptoms: ["Postmenopausal bleeding", "Abnormal uterine bleeding", "Pelvic pain", "Painful urination", "Pain during intercourse"],
    riskFactors: ["Obesity", "Diabetes", "Tamoxifen use", "Unopposed estrogen", "PCOS", "Lynch syndrome", "Late menopause", "Nulliparity"],
    diagnostics: ["Endometrial biopsy", "Transvaginal ultrasound", "Hysteroscopy", "D&C", "MRI pelvis", "CT chest/abdomen"],
    treatments: [
      { name: "Hysterectomy + BSO", description: "Total hysterectomy with bilateral salpingo-oophorectomy", typicalCostRange: "$15,000 – $40,000" },
      { name: "Radiation", description: "Vaginal cuff brachytherapy or external beam radiation", typicalCostRange: "$15,000 – $50,000" },
      { name: "Chemotherapy", description: "Carboplatin + paclitaxel for advanced disease", typicalCostRange: "$20,000 – $60,000" },
      { name: "Immunotherapy", description: "Dostarlimab for dMMR/MSI-H tumors — remarkable response rates", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Hormone Therapy", description: "Progestin therapy for fertility-sparing treatment in young patients", typicalCostRange: "$2,000 – $10,000/year" }
    ],
    stages: ["Stage I (confined to uterus)", "Stage II (cervix involvement)", "Stage III (spread beyond uterus)", "Stage IV (distant metastasis)"],
    survivalRates: "Stage I: ~95%; Stage II: ~70%; Stage III: ~40%; Stage IV: ~15%",
    supportOrganizations: [
      { name: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org/", description: "US gynecologic cancer support", geography: "US" },
      { name: "The Eve Appeal", url: "https://eveappeal.org.uk/", description: "UK gynecological cancer research", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Endometrial Cancer", url: "https://www.cancer.gov/types/uterine", type: "website" },
      { title: "ACS – Uterine Cancer", url: "https://www.cancer.org/cancer/types/endometrial-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~66,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "UK", prevalence: "~9,700 new cases/year", notableHospitals: ["Royal Marsden", "The Christie"] },
      { region: "India", prevalence: "~15,000 cases/year", notableHospitals: ["Tata Memorial Hospital", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "esophageal-cancer",
    name: "Esophageal Cancer",
    alternateNames: ["Oesophageal Cancer", "Esophageal Adenocarcinoma", "Esophageal Squamous Cell Carcinoma"],
    category: "carcinoma",
    description: "Cancer of the esophagus. Adenocarcinoma (linked to GERD/Barrett's) predominates in Western countries; squamous cell carcinoma predominates in Asia and developing nations. Often diagnosed late.",
    commonSymptoms: ["Difficulty swallowing (dysphagia)", "Unintentional weight loss", "Chest pain/pressure", "Chronic cough", "Hoarseness", "Indigestion"],
    riskFactors: ["GERD/Barrett's esophagus", "Smoking", "Heavy alcohol use", "Obesity", "Hot beverages", "Achalasia", "Diet low in fruits/vegetables"],
    diagnostics: ["Upper endoscopy with biopsy", "Barium swallow", "Endoscopic ultrasound", "CT scan", "PET/CT", "HER2 and PD-L1 testing"],
    treatments: [
      { name: "Surgery (Esophagectomy)", description: "Ivor Lewis or McKeown esophagectomy", typicalCostRange: "$50,000 – $150,000" },
      { name: "Neoadjuvant Chemoradiation", description: "CROSS protocol: carboplatin + paclitaxel + radiation before surgery", typicalCostRange: "$40,000 – $80,000" },
      { name: "Immunotherapy", description: "Nivolumab adjuvant (CheckMate 577); pembrolizumab + chemo for advanced", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Targeted Therapy", description: "Trastuzumab for HER2+ adenocarcinoma; ramucirumab", typicalCostRange: "$60,000 – $150,000/year" },
      { name: "Endoscopic Treatments", description: "EMR/ESD for very early-stage; stenting for palliation", typicalCostRange: "$5,000 – $20,000" }
    ],
    stages: ["Stage 0 (dysplasia)", "Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Localized: ~47%; Regional: ~26%; Distant: ~6%; Overall: ~21%",
    supportOrganizations: [
      { name: "Esophageal Cancer Action Network", url: "https://ecan.org/", description: "US patient advocacy", geography: "US" },
      { name: "Heartburn Cancer UK", url: "https://www.heartburncanceruk.org/", description: "UK Barrett's and esophageal cancer", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Esophageal Cancer", url: "https://www.cancer.gov/types/esophageal", type: "website" },
      { title: "WHO – Esophageal Cancer Factsheet", url: "https://gco.iarc.fr/today/data/factsheets/cancers/6-Oesophagus-fact-sheet.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~22,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "University of Pittsburgh"] },
      { region: "India", prevalence: "~50,000 cases/year; high in Kashmir and northeast India", notableHospitals: ["Tata Memorial", "AIIMS", "SHER-i-Kashmir Institute"] },
      { region: "Middle East", prevalence: "High rates in Iran's Caspian littoral region", notableHospitals: ["Tehran University of Medical Sciences"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "ewing-sarcoma",
    name: "Ewing Sarcoma",
    alternateNames: ["Ewing's Sarcoma", "PNET (Primitive Neuroectodermal Tumor)"],
    category: "sarcoma",
    description: "Aggressive bone and soft tissue cancer primarily affecting children and young adults. Characterized by EWSR1 gene rearrangement. Second most common bone cancer in children.",
    commonSymptoms: ["Bone pain (intermittent, worsening)", "Swelling at tumor site", "Fever", "Fatigue", "Weight loss", "Fracture at weakened bone"],
    riskFactors: ["Age 10-20", "White/European descent", "Male sex slightly higher risk"],
    diagnostics: ["X-ray", "MRI of primary site", "CT chest", "Bone scan", "PET/CT", "Biopsy with FISH for EWSR1 translocation"],
    treatments: [
      { name: "Chemotherapy", description: "VDC/IE alternating protocol (vincristine, doxorubicin, cyclophosphamide / ifosfamide, etoposide)", typicalCostRange: "$100,000 – $300,000" },
      { name: "Surgery", description: "Wide resection with limb salvage when possible", typicalCostRange: "$30,000 – $100,000" },
      { name: "Radiation", description: "Definitive radiation when surgery not feasible; adjuvant for close margins", typicalCostRange: "$20,000 – $60,000" }
    ],
    stages: ["Localized", "Metastatic"],
    survivalRates: "Localized: ~70% 5-year; Metastatic: ~15-30%",
    supportOrganizations: [
      { name: "National Pediatric Cancer Foundation", url: "https://nationalpcf.org/", description: "Pediatric cancer research", geography: "US" },
      { name: "Bone Cancer Research Trust", url: "https://www.bcrt.org.uk/", description: "UK bone cancer support", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Ewing Sarcoma", url: "https://www.cancer.gov/types/bone/patient/ewing-treatment-pdq", type: "website" },
      { title: "St. Jude – Ewing Sarcoma", url: "https://www.stjude.org/disease/ewing-sarcoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~200-250 new cases/year", notableHospitals: ["St. Jude Children's", "Boston Children's Hospital", "MD Anderson"] },
      { region: "UK", prevalence: "~60 new cases/year", notableHospitals: ["Great Ormond Street Hospital", "UCL Hospitals"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "gallbladder-cancer",
    name: "Gallbladder Cancer",
    alternateNames: ["Gallbladder Carcinoma"],
    category: "carcinoma",
    description: "Rare but aggressive cancer of the gallbladder. Often discovered incidentally during cholecystectomy. Higher prevalence in certain geographic regions (Chile, India, Native Americans).",
    commonSymptoms: ["Abdominal pain (right upper quadrant)", "Jaundice", "Nausea and vomiting", "Weight loss", "Bloating", "Fever"],
    riskFactors: ["Gallstones (porcelain gallbladder)", "Female sex", "Obesity", "Native American/Mexican descent", "Chronic gallbladder infection", "Gallbladder polyps >1cm"],
    diagnostics: ["Abdominal ultrasound", "CT scan", "MRI/MRCP", "CA 19-9", "Incidental finding during cholecystectomy"],
    treatments: [
      { name: "Extended Cholecystectomy", description: "Gallbladder removal with liver bed resection and lymph node dissection", typicalCostRange: "$20,000 – $60,000" },
      { name: "Chemotherapy", description: "Gemcitabine + cisplatin (ABC-02 regimen)", typicalCostRange: "$30,000 – $80,000" },
      { name: "Radiation", description: "Adjuvant radiation for locally advanced disease", typicalCostRange: "$15,000 – $40,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for MSI-H/dMMR tumors", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage 0 (in situ)", "Stage I", "Stage II", "Stage IIIA", "Stage IIIB", "Stage IVA", "Stage IVB"],
    survivalRates: "Stage I: ~50-80% 5-year; Stage II: ~25-30%; Stage III-IV: ~5-10%",
    supportOrganizations: [
      { name: "Cholangiocarcinoma Foundation", url: "https://cholangiocarcinoma.org/", description: "Also covers gallbladder cancer", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Gallbladder Cancer", url: "https://www.cancer.gov/types/gallbladder/patient/gallbladder-treatment-pdq", type: "website" },
      { title: "ACS – Gallbladder Cancer", url: "https://www.cancer.org/cancer/types/gallbladder-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "India", prevalence: "High rates in Ganges belt (UP, Bihar, West Bengal); ~25,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS", "BHU Varanasi"] },
      { region: "US", prevalence: "~12,000 new cases/year (including bile duct)", notableHospitals: ["Mayo Clinic", "MD Anderson"] },
      { region: "Global", prevalence: "Very high in Chile, Bolivia, and among Native Americans" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "gastric-cancer",
    name: "Gastric Cancer",
    alternateNames: ["Stomach Cancer", "Gastric Adenocarcinoma"],
    category: "carcinoma",
    description: "Fifth most common cancer globally. Strongly linked to H. pylori infection, diet, and genetics. Declining in developed nations but remains a leading killer in East Asia, Eastern Europe, and South America.",
    commonSymptoms: ["Indigestion", "Stomach pain", "Nausea/vomiting", "Difficulty swallowing", "Unintentional weight loss", "Early satiety", "Blood in vomit or stool"],
    riskFactors: ["H. pylori infection", "Smoked/salted/pickled foods", "Smoking", "Family history", "Hereditary diffuse gastric cancer (CDH1 mutation)", "Pernicious anemia", "Chronic gastritis"],
    diagnostics: ["Upper endoscopy with biopsy", "CT scan", "Endoscopic ultrasound", "PET/CT", "HER2 and PD-L1 testing", "Molecular profiling"],
    treatments: [
      { name: "Surgery", description: "Subtotal or total gastrectomy with D2 lymph node dissection", typicalCostRange: "$30,000 – $100,000" },
      { name: "Perioperative Chemotherapy", description: "FLOT protocol (docetaxel, oxaliplatin, 5-FU/leucovorin)", typicalCostRange: "$30,000 – $80,000" },
      { name: "Targeted Therapy", description: "Trastuzumab for HER2+ disease; ramucirumab for second line", typicalCostRange: "$60,000 – $150,000/year" },
      { name: "Immunotherapy", description: "Nivolumab + chemo for first-line advanced (CheckMate 649)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage IA", "Stage IB", "Stage II", "Stage IIIA", "Stage IIIB", "Stage IIIC", "Stage IV"],
    survivalRates: "Stage I: ~70-94%; Stage II: ~45-55%; Stage III: ~20-35%; Stage IV: ~4-6%",
    supportOrganizations: [
      { name: "No Stomach For Cancer", url: "https://nostomachforcancer.org/", description: "US gastric and hereditary diffuse gastric cancer support", geography: "US" },
      { name: "Stomach Cancer UK", url: "https://www.stomachcancer.uk/", description: "UK patient charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Gastric Cancer", url: "https://www.cancer.gov/types/stomach", type: "website" },
      { title: "ACS – Stomach Cancer", url: "https://www.cancer.org/cancer/types/stomach-cancer.html", type: "website" },
      { title: "IARC – Gastric Cancer Epidemiology", url: "https://gco.iarc.fr/today/data/factsheets/cancers/7-Stomach-fact-sheet.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~27,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "India", prevalence: "~50,000 cases/year; high in southern and northeast India", notableHospitals: ["Tata Memorial Hospital", "AIIMS", "Kidwai Memorial"] },
      { region: "Global", prevalence: "Highest rates in East Asia (Japan, South Korea), Eastern Europe, South America. Japan/Korea have mass screening programs that detect early-stage disease." }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "gist",
    name: "Gastrointestinal Stromal Tumor (GIST)",
    alternateNames: ["GIST"],
    category: "sarcoma",
    description: "Most common mesenchymal tumor of the GI tract. Characterized by KIT or PDGFRA mutations. Revolutionized by targeted therapy with imatinib (Gleevec).",
    commonSymptoms: ["Abdominal pain", "GI bleeding", "Early satiety", "Nausea", "Abdominal mass", "Often discovered incidentally"],
    riskFactors: ["Neurofibromatosis type 1", "Carney triad", "Familial GIST syndrome"],
    diagnostics: ["CT with contrast", "Endoscopic ultrasound", "Biopsy with KIT (CD117) staining", "Molecular testing (KIT, PDGFRA, SDH)"],
    treatments: [
      { name: "Surgery", description: "Complete resection — primary treatment", typicalCostRange: "$20,000 – $60,000" },
      { name: "Imatinib (Gleevec)", description: "First-line targeted therapy; adjuvant for 3 years if high-risk", typicalCostRange: "$30,000 – $100,000/year" },
      { name: "Sunitinib", description: "Second-line after imatinib failure", typicalCostRange: "$40,000 – $120,000/year" },
      { name: "Avapritinib", description: "For PDGFRA D842V mutant GIST", typicalCostRange: "$20,000 – $30,000/month" }
    ],
    stages: ["Localized resectable", "Locally advanced/borderline resectable", "Metastatic"],
    survivalRates: "Localized resected: ~90% 5-year with imatinib; Metastatic: 50-60% 5-year with targeted therapy",
    supportOrganizations: [
      { name: "The Life Raft Group", url: "https://liferaftgroup.org/", description: "GIST-specific global patient support", geography: "Global" },
      { name: "GIST Support International", url: "https://www.gistsupport.org/", description: "US-based GIST community", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – GIST Treatment", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/patient/gist-treatment-pdq", type: "website" },
      { title: "NCCN Guidelines – GIST", url: "https://www.nccn.org/patients/guidelines/content/PDF/gist-patient.pdf", type: "pdf" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "~10-15 per million per year worldwide" },
      { region: "US", prevalence: "~5,000-6,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Dana-Farber"] }
    ],
    lastUpdated: "2026-03-30"
  }
];
