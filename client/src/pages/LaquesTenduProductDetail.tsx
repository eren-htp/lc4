import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { LAQUES_TENDU_PRODUCTS } from "@shared/laquesTenduProducts";
import { Home, Phone, Mail, ChevronLeft, ExternalLink, CheckCircle } from "lucide-react";

export default function LaquesTenduProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = LAQUES_TENDU_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0D1B3E] mb-4">Produit non trouvé</h1>
            <Link href="/peintures/peintures-laques-tendu/produits">
              <Button className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">Retour aux produits laques</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              <Link href="/peintures" className="hover:text-[#0D1B3E] transition-colors">Peintures</Link>
              <span>/</span>
              <Link href="/peintures/peintures-laques-tendu" className="hover:text-[#0D1B3E] transition-colors">Peintures laques tendu</Link>
              <span>/</span>
              <Link href="/peintures/peintures-laques-tendu/produits" className="hover:text-[#0D1B3E] transition-colors">Produits</Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-6 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/peintures/peintures-laques-tendu/produits">
              <Button variant="outline" className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white">
                <ChevronLeft className="w-4 h-4 mr-2" />Retour aux produits laques
              </Button>
            </Link>
          </div>
        </section>

        {/* Fiche produit */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/600x400/0D1B3E/FFFFFF?text=" + encodeURIComponent(product.name);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                  {product.brand}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />Caractéristiques
                  </h3>
                  <ul className="space-y-2">
                    {product.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B3E] mt-2 flex-shrink-0"></span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span key={app} className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                      <ExternalLink className="h-4 w-4 mr-2" />Voir la fiche fabricant
                    </Button>
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1">
                    <Button variant="outline" className="w-full border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />Nous contacter
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Intéressé par ce produit ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos conseillers sont à votre écoute pour vous présenter {product.name} en détail.
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
