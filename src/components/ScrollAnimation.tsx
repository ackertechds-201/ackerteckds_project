'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef, useEffect, useState } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  duration?: number;
  triggerOnce?: boolean; // renommé pour plus de clarté
  threshold?: number; // pour contrôler quand l'animation se déclenche
  resetOnLeave?: boolean; // pour réinitialiser quand on quitte la vue
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export default function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.3, // plus rapide : 0.3s au lieu de 0.6s
  triggerOnce = false, // false par défaut pour animation à chaque scroll
  threshold = 0.1,
  resetOnLeave = true
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce, 
    margin: '-50px',
    amount: threshold
  });

  const selectedVariant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{
        duration,
        delay: isInView ? delay : 0, // pas de délai quand on sort
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
