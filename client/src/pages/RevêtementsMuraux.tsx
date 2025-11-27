import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { WALL_CATEGORIES } from "@/const";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RevêtementsMuraux() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Revetements+Muraux')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Revêtements muraux</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Collections exclusives pour habiller vos murs avec style et élégance
            </p>
          </div>
	        </section>

	        {/* Introduction */}
	        <section className="bg-gradient-animated py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Notre gamme de revêtements muraux</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Découvrez notre gamme exclusive de revêtements muraux haut de gamme, alliant esthétique, 
                durabilité et facilité d'entretien. Nos solutions s'adaptent à tous les styles et à tous 
                les espaces, du résidentiel au commercial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Des papiers peints design aux solutions techniques innovantes, nous proposons des collections 
                tendance qui transformeront vos intérieurs. Nos experts vous accompagnent dans le choix 
                des motifs, textures et couleurs pour créer l'ambiance parfaite.
              </p>
            </div>
          </div>
        </section>



        {/* Collections */}
        <section className="bg-gradient-animated py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {WALL_CATEGORIES.map((category) => (
                <Card key={category.id} className="hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={`https://placehold.co/800x600/0D1B3E/FFFFFF?text=${encodeURIComponent(category.name)}`}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.name}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/revetements-muraux/${category.slug}`}>
                      <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 group">
                        Découvrir la collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
	        </section>

	        {/* Avantages */}
	        <section className="bg-gradient-animated py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Pourquoi choisir nos revêtements muraux ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Collections exclusives</h3>
                  <p className="text-gray-600">
                    Accès à des collections haut de gamme et tendances, 
                    pour des intérieurs uniques et personnalisés.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Qualité supérieure</h3>
                  <p className="text-gray-600">
                    Matériaux durables et résistants, garantissant une longévité 
                    et une beauté préservée dans le temps.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Facilité de pose</h3>
                  <p className="text-gray-600">
                    Solutions techniques facilitant la pose et l'entretien, 
                    avec conseils d'experts pour un résultat parfait.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Personnalisation</h3>
                  <p className="text-gray-600">
                    Large choix de motifs, textures et couleurs pour créer 
                    l'ambiance qui vous ressemble.
                  </p>
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

