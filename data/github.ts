export interface GithubActivityData {
  username: string;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  totalRepositories: number;
  totalStars: number;
  languages: { name: string; percentage: number; color: string }[];
  recentActivity: {
    type: "commit" | "pr" | "release" | "star";
    repo: string;
    message: string;
    timeAgo: string;
    branch?: string;
  }[];
  weeks: {
    days: {
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3 | 4;
    }[];
  }[];
}

// 100% Deterministic 26-week heatmap generator (zero hydration mismatch)
function generateDeterministicHeatmap() {
  const weeks = [];
  const baseTimestamp = 1723651200000; // Fixed deterministic anchor epoch

  for (let w = 0; w < 26; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const dayOffset = (w * 7 + d) * 86400000;
      const dayDate = new Date(baseTimestamp + dayOffset);
      const dateStr = dayDate.toISOString().split("T")[0];

      // Deterministic pseudo-random value in [0, 1) based on (w, d)
      const pseudoVal = Math.abs(Math.sin((w + 1) * 12.9898 + (d + 1) * 78.233) * 43758.5453) % 1;
      const isWeekend = d === 0 || d === 6;
      const threshold = isWeekend ? 0.45 : 0.2;

      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      if (pseudoVal > threshold) {
        count = Math.floor(pseudoVal * 8) + 1;
        if (count >= 7) level = 4;
        else if (count >= 5) level = 3;
        else if (count >= 3) level = 2;
        else level = 1;
      }

      days.push({
        date: dateStr,
        count,
        level,
      });
    }
    weeks.push({ days });
  }

  return weeks;
}

export const GITHUB_DATA: GithubActivityData = {
  username: "roser-ai",
  totalContributions: 1482,
  currentStreak: 47,
  longestStreak: 84,
  totalRepositories: 38,
  totalStars: 420,
  languages: [
    { name: "Python", percentage: 46, color: "#9BCEC1" },
    { name: "TypeScript", percentage: 28, color: "#6FAFA0" },
    { name: "C++ / CUDA", percentage: 14, color: "#C9E6DF" },
    { name: "Go & SQL", percentage: 12, color: "#A9B8B4" },
  ],
  recentActivity: [
    {
      type: "release",
      repo: "roser-ai/omnirag-engine",
      message: "v2.4.0 — Integrated Reciprocal Rank Fusion & Neo4j sub-graph traversals",
      timeAgo: "2 hours ago",
    },
    {
      type: "commit",
      repo: "roser-ai/neuralflow-agent",
      message: "feat(sandbox): add AST-guided safe modification verification hooks",
      timeAgo: "5 hours ago",
      branch: "main",
    },
    {
      type: "pr",
      repo: "roser-ai/visioncore-edge",
      message: "Merge PR #42: INT8 entropy calibration quantization script for Jetson Orin",
      timeAgo: "Yesterday",
    },
    {
      type: "commit",
      repo: "roser-ai/evalmatrix-cli",
      message: "perf(benchmark): optimize concurrent worker pool memory allocation in Go",
      timeAgo: "2 days ago",
      branch: "feat/go-routines",
    },
  ],
  weeks: generateDeterministicHeatmap(),
};
