import { TranslationDictionary } from "../types";

export const zh: TranslationDictionary = {
  nav: {
    about: "关于我",
    projects: "工程项目",
    aiLab: "AI 实验室",
    techStack: "技术栈",
    experience: "工作经历",
    contact: "联系合作",
    letsTalk: "立即沟通",
    search: "搜索",
  },
  hero: {
    availableBadge: "正在寻找工作机会",
    roleBadge: "初级 AI 工程师 · 后端开发工程师",
    titleLine1: "构建高可靠生产级",
    titleLine2Highlight: "智能 AI 系统。",
    subtitle:
      "具备丰富大语言模型 (LLM) 应用落地、自定义 GraphRAG 知识图谱管道、多智能体协同框架及基于 Python 与 FastAPI 高性能后端开发实战经验的 AI 工程师。",
    tags: {
      genai: "生成式 AI",
      graphrag: "自定义 GraphRAG",
      agents: "多智能体协同 (Multi-Agent)",
      backend: "FastAPI 与 Spring Boot",
    },
    viewProjects: "查看工程项目",
    letsConnect: "直接联系",
    githubLink: "GitHub / son261103",
  },
  about: {
    badge: "01 // 技术档案与理念",
    title: "工程哲学与系统架构",
    subtitle:
      "超越简单的提示词工程，专注于构建高确定性、生产级 AI 基础设施、Docling 图谱多跳推理与高并发后端架构。",
    tenetBadge: "核心技术信条",
    quote1: "构建由 ",
    quoteHighlight: "LLM、自定义 GraphRAG 与多智能体协同框架",
    quote2: " 驱动的可扩展系统。",
    paragraph:
      "熟练掌握多模型供应商集成、Prompt 工程与 Python/FastAPI 生产级后端开发。技术栈覆盖向量检索、嵌入模型、Docling 文档处理、智能体协同调度 (Agent Harness) 以及企业级 Java Spring Boot 3 架构。",
    educationTitle: "东亚科技大学 (EAUT)",
    educationDegree: "信息技术学士 • 2025 年毕业",
    devmasterCourse: "Devmaster 科技学院 • Java 后端与 React.js 实战课程",
    focusAreas: [
      {
        title: "自定义 GraphRAG 与 Docling 文档解析",
        desc: "结合 Docling 布局解析、语义分块、LLM 实体关系抽取与 Graph-Merge 图谱合并层，实现精准的多跳关联推理。",
      },
      {
        title: "多智能体协同与 MCP 协议",
        desc: "基于 Hermes 框架的智能体调度，包含熔断与重试机制、结构化 JSON 工具接口、上下文压缩及 Model Context Protocol (MCP)。",
      },
      {
        title: "多模型供应商生成式 AI",
        desc: "中心化模型注册中心，统一调度 OpenRouter、fal.ai、WaveSpeed、SiliconFlow 与 Fish Audio，内置异步降级与限流处理。",
      },
      {
        title: "FastAPI 与 Python 微服务",
        desc: "构建全功能 AI 媒体生成流水线（文生图、图生视频、动作迁移、声音克隆、换脸、口型同步）与企业文档处理系统。",
      },
      {
        title: "Java 与 Spring Boot 3 REST API",
        desc: "高并发电商后端架构，基于 Spring Security 6 与 JWT 的细粒度权限控制 (RBAC)、MySQL 索引优化与 Flyway 数据库迁移。",
      },
      {
        title: "实时计算机视觉 (YOLO11x)",
        desc: "基于 YOLO11x 与 PyTorch GPU 批处理优化的实时视频流目标检测系统，稳定达到 20–30 FPS 并配备 Qt6/QML 桌面界面。",
      },
    ],
  },
  stats: {
    items: [
      {
        label: "已落地的生产系统",
        desc: "GraphRAG、多智能体框架、YOLO11x 视觉系统、Spring Boot API",
        suffix: "+",
      },
      {
        label: "集成的 AI 模型引擎",
        desc: "OpenRouter、fal.ai、WaveSpeed、SiliconFlow、Fish Audio 等",
        suffix: "+",
      },
      {
        label: "实时视频推理帧率",
        desc: "YOLO11x 实时视频流在 GPU 上稳定保持 20–30 FPS",
        suffix: " FPS",
      },
      {
        label: "持续探索前沿 AI",
        desc: "GraphRAG、Model Context Protocol (MCP)、多智能体集群",
      },
    ],
  },
  projects: {
    badge: "02 // 生产级项目",
    title: "核心工程系统与架构",
    subtitle:
      "精心打磨的实际生产 AI 流水线、低延迟后端与智能体系统，兼具严谨性与系统可扩展性。",
    filterAll: "全部",
    featuredBadge: "★ 核心系统",
    inspectCta: "查看系统架构与源码 →",
    items: [
      {
        slug: "custom-graphrag-pipeline",
        title: "自定义 GraphRAG 与多模型 AI 生产平台",
        tagline: "Docling 文档解析、语义图谱融合与多模型生成式 AI 调度",
        category: "LLM / RAG",
        description:
          "为解决复杂非结构化文档多跳推理难题而自主研发的 GraphRAG 系统，深度整合 Docling 版面分析、语义分块、LLM 实体关系抽取与 Graph-Merge 知识图谱层，并统一调度 6+ AI 引擎。",
        metrics: [
          { label: "推理能力", value: "多跳图谱推理" },
          { label: "AI 引擎调度", value: "6+ 供应商统一" },
          { label: "文档解析", value: "Docling + OCR" },
        ],
      },
      {
        slug: "realtime-object-detection",
        title: "YOLO11x 实时目标检测与计算机视觉系统",
        tagline: "20–30 FPS 实时视频流处理 · PyTorch GPU 优化 · Qt6/QML 界面",
        category: "AI Systems",
        description:
          "端到端实时计算机视觉系统，在 YOLO11x 上实现 20–30 FPS 稳定视频流检测，在 COCO 80+ 类别上达成 85%+ 准确率，并配备流畅的 Qt6/QML 桌面 GUI。",
        metrics: [
          { label: "视频流帧率", value: "20–30 FPS 实时" },
          { label: "检测准确率", value: "85%+ (80 类 COCO)" },
          { label: "技术架构", value: "YOLO11x + Qt6" },
        ],
      },
      {
        slug: "multi-agent-orchestrator-harness",
        title: "Hermes 多智能体调度与协调框架",
        tagline: "自主智能体协同 · 熔断重试机制 · MCP 协议与 CLI 子智能体",
        category: "Autonomous Agents",
        description:
          "基于 Hermes 架构的多智能体调度系统，统一管理与调度 Claude Code、OpenAI Codex 与 Gemini CLI 等专业编程子智能体，内置熔断保护、上下文压缩与 MCP 协议。",
        metrics: [
          { label: "协同子智能体", value: "Claude, Codex, Gemini" },
          { label: "标准协议", value: "MCP 标准协议" },
          { label: "容错机制", value: "熔断器 + 自动重试" },
        ],
      },
      {
        slug: "ecommerce-clothes-platform",
        title: "服饰电商平台与高并发 RESTful API",
        tagline: "Spring Boot 3 REST API · Spring Security 6 JWT · MySQL · React 18",
        category: "Backend / Infra",
        description:
          "完整的企业级电商平台，后端采用 Spring Boot 3 与 Spring Security 6 (JWT + RBAC)，MySQL 数据库配合 Flyway 版本迁移，前端采用 React 18 (Redux Toolkit + Vite)，全流程配备 GitHub Actions CI/CD。",
        metrics: [
          { label: "后端框架", value: "Spring Boot 3" },
          { label: "安全鉴权", value: "Spring Security 6 (JWT)" },
          { label: "前端技术", value: "React 18 + Redux" },
        ],
      },
    ],
  },
  aiLab: {
    badge: "03 // 交互式 AI 实验室",
    title: "系统架构与算法试验场",
    subtitle:
      "直观探索自定义 GraphRAG 检索跟踪轨迹、Token 实时流式切分以及多维语义向量空间。",
    tabRag: "GraphRAG 检索轨迹",
    tabStreamer: "Token 流式切分",
    tabVector: "向量语义空间",
  },
  techStack: {
    badge: "04 // 技术栈全景",
    title: "生产级技术栈与工具链",
    subtitle:
      "在实际生产环境中深度运用并验证的 AI 框架、深度学习工具、分布式后端与数据库技术。",
    searchPlaceholder: "搜索技术、框架、工具...",
    librariesTitle: "核心库与框架",
    categories: {
      All: "全部",
      "LLM & RAG": "LLM 与 RAG",
      "AI Agents": "AI 智能体",
      Backend: "后端开发",
      Databases: "数据库",
      Frontend: "前端开发",
      "DevOps & Tools": "DevOps 与工具",
    },
  },
  experience: {
    badge: "05 // 职业履历",
    title: "工程实践与项目沉淀",
    subtitle:
      "从技术支持起步，自主精进 Python 与后端架构，成长为构建复杂 AI 流水线与后端服务的工程师。",
    deliverablesTitle: "核心成果与已交付系统",
    items: [
      {
        id: "redai",
        role: "初级后端开发工程师 (AI 与后端服务)",
        company: "RedAI",
        period: "04/2025 – 07/2026",
        location: "越南河内",
        summary:
          "负责全功能 AI 媒体生成平台的 FastAPI 后端架构设计，并自主研发 Custom GraphRAG 与多智能体调度框架。",
        achievements: [
          "设计并构建 FastAPI 后端，支持文生图、图生视频、动作迁移、声音克隆、换脸、口型同步及音乐生成等全套 AI 媒体能力。",
          "自主设计并实现 Custom GraphRAG 管道，结合 Docling 布局解析、语义分块、LLM 实体关系抽取与 Graph-Merge 图谱合并层。",
          "设计多智能体调度架构 (Hermes)，集成熔断重试、结构化 JSON 工具接口、上下文压缩与 MCP 协议，协同管理多种 CLI 智能体。",
          "构建企业级多格式文档处理流水线（支持 PDF、DOCX、Markdown、HTML 及 OCR 识别）。",
          "构建统一的模型抽象层与中心化注册中心，调度 fal.ai、WaveSpeed、SiliconFlow、Fish Audio 与 OpenRouter，内置降级链与异步限流处理。",
        ],
        impactLabel: "AI 架构生态",
        impactValue: "Multi-Provider RAG",
      },
      {
        id: "dtn-ecommerce",
        role: "Java 后端实习开发工程师",
        company: "DTN E-Commerce Solutions",
        period: "12/2024 – 03/2025",
        location: "越南河内",
        summary:
          "基于 Spring Boot 3、Spring Security 6、MySQL 与 React.js 开发并优化高流量电商平台的 RESTful API。",
        achievements: [
          "基于 Spring Boot 3 与 MySQL 开发与优化商品目录、订单流转、库存及用户鉴权等核心 RESTful API。",
          "使用 Spring Security 6 与 JWT 实现细粒度的基于角色权限控制 (RBAC)，确保接口安全性。",
          "编写并优化复杂 MySQL SQL 查询与索引策略，显著降低商品列表等核心接口的平均响应时间。",
          "与前端团队深度协作，基于统一数据契约高效对接 React.js 组件与后端服务。",
        ],
        impactLabel: "接口与数据库优化",
        impactValue: "Spring Boot 3 + JWT",
      },
      {
        id: "vptech",
        role: "技术支持人员 (Technical Staff)",
        company: "VPTECH VN",
        period: "11/2022 – 07/2024",
        location: "越南河内",
        summary:
          "负责内部硬件与软件系统技术支持，并利用业余时间系统自学 Python 编程与后端架构基础。",
        achievements: [
          "为内部团队提供技术支持并解决软硬件故障，培养了结构化的系统排查与复杂问题分析能力。",
          "自主深入学习 Python 编程、数据结构、算法与后端开发核心理念，为后续从事 AI 研发打下坚实基础。",
        ],
        impactLabel: "技术沉淀轨迹",
        impactValue: "Tech Staff → AI Dev",
      },
    ],
  },
  github: {
    badge: "06 // 开源与代码活跃度",
    title: "开发节奏与 GitHub 指标",
    subtitle:
      "持续集成交付、活跃的开源探索与日常工程开发活跃度记录。",
    contributionsLabel: "次提交贡献 (最近 6 个月)",
    streakLabel: "天连续提交",
    starsLabel: "获得 Stars",
    recentTitle: "近期提交动态",
    verifiedLog: "已验证的 Git 日志",
    exploreRepo: "浏览全部代码仓库",
    languageBreakdown: "核心编程语言占比",
  },
  contact: {
    badge: "07 // 沟通合作",
    title: "取得联系",
    subtitle:
      "正在物色初级 AI 工程师？想深入探讨 Custom GraphRAG 实现或后端系统架构？欢迎随时联系！",
    headline: "携手构建真正落地的 AI 智能系统。",
    description:
      "熟练覆盖从向量检索、Docling GraphRAG 到多智能体架构设计、FastAPI 微服务与 Spring Boot 3 企业级 REST API 开发。",
    copied: "已复制！",
    copy: "复制",
    form: {
      title: "直接发送信息",
      ssl: "SSL 加密传输",
      nameLabel: "您的姓名 *",
      namePlaceholder: "例如：张经理",
      emailLabel: "电子邮箱 *",
      emailPlaceholder: "name@company.com",
      scopeLabel: "沟通主题 / 合作方向",
      options: [
        "初级 AI 工程师 / 后端开发岗位机会",
        "自定义 GraphRAG / 向量检索开发咨询",
        "自主多智能体系统与 MCP 协议",
        "后端架构设计 (FastAPI / Spring Boot)",
        "技术交流与其它合作",
      ],
      messageLabel: "详细信息 / 项目需求 *",
      messagePlaceholder:
        "请简要描述您的业务场景、技术挑战或招聘需求...",
      submitButton: "发送留言",
      submittingButton: "正在发送数据...",
      successTitle: "信息已成功发送！",
      successDesc:
        "感谢您的留言，我已收到您的信息，并将尽快通过邮件给您回复。",
      errorTitle: "发送失败",
    },
  },
  footer: {
    tagline:
      "构建鲁棒的 AI 管道、确定性多智能体系统与高并发生产级后端。",
    allSystems: "所有系统运行正常",
    navigation: "快速导航",
    connect: "联系与验证",
    rights: "Pham Le Son. 基于 Next.js 15、TypeScript 与 Tailwind CSS 构建。",
    backToTop: "返回顶部",
  },
};
