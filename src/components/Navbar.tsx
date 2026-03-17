import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import {
  Home, FileText, Trophy, Award, Users, Brain, Bot, BookOpen,
  Briefcase, Building2, Layers, Zap, Globe, Mail, Menu, X, ChevronDown
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
  { label: "Knowledge Hub", to: "/knowledge-hub", icon: BookOpen },
  { label: "AI Agents", to: "/ai-agents", icon: Bot },
  { label: "Digital Hub", to: "/digital-hub", icon: Globe },
  { label: "Apps Portfolio", to: "/apps-portfolio", icon: Layers },
];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
        >
          <div className="w-7 h-7 border border-primary/40 flex items-center justify-center rounded">
            <span className="font-serif text-xs text-primary font-semibold">KR</span>
          </div>
          <span className="text-xs font-medium text-foreground tracking-wide hidden sm:block">
            KALILUR RAHMAN
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Section links only on home */}
          {isHome && sectionLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Icon className="w-3 h-3" />
                {item.label}
              </a>
            );
          })}

          {!isHome && (
            <Link to="/" className="flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">
              <Home className="w-3 h-3" />
              Home
            </Link>
          )}

          <span className="w-px h-4 bg-border mx-1" />

          {/* Page links */}
          {pageLinks.map((pl) => {
            const Icon = pl.icon;
            const active = location.pathname === pl.to;
            return (
              <Link
                key={pl.label}
                to={pl.to}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide transition-colors ${active ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-primary hover:bg-primary/5"}`}
              >
                <Icon className="w-3 h-3" />
                {pl.label}
              </Link>
            );
          })}

          {/* Profiles dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfilesOpen(!profilesOpen)}
              onBlur={() => setTimeout(() => setProfilesOpen(false), 150)}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide transition-colors ${location.pathname.startsWith("/profile") ? "text-accent bg-accent/10 font-medium" : "text-muted-foreground hover:text-accent hover:bg-accent/5"}`}
            >
              <Briefcase className="w-3 h-3" />
              Profiles
              <ChevronDown className={`w-2.5 h-2.5 transition-transform ${profilesOpen ? "rotate-180" : ""}`} />
            </button>
            {profilesOpen && (
              <div className="absolute top-full right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg py-1 min-w-[160px] z-50">
                {profileLinks.map((pl) => {
                  const Icon = pl.icon;
                  const active = location.pathname === pl.to;
                  return (
                    <Link
                      key={pl.label}
                      to={pl.to}
                      onClick={() => setProfilesOpen(false)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs transition-colors ${active ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-accent hover:bg-accent/5"}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {pl.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-border mx-1" />
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="p-1.5 text-foreground" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="p-5 space-y-5 overflow-y-auto h-full">
                {/* Home */}
                <Link to="/" onClick={() => setSheetOpen(false)} className="flex items-center gap-2.5 text-sm font-medium text-foreground no-underline">
                  <Home className="w-4 h-4 text-primary" />
                  Home
                </Link>

                {/* Sections (home only) */}
                {isHome && (
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-bold">Sections</span>
                    {sectionLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => { setSheetOpen(false); handleSmoothScroll(e, item.href); }}
                          className="flex items-center gap-2.5 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                )}

                <div className="h-px bg-border" />

                {/* Pages */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-bold">Pages</span>
                  {pageLinks.map((pl) => {
                    const Icon = pl.icon;
                    const active = location.pathname === pl.to;
                    return (
                      <Link
                        key={pl.label}
                        to={pl.to}
                        onClick={() => setSheetOpen(false)}
                        className={`flex items-center gap-2.5 py-1.5 text-sm transition-colors ${active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </Link>
                    );
                  })}
                </div>

                <div className="h-px bg-border" />

                {/* Role Profiles */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-bold">Role Profiles</span>
                  {profileLinks.map((pl) => {
                    const Icon = pl.icon;
                    const active = location.pathname === pl.to;
                    return (
                      <Link
                        key={pl.label}
                        to={pl.to}
                        onClick={() => setSheetOpen(false)}
                        className={`flex items-center gap-2.5 py-1.5 text-sm transition-colors ${active ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
