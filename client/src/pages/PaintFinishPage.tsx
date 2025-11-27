import { useRoute, Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { INTERIOR_PAINT_PRODUCTS, PaintProduct } from "@shared/interiorPaints";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

// Mapping des slugs aux noms de finition
const FINISH_MAP: { [key: string]: PaintProduct['finish'] } = {
  "impression": "Impression",
  "mat": "Mat",
  "velours": "Velours",
  "satin": "Satin",
};

export default function PaintFinishPage() {
  const [, params] = useRoute("/peintures/peintures-interieures/:finishSlug");
  const finishSlug = params?.finishSlug;
  const finishName = FINISH_MAP[finishSlug as string];

  if (!finishName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">Finition non trouvée</h1>
            <p className="text-gray-600">Cette finition de peinture n'existe pas.</p>
            <Link href="/peintures/peintures-interieures">
              <Button className="mt-6 bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour aux Peintures Intérieures
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const filteredProducts = INTERIOR_PAINT_PRODUCTS.filter(
    (product) => product.finish === finishName
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[40vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://placehold.co/1920x400/0D1B3E/FFFFFF?text=${encodeURIComponent("Peinture Intérieure " + finishName)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Peintures Intérieures - {finishName}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Découvrez notre sélection de peintures à finition {finishName.toLowerCase()}.
            </p>
          </div>
        </section>

        {/* Contenu */}
        <section className="bg-gradient-animated py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <Link href="/peintures/peintures-interieures">
                <Button variant="outline" className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour à la sélection de finition
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8">
              Produits {finishName} ({filteredProducts.length})
            </h2>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-[#0D1B3E]">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/400x300/0D1B3E/FFFFFF?text=" +
                            encodeURIComponent(product.name);
                        }}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg text-[#0D1B3E]">
                          {product.name}
                        </CardTitle>
                        <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                          {product.finish}
                        </span>
                      </div>
                      <CardDescription className="text-sm">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-lg font-semibold">
                  Aucun produit trouvé pour la finition {finishName}.
                </p>
                <p className="text-gray-500 mt-2">
                  Veuillez revenir à la sélection pour choisir une autre finition.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
