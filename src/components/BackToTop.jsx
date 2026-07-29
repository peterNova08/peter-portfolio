import { ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useScrolledPast } from "../hooks/useScrollProgress";

function BackToTop() {
  const { t } = useTheme();
  const visible = useScrolledPast(500);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 ${t.backToTop} ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default BackToTop;
