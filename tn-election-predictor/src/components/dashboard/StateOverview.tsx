import { OPINION_POLLS_2026, getDynamicPredictions } from '../../data/constituencies2026';
import type { SimulationParams } from '../../data/constituencies2026';
import { motion } from 'framer-motion';

// Alliance colors
const ALLIANCE_COLORS: Record<string, string> = {
  'SPA': '#d72828',
  'NDA': '#1e7b1e',
  'TVK': '#FFD700',
  'NTK': '#de425b',
  'OTHERS': '#6b7280',
};

interface StateOverviewProps {
  simulationParams: SimulationParams;
}

export const StateOverview = ({ simulationParams }: StateOverviewProps) => {
  const { summary, params } = getDynamicPredictions(simulationParams);
  
  const predictions = {
    'SPA': summary.spaSeats,
    'NDA': summary.ndaSeats,
    'TVK': summary.tvkSeats,
    'NTK': summary.ntkSeats,
    'OTHERS': summary.othersSeats,
  };

  const isSimulated = JSON.stringify(params) !== JSON.stringify(getDynamicPredictions({} as any).params);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
      
      {/* Magic Number Card */}
      <div className="md:col-span-12 glass-panel p-6 rounded-3xl relative overflow-hidden group border-primary/20 bg-white/40 dark:bg-slate-900/40">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
         <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
            State Assembly Projection — 2026
            {isSimulated && (
              <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-black uppercase tracking-widest animate-pulse border border-amber-200">
                Simulation Active
              </span>
            )}
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-semibold ml-auto">
              {summary.tossups} Critical Toss-ups
            </span>
         </h2>

         <div className="flex flex-col mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider">Start</span>
                <div className="relative">
                    <span className="absolute -top-6 -left-1/2 transform translate-x-1/2 bg-foreground text-background text-[10px] font-black px-2 py-1 rounded shadow-lg">MAGIC: {summary.magicNumber}</span>
                    <div className="h-4 w-0.5 bg-foreground/30"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">234 Seats</span>
            </div>
            
            <div className="h-10 w-full bg-muted/40 rounded-full overflow-hidden flex shadow-inner border border-border/50 relative z-10 p-1">
                {Object.entries(predictions).map(([alliance, seats]) => {
                  const percentage = (seats / summary.totalSeats) * 100;
                  const color = ALLIANCE_COLORS[alliance] || '#6b7280';
                  if (seats === 0) return null;
                  return (
                    <motion.div 
                      key={alliance}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ backgroundColor: color }}
                      className="h-full flex items-center justify-center relative group/bar hover:brightness-110 first:rounded-l-full last:rounded-r-full transition-all cursor-crosshair border-r border-white/10"
                      title={`${alliance}: ${seats} seats`}
                    >
                       {percentage > 6 && (
                          <span className="text-white font-black text-xs drop-shadow-md">{seats}</span>
                       )}
                    </motion.div>
                  );
                })}
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(predictions).map(([alliance, seats]) => {
              const color = ALLIANCE_COLORS[alliance] || '#6b7280';
              const isLeading = seats === Math.max(...Object.values(predictions));
              const isWinner = seats >= summary.magicNumber;
              
              return (
                <div key={alliance} className={`flex flex-col p-4 rounded-2xl border transition-all duration-500 overflow-hidden relative ${isWinner ? 'bg-primary/5 border-primary/40 ring-1 ring-primary/20' : 'bg-white/40 dark:bg-slate-900/20 border-white/20 shadow-sm'}`}
                >
                    {isWinner && (
                      <div className="absolute top-0 right-0 p-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-bl-lg">
                        Winner
                      </div>
                    )}
                    <span className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60" style={{ color }}>
                        {alliance}
                    </span>
                    <span className="text-3xl font-black">{seats}</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                       <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
                       <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                         {isLeading ? 'Leading' : 'Projected'}
                       </span>
                    </div>
                </div>
              );
            })}
         </div>
      </div>

      {/* Opinion Polls Card */}
      <div className="md:col-span-6 glass-panel p-6 rounded-3xl border border-border/50 bg-white/30 dark:bg-slate-900/30">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            📡 Latest Polling Averages
          </h3>
          <div className="space-y-4">
              {OPINION_POLLS_2026.slice(0, 3).map((poll, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/40 dark:bg-black/10 border border-white/20">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{poll.agency}</span>
                         <span className="text-[10px] text-muted-foreground/60">{poll.date}</span>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-1.5 font-bold text-xs" style={{ color: ALLIANCE_COLORS.SPA }}>
                            <span>SPA:</span> {poll.spaVoteShare}%
                         </div>
                         <div className="flex items-center gap-1.5 font-bold text-xs" style={{ color: ALLIANCE_COLORS.NDA }}>
                            <span>NDA:</span> {poll.ndaVoteShare}%
                         </div>
                         <div className="flex items-center gap-1.5 font-bold text-xs text-amber-500">
                            <span>TVK:</span> {poll.tvkVoteShare}%
                         </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      <div className="md:col-span-6 glass-panel p-6 rounded-3xl border border-border/50 bg-white/30 dark:bg-slate-900/30">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            🚦 Swing Indicators
          </h3>
          <div className="space-y-4">
              {[
                  { label: 'Incumbency Impact', val: -2.5, color: '#d72828' },
                  { label: 'Youth Shift to TVK', val: simulationParams.tvkInfluence, color: '#FFD700' },
                  { label: 'Simulation Modifier', val: simulationParams.spaSwing - simulationParams.ndaSwing, color: '#3b82f6' }
              ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/10 border border-white/5 flex items-center justify-between">
                     <span className="text-xs font-bold text-muted-foreground">{item.label}</span>
                     <span className={`text-xs font-black rounded px-2 py-0.5 ${item.val >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                        {item.val > 0 ? '+' : ''}{item.val}%
                     </span>
                  </div>
              ))}
          </div>
      </div>

    </div>
  );
};
