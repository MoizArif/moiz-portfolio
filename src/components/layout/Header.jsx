import { useState, useEffect, useMemo } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Research", href: "#research", id: "research" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const activeSection = useActiveSection(sectionIds);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur bg-white/80 dark:bg-black/80 z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side */}
        <div>
          <a href="#" className="text-2xl font-bold text-zinc-900 dark:text-white">
            Moiz Arif
          </a>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Accelerated Computing Architect · AI Infrastructure · GPU Systems
          </p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition relative pb-1 ${
                activeSection === link.id
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="relative w-6 h-6 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-6">
            <button
              className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg py-3 px-4 rounded-xl transition ${
                  activeSection === link.id
                    ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
