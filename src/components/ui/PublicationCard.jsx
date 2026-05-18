const venueColors = {
  ISCA: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30",
  SC: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30",
  IPDPS: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
  ICPP: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
};

const defaultVenueColor = "bg-zinc-500/10 text-zinc-600 dark:text-zinc-300 border-zinc-500/30";

export default function PublicationCard({ title, venue, year, link }) {
  const venueClass = venueColors[venue] || defaultVenueColor;

  const content = (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 px-6 py-5 hover:border-zinc-400 dark:hover:border-zinc-600 transition">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{title}</p>
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`text-xs px-3 py-1 rounded-full border ${venueClass}`}
          >
            {venue}
          </span>
          <span className="text-zinc-500 text-sm">{year}</span>
        </div>
      </div>
    </div>
  );

  if (link && link !== "#") {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
