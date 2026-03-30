import { CancerEntry } from "./types";

export const cancersQZ: CancerEntry[] = [
  {
    id: "retinoblastoma",
    name: "Retinoblastoma",
    alternateNames: ["Eye Cancer (Pediatric)", "RB"],
    category: "other",
    description: "Rare eye cancer occurring primarily in young children. Caused by RB1 gene mutations. Heritable form affects both eyes. Treatment aims to save life, then eye, then vision.",
    commonSymptoms: ["White pupillary reflex (leukocoria)", "Strabismus (crossed eyes)", "Red/swollen eye", "Poor vision", "Different colored irises"],
    riskFactors: ["RB1 gene mutation (heritable or sporadic)", "Family history", "Age under 5"],
    diagnostics: ["Fundoscopy under anesthesia", "Ocular ultrasound", "MRI orbits and brain", "Genetic testing for RB1"],
    treatments: [
      { name: "Chemoreduction", description: "Systemic carboplatin/vincristine/etoposide to shrink tumor", typicalCostRange: "$30,000 – $80,000" },
      { name: "Intra-arterial Chemotherapy", description: "Melphalan delivered via ophthalmic artery", typicalCostRange: "$20,000 – $50,000/session" },
      { name: "Focal Therapy", description: "Laser (transpupillary thermotherapy) or cryotherapy", typicalCostRange: "$5,000 – $15,000/session" },
      { name: "Enucleation", description: "Eye removal for advanced intraocular disease", typicalCostRange: "$10,000 – $25,000" },
      { name: "External Beam Radiation", description: "Reserved when other options fail (risk of secondary cancers)", typicalCostRange: "$15,000 – $40,000" }
    ],
    stages: ["Intraocular (Groups A-E)", "Extraocular", "Metastatic"],
    survivalRates: "Developed countries: >95% survival; Globe salvage: 70-90% with modern techniques",
    supportOrganizations: [
      { name: "Retinoblastoma International", url: "http://www.retinoblastoma.net/", description: "Global retinoblastoma support", geography: "Global" },
      { name: "Childhood Eye Cancer Trust", url: "https://www.chect.org.uk/", description: "UK retinoblastoma charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Retinoblastoma", url: "https://www.cancer.gov/types/retinoblastoma", type: "website" },
      { title: "St. Jude – Retinoblastoma", url: "https://www.stjude.org/disease/retinoblastoma.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~250-300 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "Wills Eye Hospital", "Children's Hospital Los Angeles"] },
      { region: "India", prevalence: "~1,500 cases/year; often late diagnosis in rural areas", notableHospitals: ["Sankara Nethralaya", "LV Prasad Eye Institute", "AIIMS"] },
      { region: "Global", prevalence: "~9,000 cases/year worldwide; >90% in developing nations" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "sarcoma-soft-tissue",
    name: "Soft Tissue Sarcoma",
    alternateNames: ["Leiomyosarcoma", "Liposarcoma", "Synovial Sarcoma", "Undifferentiated Pleomorphic Sarcoma", "STS"],
    category: "sarcoma",
    description: "Rare cancers arising from connective tissues (muscle, fat, nerves, blood vessels). Over 70 subtypes exist. Require specialized sarcoma center management. Surgery with wide margins is the cornerstone of treatment.",
    commonSymptoms: ["Painless growing mass", "Abdominal pain/fullness (retroperitoneal)", "Limited range of motion", "Pain if pressing on nerves", "Often large at diagnosis"],
    riskFactors: ["Prior radiation therapy", "Li-Fraumeni syndrome", "Neurofibromatosis type 1", "Lymphedema (lymphangiosarcoma)", "Vinyl chloride exposure", "Herbicide exposure"],
    diagnostics: ["MRI (extremity)", "CT (retroperitoneal/visceral)", "Core needle biopsy", "Molecular testing (translocations, MDM2 amplification)", "PET/CT for staging"],
    treatments: [
      { name: "Wide Excision Surgery", description: "R0 resection with negative margins — primary treatment", typicalCostRange: "$20,000 – $80,000" },
      { name: "Radiation", description: "Neoadjuvant or adjuvant radiation for extremity sarcomas", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemotherapy", description: "Doxorubicin ± ifosfamide for advanced/metastatic", typicalCostRange: "$30,000 – $80,000" },
      { name: "Targeted Therapy", description: "Pazopanib for non-adipocytic STS; trabectedin for leiomyosarcoma/liposarcoma", typicalCostRange: "$80,000 – $150,000/year" },
      { name: "Immunotherapy", description: "Pembrolizumab for UPS and some subtypes", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I (low grade, ≤5 cm)", "Stage II (high grade, ≤5 cm)", "Stage III (high grade, >5 cm)", "Stage IV (metastatic)"],
    survivalRates: "Localized: ~80% 5-year; Regional: ~55%; Distant: ~15%",
    supportOrganizations: [
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "US sarcoma advocacy and research", geography: "US" },
      { name: "Sarcoma UK", url: "https://sarcoma.org.uk/", description: "UK sarcoma charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Soft Tissue Sarcoma", url: "https://www.cancer.gov/types/soft-tissue-sarcoma", type: "website" },
      { title: "ESMO Clinical Practice Guidelines – Sarcoma", url: "https://www.esmo.org/guidelines/sarcoma-and-gist", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~13,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson", "Dana-Farber", "University of Michigan"] },
      { region: "UK", prevalence: "~4,000 new cases/year", notableHospitals: ["Royal Marsden", "The Christie", "UCL Hospitals"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "skin-cancer-non-melanoma",
    name: "Skin Cancer (Non-Melanoma)",
    alternateNames: ["Basal Cell Carcinoma", "Squamous Cell Carcinoma of Skin", "BCC", "SCC", "Merkel Cell Carcinoma"],
    category: "carcinoma",
    description: "Most common cancers in humans. BCC is the most common but rarely metastasizes. SCC can metastasize. Merkel cell carcinoma is rare but aggressive. All strongly linked to UV exposure.",
    commonSymptoms: ["Non-healing sore", "Pearly/waxy bump (BCC)", "Flat, firm, pale area (BCC)", "Red, scaly patch (SCC)", "Firm red nodule (SCC)", "Rapidly growing nodule (Merkel cell)"],
    riskFactors: ["UV exposure", "Fair skin", "History of sunburns", "Immunosuppression", "Prior radiation", "Chronic wounds/scars", "Arsenic exposure"],
    diagnostics: ["Skin biopsy (shave, punch, or excisional)", "Dermoscopy", "Sentinel node biopsy (Merkel cell, high-risk SCC)", "CT/PET for advanced staging"],
    treatments: [
      { name: "Mohs Micrographic Surgery", description: "Tissue-sparing surgery with microscopic margin control — gold standard for face", typicalCostRange: "$1,500 – $5,000" },
      { name: "Excision", description: "Standard surgical excision with margins", typicalCostRange: "$1,000 – $3,000" },
      { name: "Hedgehog Pathway Inhibitors", description: "Vismodegib, sonidegib for advanced/metastatic BCC", typicalCostRange: "$80,000 – $120,000/year" },
      { name: "Immunotherapy", description: "Cemiplimab for advanced cutaneous SCC; avelumab for Merkel cell", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Topical Treatments", description: "5-FU cream, imiquimod for superficial BCC/pre-cancers", typicalCostRange: "$100 – $500" },
      { name: "Radiation", description: "For non-surgical candidates or adjuvant", typicalCostRange: "$10,000 – $30,000" }
    ],
    survivalRates: "BCC: >99% cure rate; SCC: ~95% cure rate (higher metastatic risk if immunosuppressed); Merkel cell: ~65% 5-year localized",
    supportOrganizations: [
      { name: "Skin Cancer Foundation", url: "https://www.skincancer.org/", description: "US skin cancer prevention and education", geography: "US" },
      { name: "British Skin Foundation", url: "https://www.britishskinfoundation.org.uk/", description: "UK skin disease research", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Skin Cancer", url: "https://www.cancer.gov/types/skin", type: "website" },
      { title: "ACS – Basal and Squamous Cell Skin Cancer", url: "https://www.cancer.org/cancer/types/basal-and-squamous-cell-skin-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~5.4 million cases/year (BCC+SCC combined)", notableHospitals: ["Mayo Clinic", "UCSF", "Memorial Sloan Kettering"] },
      { region: "Australia", prevalence: "Highest per-capita rates in the world; >1 million treatments/year", screeningPrograms: "Skin check campaigns; SunSmart program" },
      { region: "UK", prevalence: "~150,000 new cases/year", notableHospitals: ["Royal Marsden", "Oxford University Hospitals"] }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "testicular-cancer",
    name: "Testicular Cancer",
    alternateNames: ["Testicular Germ Cell Tumor", "Seminoma", "Non-Seminoma"],
    category: "other",
    description: "Most common cancer in young men (ages 15-44). One of the most curable cancers, even when metastatic. Divided into seminoma and non-seminoma types. Cure rates >95% overall.",
    commonSymptoms: ["Painless testicular lump/swelling", "Heaviness in scrotum", "Dull ache in abdomen/groin", "Breast enlargement (gynecomastia)", "Back pain (retroperitoneal lymph nodes)"],
    riskFactors: ["Cryptorchidism (undescended testicle)", "Family history", "Personal history in other testis", "Caucasian race", "Klinefelter syndrome"],
    diagnostics: ["Testicular ultrasound", "Serum tumor markers (AFP, beta-hCG, LDH)", "CT chest/abdomen/pelvis", "Radical inguinal orchiectomy (diagnostic + therapeutic)"],
    treatments: [
      { name: "Radical Orchiectomy", description: "Removal of affected testis via inguinal approach — always done first", typicalCostRange: "$10,000 – $25,000" },
      { name: "Surveillance", description: "Active monitoring after orchiectomy for Stage I", typicalCostRange: "$3,000 – $8,000/year" },
      { name: "BEP Chemotherapy", description: "Bleomycin, etoposide, cisplatin — curative for advanced disease", typicalCostRange: "$15,000 – $50,000" },
      { name: "Radiation", description: "Adjuvant radiation for Stage I-IIA seminoma", typicalCostRange: "$10,000 – $30,000" },
      { name: "RPLND", description: "Retroperitoneal lymph node dissection for residual masses (non-seminoma)", typicalCostRange: "$25,000 – $60,000" },
      { name: "High-Dose Chemo + SCT", description: "Salvage therapy for relapsed disease", typicalCostRange: "$100,000 – $300,000" }
    ],
    stages: ["Stage I (testis only)", "Stage IS (elevated markers)", "Stage IIA-C (retroperitoneal nodes)", "Stage III (distant metastasis)"],
    survivalRates: "Stage I: ~99%; Stage II: ~96%; Stage III: ~73%; Overall: ~95%",
    supportOrganizations: [
      { name: "Testicular Cancer Society", url: "https://testicularcancersociety.org/", description: "US awareness and support", geography: "US" },
      { name: "Orchid (Male Cancer Charity)", url: "https://orchid-cancer.org.uk/", description: "UK male cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Testicular Cancer", url: "https://www.cancer.gov/types/testicular", type: "website" },
      { title: "ACS – Testicular Cancer", url: "https://www.cancer.org/cancer/types/testicular-cancer.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~9,500 new cases/year", notableHospitals: ["Indiana University (Dr. Einhorn's center)", "Memorial Sloan Kettering", "MD Anderson"] },
      { region: "UK", prevalence: "~2,400 new cases/year", notableHospitals: ["Royal Marsden", "The Christie"] },
      { region: "Global", prevalence: "Highest rates in Northern/Western Europe and US; lower in Asia and Africa" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "thyroid-cancer",
    name: "Thyroid Cancer",
    alternateNames: ["Papillary Thyroid Cancer", "Follicular Thyroid Cancer", "Medullary Thyroid Cancer", "Anaplastic Thyroid Cancer"],
    category: "carcinoma",
    description: "Cancer of the thyroid gland. Papillary is most common (~80%) and highly curable. Anaplastic is rare but one of the most lethal cancers known. Incidence has been rising, partly due to overdiagnosis.",
    commonSymptoms: ["Thyroid nodule/lump", "Neck swelling", "Hoarseness", "Difficulty swallowing", "Neck pain", "Swollen lymph nodes"],
    riskFactors: ["Radiation exposure (especially childhood)", "Female sex", "Age 25-65", "Family history", "RET mutations (medullary)", "Hashimoto's thyroiditis", "Iodine deficiency"],
    diagnostics: ["Thyroid ultrasound", "Fine needle aspiration (FNA) biopsy", "Molecular testing (BRAF, RET, RAS)", "Bethesda classification", "CT/MRI for staging", "Thyroglobulin levels"],
    treatments: [
      { name: "Thyroidectomy", description: "Total or near-total thyroidectomy", typicalCostRange: "$10,000 – $30,000" },
      { name: "Radioactive Iodine (RAI)", description: "I-131 ablation for differentiated thyroid cancer", typicalCostRange: "$5,000 – $15,000" },
      { name: "TSH Suppression", description: "Levothyroxine at supraphysiologic doses", typicalCostRange: "$500 – $2,000/year" },
      { name: "Targeted Therapy", description: "Lenvatinib, sorafenib for RAI-refractory; selpercatinib for RET-mutant", typicalCostRange: "$100,000 – $200,000/year" },
      { name: "Active Surveillance", description: "Observation for papillary microcarcinomas (<1 cm)", typicalCostRange: "$1,000 – $3,000/year" },
      { name: "Immunotherapy + Targeted", description: "Dabrafenib + trametinib for BRAF V600E anaplastic thyroid cancer", typicalCostRange: "$150,000 – $250,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IVA", "Stage IVB", "Stage IVC"],
    survivalRates: "Papillary/Follicular: ~98% 5-year; Medullary: ~90% 5-year; Anaplastic: ~5-10% 1-year",
    supportOrganizations: [
      { name: "ThyCa: Thyroid Cancer Survivors' Association", url: "https://www.thyca.org/", description: "US thyroid cancer support", geography: "US" },
      { name: "Butterfly Thyroid Cancer Trust", url: "https://www.butterfly.org.uk/", description: "UK thyroid cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Thyroid Cancer", url: "https://www.cancer.gov/types/thyroid", type: "website" },
      { title: "ACS – Thyroid Cancer", url: "https://www.cancer.org/cancer/types/thyroid-cancer.html", type: "website" },
      { title: "ATA Guidelines for Thyroid Nodules and Cancer", url: "https://www.liebertpub.com/doi/10.1089/thy.2015.0020", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~44,000 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "Mayo Clinic", "MD Anderson"] },
      { region: "UK", prevalence: "~3,800 new cases/year", notableHospitals: ["Royal Marsden"] },
      { region: "India", prevalence: "~20,000 cases/year", notableHospitals: ["Tata Memorial", "AIIMS"] },
      { region: "Global", prevalence: "Rising incidence globally, partly due to increased detection via imaging" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "urothelial-carcinoma",
    name: "Urothelial Carcinoma (Upper Tract)",
    alternateNames: ["Upper Tract Urothelial Carcinoma", "UTUC", "Renal Pelvis Cancer", "Ureteral Cancer"],
    category: "carcinoma",
    description: "Cancer of the renal pelvis or ureter lining. Related to bladder cancer but less common. Lynch syndrome patients at higher risk. Treatment involves nephroureterectomy or kidney-sparing approaches.",
    commonSymptoms: ["Blood in urine", "Flank pain", "Urinary obstruction", "Weight loss"],
    riskFactors: ["Smoking", "Aristolochic acid exposure", "Lynch syndrome", "Prior bladder cancer", "Chemical exposure"],
    diagnostics: ["CT urogram", "Ureteroscopy with biopsy", "Urine cytology", "Molecular testing"],
    treatments: [
      { name: "Radical Nephroureterectomy", description: "Removal of kidney, ureter, and bladder cuff — standard surgery", typicalCostRange: "$25,000 – $60,000" },
      { name: "Kidney-Sparing Surgery", description: "Ureteroscopic ablation for low-grade, small tumors", typicalCostRange: "$15,000 – $35,000" },
      { name: "Neoadjuvant Chemotherapy", description: "Cisplatin-based chemo before surgery", typicalCostRange: "$20,000 – $50,000" },
      { name: "Adjuvant Immunotherapy", description: "Nivolumab after surgery (CheckMate 274)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Stage I: ~80% 5-year; Stage II: ~60%; Stage III: ~35%; Stage IV: ~10%",
    supportOrganizations: [
      { name: "Bladder Cancer Advocacy Network", url: "https://bcan.org/", description: "Also covers UTUC", geography: "US" }
    ],
    externalResources: [
      { title: "EAU Guidelines – Upper Tract Urothelial Carcinoma", url: "https://uroweb.org/guidelines/upper-urinary-tract-urothelial-carcinoma", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "5-10% of all urothelial cancers; higher in Balkans (Balkan endemic nephropathy)" },
      { region: "US", prevalence: "~5,000 new cases/year" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "vulvar-cancer",
    name: "Vulvar Cancer",
    alternateNames: ["Vulval Cancer"],
    category: "carcinoma",
    description: "Rare cancer of the external female genitalia. Two pathways: HPV-related (younger women) and lichen sclerosus-related (older women). Surgery is the primary treatment.",
    commonSymptoms: ["Persistent itching", "Vulvar lump/mass", "Bleeding not from menstruation", "Pain/tenderness", "Skin color changes", "Open sore"],
    riskFactors: ["HPV infection", "Lichen sclerosus", "Smoking", "Immunosuppression", "VIN (vulvar intraepithelial neoplasia)", "Age over 60"],
    diagnostics: ["Vulvar biopsy", "Colposcopy", "MRI pelvis", "CT/PET for staging", "Sentinel lymph node biopsy"],
    treatments: [
      { name: "Wide Local Excision", description: "Surgical removal with margins", typicalCostRange: "$10,000 – $25,000" },
      { name: "Radical Vulvectomy", description: "For larger or multifocal tumors", typicalCostRange: "$20,000 – $50,000" },
      { name: "Sentinel Lymph Node Biopsy", description: "Minimally invasive lymph node assessment", typicalCostRange: "$5,000 – $15,000" },
      { name: "Chemoradiation", description: "For locally advanced or unresectable disease", typicalCostRange: "$30,000 – $70,000" },
      { name: "Immunotherapy", description: "Pembrolizumab for recurrent/metastatic (PD-L1+)", typicalCostRange: "$100,000 – $200,000/year" }
    ],
    stages: ["Stage I", "Stage II", "Stage III", "Stage IVA", "Stage IVB"],
    survivalRates: "Stage I: ~86% 5-year; Stage II: ~55-75%; Stage III: ~30-50%; Stage IV: ~15%",
    supportOrganizations: [
      { name: "Foundation for Women's Cancer", url: "https://www.foundationforwomenscancer.org/", description: "US gynecologic cancer support", geography: "US" },
      { name: "The Eve Appeal", url: "https://eveappeal.org.uk/", description: "UK gynecological cancer charity", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Vulvar Cancer", url: "https://www.cancer.gov/types/vulvar", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~6,500 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "MD Anderson"] },
      { region: "UK", prevalence: "~1,400 new cases/year" }
    ],
    lastUpdated: "2026-03-30"
  },
  {
    id: "wilms-tumor",
    name: "Wilms Tumor",
    alternateNames: ["Nephroblastoma", "Wilms' Tumor"],
    category: "other",
    description: "Most common kidney cancer in children. Excellent prognosis with multimodal therapy. Usually diagnosed ages 3-5. Can be bilateral (5-10%). Associated with genetic syndromes (WAGR, Denys-Drash, Beckwith-Wiedemann).",
    commonSymptoms: ["Abdominal mass (painless, firm)", "Abdominal swelling", "Fever", "Blood in urine", "High blood pressure", "Loss of appetite"],
    riskFactors: ["Age 3-5", "WAGR syndrome", "Denys-Drash syndrome", "Beckwith-Wiedemann syndrome", "Family history", "Hemihypertrophy"],
    diagnostics: ["Abdominal ultrasound", "CT/MRI abdomen", "Chest CT", "Surgical pathology after nephrectomy"],
    treatments: [
      { name: "Surgery (Nephrectomy)", description: "Radical nephrectomy with lymph node sampling — primary surgery", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemotherapy", description: "Vincristine + dactinomycin (± doxorubicin) based on stage/histology", typicalCostRange: "$20,000 – $80,000" },
      { name: "Radiation", description: "Flank or whole-abdomen radiation for Stage III-IV", typicalCostRange: "$15,000 – $40,000" },
      { name: "Nephron-Sparing Surgery", description: "For bilateral tumors to preserve renal function", typicalCostRange: "$25,000 – $60,000" }
    ],
    stages: ["Stage I (kidney only)", "Stage II (beyond kidney, completely resected)", "Stage III (residual or nodes)", "Stage IV (lung/liver metastasis)", "Stage V (bilateral)"],
    survivalRates: "Overall: >90% 5-year; Favorable histology: >95%; Anaplastic: ~50-80% depending on stage",
    supportOrganizations: [
      { name: "National Wilms Tumor Study Group (COG)", url: "https://www.childrensoncologygroup.org/", description: "Research group within COG", geography: "US" },
      { name: "Children's Cancer and Leukaemia Group", url: "https://www.cclg.org.uk/", description: "UK pediatric cancer network", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Wilms Tumor", url: "https://www.cancer.gov/types/kidney/patient/wilms-treatment-pdq", type: "website" },
      { title: "St. Jude – Wilms Tumor", url: "https://www.stjude.org/disease/wilms-tumor.html", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~500 new cases/year", notableHospitals: ["St. Jude Children's", "Boston Children's", "Children's Hospital of Philadelphia"] },
      { region: "UK", prevalence: "~80-90 new cases/year", notableHospitals: ["Great Ormond Street Hospital"] },
      { region: "India", prevalence: "Similar incidence but often later presentation", notableHospitals: ["Tata Memorial", "AIIMS"] }
    ],
    lastUpdated: "2026-03-30"
  }
];
