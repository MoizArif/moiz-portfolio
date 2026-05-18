import { education } from "../../data/education";
import SectionWrapper from "../layout/SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      className="border-t border-zinc-200 dark:border-zinc-900"
    >
      <div className="space-y-6">
        {education.map((entry, i) => (
          <div
            key={i}
            className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  {entry.degree}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">{entry.university}</p>
              </div>
              <span className="text-zinc-500 text-sm shrink-0">
                {entry.period}
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 mt-4 leading-relaxed">
              {entry.details}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
