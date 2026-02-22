import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DigitalHub from "./pages/DigitalHub";
import KnowledgeHubPage from "./pages/KnowledgeHubPage";
import AgenticAIPage from "./pages/AgenticAIPage";
import ProfileAIAdvisor from "./pages/ProfileAIAdvisor";
import ProfileGCCAdvisor from "./pages/ProfileGCCAdvisor";
import ProfileCoEChampion from "./pages/ProfileCoEChampion";
import ProfileDigitalTransformation from "./pages/ProfileDigitalTransformation";
import InstallPage from "./pages/InstallPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={["light", "dark", "sepia", "midnight"]}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <div className="pt-12">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/digital-hub" element={<DigitalHub />} />
            <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
            <Route path="/ai-agents" element={<AgenticAIPage />} />
            <Route path="/profile/ai-advisor" element={<ProfileAIAdvisor />} />
            <Route path="/profile/gcc-advisor" element={<ProfileGCCAdvisor />} />
            <Route path="/profile/coe-champion" element={<ProfileCoEChampion />} />
            <Route path="/profile/digital-transformation" element={<ProfileDigitalTransformation />} />
            <Route path="/install" element={<InstallPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
