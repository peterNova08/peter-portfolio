import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function Skills() {
  const { t } = useTheme();

  const categories = [
    {
      key: "frontend",
      skills: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      key: "backend",
      skills: ["Supabase", "Firebase"],
    },
    {
      key: "mobile",
      skills: ["Flutter", "Dart"],
    },
    {
      key: "cmsAndTools",
      skills: ["WordPress", "Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-24 border-t overflow-hidden transition-colors duration-500 ${t.sectionPlain}`}
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
          label="// skills"
          title="Skills"
          description="Technologies and tools I use to build responsive web and mobile applications."
        />

        <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${t.card}`}>
          <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
            <div className="flex items-center gap-2 min-w-0">
              <WindowDots />
              <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                ~/package.json
              </span>
            </div>

            <span className={`font-mono text-xs shrink-0 ${t.chromeText}`}>
              {categories.reduce((sum, c) => sum + c.skills.length, 0)} deps
            </span>
          </div>

          <div className="p-8 sm:p-10 font-mono">
            <p className={t.muted}>{"{"}</p>

            <div className="pl-6 space-y-6 my-2">
              {categories.map((category, index) => (
                <div key={category.key}>
                  <p className="text-sm">
                    <span className={t.syntaxKeyword}>"{category.key}"</span>
                    <span className={t.muted}>: [</span>
                  </p>

                  <div className="flex flex-wrap gap-2 pl-6 py-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs border px-3 py-1.5 rounded-md ${t.tag}`}
                      >
                        "{skill}"
                      </span>
                    ))}
                  </div>

                  <p className={`text-sm ${t.muted}`}>
                    ]{index !== categories.length - 1 ? "," : ""}
                  </p>
                </div>
              ))}
            </div>

            <p className={t.muted}>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
