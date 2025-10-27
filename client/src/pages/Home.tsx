import { Link } from "wouter";
import { MapPin, Paintbrush, Home as HomeIcon, Frame, Wrench, Phone, ArrowRight } from "lucide-react";
import { APP_TITLE, COMPANY_INFO, AGENCIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      icon: Paintbrush,
      title: "Peintures",
      description: "Large gamme de peintures décoratives et techniques pour tous vos projets",
      href: "/peintures",
    },
    {
      icon: HomeIcon,
      title: "Revêtements de sols",
      description: "Parquets, stratifiés, vinyles et moquettes pour tous les usages",
      href: "/revetements-sols",
    },
    {
      icon: Frame,
      title: "Revêtements muraux",
      description: "Collections exclusives alliant esthétique et durabilité",
      href: "/revetements-muraux",
    },
    {
      icon: Wrench,
      title: "Matériel & Outillage",
      description: "Tout l'équipement nécessaire pour vos travaux de peinture",
      href: "/materiel-outillage",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background avec pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E] to-[#1a2744]">
            <div 
              className="absolute inset-0 opacity-10" 
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
          </div>
          
          {/* Contenu */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {APP_TITLE}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Découvrez nos produits haut de gamme<br />
              pour vos projets résidentiels et professionnels
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-[#0D1B3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Nous contacter
              </Link>
              
              <Link 
                href="/qui-sommes-nous" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0D1B3E] transition-all"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-gray-300 text-sm font-medium">Livraison sur :</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {AGENCIES.map((agency) => (
                  <span 
                    key={agency.id}
                    className="px-4 py-2 bg-[#0D1B3E]/60 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                  >
                    {agency.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION BIENVENUE */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] text-center mb-6">
              Bienvenue chez {APP_TITLE}
            </h2>
            
            <div className="space-y-4 text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous mettons notre expertise en peinture et décoration au service de tous ceux qui exigent qualité et fiabilité : artisans, architectes, collectivités et particuliers passionnés.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec nos <strong className="text-[#0D1B3E]">4 agences</strong> de proximité dans le <strong className="text-[#0D1B3E]">Bas-Rhin</strong>, nous vous proposons un accompagnement personnalisé et des produits performants adaptés à chaque projet.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Réactifs, disponibles et engagés, nous offrons à chacun de nos clients des conseils personnalisés, des produits performants et des solutions adaptées à chaque projet.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION PRODUITS ET SERVICES */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                Nos produits et services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des solutions sur mesure pour répondre à tous vos besoins en peinture et revêtements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.title}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    {/* Icône */}
                    <div className="w-16 h-16 bg-[#0D1B3E] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-xl font-semibold text-[#0D1B3E] mb-3">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Bouton */}
                    <Link 
                      href={service.href}
                      className="block w-full text-center border-2 border-[#0D1B3E] text-[#0D1B3E] py-2 px-4 rounded-lg font-medium hover:bg-[#0D1B3E] hover:text-white transition-all"
                    >
                      Découvrir
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION ZONE DE LIVRAISON */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                Zone de livraison
              </h2>
              <p className="text-lg text-gray-600">
                Nous livrons dans toute l'Alsace et les environs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-[#0D1B3E] min-w-[200px] text-center">
                <MapPin className="w-8 h-8 text-[#0D1B3E] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#0D1B3E]">
                  Strasbourg
                </h3>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-[#0D1B3E] min-w-[200px] text-center">
                <MapPin className="w-8 h-8 text-[#0D1B3E] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#0D1B3E]">
                  Souffelweyersheim
                </h3>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-[#0D1B3E] min-w-[200px] text-center">
                <MapPin className="w-8 h-8 text-[#0D1B3E] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#0D1B3E]">
                  Haguenau
                </h3>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-[#0D1B3E] min-w-[200px] text-center">
                <MapPin className="w-8 h-8 text-[#0D1B3E] mx-auto mb-3" />
                <h3 className="text-xl font-bold text-[#0D1B3E]">
                  Schweighouse
                </h3>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0D1B3E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2744] transition-all shadow-lg"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION CTA FINALE */}
        <section className="py-16 md:py-20 bg-[#0D1B3E]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à transformer vos espaces ?
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Nos experts sont à votre disposition pour vous conseiller et vous accompagner dans votre projet
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0D1B3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Nous contacter
              </Link>
              
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0D1B3E] transition-all"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

