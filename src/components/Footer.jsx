import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { t } = useTheme();

  return (
    <footer className={`py-8 text-center border-t transition-colors duration-500 ${t.footer}`}>
      <p className="font-mono text-sm tracking-wide">
        © 2026 Peter Nova. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
