import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import {
  Home, FileText, Trophy, Award, Users, Brain, Bot, BookOpen,
  Briefcase, Building2, Layers, Zap, Globe, Mail, Menu, ChevronDown, HeartPulse, Download, Sparkles
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const sectionLinks = [
  { label: "Summary", href: "#summary", icon: FileText },
  { label: "Leadership", href: "#leadership", icon: Users },
  { label: "Data & AI", href: "#data-ai", icon: Brain },
  { label: "Books", href: "#books", icon: BookOpen },
  { label: "Awards", href: "#awards", icon: Trophy },
  { label: "Certs", href: "#certifications", icon: Award },
  { label: "Profiles", href: "#profiles", icon: Globe },
  { label: "Contact", href: "#contact", icon: Mail },
];

const pageLinks = [
  { label: "Tailored CV", to: "/tailored-cv", icon: Sparkles },
  { label: "Knowledge Hub", to: "/knowledge-hub", icon: BookOpen },
  { label: "AI Agents", to: "/ai-agents", icon: Bot },
  { label: "Digital Hub", to: "/digital-hub", icon: Globe },
  { label: "Apps Portfolio", to: "/apps-portfolio", icon: Layers },
  { label: "Cancer Book", to: "/cancer-book", icon: HeartPulse },
];

// Subset shown inline on tablet/laptop combo nav (kept short for breathing room)
const primaryPageLinks = pageLinks.slice(0, 3);

const profileLinks = [
  { label: "AI Advisor", to: "/profile/ai-advisor", icon: Brain },
  { label: "GCC Advisor", to: "/profile/gcc-advisor", icon: Building2 },
  { label: "CoE Champion", to: "/profile/coe-champion", icon: Layers },
  { label: "DX Champion", to: "/profile/digital-transformation", icon: Zap },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    const offset = 56;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [profilesOpen, setProfilesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline group"
          aria-label="Kalilur Rahman — Home"
        >
          <img
            src="/pwa-192x192.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg shadow-sm group-hover:shadow-[0_0_18px_hsl(var(--primary)/0.45)] transition-shadow"
          />
          <span className="font-display text-base font-semibold text-foreground tracking-wide hidden sm:block leading-none">
            Kalilur Rahman
          </span>
        </Link>

        {/* Combo nav: a few primary links + Profiles dropdown on lg+ */}
        <div className="hidden lg:flex items-center gap-1">
          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          )}

          {primaryPageLinks.map((pl) => {
            const Icon = pl.icon;
            const active = location.pathname === pl.to;
            return (
              <Link
                key={pl.label}
                to={pl.to}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${active ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {pl.label}
              </Link>
            );
          })}

          {/* Profiles dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfilesOpen(!profilesOpen)}
              onBlur={() => setTimeout(() => setProfilesOpen(false), 150)}
              aria-expanded={profilesOpen}
              aria-haspopup="true"
              aria-label="Open profiles menu"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${location.pathname.startsWith("/profile") ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-accent hover:bg-accent/5"}`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Profiles
              <ChevronDown className={`w-3 h-3 transition-transform ${profilesOpen ? "rotate-180" : ""}`} />
            </button>
            {profilesOpen && (
              <div className="absolute top-full right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg py-1 min-w-[180px] z-50">
                {profileLinks.map((pl) => {
                  const Icon = pl.icon;
                  const active = location.pathname === pl.to;
                  return (
                    <Link
                      key={pl.label}
                      to={pl.to}
                      onClick={() => setProfilesOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 text-xs transition-colors ${active ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-accent hover:bg-accent/5"}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {pl.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-border mx-1.5" />
        </div>

        {/* Right cluster: install, theme, hamburger (always visible — full menu) */}
        <div className="flex items-center gap-1.5">
          <Link
            to="/install"
            aria-label="Install app"
            title="Install app"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Install</span>
          </Link>
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Open full menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[360px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="p-6 space-y-6 overflow-y-auto h-full">
                {/* Brand header inside menu */}
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <img src="/pwa-192x192.png" alt="" width={40} height={40} className="w-10 h-10 rounded-lg" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-display text-base font-semibold text-foreground">Kalilur Rahman</span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Portfolio</span>
                  </div>
                </div>

                <Link
                  to="/"
                  onClick={() => setSheetOpen(false)}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground no-underline hover:text-primary transition-colors"
                >
                  <Home className="w-4 h-4 text-primary" />
                  Home
                </Link>

                {isHome && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-primary/80 font-bold">Sections</span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {sectionLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => { setSheetOpen(false); handleSmoothScroll(e, item.href); }}
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {item.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="h-px bg-border" />

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-primary/80 font-bold">Pages</span>
                  {pageLinks.map((pl) => {
                    const Icon = pl.icon;
                    const active = location.pathname === pl.to;
                    return (
                      <Link
                        key={pl.label}
                        to={pl.to}
                        onClick={() => setSheetOpen(false)}
                        className={`flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-md text-sm transition-colors ${active ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-primary hover:bg-primary/5"}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-accent/80 font-bold">Role Profiles</span>
                  {profileLinks.map((pl) => {
                    const Icon = pl.icon;
                    const active = location.pathname === pl.to;
                    return (
                      <Link
                        key={pl.label}
                        to={pl.to}
                        onClick={() => setSheetOpen(false)}
                        className={`flex items-center gap-2.5 py-1.5 px-2 -mx-2 rounded-md text-sm transition-colors ${active ? "text-accent bg-accent/10 font-medium" : "text-muted-foreground hover:text-accent hover:bg-accent/5"}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="h-px bg-border" />

                <Link
                  to="/install"
                  onClick={() => setSheetOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  Install App
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
