"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

function useIntersectionObserver(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref, isVisible };
}

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "slide-in-from-left" | "slide-in-from-right" | "fade-in-up";
};

export function AnimatedSection({ children, className, delay = 0, animation = "fade-in-up" }: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setTimeout(() => {
        setHasAnimated(true);
      }, delay);
    }
  }, [isVisible, hasAnimated, delay]);
  
  const getAnimationClass = () => {
    if (hasAnimated) {
       switch (animation) {
         case "slide-in-from-left": return "animate-slide-in-from-left";
         case "slide-in-from-right": return "animate-slide-in-from-right";
         default: return "animate-pop-in";
       }
    }
    return "opacity-0";
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-500",
        getAnimationClass(),
        className
      )}
    >
      {children}
    </div>
  );
}
