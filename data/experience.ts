export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  impactMetric: {
    label: string;
    value: string;
  };
}

export const EXPERIENCES: Experience[] = [
  {
    id: "redai",
    role: "Junior Backend Developer (AI & Backend Services)",
    company: "RedAI",
    period: "04/2025 – 07/2026",
    location: "Ha Noi, Vietnam",
    summary:
      "Architected FastAPI backend services for full-featured AI media generation and engineered custom GraphRAG, multi-agent orchestration harnesses, and document processing pipelines.",
    achievements: [
      "Architected and built a FastAPI backend for an AI media generation platform covering text-to-image, image-to-video, motion/dance transfer, voice cloning, face swap, lip sync, upscale, and music generation.",
      "Designed and built a custom GraphRAG pipeline combining Docling document parsing, semantic chunking, LLM-based node/edge extraction, and a graph-merge layer for high-precision multi-hop reasoning.",
      "Engineered agent-orchestration harness patterns (circuit-breaker/retry logic, structured JSON tool interfaces, context compression) to coordinate multiple coding-CLI subagents (Claude Code, Codex CLI, Gemini CLI).",
      "Built modular document processing pipelines supporting PDF, DOCX, Markdown, HTML, OCR, and structured data extraction for enterprise knowledge bases.",
      "Designed a multi-provider abstraction layer with a centralized model registry orchestrating WaveSpeed, fal.ai, SiliconFlow, Fish Audio, piapi.ai, and OpenRouter with fallback chains and async rate-limit handling.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "RAG & GraphRAG",
      "Docling",
      "LangChain",
      "Vector Search",
      "PostgreSQL",
      "Multi-Agent (Hermes)",
      "MCP Protocol",
    ],
    impactMetric: {
      label: "AI Pipeline Ecosystem",
      value: "Multi-Provider RAG",
    },
  },
  {
    id: "dtn-ecommerce",
    role: "Intern Java Developer",
    company: "DTN E-Commerce Solutions",
    period: "12/2024 – 03/2025",
    location: "Ha Noi, Vietnam",
    summary:
      "Developed and optimized RESTful APIs for a high-traffic e-commerce platform using Spring Boot 3, Spring Security 6, MySQL, and React.js.",
    achievements: [
      "Developed and optimized RESTful APIs using Spring Boot 3 and MySQL, handling product catalog, order management, inventory, and user authentication.",
      "Implemented role-based access control with Spring Security 6 and JWT authentication to secure sensitive API endpoints.",
      "Wrote and optimized complex MySQL queries with indexing strategies, substantially improving average response time on product listing endpoints.",
      "Integrated React.js frontend components with backend services via REST APIs, collaborating with frontend teams on strict data contracts.",
    ],
    technologies: [
      "Java",
      "Spring Boot 3",
      "Spring Security 6",
      "JWT",
      "MySQL",
      "React.js",
      "Flyway",
      "RESTful API",
    ],
    impactMetric: {
      label: "API & DB Optimization",
      value: "Spring Boot 3 + JWT",
    },
  },
  {
    id: "vptech",
    role: "Technical Staff",
    company: "VPTECH VN",
    period: "11/2022 – 07/2024",
    location: "Ha Noi, Vietnam",
    summary:
      "Provided enterprise technical support, system troubleshooting, and independently mastered Python programming and backend development foundations.",
    achievements: [
      "Provided technical support and resolved hardware/software issues for internal teams, developing a structured analytical approach to troubleshooting complex technical problems.",
      "Self-studied Python programming, data structures, algorithms, and backend architecture concepts, establishing the technical foundation for subsequent AI engineering roles.",
    ],
    technologies: [
      "Python",
      "System Troubleshooting",
      "Hardware / Software",
      "Network Basics",
      "Linux CLI",
    ],
    impactMetric: {
      label: "Foundation Track",
      value: "Tech Staff → AI Dev",
    },
  },
];
