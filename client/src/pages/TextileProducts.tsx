import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { TEXTILE_PRODUCTS } from "@shared/textileProducts";
import { BRAND_LOGOS } from "@shared/brandLogos";
import { Home, Phone, Mail, ArrowLeft } from "lucide-react";

export default function TextileProducts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/revetements-sols" className="hover:text-[#0D1B3E] transition-colors">Revêtements de sols</Link>
              <span>/</span>
              <Link href="/revetements-sols/sols-textiles" className="hover:text-[#0D1B3E] transition-colors">Sols textiles</Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">Nos produits</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/revetements-sols/sols-textiles">
            <Button variant="ghost" className="text-[#0D1B3E] hover:bg-gray-100 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux Sols textiles
            </Button>
          </Link>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0D1B3E] to-[#1a3a6b] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <img src={BRAND_LOGOS.desso} alt="DESSO" className="h-10 md:h-14 object-contain brightness-0 invert mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sols Textiles</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Découvrez nos dalles de moquette DESSO par Tarkett : des solutions acoustiques et durables pour vos espaces professionnels.
            </p>
          </div>
        </section>

        {/* Grille produits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEXTILE_PRODUCTS.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.05}>
                  <Link href={`/revetements-sols/sols-textiles/produit/${product.id}`}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col cursor-pointer group">
                      <div className="relative w-full h-52 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/400x300/0D1B3E/FFFFFF?text=" + encodeURIComponent(product.name);
                          }}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block bg-white/90 backdrop-blur-sm text-[#0D1B3E] px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                            {product.brand}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-3 flex-grow mb-3">{product.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {product.applications.map((app) => (
                            <span key={app} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{app}</span>
                          ))}
                        </div>
                        <span className="text-[#0D1B3E] font-semibold text-sm inline-flex items-center gap-1">Voir la fiche &rarr;</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos experts vous accompagnent dans le choix des dalles de moquette adaptées à votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />Appelez-nous
                </Button>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]">
                  <Mail className="h-5 w-5 mr-2" />Envoyez un email
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
