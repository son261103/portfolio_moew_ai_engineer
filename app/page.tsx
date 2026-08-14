import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AILab } from "@/components/ai-lab/AILab";
import { TechStack } from "@/components/skills/TechStack";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { GithubActivity } from "@/components/github/GithubActivity";
import { Contact } from "@/components/contact/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative min-h-screen">
        <Hero />
        <About />
        <ProjectGrid />
        <AILab />
        <TechStack />
        <ExperienceTimeline />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
