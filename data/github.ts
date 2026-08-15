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
  const baseTimestamp = 1723651200000;

  for (let w = 0; w < 26; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const dayOffset = (w * 7 + d) * 86400000;
      const dayDate = new Date(baseTimestamp + dayOffset);
      const dateStr = dayDate.toISOString().split("T")[0];

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
  username: "son261103",
  totalContributions: 624,
  currentStreak: 28,
  longestStreak: 54,
  totalRepositories: 18,
  totalStars: 45,
  languages: [
    { name: "Python", percentage: 52, color: "#9BCEC1" },
    { name: "Java", percentage: 24, color: "#6FAFA0" },
    { name: "JavaScript / TypeScript", percentage: 16, color: "#C9E6DF" },
    { name: "SQL & Shell", percentage: 8, color: "#A9B8B4" },
  ],
  recentActivity: [
    {
      type: "commit",
      repo: "son261103/computer_vision_v1",
      message: "feat(yolo): fine-tune NMS thresholds and PyTorch GPU batching pipeline",
      timeAgo: "2 hours ago",
      branch: "main",
    },
    {
      type: "commit",
      repo: "son261103/api-sell-clothes-v1",
      message: "feat(security): configure fine-grained RBAC with Spring Security 6 & JWT filters",
      timeAgo: "1 day ago",
      branch: "main",
    },
    {
      type: "commit",
      repo: "son261103/graphrag-docling-service",
      message: "feat(rag): add Docling layout parser & semantic node extraction layer",
      timeAgo: "3 days ago",
      branch: "feat/graph-merge",
    },
    {
      type: "pr",
      repo: "son261103/agent-harness-mcp",
      message: "Merge PR #4: circuit-breaker fallback for multi-provider CLI subagents",
      timeAgo: "5 days ago",
    },
  ],
  weeks: generateDeterministicHeatmap(),
};
