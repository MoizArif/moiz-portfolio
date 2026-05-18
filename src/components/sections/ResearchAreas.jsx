export default function ResearchAreas() {
  return (
    <section className="border-t border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-white dark:from-black to-zinc-100 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 p-10 md:p-16 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Research Areas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-zinc-900 dark:text-white">
            Distributed AI Systems · Heterogeneous Computing · AI Infrastructure
            · HPC · Memory Tiering
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            My research explores the intersection of hardware architecture and
            AI systems — from optimizing GPU memory hierarchies and CXL-based
            memory expansion to building scalable infrastructure for distributed
            AI training and inference at scale. Published in SC, IPDPS, ICPP,
            ISCA, and MASCOTS.
          </p>
        </div>
      </div>
    </section>
  );
}
