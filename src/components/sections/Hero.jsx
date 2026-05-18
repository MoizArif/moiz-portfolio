import { socialLinks } from "../../data/socialLinks";
import profilePlaceholder from "../../assets/profile-placeholder.svg";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300 mb-6">
            AI Infrastructure · Accelerated Computing · GPU Systems
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
            Building the next generation of accelerated AI infrastructure.
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-6 leading-relaxed">
            AI infrastructure and accelerated computing architect with expertise
            in distributed AI training, LLM inference optimization, GPU memory
            hierarchies, and heterogeneous datacenter infrastructure across
            NVIDIA GPU platforms.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium rounded-2xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
            >
              Contact
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-2xl hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-2xl hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="inline-flex items-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 rounded-2xl hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-center gap-8">
          <img
            src={profilePlaceholder}
            alt="Moiz Arif"
            className="rounded-full w-48 h-48 mx-auto border-4 border-zinc-300 dark:border-zinc-700"
          />

          {/* Current Focus card */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-8 w-full">
            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
              Current Focus
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              GPU-centric AI infrastructure, LLM inference optimization,
              workload characterization, and memory hierarchy research for
              accelerated computing systems across NVIDIA GPU platforms.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">10+</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Years Experience</div>
            </div>
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 p-6 text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white">7+</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                Research Publications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
