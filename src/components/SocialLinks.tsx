"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.258 5.628 5.906-5.628Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function ThreadsIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.485l-2.416.67c-1.102-3.96-3.72-5.886-7.928-5.914-2.918.02-5.214.894-6.826 2.596C3.862 6.651 3.05 9.039 3.02 12c.03 2.954.842 5.337 2.39 7.068 1.608 1.7 3.908 2.576 6.83 2.596 2.602-.023 4.406-.705 5.684-2.15.891-1.01 1.461-2.354 1.707-4.074-.84.12-1.75.179-2.712.179-3.21 0-6.178-.8-8.127-2.396-1.22-.997-1.868-2.352-1.831-3.816.032-1.293.67-2.498 1.795-3.397 1.48-1.188 3.59-1.791 6.083-1.751 1.698.028 3.217.324 4.54.88.055-.465.082-.948.082-1.441V4.45h2.469v.049c0 3.38-.9 5.908-2.673 7.51-1.726 1.558-4.176 2.348-7.282 2.348-.84 0-1.654-.054-2.44-.16l.003 1.795c.003.003 0 .006.003.006h.006c.01 0 .016 0 .02.003 2.4.014 4.398-.56 5.797-1.668.66-.517 1.098-1.138 1.306-1.85a7.04 7.04 0 0 1-2.053.298c-2.31 0-3.688-.982-3.688-2.628 0-1.596 1.41-2.612 3.688-2.612 2.253 0 3.668 1.016 3.668 2.628v.052z"/>
    </svg>
  );
}

// BlueSky icon
// function BlueskyIcon({ size = 14 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/>
//     </svg>
//   );
// }

function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function SubstackIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
    </svg>
  );
}

const socials = [
  { label: "X/Twitter", href: "https://x.com/dharmchauhanji", Icon: XIcon },
  { label: "Threads", href: "https://www.threads.com/@_dharmendra_chauhan_", Icon: ThreadsIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dharmendraji-dev/", Icon: LinkedInIcon },
  { label: "Substack", href: "https://substack.com/@dharmendraji", Icon: SubstackIcon },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {socials.map(({ label, href, Icon }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
            "border border-[var(--border)] bg-[var(--background)]",
            "text-[var(--foreground)] hover:border-[var(--muted-foreground)]",
            "transition-colors"
          )}
        >
          <Icon size={13} />
          {label}
        </motion.a>
      ))}
    </div>
  );
}
