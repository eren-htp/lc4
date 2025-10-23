import { useRoute } from "wouter";
import { WALL_CATEGORIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";

export default function WallCategory() {
  const [, params] = useRoute("/revetements-muraux/:slug");
  const category = WALL_CATEGORIES.find(cat => cat.slug === params?.slug);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">Collection non trouvée</h1>
            <p className="text-gray-600">Cette collection de revêtements muraux n'existe pas.</p>
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Explorez la <strong>{category.name}</strong>, une sélection exclusive de revêtements muraux 
                  qui transformeront vos espaces. Cette collection allie design contemporain, qualité supérieure 
                  et innovation technique pour créer des ambiances uniques et personnalisées.
                </p>
                
                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Points forts de la collection</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Design exclusif</h3>
                    <p className="text-gray-600">
                      Motifs et textures uniques créés par des designers renommés 
                      pour des intérieurs d'exception.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Qualité premium</h3>
                    <p className="text-gray-600">
                      Matériaux haut de gamme garantissant durabilité, résistance 
                      et facilité d'entretien.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Tendances actuelles</h3>
                    <p className="text-gray-600">
                      Collections suivant les dernières tendances en matière de 
                      décoration et d'aménagement intérieur.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Pose simplifiée</h3>
                    <p className="text-gray-600">
                      Technologies modernes facilitant la pose et garantissant 
                      un résultat professionnel.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Styles et ambiances</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Cette collection offre une palette variée de styles pour s'adapter à tous les projets : 
                  du classique intemporel au contemporain audacieux, en passant par le naturel et l'élégant. 
                  Chaque motif a été pensé pour créer une atmosphère unique et refléter votre personnalité.
                </p>

                <h2 className="text-3xl font-bold text-[#0D1B3E] mt-12 mb-6">Découvrez la collection en showroom</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Pour apprécier pleinement la qualité et la beauté de cette collection, nous vous invitons 
                  à visiter l'une de nos agences. Vous pourrez toucher les matières, visualiser les motifs 
                  en grand format et bénéficier des conseils personnalisés de nos experts en décoration.
                </p>

                <div className="bg-[#0D1B3E] text-white p-8 rounded-lg mt-12">
                  <h2 className="text-3xl font-bold mb-4">Envie de découvrir cette collection ?</h2>
                  <p className="text-lg mb-6">
                    Nos conseillers sont à votre écoute pour vous présenter la collection en détail 
                    et vous aider à faire le meilleur choix pour votre projet.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`tel:${COMPANY_INFO.phone}`}>
                      <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                        Appelez-nous
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

