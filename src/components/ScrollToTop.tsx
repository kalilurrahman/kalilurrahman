import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    setIsAtTop(window.scrollY < 50);
    setIsAtBottom(
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    );
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
      {!isAtBottom && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToBottom}
          className="rounded-full shadow-lg border-primary/20 hover:border-primary text-primary bg-background/80 backdrop-blur-sm"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
      )}
      {!isAtTop && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full shadow-lg border-primary/20 hover:border-primary text-primary bg-background/80 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
