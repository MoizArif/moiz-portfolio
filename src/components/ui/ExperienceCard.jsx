export default function ExperienceCard({ role, company, location, period, points }) {
  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{role}</h3>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">
            {company}
            {location && <span className="text-zinc-400 dark:text-zinc-500"> · {location}</span>}
          </p>
        </div>
        <span className="text-zinc-500 text-sm shrink-0">{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
