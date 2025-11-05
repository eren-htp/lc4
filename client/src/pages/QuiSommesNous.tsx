import { APP_TITLE } from "@/const";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NumberCounter from "@/components/NumberCounter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuiSommesNous() {
  const values = [
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 20 ans d'expérience dans le domaine de la peinture et des revêtements en Alsace.",
    },
    {
      icon: Target,
      title: "Qualité",
      description: "Nous sélectionnons rigoureusement nos produits pour garantir des résultats durables et esthétiques.",
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Nos agences en Alsace nous permettent d'être toujours proches de vous et de répondre rapidement à vos besoins.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Nous suivons les dernières tendances et innovations pour vous proposer les meilleures solutions.",
    },
  ];

  const reasons = [
    "Une équipe de professionnels qualifiés et à votre écoute",
    "Un large choix de produits de qualité professionnelle",
    "Des conseils personnalisés pour chaque projet",
    "Des prix compétitifs et transparents",
    "Un service client réactif et disponible",
    "Des solutions adaptées aux professionnels et particuliers",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center text-white">
          <img 
            src="/images/DSC00252.JPG" 
            alt="Showroom LC4 Peinture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B3E]/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold">Qui sommes-nous ?</h1>
          </div>
        </section>

        {/* Histoire */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Notre histoire</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="text-lg leading-relaxed mb-6">
                        Fondée en Alsace, <strong>{APP_TITLE}</strong> s'est imposée comme un acteur majeur dans le domaine 
                        de la peinture et des revêtements. Notre entreprise familiale a su évoluer au fil des années tout en 
                        conservant ses valeurs fondamentales : qualité, proximité et expertise.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Avec nos agences stratégiquement implantées en Alsace, nous couvrons l'ensemble du territoire alsacien. Cette présence 
                        locale nous permet d'être au plus près de nos clients et de répondre rapidement à leurs besoins.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Que vous soyez artisan peintre, architecte, entreprise du bâtiment, collectivité ou particulier, 
                        nous mettons notre savoir-faire et notre expérience à votre service pour mener à bien tous vos projets 
                        de peinture, de revêtements de sols et de revêtements muraux.
                    </p>
                </div>
                <img 
                    src="/images/DSC00197.JPG" 
                    alt="Comptoir de vente LC4 Peinture" 
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-[#0D1B3E] text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-[#0D1B3E]/10 rounded-full">
                          <Icon className="h-8 w-8 text-[#0D1B3E]" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Chiffres Clés (Number Counter) */}
        <NumberCounter counters={[
          { emoji: "🕒", label: "Expérience", value: 10, description: "ans d’expertise cumulée" },
          { emoji: "🧱", label: "Agence", value: 1, description: "agence en Alsace (Mundolsheim)" },
          { emoji: "🤝", label: "Partenaires", value: 4, description: "fabricants majeurs" },
          { emoji: "💬", label: "Clients", value: 50, description: "clients fidèles" }, // J'utilise 50 comme valeur numérique pour l'animation, le label affichera "Des dizaines"
        ]} />

        {/* Notre expertise */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-[#0D1B3E] text-center">Notre expertise</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Fort de plusieurs décennies d'expérience, {APP_TITLE} a développé une expertise reconnue dans 
                  trois domaines complémentaires qui constituent le cœur de notre activité.
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Peintures</h3>
                    <p className="text-gray-600">
                      Peintures intérieures et extérieures, laques, façades, bois, métal, sols et toitures. 
                      Nous proposons une gamme complète de peintures professionnelles adaptées à tous les supports.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Revêtements de sols</h3>
                    <p className="text-gray-600">
                      Parquets, stratifiés, PVC, textiles et solutions techniques. Des revêtements durables 
                      et esthétiques pour tous les environnements résidentiels et professionnels.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">Revêtements muraux</h3>
                    <p className="text-gray-600">
                      Collections exclusives et tendances pour habiller vos murs avec style. 
                      Des papiers peints haut de gamme aux solutions techniques innovantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-[#0D1B3E] text-center">Pourquoi nous choisir ?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#0D1B3E] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

