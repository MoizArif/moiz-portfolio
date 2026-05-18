import { experience } from "../../data/experience";
import SectionWrapper from "../layout/SectionWrapper";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="space-y-6">
        {experience.map((entry, i) => (
          <ExperienceCard
            key={i}
            role={entry.role}
            company={entry.company}
            location={entry.location}
            period={entry.period}
            points={entry.points}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
