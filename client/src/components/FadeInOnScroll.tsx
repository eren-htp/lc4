import React, { useRef, useEffect, useState } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  duration?: number; // Duration in ms
  threshold?: number; // Intersection threshold
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 700, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once visible
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [threshold]);

  const transitionStyle = {
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };

  return (
    <div
      className={`${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={transitionStyle}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
