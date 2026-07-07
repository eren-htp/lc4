import { useState, useEffect } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

export default function GoogleReviewsWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews: Review[] = [
    {
      author: "Sophie M.",
      rating: 5,
      text: "Excellent accueil et conseils avisés. Je recommande vivement ce magasin pour la qualité de ses produits et son service client irréprochable.",
      date: "Il y a 2 semaines"
    },
    {
      author: "Jean-Pierre L.",
      rating: 5,
      text: "Un choix immense de produits de qualité et une équipe toujours à l'écoute. C'est mon adresse de référence pour tous mes chantiers.",
      date: "Il y a 1 mois"
    },
    {
      author: "Marie D.",
      rating: 5,
      text: "Le personnel est très compétent et sympathique. Ils ont su me guider vers les produits parfaits pour mon projet de rénovation.",
      date: "Il y a 3 semaines"
    },
    {
      author: "Thomas R.",
      rating: 5,
      text: "Service impeccable, conseils professionnels et large choix de peintures. Je reviendrai sans hésiter !",
      date: "Il y a 1 semaine"
    },
    {
      author: "Catherine B.",
      rating: 5,
      text: "Très satisfaite de mon achat. L'équipe a pris le temps de bien m'expliquer les différentes options. Magasin à recommander !",
      date: "Il y a 2 mois"
    },
    {
      author: "Pierre K.",
      rating: 5,
      text: "Professionnalisme et expertise au rendez-vous. Les conseils m'ont permis de réussir parfaitement mes travaux de peinture.",
      date: "Il y a 3 semaines"
    },
    {
      author: "Laurent F.",
      rating: 5,
      text: "Magasin très bien achalandé avec un personnel compétent. Les prix sont corrects et le choix est vaste. Je recommande à tous les artisans du coin.",
      date: "Il y a 1 mois"
    },
    {
      author: "Nathalie W.",
      rating: 5,
      text: "Super expérience ! On m'a aidé à choisir la bonne teinte et le bon type de peinture pour ma cuisine. Résultat impeccable.",
      date: "Il y a 2 mois"
    },
    {
      author: "Marc S.",
      rating: 5,
      text: "Artisan depuis 15 ans, je ne vais nulle part ailleurs. Produits pro, conseils techniques pointus et livraison rapide sur chantier.",
      date: "Il y a 1 mois"
    },
    {
      author: "Isabelle G.",
      rating: 5,
      text: "Accueil chaleureux, équipe disponible et de bon conseil. J'ai trouvé tout ce qu'il me fallait pour refaire mon salon. Merci LC4 !",
      date: "Il y a 3 semaines"
    },
    {
      author: "François H.",
      rating: 5,
      text: "Rapport qualité-prix imbattable sur les peintures Blancolor. Le vendeur m'a même fait une démo pour l'application. Top !",
      date: "Il y a 2 semaines"
    },
    {
      author: "Stéphanie P.",
      rating: 5,
      text: "J'ai refait toute ma maison avec leurs produits. Peintures, sols, papier peint... Tout est de qualité et les conseils sont précieux.",
      date: "Il y a 1 mois"
    }
  ];

  // Auto-play du slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Fonction pour obtenir les avis visibles selon la taille d'écran
  const getVisibleReviews = () => {
    const visibleCount = 3; // Desktop: 3 avis
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push({ ...reviews[index], index });
    }
    return result;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* En-tête avec note globale */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
          Ce que nos clients disent de nous
        </h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-7 h-7 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <span className="text-2xl font-bold text-[#0D1B3E]">5.0</span>
        </div>
        <p className="text-lg text-gray-600 font-medium">
          Basé sur <span className="font-bold text-[#0D1B3E]">175 avis</span> Google vérifiés
        </p>
      </div>

      {/* Slider d'avis - Desktop (3 cartes) */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
        {getVisibleReviews().map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              {renderStars(review.rating)}
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed min-h-[100px]">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-[#0D1B3E] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {review.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0D1B3E]">{review.author}</p>
                <p className="text-xs text-gray-500">Client vérifié</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider d'avis - Tablet (2 cartes) */}
      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 mb-8">
        {getVisibleReviews().slice(0, 2).map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              {renderStars(review.rating)}
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed min-h-[100px]">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-[#0D1B3E] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {review.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#0D1B3E]">{review.author}</p>
                <p className="text-xs text-gray-500">Client vérifié</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider d'avis - Mobile (1 carte) */}
      <div className="md:hidden mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            {renderStars(reviews[currentIndex].rating)}
            <span className="text-sm text-gray-500">{reviews[currentIndex].date}</span>
          </div>
          <p className="text-gray-700 italic mb-4 leading-relaxed min-h-[120px]">
            "{reviews[currentIndex].text}"
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 bg-[#0D1B3E] rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {reviews[currentIndex].author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-[#0D1B3E]">{reviews[currentIndex].author}</p>
              <p className="text-xs text-gray-500">Client vérifié</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contrôles de navigation */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button
          onClick={prevReview}
          className="p-3 rounded-full bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white transition-all shadow-md hover:shadow-lg"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicateurs de pagination */}
        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#0D1B3E] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'avis ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="p-3 rounded-full bg-white border-2 border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white transition-all shadow-md hover:shadow-lg"
          aria-label="Avis suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bouton Voir tous les avis sur Google */}
      <div className="text-center">
        <a
          href="https://www.google.com/search?q=LC4+PEINTURE+%26+DECORATION+Mundolsheim"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D1B3E] text-white font-semibold rounded-lg hover:bg-[#1a2744] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Star className="w-5 h-5 fill-white" />
          Voir tous les avis sur Google (175 avis)
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
