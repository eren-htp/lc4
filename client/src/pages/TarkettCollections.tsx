import { Link } from "wouter";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { TARKETT_COLLECTIONS } from "@shared/tarkettProducts";
import { BRAND_LOGOS } from "@shared/brandLogos";
import type { TarkettCollection } from "@shared/tarkettProducts";
import {
  Home,
  Phone,
  Mail,
  ChevronLeft,
  ExternalLink,
  Package,
  TreePine,
} from "lucide-react";

export default function TarkettCollections() {
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
              <Link href="/revetements-sols" className="hover:text-[#0D1B3E] transition-colors">
                Revêtements de sols
              </Link>
              <span>/</span>
              <Link href="/revetements-sols/parquets-et-bois" className="hover:text-[#0D1B3E] transition-colors">
                Parquets et bois
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">Collections Tarkett</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E] via-[#2a1f0f] to-[#0D1B3E]"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(255,200,100,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              }}
            ></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TreePine className="h-4 w-4" />
              <span className="text-sm font-medium">
                {TARKETT_COLLECTIONS.length} collections disponibles
              </span>
            </div>
            <img src={BRAND_LOGOS.tarkett} alt="Tarkett" className="h-12 md:h-16 object-contain brightness-0 invert mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Parquets Tarkett
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
              Collections de parquets contrecollés en chêne, fabriqués en Europe avec des finitions haut de gamme
            </p>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-8 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/revetements-sols/parquets-et-bois">
              <Button
                variant="outline"
                className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour à Parquets et bois
              </Button>
            </Link>
          </div>
        </section>

        {/* Grille de collections */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TARKETT_COLLECTIONS.map((collection, index) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0D1B3E] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Besoin de conseils ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos experts sont à votre disposition pour vous accompagner dans le
              choix de votre parquet Tarkett.
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

function CollectionCard({
  collection,
  index,
}: {
  collection: TarkettCollection;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#0D1B3E]/30 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x400/0D1B3E/FFFFFF?text=" +
                encodeURIComponent(collection.name);
            }}
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-[#0D1B3E] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-200">
              Tarkett
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[#0D1B3E] mb-2 leading-tight">
            {collection.name}
          </h3>

          {/* Badges applications */}
          <div className="flex flex-wrap gap-2 mb-3">
            {collection.applications.slice(0, 3).map((app) => (
              <span
                key={app}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200"
              >
                {app}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
            {collection.description}
          </p>

          {/* Décors */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              {collection.decors.length} décors disponibles
            </span>
          </div>

          {/* Boutons */}
          <div className="flex gap-2 mt-auto">
            <Link
              href={`/revetements-sols/parquets-et-bois/tarkett/${collection.id}`}
              className="flex-1"
            >
              <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90 text-sm">
                Fiche détail
              </Button>
            </Link>
            <a
              href={collection.url}
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
