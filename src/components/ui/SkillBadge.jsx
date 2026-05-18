export default function SkillBadge({ name }) {
  return (
    <span className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 text-sm">
      {name}
    </span>
  );
}
