import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import QuiSommesNous from "./pages/QuiSommesNous";
import Contact from "./pages/Contact";
import Peintures from "./pages/Peintures";
import PeintureCategory from "./pages/PeintureCategory";
import RevêtementsSols from "./pages/RevetementsSols";
import FloorCategory from "./pages/FloorCategory";
import RevêtementsMuraux from "./pages/RevetementsMuraux";
import WallCategory from "./pages/WallCategory";
import MatérielOutillage from "./pages/MaterielOutillage";
import PaintFinishPage from "./pages/PaintFinishPage";
import ImpressionsProducts from "./pages/ImpressionsProducts";
import ImpressionProductDetail from "./pages/ImpressionProductDetail";
import PeintureSolsProducts from "./pages/PeintureSolsProducts";
import PeintureSolProductDetail from "./pages/PeintureSolProductDetail";
import MetalProducts from "./pages/MetalProducts";
import MetalProductDetail from "./pages/MetalProductDetail";
import BoisProducts from "./pages/BoisProducts";
import BoisProductDetail from "./pages/BoisProductDetail";
import PeintureInterieurProducts from "./pages/PeintureInterieurProducts";
import PeintureInterieurProductDetail from "./pages/PeintureInterieurProductDetail";
import TarkettCollections from "./pages/TarkettCollections";
import TarkettCollectionDetail from "./pages/TarkettCollectionDetail";
import WallpaperBrandDetail from "./pages/WallpaperBrandDetail";
import PvcProducts from "./pages/PvcProducts";
import PvcProductDetail from "./pages/PvcProductDetail";
import StratifieProducts from "./pages/StratifieProducts";
import StratifieProductDetail from "./pages/StratifieProductDetail";
import TextileProducts from "./pages/TextileProducts";
import TextileProductDetail from "./pages/TextileProductDetail";
import LaquesTenduProducts from "./pages/LaquesTenduProducts";
import LaquesTenduProductDetail from "./pages/LaquesTenduProductDetail";
import PreparationMursProducts from "./pages/PreparationMursProducts";
import ToileVerreProducts from "./pages/ToileVerreProducts";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/qui-sommes-nous"} component={QuiSommesNous} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/peintures"} component={Peintures} />
      <Route path={"/peintures/impressions/produits"} component={ImpressionsProducts} />
      <Route path={"/peintures/impressions/produit/:productId"} component={ImpressionProductDetail} />
      <Route path={"/peintures/peinture-sols/produits"} component={PeintureSolsProducts} />
      <Route path={"/peintures/peinture-sols/produit/:productId"} component={PeintureSolProductDetail} />
      <Route path={"/peintures/metal/produits"} component={MetalProducts} />
      <Route path={"/peintures/metal/produit/:productId"} component={MetalProductDetail} />
      <Route path={"/peintures/bois/produits"} component={BoisProducts} />
      <Route path={"/peintures/bois/produit/:productId"} component={BoisProductDetail} />
      <Route path={"/peintures/peinture-interieur/produits"} component={PeintureInterieurProducts} />
      <Route path={"/peintures/peinture-interieur/produit/:slug"} component={PeintureInterieurProductDetail} />
      <Route path={"/peintures/peinture-interieur/:finishSlug"} component={PaintFinishPage} />
      <Route path={"/peintures/peintures-laques-tendu/produits"} component={LaquesTenduProducts} />
      <Route path={"/peintures/peintures-laques-tendu/produit/:id"} component={LaquesTenduProductDetail} />
      <Route path={"/peintures/:slug"} component={PeintureCategory} />
      <Route path={"/revetements-sols"} component={RevêtementsSols} />
      <Route path={"/revetements-sols/parquets-et-bois/tarkett/:id"} component={TarkettCollectionDetail} />
      <Route path={"/revetements-sols/parquets-et-bois/tarkett"} component={TarkettCollections} />
      <Route path={"/revetements-sols/sols-pvc/produits"} component={PvcProducts} />
      <Route path={"/revetements-sols/sols-pvc/produit/:id"} component={PvcProductDetail} />
      <Route path={"/revetements-sols/sols-stratifies/produits"} component={StratifieProducts} />
      <Route path={"/revetements-sols/sols-stratifies/produit/:id"} component={StratifieProductDetail} />
      <Route path={"/revetements-sols/sols-textiles/produits"} component={TextileProducts} />
      <Route path={"/revetements-sols/sols-textiles/produit/:id"} component={TextileProductDetail} />
      <Route path={"/revetements-sols/:slug"} component={FloorCategory} />
      <Route path={"/revetements-muraux"} component={RevêtementsMuraux} />
      <Route path={"/revetements-muraux/preparations-des-murs/produits"} component={PreparationMursProducts} />
      <Route path={"/revetements-muraux/toile-de-verre/produits"} component={ToileVerreProducts} />
      <Route path={"/revetements-muraux/marque/:id"} component={WallpaperBrandDetail} />
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
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
