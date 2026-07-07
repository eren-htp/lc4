import { Link } from "wouter";
import ScrollReveal from "./ScrollReveal";

interface FinishOption {
  id: string;
  label: string;
  slug: string;
  description: string;
  image: string;
}

const FINISH_OPTIONS: FinishOption[] = [
  {
    id: "impression",
    label: "Impression",
    slug: "impression",
    description: "Pour préparer vos surfaces avant la peinture de finition",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/impression_eb7e3b10.jpg",
  },
  {
    id: "mat",
    label: "Mat",
    slug: "mat",
    description: "Aspect mat profond, idéal pour masquer les imperfections",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/mat_2d266e2b.jpg",
  },
  {
    id: "velours",
    label: "Velours",
    slug: "velours",
    description: "Aspect velouté et chaleureux, résistant aux chocs",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/velours_de7414a7.jpg",
  },
  {
    id: "satin",
    label: "Satin",
    slug: "satin",
    description: "Finition satinée durable, facile d'entretien",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/satin_662cc718.webp",
  },
];

export default function FinishSelector() {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#0D1B3E] mb-4">
          Nos finitions par destination
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choisissez la finition qui correspond le mieux à l'ambiance et aux contraintes techniques de votre projet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FINISH_OPTIONS.map((option, index) => (
          <ScrollReveal key={option.id} delay={index * 0.1}>
            <Link
              href={`/peintures/peinture-interieur/${option.slug}`}
            >
              <a className="block group cursor-pointer h-full">
                {/* Nouvelle carte moderne */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform group-hover:shadow-2xl group-hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                  
                  {/* Image plus grande et rectangulaire */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Contenu textuel */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#0D1B3E] mb-2 group-hover:text-blue-600 transition-colors">
                      {option.label}
                    </h3>
                    <p className="text-base text-gray-600 flex-grow">
                      {option.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
