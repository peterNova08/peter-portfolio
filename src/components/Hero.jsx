import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume/realresume.pdf";
import { useTheme } from "../context/ThemeContext";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";
import { HiArrowRight, HiArrowDownTray } from "react-icons/hi2";
import { SiReact, SiFlutter, SiWordpress, SiSupabase } from "react-icons/si";

function Hero() {
  const { t } = useTheme();

  const badges = [
  { icon: SiReact, label: "React", position: "-top-1 -left-3 sm:-left-10" },
  { icon: SiSupabase, label: "Supabase", position: "-top-5 right-2 sm:right-4" },
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
      className={`relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden transition-colors duration-500 ${t.section}`}
    >
      {/* faint editor-grid atmosphere, matches every other section */}
      <div
        className={`pointer-events-none absolute inset-0 ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#f2b544]/5 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* real heading for a11y/SEO — the visual heading below is decorative code */}
        <h1 className="sr-only">Peter Nova — Full-Stack Web Developer</h1>

        <div className={`rounded-2xl border overflow-hidden transition-all duration-500 ${t.card}`}>
          {/* window chrome — same pattern as every other section */}
          <div className={`flex items-center justify-between px-5 py-3 border-b ${t.chrome}`}>
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef5350]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f2b544]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5fd9c4]/70" />
              </span>
              <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
                ~/peter-nova/portfolio
              </span>
            </div>
            <span className="flex items-center gap-1.5 font-mono text-xs shrink-0">
              <span className={`w-1.5 h-1.5 rounded-full ${t.liveDot} animate-pulse`} />
              <span className={t.syntaxLive}>available for work</span>
            </span>
          </div>

          {/* main content */}
          <div className={`grid lg:grid-cols-2 gap-14 lg:gap-8 p-8 sm:p-12 items-center border-t ${t.divider}`}>
            {/* code-styled intro */}
            <div className="order-2 lg:order-1">
              <div className="font-mono text-base sm:text-lg leading-[1.9]">
                <div>
                  <span className={t.syntaxLive}>const</span>{" "}
                  <span className={t.body}>developer</span>{" "}
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
                  className="group/cta inline-flex items-center gap-2 font-mono text-sm text-[#0b0d12] bg-[#f2b544] hover:bg-[#f5c569] transition-colors px-6 py-3.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2b544]"
                >
                  <span className="text-[#0b0d12]/60">$</span> view --projects
                  <HiArrowRight className="transition-transform duration-200 group-hover/cta:translate-x-1" />
                </a>

                <a
                  href={resume}
                  download
                  className={`inline-flex items-center gap-2 font-mono text-sm border transition-colors px-6 py-3.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5fd9c4] ${t.muted} ${t.divider} hover:border-[#5fd9c4]/40 hover:text-[#5fd9c4]`}
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
                    className={`transition-colors hover:text-[#5fd9c4] ${t.muted}`}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* profile visual */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 m-auto w-72 h-72 bg-[#f2b544]/20 blur-[100px] rounded-full" />
                <div className="absolute inset-0 m-auto w-72 h-72 bg-[#5fd9c4]/20 blur-[100px] rounded-full translate-x-10" />

                <img
                  src={profile}
                  alt="Peter Nova"
                  className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover object-[center_20%] border-4 shadow-2xl ${t.divider}`}
                />

                {badges.map(({ icon: Icon, label, position }) => (
                  <span
                    key={label}
                    className={`absolute ${position} flex items-center gap-2 font-mono text-xs px-3 py-2 rounded-lg shadow-xl ${t.tag}`}
                  >
                    <Icon /> {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* status bar — the one deliberate bright accent in the section */}
          <div className="rounded-b-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-2.5 bg-[#5fd9c4] text-[#0b0d12] font-mono text-[11px]">
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