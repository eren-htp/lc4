import { Link } from "wouter";
import { PAINT_CATEGORIES } from "@/const";
import { ArrowRight, PaintBucket, CheckCircle, Palette, Leaf, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Peintures() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative h-[50vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x600/0D1B3E/FFFFFF?text=Peintures')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Peintures</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Large gamme de peintures décoratives et techniques pour tous vos projets
            </p>
          </div>
	        </section>

		        {/* Introduction */}
		        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Notre gamme de peintures</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Découvrez notre large sélection de peintures professionnelles adaptées à tous vos besoins. 
                Que vous recherchiez des peintures intérieures, extérieures, techniques ou décoratives, 
                nous avons la solution idéale pour votre projet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos peintures sont sélectionnées auprès des meilleurs fabricants pour garantir qualité, 
                durabilité et respect de l'environnement. Nos experts sont à votre disposition pour vous 
                conseiller dans le choix des produits les plus adaptés à vos besoins spécifiques.
              </p>
            </div>
          </div>
	        </section>



	        {/* Catégories de peintures */}
	        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos catégories de peintures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAINT_CATEGORIES.map((category) => (
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
                    <Link href={`/peintures/${category.slug}`}>
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
              <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Pourquoi choisir nos peintures ?</h2>
<div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="flex-shrink-0 h-8 w-8 text-[#0D1B3E]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-1">Qualité professionnelle</h3>
                    <p className="text-gray-600">
                      Nous sélectionnons uniquement des peintures de qualité professionnelle, 
                      garantissant un résultat optimal et durable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Palette className="flex-shrink-0 h-8 w-8 text-[#0D1B3E]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-1">Large choix de finitions</h3>
                    <p className="text-gray-600">
                      Mate, satinée, brillante, velours... Trouvez la finition parfaite 
                      pour chaque pièce et chaque style.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="flex-shrink-0 h-8 w-8 text-[#0D1B3E]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-1">Respect de l'environnement</h3>
                    <p className="text-gray-600">
                      De nombreuses peintures labellisées et certifiées pour des projets 
                      respectueux de l'environnement et de la santé.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="flex-shrink-0 h-8 w-8 text-[#0D1B3E]" />
                  <div>
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-1">Conseils d'experts</h3>
                    <p className="text-gray-600">
                      Nos équipes vous accompagnent dans le choix des produits et vous conseillent 
                      sur les techniques d'application.
                    </p>
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

