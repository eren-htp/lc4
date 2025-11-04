import React from 'react';

interface InfiniteLogoSliderProps {
  logos: string[];
}

const InfiniteLogoSlider: React.FC<InfiniteLogoSliderProps> = ({ logos }) => {
  // Dupliquer les logos pour assurer un défilement continu sans saut
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
      {/* Définition de l'animation CSS */}
      <style>
        {`
          @keyframes slide {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .slider-track {
            display: flex;
            width: 200%; /* La largeur est doublée pour l'effet de boucle */
            animation: slide 40s linear infinite; /* Augmenter la durée pour une vitesse plus lente */
          }

          .logo-item {
            flex-shrink: 0;
            width: calc(100% / ${logos.length + 2}); /* Ajuster la largeur pour un meilleur espacement */
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 2rem;
            
            /* Style par défaut */
            filter: grayscale(100%);
            opacity: 0.6;
            transition: all 0.3s ease;
          }

          .logo-item:hover {
            filter: none;
            opacity: 1;
          }
          
          /* Pour s'assurer que l'animation ne s'arrête pas au survol */
          .slider-track:hover {
            animation-play-state: running;
          }
        `}
      </style>

      <div className="overflow-hidden w-full h-24 bg-white shadow-inner">
        <div className="slider-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img 
                src={logo} 
                alt={`Logo partenaire ${index % logos.length + 1}`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteLogoSlider;
