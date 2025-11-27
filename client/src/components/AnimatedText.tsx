import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  variant?: 'fadeIn' | 'slideIn' | 'typewriter' | 'wave' | 'bounce';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.05,
  variant = 'fadeIn',
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration },
      },
    },
    slideIn: {
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration },
      },
    },
    typewriter: {
      hidden: { opacity: 0, width: 0 },
      visible: {
        opacity: 1,
        width: 'auto',
        transition: { duration },
      },
    },
    wave: {
      hidden: { y: 0 },
      visible: {
        y: 0,
        transition: {
          duration,
        },
      },
    },
    bounce: {
      hidden: { y: 0 },
      visible: {
        y: 0,
        transition: {
          duration,
        },
      },
    },
  };

  const selectedVariant = itemVariants[variant] as any;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={selectedVariant}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
