import React from 'react';

const PARTNER_LOGOS = [
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/semin-logo_92f311b8.png', alt: 'Semin' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/tarkett-logo_86bab222.png', alt: 'Tarkett' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/vepro-logo_bb6a1e5d.png', alt: 'Vepro' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/sikkens-logo_3060bc79.png', alt: 'Sikkens' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/theard_logo-noir_2023_17db0b99.png', alt: 'Theard' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/festool-logo_7529b1dd.png', alt: 'Festool' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/erfurt_logo_9b693688.png', alt: 'Erfurt' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/adfords-logo_ed03998a.png', alt: 'Adfords' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/alsa-floo_4615820a.png', alt: 'Alsafloo' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/astral-logo-new_88a9e849.png', alt: 'Astral' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/cimentol-logo_edd4805a.png', alt: 'Cimentol' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/ciretfrance-logo_7785387c.webp', alt: 'Ciret France' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/beissier-logo_c366b90b.png', alt: 'Beissier' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/blanchon-logo_64bfe34c.png', alt: 'Blanchon' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/brennenstuhl-logo_b21b950b.png', alt: 'Brennenstuhl' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/bostik-logo_1f811b18.png', alt: 'Bostik' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/decortic-logo_53993549.png', alt: 'Decortic' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/domaterra-logo_d6070969.png', alt: 'Domaterra' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/euromair-logo_5b7c8445.png', alt: 'Euromair' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/dulary-logo_ddcc8806.png', alt: 'Dulary' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/logo_blancolor_9168d9ec.webp', alt: 'Blancolor' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/logo-dorken_51bc39d1.jpg', alt: 'Dörken' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/loutil-parfait-logo_13148d76.png', alt: "L'Outil Parfait" },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/montecolino_logo_040630b2.jpg', alt: 'Montecolino' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/marbug-logo_4fe31741.png', alt: 'Marburg' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/nmc-logo-new_da62f4b8.png', alt: 'NMC' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/noel-et-marquet_dd067b92.png', alt: 'Noël & Marquet' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/prb-logo_672f089d.png', alt: 'PRB' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/primex-logo_00b59e81.png', alt: 'Primex' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/romus-logo_7c8d5714.png', alt: 'Romus' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663063275076/HiQJLLj6n2QfeF6Jg4yqqM/saint-gobain_logo_a78602f8.png', alt: 'Saint-Gobain' },
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
