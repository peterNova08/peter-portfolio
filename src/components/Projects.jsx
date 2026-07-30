import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import powerMagz from "../assets/images/projects/powermagz/dashboard.png";
import prosset from "../assets/images/projects/prosset/prosset_login.jpg";
import sdo from "../assets/images/projects/sdolegazpi/sdohomepage.png";
import { useTheme } from "../context/ThemeContext";
import SectionHeader from "./SectionHeader";
import InfiniteMenu from "./InfiniteMenu";

const AUTOPLAY_MS = 6000;

function Projects() {
  const { t } = useTheme();
  const menuRef = useRef(null);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const progressRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const progressStartRef = useRef(null);

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
      year: "2025",
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
      year: "2024",
    },
    {
      title: "SDO Legazpi City Website",
      slug: "sdolegazpi",
      type: "Government Website",
      image: sdo,
      description:
        "Redeveloped the official website from Google Sites to WordPress, improving content management, structure, accessibility, and overall website functionality.",
      tech: ["WordPress", "HTML", "CSS", "JavaScript"],
      demo: "https://sdolegazpicity.com/website-developers/",
      year: "2024",
    },
  ];

  // Stable reference — prevents InfiniteMenu's WebGL sketch from rebuilding
  // (and resetting to index 0) on every unrelated re-render.
  const menuItems = useMemo(
    () =>
      projects.map((project) => ({
        image: project.image,
        link: project.demo !== "#" ? project.demo : "",
        title: project.title,
        description: project.description,
        type: project.type,
        tech: project.tech,
        slug: project.slug,
        year: project.year,
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const activeItem = menuItems[activeIndex];
  const isLive = Boolean(activeItem?.link);

  const handleActiveItemChange = useCallback(
    (item) => {
      const idx = menuItems.findIndex((m) => m.slug === item.slug);
      if (idx !== -1) setActiveIndex(idx);
    },
    [menuItems]
  );

  const goNext = useCallback(() => {
    menuRef.current?.goToNext();
    setProgressKey((k) => k + 1);
  }, []);

  const goPrev = useCallback(() => {
    menuRef.current?.goToPrev();
    setProgressKey((k) => k + 1);
  }, []);

  const goTo = useCallback((idx) => {
    menuRef.current?.goToIndex(idx);
    setProgressKey((k) => k + 1);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return undefined;

    autoplayTimerRef.current = setTimeout(() => {
      goNext();
    }, AUTOPLAY_MS);

    return () => clearTimeout(autoplayTimerRef.current);
  }, [activeIndex, isPaused, progressKey, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Swipe support (mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative py-16 transition-colors duration-500 ${t.sectionPlain}`}
    >
      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .autoplay-progress {
          animation: progressBar ${AUTOPLAY_MS}ms linear forwards;
        }
        .autoplay-progress.paused {
          animation-play-state: paused;
        }
        @keyframes contentFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .content-fade {
          animation: contentFade 0.4s ease both;
        }
        @keyframes floatPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .pulse-dot {
          animation: floatPulse 2s ease-in-out infinite;
        }
        .thumb-scroll {
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .thumb-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${t.gridOpacity}`}
        style={{
          backgroundImage: `linear-gradient(${t.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${t.gridColor} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          t={t}
          spacing="mb-6"
          label="// featured-work"
          title="Selected Projects"
          description="A collection of systems and platforms I designed, developed, and deployed — from business applications to government websites."
          titleClassName="text-2xl md:text-3xl"
          descriptionClassName="text-sm"
        />

        <div
          className="relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            background: "linear-gradient(180deg, #0d0d12 0%, #08080b 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 24px 60px -24px rgba(0,0,0,0.65)",
          }}
        >
          {/* header bar */}
          <div className="relative z-20 flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-amber-400/90">
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot"
                style={{
                  background: isLive ? "#34d399" : "#6b7280",
                  boxShadow: isLive ? "0 0 8px #34d399" : "none",
                }}
              />
              {isLive ? "LIVE" : "OFFLINE"}
              <span className="text-gray-600">·</span>
              <span className="text-gray-400">
                {String(activeIndex + 1).padStart(2, "0")} / {String(menuItems.length).padStart(2, "0")}
              </span>
            </div>
            <span className="hidden sm:block font-mono text-[10px] tracking-wider text-gray-500">
              drag sphere · arrow keys · swipe
            </span>
          </div>

          {/* autoplay progress bar */}
          <div className="relative h-[2px] bg-white/[0.04] overflow-hidden">
            <div
              key={`${activeIndex}-${progressKey}`}
              ref={progressRef}
              className={`h-full bg-amber-400 autoplay-progress ${isPaused ? "paused" : ""}`}
            />
          </div>

          {/* body */}
          <div className="relative flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2" style={{ height: "480px" }}>
              {/* giant faded index number in the background */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                style={{
                  fontSize: "220px",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.02)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </div>

              <InfiniteMenu
                ref={menuRef}
                items={menuItems}
                showOverlay={false}
                onActiveItemChange={handleActiveItemChange}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 50%, #08080b 100%)",
                }}
              />

              {/* prev/next controls */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
                <button
                  onClick={goPrev}
                  aria-label="Previous project"
                  className="w-9 h-9 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all hover:scale-105 active:scale-95"
                >
                  ←
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next project"
                  className="w-9 h-9 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all hover:scale-105 active:scale-95"
                >
                  →
                </button>
              </div>

              {/* pause indicator */}
              {isPaused && (
                <div className="absolute top-4 right-4 z-20 font-mono text-[10px] tracking-wider text-gray-400 bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full">
                  paused
                </div>
              )}
            </div>

            {/* info panel */}
            <div className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-white/[0.06] p-6 md:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[480px]">
              <div key={activeItem?.slug} className="content-fade">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] tracking-wider text-gray-500">
                    {activeItem?.type}
                  </span>
                  <span className="text-gray-700">•</span>
                  <span className="font-mono text-[11px] tracking-wider text-gray-600">
                    {activeItem?.year}
                  </span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
                  {activeItem?.title}
                </h3>

                <p className="text-sm text-gray-400 leading-6 mb-5">
                  {activeItem?.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeItem?.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] border border-white/10 bg-white/5 px-2 py-1 rounded-md text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {isLive ? (
                  <a
                    href={activeItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-medium px-4 py-2.5 rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-all hover:gap-3"
                  >
                    $ open --demo →
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-mono text-xs border border-white/10 px-4 py-2.5 rounded-lg text-gray-500">
                    $ demo --unavailable
                  </span>
                )}
              </div>

              {/* thumbnail strip navigation */}
              <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-1">
                {menuItems.map((item, idx) => (
                  <button
                    key={item.slug}
                    onClick={() => goTo(idx)}
                    aria-label={`Go to ${item.title}`}
                    className="relative shrink-0 rounded-lg overflow-hidden transition-all"
                    style={{
                      width: idx === activeIndex ? "64px" : "48px",
                      height: idx === activeIndex ? "44px" : "32px",
                      border:
                        idx === activeIndex
                          ? "2px solid #fbbf24"
                          : "1px solid rgba(255,255,255,0.12)",
                      opacity: idx === activeIndex ? 1 : 0.5,
                      alignSelf: "flex-end",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;