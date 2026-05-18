import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Moiz Arif</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
              Accelerated Computing Architect &amp; AI Systems Researcher
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition"
            >
              {socialLinks.email}
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Moiz Arif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
