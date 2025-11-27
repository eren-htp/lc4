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
      description: "Parquets, parquet contrecollé, stratifiés, vinyles et moquettes pour tous les usages",
      href: "/revetements-sols",
    },
    {
      icon: Frame,
      title: "Revêtements muraux",
      description: "Peinture à la chaux, stucco, enduits décoratifs et collections exclusives",
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
          <div className="container mx-auto px-4">
            <PartnerLogoSlider />
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
                Notre équipe vous conseille et vous accompagne de A à Z, de la sélection des produits jusqu'à la préparation et la mise en œuvre par vos propres applicateurs ou par les professionnels avec lesquels vous travaillez. Nous ne réalisons pas les chantiers, mais nous vous guidons vers les solutions les plus adaptées et performantes.
              </p>
		              
              <p className="text-lg text-gray-600 leading-relaxed">
                Basés à Mundolsheim, nous bénéficions de partenariats solides et d'exclusivités dans notre secteur géographique, notamment à Strasbourg, Souffelweyersheim, Haguenau et Schweighouse, ce qui nous permet de proposer des produits et services parfaitement adaptés aux besoins locaux.
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
			
        {/* SECTION AGENCE UNIQUE */}
        <ScrollReveal direction="up" delay={0.2}>
          <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                  Notre agence
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Retrouvez-nous dans notre agence principale à Mundolsheim, au cœur de notre secteur géographique.
                </p>
              </div>

              {/* Carte agence premium */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                  {/* En-tête avec dégradé */}
                  <div className="bg-gradient-to-r from-[#0D1B3E] to-[#1a2e5a] p-8 text-white">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          LC4 Peinture & Décoration
                        </h3>
                        <p className="text-blue-100 text-lg">
                          Votre partenaire expert en Alsace
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-8 md:p-10">
                    <div className="space-y-6">
                      {/* Adresse */}
                      <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <MapPin className="w-6 h-6 text-[#0D1B3E]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0D1B3E] mb-1 text-lg">
                            Adresse
                          </h4>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            3 Rue Alexandre Volta<br />
                            67450 Mundolsheim
                          </p>
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <Phone className="w-6 h-6 text-[#0D1B3E]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0D1B3E] mb-1 text-lg">
                            Téléphone
                          </h4>
                          <a 
                            href="tel:0388047196"
                            className="text-gray-600 text-lg hover:text-[#0D1B3E] transition-colors font-medium"
                          >
                            03 88 04 71 96
                          </a>
                        </div>
                      </div>

                      {/* Horaires */}
                      <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                          <svg className="w-6 h-6 text-[#0D1B3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0D1B3E] mb-2 text-lg">
                            Horaires d'ouverture
                          </h4>
                          <div className="space-y-1 text-gray-600">
                            <p className="flex justify-between">
                              <span className="font-medium">Lundi - Vendredi</span>
                              <span>8h00 - 18h00</span>
                            </p>
                            <p className="flex justify-between">
                              <span className="font-medium">Samedi</span>
                              <span>9h00 - 12h00</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bouton d'action */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0D1B3E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a2744] transition-all shadow-lg hover:shadow-xl text-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Nous contacter
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Texte informatif sous la carte */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-base">
                    <span className="font-semibold text-[#0D1B3E]">Secteur géographique :</span> Strasbourg, Souffelweyersheim, Haguenau, Schweighouse et environs
                  </p>
                </div>
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
