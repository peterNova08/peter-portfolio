import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function Experience() {
  const { t } = useTheme();

  const experience = [
    {
      role: "Web Developer Intern",
      company: "Department of Education – Schools Division Office of Legazpi City",
      start: "Feb 2026",
      end: "Jun 2026",
      current: false,
      highlights: [
        "Redeveloped the official website from Google Sites to WordPress.",
        "Customized layouts using WordPress, HTML, CSS, and JavaScript.",
        "Improved website structure and content management.",
        "Collaborated with the development team during deployment and testing.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`relative py-24 border-t overflow-hidden transition-colors duration-500 ${t.section}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          t={t}
          label="// experience"
          title="Experience"
          description="My professional experience and internships."
        />

        <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${t.card}`}>
          <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
            <div className="flex items-center gap-2 min-w-0">
              <WindowDots />
              <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                $ git log --experience
              </span>
            </div>

            <span className={`font-mono text-xs shrink-0 ${t.chromeText}`}>
              {experience.length} {experience.length === 1 ? "commit" : "commits"}
            </span>
          </div>

          <div>
            {experience.map((job, index) => (
              <div
                key={job.role + job.start}
                className={`p-8 sm:p-10 ${
                  index !== experience.length - 1 ? `border-b ${t.divider}` : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="flex gap-4">
                    <span className={`font-mono text-xs pt-1 shrink-0 ${t.syntaxMarker}`}>
                      #{String(experience.length - index).padStart(3, "0")}
                    </span>

                    <div>
                      <h3 className={`text-2xl font-bold ${t.heading}`}>
                        {job.role}
                      </h3>
                      <p className={`mt-1.5 ${t.subheading}`}>{job.company}</p>
                    </div>
                  </div>

                  <span className={`font-mono text-xs flex items-center gap-1.5 md:pt-1 shrink-0 ${t.muted}`}>
                    {job.start} – {job.current ? "present" : job.end}
                    {job.current && (
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${t.liveDot}`} />
                    )}
                  </span>
                </div>

                <ul className="mt-7 space-y-3 pl-9">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className={`font-mono text-sm leading-7 flex gap-3 ${t.muted}`}
                    >
                      <span className={`shrink-0 ${t.syntaxPrompt}`}>+</span>
                      <span className="font-sans text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
