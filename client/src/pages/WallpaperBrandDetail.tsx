import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/const";
import { WALLPAPER_BRANDS } from "@shared/wallpaperBrands";
import {
  Home,
  Phone,
  Mail,
  ChevronLeft,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function WallpaperBrandDetail() {
  const { id } = useParams<{ id: string }>();
  const brand = WALLPAPER_BRANDS.find((b) => b.id === id);

  if (!brand) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0D1B3E] mb-4">
              Marque non trouvée
            </h1>
            <Link href="/revetements-muraux">
              <Button className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                Retour aux revêtements muraux
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
              <Link href="/revetements-muraux" className="hover:text-[#0D1B3E] transition-colors">
                Revêtements muraux
              </Link>
              <span>/</span>
              <span className="text-[#0D1B3E] font-semibold">{brand.name}</span>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <section className="bg-white pt-6 pb-2">
          <div className="container mx-auto px-4">
            <Link href="/revetements-muraux">
              <Button
                variant="outline"
                className="text-[#0D1B3E] border-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Retour aux revêtements muraux
              </Button>
            </Link>
          </div>
        </section>

        {/* Fiche marque */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x400/0D1B3E/FFFFFF?text=" +
                      encodeURIComponent(brand.name);
                  }}
                />
              </div>

              {/* Infos */}
              <div className="flex flex-col">
                {/* Type badge */}
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                  {brand.type}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
                  {brand.name}
                </h1>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {brand.description}
                </p>

                {/* Points forts */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#0D1B3E] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Points forts
                  </h3>
                  <ul className="space-y-2">
                    {brand.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D1B3E] mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir le site {brand.name}
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
            <h2 className="text-3xl font-bold mb-4">Envie de découvrir cette marque ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Nos conseillers sont à votre écoute pour vous présenter les produits {brand.name} en détail et vous aider à faire le meilleur choix pour votre projet.
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
