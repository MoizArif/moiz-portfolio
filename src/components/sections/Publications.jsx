import { publications } from "../../data/publications";
import SectionWrapper from "../layout/SectionWrapper";
import PublicationCard from "../ui/PublicationCard";

export default function Publications() {
  return (
    <SectionWrapper
      id="research"
      title="Research & Publications"
      className="border-t border-zinc-200 dark:border-zinc-900"
    >
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <PublicationCard
            key={i}
            title={pub.title}
            venue={pub.venue}
            year={pub.year}
            link={pub.link}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
