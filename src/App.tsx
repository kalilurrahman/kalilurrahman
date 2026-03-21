import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import PageLoader from "./components/PageLoader";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DigitalHub = lazy(() => import("./pages/DigitalHub"));
const KnowledgeHubPage = lazy(() => import("./pages/KnowledgeHubPage"));
const AgenticAIPage = lazy(() => import("./pages/AgenticAIPage"));
const ProfileAIAdvisor = lazy(() => import("./pages/ProfileAIAdvisor"));
const ProfileGCCAdvisor = lazy(() => import("./pages/ProfileGCCAdvisor"));
const ProfileCoEChampion = lazy(() => import("./pages/ProfileCoEChampion"));
const ProfileDigitalTransformation = lazy(() => import("./pages/ProfileDigitalTransformation"));
const InstallPage = lazy(() => import("./pages/InstallPage"));
const AppsPortfolio = lazy(() => import("./pages/AppsPortfolio"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={["light", "dark", "sepia", "midnight"]}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ErrorBoundary>
          <BrowserRouter>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-14 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="pt-12">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/digital-hub" element={<DigitalHub />} />
                  <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
                  <Route path="/ai-agents" element={<AgenticAIPage />} />
                  <Route path="/apps-portfolio" element={<AppsPortfolio />} />
                  <Route path="/profile/ai-advisor" element={<ProfileAIAdvisor />} />
                  <Route path="/profile/gcc-advisor" element={<ProfileGCCAdvisor />} />
                  <Route path="/profile/coe-champion" element={<ProfileCoEChampion />} />
                  <Route path="/profile/digital-transformation" element={<ProfileDigitalTransformation />} />
                  <Route path="/install" element={<InstallPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
