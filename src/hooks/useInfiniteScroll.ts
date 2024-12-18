import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll(callback: () => void, threshold = 0.8) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      threshold,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
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

  return { targetRef, isIntersecting };
}