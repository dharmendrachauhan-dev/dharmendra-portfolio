"use client";

import { motion } from "framer-motion";
import { ContactDialog } from "@/components/ContactDialog";
import { ResumeDialog } from "@/components/ResumeDialog";
import { TechStackSection } from "@/components/TechBadge";
import { ProjectsSection } from "@/components/ProjectCard";
import GitHubContributions from "@/components/GithubContribution";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { GitHubIcon } from "@/components/TechIcons";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

function Section({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      {...fadeUp}
      transition={{ delay, duration: 0.4 }}
      className="space-y-3"
    >
      <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--muted-foreground)]">
        {label}
      </p>
      {children}
    </motion.section>
  );
}

function ReactInline() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block align-middle mx-0.5">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export default function Home() {
  const year = new Date().getFullYear();
  const devImage =   "https://res.cloudinary.com/dharmendraji/image/upload/v1786196272/dhamendra_lsdwee.jpg"
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--background)]/80 backdrop-blur-sm border-b border-[var(--border)]/50">
        <div className="flex items-center justify-between px-6 py-3 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-[var(--muted-foreground)] font-mono"
          >
            // <i>DC</i>
          </motion.span>
          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/dharmendrachauhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub profile"
              className={cn(
                "w-9 h-9 flex items-center justify-center rounded-full",
                "border border-[var(--border)]",
                "bg-[var(--background)] text-[var(--foreground)]",
                "hover:bg-[var(--accent)] transition-colors"
              )}
            >
              <GitHubIcon size={16} />
            </motion.a>
            <AnimatedThemeToggler />
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-2xl mx-auto px-6 pt-20 pb-16 space-y-10">
        {/* Hero */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="pt-6 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--border)] bg-[var(--muted)] flex items-center justify-center text-2xl"
          >
            <img src={devImage} />
          </motion.div>

          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold text-[var(--foreground)] leading-snug">
              Hey, I&apos;m{" "}
              <span className="text-amber-500">Dharmendra Chauhan</span>!
            </h1>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              A Backend Developer & Generative AI Engineer based in mumbai, India
            </p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            As Backend Developer & Generative AI Engineer, I focus on designing robust APIs, 
            database architectures, authentication systems, and intelligent applications {" "}
            powered by AI and RAG technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <ContactDialog />
            <ResumeDialog />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 text-xs text-[var(--muted-foreground)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
            Available for work, let&apos;s talk!
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <Section label="Tech Stack" delay={0.15}>
          <p className="text-sm text-[var(--muted-foreground)]">
            The tech stack I use for my personal and client work:
          </p>
          <TechStackSection />
        </Section>

        {/* Projects */}
        <Section label="Projects" delay={0.25}>
          <p className="text-sm text-[var(--muted-foreground)]">
            These are my personal projects, both past and ongoing:
          </p>
          <ProjectsSection />
        </Section>

        {/* GitHub */}
        <Section label="GitHub Activity" delay={0.3}>
          <p className="text-sm text-[var(--muted-foreground)]">
            My open-source contributions and coding activity:
          </p>
          <GitHubContributions />
        </Section>

        {/* Socials */}
        <Section label="Find Me On" delay={0.35}>
          <p className="text-sm text-[var(--muted-foreground)]">
            You can find me on the following social platforms:
          </p>
          <SocialLinks />
        </Section>

        {/* Contact */}
        <Section label="Get In Touch" delay={0.45}>
          <p className="text-sm text-[var(--muted-foreground)]">
            You can reach me anytime at{" "}
            <a
              href="mailto:dmma359800@gmail.com"
              className={cn(
                "font-mono text-xs underline underline-offset-2",
                "text-[var(--foreground)] hover:text-amber-500 transition-colors"
              )}
            >
              dmma359800@gmail.com
            </a>
          </p>
        </Section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-t border-[var(--border)] px-6 py-4"
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
          <span>
            © {year}
          </span>
          <a
            href="https://github.com/dharmendrachauhan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors underline underline-offset-2"
          >
            @dharmendra chauhan ↗
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
