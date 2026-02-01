function CoffeeIcon({ className }: { className?: string }) {
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
      <path d="M8 6h12v14c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V6Z" />
      <path d="M20 10h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4" />
      <path d="M10 4v2M14 3v2M18 4v2" />
    </svg>
  );
}

function MountainsIcon({ className }: { className?: string }) {
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
      <path d="M4 24l8-12 6 8 4-6 6 10" />
      <path d="M8 24V16l4 4 4-6 4 6 4-4v8" />
    </svg>
  );
}

function DumbbellsIcon({ className }: { className?: string }) {
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
      <path d="M6 12h4v8H6zM22 12h4v8h-4z" />
      <path d="M10 16h12" />
      <path d="M14 10v4M18 10v4" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
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
      <path d="M8 4v24c0 1.1.9 2 2 2h14" />
      <path d="M24 4v24c0 1.1-.9 2-2 2H10" />
      <path d="M24 4H10c-1.1 0-2 .9-2 2v20" />
      <path d="M12 10h8M12 16h8" />
    </svg>
  );
}

const activities = [
  {
    id: "coffee",
    label: "Coffee Walks",
    iconBg: "#F97316",
    Icon: CoffeeIcon,
  },
  {
    id: "hiking",
    label: "Hiking Crews",
    iconBg: "#22C55E",
    Icon: MountainsIcon,
  },
  {
    id: "fitness",
    label: "Fitness Groups",
    iconBg: "#EC4899",
    Icon: DumbbellsIcon,
  },
  {
    id: "book",
    label: "Book Clubs",
    iconBg: "#8B5CF6",
    Icon: BookIcon,
  },
] as const;

export default function Eng1() {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2rem] font-bold leading-tight text-neutral-900 md:text-[2.25rem] lg:text-[2.75rem]">
            Do what you{" "}
            <span className="text-[#F56565]">love</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-neutral-700 md:text-[1.0625rem]">
            From sunrise yoga to evening board games, connect over activities
            that light you up
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {activities.map(({ id, label, iconBg, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center rounded-2xl bg-[#FAFAF9] px-6 py-8"
            >
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="h-8 w-8" />
              </div>
              <p className="mt-4 text-center text-base font-semibold text-neutral-900">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
