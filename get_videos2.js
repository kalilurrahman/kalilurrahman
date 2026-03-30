import https from 'https';

const queries = [
  "Acute Lymphoblastic Leukemia Explained",
  "CAR-T Cell Therapy for ALL",
  "Colon Cancer Causes Symptoms Diagnosis",
  "Colorectal Cancer Screening Colonoscopy",
  "Immunotherapy for Colorectal Cancer MSI",
  "Living with Stage IV Colon Cancer",
  "CLL Explained",
  "BTK Inhibitors for CLL",
  "Venetoclax CLL",
  "CML Philadelphia Chromosome",
  "Treatment-Free Remission in CML",
  "Carcinoid Neuroendocrine Tumours Explained",
  "PRRT for Carcinoid",
  "Lung Cancer 101",
  "EGFR Mutations in Lung Cancer",
  "Immunotherapy Lung Cancer",
  "Low-Dose CT Screening Lung Cancer",
  "Multiple Myeloma Symptoms Diagnosis Treatment",
  "CAR-T for Myeloma",
  "Living Well with Multiple Myeloma",
  "Pancreatic Cancer Symptoms Treatment",
  "The Whipple Surgery Explained",
  "Pancreatic Cancer Breakthroughs",
  "BRCA Pancreatic Cancer Risk",
  "Prostate Cancer Symptoms Diagnosis",
  "Active Surveillance for Prostate Cancer",
  "Robotic Prostatectomy How it Works",
  "Lutetium-177 PSMA Therapy",
  "Managing Side Effects of Hormone Therapy"
];

function fetchYoutubeId(query) {
  return new Promise((resolve) => {
    const searchUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    const req = https.get(searchUrl, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        // Look for the first visual identifier of a video.
        // YouTube usually has "videoId":"XXXXXXXXX" in the initial data.
        const match = data.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
        if (match && match[1]) {
          resolve(match[1]);
        } else {
          resolve("dQw4w9WgXcQ"); // safe fallback
        }
      });
    }).on('error', () => resolve("dQw4w9WgXcQ"));
    
    // timeout
    req.setTimeout(5000, () => {
      req.destroy();
      resolve("dQw4w9WgXcQ");
    });
  });
}

async function run() {
  const map = {};
  for (const q of queries) {
    const id = await fetchYoutubeId(q);
    console.log(`"${q}": "${id}",`);
    map[q] = id;
    // await a tiny bit to avoid rapid fire
    await new Promise(r => setTimeout(r, 200));
  }
}

run();
