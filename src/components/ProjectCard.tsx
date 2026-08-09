"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectStatus = "Complete" | "Ongoing";

interface Project {
  icon: string;
  name: string;
  status: ProjectStatus;
  description: string;
  github?: string;
  link?: string;
  tech?: string[];
}

const statusStyles: Record<ProjectStatus, { badge: string; dot: string; label: string }> = {
  Complete: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    dot: "bg-emerald-500",
    label: "Complete",
  },
  Ongoing: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    dot: "bg-blue-500 animate-pulse",
    label: "Ongoing",
  },
};

const projects: Project[] = [
  {
    icon: "🎯",
    name: "Project Y",
    status: "Ongoing",
    description:
      "My new project that I work on in stealth mode for now. Building something exciting in the React ecosystem — more details coming soon.",
    github: "https://github.com",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "🐱",
    name: "Listing Cat",
    status: "Ongoing",
    description:
      "Marketing database for startups and indie hackers. Helps founders discover and list their products across the best directories.",
    github: "https://github.com",
    link: "https://listingcat.com",
    tech: ["React", "Node.js", "Postgres"],
  },
  {
    icon: "🔵",
    name: "Bluesky Meter",
    status: "Complete",
    description:
      "Realtime analytics for the Bluesky social network. Tracked follower growth, post reach, and engagement metrics. Successfully sold.",
    github: "https://github.com",
    tech: ["Next.js", "TanStack Query", "Supabase"],
  },
];

function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const s = statusStyles[project.status];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={cn(
                  "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                  "w-full max-w-md rounded-2xl shadow-2xl",
                  "bg-[var(--card)] text-[var(--card-foreground)]",
                  "border border-[var(--border)] overflow-hidden"
                )}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 pt-5 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{project.icon}</span>
                    <Dialog.Title className="font-semibold text-base text-[var(--foreground)]">
                      {project.name}
                    </Dialog.Title>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Status badge */}
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full",
                        s.badge
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
                      {s.label}
                    </span>
                    <Dialog.Close asChild>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                          "p-1.5 rounded-full cursor-pointer",
                          "hover:bg-[var(--accent)] text-[var(--muted-foreground)]",
                          "transition-colors"
                        )}
                      >
                        <X size={15} />
                      </motion.button>
                    </Dialog.Close>
                  </div>
                </div>

                {/* Description box — matches wireframe big text area */}
                <div className="mx-5">
                  <div
                    className={cn(
                      "rounded-xl border border-[var(--border)] p-4",
                      "bg-[var(--background)] min-h-[120px]"
                    )}
                  >
                    <Dialog.Description className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {project.description}
                    </Dialog.Description>
                  </div>
                </div>

                {/* Tech tags */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 px-5 pt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full font-medium",
                          "border border-[var(--border)] bg-[var(--accent)]",
                          "text-[var(--muted-foreground)]"
                        )}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer with GitHub link */}
                <div className="flex items-center justify-end gap-2 px-5 py-4 mt-2">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                        "border border-[var(--border)] text-[var(--muted-foreground)]",
                        "hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]",
                        "transition-colors"
                      )}
                    >
                      <ExternalLink size={12} />
                      Live site
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                        "bg-[var(--primary)] text-[var(--primary-foreground)]",
                        "transition-opacity hover:opacity-90"
                      )}
                    >
                      <GithubIcon size={12} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const s = statusStyles[project.status];

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 + index * 0.1, duration: 0.35 }}
        whileHover={{ y: -2, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)", transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className={cn(
          "w-full text-left p-4 rounded-xl border border-[var(--border)]",
          "bg-[var(--card)] text-[var(--card-foreground)]",
          "cursor-pointer transition-colors hover:border-[var(--muted-foreground)]/40",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
        )}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">{project.icon}</span>
          <span className="font-medium text-sm">{project.name}</span>
          <span
            className={cn(
              "ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full",
              s.badge
            )}
          >
            <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
            {s.label}
          </span>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </motion.button>

      <ProjectDetailDialog project={project} open={open} onOpenChange={setOpen} />
    </>
  );
}

export function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {projects.map((p, i) => (
        <ProjectCard key={p.name} project={p} index={i} />
      ))}
    </div>
  );
}
