import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(callback: () => void, threshold = 0.8) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null, // Default is viewport
      rootMargin: '300px', // Preload when the user is within 300px of the target
      threshold, // Trigger callback when this proportion of the target is visible
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, threshold]);

  useEffect(() => {
    const currentTarget = targetRef.current;
    const currentObserver = observerRef.current;

    if (currentTarget && currentObserver) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget && currentObserver) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [targetRef.current]);

  return { targetRef };
}
