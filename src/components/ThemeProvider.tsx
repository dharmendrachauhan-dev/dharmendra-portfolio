"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

export function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: unknown;
}) {
  // next-themes injects an inline <script> to prevent theme flash. React 19
  // warns about <script> inside client components. Keep the real script on SSR
  // (so it still runs before paint); on the client, mark it as JSON so React
  // skips the warning. next-themes already sets suppressHydrationWarning.
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider {...props} scriptProps={scriptProps}>
      {children}
    </NextThemesProvider>
  );
}
