"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
            "bg-[var(--primary)] text-[var(--primary-foreground)]",
            "transition-colors cursor-pointer select-none"
          )}
        >
          <span>📅</span>
          Message
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
                  "w-full max-w-md p-6 rounded-2xl shadow-xl",
                  "bg-[var(--card)] text-[var(--card-foreground)]",
                  "border border-[var(--border)]"
                )}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <Dialog.Title className="text-lg font-semibold">
                      Get in touch
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-[var(--muted-foreground)] mt-0.5">
                      Send a message and I&apos;ll get back to you soon.
                    </Dialog.Description>
                  </div>
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

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="text-4xl mb-3">✅</div>
                    <p className="font-medium">Message sent!</p>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      I&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-[var(--foreground)]"
                      >
                        Your email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={cn(
                          "w-full px-3 py-2.5 rounded-lg text-sm",
                          "border border-[var(--border)]",
                          "bg-[var(--background)] text-[var(--foreground)]",
                          "placeholder:text-[var(--muted-foreground)]",
                          "focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-1",
                          "transition-all"
                        )}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-[var(--foreground)]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi, I'd like to talk about..."
                        rows={4}
                        className={cn(
                          "w-full px-3 py-2.5 rounded-lg text-sm resize-none",
                          "border border-[var(--border)]",
                          "bg-[var(--background)] text-[var(--foreground)]",
                          "placeholder:text-[var(--muted-foreground)]",
                          "focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-1",
                          "transition-all"
                        )}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={!loading ? { scale: 1.02 } : {}}
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className={cn(
                        "w-full flex items-center justify-center gap-2",
                        "px-4 py-2.5 rounded-lg text-sm font-medium",
                        "bg-[var(--primary)] text-[var(--primary-foreground)]",
                        "transition-opacity cursor-pointer",
                        loading && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                      {loading ? "Sending..." : "Send message"}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
