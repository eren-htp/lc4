import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import { WALL_CATEGORIES } from "@/const";
import { ArrowRight, Home, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WALLPAPER_BRANDS } from "@shared/wallpaperBrands";

export default function RevêtementsMuraux() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">Revêtements muraux</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1920&q=80')",
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
        <section className="py-20 bg-white">
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

        {/* Marques de papiers peints */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos marques partenaires</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous distribuons les plus grandes marques françaises et européennes de papiers peints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WALLPAPER_BRANDS.map((brand, index) => (
                <ScrollReveal key={brand.id} delay={index * 0.1}>
                  <Link href={`/revetements-muraux/marque/${brand.id}`}>
                    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://placehold.co/400x300/0D1B3E/FFFFFF?text=" +
                              encodeURIComponent(brand.name);
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block bg-white/90 backdrop-blur-sm text-[#0D1B3E] px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                            {brand.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-grow mb-3">
                          {brand.description}
                        </p>
                        <span className="text-[#0D1B3E] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Découvrir <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {WALL_CATEGORIES.map((category) => (
                <Card key={category.id} className="hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-[#0D1B3E] to-purple-900 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold text-center px-4">{category.name}</span>
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

        {/* Sous-catégories : Préparations des murs & Toile de verre */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">Nos autres produits muraux</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Préparations, enduits, colles et toiles de verre pour des murs parfaits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <ScrollReveal delay={0}>
                <Link href="/revetements-muraux/preparations-des-murs/produits">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
                    <div className="w-full h-48 bg-gradient-to-br from-[#0D1B3E] to-[#3a5a8f] flex items-center justify-center">
                      <span className="text-3xl font-bold text-white text-center px-4">Préparations des murs</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">Préparations des murs</h3>
                      <p className="text-gray-600 flex-grow">11 produits : enduits, colles et produits de préparation (Beissier, Semin, Bagar, Quelyd, Decotric).</p>
                      <div className="mt-4">
                        <span className="text-[#0D1B3E] font-semibold inline-flex items-center gap-1">Voir les produits &rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <Link href="/revetements-muraux/toile-de-verre/produits">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer">
                    <div className="w-full h-48 bg-gradient-to-br from-[#0D1B3E] to-[#2a1f4f] flex items-center justify-center">
                      <span className="text-3xl font-bold text-white text-center px-4">Toile de verre</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">Toile de verre</h3>
                      <p className="text-gray-600 flex-grow">Toiles de verre décoratives et de rénovation Novelio adFORS par Saint-Gobain.</p>
                      <div className="mt-4">
                        <span className="text-[#0D1B3E] font-semibold inline-flex items-center gap-1">Voir les produits &rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-gray-50">
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
