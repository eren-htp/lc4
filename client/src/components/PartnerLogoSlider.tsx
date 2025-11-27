import React from 'react';

interface PartnerLogoSliderProps {
  logos: string[];
}

const PartnerLogoSlider: React.FC<PartnerLogoSliderProps> = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <>
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
            width: 200%;
            animation: slide 40s linear infinite;
          }

          .logo-item {
            flex-shrink: 0;
            width: calc(100% / ${logos.length} * 2);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 2rem;
          }
          
          .logo-item img {
            max-height: 80px;
            max-width: 150px;
            object-fit: contain;
            filter: grayscale(100%);
            opacity: 0.8;
            transition: all 0.3s ease;
          }

          .logo-item:hover img {
            filter: none;
            opacity: 1;
            transform: scale(1.1);
          }
        `}
      </style>
      <div className="overflow-hidden w-full py-8 bg-white">
        <div className="slider-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img 
                src={logo} 
                alt={`Logo partenaire ${index % logos.length + 1}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartnerLogoSlider;
