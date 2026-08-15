"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "@/components/ui/Badge";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { t } = useI18n();

  const translatedProject =
    t.projects.items.find((item) => item.slug === project.slug) || {
      title: project.title,
      tagline: project.tagline,
      description: project.description,
      metrics: project.metrics,
    };

  return (
    <div
      className={`group relative rounded-3xl bg-white dark:bg-[#0C1110] border border-[#D5E2DE] dark:border-[#24302E] hover:border-[#267A66]/50 dark:hover:border-[#9BCEC1]/40 shadow-sm dark:shadow-none transition-all duration-300 overflow-hidden flex flex-col justify-between h-full p-6 sm:p-7 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2">
            <Badge variant="accent">{project.category}</Badge>
            {project.featured && (
              <Badge variant="success" size="sm">
                {t.projects.featuredBadge}
              </Badge>
            )}
          </div>
          <span className="text-xs font-mono-tech text-[#627A74] dark:text-[#6F7E7A]">
            {project.date}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5 mb-3.5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0B1614] dark:text-[#F1F7F5] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] transition-colors"
          >
            <span className="leading-snug">{translatedProject.title}</span>
            <ArrowUpRight
              size={16}
              className="text-[#627A74] dark:text-[#6F7E7A] group-hover:text-[#267A66] dark:group-hover:text-[#9BCEC1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
            />
          </Link>
          <p className="text-xs sm:text-sm font-mono-tech text-[#1C5B4C] dark:text-[#6FAFA0] leading-relaxed">
            {translatedProject.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#334A44] dark:text-[#A9B8B4] leading-relaxed mb-4">
          {translatedProject.description}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-4 rounded-2xl bg-[#F1F6F4] dark:bg-[#111817] border border-[#D5E2DE] dark:border-[#24302E] mb-4">
          {(translatedProject.metrics || project.metrics).map((metric) => (
            <div key={metric.label}>
              <div className="text-[10px] font-mono-tech uppercase text-[#627A74] dark:text-[#6F7E7A] truncate">
                {metric.label}
              </div>
              <div className="text-xs sm:text-sm font-mono-tech font-bold text-[#0B1614] dark:text-[#F1F7F5] mt-0.5">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture flow snippet */}
        <div className="mb-4 p-3.5 rounded-xl bg-[#E0EFEA] dark:bg-[#070A0A] border border-[#D5E2DE] dark:border-[#24302E]/80 text-xs font-mono-tech text-[#334A44] dark:text-[#A9B8B4]">
          <div className="flex items-center gap-1.5 text-[#1C5B4C] dark:text-[#6FAFA0] mb-2 font-semibold text-[11px] uppercase tracking-wider">
            <Layers size={12} />
            <span>Architecture Flow</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-[#0B1614] dark:text-[#F1F7F5]">
            {project.architecture.flow.slice(0, 3).map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-white dark:bg-[#17201F] px-2.5 py-0.5 rounded-md border border-[#D5E2DE] dark:border-[#24302E] shadow-2xs">
                  {step.split(" ")[0]}
                </span>
                {idx < 2 && <span className="text-[#627A74] dark:text-[#6F7E7A]">→</span>}
              </React.Fragment>
            ))}
            {project.architecture.flow.length > 3 && (
              <span className="text-[#627A74] dark:text-[#6F7E7A] text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5">
                +{project.architecture.flow.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Tech stack and Links */}
      <div className="pt-3.5 border-t border-[#D5E2DE] dark:border-[#24302E] space-y-3.5">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-md bg-[#F1F6F4] dark:bg-[#111817] text-[#334A44] dark:text-[#A9B8B4] border border-[#D5E2DE] dark:border-[#24302E]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono-tech text-[#267A66] dark:text-[#9BCEC1] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>{t.projects.inspectCta}</span>
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] text-[#334A44] dark:text-[#A9B8B4] hover:text-[#0B1614] dark:hover:text-[#F1F7F5] hover:bg-[#E0EFEA] dark:hover:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[#F1F6F4] dark:bg-[#111817] text-[#267A66] dark:text-[#9BCEC1] hover:bg-[#E0EFEA] dark:hover:bg-[#17201F] border border-[#D5E2DE] dark:border-[#24302E] transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
