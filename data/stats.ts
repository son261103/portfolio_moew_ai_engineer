export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  isInfinity?: boolean;
  label: string;
  description: string;
}

export const STATS: StatItem[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years Engineering",
    description: "Architecting backend, full-stack & AI production software",
  },
  {
    value: 20,
    suffix: "+",
    label: "Production Systems",
    description: "Deployed high-throughput models, APIs & distributed infra",
  },
  {
    value: 12,
    suffix: "M+",
    label: "Tokens / Day Processed",
    description: "Across enterprise hybrid RAG & agentic pipelines",
  },
  {
    value: 0,
    isInfinity: true,
    label: "Things Still Learning",
    description: "Continuous frontier AI research & systems refinement",
  },
];
