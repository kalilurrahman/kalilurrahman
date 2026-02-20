import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "sepia", label: "Sepia" },
  { id: "midnight", label: "Midnight" },
] as const;

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex gap-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`px-2 py-0.5 rounded text-[10.5px] font-medium border transition-colors ${
            resolvedTheme === t.id
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary hover:text-primary"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
