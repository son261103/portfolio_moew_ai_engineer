export interface LabQuery {
  id: string;
  query: string;
  intent: string;
  denseEmbeddingSample: number[];
  sparseTokens: string[];
  retrievedDocs: {
    id: string;
    title: string;
    source: string;
    similarity: number;
    rerankScore: number;
    content: string;
    relevance: "high" | "medium" | "low";
  }[];
  generatedResponse: string;
  citations: string[];
  confidence: number;
  latencyMs: number;
}

export const LAB_QUERIES: LabQuery[] = [
  {
    id: "graphrag-trace",
    query: "How does custom GraphRAG with Docling parsing improve multi-hop reasoning over unstructured enterprise PDFs?",
    intent: "GraphRAG & Document Intelligence",
    denseEmbeddingSample: [0.042, -0.381, 0.914, 0.125, -0.732, 0.612, 0.089, -0.219],
    sparseTokens: ["graphrag", "docling", "semantic", "chunking", "entities", "graph-merge", "multi-hop"],
    retrievedDocs: [
      {
        id: "doc-1",
        title: "Docling Layout & Semantic Chunking Layer",
        source: "RedAI_GraphRAG_Architecture.pdf",
        similarity: 0.962,
        rerankScore: 0.991,
        content:
          "Docling parses PDF/DOCX layouts, preserving table hierarchies and headers. Chunks are semantically segmented before LLM entity/relationship extraction, ensuring node-edge graphs maintain clean cross-document boundaries.",
        relevance: "high",
      },
      {
        id: "doc-2",
        title: "Graph-Merge Layer vs Flat Vector Retrieval",
        source: "MultiHop_Reasoning_Benchmark.pdf",
        similarity: 0.915,
        rerankScore: 0.958,
        content:
          "Unlike flat vector retrieval that misses indirect associations across distant sections, the graph-merge layer connects shared entity nodes, enabling deterministic multi-hop traversal across complex document graphs.",
        relevance: "high",
      },
      {
        id: "doc-3",
        title: "Vector Search + Knowledge Graph Hybrid Reranking",
        source: "Retrieval_Pipelines_RedAI.pdf",
        similarity: 0.785,
        rerankScore: 0.842,
        content:
          "Vector embeddings provide initial candidate clusters, while graph sub-paths provide contextual topological grounding to eliminate hallucinated relations.",
        relevance: "medium",
      },
    ],
    generatedResponse:
      "Custom GraphRAG combines Docling document parsing with LLM-based entity/relation extraction and a topological graph-merge layer. Instead of retrieving isolated text chunks via naive cosine similarity, the system traverses connected entity subgraphs, allowing accurate multi-hop synthesis across complex multi-page enterprise documents.",
    citations: ["RedAI_GraphRAG_Architecture.pdf", "MultiHop_Reasoning_Benchmark.pdf"],
    confidence: 0.99,
    latencyMs: 135,
  },
  {
    id: "multi-agent-mcp",
    query: "How does the Hermes Agent Harness coordinate coding CLI subagents with circuit-breaker protection and MCP?",
    intent: "Multi-Agent Systems & Tool Orchestration",
    denseEmbeddingSample: [-0.118, 0.672, -0.419, 0.891, -0.054, 0.388, 0.742, -0.198],
    sparseTokens: ["agent", "hermes", "circuit-breaker", "mcp", "claude-code", "context-compression", "fsm"],
    retrievedDocs: [
      {
        id: "doc-4",
        title: "Hermes Multi-Agent Harness Architecture",
        source: "Agent_Harness_TechReport.pdf",
        similarity: 0.974,
        rerankScore: 0.995,
        content:
          "Hermes orchestrates specialized CLI subagents (Claude Code, OpenAI Codex, Gemini CLI). Circuit-breaker hooks intercept transient API rate limits, while context compression summarizes long execution trajectories.",
        relevance: "high",
      },
      {
        id: "doc-5",
        title: "Model Context Protocol (MCP) Tool Contracts",
        source: "MCP_Specification_2025.pdf",
        similarity: 0.928,
        rerankScore: 0.941,
        content:
          "MCP provides standardized, sandboxed tool interfaces. Structured JSON schemas ensure tool call inputs match strict types before execution, eliminating malformed function call crashes.",
        relevance: "high",
      },
    ],
    generatedResponse:
      "The Hermes harness coordinates multiple CLI subagents through Model Context Protocol (MCP) tool contracts. It implements stateful context compression to preserve working memory during lengthy task executions, while circuit breakers and structured JSON validation prevent cascading failures across generative providers.",
    citations: ["Agent_Harness_TechReport.pdf", "MCP_Specification_2025.pdf"],
    confidence: 0.98,
    latencyMs: 148,
  },
  {
    id: "yolo-inference",
    query: "What optimizations enable real-time 20–30 FPS video object detection with YOLO11x and PyTorch?",
    intent: "Computer Vision & Low-Latency Inference",
    denseEmbeddingSample: [0.552, 0.187, -0.634, 0.421, 0.812, -0.293, 0.045, 0.718],
    sparseTokens: ["yolo11x", "pytorch", "opencv", "fps", "batching", "nms", "qt6"],
    retrievedDocs: [
      {
        id: "doc-6",
        title: "Real-Time YOLO11x Stream Pipeline Profiling",
        source: "Computer_Vision_V1_Repo.pdf",
        similarity: 0.958,
        rerankScore: 0.988,
        content:
          "OpenCV captures video frames asynchronously, while PyTorch GPU batching and Non-Maximum Suppression (NMS) calibration achieve 85%+ accuracy across 80+ COCO classes at a sustained 20–30 FPS on desktop Qt6 feeds.",
        relevance: "high",
      },
    ],
    generatedResponse:
      "Real-time 20–30 FPS throughput is achieved by decoupling asynchronous OpenCV frame capture from PyTorch GPU batch inference, optimizing NMS confidence thresholds, and profiling memory bottlenecks to render live bounding box overlays via a Qt6/QML desktop HUD without frame drops.",
    citations: ["Computer_Vision_V1_Repo.pdf"],
    confidence: 0.97,
    latencyMs: 33,
  },
];

export interface VectorNode {
  id: string;
  name: string;
  category: "LLM & RAG" | "AI Agents" | "Backend" | "Vision" | "Databases";
  x: number;
  y: number;
  connections: string[];
  dimensions: number[];
  description: string;
}

export const VECTOR_NODES: VectorNode[] = [
  {
    id: "node-graphrag",
    name: "Custom GraphRAG",
    category: "LLM & RAG",
    x: 24,
    y: 35,
    connections: ["node-docling", "node-vector", "node-fastapi"],
    dimensions: [0.92, 0.45, 0.88, 0.22],
    description: "Docling parsing, semantic chunking & LLM node/edge graph extraction.",
  },
  {
    id: "node-docling",
    name: "Docling Document Parsing",
    category: "LLM & RAG",
    x: 18,
    y: 65,
    connections: ["node-graphrag", "node-vector"],
    dimensions: [0.78, 0.38, 0.85, 0.19],
    description: "Layout analysis and structured extraction for PDF, DOCX, and OCR.",
  },
  {
    id: "node-vector",
    name: "Vector Search & Embeddings",
    category: "Databases",
    x: 42,
    y: 25,
    connections: ["node-graphrag", "node-fastapi"],
    dimensions: [0.85, 0.31, 0.94, 0.15],
    description: "Dense vector indexing with cosine similarity and hybrid lexical filtering.",
  },
  {
    id: "node-hermes",
    name: "Hermes Agent Harness",
    category: "AI Agents",
    x: 62,
    y: 38,
    connections: ["node-mcp", "node-fastapi"],
    dimensions: [0.95, 0.68, 0.82, 0.39],
    description: "Multi-agent coordinator with circuit breakers and context compression.",
  },
  {
    id: "node-mcp",
    name: "MCP Protocol & Tools",
    category: "AI Agents",
    x: 52,
    y: 75,
    connections: ["node-hermes", "node-fastapi"],
    dimensions: [0.72, 0.85, 0.52, 0.74],
    description: "Model Context Protocol for sandboxed structured JSON tool execution.",
  },
  {
    id: "node-fastapi",
    name: "FastAPI Backend Service",
    category: "Backend",
    x: 75,
    y: 78,
    connections: ["node-hermes", "node-graphrag", "node-yolo"],
    dimensions: [0.62, 0.91, 0.42, 0.82],
    description: "Asynchronous Python backend orchestrating multi-provider AI platforms.",
  },
  {
    id: "node-yolo",
    name: "YOLO11x Computer Vision",
    category: "Vision",
    x: 82,
    y: 30,
    connections: ["node-fastapi", "node-hermes"],
    dimensions: [0.89, 0.58, 0.75, 0.48],
    description: "Real-time 20–30 FPS live video stream object detection with PyTorch and Qt6.",
  },
  {
    id: "node-springboot",
    name: "Spring Boot 3 REST",
    category: "Backend",
    x: 86,
    y: 62,
    connections: ["node-fastapi", "node-vector"],
    dimensions: [0.68, 0.84, 0.58, 0.72],
    description: "Enterprise Java backend with Spring Security 6, JWT, and MySQL.",
  },
];
