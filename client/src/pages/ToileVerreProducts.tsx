import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { TOILE_VERRE_PRODUCTS } from "@shared/toileVerreProducts";
import { Home, Phone, Mail, ArrowLeft, ExternalLink } from "lucide-react";

export default function ToileVerreProducts() {
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
              <Link href="/revetements-muraux" className="hover:text-[#0D1B3E] transition-colors">Revêtements muraux</Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">Toile de verre</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/revetements-muraux">
            <Button variant="ghost" className="text-[#0D1B3E] hover:bg-gray-100 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux Revêtements muraux
            </Button>
          </Link>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0D1B3E] to-[#1a3a6b] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Toile de verre</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Toiles de verre décoratives et de rénovation pour habiller et renforcer vos murs et plafonds.
            </p>
          </div>
        </section>

        {/* Grille produits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {TOILE_VERRE_PRODUCTS.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.05}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 transform hover:shadow-xl hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                    <div className="w-full h-48 bg-gradient-to-br from-[#0D1B3E] to-[#2a4a7f] flex items-center justify-center p-4">
                      <div className="text-center">
                        <span className="text-white text-2xl font-bold">{product.brand}</span>
                        <p className="text-white/80 text-sm mt-2">{product.name}</p>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-xs font-bold w-fit mb-3">
                        {product.brand}
                      </span>
                      <h3 className="text-lg font-bold text-[#0D1B3E] mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 flex-grow mb-3">{product.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.applications.map((app) => (
                          <span key={app} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{app}</span>
                        ))}
                      </div>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                          <ExternalLink className="h-4 w-4 mr-2" />Voir le site fabricant
                        </Button>
                      </a>
                    </div>
                  </div>
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
              Nos experts vous accompagnent dans le choix de la toile de verre adaptée à votre projet.
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
