import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume/updatedresume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";
import { HiArrowRight, HiArrowDownTray } from "react-icons/hi2";
import { SiReact, SiFlutter, SiWordpress, SiSupabase } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import WindowDots from "./WindowDots";

function Hero() {
  const { t } = useTheme();

  const badges = [
    { icon: SiReact, label: "React", position: "-top-5 -left-6 sm:-left-12" },
    { icon: SiSupabase, label: "Supabase", position: "top-10 -right-6 sm:-right-14" },
    { icon: SiFlutter, label: "Flutter", position: "bottom-16 -left-8 sm:-left-16" },
    { icon: SiWordpress, label: "WordPress", position: "-bottom-5 right-4 sm:right-8" },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com/peterNova08" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/peter-andrew-nova-1bb348385/" },
    { icon: FaFacebook, href: "https://www.facebook.com/peterandrew.nova" },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden transition-colors duration-500 ${t.sectionPlain}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className={`pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[140px] rounded-full ${t.glowAmbient}`} />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <h1 className="sr-only">Peter Nova — Full-Stack Web Developer</h1>

        <div className={`rounded-2xl border transition-all duration-500 ${t.card}`}>
          <div className="rounded-t-2xl overflow-hidden">
            <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
              <div className="flex items-center gap-2 min-w-0">
                <WindowDots />
                <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                  ~/peter-nova/portfolio/Home.jsx
                </span>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-xs shrink-0">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${t.liveDot}`} />
                <span className={t.syntaxLive}>available for work</span>
              </span>
            </div>
          </div>

          <div className={`grid lg:grid-cols-2 gap-14 lg:gap-8 p-8 sm:p-12 items-center border-t ${t.divider}`}>
            <div>
              <div className="font-mono text-base sm:text-lg leading-[1.9]">
                <div>
                  <span className={t.syntaxKeyword}>const</span>{" "}
                  <span className={t.heading}>developer</span>{" "}
                  <span className={t.muted}>= {"{"}</span>
                </div>
                <div className="pl-6">
                  <span className={t.muted}>name:</span>{" "}
                  <span className={t.syntaxString}>"Peter Nova"</span>
                  <span className={t.muted}>,</span>
                </div>
                <div className="pl-6">
                  <span className={t.muted}>role:</span>{" "}
                  <span className={t.syntaxString}>"Full-Stack Web Developer"</span>
                  <span className={t.muted}>,</span>
                </div>
                <div className="pl-6">
                  <span className={t.muted}>stack:</span>{" "}
                  <span className={t.muted}>[</span>
                  <span className={t.syntaxString}>"React"</span>
                  <span className={t.muted}>, </span>
                  <span className={t.syntaxString}>"Flutter"</span>
                  <span className={t.muted}>, </span>
                  <span className={t.syntaxString}>"Supabase"</span>
                  <span className={t.muted}>, </span>
                  <span className={t.syntaxString}>"WordPress"</span>
                  <span className={t.muted}>],</span>
                </div>
                <div>
                  <span className={t.muted}>{"};"}</span>
                </div>
              </div>

              <p className={`mt-8 leading-8 max-w-lg ${t.muted}`}>
                I build responsive web and mobile applications that solve
                real-world problems — from gym management systems to
                government websites.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#projects"
                  className={`group/cta inline-flex items-center gap-2 font-mono text-sm transition-all duration-300 px-6 py-3.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2b544] ${t.cta}`}
                >
                  <span className={t.ctaText}>$</span> view --projects
                  <HiArrowRight className="transition-transform duration-200 group-hover/cta:translate-x-1" />
                </a>

                <a
                  href={resume}
                  download
                  className={`inline-flex items-center gap-2 font-mono text-sm border transition-all duration-300 px-6 py-3.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5fd9c4] ${t.outlineBtn}`}
                >
                  <HiArrowDownTray /> resume.pdf
                </a>
              </div>

              <div className="flex items-center gap-5 mt-10">
                {socials.map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${t.social}`}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                  <div className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-125 blur-[100px] rounded-full ${t.glowWarm}`} />
                  <div className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full scale-125 blur-[100px] rounded-full ${t.glowCool}`} />

                  <div className={`relative z-10 w-full h-full rounded-full overflow-hidden border-4 ${t.profileBorder}`}>
                    <img
                      src={profile}
                      alt="Peter Nova"
                      className="w-full h-full object-cover object-[50%_18%]"
                    />
                  </div>
                </div>

                {badges.map(({ icon: Icon, label, position }) => (
                  <span
                    key={label}
                    className={`absolute ${position} flex items-center gap-2 font-mono text-xs border px-3 py-2 rounded-lg ${t.badge}`}
                  >
                    <Icon /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-b-2xl overflow-hidden">
            <div className={`flex items-center justify-between px-5 py-2.5 font-mono text-[11px] ${t.statusBar}`}>
              <span className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <FaCodeBranch /> main
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <FaCheckCircle /> no errors
                </span>
              </span>
              <span className="hidden sm:inline">React · Tailwind CSS · Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
