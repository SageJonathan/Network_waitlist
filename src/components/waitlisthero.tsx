import Link from "next/link";

function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default function WaitlistHero() {
  return (
    <section className="bg-[#FCF9ED] px-6 pt-8 pb-12 md:pb-16">
      {/* Back navigation */}
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2 focus:ring-offset-[#FCF9ED]"
        >
          <BackIcon className="h-5 w-5 shrink-0" />
          Back
        </Link>
      </div>

      {/* Centered content */}
      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center text-center">
        {/* Launching in Calgary badge */}
        <div className="inline-flex -rotate-2 items-center gap-2 rounded-full border border-orange-200 bg-[#FFEEDD] px-4 py-2 text-sm font-normal text-[#9B2C2C] shadow-sm">
          <span aria-hidden>🇨🇦</span>
          <span>Launching in Calgary</span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-[2.5rem]">
          Join the{" "}
          <span className="bg-gradient-to-r from-[#F89B37] to-[#F4529B] bg-clip-text text-transparent">
            waitlist
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          Tell us a bit about yourself so we can create the perfect community for
          you
        </p>
      </div>
    </section>
  );
}
