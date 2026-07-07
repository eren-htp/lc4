import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { TARKETT_COLLECTIONS } from "@shared/tarkettProducts";
import {
  Home,
  Phone,
  Mail,
  ChevronLeft,
  ExternalLink,
  CheckCircle,
  Info,
  Palette,
  TreePine,
} from "lucide-react";

export default function TarkettCollectionDetail() {
  const { id } = useParams<{ id: string }>();
  const collection = TARKETT_COLLECTIONS.find((c) => c.id === id);

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0D1B3E] mb-4">
              Collection non trouvée
            </h1>
            <Link href="/revetements-sols/parquets-et-bois/tarkett">
              <Button className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                Retour aux collections
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
              <Link href="/revetements-sols" className="hover:text-[#0D1B3E] transition-colors">
                Revêtements de sols
              </Link>
              <span>/</span>
              <Link href="/revetements-sols/parquets-et-bois" className="hover:text-[#0D1B3E] transition-colors">
                Parquets et bois
              </Link>
              <span>/</span>
              <Link href="/revetements-sols/parquets-et-bois/tarkett" className="hover:text-[#0D1B3E] transition-colors">
                Collections Tarkett
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{collection.name}</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-6 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/revetements-sols/parquets-et-bois/tarkett">
              <Button
                variant="outline"
                className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour aux collections
              </Button>
            </Link>
          </div>
        </section>

        {/* Fiche collection */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x400/0D1B3E/FFFFFF?text=" +
                      encodeURIComponent(collection.name);
                  }}
                />
              </div>

              {/* Infos */}
              <div className="flex flex-col">
                {/* Marque */}
                <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                  Tarkett
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                  {collection.name}
                </h1>

                {/* Badges applications */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {collection.applications.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {collection.description}
                </p>

                {/* Caractéristiques */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Caractéristiques
                  </h3>
                  <ul className="space-y-2">
                    {collection.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B3E] mt-2 flex-shrink-0"></span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={collection.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir sur le site Tarkett
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

            {/* Section Spécifications techniques */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Specs */}
              <div>
                <h3 className="text-2xl font-bold text-[#0D1B3E] mb-6 flex items-center gap-2">
                  <Info className="h-6 w-6 text-blue-600" />
                  Spécifications techniques
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {collection.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <span className="text-xs text-gray-500 font-medium uppercase">
                        {spec.label}
                      </span>
                      <p className="text-sm font-semibold text-[#0D1B3E] mt-1">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Décors */}
              <div>
                <h3 className="text-2xl font-bold text-[#0D1B3E] mb-6 flex items-center gap-2">
                  <Palette className="h-6 w-6 text-amber-600" />
                  Décors disponibles
                </h3>
                <div className="space-y-3">
                  {collection.decors.map((decor, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200"
                    >
                      <TreePine className="h-4 w-4 text-[#0D1B3E] flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">
                        {decor}
                      </span>
                    </div>
                  ))}
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
