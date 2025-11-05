import { Link } from "wouter";
import ModalRappel from "@/components/ModalRappel";
import { useState } from "react";
import { MapPin, Paintbrush, Home as HomeIcon, Frame, Wrench, Phone, ArrowRight } from "lucide-react";
import { APP_TITLE, COMPANY_INFO, AGENCIES } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfiniteLogoSlider from "@/components/InfiniteLogoSlider";

const partnerLogos = [
  '/images/logo_tarkett.webp',
  '/images/logo_altek.webp',
  '/images/logo_blancolor.jpg',
  '/images/logo_onip.png',
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden h-[80vh]">
          {/* Background Image */}
          <img 
            src="/images/DSC00194.JPG" 
            alt="Intérieur du magasin LC4 Peinture avec des pots de peinture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B3E]/80" />
          
          {/* Contenu */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              LC4 peinture
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
Découvrez nos produits haut de gamme pour vos projets résidentiels et professionnels
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white text-[#0D1B3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Être rappelé
              </button>
              
              <Link 
                href="/qui-sommes-nous" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0D1B3E] transition-all"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-gray-300 text-sm font-medium">Nos secteurs d’intervention :</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Mundolsheim", "Strasbourg", "Souffelweyersheim", "Haguenau", "Schweighouse"].map((city, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-[#0D1B3E]/60 backdrop-blur-sm text-white text-sm rounded-full border border-white/20"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
	        </section>
	
		        {/* SECTION PARTENAIRES */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-8">
              Nos partenaires
            </h2>
            <InfiniteLogoSlider logos={partnerLogos} />
          </div>
        </section>
	
	        {/* SECTION BIENVENUE */}
	        <section className="py-16 md:py-24 bg-white">
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
	
		        {/* SECTION AVIS CLIENTS */}
		        <section className="py-16 md:py-24 bg-white">
		          <div className="container mx-auto px-4 max-w-7xl">
		            <div className="text-center mb-12">
		              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
		                Ce que nos clients disent de nous
		              </h2>
		              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
		                Avis vérifiés sur Google pour LC4 PEINTURE & DECORATION
		              </p>
		            </div>
		
		            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
		              {/* Avis 1 */}
		              <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
		                <div className="flex items-center mb-3">
		                  <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
		                  <p className="text-sm text-gray-500">il y a 1 jour</p>
		                </div>
		                <p className="text-gray-700 italic mb-4">
		                  "J'ai acheté mon revêtement de sol en résine chez LC4 et j'en suis très content ! La qualité du produit est excellente, et le rendu final est impeccable, exactement ce que je voulais. Je le recommande vivement."
		                </p>
		                <p className="font-semibold text-[#0D1B3E]">- eyuphulya61 Inan</p>
		              </div>
		
		              {/* Avis 2 */}
		              <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
		                <div className="flex items-center mb-3">
		                  <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
		                  <p className="text-sm text-gray-500">il y a 4 jours</p>
		                </div>
		                <p className="text-gray-700 italic mb-4">
		                  "Excellente qualité et professionnalisme. Je recommande vivement."
		                </p>
		                <p className="font-semibold text-[#0D1B3E]">- AYKUT ARIKTEKIN</p>
		              </div>
		
		              {/* Avis 3 */}
		              <div className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
		                <div className="flex items-center mb-3">
		                  <div className="text-yellow-500 text-2xl mr-2">★★★★★</div>
		                  <p className="text-gray-500 text-sm">il y a 6 jours</p>
		                </div>
		                <p className="text-gray-700 italic mb-4">
		                  "Je suis extrêmement satisfait de ce fournisseur de peinture. La qualité des matériaux est impeccable, et les responsables sont très compétents et très professionnels. Je recommande vivement leurs services."
		                </p>
		                <p className="font-semibold text-[#0D1B3E]">- Sadettin Solak</p>
		              </div>
		            </div>
		          </div>
		        </section>
		
			        {/* SECTION ZONE DE SERVICE */}
			        <section className="py-16 md:py-20 bg-gray-50">
		          <div className="container mx-auto px-4 max-w-5xl">
		            <div className="text-center mb-12">
		              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
		                Nos secteurs d’intervention
		              </h2>
		              <p className="text-lg text-gray-600">
		                Nous intervenons dans les villes suivantes pour vos projets de peinture et décoration :
		              </p>
		            </div>
		
		            <div className="flex flex-wrap justify-center gap-4 mb-12">
		              {["Mundolsheim", "Strasbourg", "Souffelweyersheim", "Haguenau", "Schweighouse"].map((city, index) => (
		                <span 
		                  key={index}
		                  className="px-6 py-3 bg-white border-2 border-gray-200 text-[#0D1B3E] rounded-full font-medium hover:shadow-lg transition-all"
		                >
		                  {city}
		                </span>
		              ))}
		            </div>
		
		            <div className="text-center">
		              <Link 
		                href="/contact"
		                className="inline-flex items-center gap-2 bg-[#0D1B3E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a2744] transition-all shadow-lg"
		              >
		                Demander un devis
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
          <ModalRappel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		    </div>
		  );
		}
	
	