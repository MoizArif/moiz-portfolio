export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  featured,
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition group">
      {featured && (
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
          Featured
        </span>
      )}
      <h3 className={`text-xl font-semibold text-zinc-900 dark:text-white ${featured ? "mt-3" : ""}`}>
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            GitHub →
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}
