// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://kalilurrahman.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const today = new Date().toISOString().slice(0, 10);

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/digital-hub", changefreq: "weekly", priority: "0.9" },
  { path: "/knowledge-hub", changefreq: "weekly", priority: "0.9" },
  { path: "/ai-agents", changefreq: "weekly", priority: "0.9" },
  { path: "/apps-portfolio", changefreq: "weekly", priority: "0.9" },
  { path: "/cancer-book", changefreq: "monthly", priority: "0.7" },
  { path: "/profile/ai-advisor", changefreq: "monthly", priority: "0.8" },
  { path: "/profile/gcc-advisor", changefreq: "monthly", priority: "0.8" },
  { path: "/profile/coe-champion", changefreq: "monthly", priority: "0.8" },
  { path: "/profile/digital-transformation", changefreq: "monthly", priority: "0.8" },
  { path: "/install", changefreq: "yearly", priority: "0.3" },
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
