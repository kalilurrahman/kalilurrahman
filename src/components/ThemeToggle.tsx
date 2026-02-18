import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-border/60 bg-muted/40 hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className={`h-3.5 w-3.5 transition-colors ${isDark ? "text-muted-foreground" : "text-primary"}`} />
      <div className="relative w-8 h-4 rounded-full bg-border">
        <div
          className={`absolute top-0.5 h-3 w-3 rounded-full bg-primary transition-transform duration-300 ${isDark ? "translate-x-4" : "translate-x-0.5"}`}
        />
      </div>
      <Moon className={`h-3.5 w-3.5 transition-colors ${isDark ? "text-primary" : "text-muted-foreground"}`} />
    </button>
  );
}
