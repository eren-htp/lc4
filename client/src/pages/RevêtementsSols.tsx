import { Link } from "wouter";
import { FLOOR_CATEGORIES } from "@/const";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RevêtementsSols() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Revetements+de+Sols')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Revêtements de sols</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Solutions innovantes et durables pour tous vos projets de sols
            </p>
          </div>
	        </section>

		        {/* Introduction */}
		        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Notre gamme de revêtements de sols</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre sélection de revêtements de sol combine innovation technologique et design contemporain. 
                Parquets, stratifiés, vinyles ou moquettes, nous proposons des solutions adaptées à chaque usage, 
                qu'il soit résidentiel, commercial ou industriel.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tous nos produits sont sélectionnés pour leur qualité, leur durabilité et leur facilité d'entretien. 
                Nos experts vous accompagnent dans le choix du revêtement le plus adapté à vos besoins et contraintes.
              </p>
            </div>
          </div>
	        </section>

		        {/* Galerie de Produits */}
		        <section className="py-20">
		          <div className="container mx-auto px-4">
		            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos Produits en Image</h2>
		            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			              {/* Images de Revêtements de Sols */}
			              {['DSC00164.JPG', 'DSC00234.JPG'].map((img, index) => (
		                <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-square">
		                  <img 
		                    src={`/images/${img}`}
		                    alt={`Revêtement de sol ${index + 1}`}
		                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
		                  />
		                </div>
		              ))}
		            </div>
		          </div>
		        </section>

	        {/* Catégories */}
	        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos catégories de revêtements de sols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLOOR_CATEGORIES.map((category) => (
                <Card key={category.id} className="hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={`https://placehold.co/800x600/0D1B3E/FFFFFF?text=${encodeURIComponent(category.name)}`}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/revetements-sols/${category.slug}`}>
                      <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 group">
                        Découvrir
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
	        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Pourquoi choisir nos revêtements de sols ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Durabilité exceptionnelle</h3>
                  <p className="text-gray-600">
                    Des revêtements conçus pour résister au temps et à l'usage intensif, 
                    garantissant un investissement durable.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Design moderne</h3>
                  <p className="text-gray-600">
                    Large choix de styles, couleurs et textures pour s'harmoniser 
                    avec tous les intérieurs et ambiances.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Facilité d'entretien</h3>
                  <p className="text-gray-600">
                    Revêtements faciles à nettoyer et à entretenir pour un confort 
                    au quotidien et une hygiène optimale.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Installation professionnelle</h3>
                  <p className="text-gray-600">
                    Conseils d'experts pour la pose et recommandations de professionnels 
                    qualifiés si nécessaire.
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

