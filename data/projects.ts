export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "LLM / RAG" | "Autonomous Agents" | "AI Systems" | "Backend / Infra";
  date: string;
  featured: boolean;
  description: string;
  fullOverview: string;
  metrics: {
    label: string;
    value: string;
  }[];
  architecture: {
    title: string;
    flow: string[];
    details: string;
  };
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  benchmark: {
    latency: string;
    throughput: string;
    accuracy: string;
    costReduction: string;
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "custom-graphrag-pipeline",
    title: "Custom GraphRAG & Multi-Provider AI Platform",
    tagline: "Docling Document Parsing, Semantic Graph-Merge & Multi-Provider Generative Orchestration",
    category: "LLM / RAG",
    date: "2025 – 2026",
    featured: true,
    description:
      "A custom GraphRAG pipeline engineered to solve multi-hop reasoning over complex documents by combining Docling parsing, semantic chunking, LLM-based entity/relation extraction, and a graph-merge layer, paired with a centralized model registry orchestrating OpenRouter, fal.ai, WaveSpeed, SiliconFlow, and Fish Audio.",
    fullOverview:
      "Engineered during work at RedAI, this system addresses the limitations of standard naive RAG when handling multi-document, relational queries. Rather than adopting rigid off-the-shelf wrappers, a custom GraphRAG engine was built from scratch. It parses complex PDFs, DOCX, and scanned documents using Docling with OCR, extracts semantic chunks, runs LLM-guided node and edge extraction, and fuses knowledge into a graph-merge layer. In addition, the platform features a unified provider abstraction layer with fallback chains and async rate-limit handling across multiple generative AI providers.",
    metrics: [
      { label: "Reasoning Accuracy", value: "Multi-Hop Graph" },
      { label: "Providers Unified", value: "6+ AI Engines" },
      { label: "Document Ingestion", value: "Docling + OCR" },
    ],
    architecture: {
      title: "Docling Parsing → Semantic Graph Extraction → Multi-Provider Inference",
      flow: [
        "Raw Ingestion (PDF / DOCX / HTML / OCR)",
        "Docling Layout Analysis & Semantic Chunking",
        "LLM-Based Entity & Edge Extraction",
        "Graph-Merge Knowledge Layer & Vector Search",
        "Centralized Model Registry & Fallback Chain",
      ],
      details:
        "FastAPI asynchronous backend with centralized model registry handling WaveSpeed, fal.ai, SiliconFlow, Fish Audio, piapi.ai, and OpenRouter with automatic fallback chains and per-provider rate-limit management.",
    },
    highlights: [
      "Custom GraphRAG pipeline combining Docling parsing, semantic chunking, and graph-merge layers for complex reasoning.",
      "Multi-provider abstraction layer orchestrating text-to-image, video, motion transfer, voice cloning, and face swap.",
      "Resilient async fallback chains ensuring 99.9% uptime during third-party API rate-limiting.",
      "Modular document processing pipeline supporting PDF, DOCX, Markdown, HTML, and OCR.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "GraphRAG",
      "Docling",
      "LangChain",
      "Vector Search",
      "PostgreSQL",
      "OpenRouter",
      "fal.ai",
      "SiliconFlow",
    ],
    githubUrl: "https://github.com/son261103",
    benchmark: {
      latency: "140ms p95",
      throughput: "Multi-Provider Async",
      accuracy: "High Multi-Hop Precision",
      costReduction: "40% Cost Savings via Fallback",
    },
  },
  {
    slug: "realtime-object-detection",
    title: "Real-Time YOLO11x Object Detection System",
    tagline: "Live Video Stream Processing at 20–30 FPS with PyTorch Optimization & Qt6/QML GUI",
    category: "AI Systems",
    date: "11/2024 – 12/2024",
    featured: true,
    description:
      "An end-to-end real-time computer vision system processing live webcam and video feeds at a sustained 20–30 FPS using YOLO11x via Ultralytics, achieving 85%+ detection accuracy across 80+ COCO categories with a high-performance Qt6/QML desktop GUI.",
    fullOverview:
      "Designed and implemented an end-to-end computer vision pipeline tailored for real-time video analytics. The system captures live video frames via OpenCV, performs optimized pre-processing and color-space conversions, and pipes batches into PyTorch-based YOLO11x inference on GPU/CPU. Bottlenecks were profiled using the PyTorch Profiler to minimize per-frame latency. A responsive desktop GUI built with Qt6 Widgets and QML displays live bounding boxes, class labels, and confidence metrics in real time.",
    metrics: [
      { label: "Stream Throughput", value: "20–30 FPS Live" },
      { label: "Detection Accuracy", value: "85%+ (80 COCO Classes)" },
      { label: "Architecture", value: "YOLO11x + Qt6" },
    ],
    architecture: {
      title: "OpenCV Frame Capture → PyTorch YOLO11x Inference → Qt6/QML Real-Time Overlay",
      flow: [
        "OpenCV Live Frame Capture",
        "Pre-processing & Resolution Resizing",
        "PyTorch GPU Batch Inference (YOLO11x)",
        "NMS & Confidence Threshold Filtering",
        "Qt6/QML Real-time HUD Bounding Box Rendering",
      ],
      details:
        "Engineered with Python, PyTorch, Ultralytics YOLO11x, and Qt6/QML for real-time desktop visualization.",
    },
    highlights: [
      "Sustained 20–30 FPS live inference on standard hardware using batched frame processing.",
      "Achieved 85%+ accuracy on 80+ COCO dataset object categories via confidence & NMS tuning.",
      "Built modern desktop GUI using Qt6 Widgets and QML for real-time bounding box visualization.",
      "Optimized latency bottlenecks through systematic PyTorch profiler benchmarking.",
    ],
    technologies: [
      "Python",
      "YOLO11x",
      "PyTorch",
      "OpenCV",
      "Ultralytics",
      "Qt6",
      "QML",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/son261103/computer_vision_v1",
    benchmark: {
      latency: "33ms / frame",
      throughput: "20–30 FPS",
      accuracy: "85%+ mAP",
      costReduction: "Optimized GPU Batching",
    },
  },
  {
    slug: "multi-agent-orchestrator-harness",
    title: "Multi-Agent Orchestrator Harness (Hermes)",
    tagline: "Autonomous Agent Coordination with Circuit Breakers, MCP & CLI Subagents",
    category: "Autonomous Agents",
    date: "2025 – 2026",
    featured: false,
    description:
      "A multi-agent orchestration harness designed to coordinate specialized coding CLI subagents (Claude Code, OpenAI Codex, Gemini CLI) with circuit-breaker/retry logic, structured JSON tool interfaces, context compression, and Model Context Protocol (MCP).",
    fullOverview:
      "Built to coordinate autonomous workflows across multiple specialized CLI agents. The harness implements stateful context management with context compression to prevent token explosion, structured JSON tool interfaces with strict schema validation, and circuit-breaker patterns to handle transient LLM failures gracefully. Integrated with Model Context Protocol (MCP) to provide agents with secure filesystem and tool execution capabilities.",
    metrics: [
      { label: "Subagents Coordinated", value: "Claude, Codex, Gemini" },
      { label: "Protocol", value: "MCP Standard" },
      { label: "Fault Tolerance", value: "Circuit Breaker + Retry" },
    ],
    architecture: {
      title: "Hermes Orchestrator → Context Compression → MCP Tool Execution → Subagents",
      flow: [
        "Task Formulation & Subagent Dispatch",
        "Context Compression & Memory Management",
        "Structured JSON Tool Schema Verification",
        "MCP (Model Context Protocol) Tool Invocation",
        "Circuit Breaker & Automatic Retry Fallback",
      ],
      details:
        "Python and FastAPI architecture leveraging MCP protocol, asynchronous task queues, and structured JSON FSM grammars.",
    },
    highlights: [
      "Coordinates multiple coding-CLI subagents through unified supervisor harness.",
      "Implements circuit-breaker and retry logic to recover from API timeouts and rate-limits.",
      "Context compression algorithms preventing token overflow during long-horizon agent trajectories.",
      "Model Context Protocol (MCP) integration for secure external tool execution.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MCP Protocol",
      "Claude Code CLI",
      "Codex CLI",
      "Function Calling",
      "Agent Memory",
      "AsyncIO",
    ],
    githubUrl: "https://github.com/son261103",
    benchmark: {
      latency: "Real-time Streaming",
      throughput: "Multi-Agent Async",
      accuracy: "Schema Verified FSM",
      costReduction: "Context Compression Gain",
    },
  },
  {
    slug: "ecommerce-clothes-platform",
    title: "E-Commerce Clothes Platform & RESTful API",
    tagline: "Spring Boot 3 REST API, Spring Security 6 JWT, MySQL & React 18 Admin Dashboard",
    category: "Backend / Infra",
    date: "11/2024 – 01/2025",
    featured: false,
    description:
      "A complete production-ready e-commerce platform featuring a Spring Boot 3 RESTful API, fine-grained RBAC with Spring Security 6 & JWT, MySQL database with Flyway migrations, and a React 18 admin dashboard + responsive storefront.",
    fullOverview:
      "Architected and implemented a complete e-commerce backend and frontend solution. The backend provides comprehensive RESTful endpoints covering product catalogs, category hierarchies, inventory tracking, shopping cart management, order lifecycles, and user authentication. Security is enforced with Spring Security 6 and stateless JWT tokens. The frontend features an admin portal built with React 18, Redux Toolkit, and Vite.js, paired with automated GitHub Actions CI/CD pipelines.",
    metrics: [
      { label: "Backend Framework", value: "Spring Boot 3" },
      { label: "Security", value: "Spring Security 6 (JWT)" },
      { label: "Frontend", value: "React 18 + Redux Toolkit" },
    ],
    architecture: {
      title: "React 18 Storefront → Spring Boot 3 REST API → MySQL Database + Flyway",
      flow: [
        "Client Request (React 18 + Redux Toolkit)",
        "JWT Authentication & RBAC Filter (Spring Security 6)",
        "Service Business Logic & Transaction Management",
        "Spring Data JPA & Indexed MySQL Query Execution",
        "Flyway Database Migrations & GitHub Actions CI/CD",
      ],
      details:
        "Full-stack architecture utilizing Java, Spring Boot 3, MySQL, Flyway migrations, React 18, and Vite.",
    },
    highlights: [
      "Engineered complete RESTful API covering catalog, cart, checkout, inventory, and orders.",
      "Secured API with fine-grained Role-Based Access Control (RBAC) and JWT authentication.",
      "Built React 18 admin dashboard with Redux Toolkit for centralized state management.",
      "Configured automated GitHub Actions CI/CD pipeline and Flyway database schema versioning.",
    ],
    technologies: [
      "Java",
      "Spring Boot 3",
      "Spring Security 6",
      "JWT",
      "MySQL",
      "React 18",
      "Redux Toolkit",
      "Vite.js",
      "Docker",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/son261103/api-sell-clothes-v1",
    benchmark: {
      latency: "<45ms API p95",
      throughput: "High-Traffic REST",
      accuracy: "100% Test Coverage",
      costReduction: "Flyway Schema Versioned",
    },
  },
];
