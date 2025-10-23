import { COMPANY_INFO } from "@/const";
import { Wrench, Paintbrush, Ruler, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MatérielOutillage() {
  const categories = [
    {
      icon: Paintbrush,
      title: "Outils d'application",
      description: "Pinceaux, rouleaux, pistolets et tous les outils nécessaires pour une application professionnelle de la peinture.",
    },
    {
      icon: Ruler,
      title: "Préparation des surfaces",
      description: "Enduits, mastics, rubans de masquage et tous les produits pour préparer parfaitement vos surfaces.",
    },
    {
      icon: Wrench,
      title: "Équipement professionnel",
      description: "Échafaudages, échelles, bâches de protection et équipements de sécurité pour travailler en toute sécurité.",
    },
    {
      icon: ShoppingBag,
      title: "Consommables",
      description: "Bacs, grilles, mélangeurs et tous les accessoires indispensables pour vos chantiers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Materiel+et+Outillage')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Matériel & outillage</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Équipements et outils professionnels pour tous vos travaux
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Votre fournisseur en matériel professionnel</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Complétez vos achats de peintures et revêtements avec notre gamme complète de matériel 
                et d'outillage professionnel. Nous proposons tous les équipements nécessaires pour mener 
                à bien vos projets, de la préparation des surfaces à la finition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Que vous soyez artisan professionnel ou particulier bricoleur, vous trouverez chez nous 
                tous les outils et accessoires de qualité pour réaliser vos travaux dans les meilleures conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Catégories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos catégories de matériel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.title} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-3 bg-[#0D1B3E]/10 rounded-lg">
                          <Icon className="h-8 w-8 text-[#0D1B3E]" />
                        </div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-base">{category.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Pourquoi choisir notre matériel ?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-[#0D1B3E] mb-3">Qualité</div>
                  <p className="text-gray-600">
                    Matériel professionnel de marques reconnues pour garantir 
                    performance et durabilité.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-[#0D1B3E] mb-3">Choix</div>
                  <p className="text-gray-600">
                    Large gamme d'outils et accessoires pour répondre à tous 
                    les besoins et budgets.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-[#0D1B3E] mb-3">Conseil</div>
                  <p className="text-gray-600">
                    Expertise de nos équipes pour vous guider vers les outils 
                    les plus adaptés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marques */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Nos marques partenaires</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nous travaillons avec les meilleures marques du marché pour vous garantir 
                des outils et équipements de qualité professionnelle. Nos partenaires sont 
                sélectionnés pour leur fiabilité, leur innovation et leur engagement qualité.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                    <img 
                      src={`https://placehold.co/200x100/F3F4F6/6B7280?text=Marque+${i}`}
                      alt={`Marque ${i}`}
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0D1B3E] text-white p-12 rounded-lg text-center">
              <h2 className="text-4xl font-bold mb-6">Besoin de matériel pour votre projet ?</h2>
              <p className="text-xl mb-8">
                Visitez l'une de nos agences pour découvrir notre gamme complète de matériel 
                et bénéficier des conseils de nos experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${COMPANY_INFO.phone}`}>
                  <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                    Contactez-nous
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

