import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  backgroundImage?: string;
  backgroundGradient?: string;
  animated?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  intensity = 0.5,
  backgroundImage,
  backgroundGradient,
  animated = true,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!animated) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    background: backgroundGradient,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: animated ? `translateY(${scrollY * intensity}px)` : undefined,
    transition: 'transform 0.1s ease-out',
  };

  return (
    <motion.section
      className={`relative overflow-hidden ${className}`}
      style={backgroundStyle}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default ParallaxSection;
