import { CancerEntry } from "./types";

export const cancersExpanded3: CancerEntry[] = [
  {
    id: "Burkitt-lymphoma",
    name: "Burkitt Lymphoma",
    alternateNames: ["Burkitt's Lymphoma"],
    category: "lymphoma",
    description: "A highly aggressive B-cell non-Hodgkin lymphoma characterized by rapid tumor growth and a strong association with the Epstein-Barr virus (EBV). Typically presenting in the jaw or abdomen.",
    commonSymptoms: ["Swelling in the abdomen", "Nausea", "Night sweats", "Swelling of the jaw or facial bones", "Fever"],
    riskFactors: ["EBV infection", "HIV infection", "Endemic in parts of Africa"],
    diagnostics: ["Biopsy (starry sky pattern)", "Bone marrow aspiration", "PET scan", "MYC gene translocation testing"],
    treatments: [
      { name: "Intensive Chemotherapy", description: "Multi-agent intensive chemotherapy like CODOX-M/IVAC", typicalCostRange: "$80,000 – $150,000" },
      { name: "Rituximab", description: "Often combined with chemotherapy protocols", typicalCostRange: "$20,000 – $50,000" }
    ],
    stages: ["Murphy Staging system (pediatric)", "Ann Arbor system (adults)"],
    survivalRates: "70-90% cure rate with modern intensive regimens if diagnosed early.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Rare in US/EU, highly endemic in Sub-Saharan Africa" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Mantle-cell-lymphoma",
    name: "Mantle Cell Lymphoma",
    alternateNames: ["MCL"],
    category: "lymphoma",
    description: "A rare and aggressive type of B-cell lymphoma that often involves the lymph nodes, spleen, and bone marrow. It is characterized by the t(11;14) translation which overexpresses Cyclin D1.",
    commonSymptoms: ["Swollen lymph nodes", "Fever", "Fatigue", "Loss of appetite", "Enlarged spleen"],
    riskFactors: ["Age over 60", "Male sex"],
    diagnostics: ["Lymph node biopsy", "Bone marrow biopsy", "FISH for t(11;14)"],
    treatments: [
      { name: "Chemoimmunotherapy", description: "Aggressive induction (e.g., BR, R-CHOP) followed by consolidation", typicalCostRange: "$100,000+" },
      { name: "BTK Inhibitors", description: "Ibrutinib, Acalabrutinib for relapsed disease", typicalCostRange: "$150,000/year" },
      { name: "CAR T-Cell Therapy", description: "Brexucabtagene autoleucel for relapsed MCL", typicalCostRange: "$400,000+" }
    ],
    survivalRates: "Median survival is 5-7 years; generally considered incurable but manageable.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~4,000 cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Mycosis-fungoides",
    name: "Mycosis Fungoides",
    alternateNames: ["Cutaneous T-Cell Lymphoma MF"],
    category: "lymphoma",
    description: "The most common form of cutaneous T-cell lymphoma. It generally affects the skin but can progress internally. Sezary Syndrome is its leukemic variant.",
    commonSymptoms: ["Red, scaly patches on skin", "Skin plaques or tumors", "Severe itching"],
    riskFactors: ["Age over 50", "Male sex"],
    diagnostics: ["Skin biopsy", "Blood flow cytometry (Sezary cells)"],
    treatments: [
      { name: "Topical Therapies", description: "Steroids, topical chemotherapy (mechlorethamine)", typicalCostRange: "$5,000/year" },
      { name: "Phototherapy", description: "UVB or PUVA light therapy", typicalCostRange: "$10,000/year" },
      { name: "Systemic Therapy", description: "Bexarotene, Romidepsin, or Brentuximab vedotin", typicalCostRange: "$100,000/year" }
    ],
    survivalRates: "Early stage has normal life expectancy. Advanced stage drops to 40% 5-year survival.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "Rare, about 1 in 100,000" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Squamous-cell-carcinoma-skin",
    name: "Squamous Cell Carcinoma of the Skin",
    alternateNames: ["cSCC", "Cutaneous Squamous Cell Carcinoma"],
    category: "carcinoma",
    description: "The second most common form of skin cancer. It arises from the squamous cells in the epidermis and can be aggressive if left untreated.",
    commonSymptoms: ["A firm, red nodule", "A flat sore with a scaly crust", "A new sore on an old scar"],
    riskFactors: ["Sun exposure", "Fair skin", "History of sunburns", "Immunosuppression"],
    diagnostics: ["Skin biopsy"],
    treatments: [
      { name: "Mohs Surgery", description: "Precise surgical removal, checking margins dynamically", typicalCostRange: "$1,500 – $4,000" },
      { name: "Excisional Surgery", description: "Cutting out the tumor and a margin of healthy skin", typicalCostRange: "$500 – $2,000" },
      { name: "Cemiplimab", description: "Immunotherapy for locally advanced or metastatic cSCC", typicalCostRange: "$150,000/year" }
    ],
    survivalRates: "Highly curable when caught early (>95%).",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Millions of cases annually" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Basal-cell-carcinoma",
    name: "Basal Cell Carcinoma",
    alternateNames: ["BCC"],
    category: "carcinoma",
    description: "The most common type of skin cancer globally. It grows very slowly and rarely metastasizes but can cause significant local destruction.",
    commonSymptoms: ["Pearly or waxy bump", "Flat, flesh-colored or brown scar-like lesion", "Bleeding or scabbing sore that heals and returns"],
    riskFactors: ["Sun exposure", "Fair skin", "Older age"],
    diagnostics: ["Skin biopsy"],
    treatments: [
      { name: "Mohs Surgery", description: "Standard for facial BCCs", typicalCostRange: "$1,500 – $4,000" },
      { name: "Topical Creams", description: "Imiquimod or 5-FU for superficial BCCs", typicalCostRange: "$200 – $500" },
      { name: "Vismodegib", description: "Hedgehog pathway inhibitor for advanced BCC", typicalCostRange: "$150,000/year" }
    ],
    survivalRates: ">99% curable.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Extremely common" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Merkel-cell-carcinoma",
    name: "Merkel Cell Carcinoma",
    alternateNames: ["MCC", "Neuroendocrine Carcinoma of the Skin"],
    category: "carcinoma",
    description: "A rare and highly aggressive skin cancer that is prone to recurring and spreading. Often linked to the Merkel cell polyomavirus.",
    commonSymptoms: ["Fast-growing, painless, firm, shiny nodule (red, pink, or purple)"],
    riskFactors: ["Merkel cell polyomavirus (MCPyV)", "Immunosuppression", "Excessive sun exposure", "Age over 50"],
    diagnostics: ["Skin biopsy", "Sentinel lymph node biopsy", "PET/CT"],
    treatments: [
      { name: "Wide Local Excision", description: "Surgical removal with wide margins", typicalCostRange: "$5,000 – $15,000" },
      { name: "Radiation Therapy", description: "Often used post-surgery to prevent recurrence", typicalCostRange: "$20,000 – $50,000" },
      { name: "Avelumab or Pembrolizumab", description: "Immunotherapy for advanced/metastatic MCC", typicalCostRange: "$150,000/year" }
    ],
    survivalRates: "Overall 5-year survival is roughly 60%.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~3,000 cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Nasopharyngeal-carcinoma",
    name: "Nasopharyngeal Carcinoma",
    alternateNames: ["NPC", "Nasopharynx Cancer"],
    category: "carcinoma",
    description: "A rare cancer of the head and neck that starts in the nasopharynx (upper part of the throat behind the nose). Strong link to Epstein-Barr virus.",
    commonSymptoms: ["A lump in the neck", "Hearing loss or ear fullness", "Nasal congestion/bleeding", "Headaches"],
    riskFactors: ["EBV infection", "Diets high in salt-cured meats/fish", "Southeast Asian or Chinese ancestry"],
    diagnostics: ["Nasal endoscopy", "Biopsy", "EBV DNA blood test", "MRI/PET staging"],
    treatments: [
      { name: "Radiation Therapy", description: "Mainstay of treatment for early-stage NPC", typicalCostRange: "$30,000 – $70,000" },
      { name: "Concurrent Chemoradiation", description: "Standard for advanced stages", typicalCostRange: "$80,000 – $150,000" },
      { name: "Immunotherapy", description: "Toripalimab represents a major breakthrough", typicalCostRange: "$150,000/year" }
    ],
    survivalRates: "70-80% overall 5-year survival.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Asia", prevalence: "Highly endemic in Southern China and Southeast Asia" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Salivary-gland-cancer",
    name: "Salivary Gland Cancer",
    alternateNames: ["Parotid Gland Cancer", "Submandibular Gland Cancer", "Mucoepidermoid Carcinoma"],
    category: "carcinoma",
    description: "Rare cancers that occur in the salivary glands. The parotid gland is the most common site. Consists of many varied histologic subtypes (e.g. adenoid cystic).",
    commonSymptoms: ["A lump near the jaw, neck, or mouth", "Numbness or weakness in part of the face", "Persistent pain in the area"],
    riskFactors: ["Prior radiation exposure", "Age over 60"],
    diagnostics: ["Ultrasound/MRI of the neck", "FNA biopsy", "Incisional biopsy"],
    treatments: [
      { name: "Surgery", description: "Resection of the gland (e.g., parotidectomy) often sparing facial nerves if possible", typicalCostRange: "$20,000 – $60,000" },
      { name: "Radiation Therapy", description: "Post-operative to improve local control", typicalCostRange: "$30,000 – $70,000" }
    ],
    survivalRates: "Overall 5-year survival is ~70-75%, but heavily dependent on exact histologic subtype and stage.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~2,500 new cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Thyroid-papillary",
    name: "Papillary Thyroid Cancer",
    alternateNames: ["PTC"],
    category: "carcinoma",
    description: "The most common form of thyroid cancer, representing about 80% of all diagnoses. It tends to grow slowly and often spreads to lymph nodes in the neck, but it is highly curable.",
    commonSymptoms: ["A lump or nodule in the neck", "Hoarseness", "Difficulty swallowing"],
    riskFactors: ["Radiation exposure in childhood", "Family history", "Female sex"],
    diagnostics: ["Neck ultrasound", "FNA biopsy", "Blood tests (TSH, free T4)"],
    treatments: [
      { name: "Thyroidectomy", description: "Total or lobectomy depending on tumor size", typicalCostRange: "$15,000 – $40,000" },
      { name: "Radioactive Iodine (RAI)", description: "Used post-surgery to destroy remaining thyroid tissue/micro-metastases", typicalCostRange: "$5,000 – $15,000" },
      { name: "Thyroid Hormone Suppression", description: "Levothyroxine to suppress TSH and prevent recurrence", typicalCostRange: "$200/year" }
    ],
    survivalRates: ">99% 5-year survival for localized/regional disease.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Very high incidence, especially in females" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Thyroid-follicular",
    name: "Follicular Thyroid Cancer",
    alternateNames: ["FTC", "Hurthle Cell Carcinoma"],
    category: "carcinoma",
    description: "The second most common thyroid cancer. Unlike papillary, it tends to spread via the bloodstream to lungs and bones rather than lymph nodes.",
    commonSymptoms: ["Neck mass"],
    riskFactors: ["Diet low in iodine", "Radiation exposure"],
    diagnostics: ["FNA biopsy (difficult to distinguish from benign adenoma without surgical excision)", "Ultrasound"],
    treatments: [
      { name: "Thyroidectomy and RAI", description: "Standard of care, similar to papillary", typicalCostRange: "$20,000 – $50,000" }
    ],
    survivalRates: "~98% overall 5-year survival.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Accounts for 10-15% of thyroid cancers" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Pheochromocytoma",
    name: "Pheochromocytoma",
    alternateNames: ["Paraganglioma (extra-adrenal)"],
    category: "other",
    description: "A rare, usually noncancerous (but sometimes malignant) tumor that develops in the adrenal gland's chromaffin cells. It secretes excessive amounts of catecholamines (epinephrine and norepinephrine).",
    commonSymptoms: ["Episodic severe high blood pressure", "Heavy sweating", "Rapid heartbeat", "Severe headaches", "Tremors"],
    riskFactors: ["MEN 2 syndrome", "Von Hippel-Lindau (VHL) disease", "Neurofibromatosis type 1"],
    diagnostics: ["24-hour urine collection for metanephrines/catecholamines", "Blood test for metanephrines", "CT/MRI of the abdomen", "MIBG scan"],
    treatments: [
      { name: "Laparoscopic Adrenalectomy", description: "Surgical removal of the adrenal gland. Pre-operative alpha blockade (phenoxybenzamine) is absolutely required to prevent hypertensive crisis.", typicalCostRange: "$30,000 – $60,000" },
      { name: "Metyrosine", description: "Drug used to lower catecholamine production", typicalCostRange: "$High" }
    ],
    survivalRates: "Excellent for benign tumors. Malignant tumors have a highly variable 5-year survival rate (~50%).",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Rare, about 2 to 8 cases per million" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Primary-peritoneal",
    name: "Primary Peritoneal Cancer",
    alternateNames: ["PPC", "Extra-Ovarian Primary Peritoneal Carcinoma"],
    category: "carcinoma",
    description: "A rare cancer that develops in the peritoneum (the tissue lining the abdominal wall). It is histologically identical to epithelial ovarian cancer and is treated the exact same way.",
    commonSymptoms: ["Abdominal bloating", "Pelvic pressure", "Feeling full quickly", "Unexplained weight gain or loss (ascites)"],
    riskFactors: ["BRCA1 or BRCA2 gene mutations", "Age over 60", "Endometriosis"],
    diagnostics: ["CA-125 blood test", "Transvaginal ultrasound/CT abdomen", "Paracentesis (fluid testing)"],
    treatments: [
      { name: "Cytoreductive Surgery (Debulking)", description: "Surgery to remove as much visible tumor as possible", typicalCostRange: "$50,000 – $100,000" },
      { name: "Chemotherapy", description: "Carboplatin and Paclitaxel", typicalCostRange: "$40,000 – $80,000" },
      { name: "PARP Inhibitors", description: "Olaparib or Niraparib for maintenance therapy", typicalCostRange: "$150,000/year" }
    ],
    survivalRates: "Similar to advanced ovarian cancer (~40-50% 5-year survival).",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Rare, typically grouped with epithelial ovarian cancer stats" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Fallopian-tube",
    name: "Fallopian Tube Cancer",
    alternateNames: ["Primary Fallopian Tube Carcinoma"],
    category: "carcinoma",
    description: "A very rare cancer originating in the fallopian tubes. Modern research suggests many 'ovarian' cancers actually originate in the fimbriae of the fallopian tubes.",
    commonSymptoms: ["Abnormal vaginal bleeding", "Pelvic pain", "Watery vaginal discharge", "Pelvic mass"],
    riskFactors: ["BRCA1/BRCA2 mutations", "Nulliparity (never having been pregnant)"],
    diagnostics: ["Pelvic exam", "Ultrasound", "CA-125 test"],
    treatments: [
      { name: "Surgery and Chemotherapy", description: "Treated identically to primary peritoneal and epithelial ovarian cancer", typicalCostRange: "$50,000 – $150,000" }
    ],
    survivalRates: "Varies by stage, historically ~50% 5-year survival overall.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Less than 1% of all gynecologic cancers" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Vaginal-cancer",
    name: "Vaginal Cancer",
    alternateNames: ["Squamous Cell Carcinoma of the Vagina"],
    category: "carcinoma",
    description: "A rare cancer that occurs in your vagina. It most commonly affects the squamous cells lining the vaginal surface.",
    commonSymptoms: ["Unusual vaginal bleeding (often post-coital)", "Watery or foul-smelling discharge", "Pelvic pain", "Pain during intercourse", "A lump in the vagina"],
    riskFactors: ["HPV infection (high-risk types)", "Prior cervical cancer history", "DES (diethylstilbestrol) exposure in utero (clear cell adenocarcinoma)"],
    diagnostics: ["Pelvic exam with Pap test", "Colposcopy with biopsy", "MRI of the pelvis"],
    treatments: [
      { name: "Radiation Therapy", description: "Both external beam and brachytherapy; the primary treatment for most stages", typicalCostRange: "$40,000 – $80,000" },
      { name: "Vaginectomy", description: "Surgery to remove part or all of the vagina, often combined with lymphadenectomy", typicalCostRange: "$30,000 – $70,000" },
      { name: "Chemotherapy", description: "Used concurrently with radiation for advanced disease", typicalCostRange: "$20,000 – $50,000" }
    ],
    survivalRates: "Localized: ~66% 5-year survival. Overall ~50%.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~8,000 new cases/year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Penile-cancer",
    name: "Penile Cancer",
    alternateNames: ["Carcinoma of the Penis"],
    category: "carcinoma",
    description: "A rare malignancy targeting the skin and tissues of the penis, almost always squamous cell carcinoma. Circumcision shortly after birth virtually eliminates the risk.",
    commonSymptoms: ["A sore or lump on the penis that won't heal", "Bleeding", "Foul-smelling discharge beneath the foreskin", "Changes in skin color", "Swollen groin lymph nodes"],
    riskFactors: ["HPV infection", "Phimosis (inability to retract foreskin)", "Poor hygiene", "Tobacco use", "Age over 60"],
    diagnostics: ["Biopsy of the lesion", "Ultrasound/MRI of the penis", "Inguinal lymph node biopsy"],
    treatments: [
      { name: "Local Excision or Laser Surgery", description: "For early-stage lesions, aiming for organ preservation", typicalCostRange: "$10,000 – $30,000" },
      { name: "Penectomy", description: "Partial or total amputation of the penis for deeply invasive tumors", typicalCostRange: "$20,000 – $50,000" },
      { name: "Lymph Node Dissection", description: "Groin node dissection if nodes are involved", typicalCostRange: "$20,000 – $40,000" }
    ],
    survivalRates: "Localized: ~85% 5-year survival. If it spreads to lymph nodes, survival drops to ~50%.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~2,000 cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Testicular-non-seminoma",
    name: "Testicular Non-Seminoma",
    alternateNames: ["Embryonal Carcinoma", "Yolk Sac Tumor", "Choriocarcinoma"],
    category: "other",
    description: "A type of germ cell tumor in the testicle. It tends to grow and spread more quickly than seminomas. Often a mix of different cell types.",
    commonSymptoms: ["Painless lump in testicle", "Scrotal heaviness", "Dull ache in abdomen/groin"],
    riskFactors: ["Cryptorchidism (undescended testicle)", "Family history", "White race"],
    diagnostics: ["Scrotal Ultrasound", "Blood tests (AFP, beta-hCG, LDH rapidly elevate)", "Radical inguinal orchiectomy (biopsy is contraindicated)"],
    treatments: [
      { name: "Radical Orchiectomy", description: "Surgical removal of the complete testicle", typicalCostRange: "$10,000 – $20,000" },
      { name: "BEP Chemotherapy", description: "Bleomycin, Etoposide, and Cisplatin; extremely curative even in metastatic stages", typicalCostRange: "$40,000 – $80,000" },
      { name: "Retroperitoneal Lymph Node Dissection (RPLND)", description: "Major surgery to remove abdominal lymph nodes if cancer persists post-chemo", typicalCostRange: "$30,000 – $60,000" }
    ],
    survivalRates: ">95% curable overall. Even advanced Stage III disease has an ~80% cure rate.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Testicular cancer globally is very common in young men (age 15-35)" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Spinal-cord-tumor",
    name: "Spinal Cord Tumor",
    alternateNames: ["Intramedullary/Extramedullary Tumors"],
    category: "cns",
    description: "Tumors that develop within or near the spinal cord. They can be benign (like meningiomas or schwannomas) or malignant (astrocytomas, ependymomas).",
    commonSymptoms: ["Back pain (especially radiating)", "Muscle weakness in arms or legs", "Difficulty walking", "Loss of bowel or bladder control", "Numbness/tingling"],
    riskFactors: ["Neurofibromatosis 1 or 2", "Von Hippel-Lindau disease"],
    diagnostics: ["MRI of the spine with contrast", "Lumbar puncture (rarely)", "Biopsy during surgery"],
    treatments: [
      { name: "Microsurgical Resection", description: "Delicate surgery to remove the tumor without damaging spinal nerves", typicalCostRange: "$50,000 – $150,000" },
      { name: "Stereotactic Radiosurgery (CyberKnife)", description: "Focused radiation for inoperable tumors", typicalCostRange: "$30,000 – $80,000" },
      { name: "Corticosteroids", description: "Dexamethasone to rapidly reduce spinal cord swelling and prevent paralysis", typicalCostRange: "$500 – $2,000" }
    ],
    survivalRates: "Highly dependent on whether benign (curable) or malignant (moderate to poor).",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Primary spinal tumors are rare compared to brain tumors" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Ependymoma",
    name: "Ependymoma",
    alternateNames: ["Ependymal Tumor"],
    category: "cns",
    description: "A type of tumor that forms in the brain or spinal cord, beginning in the ependymal cells that line the passageways creating cerebrospinal fluid (CSF). More common in children.",
    commonSymptoms: ["Headaches", "Nausea/vomiting", "Seizures", "Weakness", "Hydrocephalus (fluid buildup in brain)"],
    riskFactors: ["Neurofibromatosis type 2 (NF2)"],
    diagnostics: ["MRI of brain and spine", "Lumbar puncture", "Surgical biopsy"],
    treatments: [
      { name: "Maximal Safe Resection", description: "Total removal is the gold standard for long-term survival", typicalCostRange: "$60,000 – $150,000" },
      { name: "Proton Beam Therapy", description: "Highly precise radiation to limit damage to developing pediatric brains", typicalCostRange: "$80,000 – $200,000" }
    ],
    survivalRates: "5-year survival is roughly 80% for children, depending on the extent of resection.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Rare, accounting for ~5% of childhood brain tumors" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Craniopharyngioma",
    name: "Craniopharyngioma",
    alternateNames: ["Adamantinomatous or Papillary Craniopharyngioma"],
    category: "cns",
    description: "A rare type of noncancerous (benign) brain tumor that develops near the pituitary gland (the master endocrine gland) at the base of the brain. Though benign, it can cause severe disability by pressing on the optic nerve and pituitary.",
    commonSymptoms: ["Gradual vision changes (bitemporal hemianopsia)", "Growth failure in children", "Hormonal imbalances (hypopituitarism)", "Excessive thirst/urination (diabetes insipidus)", "Headaches"],
    riskFactors: ["None known"],
    diagnostics: ["MRI or CT of the brain", "Endocrine (hormone) blood panels", "Vision field testing"],
    treatments: [
      { name: "Endoscopic Endonasal Surgery", description: "Removal of the tumor via the nasal passages", typicalCostRange: "$40,000 – $100,000" },
      { name: "Radiation Therapy", description: "Used if the tumor cannot be completely removed to prevent regrowth", typicalCostRange: "$30,000 – $60,000" },
      { name: "Hormone Replacement", description: "Lifelong hormonal supplementation is almost always necessary post-surgery", typicalCostRange: "$2,000 – $10,000/year" }
    ],
    survivalRates: "Excellent (>90%), but morbidity (chronic endocrine and visual issues) is very high.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Bimodal distribution: ages 5-14 and 50-74." }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Chordoma",
    name: "Chordoma",
    alternateNames: ["Bone Chordoma"],
    category: "sarcoma",
    description: "A very rare type of slow-growing bone cancer that can occur anywhere along the spine, from the base of the skull to the tailbone (sacrum). Originates from cellular remnants of the notochord.",
    commonSymptoms: ["Pain or numbness radiating into arms/legs", "Changes in bowel or bladder function", "Double vision or swallowing difficulty (if skull base)"],
    riskFactors: ["Genetic predisposition (familial chordoma is very rare, involves TBXT gene)"],
    diagnostics: ["MRI of spine/skull base", "CT scan for bone involvement", "CT-guided biopsy"],
    treatments: [
      { name: "En Bloc Resection", description: "Removing the tumor in one piece with wide margins (extremely difficult in the spine/skull)", typicalCostRange: "$100,000 – $250,000" },
      { name: "Proton Beam Radiation", description: "High-dose radiation required because chordomas are notoriously radioresistant", typicalCostRange: "$100,000 – $200,000" },
      { name: "Targeted Therapy", description: "Imatinib or other TKIs for advanced disease", typicalCostRange: "$100,000/year" }
    ],
    survivalRates: "Median survival is roughly 10 years, heavily dependent on ability to achieve complete surgical resection.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~300 cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Small-intestine",
    name: "Small Intestine Cancer",
    alternateNames: ["Small Bowel Cancer", "Adenocarcinoma of the Small Intestine"],
    category: "carcinoma",
    description: "A rare cancer that develops in the tissues of the small intestine. Despite the small intestine making up 75% of the digestive tract's length, cancers here are much rarer than colon or stomach cancer.",
    commonSymptoms: ["Abdominal pain/cramping", "Unexplained weight loss", "Blood in stool", "A lump in the abdomen", "Bowel obstruction (vomiting)"],
    riskFactors: ["Crohn's disease", "Celiac disease", "FAP (Familial adenomatous polyposis)", "Lynch syndrome", "Peutz-Jeghers syndrome"],
    diagnostics: ["Capsule endoscopy", "Double-balloon enteroscopy", "CT enterography", "Biopsy"],
    treatments: [
      { name: "Small Bowel Resection", description: "Surgical removal of the affected intestine and regional lymph nodes", typicalCostRange: "$30,000 – $70,000" },
      { name: "Chemotherapy", description: "FOLFOX or CAPOX regimens, similar to colorectal cancer protocols", typicalCostRange: "$50,000 – $100,000" }
    ],
    survivalRates: "Localized: ~85%. Regional: ~75%. Metastatic: ~40%. Overall 5-year is ~68%.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "US", prevalence: "~12,000 cases per year" }],
    lastUpdated: "2026-03-30"
  },
  {
    id: "Ampullary-cancer",
    name: "Ampullary Cancer",
    alternateNames: ["Carcinoma of the Ampulla of Vater"],
    category: "carcinoma",
    description: "A rare cancer that forms in the area where the bile duct and pancreatic duct join and empty into the small intestine. Because it often blocks the bile duct early on, it is usually found earlier than pancreatic cancer.",
    commonSymptoms: ["Jaundice (yellowing of skin/eyes)", "Pale, greasy stools", "Dark urine", "Abdominal pain", "Unexplained weight loss"],
    riskFactors: ["FAP (Familial adenomatous polyposis)", "HNPCC (Lynch syndrome)", "Older age"],
    diagnostics: ["ERCP (Endoscopic retrograde cholangiopancreatography)", "Endoscopic Ultrasound (EUS) with biopsy", "CT/MRI of the abdomen"],
    treatments: [
      { name: "Whipple Procedure (Pancreaticoduodenectomy)", description: "Major, complex surgery removing the head of pancreas, duodenum, gallbladder, and bile duct", typicalCostRange: "$80,000 – $200,000" },
      { name: "Chemoradiation", description: "Adjuvant treatment to reduce recurrence risk", typicalCostRange: "$50,000 – $100,000" }
    ],
    survivalRates: "Significantly better than pancreatic ductal adenocarcinoma; 5-year survival is 40-50% for operable cases.",
    supportOrganizations: [],
    externalResources: [],
    geographyNotes: [{ region: "Global", prevalence: "Extremely rare, less than 1% of GI malignancies" }],
    lastUpdated: "2026-03-30"
  }
];
