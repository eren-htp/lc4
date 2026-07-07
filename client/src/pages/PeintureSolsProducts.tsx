import { useState, useEffect } from "react";
import { Link, useSearch } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { PEINTURE_SOLS_PRODUCTS } from "@shared/peintureSolsProducts";
import type { PeintureSolProduct } from "@shared/peintureSolsProducts";
import {
  Home,
  Phone,
  Mail,
  Filter,
  X,
  ChevronLeft,
  ExternalLink,
  Package,
} from "lucide-react";

type UsageFilter = "Tous" | "Intérieur" | "Extérieur";

export default function PeintureSolsProducts() {
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const marqueParam = urlParams.get("marque");

  const [usageFilter, setUsageFilter] = useState<UsageFilter>("Tous");

  // Extraire les marques uniques
  const marques = Array.from(
    new Set(PEINTURE_SOLS_PRODUCTS.map((p) => p.marque))
  );

  // Filtrage
  const filteredProducts = PEINTURE_SOLS_PRODUCTS.filter((product) => {
    const matchUsage =
      usageFilter === "Tous" || product.usage.includes(usageFilter);
    return matchUsage;
  });

  const hasActiveFilters = usageFilter !== "Tous";

  const resetFilters = () => {
    setUsageFilter("Tous");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-[#0D1B3E] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link
                href="/peintures"
                className="hover:text-[#0D1B3E] transition-colors"
              >
                Peintures
              </Link>
              <span>/</span>
              <Link
                href="/peintures/peinture-sols"
                className="hover:text-[#0D1B3E] transition-colors"
              >
                Peinture Sols
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">Produits</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E] via-[#162d5a] to-[#0D1B3E]"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              }}
            ></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="h-4 w-4" />
              <span className="text-sm font-medium">
                {PEINTURE_SOLS_PRODUCTS.length} produits disponibles
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Peinture Sols
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
              Peintures de sol, primaires d'adhérence et produits de préparation pour tous types de supports
            </p>
          </div>
        </section>

        {/* Filtres */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 text-[#0D1B3E]">
                <Filter className="h-4 w-4" />
                <span className="font-semibold text-sm">Filtrer :</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Filtre Usage */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  {(["Tous", "Intérieur", "Extérieur"] as UsageFilter[]).map(
                    (option) => (
                      <button
                        key={option}
                        onClick={() => setUsageFilter(option)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          usageFilter === option
                            ? "bg-[#0D1B3E] text-white shadow-sm"
                            : "text-gray-600 hover:text-[#0D1B3E] hover:bg-gray-200"
                        }`}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>

                {/* Reset */}
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                    Réinitialiser
                  </button>
                )}
              </div>

              <div className="sm:ml-auto text-sm text-gray-500">
                {filteredProducts.length} produit
                {filteredProducts.length > 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-8 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/peintures/peinture-sols">
              <Button
                variant="outline"
                className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour à Peinture Sols
              </Button>
            </Link>
          </div>
        </section>

        {/* Grille de produits */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg font-semibold">
                  Aucun produit ne correspond à vos critères.
                </p>
                <p className="text-gray-500 mt-2">
                  Essayez de modifier vos filtres pour voir plus de résultats.
                </p>
                <Button
                  onClick={resetFilters}
                  className="mt-6 bg-[#0D1B3E] hover:bg-[#0D1B3E]/90"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos experts sont à votre disposition pour vous accompagner dans le
              choix de vos peintures de sol.
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

function ProductCard({
  product,
  index,
}: {
  product: PeintureSolProduct;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#0D1B3E]/30 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex items-center justify-center h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.nom}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/300x400/0D1B3E/FFFFFF?text=" +
                encodeURIComponent(product.nom);
            }}
          />
          {/* Badge marque */}
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-[#0D1B3E] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-200">
              {product.marque}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Nom */}
          <h3 className="text-lg font-bold text-[#0D1B3E] mb-2 leading-tight">
            {product.nom}
          </h3>

          {/* Badges usage */}
          <div className="flex flex-wrap gap-2 mb-3">
            {product.usage.map((u) => (
              <span
                key={u}
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${
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
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
            {product.description_courte}
          </p>

          {/* Conditionnements */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.conditionnements.map((c) => (
              <span
                key={c}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex gap-2 mt-auto">
            <Link
              href={`/peintures/peinture-sols/produit/${product.id}`}
              className="flex-1"
            >
              <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 text-sm">
                Fiche détail
              </Button>
            </Link>
            <a
              href={product.url_produit}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
