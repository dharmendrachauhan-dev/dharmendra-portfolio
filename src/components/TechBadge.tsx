"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { techStack } from "./TechIcons";

export function TechBadge({
  name,
  Icon,
  index,
}: {
  name: string;
  Icon: React.ComponentType<{ size?: number }>;
  index: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -1 }}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        "border border-border bg-[var(--background)]",
        "text-[var(--foreground)] cursor-default select-none",
        "transition-colors hover:border-[var(--muted-foreground)]"
      )}
    >
      <Icon size={13} />
      {name}
    </motion.span>
  );
}

export function TechStackSection() {
  return (
    <div className="flex flex-wrap gap-2">
      {techStack.map(({ name, Icon }, i) => (
        <TechBadge key={name} name={name} Icon={Icon} index={i} />
      ))}
    </div>
  );
}
