'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition: any = {
  type: 'tween',
  ease: [0.4, 0, 0.2, 1], // plus rapide et plus snappy
  duration: 0.2 // plus rapide : 0.2s au lieu de 0.4s
};

const containerVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // plus rapide : 0.05s au lieu de 0.1s
      delayChildren: 0.1 // plus rapide : 0.1s au lieu de 0.2s
    }
  },
  out: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  },
  out: {
    opacity: 0,
    y: -30
  }
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export { containerVariants, itemVariants };
