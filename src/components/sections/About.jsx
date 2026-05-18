import { skills } from "../../data/skills";
import SectionWrapper from "../layout/SectionWrapper";
import SkillBadge from "../ui/SkillBadge";

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-zinc-900 dark:text-white">
        AI infrastructure and accelerated computing architect designing
        GPU-centric systems for AI, HPC, and distributed workloads.
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg mt-6 leading-relaxed max-w-3xl">
        With a Ph.D. in Computing and Information Sciences and 10+ years of
        experience, I specialize in distributed AI training, LLM inference
        optimization, GPU memory hierarchies, and heterogeneous datacenter
        infrastructure across GPU platforms. My work spans workload
        characterization, performance optimization, AI infrastructure observability, distributed systems,
        and cloud-native architectures using Kubernetes, OpenStack, and
        hyperscale infrastructure technologies. Published researcher in GPU
        acceleration, distributed AI systems, CXL memory architectures, and
        heterogeneous computing with publications in SC, IPDPS, ICPP, and ISCA.
      </p>

      <div className="mt-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="text-zinc-500 text-sm font-medium mb-3 mt-6">
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
