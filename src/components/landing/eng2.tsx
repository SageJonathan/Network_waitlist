function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 28c-.5 0-1-.2-1.4-.6C13.2 26 6 19 6 12c0-3.3 2.7-6 6-6 2.2 0 4.2 1.1 5.4 2.8C18.8 7.1 20.8 6 23 6c3.3 0 6 2.7 6 6 0 7-7.2 14-8.6 15.4-.4.4-.9.6-1.4.6z" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="16" cy="10" r="5" />
      <circle cx="8" cy="22" r="4" />
      <circle cx="24" cy="22" r="4" />
      <path d="M12 18c2-1.5 4-1.5 6 0" />
      <path d="M20 18c2-1.5 4-1.5 6 0" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24" />
      <path d="M10 4v4M22 4v4M16 4v4" />
      <rect x="14" y="16" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
    </svg>
  );
}

const features = [
  {
    id: "wellness",
    title: "Wellness First",
    description:
      "Connect through activities that energize you, not drain you.",
    Icon: HeartIcon,
  },
  {
    id: "community",
    title: "Real Community",
    description:
      "Build genuine connections with people who share your interests.",
    Icon: PeopleIcon,
  },
  {
    id: "irl",
    title: "Actually Meet IRL",
    description:
      "Skip the endless chatting. Jump straight into real-life experiences.",
    Icon: CalendarIcon,
  },
] as const;

export default function Eng2() {
  return (
    <section
      className="px-6 py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, #FDF9F0 0%, #F5E8F0 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-bold leading-tight text-[#1A1A1A] md:text-[2rem] lg:text-[2.25rem]">
            Why you&apos;ll{" "}
            <span className="bg-gradient-to-r from-[#F4529B] to-[#8B5CF6] bg-clip-text text-transparent">
              love it
            </span>
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-16 lg:gap-10">
          {features.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
            >
              <div
                className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl text-[#EC4899] md:h-20 md:w-20"
                style={{
                  background: "linear-gradient(135deg, #FFE8D6 0%, #FAD4E0 100%)",
                }}
              >
                <Icon className="h-9 w-9 md:h-10 md:w-10" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-base font-normal leading-relaxed text-[#1A1A1A]/90">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
