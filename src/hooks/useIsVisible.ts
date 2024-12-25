import { useState, useEffect, RefObject } from "react";

const useIsVisible = <T extends HTMLElement>(
  ref: RefObject<T | null>, // Allow `null` in the type
  threshold: number = 0.1
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default useIsVisible;
