"use client";

import { useEffect, useRef } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, margin = "0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, margin]);

  return ref;
}
