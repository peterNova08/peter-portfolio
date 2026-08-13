import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

// Below-the-fold sections are code-split into their own chunks so the hero
// can paint immediately without waiting on their JS (Projects in particular
// pulls in gl-matrix + the WebGL sphere renderer, which is the heaviest
// chunk on the page).
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Plain skeleton block — reserves space so the page doesn't jump once the
// real section mounts, and reads better than a hard blank gap while
// scrolling down before the chunk arrives.
function SectionFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
        width: "100%",
      }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;