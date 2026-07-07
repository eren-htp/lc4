import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { PEINTURE_INTERIEUR_PRODUCTS } from "@shared/peintureInterieurProducts";
import {
  Home,
  Phone,
  Mail,
  ChevronLeft,
  ExternalLink,
  CheckCircle,
  Package,
  Info,
} from "lucide-react";

export default function PeintureInterieurProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PEINTURE_INTERIEUR_PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0D1B3E] mb-4">
              Produit non trouvé
            </h1>
            <Link href="/peintures/peinture-interieur/produits">
              <Button className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                Retour aux produits
              </Button>
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
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/peintures" className="hover:text-[#0D1B3E] transition-colors">
                Peintures
              </Link>
              <span>/</span>
              <Link href="/peintures/peinture-interieur" className="hover:text-[#0D1B3E] transition-colors">
                Peinture Intérieur
              </Link>
              <span>/</span>
              <Link href="/peintures/peinture-interieur/produits" className="hover:text-[#0D1B3E] transition-colors">
                Produits
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-6 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/peintures/peinture-interieur/produits">
              <Button
                variant="outline"
                className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour aux produits
              </Button>
            </Link>
          </div>
        </section>

        {/* Fiche produit */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[400px] max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/400x500/0D1B3E/FFFFFF?text=" +
                      encodeURIComponent(product.name);
                  }}
                />
              </div>

              {/* Infos */}
              <div className="flex flex-col">
                {/* Marque */}
                <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                  {product.brand}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-2">
                  {product.name}
                </h1>

                <p className="text-lg text-gray-500 mb-4 font-medium">
                  {product.type}
                </p>

                {/* Badges usage */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.usage.map((u) => (
                    <span
                      key={u}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold ${
                        u === "Intérieur"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {u}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Avantages */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Avantages
                  </h3>
                  <ul className="space-y-2">
                    {product.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B3E] mt-2 flex-shrink-0"></span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Infos techniques */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Informations techniques
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.technicalInfo.map((info, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                      >
                        <span className="text-xs text-gray-500 font-medium uppercase">
                          {info.label}
                        </span>
                        <p className="text-sm font-semibold text-[#0D1B3E]">
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditionnements */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-amber-600" />
                    Conditionnements disponibles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.conditionnements.map((c) => (
                      <span
                        key={c}
                        className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir sur le site fabricant
                    </Button>
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Nous contacter
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos experts sont à votre disposition pour vous accompagner dans le
              choix de vos peintures intérieures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button
                  size="lg"
                  className="bg-white text-[#0D1B3E] hover:bg-gray-100"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Appelez-nous
                </Button>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]"
                >
                  <Mail className="h-5 w-5 mr-2" />
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
