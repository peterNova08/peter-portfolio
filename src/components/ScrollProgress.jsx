import { useTheme } from "../context/ThemeContext";
import { useScrollProgress } from "../hooks/useScrollProgress";

function ScrollProgress() {
  const { t } = useTheme();
  const progress = useScrollProgress();

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left transition-opacity duration-300 ${t.progressBar}`}
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
