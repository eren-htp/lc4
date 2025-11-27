import { Award, Handshake, Target, Sprout } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: Award,
    title: "Expertise & Qualité",
    description: "Produits techniques de la plus haute qualité, sélectionnés auprès de partenaires de renom. Plus de 20 ans d'expérience cumulée dans le secteur de la peinture professionnelle.",
    color: "text-[#0D1B3E]"
  },
  {
    icon: Handshake,
    title: "Proximité & Conseil",
    description: "Un service de proximité inégalé avec des conseils personnalisés pour chaque projet. Notre agence à Mundolsheim est à votre écoute pour accompagner la réussite de vos chantiers.",
    color: "text-[#0D1B3E]"
  },
  {
    icon: Target,
    title: "Engagement Local",
    description: "Ancrage fort en Alsace avec création d'emploi local. Nous nous engageons à continuer notre développement tout en préservant le savoir-faire régional et la transmission de notre expertise.",
    color: "text-[#0D1B3E]"
  },
  {
    icon: Sprout,
    title: "Transmission & Durabilité",
    description: "Solutions durables et esthétiques pour tous les environnements. Nous assurons la transmission de notre expertise aux nouvelles générations pour un avenir pérène.",
    color: "text-[#0D1B3E]"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4 text-[#0D1B3E] text-center">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Les principes fondamentaux qui guident chacune de nos actions et nos décisions chez LC4 Peinture & Décoration.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center ${value.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
