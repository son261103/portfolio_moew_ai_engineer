export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "AI Systems" | "LLM / RAG" | "Autonomous Agents" | "Backend / Infra";
  description: string;
  fullOverview: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  technologies: string[];
  architecture: {
    title: string;
    flow: string[];
    details: string;
  };
  highlights: string[];
  benchmark: {
    latency: string;
    throughput: string;
    accuracy: string;
    costReduction: string;
  };
  githubUrl: string;
  liveUrl?: string;
  paperUrl?: string;
  date: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "omnirag-engine",
    title: "OmniRAG Engine",
    tagline: "Enterprise Hybrid Vector & Knowledge Graph RAG with Self-Correction",
    category: "LLM / RAG",
    featured: true,
    description:
      "A production-grade Retrieval-Augmented Generation pipeline uniting dense vector search (Qdrant), sparse BM25, and Neo4j knowledge graphs with reciprocal rank fusion and hallucination verification.",
    fullOverview:
      "OmniRAG solves the fundamental context degradation problem in multi-hop question answering across enterprise corpora. By integrating contextual chunking, dense embeddings (text-embedding-3-large), and structural knowledge graphs, the system performs dynamic query decomposition and reranking via Cohere Rerank v3. Built-in guardrails detect semantic hallucinations using automated NLI verification before responding.",
    metrics: [
      { label: "Retrieval Accuracy", value: "94.8% (+38%)" },
      { label: "p95 Query Latency", value: "185ms" },
      { label: "Token Cost Reduction", value: "54%" },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Qdrant",
      "Neo4j",
      "LangChain",
      "vLLM",
      "PyTorch",
      "Docker",
    ],
    architecture: {
      title: "Hybrid Multi-Stage Retrieval & Verification Pipeline",
      flow: [
        "User Query Analyzer & Intent Classifier",
        "Parallel Dense Embedding + Sparse BM25 + KG Subgraph Extraction",
        "Reciprocal Rank Fusion (RRF) & Cross-Encoder Reranking",
        "Context Window Compression & Dynamic Sliding Window",
        "LLM Generation with Grounding Citations",
        "Hallucination Guard & NLI Factual Consistency Check",
      ],
      details:
        "Processes >10M document tokens daily with sub-200ms latency. Implements adaptive caching and semantic deduplication in Redis to minimize repetitive LLM API invocations.",
    },
    highlights: [
      "Dynamic contextual chunking preserving semantic coherence across markdown, PDF, and code files",
      "Self-reflective query rewrite loop triggered when top-k cosine similarity drops below 0.72",
      "Strict JSON output validation using Pydantic and instructor for guaranteed downstream automation compatibility",
      "Custom Prometheus metrics export for token-per-second, TTFT, and retrieval relevance monitoring",
    ],
    benchmark: {
      latency: "185ms p95",
      throughput: "450 req/sec",
      accuracy: "94.8% HotpotQA",
      costReduction: "-54% tokens",
    },
    githubUrl: "https://github.com/roser-ai/omnirag-engine",
    liveUrl: "https://omnirag.demo.son.dev",
    date: "2025 - Present",
  },
  {
    slug: "neuralflow-agent",
    title: "NeuralFlow Orchestrator",
    tagline: "Deterministic Multi-Agent Framework with Reasoning Checkpoints",
    category: "Autonomous Agents",
    featured: true,
    description:
      "An asynchronous multi-agent coordination engine built for multi-step software engineering tasks, featuring DAG-based dependency resolution, sandbox code execution, and reversible state rollbacks.",
    fullOverview:
      "Traditional autonomous agents suffer from stochastic derailment on long-horizon tasks. NeuralFlow implements hierarchical state machines where a Planner Agent breaks user requirements into directed acyclic task graphs, while specialized Worker Agents execute tools within isolated gVisor/Docker containers. Each state transition is validated against deterministic unit tests with automatic state snapshot rollbacks.",
    metrics: [
      { label: "Task Success Rate", value: "88.2% SWE-bench lite" },
      { label: "Parallel Tool Execution", value: "8x speedup" },
      { label: "Container Startup", value: "<120ms" },
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Python",
      "Docker",
      "Redis",
      "PostgreSQL",
      "gRPC",
    ],
    architecture: {
      title: "Hierarchical Supervisor-Worker DAG Architecture",
      flow: [
        "Natural Language Goal Ingestion",
        "Supervisor Agent: Topological Plan & Subagent Instantiation",
        "Isolated Sandboxed Execution (CLI, AST, Browser)",
        "Automated Lint & Test Feedback Loop",
        "Checkpoint State Commit / Rollback Mechanism",
      ],
      details:
        "Employs gRPC streaming for real-time telemetry and state replication across clustered execution nodes.",
    },
    highlights: [
      "Custom AST parsing tool to safely modify codebases without destructive whole-file rewrites",
      "Token budget optimizer with sliding semantic memory compression",
      "Fine-grained human-in-the-loop approval gates for destructive shell and database actions",
      "Live execution tree inspector rendered via WebSocket web telemetry",
    ],
    benchmark: {
      latency: "1.2s per step",
      throughput: "35 concurrent DAGs",
      accuracy: "88.2% SWE-bench",
      costReduction: "-40% re-tries",
    },
    githubUrl: "https://github.com/roser-ai/neuralflow-agent",
    liveUrl: "https://neuralflow.demo.son.dev",
    date: "2024 - 2025",
  },
  {
    slug: "visioncore-edge",
    title: "VisionCore Edge",
    tagline: "Sub-15ms Real-Time Multimodal Inference Engine with TensorRT",
    category: "AI Systems",
    featured: true,
    description:
      "Ultra-low latency edge AI vision system combining YOLOv10, CLIP embeddings, and INT8 quantized multimodal models optimized for edge robotics and real-time video stream analytics.",
    fullOverview:
      "VisionCore Edge addresses bandwidth bottlenecks and latency constraints in edge compute clusters. Compiling PyTorch models into TensorRT engines with FP16/INT8 calibration, the engine delivers 60+ FPS multi-camera tracking with zero cloud round-trip latency. Features zero-copy memory transfers via CUDA unified memory and embedded C++ gRPC endpoints.",
    metrics: [
      { label: "End-to-End Latency", value: "11.4ms" },
      { label: "Frame Rate", value: "68 FPS @ 4K" },
      { label: "VRAM Footprint", value: "1.8 GB (-62%)" },
    ],
    technologies: [
      "C++",
      "CUDA",
      "TensorRT",
      "Python",
      "PyTorch",
      "OpenCV",
      "gRPC",
      "ONNX",
    ],
    architecture: {
      title: "Zero-Copy CUDA Edge Inference Pipeline",
      flow: [
        "RTSP Video Stream Decode via NVDEC",
        "Hardware-Accelerated Frame Preprocessing (Letterbox / Normalization)",
        "TensorRT INT8 Engine Execution",
        "Batched NMS & DeepSORT Object Association",
        "Local Vector Indexing & Alert Dispatch",
      ],
      details:
        "Achieves 4.8x acceleration compared to standard TorchScript runtimes on NVIDIA Jetson Orin and RTX 4090 servers.",
    },
    highlights: [
      "INT8 post-training quantization with entropy calibration preserving 99.4% mAP50",
      "Multi-stream hardware decoding supporting up to 16 concurrent 1080p RTSP feeds",
      "Edge-to-Cloud telemetry sync over intermittent network connections with SQLite buffering",
    ],
    benchmark: {
      latency: "11.4ms p99",
      throughput: "68 FPS",
      accuracy: "52.4 mAP",
      costReduction: "-75% server count",
    },
    githubUrl: "https://github.com/roser-ai/visioncore-edge",
    date: "2024",
  },
  {
    slug: "documind-enterprise",
    title: "DocuMind Enterprise",
    tagline: "Zero-Hallucination Document Intelligence with Schema Guarantees",
    category: "LLM / RAG",
    featured: false,
    description:
      "Enterprise unstructured document extraction platform converting complex financial reports, tables, and medical records into strictly typed schema payloads with bounding box visual audits.",
    fullOverview:
      "Designed for regulated industries where 99.9% data reliability is non-negotiable. DocuMind combines OCR layout detection with vision-language models and schema-constrained decoding to extract multi-level tables, nested financial data, and signatures with exact pixel-level grounding.",
    metrics: [
      { label: "Field Extraction Precision", value: "99.2%" },
      { label: "Processing Speed", value: "1.4s / 50-page PDF" },
      { label: "Manual Review Time Saved", value: "85%" },
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Mistral-7B",
      "PyTorch",
      "Tailwind CSS",
      "AWS S3",
    ],
    architecture: {
      title: "Constrained Decoding & Visual Bounding Box Extraction",
      flow: [
        "PDF Rasterization & LayoutLMv3 Visual Tokenization",
        "Table Structure Recognition & Bounding Box Mapping",
        "Grammar-Constrained LLM JSON Decoding (Outlines/Jsonformer)",
        "Confidence Scoring & Exception Routing to Human Review Queue",
      ],
      details:
        "Utilizes finite-state machine (FSM) guided token generation to mathematically eliminate invalid JSON syntax errors.",
    },
    highlights: [
      "Pixel-level hover audit displaying original document region for every extracted field",
      "Support for irregular, merged, and borderless tables with auto-healing geometry",
      "SOC2 compliant end-to-end data encryption with automatic PII redaction",
    ],
    benchmark: {
      latency: "1.4s / doc",
      throughput: "200 docs/min",
      accuracy: "99.2% precision",
      costReduction: "-85% human audit time",
    },
    githubUrl: "https://github.com/roser-ai/documind-enterprise",
    liveUrl: "https://documind.demo.son.dev",
    date: "2024",
  },
  {
    slug: "synthdata-gen",
    title: "SynthData Studio",
    tagline: "High-Fidelity Synthetic Dataset Generator with Quality Filtering",
    category: "AI Systems",
    featured: false,
    description:
      "Automated pipeline for generating diverse, instruction-following datasets using evolutionary prompt mutations, LLM-as-a-Judge filtering, and deduplication through MinHash LSH.",
    fullOverview:
      "Fine-tuning enterprise models requires high-quality domain-specific data without privacy liabilities. SynthData Studio generates millions of synthetic QA pairs and edge-case code samples, validating linguistic diversity with embedding density distributions and semantic cluster balancing.",
    metrics: [
      { label: "Dataset Diversity Score", value: "+47%" },
      { label: "Filtering Throughput", value: "50k rows/min" },
      { label: "Downstream Fine-tune Lift", value: "+14.2% MMLU" },
    ],
    technologies: [
      "Python",
      "Ray",
      "Hugging Face",
      "DuckDB",
      "ClickHouse",
      "FastAPI",
      "Docker",
    ],
    architecture: {
      title: "Evolutionary Synthesis & Quality Verification Loop",
      flow: [
        "Seed Taxonomy & Domain Constraint Definition",
        "Distributed LLM Synthesis with Genetic Prompt Mutation",
        "MinHash LSH Semantic Deduplication",
        "Multi-Agent Judge Evaluation (Factuality, Depth, Safety)",
        "Hugging Face Parquet Export & Split Generation",
      ],
      details:
        "Scales horizontally across Ray compute clusters to produce over 500,000 validated training examples in under 4 hours.",
    },
    highlights: [
      "Embedding-space coverage heatmap ensuring comprehensive domain representation",
      "Adversarial red-teaming filter identifying subtle logic flaws and formatting leaks",
      "Direct integration with Hugging Face Datasets and Weights & Biases telemetry",
    ],
    benchmark: {
      latency: "12ms / sample",
      throughput: "50k samples/min",
      accuracy: "96.5% judge pass",
      costReduction: "-90% annotation cost",
    },
    githubUrl: "https://github.com/roser-ai/synthdata-studio",
    date: "2023 - 2024",
  },
  {
    slug: "evalmatrix-cli",
    title: "EvalMatrix Harness",
    tagline: "High-Throughput LLM & RAG Benchmarking Framework",
    category: "Backend / Infra",
    featured: false,
    description:
      "A developer-first CLI and CI/CD testing suite for regression testing LLM prompts, model switches, embeddings, and context window drift with statistical confidence intervals.",
    fullOverview:
      "Prevent stealth regressions when updating system prompts or fine-tuning models. EvalMatrix runs parallelized regression suites against golden test sets, measuring semantic similarity, exact matches, cost-per-call, and latency distribution with automated GitHub PR comments.",
    metrics: [
      { label: "Concurrent Evaluations", value: "250 parallel workers" },
      { label: "Regression Detection", value: "100% CI gate" },
      { label: "CLI Setup Time", value: "< 2 minutes" },
    ],
    technologies: [
      "Go",
      "Python",
      "SQLite",
      "Docker",
      "GitHub Actions",
      "React",
    ],
    architecture: {
      title: "Parallel Asynchronous Benchmark Worker Pipeline",
      flow: [
        "YAML Test Suite & Golden Dataset Loader",
        "Asynchronous Model Endpoint Worker Pool",
        "Metric Calculators (BLEU, ROUGE, BERTScore, G-Eval)",
        "Statistical Significance & Drift Assessment",
        "Interactive Terminal TUI & Web Report Generator",
      ],
      details:
        "Written in Go for zero-overhead execution and concurrent worker scheduling, handling 1,000+ model calls in seconds.",
    },
    highlights: [
      "Interactive Terminal UI built with Charm Bubbletea for live progress tracking",
      "Automated CI/CD action that fails builds if hallucination rate increases by >1.5%",
      "Exportable HTML/SVG benchmark charts and JSON test summaries",
    ],
    benchmark: {
      latency: "8ms overhead",
      throughput: "1,200 evals/min",
      accuracy: "99.9% deterministic",
      costReduction: "-100% undetected regressions",
    },
    githubUrl: "https://github.com/roser-ai/evalmatrix-cli",
    date: "2023",
  },
];
