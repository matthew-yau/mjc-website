import { useState, useEffect, RefObject } from "react";

const useIsVisible = <T extends HTMLElement>(
  ref: RefObject<T | null>, // Accept `null` in the type
  threshold: number = 0.1
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return; // Early return if ref is null

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default useIsVisible;
