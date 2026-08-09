export function ReactIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextjsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M7 16.5L13.5 7.5H15.5V16.5H14V10L8.5 17.5L7 16.5Z" fill="white" />
      <path d="M17 7.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TanstackIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#EF4444" />
      <text x="3" y="17" fontSize="11" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>
    </svg>
  );
}

export function TypeScriptIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M4 12H8M6 12V20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 12H19C19 12 20 16 17 16C20 16 20 20 17 20H13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function NodeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#339933" />
      <path d="M9 15.5V9.5L12 8L15 9.5V15.5L12 17L9 15.5Z" fill="white" opacity="0.9" />
      <path d="M10.5 13V11L12 10.5L13.5 11V13L12 13.5L10.5 13Z" fill="#339933" />
    </svg>
  );
}



export function PostgresIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="8" rx="6" ry="4" fill="#336791" />
      <path d="M6 8V16C6 18.2 8.7 20 12 20C15.3 20 18 18.2 18 16V8" stroke="#336791" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="8" rx="6" ry="4" fill="#336791" />
      <ellipse cx="12" cy="8" rx="6" ry="4" fill="none" stroke="#5a9fd4" strokeWidth="1" />
      <path d="M18 11C18 11 20 11.5 20 13C20 14.5 18 15 18 15" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function PrismaIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 18L12 3L16 16L4 18Z" fill="currentColor" opacity="0.8" />
      <path d="M12 3L20 18L16 16L12 3Z" fill="currentColor" opacity="0.4" />
      <path d="M4 18L16 16L20 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}


export function DockerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="4" height="3" rx="0.5" fill="#2496ED" />
      <rect x="9" y="10" width="4" height="3" rx="0.5" fill="#2496ED" />
      <rect x="14" y="10" width="4" height="3" rx="0.5" fill="#2496ED" />
      <rect x="9" y="6.5" width="4" height="3" rx="0.5" fill="#2496ED" />
      <rect x="14" y="6.5" width="4" height="3" rx="0.5" fill="#2496ED" />
      <path d="M3 15.5C3 15.5 4 17 7 17H18C20 17 21.5 15.5 21 13.5C20.5 11.5 19 13 19 13C19 13 19.5 10 17 10C16.5 10 16 10.2 16 10.2" stroke="#2496ED" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M21.5 11C21.5 11 22.5 10.5 22.5 9.5" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}


export function ShadcnIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 19L19 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M5 9L9 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function TailwindIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 9C7.5 5.5 9.5 4 12 4C16 4 16.5 7 18.5 7.5C20 7.8 21 7 21.5 6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M2.5 15C3.5 11.5 5.5 10 8 10C12 10 12.5 13 14.5 13.5C16 13.8 17 13 17.5 12" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function AIIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L14.5 9H21L16 13L18 19L12 15.5L6 19L8 13L3 9H9.5L12 3Z" fill="#8B5CF6" opacity="0.9" />
    </svg>
  );
}

export function BetterAuthIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <path d="M9 9V7C9 5.9 9.9 5 11 5H16C17.1 5 18 5.9 18 7V17C18 18.1 17.1 19 16 19H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
export function PostmanIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 14.5L14.8 7.7C15.35 7.15 16.25 7.15 16.8 7.7L17.3 8.2C17.85 8.75 17.85 9.65 17.3 10.2L10.5 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13.2 9.3L16.2 12.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 17H11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RAGIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6"
        cy="6"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="18"
        cy="6"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8.2 7.2L10.5 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15.8 7.2L13.5 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6H15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="6" cy="6" r="0.7" fill="currentColor" />
      <circle cx="18" cy="6" r="0.7" fill="currentColor" />
      <circle cx="12" cy="18" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function PromptEngineeringIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 9H16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 12H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 15H12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16.5 14.5L17.5 16.5L19.5 17.5L17.5 18.5L16.5 20.5L15.5 18.5L13.5 17.5L15.5 16.5L16.5 14.5Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export function VectorSearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15 15L20 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="9" r="1" fill="currentColor" opacity="0.65" />
      <circle cx="11" cy="7.5" r="1" fill="currentColor" opacity="0.65" />
      <circle cx="12.5" cy="11" r="1" fill="currentColor" opacity="0.65" />
      <path
        d="M7.5 12.5L10 10L12.5 11.5L14 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.57 8.84 21.93C9.34 22.03 9.52 21.71 9.52 21.44V19.67C6.73 20.3 6.14 18.29 6.14 18.29C5.69 17.09 5.03 16.77 5.03 16.77C4.12 16.13 5.1 16.14 5.1 16.14C6.11 16.22 6.64 17.2 6.64 17.2C7.54 18.78 8.99 18.33 9.55 18.05C9.64 17.36 9.9 16.9 10.19 16.64C7.96 16.38 5.62 15.5 5.62 11.65C5.62 10.55 6 9.65 6.66 8.95C6.56 8.68 6.21 7.65 6.76 6.28C6.76 6.28 7.61 6 9.52 7.34C10.32 7.11 11.16 7 12 7C12.84 7 13.68 7.11 14.48 7.34C16.39 6 17.24 6.28 17.24 6.28C17.79 7.65 17.44 8.68 17.34 8.95C18 9.65 18.38 10.55 18.38 11.65C18.38 15.51 16.04 16.37 13.8 16.63C14.16 16.95 14.48 17.58 14.48 18.55V21.44C14.48 21.71 14.66 22.03 15.16 21.93C19.13 20.57 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}


export const techStack = [
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextjsIcon },
  { name: "TanStack Query", Icon: TanstackIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Github", Icon: GitHubIcon },
  { name: "Better Auth", Icon: BetterAuthIcon },
  { name: "Node", Icon: NodeIcon },
  { name: "Postgres", Icon: PostgresIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "Postman", Icon: PostmanIcon },
  { name: "Prompt Engineering", Icon: PromptEngineeringIcon },
  { name: "Vector search", Icon: VectorSearchIcon },
  { name: "RAG", Icon: RAGIcon },
  { name: "shadcn/ui", Icon: ShadcnIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "AI SDK", Icon: AIIcon },
];
