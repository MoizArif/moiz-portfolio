export const projects = [
  {
    title: "Rack-Scale Modeling of Agentic AI Pipelines",
    description:
      "Developed a rack-scale agentic AI modeling framework spanning multi-agent workflows, LLMs, tools, RAG pipelines, and memory tiers. Integrated hardware validation with analytical models to characterize GPU, CPU, memory, storage, and interconnect bottlenecks. Enabled projection of next-generation rack-scale architectures to guide co-design of AI features, memory hierarchies, and hardware configurations.",
    image: null,
    tags: ["Agentic AI", "RAG", "GPU Systems", "Memory Hierarchies", "Rack-Scale Modeling"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Agentic AI Pipeline Design and Deployment in Data Centers",
    description:
      "Architected Agentic AI pipelines for data centers, covering agent design, tool integration, coordination, and orchestration. Compared agentic, traditional LLM, and RAG pipelines across efficiency, scalability, complexity, and infrastructure needs. Integrated GPU profiling across H100, H200, and B200 platforms to optimize throughput and system-level performance across diverse AI workloads.",
    image: null,
    tags: ["H100", "H200", "B200", "GPU Profiling", "Multi-Agent Systems"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Reasoning Model Evaluation on NVIDIA DGX/HGX Platforms",
    description:
      "Evaluated reasoning models on NVIDIA platforms by analyzing reasoning token generation, inference behavior, scalability, and performance. Assessed model and KV-cache offloading strategies, comparing total cost of ownership against scale-up and scale-out GPU deployment models. Conducted tensor, pipeline, and data parallelism studies to characterize scaling behavior for both small language models and large language models.",
    image: null,
    tags: ["Reasoning Models", "KV Cache", "Parallelism", "TCO"],
    github: null,
    demo: null,
    featured: true,
  },
  {
    title: "Embedding Model and VectorDB Evaluation for RAG Pipelines",
    description:
      "Evaluation of embedding models and VectorDBs including Milvus, Qdrant for RAG pipelines in data-center environments. Profiled retrieval efficiency under varying GPU, memory capacity, and memory bandwidth configurations. Compared on-disk, memory-mapped, and in-memory indexing to quantify latency, throughput, and scalability trade-offs for similarity search.",
    image: null,
    tags: ["Milvus", "Qdrant", "VectorDB", "RAG", "Similarity Search"],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: "CloudForms Integration with OpenStack, Ansible Tower, and OpenShift",
    description:
      "Designed and implemented a unified cloud management platform using RH CloudForms for private and public clouds through a single interface. Integrated CloudForms with Red Hat OpenStack, Ansible Tower, OpenShift Enterprise, AWS, and Microsoft Azure with one-click application catalog.",
    image: null,
    tags: ["CloudForms", "OpenStack", "Ansible Tower", "OpenShift", "AWS", "Azure"],
    github: null,
    demo: null,
    featured: false,
  },
];
