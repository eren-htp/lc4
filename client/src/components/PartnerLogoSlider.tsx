import React from 'react';

const PARTNER_LOGOS = [
  { src: '/images/partners/semin-logo.png', alt: 'Semin' },
  { src: '/images/partners/tarkett-logo.png', alt: 'Tarkett' },
  { src: '/images/partners/vepro-logo.png', alt: 'Vepro' },
  { src: '/images/partners/sikkens-logo.png', alt: 'Sikkens' },
  { src: '/images/partners/theard_logo-noir_2023.png', alt: 'Theard' },
  { src: '/images/partners/festool-logo.png', alt: 'Festool' },
  { src: '/images/partners/erfurt_logo.png', alt: 'Erfurt' },
  { src: '/images/partners/adfords-logo.png', alt: 'Adfords' },
  { src: '/images/partners/alsa-floo.png', alt: 'Alsafloo' },
  { src: '/images/partners/astral-logo.jpg', alt: 'Astral' },
  { src: '/images/partners/cimentol-logo.png', alt: 'Cimentol' },
  { src: '/images/partners/ciretfrance_logo.webp', alt: 'Ciret France' },
  { src: '/images/partners/beissier-logo.png', alt: 'Beissier' },
  { src: '/images/partners/blanchon-logo.png', alt: 'Blanchon' },
  { src: '/images/partners/brennenstuhl-logo.png', alt: 'Brennenstuhl' },
  { src: '/images/partners/bostik-logo.png', alt: 'Bostik' },
  { src: '/images/partners/decortic-logo.png', alt: 'Decortic' },
  { src: '/images/partners/domaterra-logo.png', alt: 'Domaterra' },
  { src: '/images/partners/euromair-logo.png', alt: 'Euromair' },
  { src: '/images/partners/dulary-logo.png', alt: 'Dulary' },
  { src: '/images/partners/logo_blancolor.webp', alt: 'Blancolor' },
  { src: '/images/partners/logo-dorken.jpg', alt: 'Dörken' },
  { src: '/images/partners/loutil-parfait-logo.png', alt: "L'Outil Parfait" },
  { src: '/images/partners/montecolino_logo.jpg', alt: 'Montecolino' },
  { src: '/images/partners/marbug-logo.png', alt: 'Marburg' },
  { src: '/images/partners/nmc-logo.png', alt: 'NMC' },
  { src: '/images/partners/noel-et-marquet.png', alt: 'Noël & Marquet' },
  { src: '/images/partners/prb-logo.png', alt: 'PRB' },
  { src: '/images/partners/primex-logo.png', alt: 'Primex' },
  { src: '/images/partners/romus-logo.png', alt: 'Romus' },
  { src: '/images/partners/saint-gobain_logo.png', alt: 'Saint-Gobain' },
];

const PartnerLogoSlider: React.FC = () => {
  // Tripler les logos pour un défilement fluide
  const triplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <>
      <style>
        {`
          @keyframes infiniteScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .logo-slider-container {
            position: relative;
            overflow: hidden;
            background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
            padding: 4rem 0;
          }

          .logo-slider-track {
            display: flex;
            width: max-content;
            animation: infiniteScroll 60s linear infinite;
            gap: 4rem;
          }

          .logo-slider-item {
            flex-shrink: 0;
            width: 200px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .logo-slider-item img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            filter: grayscale(100%) brightness(0.95);
            opacity: 0.75;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .logo-slider-item:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          }

          .logo-slider-item:hover img {
            filter: grayscale(0%) brightness(1);
            opacity: 1;
          }

          /* Gradient fade edges */
          .logo-slider-container::before,
          .logo-slider-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 2;
            pointer-events: none;
          }

          .logo-slider-container::before {
            left: 0;
            background: linear-gradient(to right, #f8f9fa, transparent);
          }

          .logo-slider-container::after {
            right: 0;
            background: linear-gradient(to left, #f8f9fa, transparent);
          }

          @media (max-width: 768px) {
            .logo-slider-track {
              gap: 2rem;
            }

            .logo-slider-item {
              width: 150px;
              height: 90px;
              padding: 1rem;
            }

            .logo-slider-container::before,
            .logo-slider-container::after {
              width: 80px;
            }
          }
        `}
      </style>
      
      <div className="w-full py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
            Nos Marques Partenaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les plus grandes marques du secteur pour vous garantir qualité et excellence
          </p>
        </div>

        <div className="logo-slider-container">
          <div className="logo-slider-track">
            {triplicatedLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="logo-slider-item">
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogoSlider;
