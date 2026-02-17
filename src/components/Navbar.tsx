import { useState } from "react";

const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Leadership", href: "#leadership" },
  { label: "Data & AI", href: "#data-ai" },
  { label: "Books", href: "#books" },
  { label: "Awards", href: "#awards" },
  { label: "Certs", href: "#certifications" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    const offset = 60; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={(e) => handleSmoothScroll(e, "#")}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 border border-primary/40 flex items-center justify-center">
            <span className="font-serif text-sm text-primary">KR</span>
          </div>
          <span className="text-sm font-medium text-foreground tracking-wide hidden sm:block">
            KALILUR RAHMAN
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setIsOpen(false);
                  handleSmoothScroll(e, item.href);
                }}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
