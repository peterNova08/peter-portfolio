import { useTheme } from "../context/ThemeContext";

function SectionShell({ id, variant = "plain", children, className = "" }) {
  const { t } = useTheme();
  const bg = variant === "alt" ? t.section : t.sectionPlain;

  return (
    <section
      id={id}
      className={`relative py-28 sm:py-32 overflow-hidden transition-colors duration-500 scroll-mt-24 border-t ${t.divider} ${bg} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className={`pointer-events-none absolute -top-40 -right-20 w-[420px] h-[420px] blur-[120px] rounded-full ${t.glowAmbient}`} />
      <div className={`pointer-events-none absolute -bottom-40 -left-20 w-[320px] h-[320px] blur-[100px] rounded-full ${t.glowCool}`} />

      <div className="relative max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

export default SectionShell;
