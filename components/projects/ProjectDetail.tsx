"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  const sampleBash = `# Clone and run ${project.title} locally\ngit clone ${project.githubUrl}.git\ncd ${project.slug}\n\n# Configure environment and start isolated service\ncp .env.example .env\ndocker compose up -d --build\n\n# Run automated benchmark evaluation\npytest tests/test_benchmarks.py -v`;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        {/* Back link & breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#3B4D48] hover:text-[#2D7A68] dark:text-[#A9B8B4] dark:hover:text-[#9BCEC1] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Systems Overview</span>
          </Link>

          <div className="flex items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
              {project.date}
            </span>
          </div>
        </div>

        {/* Title, Tagline & Top Actions */}
        <div className="space-y-4 border-b border-[#D1DDD9] dark:border-[#24302E] pb-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0D1715] dark:text-[#F1F7F5]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg font-mono-tech text-[#1E5649] dark:text-[#6FAFA0]">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <MagneticButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="group shadow-md"
              >
                <GithubIcon size={16} />
                <span>Source Code / Repo</span>
              </MagneticButton>
            )}

            {project.liveUrl && (
              <MagneticButton
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink size={14} />
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Key Benchmark Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none">
          <div>
            <div className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Latency (p95)
            </div>
            <div className="text-xl font-mono-tech font-bold text-[#2D7A68] dark:text-[#9BCEC1] mt-1">
              {project.benchmark.latency}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Throughput
            </div>
            <div className="text-xl font-mono-tech font-bold text-[#0D1715] dark:text-[#F1F7F5] mt-1">
              {project.benchmark.throughput}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Benchmark Accuracy
            </div>
            <div className="text-xl font-mono-tech font-bold text-[#1E5649] dark:text-[#6FAFA0] mt-1">
              {project.benchmark.accuracy}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A]">
              Efficiency Gain
            </div>
            <div className="text-xl font-mono-tech font-bold text-[#2D7A68] dark:text-[#C9E6DF] mt-1">
              {project.benchmark.costReduction}
            </div>
          </div>
        </div>

        {/* Full Overview & Engineering Problem Statement */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0D1715] dark:text-[#F1F7F5] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2D7A68] dark:bg-[#9BCEC1]" />
            <span>Problem Formulation & System Architecture</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Architecture Flow Breakdown */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none space-y-5">
          <div className="flex items-center justify-between border-b border-[#D1DDD9] dark:border-[#24302E] pb-3">
            <div className="flex items-center gap-2 text-sm font-mono-tech font-bold text-[#0D1715] dark:text-[#F1F7F5]">
              <Layers size={16} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
              <span>{project.architecture.title}</span>
            </div>
            <span className="text-xs font-mono-tech text-[#1E5649] dark:text-[#6FAFA0] font-semibold">
              DAG Pipeline Flow
            </span>
          </div>

          <div className="space-y-2.5">
            {project.architecture.flow.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F0F4F2] dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E]/70"
              >
                <span className="w-6 h-6 rounded-lg bg-[#E5EDE9] text-[#2D7A68] dark:bg-[#17201F] dark:text-[#9BCEC1] font-mono-tech text-xs font-bold flex items-center justify-center shrink-0 border border-[#D1DDD9] dark:border-[#24302E]">
                  0{idx + 1}
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-medium text-[#0D1715] dark:text-[#F1F7F5]">
                    {step}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono-tech text-[#3B4D48] dark:text-[#A9B8B4] pt-1 leading-relaxed">
            <span className="text-[#2D7A68] dark:text-[#9BCEC1] font-semibold">Infra Notes: </span>
            {project.architecture.details}
          </p>
        </div>

        {/* Key Engineering Highlights */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#0D1715] dark:text-[#F1F7F5] flex items-center gap-2">
            <Cpu size={18} className="text-[#2D7A68] dark:text-[#9BCEC1]" />
            <span>Key Engineering Highlights</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] shadow-sm dark:shadow-none flex items-start gap-3"
              >
                <CheckCircle
                  size={16}
                  className="text-[#2D7A68] dark:text-[#9BCEC1] shrink-0 mt-0.5"
                />
                <p className="text-xs sm:text-sm text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-[#627772] dark:text-[#6F7E7A]">
            Technologies & Libraries Deployed
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-[#F0F4F2] text-xs font-mono-tech text-[#0D1715] dark:bg-[#111817] dark:text-[#F1F7F5] border border-[#D1DDD9] dark:border-[#24302E]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal Run Guide */}
        <div className="space-y-2.5">
          <div className="text-xs font-mono-tech uppercase tracking-wider text-[#627772] dark:text-[#6F7E7A]">
            Quick Setup & Execution
          </div>
          <TerminalWindow
            title={`execute_${project.slug}.sh`}
            code={sampleBash}
            language="bash"
            showLineNumbers
          />
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-8 border-t border-[#D1DDD9] dark:border-[#24302E] space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-[#0D1715] dark:text-[#F1F7F5]">
              Other Production Systems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="p-4 rounded-xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] hover:border-[#2D7A68]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-colors group flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-sm text-[#0D1715] dark:text-[#F1F7F5] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] transition-colors">
                      {p.title}
                    </div>
                    <div className="text-xs font-mono-tech text-[#1E5649] dark:text-[#6FAFA0] mt-0.5">
                      {p.category}
                    </div>
                  </div>
                  <span className="text-xs font-mono-tech text-[#627772] group-hover:text-[#2D7A68] dark:text-[#6F7E7A] dark:group-hover:text-[#9BCEC1] font-semibold">
                    Inspect →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
