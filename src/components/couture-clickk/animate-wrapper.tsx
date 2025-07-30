"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateWrapper({ children, className, delay = 0 }: AnimateWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for the animation to start after it becomes visible
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if(element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
