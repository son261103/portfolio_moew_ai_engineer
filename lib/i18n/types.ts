export type Locale = "vi" | "en" | "zh";

export interface TranslationDictionary {
  nav: {
    about: string;
    projects: string;
    aiLab: string;
    techStack: string;
    experience: string;
    contact: string;
    letsTalk: string;
    search: string;
  };
  hero: {
    availableBadge: string;
    roleBadge: string;
    titleLine1: string;
    titleLine2Highlight: string;
    titleLine2Suffix?: string;
    subtitle: string;
    tags: {
      genai: string;
      graphrag: string;
      agents: string;
      backend: string;
    };
    viewProjects: string;
    letsConnect: string;
    githubLink: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    tenetBadge: string;
    quote1: string;
    quoteHighlight: string;
    quote2: string;
    paragraph: string;
    educationTitle: string;
    educationDegree: string;
    devmasterCourse: string;
    focusAreas: {
      title: string;
      desc: string;
    }[];
  };
  stats: {
    items: {
      label: string;
      desc: string;
      suffix?: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    featuredBadge: string;
    inspectCta: string;
    items: {
      slug: string;
      title: string;
      tagline: string;
      category: string;
      description: string;
      metrics: { label: string; value: string }[];
    }[];
  };
  aiLab: {
    badge: string;
    title: string;
    subtitle: string;
    tabRag: string;
    tabStreamer: string;
    tabVector: string;
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    librariesTitle: string;
    categories: Record<string, string>;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
    deliverablesTitle: string;
    items: {
      id: string;
      role: string;
      company: string;
      period: string;
      location: string;
      summary: string;
      achievements: string[];
      impactLabel: string;
      impactValue: string;
    }[];
  };
  github: {
    badge: string;
    title: string;
    subtitle: string;
    contributionsLabel: string;
    streakLabel: string;
    starsLabel: string;
    recentTitle: string;
    verifiedLog: string;
    exploreRepo: string;
    languageBreakdown: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    headline: string;
    description: string;
    copied: string;
    copy: string;
    form: {
      title: string;
      ssl: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      scopeLabel: string;
      options: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      successTitle: string;
      successDesc: string;
      errorTitle: string;
    };
  };
  footer: {
    tagline: string;
    allSystems: string;
    navigation: string;
    connect: string;
    rights: string;
    backToTop: string;
  };
}
