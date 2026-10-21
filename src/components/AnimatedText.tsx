'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'fade' | 'slide' | 'bounce' | 'typewriter';
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02
    }
  }
};

const childVariants: any = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  bounce: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  },
  typewriter: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.3, // plus rapide : 0.3s au lieu de 0.6s
  staggerDelay = 0.01, // plus rapide : 0.01s au lieu de 0.02s
  tag = 'div',
  variant = 'slide'
}: AnimatedTextProps) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');
  
  const MotionTag = motion[tag] as any;

  if (typeof children !== 'string') {
    return (
      <MotionTag
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={childVariants[variant]}
          transition={{
            duration,
            ease: [0.4, 0, 0.2, 1] // plus rapide et plus snappy
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
