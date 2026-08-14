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
    id: "rag-fusion",
    query: "How does Reciprocal Rank Fusion (RRF) optimize hybrid search across dense and sparse retrievers?",
    intent: "Technical Architecture & Algorithm Explanation",
    denseEmbeddingSample: [0.042, -0.381, 0.914, 0.125, -0.732, 0.612, 0.089, -0.219],
    sparseTokens: ["reciprocal", "rank", "fusion", "rrf", "hybrid", "dense", "sparse", "retriever"],
    retrievedDocs: [
      {
        id: "doc-1",
        title: "Hybrid Search with Reciprocal Rank Fusion",
        source: "VectorDB_Architecture_Whitepaper.pdf",
        similarity: 0.942,
        rerankScore: 0.981,
        content:
          "RRF combines rankings from disparate retrieval algorithms (e.g., BM25 keyword frequency and dense HNSW cosine similarity) using RRF_Score(d) = Σ 1 / (k + rank_i(d)), where k=60 standardizes distribution variances without requiring calibrated score normalization.",
        relevance: "high",
      },
      {
        id: "doc-2",
        title: "Dense vs Lexical Search Boundary Conditions",
        source: "IR_Systems_Benchmark_2024.pdf",
        similarity: 0.891,
        rerankScore: 0.945,
        content:
          "Sparse retrieval guarantees exact token matches (e.g., error codes, UUIDs, function names), whereas dense vector embeddings capture semantic nuance. Fusing both mitigates vocabulary mismatch while preserving exact entity precision.",
        relevance: "high",
      },
      {
        id: "doc-3",
        title: "Cross-Encoder vs Bi-Encoder Latency Tradeoffs",
        source: "Inference_Opt_TechReport.pdf",
        similarity: 0.652,
        rerankScore: 0.712,
        content:
          "Bi-encoders provide sub-10ms initial retrieval candidates across millions of vectors, while downstream cross-encoders rerank the top-50 candidates with all-to-all token attention.",
        relevance: "medium",
      },
    ],
    generatedResponse:
      "Reciprocal Rank Fusion (RRF) solves the challenge of combining unbounded BM25 scores with cosine similarity distances by scoring documents strictly based on their positional ranks across multiple search lists. Using the formula RRF(d) = Σ [1 / (60 + rank(d))], it provides robust hybrid retrieval without requiring arbitrary scalar score normalization.",
    citations: ["VectorDB_Architecture_Whitepaper.pdf", "IR_Systems_Benchmark_2024.pdf"],
    confidence: 0.98,
    latencyMs: 142,
  },
  {
    id: "kv-cache",
    query: "What are the primary mechanics of PagedAttention and KV-Cache memory fragmentation in vLLM?",
    intent: "Inference Engine Optimization & Memory Management",
    denseEmbeddingSample: [-0.118, 0.672, -0.419, 0.891, -0.054, 0.388, 0.742, -0.198],
    sparseTokens: ["pagedattention", "kv-cache", "memory", "fragmentation", "vllm", "continuous", "batching"],
    retrievedDocs: [
      {
        id: "doc-4",
        title: "PagedAttention: Efficient LLM Memory Serving",
        source: "vLLM_Paper_SOSP23.pdf",
        similarity: 0.963,
        rerankScore: 0.992,
        content:
          "PagedAttention draws inspiration from virtual memory OS paging. Instead of allocating contiguous VRAM for key-value caches upfront per sequence, it partitions KV caches into fixed-size physical blocks (e.g., 16 tokens), eliminating near 100% of external and internal VRAM waste.",
        relevance: "high",
      },
      {
        id: "doc-5",
        title: "Continuous Batching Throughput Scaling",
        source: "LLM_Serving_Guide.pdf",
        similarity: 0.884,
        rerankScore: 0.923,
        content:
          "Dynamic iteration-level scheduling swaps completed sequence blocks immediately back to the free block pool, allowing 2x-4x higher concurrent batch sizes on standard NVIDIA A100/H100 clusters.",
        relevance: "high",
      },
    ],
    generatedResponse:
      "PagedAttention addresses the 60-80% VRAM waste found in legacy sequential KV-cache allocation. By treating Key-Value tensors as virtual memory pages mapped to non-contiguous physical blocks, vLLM dynamically allocates blocks on demand as tokens are generated, enabling continuous batching and near-zero memory fragmentation.",
    citations: ["vLLM_Paper_SOSP23.pdf", "LLM_Serving_Guide.pdf"],
    confidence: 0.99,
    latencyMs: 128,
  },
  {
    id: "agent-dag",
    query: "How do supervisor multi-agent frameworks guarantee deterministic task execution with code sandboxes?",
    intent: "Autonomous Multi-Agent Architecture",
    denseEmbeddingSample: [0.552, 0.187, -0.634, 0.421, 0.812, -0.293, 0.045, 0.718],
    sparseTokens: ["supervisor", "multi-agent", "dag", "deterministic", "sandbox", "ast", "verification"],
    retrievedDocs: [
      {
        id: "doc-6",
        title: "Hierarchical Agent Workflows & State Checkpoints",
        source: "Agentic_Systems_2025.pdf",
        similarity: 0.951,
        rerankScore: 0.985,
        content:
          "A supervisor agent builds a Directed Acyclic Graph (DAG) of task dependencies. Each node in the DAG is executed by a scoped sub-agent within an isolated gVisor container. Tool calls must pass AST validation before modifying source code.",
        relevance: "high",
      },
    ],
    generatedResponse:
      "Deterministic agent workflows replace unconstrained prompt loops with topological task DAGs. Tool operations are isolated inside lightweight sandbox containers, while an AST (Abstract Syntax Tree) validator verifies syntactic and functional correctness against automated test suites before committing state changes.",
    citations: ["Agentic_Systems_2025.pdf"],
    confidence: 0.97,
    latencyMs: 165,
  },
];

export interface VectorNode {
  id: string;
  name: string;
  category: "LLM" | "Infra" | "RAG" | "Agents" | "Vision";
  x: number; // percentage coordinates for 2D visualizer
  y: number;
  connections: string[];
  dimensions: number[];
  description: string;
}

export const VECTOR_NODES: VectorNode[] = [
  {
    id: "node-rag",
    name: "Hybrid RAG",
    category: "RAG",
    x: 28,
    y: 35,
    connections: ["node-qdrant", "node-rerank", "node-llm"],
    dimensions: [0.88, 0.34, 0.92, 0.15],
    description: "Multi-stage retrieval uniting dense vectors and BM25 sparse lexical tokens.",
  },
  {
    id: "node-qdrant",
    name: "Qdrant / pgvector",
    category: "RAG",
    x: 20,
    y: 65,
    connections: ["node-rag", "node-vllm"],
    dimensions: [0.75, 0.45, 0.81, 0.22],
    description: "HNSW indexed vector storage with scalar payload filtering.",
  },
  {
    id: "node-rerank",
    name: "Cross-Encoder Rerank",
    category: "RAG",
    x: 45,
    y: 25,
    connections: ["node-rag", "node-llm"],
    dimensions: [0.82, 0.29, 0.95, 0.18],
    description: "High-precision cross-attention scoring over top-k candidate chunks.",
  },
  {
    id: "node-llm",
    name: "Quantized LLM Engine",
    category: "LLM",
    x: 65,
    y: 40,
    connections: ["node-rag", "node-vllm", "node-agents"],
    dimensions: [0.94, 0.72, 0.88, 0.41],
    description: "Continuous batching vLLM runtime with INT8/FP8 weights.",
  },
  {
    id: "node-vllm",
    name: "vLLM PagedAttention",
    category: "Infra",
    x: 50,
    y: 75,
    connections: ["node-llm", "node-tensorrt"],
    dimensions: [0.65, 0.88, 0.45, 0.78],
    description: "Zero-waste virtual memory management for KV-cache tensors.",
  },
  {
    id: "node-tensorrt",
    name: "TensorRT C++",
    category: "Infra",
    x: 75,
    y: 80,
    connections: ["node-vllm", "node-vision"],
    dimensions: [0.55, 0.92, 0.38, 0.85],
    description: "Hardware-compiled CUDA kernels for sub-15ms inference latency.",
  },
  {
    id: "node-agents",
    name: "Supervisor DAG Agent",
    category: "Agents",
    x: 82,
    y: 30,
    connections: ["node-llm", "node-rag"],
    dimensions: [0.91, 0.61, 0.78, 0.52],
    description: "Hierarchical task orchestrator with sandboxed tool execution.",
  },
  {
    id: "node-vision",
    name: "VisionCore Multimodal",
    category: "Vision",
    x: 85,
    y: 60,
    connections: ["node-tensorrt", "node-llm"],
    dimensions: [0.72, 0.81, 0.64, 0.69],
    description: "Real-time edge vision transformer & object tracking engine.",
  },
];
