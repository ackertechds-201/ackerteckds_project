'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
  index?: number;
}

const cardVariants: any = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 15, // plus rapide : moins de damping
      stiffness: 150 // plus rapide : plus de stiffness
    }
  }
};

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  glow = false,
  tilt = false,
  index = 0
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{
        delay: delay + index * 0.05, // plus rapide : 0.05s au lieu de 0.1s
        duration: 0.3, // plus rapide : 0.3s au lieu de 0.6s
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        transition: {
          type: "spring" as const,
          damping: 20,
          stiffness: 300
        }
      } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl -z-10"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      )}
      
      <motion.div
        animate={tilt && isHovered ? {
          rotateX: 5,
          rotateY: -5,
        } : {
          rotateX: 0,
          rotateY: 0,
        }}
        transition={{
          type: "spring" as const,
          damping: 20,
          stiffness: 300
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
