import { useEffect, useState } from "react";

const SECTIONS = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "education",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
