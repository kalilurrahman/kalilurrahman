import { useState, useMemo } from 'react';
import { getDynamicPredictions } from '../../data/constituencies2026';
import type { SimulationParams } from '../../data/constituencies2026';
import { Search, Flame, MapPin } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ConstituencyListProps {
  simulationParams: SimulationParams;
}

export const ConstituencyList = ({ simulationParams }: ConstituencyListProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Re-calculate the list based on simulation swings
    const { constituencies } = useMemo(() => getDynamicPredictions(simulationParams), [simulationParams]);

    const filtered = constituencies.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.acNo.toString().includes(searchTerm)
    );

    // Sort by margin (tossups first)
    const sorted = [...filtered].sort((a, b) => {
        const marginA = Math.abs(a.prediction.spaWinProb - a.prediction.ndaWinProb);
        const marginB = Math.abs(b.prediction.spaWinProb - b.prediction.ndaWinProb);
        return marginA - marginB;
    });

    return (
        <div className="glass-panel rounded-3xl p-6 flex flex-col h-full max-h-[800px] border-border/40 shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                   <h3 className="font-bold text-lg flex items-center gap-2">
                       <MapPin className="h-5 w-5 text-primary" />
                       Seat Tracking
                   </h3>
                   <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Live Predictions</span>
                </div>
                <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">234 Monitored</span>
            </div>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-50" />
                <input 
                    type="text" 
                    placeholder="Search AC Name or #..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-background/50 border border-border/50 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                />
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-border/80 min-h-0">
                {sorted.map((seat, index) => {
                    const isTossup = seat.prediction.margin === 'tossup';
                    const winner = seat.prediction.predictedWinner;
                    const winnerProb = Math.max(
                        seat.prediction.spaWinProb, seat.prediction.ndaWinProb, 
                        seat.prediction.tvkWinProb, seat.prediction.ntkWinProb
                    );

                    return (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(index * 0.02, 0.5) }}
                            key={seat.acNo} 
                            className={cn(
                                "p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group hover:shadow-lg cursor-pointer",
                                isTossup ? "border-orange-500/50 bg-orange-500/5" : "border-border/60 bg-white/40 dark:bg-black/20"
                            )}
                        >
                            {isTossup && (
                                <div className="absolute top-2 right-2 flex items-center gap-1 text-[8px] uppercase font-black text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded shadow-sm border border-orange-200">
                                    <Flame className="h-2.5 w-2.5 fill-orange-500" /> Toss-up
                                </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-3 mt-1">
                                <div>
                                    <span className="text-[10px] text-muted-foreground font-black tracking-widest uppercase">AC #{seat.acNo}</span>
                                    <h4 className="font-bold text-sm leading-tight mt-0.5 group-hover:text-primary transition-colors">{seat.name}</h4>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {/* Leader Bar */}
                                <div className="flex justify-between items-center text-xs">
                                    <div className="flex items-center gap-2">
                                         <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: winner === 'SPA' ? '#d72828' : winner === 'NDA' ? '#1e7b1e' : winner === 'TVK' ? '#FFD700' : '#de425b' }}></span>
                                         <span className="font-black tracking-tight">{winner}</span>
                                    </div>
                                    <span className="font-black text-primary">{winnerProb.toFixed(1)}%</span>
                                </div>
                               
                               {/* Progress Visual */}
                               <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden flex relative p-[1px]">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${winnerProb}%` }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: winner === 'SPA' ? '#d72828' : winner === 'NDA' ? '#1e7b1e' : winner === 'TVK' ? '#FFD700' : '#de425b' }}
                                    />
                                    <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-background/50"></div>
                               </div>

                                {/* Detail Logic */}
                               <div className="flex justify-between items-center text-[10px] text-muted-foreground pt-1 font-bold">
                                    <span className="uppercase tracking-tighter">{seat.district}</span>
                                    <span className="font-black text-foreground/70 uppercase">Margin: {seat.prediction.swingFrom2021 > 0 ? '+' : ''}{seat.prediction.swingFrom2021}%</span>
                               </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
