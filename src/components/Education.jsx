import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function Education() {
  const { t } = useTheme();

  const coursework = [
    "Web Development",
    "Mobile Development",
    "Database Management",
    "Systems Analysis & Design",
    "Software Engineering",
    "Information Management",
  ];

  return (
    <section
      id="education"
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
          label="// education"
          title="Education"
          description="My academic background in Information Technology."
        />

        <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${t.card}`}>
          <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
            <div className="flex items-center gap-2 min-w-0">
              <WindowDots />
              <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                ~/education/README.md
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <h3 className={`text-2xl font-bold ${t.heading}`}>
              STI College Legazpi
            </h3>

            <p className={`mt-2 ${t.subheading}`}>
              Bachelor of Science in Information Technology
            </p>

            <p className={`font-mono text-xs mt-2 ${t.muted}`}>
              2022 – 2026
            </p>

            <div className={`mt-9 pt-8 border-t ${t.divider}`}>
              <p className={`font-mono text-xs mb-5 ${t.syntaxMarker}`}>
                ## Relevant Coursework
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {coursework.map((course) => (
                  <p
                    key={course}
                    className={`flex items-center gap-3 ${t.muted}`}
                  >
                    <span className={`font-mono text-sm shrink-0 ${t.syntaxPrompt}`}>
                      [x]
                    </span>
                    {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
