
import { Target, Bell, Activity } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Left Side: Brand */}
        <div className="flex gap-2 items-center">
          <div className="bg-primary/20 p-2 rounded-xl">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">TN Predictor 2026</h1>
            <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">AI-Powered Psephology</p>
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
             <Activity className="h-4 w-4 mr-2 text-green-500" />
             <span>Model Updated: 2h ago</span>
          </div>
          
          <button className="p-2 hover:bg-muted rounded-full transition-colors relative">
            <Bell className="h-5 w-5 text-foreground/70" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive"></span>
          </button>
        </div>

      </div>
    </header>
  );
};
