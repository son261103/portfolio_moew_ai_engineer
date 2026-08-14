export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-Time" | "Contract" | "Open Source";
  summary: string;
  achievements: string[];
  technologies: string[];
  impactMetric: {
    label: string;
    value: string;
  };
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "lead-ai-engineer",
    role: "Lead AI Engineer",
    company: "Synthetix Labs",
    location: "San Francisco, CA (Remote)",
    period: "2024 — Present",
    type: "Full-Time",
    summary:
      "Leading architecture and production deployment of hybrid RAG engines, autonomous multi-agent tool executors, and enterprise LLM inference pipelines.",
    achievements: [
      "Architected hybrid vector + knowledge graph search serving 2.5M queries/month with 94.8% retrieval accuracy and 185ms p95 latency.",
      "Engineered continuous batching and INT8 model quantization on vLLM clusters, slashing cloud GPU infrastructure costs by 54% ($140K/yr).",
      "Designed deterministic agentic execution runtime with AST parsing tools and automated lint verification loops.",
      "Mentored a team of 6 engineers on MLOps best practices, LLM evaluation harnesses, and strict schema-constrained decoding.",
    ],
    technologies: ["Python", "PyTorch", "vLLM", "Qdrant", "Neo4j", "FastAPI", "Docker", "LangGraph"],
    impactMetric: {
      label: "Retrieval Accuracy Lift",
      value: "+42%",
    },
  },
  {
    id: "senior-ml-engineer",
    role: "Senior Machine Learning Engineer",
    company: "Cognitive Scale AI",
    location: "Singapore / Remote",
    period: "2022 — 2024",
    type: "Full-Time",
    summary:
      "Built low-latency computer vision edge inference engines and unstructured document intelligence pipelines for fintech clients.",
    achievements: [
      "Optimized YOLOv10 and multimodal Vision Transformers with TensorRT C++ pipelines, achieving 11.4ms frame latency at 4K resolution.",
      "Developed schema-constrained document extraction platform with zero syntax errors across 500k+ complex financial statements.",
      "Implemented automated CI/CD model regression testing with GitHub Actions and Weights & Biases telemetry.",
      "Pioneered distributed synthetic dataset generation pipelines with Ray, producing 300k+ high-diversity instruction pairs.",
    ],
    technologies: ["C++", "CUDA", "TensorRT", "FastAPI", "PostgreSQL", "Docker", "Mistral", "Ray"],
    impactMetric: {
      label: "Inference Latency Reduction",
      value: "-65%",
    },
  },
  {
    id: "software-engineer",
    role: "Backend & Systems Engineer",
    company: "Nexus Cloud Systems",
    location: "Hanoi, Vietnam",
    period: "2021 — 2022",
    type: "Full-Time",
    summary:
      "Designed and scaled distributed microservices, event-driven streaming architectures, and real-time analytical databases.",
    achievements: [
      "Built resilient gRPC microservices in Node.js and Go handling 12,000 req/sec at peak load with 99.99% uptime.",
      "Engineered high-speed Redis semantic cache layers reducing primary PostgreSQL query loads by 78%.",
      "Architected real-time WebSocket communication infrastructure for multi-tenant collaborative dashboards.",
    ],
    technologies: ["TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "gRPC", "Docker", "AWS"],
    impactMetric: {
      label: "Peak Throughput Handled",
      value: "12k rps",
    },
  },
];
