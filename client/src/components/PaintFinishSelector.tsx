import { useState } from "react";
import { INTERIOR_PAINT_PRODUCTS, PaintProduct } from "@shared/const";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type FilterKey = "type" | "finish";

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterQuestion {
  key: FilterKey;
  label: string;
  options: FilterOption[];
}

const FILTER_QUESTIONS: FilterQuestion[] = [
  {
    key: "type",
    label: "Quel type de produit recherchez-vous ?",
    options: [
      { id: "impression", label: "Impression / Sous-couche", value: "Impression" },
      { id: "finition", label: "Peinture de finition", value: "finition" },
    ],
  },
  {
    key: "finish",
    label: "Quelle finition préférez-vous ?",
    options: [
      { id: "mat", label: "Mat", value: "Mat" },
      { id: "velours", label: "Velours", value: "Velours" },
      { id: "satin", label: "Satin", value: "Satin" },
    ],
  },
];

export default function PaintFinishSelector() {
  const [selectedFilters, setSelectedFilters] = useState<Record<FilterKey, string | null>>({
    type: null,
    finish: null,
  });

  const [displayedProducts, setDisplayedProducts] = useState<PaintProduct[]>(
    INTERIOR_PAINT_PRODUCTS
  );

  const handleFilterChange = (key: FilterKey, value: string) => {
    const newFilters = { ...selectedFilters, [key]: value };
    setSelectedFilters(newFilters);

    // Filtrer les produits en fonction des sélections
    let filtered = INTERIOR_PAINT_PRODUCTS;

    // Filtre par type
    if (newFilters.type === "Impression") {
      filtered = filtered.filter((p) => p.finish === "Impression");
    } else if (newFilters.type === "finition") {
      filtered = filtered.filter((p) => p.finish !== "Impression");
    }

    // Filtre par finition
    if (newFilters.finish) {
      filtered = filtered.filter((p) => p.finish === newFilters.finish);
    }

    setDisplayedProducts(filtered);
  };

  const handleRemoveFilter = (key: FilterKey) => {
    const newFilters = { ...selectedFilters, [key]: null };
    setSelectedFilters(newFilters);

    // Recalculer les produits filtrés
    let filtered = INTERIOR_PAINT_PRODUCTS;

    if (newFilters.type === "Impression") {
      filtered = filtered.filter((p) => p.finish === "Impression");
    } else if (newFilters.type === "finition") {
      filtered = filtered.filter((p) => p.finish !== "Impression");
    }

    if (newFilters.finish) {
      filtered = filtered.filter((p) => p.finish === newFilters.finish);
    }

    setDisplayedProducts(filtered);
  };

  const handleReset = () => {
    setSelectedFilters({ type: null, finish: null });
    setDisplayedProducts(INTERIOR_PAINT_PRODUCTS);
  };

  // Déterminer les questions à afficher
  const visibleQuestions = FILTER_QUESTIONS.filter((question) => {
    if (question.key === "finish" && selectedFilters.type === null) {
      return false; // Ne pas afficher la question "finition" si le type n'est pas sélectionné
    }
    return true;
  });

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-[#0D1B3E] mb-8 text-center">
        Trouvez votre peinture idéale
      </h2>

      {/* Filtres */}
      <div className="space-y-6 mb-8">
        {visibleQuestions.map((question) => (
          <div key={question.key} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0D1B3E] mb-4">{question.label}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleFilterChange(question.key, option.value)}
                  variant={selectedFilters[question.key] === option.value ? "default" : "outline"}
                  className={`justify-start h-auto py-3 px-4 text-left ${
                    selectedFilters[question.key] === option.value
                      ? "bg-[#0D1B3E] text-white border-[#0D1B3E] hover:bg-[#0D1B3E]/90"
                      : "border-gray-300 text-gray-700 hover:border-[#0D1B3E] hover:text-[#0D1B3E]"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                        selectedFilters[question.key] === option.value
                          ? "bg-white border-white"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedFilters[question.key] === option.value && (
                        <div className="w-3 h-3 bg-[#0D1B3E] rounded-sm"></div>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Filtres appliqués */}
      {(selectedFilters.type || selectedFilters.finish) && (
        <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-[#0D1B3E]">Filtres appliqués :</h4>
            <Button
              onClick={handleReset}
              variant="ghost"
              className="text-sm text-gray-600 hover:text-[#0D1B3E]"
            >
              Réinitialiser tous les filtres
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {selectedFilters.type && (
              <div className="inline-flex items-center bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-sm">
                <span>
                  Type: {selectedFilters.type === "Impression" ? "Impression / Sous-couche" : "Peinture de finition"}
                </span>
                <button
                  onClick={() => handleRemoveFilter("type")}
                  className="ml-2 hover:opacity-80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {selectedFilters.finish && (
              <div className="inline-flex items-center bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-sm">
                <span>Finition: {selectedFilters.finish}</span>
                <button
                  onClick={() => handleRemoveFilter("finish")}
                  className="ml-2 hover:opacity-80"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Résultats */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#0D1B3E] mb-6">
          Produits ({displayedProducts.length})
        </h3>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
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
                    <span className="inline-block bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-xs font-semibold">
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
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-lg font-semibold">
              Aucun produit ne correspond à vos critères de recherche.
            </p>
            <p className="text-gray-500 mt-2">
              Essayez de modifier vos filtres pour voir d'autres produits.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
