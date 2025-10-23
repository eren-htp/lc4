import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE, COMPANY_INFO, AGENCIES } from "@/const";
import { Paintbrush, Home as HomeIcon, Wallpaper, Wrench, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      title: "Peintures",
      description: "Large gamme de peintures décoratives et techniques pour tous vos projets professionnels et personnels.",
      icon: Paintbrush,
      href: "/peintures",
      image: "https://placehold.co/800x600/0D1B3E/FFFFFF?text=Peintures",
    },
    {
      title: "Revêtements de sols",
      description: "Parquets, stratifiés, vinyles et solutions techniques pour tous les usages.",
      icon: HomeIcon,
      href: "/revetements-sols",
      image: "https://placehold.co/800x600/0D1B3E/FFFFFF?text=Sols",
    },
    {
      title: "Revêtements muraux",
      description: "Collections exclusives de revêtements muraux haut de gamme pour tous les styles.",
      icon: Wallpaper,
      href: "/revetements-muraux",
      image: "https://placehold.co/800x600/0D1B3E/FFFFFF?text=Muraux",
    },
    {
      title: "Matériel & outillage",
      description: "Équipements et outils professionnels pour tous vos travaux de peinture et décoration.",
      icon: Wrench,
      href: "/materiel-outillage",
      image: "https://placehold.co/800x600/0D1B3E/FFFFFF?text=Materiel",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - 80vh */}
        <section 
          className="relative h-[80vh] flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('https://placehold.co/1920x1080/0D1B3E/FFFFFF?text=LC4+Peinture')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{APP_TITLE}</h1>
            <p className="text-2xl md:text-3xl mb-8">{COMPANY_INFO.slogan}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/nos-agences">
                <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100 text-lg px-8 py-6">
                  Nos agences
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E] text-lg px-8 py-6">
                  Nous contacter
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Bienvenue Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#0D1B3E]">Bienvenue chez {APP_TITLE}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {COMPANY_INFO.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Avec <strong>4 agences</strong> de proximité en <strong>Alsace</strong>, nous sommes votre partenaire de confiance 
                pour tous vos projets de peinture et de décoration. Que vous soyez artisan, architecte, collectivité ou particulier, 
                nous mettons notre expertise à votre service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Réactifs, disponibles et engagés, nous offrons à chacun de nos clients des conseils personnalisés, 
                des produits performants et des solutions adaptées à chaque projet.
              </p>
            </div>
          </div>
        </section>

        {/* Nos produits et services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#0D1B3E]">Nos produits et services</h2>
              <p className="text-lg text-gray-600">
                Des solutions sur mesure pour répondre à tous vos besoins en peinture et revêtements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon className="h-6 w-6 text-[#0D1B3E]" />
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={service.href}>
                        <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                          En savoir plus
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nos agences */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#0D1B3E]">Nos agences en Alsace</h2>
              <p className="text-lg text-gray-600">
                Retrouvez nos 4 agences spécialisées près de chez vous pour des conseils personnalisés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {AGENCIES.map((agency) => (
                <Card key={agency.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-[#0D1B3E]" />
                      <span>{agency.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">{agency.address}</p>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${agency.phone}`} className="hover:text-[#0D1B3E]">
                        {agency.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/nos-agences">
                <Button size="lg" className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                  Voir toutes nos agences
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0D1B3E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour vous conseiller et vous accompagner dans la réalisation de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100 text-lg px-8 py-6">
                  Appelez-nous
                </Button>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E] text-lg px-8 py-6">
                  Envoyez un email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

