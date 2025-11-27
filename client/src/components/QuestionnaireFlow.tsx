import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";
import { INTERIOR_PAINT_PRODUCTS, PaintProduct } from "@shared/interiorPaints";

type Question = {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    description?: string;
  }[];
};

const QUESTIONS: Question[] = [
  {
    id: "type",
    question: "Quel type de produit recherchez-vous ?",
    options: [
      {
        value: "Impression",
        label: "Impression / Sous-couche",
        description: "Pour préparer vos surfaces avant la peinture de finition"
      },
      {
        value: "Finition",
        label: "Peinture de finition",
        description: "Pour la couche finale et l'aspect esthétique"
      }
    ]
  },
  {
    id: "finish",
    question: "Quelle finition souhaitez-vous ?",
    options: [
      {
        value: "Mat",
        label: "Mat",
        description: "Aspect mat profond, idéal pour masquer les imperfections"
      },
      {
        value: "Velours",
        label: "Velours",
        description: "Aspect velouté et chaleureux, résistant aux chocs"
      },
      {
        value: "Satin",
        label: "Satin",
        description: "Finition satinée durable, facile d'entretien"
      }
    ]
  }
];

export default function QuestionnaireFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentStep];
  const isLastQuestion = currentStep === QUESTIONS.length - 1;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    // Si c'est la première question et que l'utilisateur choisit "Impression"
    if (currentQuestion.id === "type" && value === "Impression") {
      // Afficher directement les résultats sans poser la question sur la finition
      setShowResults(true);
    } else if (isLastQuestion) {
      // Si c'est la dernière question, afficher les résultats
      setShowResults(true);
    } else {
      // Passer à la question suivante
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getFilteredProducts = (): PaintProduct[] => {
    let filtered = [...INTERIOR_PAINT_PRODUCTS];

    // Filtrer par type
    if (answers.type === "Impression") {
      filtered = filtered.filter(p => p.finish === "Impression");
    } else if (answers.type === "Finition") {
      filtered = filtered.filter(p => p.finish !== "Impression");
    }

    // Filtrer par finition (seulement si une finition a été sélectionnée)
    if (answers.finish) {
      filtered = filtered.filter(p => p.finish === answers.finish);
    }

    return filtered;
  };

  if (showResults) {
    const filteredProducts = getFilteredProducts();

    return (
      <div className="max-w-6xl mx-auto">
        {/* Résumé des réponses */}
        <div className="mb-8 bg-gradient-to-r from-[#0D1B3E] to-[#1a2f5a] text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Vos choix</h3>
            <Button
              onClick={handleReset}
              variant="outline"
              className="bg-white text-[#0D1B3E] hover:bg-gray-100 border-0"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {answers.type && (
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Type : </span>
                {answers.type === "Impression" ? "Impression / Sous-couche" : "Peinture de finition"}
              </div>
            )}
            {answers.finish && (
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Finition : </span>
                {answers.finish}
              </div>
            )}
          </div>
        </div>

        {/* Produits recommandés */}
        <div>
          <h3 className="text-3xl font-bold text-[#0D1B3E] mb-6">
            Produits recommandés ({filteredProducts.length})
          </h3>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-[#0D1B3E]">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/400x300/0D1B3E/FFFFFF?text=" +
                          encodeURIComponent(product.name);
                      }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-[#0D1B3E]">
                        {product.name}
                      </CardTitle>
                      <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                        {product.finish}
                      </span>
                    </div>
                    <CardDescription className="text-sm">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-gray-600 text-xl font-semibold mb-2">
                Aucun produit ne correspond à vos critères.
              </p>
              <p className="text-gray-500 mb-6">
                Essayez de modifier vos choix pour voir d'autres produits.
              </p>
              <Button onClick={handleReset} className="bg-[#0D1B3E] hover:bg-[#0D1B3E]/90">
                Recommencer le questionnaire
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentStep + 1} sur {QUESTIONS.length}
          </span>
          <span className="text-sm font-medium text-[#0D1B3E]">
            {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-[#0D1B3E] h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question actuelle */}
      <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-100">
        <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 text-center">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                answers[currentQuestion.id] === option.value
                  ? "border-[#0D1B3E] bg-[#0D1B3E]/5 shadow-md"
                  : "border-gray-300 hover:border-[#0D1B3E] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-4 mt-0.5 flex items-center justify-center flex-shrink-0 ${
                    answers[currentQuestion.id] === option.value
                      ? "border-[#0D1B3E] bg-[#0D1B3E]"
                      : "border-gray-400"
                  }`}
                >
                  {answers[currentQuestion.id] === option.value && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg text-[#0D1B3E] mb-1">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-sm text-gray-600">
                      {option.description}
                    </div>
                  )}
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 0}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
          
          {Object.keys(answers).length > 0 && (
            <Button
              onClick={handleReset}
              variant="ghost"
              className="text-gray-600 hover:text-[#0D1B3E]"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
