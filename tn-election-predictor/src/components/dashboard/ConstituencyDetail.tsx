import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  TrendingUp, 
  TrendingDown, 
  ExternalLink,
  Loader2,
  AlertTriangle,
  Users,
  GraduationCap,
  Scale,
  IndianRupee,
  MapPin,
  Flame,
  Info
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer 
} from 'recharts';
import { CONSTITUENCIES_FULL, getAllianceColor } from '../../data/constituencies2026';
import { cn } from '../../lib/utils';


interface NewsItem {
  title: string;
  link: string;
  published: string;
  source: string;
  sentiment_score: number;
  sentiment_label: string;
}

interface SentimentData {
  constituency: string;
  district: string;
  news: NewsItem[];
  average_sentiment: number;
  overall_label: string;
  last_updated: string;
}

interface ConstituencyDetailProps {
  acNo: number;
  onClose: () => void;
}

type ModalTab = 'analytics' | 'candidates' | 'buzz';

export const ConstituencyDetail = ({ acNo, onClose }: ConstituencyDetailProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SentimentData | null>(null);
  const [activeTab, setActiveTab] = useState<ModalTab>('analytics');

  const constituency = useMemo(() => CONSTITUENCIES_FULL.find(c => c.acNo === acNo), [acNo]);

  useEffect(() => {
    if (!constituency) return;
    const fetchIntel = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/news/${encodeURIComponent(constituency.name)}/${encodeURIComponent(constituency.district)}`);
        if (!response.ok) throw new Error("Failed to fetch constituency intelligence");
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        console.error("Intel Fetch Error:", err);
        setError(err.message || "Something went wrong while fetching live news.");
      } finally {
        setLoading(false);
      }
    };

    fetchIntel();
  }, [constituency]);

  if (!constituency) return null;

  const mockTrend = [
    { day: 'Mon', sentiment: 0.1 },
    { day: 'Tue', sentiment: 0.25 },
    { day: 'Wed', sentiment: 0.15 },
    { day: 'Thu', sentiment: -0.05 },
    { day: 'Fri', sentiment: 0.35 },
    { day: 'Sat', sentiment: 0.42 },
    { day: 'Today', sentiment: data?.average_sentiment || 0.4 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 10 }}
        className="bg-white dark:bg-[#0a0f1d] w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col relative border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Progress Bar Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: loading ? '60%' : '100%' }}
                className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
            />
        </div>

        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start bg-slate-50/50 dark:bg-slate-800/10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-black uppercase tracking-widest shadow-sm">AC #{constituency.acNo}</span>
              <span className="text-[10px] bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-black uppercase tracking-widest flex items-center gap-1">
                  <MapPin className="h-2.5 w-2.5" /> {constituency.region} Region
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
                {constituency.name}
                <span className="text-primary ml-2">.</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                {constituency.district} District <span className="text-muted-foreground/30">•</span> {constituency.reservedFor} Category
            </p>
          </div>
          
          <div className="flex items-center gap-2">
              <div className="flex bg-muted/30 p-1 rounded-2xl border border-border/20">
                  {(['analytics', 'candidates', 'buzz'] as ModalTab[]).map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl",
                            activeTab === tab ? "bg-white dark:bg-slate-800 shadow-xl text-primary" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {tab}
                    </button>
                  ))}
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-2xl transition-all duration-300 group shadow-lg"
              >
                <X className="h-6 w-6 text-muted-foreground group-hover:rotate-90 transition-transform" />
              </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-primary/20 min-h-0 bg-slate-50/20 dark:bg-transparent">
          <AnimatePresence mode="wait">
            
            {activeTab === 'analytics' && (
              <motion.div 
                key="analytics"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                {/* Sentiment & Overview */}
                <div className="md:col-span-5 space-y-6">
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/40 dark:to-slate-900/60 border border-border/40 shadow-xl overflow-hidden relative group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
                            <Users className="h-3 w-3" /> Battlefield Momentum
                        </h3>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative">
                                <div className="text-6xl font-black tracking-tighter">
                                     {data ? Math.abs(data.average_sentiment * 100).toFixed(0) : '0'}
                                </div>
                                <div className="absolute -top-2 -right-4">
                                     {data?.average_sentiment && data.average_sentiment > 0 ? (
                                        <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-full shadow-sm"><TrendingUp className="h-4 w-4" /></div>
                                     ) : (
                                        <div className="p-1.5 bg-rose-100 text-rose-600 rounded-full shadow-sm"><TrendingDown className="h-4 w-4" /></div>
                                     )}
                                </div>
                            </div>
                            <div>
                                <div className={cn(
                                    "text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-md inline-block mb-1",
                                    data?.average_sentiment && data.average_sentiment > 0 ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                                )}>
                                    {data?.overall_label || 'Neutral'}
                                </div>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Calculated Sentiment Index</p>
                            </div>
                        </div>

                        {/* Predicted probability bars in overview */}
                        <div className="space-y-4">
                            <ProbabilityBar label="SPA" prob={constituency.prediction.spaWinProb} color="#d72828" />
                            <ProbabilityBar label="NDA" prob={constituency.prediction.ndaWinProb} color="#1e7b1e" />
                            <ProbabilityBar label="TVK" prob={constituency.prediction.tvkWinProb} color="#FFD700" />
                        </div>
                    </div>

                    {/* Chart Card */}
                    <div className="p-8 rounded-[2rem] border border-border/40 shadow-xl dark:bg-slate-900/40">
                         <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Sentiment Trajectory</h3>
                         <div className="h-[180px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={mockTrend}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.05} />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: '#64748b' }} />
                                    <YAxis hide domain={[-1, 1]} />
                                    <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', background: '#0f172a', fontSize: '10px' }} />
                                    <Line type="monotone" dataKey="sentiment" stroke="#d72828" strokeWidth={5} dot={false} animationDuration={1500} />
                                </LineChart>
                            </ResponsiveContainer>
                         </div>
                    </div>
                </div>

                {/* Main Action Analytics */}
                <div className="md:col-span-7 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                         <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                            <h4 className="text-[9px] font-black tracking-widest uppercase text-primary mb-2">Key Conflict Factor</h4>
                            <p className="text-sm font-bold leading-tight line-clamp-2">{constituency.keyIssues[0]}</p>
                         </div>
                         <div className="p-6 rounded-3xl bg-accent/5 border border-accent/10">
                            <h4 className="text-[9px] font-black tracking-widest uppercase text-accent mb-2">2021 Margin</h4>
                            <p className="text-sm font-bold leading-tight">{constituency.result2021.margin.toLocaleString()} Votes</p>
                         </div>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group border border-white/5">
                        <Flame className="absolute -bottom-10 -right-10 h-40 w-40 text-white/5 group-hover:scale-125 transition-transform duration-700" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6 flex items-center gap-2">
                            <Flame className="h-3 w-3 text-red-500 fill-red-500" /> Strategic Forecast
                        </h3>
                        <div className="text-2xl font-black mb-4">
                            {constituency.prediction.predictedWinner} is favored to win with {Math.max(constituency.prediction.spaWinProb, constituency.prediction.ndaWinProb)}% probability.
                        </div>
                        <div className="flex items-center gap-3">
                             <div className={cn(
                                 "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                                 constituency.prediction.margin === 'safe' ? "bg-emerald-500" : constituency.prediction.margin === 'lean' ? "bg-amber-500" : "bg-rose-500"
                             )}>
                                 {constituency.prediction.margin} SEAT
                             </div>
                             <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                                 Swing: {constituency.prediction.swingFrom2021 > 0 ? '+' : ''}{constituency.prediction.swingFrom2021}%
                             </span>
                        </div>
                    </div>

                    {/* Regional Context Table */}
                    <div className="p-6 rounded-[2rem] border border-border/40 bg-white dark:bg-slate-800/10">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Regional Distribution (Est.)</h3>
                        <div className="grid grid-cols-4 gap-4">
                             <StatBlock label="Urban %" value="74%" />
                             <StatBlock label="Young %" value="38%" />
                             <StatBlock label="Literacy" value="89%" />
                             <StatBlock label="Ind. Hub" value="High" />
                        </div>
                    </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'candidates' && (
              <motion.div 
                key="candidates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                  {constituency.candidates2026.map((candidate, idx) => (
                    <div key={idx} className="p-6 rounded-[2rem] border border-border/40 bg-white dark:bg-slate-800/40 shadow-xl flex flex-col relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-3">
                             <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg" style={{ backgroundColor: getAllianceColor(candidate.alliance) + '20', color: getAllianceColor(candidate.alliance) }}>
                                 <span className="text-[10px] font-black uppercase">{candidate.party}</span>
                             </div>
                        </div>

                        <div className="mb-6 pt-2">
                             <div className="w-16 h-16 rounded-[1.5rem] bg-muted/30 mb-4 flex items-center justify-center text-muted-foreground relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <Users className="h-8 w-8 opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                             </div>
                             <h4 className="font-black text-lg leading-none mb-1 group-hover:text-primary transition-colors">{candidate.name}</h4>
                             <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{candidate.alliance} Nominee</p>
                        </div>

                        <div className="space-y-4 flex-1">
                             <CandidateStat icon={<GraduationCap className="h-3 w-3" />} label="Education" value={candidate.education} />
                             <CandidateStat icon={<IndianRupee className="h-3 w-3" />} label="Net Worth" value={candidate.assets} />
                             <CandidateStat icon={<Scale className="h-3 w-3" />} label="Criminal Cases" value={candidate.cases.toString()} />
                             <CandidateStat icon={<Info className="h-3 w-3" />} label="Literacy Ind." value={candidate.literacy.toFixed(0) + '%'} />
                        </div>

                        {candidate.isIncumbent && (
                            <div className="mt-6 pt-4 border-t border-border/20">
                                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                                    <ShieldCheckIcon className="h-2.5 w-2.5" /> Incumbent MLA
                                </div>
                            </div>
                        )}
                    </div>
                  ))}
              </motion.div>
            )}

            {activeTab === 'buzz' && (
              <motion.div 
                key="buzz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto"
              >
                 {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="h-10 w-10 text-primary animate-spin" />
                        <p className="text-sm font-bold animate-pulse uppercase tracking-widest text-muted-foreground">Scraping battlefield headlines...</p>
                    </div>
                 ) : error ? (
                    <div className="text-center py-20">
                        <AlertTriangle className="h-10 w-10 text-rose-500 mx-auto mb-4" />
                        <p className="font-bold text-muted-foreground">Local network restriction or site block. Analysis temporarily unavailable.</p>
                    </div>
                 ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {data?.news.map((item, idx) => (
                          <motion.a 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            href={item.link} 
                            target="_blank" 
                            className="p-6 rounded-3xl border border-border/40 bg-white dark:bg-slate-800/20 hover:border-primary/50 hover:bg-slate-50 transition-all flex justify-between items-center group shadow-sm hover:shadow-xl"
                          >
                            <div className="space-y-2">
                                <div className="flex items-center gap-4">
                                     <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.source}</span>
                                     <span className="text-[8px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-bold">{item.published}</span>
                                </div>
                                <h4 className="font-black text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </motion.a>
                        ))}
                    </div>
                 )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProbabilityBar = ({ label, prob, color }: { label: string, prob: number, color: string }) => (
    <div className="space-y-1.5">
        <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase">
            <span>{label}</span>
            <span>{prob}%</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden p-[1px]">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${prob}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
            />
        </div>
    </div>
);

const CandidateStat = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-muted/50 text-muted-foreground shrink-0">{icon}</div>
        <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 leading-none mb-1">{label}</span>
            <span className="text-xs font-bold leading-none">{value}</span>
        </div>
    </div>
);

const StatBlock = ({ label, value }: { label: string, value: string }) => (
    <div className="p-4 rounded-2xl bg-muted/10 text-center">
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</div>
        <div className="text-sm font-black text-primary">{value}</div>
    </div>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);
