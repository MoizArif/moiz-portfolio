import { professionalService } from "../../data/professionalService";
import SectionWrapper from "../layout/SectionWrapper";

export default function ProfessionalService() {
  return (
    <SectionWrapper
      id="service"
      title="Professional Service"
      className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Committee Memberships */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 p-8">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
            Committee Member
          </h3>
          <ul className="space-y-3">
            {professionalService.committees.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  {item.name}{" "}
                  <span className="text-zinc-400 dark:text-zinc-500">
                    {item.years}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Journal Reviewer */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 p-8">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
            Journal Reviewer
          </h3>
          <ul className="space-y-3">
            {professionalService.journals.map((journal, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                {journal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
