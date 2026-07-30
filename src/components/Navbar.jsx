import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";

function Navbar() {
  const { darkMode, toggleTheme, t } = useTheme();
  const activeSection = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? t.navScrolled : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a
            href="#home"
            className={`font-mono text-2xl font-bold tracking-tight transition-colors duration-300 ${t.navLogo}`}
          >
            PN
            <span className={`${t.syntaxString} animate-pulse`}>_</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`group relative font-mono text-sm px-3.5 py-2 rounded-lg transition-all duration-300 ${
                    isActive ? t.navLinkActive : t.navLink
                  } ${isActive ? (darkMode ? "bg-[#5fd9c4]/8" : "bg-[#ecfdf5]") : ""}`}
                >
                  <span
                    className={`${t.navHash} ${t.navHashHover} transition-colors duration-300`}
                  >
                    #
                  </span>{" "}
                  {label.toLowerCase()}
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-px origin-left transition-transform duration-300 ${t.navUnderline} ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`relative w-14 h-8 rounded-full border transition-all duration-300 ml-4 ${t.navToggle}`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full border shadow-sm flex items-center justify-center transition-transform duration-300 ${t.navToggleKnob} ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              >
                <Moon
                  size={13}
                  className={`absolute transition-all duration-300 ${t.syntaxKeyword} ${
                    darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
                  }`}
                />
                <Sun
                  size={13}
                  className={`absolute transition-all duration-300 ${t.syntaxString} ${
                    darkMode ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
                  }`}
                />
              </span>
            </button>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors duration-300 ${t.navToggle} ${t.navIcon}`}
            >
              <span className="relative block w-4 h-4">
                <Moon
                  size={16}
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                />
                <Sun
                  size={16}
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? "opacity-0 scale-50" : "opacity-100 scale-100"
                  }`}
                />
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`w-10 h-10 rounded-xl border flex items-center justify-center ${t.navToggle} ${t.navLogo}`}
            >
              <span className="relative block w-5 h-5">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                  }`}
                  size={20}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                  }`}
                  size={20}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-18 left-0 right-0 z-40 lg:hidden overflow-hidden transition-all duration-300 ease-out border-b backdrop-blur-xl ${
          menuOpen
            ? `max-h-112 opacity-100 ${t.mobileMenu}`
            : "max-h-0 opacity-0 border-transparent pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 gap-1 max-w-6xl mx-auto">
          {navLinks.map(({ label, id }, index) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${index * 40}ms` : "0ms" }}
                className={`font-mono text-base px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                  isActive ? t.mobileMenuLinkActive : t.mobileMenuLink
                } ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"}`}
              >
                <span className={t.syntaxString}>#</span> {label.toLowerCase()}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
