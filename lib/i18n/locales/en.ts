import { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  nav: {
    about: "About",
    projects: "Projects",
    aiLab: "AI Lab",
    techStack: "Tech Stack",
    experience: "Experience",
    contact: "Contact",
    letsTalk: "Let's Talk",
    search: "Search",
  },
  hero: {
    availableBadge: "Available for opportunities",
    roleBadge: "Junior AI Engineer · Backend Developer",
    titleLine1: "I BUILD PRODUCTION",
    titleLine2Highlight: "INTELLIGENT AI SYSTEMS.",
    subtitle:
      "Junior AI Engineer with hands-on experience building applications powered by LLMs, custom RAG/GraphRAG pipelines, AI agent orchestration systems, and production backend services with Python & FastAPI.",
    tags: {
      genai: "Generative AI",
      graphrag: "Custom GraphRAG",
      agents: "Multi-Agent Orchestration",
      backend: "FastAPI & Spring Boot",
    },
    viewProjects: "View Systems & Projects",
    letsConnect: "Let's Connect",
    githubLink: "GitHub / son261103",
  },
  about: {
    badge: "01 // Engineering Profile",
    title: "Engineering Intelligent Systems",
    subtitle:
      "Moving beyond prompt engineering into deterministic, production-grade AI infrastructure, custom GraphRAG multi-hop reasoning, and resilient backend architectures.",
    tenetBadge: "The Core Engineering Tenet",
    quote1: "Building scalable systems powered by ",
    quoteHighlight: "LLMs, Custom GraphRAG & Multi-Agent Orchestration.",
    quote2: "",
    paragraph:
      "Experienced in multi-provider LLM integration, prompt engineering, and production backend services using Python and FastAPI. Comfortable across the entire stack—from vector search and embedding models to document processing, agent-harness engineering, and enterprise Java Spring Boot 3 architectures.",
    educationTitle: "East Asia University of Technology (EAUT)",
    educationDegree: "Bachelor of Science in Information Technology • Graduated 2025",
    devmasterCourse: "Devmaster Institute • Java Backend & React.js Courses",
    focusAreas: [
      {
        title: "Custom GraphRAG & Docling Ingestion",
        desc: "Docling PDF/DOCX layout parsing, semantic chunking, LLM-based entity/edge extraction, and graph-merge layers for multi-hop reasoning.",
      },
      {
        title: "Multi-Agent Orchestration & MCP",
        desc: "Hermes agent harness, circuit-breaker/retry logic, structured JSON tool interfaces, context compression, and subagent coordination.",
      },
      {
        title: "Multi-Provider Generative AI",
        desc: "Centralized model registry orchestrating OpenRouter, fal.ai, WaveSpeed, SiliconFlow, and Fish Audio with async fallback chains.",
      },
      {
        title: "FastAPI & Python Microservices",
        desc: "Full-featured AI media pipelines: text-to-image, video, motion transfer, voice cloning, face swap, lip sync, and document processing.",
      },
      {
        title: "Java & Spring Boot 3 REST APIs",
        desc: "High-traffic backend APIs, Spring Security 6 with JWT & RBAC, MySQL query optimization, and Flyway database migrations.",
      },
      {
        title: "Real-Time Computer Vision (YOLO11x)",
        desc: "End-to-end video stream object detection at 20–30 FPS using YOLO11x, PyTorch GPU batching, OpenCV, and Qt6/QML desktop GUI.",
      },
    ],
  },
  stats: {
    items: [
      {
        label: "Production Systems Built",
        desc: "GraphRAG, Multi-Agent Harness, YOLO11x CV, Spring Boot API",
        suffix: "+",
      },
      {
        label: "AI Providers Orchestrated",
        desc: "OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio, piapi.ai",
        suffix: "+",
      },
      {
        label: "Real-Time FPS Inference",
        desc: "Sustained YOLO11x live video detection pipeline on GPU",
        suffix: " FPS",
      },
      {
        label: "Emerging Tech Explored",
        desc: "GraphRAG, Model Context Protocol (MCP), Multi-Agent Swarms",
      },
    ],
  },
  projects: {
    badge: "02 // Production Engineering",
    title: "Featured Systems & Architectures",
    subtitle:
      "Selected production AI pipelines, low-latency backends, and agent frameworks built with mathematical rigor and systems scale.",
    filterAll: "All",
    featuredBadge: "★ Featured System",
    inspectCta: "Inspect Architecture & Code →",
    items: [
      {
        slug: "custom-graphrag-pipeline",
        title: "Custom GraphRAG & Multi-Provider AI Platform",
        tagline: "Docling Document Parsing, Semantic Graph-Merge & Multi-Provider Generative Orchestration",
        category: "LLM / RAG",
        description:
          "A custom GraphRAG pipeline engineered to solve multi-hop reasoning over complex documents by combining Docling parsing, semantic chunking, LLM-based entity/relation extraction, and a graph-merge layer, paired with a centralized model registry orchestrating OpenRouter, fal.ai, WaveSpeed, SiliconFlow, and Fish Audio.",
        metrics: [
          { label: "Reasoning Accuracy", value: "Multi-Hop Graph" },
          { label: "Providers Unified", value: "6+ AI Engines" },
          { label: "Document Ingestion", value: "Docling + OCR" },
        ],
      },
      {
        slug: "realtime-object-detection",
        title: "Real-Time YOLO11x Object Detection System",
        tagline: "Live Video Stream Processing at 20–30 FPS with PyTorch Optimization & Qt6/QML GUI",
        category: "AI Systems",
        description:
          "An end-to-end real-time computer vision system processing live webcam and video feeds at a sustained 20–30 FPS using YOLO11x via Ultralytics, achieving 85%+ detection accuracy across 80+ COCO categories with a high-performance Qt6/QML desktop GUI.",
        metrics: [
          { label: "Stream Throughput", value: "20–30 FPS Live" },
          { label: "Detection Accuracy", value: "85%+ (80 COCO Classes)" },
          { label: "Architecture", value: "YOLO11x + Qt6" },
        ],
      },
      {
        slug: "multi-agent-orchestrator-harness",
        title: "Multi-Agent Orchestrator Harness (Hermes)",
        tagline: "Autonomous Agent Coordination with Circuit Breakers, MCP & CLI Subagents",
        category: "Autonomous Agents",
        description:
          "A multi-agent orchestration harness designed to coordinate specialized coding CLI subagents (Claude Code, OpenAI Codex, Gemini CLI) with circuit-breaker/retry logic, structured JSON tool interfaces, context compression, and Model Context Protocol (MCP).",
        metrics: [
          { label: "Subagents Coordinated", value: "Claude, Codex, Gemini" },
          { label: "Protocol", value: "MCP Standard" },
          { label: "Fault Tolerance", value: "Circuit Breaker + Retry" },
        ],
      },
      {
        slug: "ecommerce-clothes-platform",
        title: "E-Commerce Clothes Platform & RESTful API",
        tagline: "Spring Boot 3 REST API, Spring Security 6 JWT, MySQL & React 18 Admin Dashboard",
        category: "Backend / Infra",
        description:
          "A complete production-ready e-commerce platform featuring a Spring Boot 3 RESTful API, fine-grained RBAC with Spring Security 6 & JWT, MySQL database with Flyway migrations, and a React 18 admin dashboard + responsive storefront.",
        metrics: [
          { label: "Backend Framework", value: "Spring Boot 3" },
          { label: "Security", value: "Spring Security 6 (JWT)" },
          { label: "Frontend", value: "React 18 + Redux Toolkit" },
        ],
      },
    ],
  },
  aiLab: {
    badge: "03 // Interactive AI Lab",
    title: "Systems & Pipeline Playground",
    subtitle:
      "Test real-time retrieval-augmented generation traces, continuous batching token streaming, and vector distance mathematics.",
    tabRag: "GraphRAG Trace",
    tabStreamer: "Token Streamer",
    tabVector: "Vector Space",
  },
  techStack: {
    badge: "04 // Technical Arsenal",
    title: "Production Stack & Tooling",
    subtitle:
      "Battle-tested tools, deep neural frameworks, distributed systems, and low-latency databases utilized across production environments.",
    searchPlaceholder: "Search library, tool, framework...",
    librariesTitle: "Libraries & Frameworks",
    categories: {
      All: "All",
      "LLM & RAG": "LLM & RAG",
      "AI Agents": "AI Agents",
      Backend: "Backend",
      Databases: "Databases",
      Frontend: "Frontend",
      "DevOps & Tools": "DevOps & Tools",
    },
  },
  experience: {
    badge: "05 // Career Track",
    title: "Engineering Experience & Impact",
    subtitle:
      "A track record of architecting distributed systems, production LLM pipelines, and accelerating engineering teams.",
    deliverablesTitle: "Key Deliverables & Systems Built",
    items: [
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
        impactLabel: "AI Pipeline Ecosystem",
        impactValue: "Multi-Provider RAG",
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
        impactLabel: "API & DB Optimization",
        impactValue: "Spring Boot 3 + JWT",
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
        impactLabel: "Foundation Track",
        impactValue: "Tech Staff → AI Dev",
      },
    ],
  },
  github: {
    badge: "06 // Open Source & Activity",
    title: "Production Velocity & GitHub Metrics",
    subtitle:
      "Continuous integration, active open source research contributions, and day-to-day engineering velocity.",
    contributionsLabel: "contributions (past 6 months)",
    streakLabel: "day streak",
    starsLabel: "Stars",
    recentTitle: "Recent Activity Stream",
    verifiedLog: "Verified Git Log",
    exploreRepo: "Explore All Repositories",
    languageBreakdown: "Primary Language Breakdown",
  },
  contact: {
    badge: "07 // Direct Contact",
    title: "Get In Touch",
    subtitle:
      "Interested in discussing Junior AI Engineer roles, custom GraphRAG development, or backend engineering opportunities?",
    headline: "Let's build production AI systems together.",
    description:
      "Comfortable across the stack from vector search and Docling GraphRAG to multi-agent harness engineering, FastAPI backend microservices, and Spring Boot 3 REST APIs.",
    copied: "Copied!",
    copy: "Copy",
    form: {
      title: "Direct Transmission Channel",
      ssl: "SSL Encrypted",
      nameLabel: "Your Name *",
      namePlaceholder: "Dr. Alex Vance",
      emailLabel: "Email Address *",
      emailPlaceholder: "alex@organization.ai",
      scopeLabel: "Discussion Area / Project Scope",
      options: [
        "Junior AI Engineer / Backend Developer Role",
        "Custom GraphRAG & Vector Retrieval",
        "Autonomous Multi-Agent Systems & MCP",
        "Backend Architecture (FastAPI / Spring Boot)",
        "Technical Consultation / Other",
      ],
      messageLabel: "Project Details / Requirements *",
      messagePlaceholder:
        "Describe your system challenges, throughput requirements, or team mission...",
      submitButton: "Transmit Message",
      submittingButton: "Transmitting Payload...",
      successTitle: "Transmission Dispatched Successfully",
      successDesc:
        "Thank you for reaching out. I will review your requirements and respond promptly via email.",
      errorTitle: "Dispatch Failed",
    },
  },
  footer: {
    tagline:
      "Architecting resilient AI pipelines, deterministic autonomous agents, and high-throughput production backends.",
    allSystems: "All Systems Nominal",
    navigation: "Navigation",
    connect: "Connect & Verify",
    rights: "Pham Le Son. Built with Next.js 15, TypeScript & Tailwind CSS.",
    backToTop: "Back to top",
  },
};
