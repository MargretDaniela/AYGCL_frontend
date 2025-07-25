import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return [domRef, isVisible];
}
