export interface Skill {
  name: string;
  category: "LLM & RAG" | "AI Agents" | "Backend" | "Databases" | "Frontend" | "DevOps & Tools";
  level: "Advanced" | "Proficient" | "Working Knowledge";
  description: string;
  keyLibraries: string[];
  iconName: string;
}

export const SKILL_CATEGORIES = [
  "All",
  "LLM & RAG",
  "AI Agents",
  "Backend",
  "Databases",
  "Frontend",
  "DevOps & Tools",
] as const;

export const SKILLS: Skill[] = [
  {
    name: "Custom GraphRAG & RAG Pipelines",
    category: "LLM & RAG",
    level: "Advanced",
    description:
      "Designing custom GraphRAG pipelines combining Docling document parsing, semantic chunking, LLM-based node/edge extraction, and graph-merge layers for multi-hop reasoning over complex document sets.",
    keyLibraries: ["Docling", "LangChain", "Vector Search", "Embedding Models", "Graph Merge"],
    iconName: "BrainCircuit",
  },
  {
    name: "Multi-Agent Orchestration & MCP",
    category: "AI Agents",
    level: "Advanced",
    description:
      "Engineering agent orchestration harnesses (Hermes), circuit breakers, retry logic, structured JSON tool interfaces, context compression, Model Context Protocol (MCP), and function calling.",
    keyLibraries: ["Hermes Orchestrator", "MCP Protocol", "Function Calling", "Agent Memory", "Subagent Harness"],
    iconName: "Bot",
  },
  {
    name: "Multi-Provider Generative AI",
    category: "LLM & RAG",
    level: "Proficient",
    description:
      "Provider abstraction layer with centralized model registry orchestrating OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio, and piapi.ai with async fallback chains and rate-limit handling.",
    keyLibraries: ["OpenRouter", "fal.ai", "WaveSpeed", "SiliconFlow", "Fish Audio", "Prompt Engineering"],
    iconName: "Network",
  },
  {
    name: "Python & FastAPI Backend",
    category: "Backend",
    level: "Advanced",
    description:
      "High-performance asynchronous backend services with FastAPI and Python, handling AI media generation (text-to-image, video, motion transfer, voice cloning, face swap, lip sync) and document processing.",
    keyLibraries: ["FastAPI", "Pydantic", "AsyncIO", "Uvicorn", "Docling OCR", "PyTorch"],
    iconName: "Server",
  },
  {
    name: "Java & Spring Boot 3",
    category: "Backend",
    level: "Proficient",
    description:
      "Building scalable RESTful APIs with Spring Boot 3, Spring Security 6 (JWT + fine-grained RBAC), Flyway database migrations, and clean OOP architecture.",
    keyLibraries: ["Spring Boot 3", "Spring Security 6", "Spring Data JPA", "JWT", "Flyway", "Maven"],
    iconName: "Code2",
  },
  {
    name: "Vector & Relational Databases",
    category: "Databases",
    level: "Advanced",
    description:
      "Vector search indexing and hybrid retrieval paired with relational database schema design, index optimization, and transaction handling across PostgreSQL, MySQL, and SQLite.",
    keyLibraries: ["Vector DB", "PostgreSQL", "MySQL", "SQLite", "HNSW Indexing", "SQL Optimization"],
    iconName: "Database",
  },
  {
    name: "AI-Assisted Dev Tools & CLI",
    category: "DevOps & Tools",
    level: "Advanced",
    description:
      "Daily power utilization of Claude Code CLI, OpenAI Codex CLI, Cursor, and GitHub Copilot for code generation, AST-guided debugging, architecture planning, and rapid prototyping.",
    keyLibraries: ["Claude Code CLI", "OpenAI Codex", "Cursor IDE", "GitHub Copilot", "Terminal CLI"],
    iconName: "Terminal",
  },
  {
    name: "React 18 & Frontend",
    category: "Frontend",
    level: "Proficient",
    description:
      "Building reactive admin dashboards and customer storefronts with React 18, Redux Toolkit for global state, Vite.js build tool, Tailwind CSS, and REST API integration.",
    keyLibraries: ["React 18", "Redux Toolkit", "TypeScript", "Vite.js", "JavaScript", "HTML/CSS"],
    iconName: "Palette",
  },
  {
    name: "Docker & CI/CD Pipelines",
    category: "DevOps & Tools",
    level: "Proficient",
    description:
      "Containerizing multi-service AI backends with Docker, automating build/test/deploy with GitHub Actions CI/CD, Postman API testing, and collaborative workflow management.",
    keyLibraries: ["Docker", "Docker Compose", "GitHub Actions", "Postman", "Git", "Trello"],
    iconName: "Box",
  },
];
