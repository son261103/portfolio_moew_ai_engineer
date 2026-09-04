import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { I18nProvider } from "@/lib/i18n/I18nProvider";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#070A0A" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Pham Le Son — Junior AI Engineer & Backend Developer",
    template: "%s | Pham Le Son",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Pham Le Son",
    "Junior AI Engineer",
    "Backend Developer",
    "LLM Applications",
    "GraphRAG",
    "RAG Pipelines",
    "Docling",
    "Multi-Agent Orchestration",
    "Hermes",
    "MCP Protocol",
    "FastAPI",
    "Python",
    "Java",
    "Spring Boot 3",
    "PyTorch",
    "YOLO11x",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: "Pham Le Son Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: "@son261103",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('portfolio-theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }

                const storedLocale = localStorage.getItem('portfolio-locale');
                if (storedLocale) {
                  document.documentElement.lang = storedLocale;
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen font-sans transition-colors duration-200">
        <I18nProvider>
          <ThemeProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
