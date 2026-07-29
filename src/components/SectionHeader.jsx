function SectionHeader({ label, title, description, t, index, spacing = "mb-16", centered = false }) {
  const align = centered ? "text-center mx-auto" : "";

  return (
    <div className={`${spacing} ${align}`}>
      <div className={`flex items-center gap-4 mb-5 ${centered ? "justify-center" : ""}`}>
        {index && (
          <span className={`font-mono text-sm font-medium tabular-nums ${t.sectionNumber}`}>
            {index}
          </span>
        )}
        <span className={`h-px w-12 ${t.accentLine}`} />
        <p className={`font-mono text-sm tracking-wide ${t.sectionLabel}`}>{label}</p>
      </div>

      <h2 className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight mb-5 leading-[1.1] ${t.titleGradient}`}>
        {title}
      </h2>

      {description && (
        <p className={`max-w-2xl text-lg leading-relaxed ${t.muted} ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
