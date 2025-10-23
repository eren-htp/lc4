import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import QuiSommesNous from "./pages/QuiSommesNous";
import NosAgences from "./pages/NosAgences";
import Peintures from "./pages/Peintures";
import PeintureCategory from "./pages/PeintureCategory";
import RevêtementsSols from "./pages/RevêtementsSols";
import FloorCategory from "./pages/FloorCategory";
import RevêtementsMuraux from "./pages/RevêtementsMuraux";
import WallCategory from "./pages/WallCategory";
import MatérielOutillage from "./pages/MatérielOutillage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/qui-sommes-nous"} component={QuiSommesNous} />
      <Route path={"/nos-agences"} component={NosAgences} />
      <Route path={"/peintures"} component={Peintures} />
      <Route path={"/peintures/:slug"} component={PeintureCategory} />
      <Route path={"/revetements-sols"} component={RevêtementsSols} />
      <Route path={"/revetements-sols/:slug"} component={FloorCategory} />
      <Route path={"/revetements-muraux"} component={RevêtementsMuraux} />
      <Route path={"/revetements-muraux/:slug"} component={WallCategory} />
      <Route path={"/materiel-outillage"} component={MatérielOutillage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

