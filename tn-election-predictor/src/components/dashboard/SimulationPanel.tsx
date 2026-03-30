import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ChevronLeft, Zap, TrendingUp, Settings2, Map as MapIcon, Globe } from 'lucide-react';
import { DEFAULT_PARAMS } from '../../data/constituencies2026';
import type { SimulationParams, Region } from '../../data/constituencies2026';
import { cn } from '../../lib/utils';

interface SimulationPanelProps {
  params: SimulationParams;
  onParamChange: (newParams: SimulationParams) => void;
}

type Tab = 'global' | 'regional';

export const SimulationPanel = ({ params, onParamChange }: SimulationPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('global');

  const updateParam = (key: keyof SimulationParams, value: number) => {
    onParamChange({ ...params, [key]: value });
  };

  const updateRegionalParam = (region: Region, alliance: 'spa' | 'nda', value: number) => {
    const newRegional = { ...params.regionalSwings };
    newRegional[region] = { ...newRegional[region], [alliance]: value };
    onParamChange({ ...params, regionalSwings: newRegional });
  };

  const resetParams = () => onParamChange(DEFAULT_PARAMS);

  const regions: Region[] = ['CHENNAI', 'NORTH', 'WEST', 'CENTRAL', 'SOUTH'];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 bottom-6 z-[1001] bg-primary text-primary-foreground p-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <Settings2 className="h-5 w-5 animate-spin-slow" />}
        <span className="hidden md:inline">Strategy Simulator</span>
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
            </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-6 top-24 bottom-24 w-[380px] z-[1000] glass-panel rounded-[2.5rem] shadow-2xl border-border/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-border/20 bg-primary/5">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                    <Zap className="h-5 w-5 text-accent fill-accent" />
                    2026 Simulator
                  </h2>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Strategic Conflict Engine</p>
                </div>
                <button 
                  onClick={resetParams}
                  className="p-2 hover:bg-background rounded-full transition-colors text-muted-foreground hover:text-primary"
                  title="Reset to Baseline"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex bg-muted/30 p-1 rounded-xl gap-1">
                <button 
                  onClick={() => setActiveTab('global')}
                  className={cn(
                    "flex-1 py-2 text-[10px] font-black uppercase tracking-tighter rounded-lg transition-all flex items-center justify-center gap-1.5",
                    activeTab === 'global' ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Globe className="h-3 w-3" /> Global
                </button>
                <button 
                  onClick={() => setActiveTab('regional')}
                  className={cn(
                    "flex-1 py-2 text-[10px] font-black uppercase tracking-tighter rounded-lg transition-all flex items-center justify-center gap-1.5",
                    activeTab === 'regional' ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <MapIcon className="h-3 w-3" /> Regional
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
              
              {activeTab === 'global' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  {/* Alliance Swings */}
                  <div className="space-y-6">
                    <SectionHeader icon={<TrendingUp className="h-4 w-4" />} title="State-wide Momentum" />
                    
                    <SimulatorSlider 
                      label="SPA Wave (DMK+)"
                      value={params.spaSwing}
                      min={-10} max={10} step={0.5}
                      color="#d72828"
                      onChange={(v) => updateParam('spaSwing', v)}
                    />

                    <SimulatorSlider 
                      label="NDA Wave (AIADMK+)"
                      value={params.ndaSwing}
                      min={-10} max={10} step={0.5}
                      color="#1e7b1e"
                      onChange={(v) => updateParam('ndaSwing', v)}
                    />
                  </div>

                  {/* Disruptors */}
                  <div className="space-y-6 pt-4 border-t border-border/20">
                    <SectionHeader icon={<Zap className="h-4 w-4" />} title="The Disruptor Factor" />
                    
                    <SimulatorSlider 
                      label="Vijay Factor (TVK)"
                      value={params.tvkInfluence}
                      min={0} max={25} step={0.5}
                      color="#FFD700"
                      onChange={(v) => updateParam('tvkInfluence', v)}
                    />

                    <SimulatorSlider 
                      label="Seeman Factor (NTK)"
                      value={params.ntkInfluence}
                      min={0} max={15} step={0.5}
                      color="#de425b"
                      onChange={(v) => updateParam('ntkInfluence', v)}
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'regional' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                   <SectionHeader icon={<MapIcon className="h-4 w-4" />} title="Region-specific Swings" />
                   {regions.map(region => (
                     <div key={region} className="p-4 rounded-2xl bg-muted/20 border border-border/20 space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-primary flex justify-between items-center">
                          {region} 
                          <span className="text-muted-foreground opacity-50">Impact: High</span>
                        </h4>
                        <SimulatorSlider 
                          label="SPA Shift"
                          value={params.regionalSwings[region].spa}
                          min={-5} max={10} step={0.5}
                          color="#d72828"
                          onChange={(v) => updateRegionalParam(region, 'spa', v)}
                        />
                        <SimulatorSlider 
                          label="NDA Shift"
                          value={params.regionalSwings[region].nda}
                          min={-5} max={10} step={0.5}
                          color="#1e7b1e"
                          onChange={(v) => updateRegionalParam(region, 'nda', v)}
                        />
                     </div>
                   ))}
                </motion.div>
              )}

            </div>

            {/* Footer / Status */}
            <div className="p-6 bg-muted/10 border-t border-border/20">
                <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    SIMULATION ENGINE ACTIVE
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="text-xs font-black uppercase tracking-widest text-foreground/80">{title}</h3>
  </div>
);

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    color: string;
    onChange: (val: number) => void;
}

const SimulatorSlider = ({ label, value, min, max, step, color, onChange }: SliderProps) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <span className="text-[11px] font-bold text-muted-foreground uppercase">{label}</span>
      <span className={cn(
        "text-xs font-black px-2 py-0.5 rounded shadow-sm",
        value > 0 ? "bg-green-100 text-green-700" : value < 0 ? "bg-red-100 text-red-700" : "bg-muted text-muted-foreground"
      )}>
        {value > 0 ? '+' : ''}{value}%
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
      style={{ accentColor: color }}
    />
  </div>
);
