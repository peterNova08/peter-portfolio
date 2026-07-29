import { useInView } from "../hooks/useInView";

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [setRef, inView] = useInView();

  return (
    <Tag
      ref={setRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "reveal-visible" : "reveal-hidden"} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
