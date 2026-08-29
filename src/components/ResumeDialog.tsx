"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const RESUME_URL = "https://res.cloudinary.com/dharmendraji/image/upload/v1788035111/oo45nynio80z7sudlnrq.pdf";
const RESUME_FILENAME = "Dharmendra-Chauhan-Resume.pdf";

export function ResumeDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
            "border border-[var(--border)] text-[var(--foreground)]",
            "hover:border-[var(--muted-foreground)]/40 hover:bg-[var(--accent)]",
            "transition-colors cursor-pointer select-none"
          )}
        >
          <span>📄</span>
          Resume
        </motion.button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={cn(
                  "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                  "w-full max-w-3xl max-h-[90vh] flex flex-col",
                  "p-6 rounded-2xl shadow-xl",
                  "bg-[var(--card)] text-[var(--card-foreground)]",
                  "border border-[var(--border)]"
                )}
              >
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <Dialog.Title className="text-lg font-semibold">
                    Resume
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "p-1.5 rounded-full transition-colors cursor-pointer",
                        "hover:bg-[var(--accent)] text-[var(--muted-foreground)]"
                      )}
                    >
                      <X size={16} />
                    </motion.button>
                  </Dialog.Close>
                </div>

                <Dialog.Description className="sr-only">
                  View and download Dharmendra Chauhan&apos;s resume
                </Dialog.Description>

                <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]">
                  {RESUME_URL ? (
                    <iframe
                      src={RESUME_URL}
                      title="Resume"
                      className="w-full h-[60vh] border-0"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-[60vh] text-sm text-[var(--muted-foreground)]">
                      Resume URL not configured.
                    </div>
                  )}
                </div>

                {RESUME_URL && (
                  <motion.a
                    href={RESUME_URL}
                    download={RESUME_FILENAME}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "mt-4 shrink-0 w-full flex items-center justify-center gap-2",
                      "px-4 py-2.5 rounded-lg text-sm font-medium",
                      "bg-[var(--primary)] text-[var(--primary-foreground)]",
                      "transition-opacity hover:opacity-90 cursor-pointer"
                    )}
                  >
                    <Download size={16} />
                    Download
                  </motion.a>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
