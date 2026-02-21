import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Smartphone, Monitor, CheckCircle, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setIsInstalled(true);
    setDeferredPrompt(null);
  };

  const features = [
    { icon: Smartphone, title: "Works Offline", desc: "Access the full portfolio without internet — cached locally on your device." },
    { icon: Monitor, title: "Native App Feel", desc: "Launches from home screen with no browser chrome — feels like a native app." },
    { icon: Download, title: "Auto Updates", desc: "Always up to date — new content syncs automatically when connected." },
    { icon: CheckCircle, title: "All 8 Pages", desc: "Home, Knowledge Hub, AI Agents, Digital Hub + 4 role-based profiles — all available offline." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-serif font-bold text-primary-foreground shadow-lg shadow-primary/20">
            KR
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">Install KR Portfolio</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Add this portfolio to your home screen for instant, offline access to all pages and profiles.</p>
        </motion.div>

        {isInstalled ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8 bg-card border border-primary/30 rounded-2xl">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-xl text-foreground mb-2">Already Installed!</h2>
            <p className="text-sm text-muted-foreground">This app is installed on your device. You can launch it from your home screen.</p>
          </motion.div>
        ) : (
          <>
            {deferredPrompt ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
                <button onClick={handleInstall}
                  className="px-8 py-4 bg-primary text-primary-foreground font-medium text-base rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-3 shadow-lg shadow-primary/20">
                  <Download className="w-5 h-5" /> Install Now
                </button>
              </motion.div>
            ) : isIOS ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-6 bg-card border border-border rounded-2xl mb-12 text-center">
                <Smartphone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-lg text-foreground mb-3">Install on iPhone / iPad</h2>
                <ol className="text-sm text-muted-foreground space-y-2 text-left max-w-sm mx-auto">
                  <li className="flex gap-2"><span className="text-primary font-bold">1.</span> Tap the <strong className="text-foreground">Share</strong> button (square with arrow)</li>
                  <li className="flex gap-2"><span className="text-primary font-bold">2.</span> Scroll down and tap <strong className="text-foreground">Add to Home Screen</strong></li>
                  <li className="flex gap-2"><span className="text-primary font-bold">3.</span> Tap <strong className="text-foreground">Add</strong> in the top-right corner</li>
                </ol>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-6 bg-card border border-border rounded-2xl mb-12 text-center">
                <Monitor className="w-10 h-10 text-primary mx-auto mb-4" />
                <h2 className="font-serif text-lg text-foreground mb-3">Install on Android / Desktop</h2>
                <p className="text-sm text-muted-foreground">Look for the <strong className="text-foreground">Install</strong> option in your browser menu, or the install icon in the address bar.</p>
              </motion.div>
            )}
          </>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 bg-card border border-border rounded-xl">
                <Icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-medium text-foreground text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
