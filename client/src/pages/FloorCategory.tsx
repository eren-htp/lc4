import { useRoute } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { FLOOR_CATEGORIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";

export default function FloorCategory() {
  const [, params] = useRoute("/revetements-sols/:slug");
  const category = FLOOR_CATEGORIES.find(cat => cat.slug === params?.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">Catégorie non trouvée</h1>
            <p className="text-gray-600">Cette catégorie de revêtement de sol n'existe pas.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=${encodeURIComponent(category.name)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{category.description}</p>
          </div>
        </section>

        {/* Contenu */}
        <section className="bg-gradient-animated py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Découvrez notre sélection de <strong>{category.name.toLowerCase()}</strong>, 
                  spécialement choisie pour répondre aux exigences des professionnels et des particuliers. 
                  Nos produits combinent esthétique, performance technique et durabilité exceptionnelle.
                </p>
                
                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Caractéristiques principales</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Résistance optimale</h3>
                    <p className="text-gray-600">
                      Conçus pour résister à l'usure quotidienne et aux passages intensifs, 
                      garantissant une longévité exceptionnelle.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Design varié</h3>
                    <p className="text-gray-600">
                      Large choix de styles, couleurs et finitions pour s'adapter 
                      à tous les intérieurs et préférences esthétiques.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Facilité d'entretien</h3>
                    <p className="text-gray-600">
                      Revêtements faciles à nettoyer et à entretenir pour un confort 
                      au quotidien sans contraintes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Installation facilitée</h3>
                    <p className="text-gray-600">
                      Systèmes de pose modernes et efficaces, avec accompagnement 
                      de nos experts pour un résultat parfait.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Applications recommandées</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Ces revêtements sont particulièrement adaptés pour une utilisation dans divers environnements, 
                  qu'il s'agisse de projets résidentiels, commerciaux ou industriels. Leur polyvalence et leurs 
                  performances techniques en font un choix idéal pour de nombreuses applications.
                </p>

                <div className="bg-[#0D1B3E] text-white p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
                  <p className="text-lg mb-6">
                    Nos experts sont à votre disposition pour vous accompagner dans votre projet. 
                    Contactez-nous pour obtenir des conseils personnalisés et un devis gratuit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                        LC4
                      </Button>
                    </a>
                    <a href={`mailto:${COMPANY_INFO.email}`}>
                      <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]">
                        Envoyez un email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

