import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, X, ExternalLink, ChevronDown, ChevronUp,
  BookOpen, Globe, Activity, AlertCircle, Stethoscope,
  FlaskConical, Users, FileText, MapPin, Dna, Play, Youtube
} from "lucide-react";

import { cancersAC } from "@/data/cancer-book/cancers-a-c";
import { cancersDG } from "@/data/cancer-book/cancers-d-g";
import { cancersHL } from "@/data/cancer-book/cancers-h-l";
import { cancersMP } from "@/data/cancer-book/cancers-m-p";
import { cancersQZ } from "@/data/cancer-book/cancers-q-z";
import { cancersExpanded } from "@/data/cancer-book/cancers-expanded";
import { cancersExpanded2 } from "@/data/cancer-book/cancers-expanded-2";
import { cancersExpanded3 } from "@/data/cancer-book/cancers-expanded-3";
import type { CancerEntry, CancerCategory } from "@/data/cancer-book/types";

const allCancers: CancerEntry[] = [
  ...cancersAC,
  ...cancersDG,
  ...cancersHL,
  ...cancersMP,
  ...cancersQZ,
  ...cancersExpanded,
  ...cancersExpanded2,
  ...cancersExpanded3,
].sort((a, b) => a.name.localeCompare(b.name));

const CATEGORY_META: Record<CancerCategory, { label: string; color: string; bg: string; ring: string }> = {
  carcinoma: { label: "Carcinoma",  color: "text-teal-400",   bg: "bg-teal-400/10 border-teal-400/20",   ring: "ring-teal-400/40" },
  sarcoma:   { label: "Sarcoma",    color: "text-amber-400",  bg: "bg-amber-400/10 border-amber-400/20",  ring: "ring-amber-400/40" },
  lymphoma:  { label: "Lymphoma",   color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20",ring: "ring-purple-400/40" },
  leukemia:  { label: "Leukemia",   color: "text-rose-400",   bg: "bg-rose-400/10 border-rose-400/20",   ring: "ring-rose-400/40" },
  melanoma:  { label: "Melanoma",   color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20", ring: "ring-orange-400/40" },
  cns:       { label: "CNS/Brain",  color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/20",   ring: "ring-blue-400/40" },
  other:     { label: "Other",      color: "text-slate-400",  bg: "bg-slate-400/10 border-slate-400/20", ring: "ring-slate-400/40" },
};

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  website:  <Globe className="w-3 h-3" />,
  pdf:      <FileText className="w-3 h-3" />,
  research: <FlaskConical className="w-3 h-3" />,
  video:    <Play className="w-3 h-3" />,
};

function CategoryBadge({ category }: { category: CancerCategory }) {
  const meta = CATEGORY_META[category];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-sm border ${meta.bg} ${meta.color}`}>
      {meta.label}
    </span>
  );
}

// ── Video embed component ──────────────────────────────────────────────────
function VideoEmbed({ youtubeId, vimeoId, title, channel, durationMins }: {
  youtubeId?: string; vimeoId?: string; title: string; channel: string; durationMins?: number;
}) {
  const [active, setActive] = useState(false);

  const isVimeo = !!vimeoId;
  const videoSrc = isVimeo 
    ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1`
    : `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    
  const thumbSrc = isVimeo
    ? `https://vumbnail.com/${vimeoId}.jpg`
    : `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;

  if (active) {
    return (
      <div className="rounded-sm overflow-hidden bg-black aspect-video w-full">
        <iframe
          className="w-full h-full"
          src={videoSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="group relative w-full aspect-video bg-card border border-border rounded-sm overflow-hidden hover:border-red-500/50 transition-all"
    >
      {/* YouTube thumbnail */}
      <img
        src={thumbSrc}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          if (!isVimeo) {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/default.jpg`;
          } else {
             (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550837549-165f617631bd?q=80&w=400&fit=crop"; 
          }
        }}
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-5 h-5 text-white fill-white ml-1" />
        </div>
      </div>
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 px-3 py-2 text-left">
        <p className="text-white text-xs font-medium leading-tight line-clamp-1">{title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          {isVimeo ? (
            <Play className="w-3 h-3 text-blue-400" />
          ) : (
            <Youtube className="w-3 h-3 text-red-400" />
          )}
          <span className="text-gray-300 text-[10px]">{channel}</span>
          {durationMins && (
            <span className="text-gray-400 text-[10px] ml-auto">{durationMins} min</span>
          )}
        </div>
      </div>
    </button>
  );
}

// ── Detail panel ─────────────────────────────────────────────────────────────
function CancerDetailPanel({ cancer, onClose }: { cancer: CancerEntry; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>("overview");
  const toggle = (s: string) => setOpenSection(prev => prev === s ? null : s);

  const Section = ({
    id, icon, title, children, badge,
  }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode; badge?: number }) => (
    <div className="border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => toggle(id)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card hover:bg-primary/5 transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-primary">{icon}</span>
          {title}
          {badge !== undefined && (
            <span className="text-[10px] font-mono text-muted-foreground bg-border px-1.5 py-0.5 rounded-sm">{badge}</span>
          )}
        </span>
        {openSection === id
          ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {openSection === id && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="px-4 py-4 bg-background/50 text-sm text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 pt-14"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.28, type: "spring", damping: 26, stiffness: 320 }}
        className="w-full max-w-3xl bg-background border border-border rounded-sm shadow-2xl mb-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border">
          <div className="flex-1 pr-4">
            <CategoryBadge category={cancer.category} />
            <h2 className="font-serif text-2xl text-foreground mt-2 mb-1">{cancer.name}</h2>
            {cancer.alternateNames.length > 0 && (
              <p className="text-xs text-muted-foreground font-mono">
                Also known as: {cancer.alternateNames.join(" · ")}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-sm hover:bg-border transition-colors text-muted-foreground hover:text-foreground shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Survival banner */}
        {cancer.survivalRates && (
          <div className="mx-6 mt-4 px-4 py-3 bg-primary/10 border border-primary/20 rounded-sm flex items-start gap-2">
            <Activity className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-xs font-medium text-foreground leading-relaxed">{cancer.survivalRates}</span>
          </div>
        )}

        {/* Accordion */}
        <div className="p-6 space-y-2">

          <Section id="overview" icon={<BookOpen className="w-4 h-4" />} title="Overview">
            <p className="leading-relaxed">{cancer.description}</p>
          </Section>

          <Section id="symptoms" icon={<AlertCircle className="w-4 h-4" />} title="Common Symptoms"
            badge={cancer.commonSymptoms.length}>
            <ul className="space-y-1">
              {cancer.commonSymptoms.map(s => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-primary shrink-0 mt-1">→</span>{s}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="risk" icon={<Dna className="w-4 h-4" />} title="Risk Factors"
            badge={cancer.riskFactors.length}>
            <div className="flex flex-wrap gap-2">
              {cancer.riskFactors.map(r => (
                <span key={r} className="px-2 py-1 text-xs bg-border text-foreground rounded-sm">{r}</span>
              ))}
            </div>
          </Section>

          <Section id="diagnostics" icon={<Stethoscope className="w-4 h-4" />} title="Diagnostics"
            badge={cancer.diagnostics.length}>
            <ul className="space-y-1">
              {cancer.diagnostics.map(d => (
                <li key={d} className="flex items-start gap-2">
                  <span className="text-primary shrink-0 mt-1">•</span>{d}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="treatments" icon={<FlaskConical className="w-4 h-4" />} title="Treatments"
            badge={cancer.treatments.length}>
            <div className="space-y-3">
              {cancer.treatments.map(t => (
                <div key={t.name} className="p-3 bg-card border border-border rounded-sm">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-semibold text-foreground text-xs">{t.name}</span>
                    {t.typicalCostRange && (
                      <span className="text-[10px] text-muted-foreground font-mono shrink-0">{t.typicalCostRange}</span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {cancer.stages && (
            <Section id="stages" icon={<Activity className="w-4 h-4" />} title="Staging"
              badge={cancer.stages.length}>
              <div className="flex flex-wrap gap-2">
                {cancer.stages.map((s, i) => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-sm">
                    <span className="font-mono text-muted-foreground">{i + 1}.</span>{s}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* ── Videos section ── */}
          {cancer.videos && cancer.videos.length > 0 && (
            <Section id="videos" icon={<Youtube className="w-4 h-4" />} title="Watch & Learn"
              badge={cancer.videos.length}>
              <p className="text-xs text-muted-foreground mb-3">
                Curated educational videos from trusted medical sources. Click any thumbnail to play inline.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cancer.videos.map((v, i) => (
                  <VideoEmbed
                    key={v.youtubeId || v.vimeoId || i}
                    youtubeId={v.youtubeId}
                    vimeoId={v.vimeoId}
                    title={v.title}
                    channel={v.channel}
                    durationMins={v.durationMins}
                  />
                ))}
              </div>
            </Section>
          )}

          <Section id="geography" icon={<MapPin className="w-4 h-4" />} title="Geography & Prevalence"
            badge={cancer.geographyNotes.length}>
            <div className="space-y-3">
              {cancer.geographyNotes.map(g => (
                <div key={g.region} className="p-3 bg-card border border-border rounded-sm">
                  <span className="text-primary font-semibold text-xs">{g.region}</span>
                  {g.prevalence && <p className="text-xs mt-1">{g.prevalence}</p>}
                  {g.screeningPrograms && (
                    <p className="text-xs mt-1 text-amber-400/90">📋 {g.screeningPrograms}</p>
                  )}
                  {g.notableHospitals && g.notableHospitals.length > 0 && (
                    <p className="text-xs mt-1 text-muted-foreground">
                      🏥 {g.notableHospitals.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section id="support" icon={<Users className="w-4 h-4" />} title="Support Organisations"
            badge={cancer.supportOrganizations.length}>
            <div className="space-y-2">
              {cancer.supportOrganizations.map(org => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between p-3 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors group"
                >
                  <div>
                    <span className="text-xs font-semibold text-primary group-hover:underline">{org.name}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{org.description}</p>
                    <span className="text-[10px] text-muted-foreground mt-1 inline-block font-mono">{org.geography}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </Section>

          <Section id="resources" icon={<Globe className="w-4 h-4" />} title="External Resources"
            badge={cancer.externalResources.length}>
            <div className="space-y-1.5">
              {cancer.externalResources.map(r => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-sm transition-colors group"
                >
                  <span className="text-primary shrink-0">{RESOURCE_ICONS[r.type] ?? <Globe className="w-3 h-3" />}</span>
                  <span className="text-sm text-foreground group-hover:text-primary group-hover:underline transition-colors">{r.title}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto shrink-0" />
                </a>
              ))}
            </div>
          </Section>

        </div>

        <div className="px-6 pb-5 text-right">
          <span className="text-[10px] text-muted-foreground font-mono">Last updated: {cancer.lastUpdated}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function CancerBook() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CancerCategory | "all">("all");
  const [selectedCancer, setSelectedCancer] = useState<CancerEntry | null>(null);

  const categories: Array<CancerCategory | "all"> = [
    "all", "carcinoma", "leukemia", "lymphoma", "sarcoma", "melanoma", "cns", "other",
  ];

  const filtered = useMemo(() => {
    return allCancers.filter(c => {
      const matchCat = activeCategory === "all" || c.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchQ = !q || (
        c.name.toLowerCase().includes(q) ||
        c.alternateNames.some(n => n.toLowerCase().includes(q)) ||
        c.description.toLowerCase().includes(q) ||
        c.commonSymptoms.some(s => s.toLowerCase().includes(q)) ||
        c.riskFactors.some(r => r.toLowerCase().includes(q))
      );
      return matchCat && matchQ;
    });
  }, [query, activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Partial<Record<CancerCategory | "all", number>> = { all: allCancers.length };
    allCancers.forEach(c => { counts[c.category] = (counts[c.category] ?? 0) + 1; });
    return counts;
  }, []);

  // count how many have videos
  const withVideos = allCancers.filter(c => c.videos && c.videos.length > 0).length;

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <div className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-sm">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Knowledge Reference</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
              Cancer <span className="text-primary italic">Knowledge Book</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-6">
              A comprehensive clinical reference covering {allCancers.length}+ cancer types — symptoms, diagnostics,
              treatments, survival rates, curated videos, and global prevalence data. For educational purposes only.
            </p>
            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Cancer Types", value: allCancers.length },
                { label: "Categories", value: 7 },
                { label: "Regions Covered", value: "7+" },
                { label: "Treatment Options", value: "300+" },
                { label: "With Videos", value: withVideos },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-serif font-medium text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* ── Search + filters ── */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search cancer name, symptom, alternate name, risk factor…"
              className="w-full pl-10 pr-10 py-2.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const isAll = cat === "all";
              const isActive = activeCategory === cat;
              const meta = isAll ? null : CATEGORY_META[cat as CancerCategory];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {isAll ? "All Types" : meta!.label}
                  <span className={`font-mono ${isActive ? "opacity-70" : "opacity-50"}`}>
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 flex items-center gap-2">
          <p className="text-xs text-muted-foreground font-mono">
            {filtered.length} of {allCancers.length} entries
            {query && <span> matching "<span className="text-foreground">{query}</span>"</span>}
          </p>
          {filtered.some(c => c.videos && c.videos.length > 0) && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm">
              <Youtube className="w-3 h-3" />
              some entries include videos
            </span>
          )}
        </div>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24 text-muted-foreground"
            >
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No cancers found matching your search.</p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("all"); }}
                className="mt-3 text-xs text-primary underline"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((cancer, i) => (
                <motion.button
                  key={cancer.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: Math.min(i * 0.025, 0.4) }}
                  onClick={() => setSelectedCancer(cancer)}
                  className="group text-left p-5 border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <CategoryBadge category={cancer.category} />
                    <div className="flex items-center gap-1.5">
                      {cancer.videos && cancer.videos.length > 0 && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] bg-red-500/10 border border-red-500/20 text-red-400 rounded-sm shrink-0">
                          <Youtube className="w-2.5 h-2.5" />{cancer.videos.length}
                        </span>
                      )}
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  </div>

                  <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1.5 leading-snug">
                    {cancer.name}
                  </h3>

                  {cancer.alternateNames.length > 0 && (
                    <p className="text-[10px] text-muted-foreground font-mono mb-2 truncate">
                      {cancer.alternateNames.slice(0, 2).join(" · ")}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {cancer.description}
                  </p>

                  <div className="border-t border-border/50 pt-3 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                      <FlaskConical className="w-3 h-3" />{cancer.treatments.length} treatments
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                      <MapPin className="w-3 h-3" />{cancer.geographyNotes.length} regions
                    </div>
                    {cancer.survivalRates && (
                      <div className="flex items-center gap-1 text-[10px] text-primary font-mono">
                        <Activity className="w-3 h-3" />Survival data
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Disclaimer ── */}
        <div className="mt-12 p-4 border border-amber-500/20 bg-amber-500/5 rounded-sm">
          <p className="text-xs text-amber-400/80 leading-relaxed">
            <span className="font-semibold">⚠ Disclaimer:</span> This Cancer Knowledge Book is for informational and educational purposes only.
            It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.
            Cost ranges are indicative estimates and vary significantly by region, insurance status, and individual circumstances.
            Video content is sourced from third-party channels and is provided for educational purposes.
          </p>
        </div>
      </div>

      {/* ── Detail panel ── */}
      <AnimatePresence>
        {selectedCancer && (
          <CancerDetailPanel
            cancer={selectedCancer}
            onClose={() => setSelectedCancer(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
