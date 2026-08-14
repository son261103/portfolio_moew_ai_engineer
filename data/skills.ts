export interface Skill {
  name: string;
  category: "AI / ML" | "Backend" | "Frontend" | "Database" | "DevOps" | "Tools";
  level: "Expert" | "Advanced" | "Proficient";
  experienceYears: string;
  description: string;
  keyLibraries: string[];
  iconName: string;
  featured?: boolean;
}

export const SKILL_CATEGORIES = [
  "All",
  "AI / ML",
  "Backend",
  "Frontend",
  "Database",
  "DevOps",
  "Tools",
] as const;

export const SKILLS: Skill[] = [
  // AI / ML
  {
    name: "Python & PyTorch",
    category: "AI / ML",
    level: "Expert",
    experienceYears: "5+ yrs",
    description:
      "Deep neural network architectures, custom loss functions, training loops, distributed fine-tuning, and model quantization.",
    keyLibraries: ["PyTorch", "TorchVision", "NumPy", "Einops", "FlashAttention"],
    iconName: "BrainCircuit",
    featured: true,
  },
  {
    name: "LLM & RAG Systems",
    category: "AI / ML",
    level: "Expert",
    experienceYears: "3+ yrs",
    description:
      "Production-grade hybrid vector retrieval, contextual reranking, graph RAG, hallucination guards, and token optimizations.",
    keyLibraries: ["LangChain", "LlamaIndex", "vLLM", "Hugging Face", "Ollama"],
    iconName: "Network",
    featured: true,
  },
  {
    name: "Autonomous Agents",
    category: "AI / ML",
    level: "Expert",
    experienceYears: "2+ yrs",
    description:
      "Multi-agent supervisor DAG workflows, deterministic tool invocation, self-reflection loops, and sandbox code execution.",
    keyLibraries: ["LangGraph", "AutoGPT", "CrewAI", "Instructor", "Outlines"],
    iconName: "Bot",
    featured: true,
  },
  {
    name: "Model Inference & Optimization",
    category: "AI / ML",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "INT8/FP16 quantization, TensorRT acceleration, vLLM continuous batching, Triton Inference Server, and ONNX runtime.",
    keyLibraries: ["TensorRT", "vLLM", "ONNX", "Triton", "BitsAndBytes"],
    iconName: "Cpu",
    featured: true,
  },
  {
    name: "Computer Vision & Multimodal",
    category: "AI / ML",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "YOLO object detection, CLIP zero-shot classification, Vision Transformers (ViT), and multimodal document parsing.",
    keyLibraries: ["OpenCV", "YOLOv10", "Transformers", "LayoutLMv3", "Albumentations"],
    iconName: "ScanEye",
  },

  // Backend
  {
    name: "FastAPI & Async Python",
    category: "Backend",
    level: "Expert",
    experienceYears: "4+ yrs",
    description:
      "High-concurrency async microservices, Pydantic v2 validation, WebSocket streaming, and OpenTelemetry instrumentation.",
    keyLibraries: ["FastAPI", "Uvicorn", "AsyncIO", "Pydantic", "Celery"],
    iconName: "Server",
    featured: true,
  },
  {
    name: "Node.js & TypeScript Backend",
    category: "Backend",
    level: "Expert",
    experienceYears: "4+ yrs",
    description:
      "Scalable REST and GraphQL APIs, event-driven architectures, WebSocket streaming, and distributed job queues.",
    keyLibraries: ["NestJS", "Express", "BullMQ", "Zod", "Prisma"],
    iconName: "Layers",
  },
  {
    name: "Java & Spring Boot",
    category: "Backend",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "Enterprise microservices, Spring Security, JPA/Hibernate, Spring Cloud, and resilient messaging architectures.",
    keyLibraries: ["Spring Boot 3", "Spring Cloud", "Hibernate", "JUnit5", "Maven"],
    iconName: "Code2",
  },
  {
    name: "gRPC & High-Throughput APIs",
    category: "Backend",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "Protocol Buffers, bidirectional streaming RPCs, sub-millisecond serialization, and internal service mesh protocols.",
    keyLibraries: ["Protobuf", "gRPC-Node", "grpcio", "Envoy"],
    iconName: "Zap",
  },

  // Frontend
  {
    name: "Next.js & React 19",
    category: "Frontend",
    level: "Expert",
    experienceYears: "4+ yrs",
    description:
      "App Router, Server Components, Streaming SSR, optimistic UI state, and production performance optimization.",
    keyLibraries: ["Next.js 15+", "React 19", "Framer Motion", "TanStack Query", "Zustand"],
    iconName: "Globe",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Expert",
    experienceYears: "5+ yrs",
    description:
      "Strict type systems, generic inference, template literal types, AST manipulation, and full-stack type sharing.",
    keyLibraries: ["TypeScript 5", "ts-node", "Zod", "Type-Fest"],
    iconName: "FileCode",
  },
  {
    name: "Tailwind CSS & Design Systems",
    category: "Frontend",
    level: "Expert",
    experienceYears: "4+ yrs",
    description:
      "Custom design token systems, responsive layouts, micro-animations, glassmorphism, and accessible UI components.",
    keyLibraries: ["Tailwind CSS v4", "Radix UI", "Lucide Icons", "CSS Modules"],
    iconName: "Palette",
  },

  // Database
  {
    name: "Vector Databases",
    category: "Database",
    level: "Expert",
    experienceYears: "3+ yrs",
    description:
      "HNSW indexing, sparse-dense hybrid search, scalar filtering, distributed clustering, and latency optimization.",
    keyLibraries: ["Qdrant", "Milvus", "pgvector", "Pinecone", "ChromaDB"],
    iconName: "DatabaseZap",
    featured: true,
  },
  {
    name: "PostgreSQL & pgvector",
    category: "Database",
    level: "Expert",
    experienceYears: "5+ yrs",
    description:
      "Complex SQL querying, partition tables, indexing strategies (B-Tree, GIN, HNSW), CTEs, and connection pooling.",
    keyLibraries: ["PostgreSQL 16", "pgvector", "Drizzle ORM", "Prisma", "Supabase"],
    iconName: "Database",
  },
  {
    name: "Redis & In-Memory Caching",
    category: "Database",
    level: "Expert",
    experienceYears: "4+ yrs",
    description:
      "Semantic cache layers, distributed locks (Redlock), rate limiting token buckets, and Pub/Sub event broadcasting.",
    keyLibraries: ["Redis 7", "ioredis", "redis-py", "Upstash"],
    iconName: "HardDrive",
  },
  {
    name: "Neo4j & Graph Databases",
    category: "Database",
    level: "Advanced",
    experienceYears: "2+ yrs",
    description:
      "Knowledge graph schemas, Cypher querying, entity relationship extraction, and multi-hop graph traversals for RAG.",
    keyLibraries: ["Neo4j", "Cypher", "py2neo", "GraphRAG"],
    iconName: "Share2",
  },

  // DevOps
  {
    name: "Docker & Containerization",
    category: "DevOps",
    level: "Expert",
    experienceYears: "5+ yrs",
    description:
      "Multi-stage build optimization, CUDA GPU containerization, secure sandboxing (gVisor), and lightweight images.",
    keyLibraries: ["Docker", "Docker Compose", "NVIDIA Container Toolkit", "gVisor"],
    iconName: "Box",
    featured: true,
  },
  {
    name: "Kubernetes & Orchestration",
    category: "DevOps",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "Deploying GPU-accelerated model inference workloads, KEDA autoscaling, Helm charts, and Ingress routing.",
    keyLibraries: ["Kubernetes", "Helm", "KEDA", "KubeFlow"],
    iconName: "Cloud",
  },
  {
    name: "CI/CD & Cloud Infrastructure",
    category: "DevOps",
    level: "Advanced",
    experienceYears: "4+ yrs",
    description:
      "Automated testing pipelines, model evaluation gates, AWS (EC2, S3, ECS), Cloudflare Workers, and Vercel edge.",
    keyLibraries: ["GitHub Actions", "AWS", "Terraform", "Cloudflare", "Vercel"],
    iconName: "GitBranch",
  },

  // Tools
  {
    name: "MLOps & Observability",
    category: "Tools",
    level: "Advanced",
    experienceYears: "3+ yrs",
    description:
      "LLM tracing, token latency metrics, prompt versioning, dataset lineage, and automated model regression alerts.",
    keyLibraries: ["LangSmith", "Weights & Biases", "OpenTelemetry", "Prometheus", "Grafana"],
    iconName: "Activity",
  },
  {
    name: "Git & Linux Systems",
    category: "Tools",
    level: "Expert",
    experienceYears: "6+ yrs",
    description:
      "Advanced Git workflows, Linux kernel internals, system performance profiling (perf, htop, nvtop), and bash scripting.",
    keyLibraries: ["Git", "Ubuntu / Debian", "Bash / Zsh", "Systemd", "tmux"],
    iconName: "Terminal",
  },
];
