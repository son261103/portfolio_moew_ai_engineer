import { TranslationDictionary } from "../types";

export const vi: TranslationDictionary = {
  nav: {
    about: "Giới thiệu",
    projects: "Dự án",
    aiLab: "AI Lab",
    techStack: "Kỹ năng",
    experience: "Kinh nghiệm",
    contact: "Liên hệ",
    letsTalk: "Kết nối ngay",
    search: "Tìm kiếm",
  },
  hero: {
    availableBadge: "Sẵn sàng đón nhận cơ hội",
    roleBadge: "Junior AI Engineer · Backend Developer",
    titleLine1: "XÂY DỰNG HỆ THỐNG",
    titleLine2Highlight: "AI THÔNG MINH.",
    subtitle:
      "Kỹ sư AI với kinh nghiệm thực chiến phát triển ứng dụng LLM, pipeline Custom GraphRAG, hệ thống điều phối AI Agent và dịch vụ backend hiệu năng cao với Python & FastAPI.",
    tags: {
      genai: "Generative AI",
      graphrag: "Custom GraphRAG",
      agents: "Multi-Agent Orchestration",
      backend: "FastAPI & Spring Boot",
    },
    viewProjects: "Khám phá dự án",
    letsConnect: "Liên hệ trực tiếp",
    githubLink: "GitHub / son261103",
  },
  about: {
    badge: "01 // Hồ sơ kỹ thuật",
    title: "Triết lý Kỹ thuật & Hệ thống",
    subtitle:
      "Tập trung xây dựng hạ tầng AI ứng dụng thực tế: từ phân tích tài liệu phức tạp Docling, suy luận multi-hop GraphRAG đến điều phối multi-agent tự động và backend bảo mật.",
    tenetBadge: "Tôn chỉ kỹ thuật cốt lõi",
    quote1: "Xây dựng các hệ thống có khả năng mở rộng được vận hành bởi ",
    quoteHighlight: "LLM, Custom GraphRAG & Multi-Agent Orchestration.",
    quote2: "",
    paragraph:
      "Có kinh nghiệm tích hợp đa nhà cung cấp LLM, prompt engineering và xây dựng dịch vụ backend thực tế bằng Python và FastAPI. Thành thạo từ tìm kiếm vector (vector search), embedding models đến xử lý tài liệu doanh nghiệp, kiến trúc agent-harness và hệ thống backend Java Spring Boot 3.",
    educationTitle: "Đại học Công nghệ Đông Á (EAUT)",
    educationDegree: "Cử nhân Công nghệ Thông tin • Tốt nghiệp 2025",
    devmasterCourse: "Học viện Devmaster • Khóa Java Backend & React.js",
    focusAreas: [
      {
        title: "Custom GraphRAG & Docling Ingestion",
        desc: "Phân tích cấu trúc PDF/DOCX bằng Docling, semantic chunking, trích xuất thực thể/quan hệ bằng LLM và tầng graph-merge cho suy luận multi-hop.",
      },
      {
        title: "Multi-Agent Orchestration & MCP",
        desc: "Hệ thống điều phối Hermes, circuit breaker, logic retry, giao tiếp công cụ JSON có cấu trúc, nén ngữ cảnh và tích hợp Model Context Protocol (MCP).",
      },
      {
        title: "Multi-Provider Generative AI",
        desc: "Tầng trừu tượng hóa với registry trung tâm điều phối OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio với chuỗi fallback bất đồng bộ.",
      },
      {
        title: "FastAPI & Python Microservices",
        desc: "Xây dựng toàn diện pipeline AI media: text-to-image, video, motion transfer, voice cloning, face swap, lip sync và xử lý tài liệu.",
      },
      {
        title: "Java & Spring Boot 3 REST APIs",
        desc: "API backend lưu lượng cao, Spring Security 6 với JWT & phân quyền chi tiết (RBAC), tối ưu truy vấn MySQL và quản lý di chuyển dữ liệu Flyway.",
      },
      {
        title: "Real-Time Computer Vision (YOLO11x)",
        desc: "Hệ thống phát hiện vật thể luồng video thời gian thực 20–30 FPS với YOLO11x, batching PyTorch GPU, OpenCV và giao diện desktop Qt6/QML.",
      },
    ],
  },
  stats: {
    items: [
      {
        label: "Hệ thống thực tế đã xây dựng",
        desc: "GraphRAG, Multi-Agent Harness, YOLO11x CV, Spring Boot API",
        suffix: "+",
      },
      {
        label: "Nhà cung cấp AI tích hợp",
        desc: "OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio, piapi.ai",
        suffix: "+",
      },
      {
        label: "Tốc độ nhận diện thời gian thực",
        desc: "Duy trì ổn định luồng video YOLO11x trên phần cứng GPU",
        suffix: " FPS",
      },
      {
        label: "Công nghệ mới liên tục cập nhật",
        desc: "GraphRAG, Model Context Protocol (MCP), Multi-Agent Swarms",
      },
    ],
  },
  projects: {
    badge: "02 // Dự án thực tế",
    title: "Hệ thống & Kiến trúc tiêu biểu",
    subtitle:
      "Các dự án AI và backend thực tế được xây dựng với độ chính xác cao, tính ổn định và khả năng chịu tải tốt.",
    filterAll: "Tất cả",
    featuredBadge: "★ Hệ thống tiêu biểu",
    inspectCta: "Xem chi tiết kiến trúc & mã nguồn →",
    items: [
      {
        slug: "custom-graphrag-pipeline",
        title: "Nền tảng Custom GraphRAG & Đa nhà cung cấp AI",
        tagline: "Phân tích tài liệu Docling, Semantic Graph-Merge & Điều phối AI đa nguồn",
        category: "LLM / RAG",
        description:
          "Pipeline GraphRAG tùy chỉnh giải quyết bài toán suy luận đa bước (multi-hop) trên tài liệu phức tạp bằng cách kết hợp Docling parser, semantic chunking, trích xuất entity/relation bằng LLM và tầng graph-merge, tích hợp bộ điều phối OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio.",
        metrics: [
          { label: "Khả năng suy luận", value: "Multi-Hop Graph" },
          { label: "Nhà cung cấp AI", value: "6+ Nền tảng" },
          { label: "Xử lý tài liệu", value: "Docling + OCR" },
        ],
      },
      {
        slug: "realtime-object-detection",
        title: "Hệ thống phát hiện vật thể thời gian thực YOLO11x",
        tagline: "Xử lý luồng video 20–30 FPS với PyTorch GPU & Giao diện Qt6/QML",
        category: "AI Systems",
        description:
          "Hệ thống thị giác máy tính toàn diện xử lý webcam/video trực tiếp đạt 20–30 FPS ổn định với mô hình YOLO11x, độ chính xác 85%+ trên 80 lớp COCO dataset và giao diện desktop hiện đại.",
        metrics: [
          { label: "Tốc độ xử lý", value: "20–30 FPS Live" },
          { label: "Độ chính xác", value: "85%+ (80 lớp COCO)" },
          { label: "Kiến trúc", value: "YOLO11x + Qt6" },
        ],
      },
      {
        slug: "multi-agent-orchestrator-harness",
        title: "Hệ thống điều phối Multi-Agent (Hermes)",
        tagline: "Điều phối Agent tự động với Circuit Breakers, MCP & CLI Subagents",
        category: "Autonomous Agents",
        description:
          "Hệ thống điều phối agent tự động điều khiển các subagent coding CLI (Claude Code, OpenAI Codex, Gemini CLI) với logic ngắt mạch (circuit breaker), nén ngữ cảnh (context compression) và giao thức Model Context Protocol (MCP).",
        metrics: [
          { label: "Subagents", value: "Claude, Codex, Gemini" },
          { label: "Giao thức", value: "Chuẩn MCP" },
          { label: "Khả năng chịu lỗi", value: "Circuit Breaker + Retry" },
        ],
      },
      {
        slug: "ecommerce-clothes-platform",
        title: "Nền tảng E-Commerce Bán quần áo & RESTful API",
        tagline: "Spring Boot 3 REST API, Spring Security 6 JWT, MySQL & React 18 Dashboard",
        category: "Backend / Infra",
        description:
          "Hệ thống thương mại điện tử hoàn chỉnh với backend RESTful Spring Boot 3, xác thực JWT và phân quyền chi tiết (RBAC), cơ sở dữ liệu MySQL quản lý bằng Flyway, giao diện quản trị React 18 (Redux Toolkit + Vite) và CI/CD GitHub Actions.",
        metrics: [
          { label: "Backend", value: "Spring Boot 3" },
          { label: "Bảo mật", value: "Spring Security 6 (JWT)" },
          { label: "Giao diện", value: "React 18 + Redux" },
        ],
      },
    ],
  },
  aiLab: {
    badge: "03 // Phòng thí nghiệm tương tác",
    title: "Mô phỏng Pipeline & Kiến trúc AI",
    subtitle:
      "Trải nghiệm trực tiếp luồng truy vấn Custom GraphRAG, phân tách token segment theo thời gian thực và không gian vector ngữ nghĩa.",
    tabRag: "Luồng GraphRAG",
    tabStreamer: "Phân luồng Token",
    tabVector: "Không gian Vector",
  },
  techStack: {
    badge: "04 // Vũ khí công nghệ",
    title: "Ngăn xếp Công nghệ & Công cụ",
    subtitle:
      "Bộ công cụ, framework AI, hệ cơ sở dữ liệu và công cụ lập trình được sử dụng thành thạo trong các dự án thực tế.",
    searchPlaceholder: "Tìm kiếm thư viện, công nghệ, công cụ...",
    librariesTitle: "Thư viện & Frameworks",
    categories: {
      All: "Tất cả",
      "LLM & RAG": "LLM & RAG",
      "AI Agents": "AI Agents",
      Backend: "Backend",
      Databases: "Cơ sở dữ liệu",
      Frontend: "Frontend",
      "DevOps & Tools": "DevOps & Công cụ",
    },
  },
  experience: {
    badge: "05 // Lộ trình nghề nghiệp",
    title: "Kinh nghiệm làm việc & Đóng góp",
    subtitle:
      "Hành trình phát triển từ nhân viên kỹ thuật đến xây dựng các pipeline AI và dịch vụ backend sản phẩm.",
    deliverablesTitle: "Hạng mục bàn giao & Hệ thống đã xây dựng",
    items: [
      {
        id: "redai",
        role: "Junior Backend Developer (AI & Backend Services)",
        company: "RedAI",
        period: "04/2025 – 07/2026",
        location: "Hà Nội, Việt Nam",
        summary:
          "Xây dựng dịch vụ backend FastAPI cho nền tảng AI media generation đa tính năng và tự phát triển pipeline Custom GraphRAG, hệ thống điều phối multi-agent harness.",
        achievements: [
          "Xây dựng backend FastAPI cho nền tảng AI media generation (text-to-image, video, motion transfer, voice cloning, face swap, lip sync, music).",
          "Thiết kế & xây dựng pipeline Custom GraphRAG kết hợp Docling parsing, semantic chunking, trích xuất thực thể/quan hệ bằng LLM và tầng graph-merge.",
          "Thiết kế mô hình điều phối Multi-Agent (Hermes) tích hợp circuit-breaker, retry logic, structured JSON tool schema và MCP protocol cho subagent (Claude Code, Codex CLI, Gemini CLI).",
          "Xây dựng pipeline xử lý tài liệu đa định dạng (PDF, DOCX, Markdown, HTML, OCR) cho cơ sở tri thức doanh nghiệp.",
          "Thiết kế tầng trừu tượng đa nhà cung cấp model (OpenRouter, fal.ai, WaveSpeed, SiliconFlow, Fish Audio) với chuỗi fallback và xử lý rate-limit bất đồng bộ.",
        ],
        impactLabel: "Hệ sinh thái AI",
        impactValue: "Multi-Provider RAG",
      },
      {
        id: "dtn-ecommerce",
        role: "Thực tập sinh Java Developer",
        company: "DTN E-Commerce Solutions",
        period: "12/2024 – 03/2025",
        location: "Hà Nội, Việt Nam",
        summary:
          "Phát triển và tối ưu hóa RESTful API cho nền tảng thương mại điện tử bằng Spring Boot 3, Spring Security 6, MySQL và React.js.",
        achievements: [
          "Phát triển RESTful API xử lý danh mục sản phẩm, quản lý đơn hàng, tồn kho và xác thực người dùng bằng Spring Boot 3 và MySQL.",
          "Triển khai xác thực bảo mật JWT và phân quyền người dùng chi tiết (RBAC) với Spring Security 6.",
          "Viết và tối ưu hóa các câu truy vấn MySQL phức tạp với chiến lược đánh chỉ mục (indexing), cải thiện tốc độ phản hồi API.",
          "Tích hợp các component React.js phía frontend với backend API, thống nhất chặt chẽ hợp đồng dữ liệu (data contracts).",
        ],
        impactLabel: "Tối ưu API & DB",
        impactValue: "Spring Boot 3 + JWT",
      },
      {
        id: "vptech",
        role: "Nhân viên Kỹ thuật (Technical Staff)",
        company: "VPTECH VN",
        period: "11/2022 – 07/2024",
        location: "Hà Nội, Việt Nam",
        summary:
          "Hỗ trợ kỹ thuật phần cứng, phần mềm nội bộ và chủ động tự học lập trình Python, kiến trúc backend để tạo bước đệm cho các vai trò kỹ thuật AI.",
        achievements: [
          "Hỗ trợ kỹ thuật và xử lý các sự cố phần cứng/phần mềm cho các phòng ban nội bộ, rèn luyện tư duy phân tích và giải quyết vấn đề có hệ thống.",
          "Chủ động tự học lập trình Python, cấu trúc dữ liệu, thuật toán và kiến trúc backend, xây dựng nền móng vững chắc cho các công việc AI Engineering tiếp theo.",
        ],
        impactLabel: "Lộ trình nền tảng",
        impactValue: "Tech Staff → AI Dev",
      },
    ],
  },
  github: {
    badge: "06 // Hoạt động mã nguồn mở",
    title: "Tần suất Lập trình & Chỉ số GitHub",
    subtitle:
      "Tích hợp liên tục, đóng góp mã nguồn mở và tần suất hoàn thành công việc kỹ thuật hàng ngày.",
    contributionsLabel: "đóng góp (6 tháng gần nhất)",
    streakLabel: "ngày liên tiếp",
    starsLabel: "Stars",
    recentTitle: "Dòng hoạt động gần đây",
    verifiedLog: "Nhật ký Git đã xác thực",
    exploreRepo: "Khám phá tất cả kho mã nguồn",
    languageBreakdown: "Tỷ lệ ngôn ngữ chính",
  },
  contact: {
    badge: "07 // Liên hệ trực tiếp",
    title: "Bắt đầu Kết nối",
    subtitle:
      "Bạn đang tìm kiếm Junior AI Engineer, muốn trao đổi về Custom GraphRAG hoặc cơ hội hợp tác phát triển backend?",
    headline: "Cùng nhau xây dựng các hệ thống AI ứng dụng thực tế.",
    description:
      "Sẵn sàng đảm nhận các công việc từ vector search, Docling GraphRAG đến thiết kế multi-agent harness, microservices FastAPI và hệ thống REST API Spring Boot 3.",
    copied: "Đã sao chép!",
    copy: "Sao chép",
    form: {
      title: "Kênh truyền thông tin trực tiếp",
      ssl: "Mã hóa SSL bảo mật",
      nameLabel: "Họ và tên của bạn *",
      namePlaceholder: "Ví dụ: Nguyễn Văn A",
      emailLabel: "Địa chỉ Email *",
      emailPlaceholder: "email@congty.com",
      scopeLabel: "Chủ đề trao đổi / Phạm vi công việc",
      options: [
        "Vị trí Junior AI Engineer / Backend Developer",
        "Tư vấn & Xây dựng Custom GraphRAG / RAG",
        "Hệ thống điều phối Autonomous Multi-Agent",
        "Tối ưu hóa Backend FastAPI & Spring Boot",
        "Trao đổi & Hợp tác kỹ thuật khác",
      ],
      messageLabel: "Nội dung chi tiết / Yêu cầu hệ thống *",
      messagePlaceholder:
        "Mô tả thách thức kỹ thuật, yêu cầu tuyển dụng hoặc sứ mệnh của đội ngũ bạn...",
      submitButton: "Gửi thông điệp",
      submittingButton: "Đang truyền tải dữ liệu...",
      successTitle: "Đã gửi thông điệp thành công!",
      successDesc:
        "Cảm ơn bạn đã liên hệ. Tôi sẽ xem xét thông tin và phản hồi lại sớm nhất qua email.",
      errorTitle: "Gửi tin nhắn thất bại",
    },
  },
  footer: {
    tagline:
      "Xây dựng các pipeline AI bền bỉ, hệ thống multi-agent tự động và backend hiệu năng cao.",
    allSystems: "Hệ thống hoạt động bình thường",
    navigation: "Điều hướng",
    connect: "Kết nối & Xác thực",
    rights: "Phạm Lê Sơn. Xây dựng với Next.js 15, TypeScript & Tailwind CSS.",
    backToTop: "Về đầu trang",
  },
};
