import { Link } from "wouter";
import ModalRappel from "@/components/ModalRappel";
import { useState, useEffect } from "react";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";
import { MapPin, Paintbrush, Home as HomeIcon, Frame, Wrench, Phone, ArrowRight, User, Star } from "lucide-react";
import { APP_TITLE, COMPANY_INFO, AGENCIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerLogoSlider from "@/components/PartnerLogoSlider";

const partnerLogos = [
  '/images/partners/adfordslogo.png',
  '/images/partners/alsafloo.png',
  '/images/partners/astral-logo.jpg',
  '/images/partners/beissierlogo.png',
  '/images/partners/blanchonlogo.png',
  '/images/partners/bostiklogo.png',
  '/images/partners/brennenstuhllogo.png',
  '/images/partners/cimentol-logo.png',
  '/images/partners/ciretfrance-logo.png',
  '/images/partners/decotriclogo.png',
  '/images/partners/domaterralogo.png',
  '/images/partners/dulary-logo.png',
  '/images/partners/erfurt-logo.png',
  '/images/partners/euromairlogo.png',
  '/images/partners/festoollogo.png',
  '/images/partners/logo-dorken.jpg',
  '/images/partners/logo.png',
  '/images/partners/logo-blancolor.png',
  '/images/partners/loutilparfaitlogo.png',
  '/images/partners/marbuglogo.png',
  '/images/partners/montecolino-logo.jpg',
  '/images/partners/nmc.png',
  '/images/partners/noel-marquet.png',
  '/images/partners/prblogo.png',
  '/images/partners/primexlogo.png',
  '/images/partners/romus-logo.png',
  '/images/partners/saint-gobain-logo.png',
  '/images/partners/seminlogo.png',
  '/images/partners/sikkenslogo.png',
  '/images/partners/tarkettlogo.png',
  '/images/partners/theard-logo-noir-2023.png',
  '/images/partners/vepro.png',
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);
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
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden h-[70vh] md:h-[80vh] bg-gradient-animated-dark">
          {/* Background Image */}
          <img 
            src="/images/DSC00194.JPG" 
            alt="Intérieur du magasin LC4 Peinture avec des pots de peinture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B3E]/80" />
          
          {/* Contenu */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 transition-all duration-1000 hero-animate ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <img src="/logo.png" alt="" className="h-16 md:h-20 lg:h-24 w-auto mx-auto" />
            </h1>
            
            <p className={`text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 leading-relaxed transition-all duration-1000 delay-200 hero-subtitle-animate ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
Magasin de Peinture & Décoration
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 hero-cta-animate ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-[#0D1B3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:lift transition-all shadow-lg btn-animate"
              >
                <Phone className="w-5 h-5" />
                Être rappelé
              </button>
              
              <Link 
                href="/qui-sommes-nous" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0D1B3E] transition-all hover-lift btn-animate"
              >
                En savoir plus
              </Link>
            </div>
            

				          </div>
					        </section>
			
				        {/* SECTION PARTENAIRES */}
		        <ScrollReveal direction="up" delay={0.2}>
		          <section className="py-12 bg-white bg-gradient-animated-slow">
		          <div className="container mx-auto px-4 text-center">
		            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-8">
		              Nos partenaires
		            </h2>
		            <PartnerLogoSlider logos={partnerLogos} />
					           			          </div>
					        </section>
		        </ScrollReveal>
				
				        {/* SECTION BIENVENUE */}        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-white bg-gradient-animated">
		          <div className="container mx-auto px-4 max-w-5xl">
		            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] text-center mb-6">
		              Bienvenue chez LC4
		            </h2>
		            
		            <div className="space-y-4 text-center">
		              <p className="text-lg text-gray-600 leading-relaxed">
		                LC4 Peinture & Décoration est votre partenaire de confiance à Mundolsheim pour tous vos projets de peinture, revêtements de sols et muraux. Nous mettons notre expertise au service des professionnels et des particuliers exigeants.
		              </p>
		              
		              <p className="text-lg text-gray-600 leading-relaxed">
		                Notre équipe de professionnels vous conseille et vous accompagne de A à Z, de la sélection des produits à la réalisation de vos chantiers. Nous vous garantissons des produits performants et un service de qualité.
		              </p>
		              
			              <p className="text-lg text-gray-600 leading-relaxed">
			                Situés à Mundolsheim, nous couvrons les zones de Strasbourg, Souffelweyersheim, Haguenau et Schweighouse. Contactez-nous pour un devis personnalisé.
			              </p>
			            </div>
			            
			            <div className="text-center mt-8">
			              <Link 
			                href="/qui-sommes-nous"
			                className="inline-flex items-center gap-2 bg-[#0D1B3E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2744] transition-all shadow-lg"
			              >
			                Découvrez-nous
			                <ArrowRight className="w-5 h-5" />
			              </Link>
			            </div>
		          </div>
        </section>
        </ScrollReveal>
			
			        {/* SECTION PRODUITS ET SERVICES */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-gray-50 bg-gradient-animated-dark">
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
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.title}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 feature-animate card-animate"
                    style={{ animationDelay: `${index * 150}ms` }}
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
        </ScrollReveal>
			
			        {/* SECTION AVIS CLIENTS */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-gray-50 bg-gradient-animated">
			          <div className="container mx-auto px-4 max-w-7xl">
			            <div className="text-center mb-12">
			              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
			                Ce que nos clients disent de nous
			              </h2>
<div className="flex items-center justify-center gap-2 text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-semibold">
				                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
				                <span>4,9/5 — Basé sur 73 avis Google vérifiés</span>
				              </div>
			            </div>
			
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Avis 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl testimonial-animate card-animate">
			                <div className="flex items-center mb-3">
			                  <div className="flex gap-1 text-yellow-500">
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                  </div>
			                </div>
			                <p className="text-[#0D1B3E] italic mb-4 leading-relaxed">
			                  "Excellent accueil et conseils avisés. Je recommande vivement ce magasin pour la qualité de ses produits et son service client irréprochable."
			                </p>
			                <div className="flex items-center">
			                  <User className="w-6 h-6 text-gray-400 mr-3" />
			                  <span className="font-semibold text-[#0D1B3E]">— Client vérifié</span>
			                </div>
			              </div>
			
              {/* Avis 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl testimonial-animate card-animate" style={{ animationDelay: '150ms' }}>
			                <div className="flex items-center mb-3">
			                  <div className="flex gap-1 text-yellow-500">
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                  </div>
			                </div>
			                <p className="text-[#0D1B3E] italic mb-4 leading-relaxed">
			                  "Un choix immense de produits de qualité et une équipe toujours à l'écoute. C'est mon adresse de référence pour tous mes chantiers."
			                </p>
			                <div className="flex items-center">
			                  <User className="w-6 h-6 text-gray-400 mr-3" />
			                  <span className="font-semibold text-[#0D1B3E]">— Artisan partenaire</span>
			                </div>
			              </div>
			
              {/* Avis 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl testimonial-animate card-animate" style={{ animationDelay: '300ms' }}>
			                <div className="flex items-center mb-3">
			                  <div className="flex gap-1 text-yellow-500">
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                    <Star className="w-5 h-5 fill-yellow-500" />
				                  </div>
			                </div>
			                <p className="text-[#0D1B3E] italic mb-4 leading-relaxed">
			                  "Le personnel est très compétent et sympathique. Ils ont su me guider vers les produits parfaits pour mon projet de rénovation."
			                </p>
			                <div className="flex items-center">
			                  <User className="w-6 h-6 text-gray-400 mr-3" />
			                  <span className="font-semibold text-[#0D1B3E]">— Particulier satisfait</span>
			                </div>
			              </div>
			            </div>
			          </div>
			        </section>
        </ScrollReveal>
			
			        {/* SECTION CONTACT */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-gray-50 bg-gradient-animated-dark">
			          <div className="container mx-auto px-4 max-w-4xl text-center">
			            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
			              Un projet en tête ?
			            </h2>
			            <p className="text-lg text-gray-600 mb-8">
			              Contactez-nous dès aujourd'hui pour un devis gratuit et des conseils personnalisés.
			            </p>
			            <Link 
			              href="/contact"
			              className="inline-flex items-center gap-2 bg-[#0D1B3E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2744] transition-all shadow-lg"
			            >
			              Nous contacter
			              <ArrowRight className="w-5 h-5" />
			            </Link>
			          </div>
			        </section>
        </ScrollReveal>
			
			        {/* SECTION AGENCES */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-white bg-gradient-animated">
			          <div className="container mx-auto px-4 max-w-7xl">
			            <div className="text-center mb-12">
			              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
			                Nos agences
			              </h2>
			              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
			                Trouvez l'agence la plus proche de chez vous
			              </p>
			            </div>
			
			            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			              {AGENCIES.map((agency, index) => (
			                <div 
			                  key={index}
			                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl card-animate"
			                  style={{ animationDelay: `${index * 150}ms` }}
			                >
			                  <h3 className="text-xl font-semibold text-[#0D1B3E] mb-3">
			                    {agency.name}
			                  </h3>
			                  <p className="text-gray-600 mb-4">
			                    {agency.address}
			                  </p>
			                  <a 
			                    href={`tel:${agency.phone}`}
			                    className="inline-flex items-center gap-2 text-[#0D1B3E] font-semibold hover:underline"
			                  >
			                    <Phone className="w-4 h-4" />
			                    {agency.phone}
			                  </a>
			                </div>
			              ))}
			            </div>
			          </div>
			        </section>
        </ScrollReveal>
      </main>

      <Footer />

      <ModalRappel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
