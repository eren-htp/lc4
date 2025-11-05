import { APP_TITLE } from "@/const";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
                    <h3 className="text-2xl font-semibold text-[#0D1B3E] mb-4">L'Expertise, la Proximité et l'Innovation au Cœur de l'Alsace</h3>
                    <p className="text-lg leading-relaxed mb-6">
                        Née en mai 2025 à Mundolsheim, au cœur du Bas-Rhin, LC4 Peinture & Décoration est bien plus qu'une simple entreprise de distribution. Elle est le fruit d'une vision et d'une ambition partagée par ses fondateurs, Yasin Yilmaz (Président) et Sefa Celik (Directeur Général). Tous deux sont des figures reconnues du secteur, cumulant plus de <strong>dix ans d'expérience</strong> dans la peinture professionnelle et les revêtements techniques. Cette expertise solide est le socle sur lequel repose l'identité de LC4.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        L'histoire de LC4 est intrinsèquement liée à la région. La création de l'entreprise est intervenue suite à la fermeture de l'ancienne société SAGOS. Loin de voir cela comme une fin, Yasin Yilmaz et Sefa Celik y ont décelé une opportunité unique de redéfinir les standards du marché local. Ils ont ainsi transformé une situation difficile en un projet entrepreneurial dynamique, centré sur les valeurs de <strong>qualité, de proximité, d'expertise et d'innovation</strong>.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Notre mission est de servir les professionnels du bâtiment et les particuliers exigeants en leur offrant un accès privilégié à des produits techniques de haute performance. Nous sommes spécialisés dans une gamme complète de solutions : peintures décoratives et techniques, revêtements de sols (parquets, vinyles, moquettes) et revêtements muraux. Chaque produit est sélectionné pour sa <strong>durabilité</strong>, son <strong>esthétisme</strong> et sa capacité à répondre aux cahiers des charges les plus stricts.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Pour garantir cette excellence, LC4 a tissé des <strong>partenariats stratégiques</strong> avec des fabricants de premier plan, majoritairement français et européens. Des noms comme ONIP Peintures, Blancolor, Tarkett et Alltek (Communication ICP) sont nos garants de qualité. Ces collaborations nous permettent non seulement de proposer des produits à la pointe de la technologie, mais aussi de nous engager activement dans la création d'emploi local et la transmission d'un savoir-faire précieux.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Chez LC4, nous ne faisons pas que vendre des matériaux ; nous sommes des conseillers passionnés qui vous accompagnent de A à Z. Notre objectif ultime est de vous fournir les outils et l'expertise nécessaires pour <strong>transformer vos espaces en réalisations d'exception</strong>.
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
              
              {/* Chiffres Clés */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="text-3xl font-bold mb-8 text-[#0D1B3E] text-center">Chiffres Clés</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <p className="text-5xl font-extrabold text-[#0D1B3E]">🕒</p>
                    <p className="text-xl font-semibold mt-2">+10 ans</p>
                    <p className="text-gray-600">d’expertise cumulée</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-5xl font-extrabold text-[#0D1B3E]">🧱</p>
                    <p className="text-xl font-semibold mt-2">1 agence</p>
                    <p className="text-gray-600">en Alsace (Mundolsheim)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-5xl font-extrabold text-[#0D1B3E]">🤝</p>
                    <p className="text-xl font-semibold mt-2">4 partenaires</p>
                    <p className="text-gray-600">fabricants majeurs</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-5xl font-extrabold text-[#0D1B3E]">💬</p>
                    <p className="text-xl font-semibold mt-2">Des dizaines</p>
                    <p className="text-gray-600">de clients fidèles</p>
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

