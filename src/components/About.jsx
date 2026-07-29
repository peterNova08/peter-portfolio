import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function About() {
  const { t } = useTheme();
  const openToWork = true;

  const stack = {
    frontend: ["React", "Tailwind CSS", "JavaScript"],
    backend: ["Supabase", "Firebase"],
    mobile: ["Flutter"],
    other: ["WordPress", "Git"],
  };

  return (
    <section
      id="about"
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
          label="// about-me"
          title="About Me"
          description="A quick rundown of who I am and what I build with."
        />

        <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${t.card}`}>
          <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
            <div className="flex items-center gap-2 min-w-0">
              <WindowDots />
              <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                ~/whoami
              </span>
            </div>

            <span className="flex items-center gap-1.5 font-mono text-xs shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  openToWork ? `${t.liveDot} animate-pulse` : "bg-[#78716c]/50"
                }`}
              />
              <span className={openToWork ? t.syntaxLive : t.muted}>
                {openToWork ? "open to work" : "not available"}
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-5">
            <div className={`lg:col-span-3 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r ${t.divider}`}>
              <p className={`font-mono text-xs mb-4 ${t.muted}`}>
                <span className={t.syntaxPrompt}>$</span> whoami
              </p>

              <p className={`text-lg leading-8 mb-5 ${t.body}`}>
                I'm a frontend-focused developer who builds fast, usable
                interfaces and the systems behind them — from gym
                management dashboards to mobile business tools.
              </p>

              <p className={`leading-7 ${t.muted}`}>
                Most of my work centers on React and Tailwind CSS on the
                frontend, backed by Supabase or Firebase for data and
                auth. I've also shipped a Flutter mobile app and rebuilt
                a government website on WordPress — I care more about
                shipping something that actually works for the people
                using it than sticking to one stack.
              </p>
            </div>

            <div className="lg:col-span-2 p-8 sm:p-10">
              <p className={`font-mono text-xs mb-5 ${t.muted}`}>
                <span className={t.syntaxPrompt}>$</span> cat stack.json
              </p>

              <div className="space-y-5">
                {Object.entries(stack).map(([category, tools]) => (
                  <div key={category}>
                    <p className={`font-mono text-xs mb-2 ${t.syntaxMarker}`}>
                      {category}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span
                          key={tool}
                          className={`font-mono text-xs border px-3 py-1.5 rounded-md ${t.tag}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
