import powerMagz from "../assets/images/projects/powermagz/dashboard.png";
import prosset from "../assets/images/projects/prosset/prosset_login.jpg";
import sdo from "../assets/images/projects/sdolegazpi/sdohomepage.png";
import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function Projects() {
  const { t } = useTheme();

  const projects = [
    {
      title: "PowerMagz Gym Management System",
      slug: "powermagz",
      type: "Web Application",
      image: powerMagz,
      description:
        "Developed a web-based gym management system that replaces manual record keeping with digital member management, memberships, payments, attendance tracking, and reports.",
      tech: ["React", "Tailwind CSS", "Supabase"],
      demo: "https://power-magz-gym-rktj.vercel.app/",
    },
    {
      title: "ProSSet",
      slug: "prosset",
      type: "Mobile Application",
      image: prosset,
      description:
        "Built a Flutter mobile business management application that helps small and medium enterprises track profits, expenses, tax calculations, and asset records.",
      tech: ["Flutter", "Firebase"],
      demo: "#",
    },
    {
      title: "SDO Legazpi City Website",
      slug: "sdolegazpi",
      type: "Government Website",
      image: sdo,
      description:
        "Redeveloped the official website from Google Sites to WordPress, improving content management, structure, accessibility, and overall website functionality.",
      tech: ["WordPress", "HTML", "CSS", "JavaScript"],
      demo: "https://sdolegazpicity.com/",
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${t.sectionPlain}`}
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
          spacing="mb-14"
          label="// featured-work"
          title="Selected Projects"
          description="A collection of systems and platforms I designed, developed, and deployed — from business applications to government websites."
        />

        <div className="space-y-12">
          {projects.map((project, index) => {
            const isLive = project.demo !== "#";
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={project.slug}
                className={`group rounded-2xl border overflow-hidden transition-all duration-500 ${t.card} ${t.cardHover}`}
              >
                <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
                  <div className="flex items-center gap-3">
                    <WindowDots />
                    <span className={`font-mono text-xs ${t.chromeText}`}>
                      ~/projects/{project.slug}
                    </span>
                  </div>

                  <span className="font-mono text-xs flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isLive ? `${t.liveDot} animate-pulse` : t.muted
                      }`}
                    />
                    <span className={isLive ? t.syntaxLive : t.muted}>
                      {isLive ? "live" : "in dev"}
                    </span>
                  </span>
                </div>

                <div
                  className={`grid lg:grid-cols-2 ${
                    imageFirst ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center overflow-hidden p-6 ${t.imageWell} ${
                      project.slug === "prosset" ? "lg:p-12" : ""
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`transition duration-500 group-hover:scale-[1.03] ${
                        project.slug === "prosset"
                          ? `max-h-105 w-auto rounded-3xl shadow-2xl border ${t.imageBorder}`
                          : "w-full h-72 sm:h-80 object-cover rounded-xl"
                      }`}
                    />
                  </div>

                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <span className={`font-mono text-xs mb-3 ${t.subheading}`}>
                      {project.type}
                    </span>

                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${t.heading}`}>
                      {project.title}
                    </h3>

                    <p className={`leading-7 ${t.muted}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-7">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`font-mono text-xs border px-3 py-1.5 rounded-md ${t.tag}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8">
                      {isLive ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 font-mono text-sm font-medium px-5 py-3 rounded-lg transition-all duration-300 ${t.cta}`}
                        >
                          <span className={t.ctaText}>$</span>
                          open --demo →
                        </a>
                      ) : (
                        <span className={`inline-flex items-center gap-2 font-mono text-sm border px-5 py-3 rounded-lg ${t.outlineBtn}`}>
                          <span className={t.syntaxPrompt}>$</span>
                          demo --unavailable
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
