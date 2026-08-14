"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-2xl bg-white dark:bg-[#0C1110] border border-[#D1DDD9] dark:border-[#24302E] hover:border-[#2D7A68]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        featured ? "lg:col-span-2 p-5 sm:p-7" : "p-5 sm:p-6"
      }`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            {project.featured && (
              <Badge variant="success" size="sm">
                ★ Featured System
              </Badge>
            )}
          </div>
          <span className="text-xs font-mono-tech text-[#627772] dark:text-[#6F7E7A]">
            {project.date}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1 mb-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0D1715] dark:text-[#F1F7F5] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] transition-colors"
          >
            <span>{project.title}</span>
            <ArrowUpRight
              size={16}
              className="text-[#627772] dark:text-[#6F7E7A] group-hover:text-[#2D7A68] dark:group-hover:text-[#9BCEC1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
          <p className="text-xs sm:text-sm font-mono-tech text-[#1E5649] dark:text-[#6FAFA0]">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#3B4D48] dark:text-[#A9B8B4] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-[#F0F4F2] dark:bg-[#111817] border border-[#D1DDD9] dark:border-[#24302E] mb-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-[10px] font-mono-tech uppercase text-[#627772] dark:text-[#6F7E7A] truncate">
                {metric.label}
              </div>
              <div className="text-xs sm:text-sm font-mono-tech font-bold text-[#0D1715] dark:text-[#F1F7F5]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture flow snippet */}
        <div className="mb-4 p-3 rounded-lg bg-[#E5EDE9] dark:bg-[#070A0A] border border-[#D1DDD9] dark:border-[#24302E]/80 text-xs font-mono-tech text-[#3B4D48] dark:text-[#A9B8B4]">
          <div className="flex items-center gap-1.5 text-[#1E5649] dark:text-[#6FAFA0] mb-1.5 font-semibold text-[11px] uppercase tracking-wider">
            <Layers size={12} />
            <span>Architecture Flow</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-[#0D1715] dark:text-[#F1F7F5]">
            {project.architecture.flow.slice(0, 3).map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-white dark:bg-[#17201F] px-2 py-0.5 rounded border border-[#D1DDD9] dark:border-[#24302E]">
                  {step.split(" ")[0]}
                </span>
                {idx < 2 && <span className="text-[#627772] dark:text-[#6F7E7A]">→</span>}
              </React.Fragment>
            ))}
            {project.architecture.flow.length > 3 && (
              <span className="text-[#627772] dark:text-[#6F7E7A] text-[10px]">
                +{project.architecture.flow.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Tech stack and Links */}
      <div className="pt-3 border-t border-[#D1DDD9] dark:border-[#24302E] space-y-3">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#F0F4F2] dark:bg-[#111817] text-[#3B4D48] dark:text-[#A9B8B4] border border-[#D1DDD9] dark:border-[#24302E]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono-tech text-[#2D7A68] dark:text-[#9BCEC1] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>Inspect Architecture & Code</span>
            <span>→</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#F0F4F2] dark:bg-[#111817] text-[#3B4D48] dark:text-[#A9B8B4] hover:text-[#0D1715] dark:hover:text-[#F1F7F5] hover:bg-[#E5EDE9] dark:hover:bg-[#17201F] border border-[#D1DDD9] dark:border-[#24302E] transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#F0F4F2] dark:bg-[#111817] text-[#2D7A68] dark:text-[#9BCEC1] hover:bg-[#E5EDE9] dark:hover:bg-[#17201F] border border-[#D1DDD9] dark:border-[#24302E] transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
