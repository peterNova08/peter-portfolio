import { useEffect, useState } from "react";

export function useInView(options = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -6% 0px", once = true } = options;
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(ref);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);

  return [setRef, inView];
}
