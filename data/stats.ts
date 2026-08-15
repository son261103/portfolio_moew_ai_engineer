export interface StatItem {
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
  isInfinity?: boolean;
}

export const STATS: StatItem[] = [
  {
    value: 4,
    label: "Production Systems Built",
    description: "GraphRAG, Multi-Agent Harness, YOLO11x CV, Spring Boot API",
    prefix: "",
    suffix: "+",
  },
  {
    value: 6,
    label: "AI Providers Orchestrated",
    description: "OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio, piapi.ai",
    prefix: "",
    suffix: "+",
  },
  {
    value: 30,
    label: "Real-Time FPS Inference",
    description: "Sustained YOLO11x live video detection pipeline on GPU",
    prefix: "",
    suffix: " FPS",
  },
  {
    value: 0,
    label: "Emerging Tech Explored",
    description: "GraphRAG, Model Context Protocol (MCP), Multi-Agent Swarms",
    isInfinity: true,
  },
];
