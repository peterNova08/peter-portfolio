import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import WindowDots from "./WindowDots";

function Contact() {
  const { t } = useTheme();

  const socials = [
    { label: "github", icon: FaGithub, href: "https://github.com/peterNova08" },
    {
      label: "linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/peter-andrew-nova-1bb348385/",
    },
    {
      label: "facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/peterandrew.nova",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative py-24 border-t overflow-hidden transition-colors duration-500 ${t.sectionPlain}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionHeader
          t={t}
          label="// contact"
          title="Let's Work Together"
          description="I'm currently looking for opportunities as a Web Developer. Whether you have a project, internship, or full-time position, I'd love to hear from you."
        />

        <div className={`rounded-2xl border overflow-hidden text-left transition-all duration-500 ${t.card}`}>
          <div className={`flex items-center gap-2 px-5 py-3 border-b ${t.chrome}`}>
            <WindowDots />
            <span className={`ml-3 font-mono text-xs truncate ${t.chromeText}`}>
              ~/contact.sh
            </span>
          </div>

          <div className="p-8 sm:p-10">
            <p className={`font-mono text-sm mb-6 ${t.muted}`}>
              <span className={t.syntaxPrompt}>$</span> ./contact.sh --email
            </p>

            <a
              href="mailto:peternovaloyola123@gmail.com"
              className={`group/cta w-full inline-flex items-center justify-center gap-2 font-mono text-sm transition-all duration-300 px-5 py-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2b544] ${t.cta}`}
            >
              <span className={t.ctaText}>$</span>{" "}
              peternovaloyola123@gmail.com
              <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                →
              </span>
            </a>

            <p className={`font-mono text-sm mt-8 mb-4 ${t.muted}`}>
              <span className={t.syntaxPrompt}>$</span> ./contact.sh --socials
            </p>

            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-mono text-xs border transition-all duration-300 px-4 py-2.5 rounded-lg ${t.outlineBtn}`}
                >
                  <Icon className="text-base" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
