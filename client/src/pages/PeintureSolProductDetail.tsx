import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { PEINTURE_SOLS_PRODUCTS } from "@shared/peintureSolsProducts";
import {
  Home,
  Phone,
  Mail,
  ChevronLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Package,
  Ruler,
  Palette,
  FileText,
} from "lucide-react";

export default function PeintureSolProductDetail() {
  const [, params] = useRoute("/peintures/peinture-sols/produit/:productId");
  const product = PEINTURE_SOLS_PRODUCTS.find((p) => p.id === params?.productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0D1B3E] mb-4">
              Produit non trouvé
            </h1>
            <p className="text-gray-600">Ce produit n'existe pas.</p>
            <Link href="/peintures/peinture-sols/produits">
              <Button className="mt-6 bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                <ChevronLeft className="w-4 h-4 mr-2" />
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
              <Home className="h-4 w-4 shrink-0" />
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/peintures" className="hover:text-[#0D1B3E] transition-colors">
                Peintures
              </Link>
              <span>/</span>
              <Link href="/peintures/peinture-sols" className="hover:text-[#0D1B3E] transition-colors">
                Peinture Sols
              </Link>
              <span>/</span>
              <Link href="/peintures/peinture-sols/produits" className="hover:text-[#0D1B3E] transition-colors">
                Produits
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{product.nom}</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-6 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/peintures/peinture-sols/produits">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:sticky lg:top-24">
                <img
                  src={product.image}
                  alt={product.nom}
                  className="max-h-[450px] max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/400x500/0D1B3E/FFFFFF?text=" +
                      encodeURIComponent(product.nom);
                  }}
                />
              </div>

              {/* Informations */}
              <div>
                {/* Marque */}
                <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {product.marque}
                </span>

                {/* Nom */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                  {product.nom}
                </h1>

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
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {product.description_longue}
                </p>

                {/* Caractéristiques */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-5 w-5 text-[#0D1B3E]" />
                    <h2 className="text-xl font-bold text-[#0D1B3E]">
                      Caractéristiques
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {product.caracteristiques.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B3E] mt-2 shrink-0"></span>
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Domaines d'application */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="h-5 w-5 text-[#0D1B3E]" />
                    <h2 className="text-xl font-bold text-[#0D1B3E]">
                      Domaines d'application
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.domaines_application.map((d, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditionnements */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Package className="h-5 w-5 text-[#0D1B3E]" />
                    <h2 className="text-xl font-bold text-[#0D1B3E]">
                      Conditionnements disponibles
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.conditionnements.map((c) => (
                      <div
                        key={c}
                        className="bg-[#0D1B3E]/5 border-2 border-[#0D1B3E]/20 rounded-xl px-5 py-3 text-center"
                      >
                        <span className="text-lg font-bold text-[#0D1B3E]">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rendement */}
                {product.rendement && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Ruler className="h-5 w-5 text-[#0D1B3E]" />
                      <h2 className="text-xl font-bold text-[#0D1B3E]">Rendement</h2>
                    </div>
                    <p className="text-gray-700 text-lg">{product.rendement}</p>
                  </div>
                )}

                {/* Finition */}
                {product.finition && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Palette className="h-5 w-5 text-[#0D1B3E]" />
                      <h2 className="text-xl font-bold text-[#0D1B3E]">Finition</h2>
                    </div>
                    <p className="text-gray-700 text-lg">{product.finition}</p>
                  </div>
                )}

                {/* Couleurs */}
                {product.couleurs && product.couleurs.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Palette className="h-5 w-5 text-[#0D1B3E]" />
                      <h2 className="text-xl font-bold text-[#0D1B3E]">
                        Coloris disponibles
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.couleurs.map((couleur, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200"
                        >
                          {couleur}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Documentation */}
                {product.documentation && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-[#0D1B3E]" />
                      <h2 className="text-xl font-bold text-[#0D1B3E]">Documentation</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product.documentation.fiche_technique && (
                        <a
                          href={product.documentation.fiche_technique}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm border border-gray-200 transition-colors"
                        >
                          <FileText className="h-4 w-4" />
                          Fiche technique
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {product.documentation.rapport_alimentaire && (
                        <a
                          href={product.documentation.rapport_alimentaire}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm border border-gray-200 transition-colors"
                        >
                          <FileText className="h-4 w-4" />
                          Rapport alimentaire
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Produits associés */}
                {product.produits_associes && product.produits_associes.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Package className="h-5 w-5 text-[#0D1B3E]" />
                      <h2 className="text-xl font-bold text-[#0D1B3E]">
                        Produits associés
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.produits_associes.map((p, i) => {
                        const associatedProduct = PEINTURE_SOLS_PRODUCTS.find(
                          (prod) => prod.nom.toUpperCase() === p.toUpperCase()
                        );
                        return associatedProduct ? (
                          <Link
                            key={i}
                            href={`/peintures/peinture-sols/produit/${associatedProduct.id}`}
                            className="inline-block bg-[#0D1B3E]/10 hover:bg-[#0D1B3E]/20 text-[#0D1B3E] px-3 py-1.5 rounded-lg text-sm font-medium border border-[#0D1B3E]/20 transition-colors"
                          >
                            {p}
                          </Link>
                        ) : (
                          <span
                            key={i}
                            className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200"
                          >
                            {p}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <a
                    href={product.url_produit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir sur le site fabricant
                    </Button>
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="flex-1">
                    <Button
                      size="lg"
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
            <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos experts sont à votre disposition pour vous conseiller sur la peinture de sol la plus adaptée à votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${COMPANY_INFO.phone}`}>
                <Button size="lg" className="bg-white text-[#0D1B3E] hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY_INFO.phone}
                </Button>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B3E]"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {COMPANY_INFO.email}
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
