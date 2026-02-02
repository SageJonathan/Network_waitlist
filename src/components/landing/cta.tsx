import Link from "next/link";

function EnvelopeIcon({ className }: { className?: string }) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-10 md:py-12 lg:py-14">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #ea580c 0%, #ec4899 50%, #7c3aed 100%)",
        }}
      />

      {/* Decorative shapes */}
      <div
        className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-white/10"
        aria-hidden
      />
      <div
        className="absolute bottom-[-5%] right-[-5%] h-80 w-80 rounded-full bg-white/10"
        aria-hidden
      />
      <div
        className="absolute left-[15%] top-1/2 h-40 w-40 -translate-y-1/2 -rotate-12 rounded-3xl bg-white/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Ready to meet your people?
        </h2>
        <p className="mt-2 text-center text-base font-normal leading-relaxed text-white/95 md:text-lg">
          Join the waitlist and be the first to know when we launch in Calgary.
        </p>
        <div className="mx-auto mt-6 max-w-md rounded-3xl bg-white/15 px-8 py-8 shadow-xl backdrop-blur-md md:px-12 md:py-10">
          <div className="flex w-full flex-col items-center gap-3">
            <Link
              href="/Waitlist"
              className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-gradient-to-r from-[#F89B37] to-[#F4529B] px-6 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:from-[#F89B37] hover:to-[#dc2626] focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2 focus:ring-offset-transparent md:px-24"
            >
              <EnvelopeIcon className="h-6 w-6 shrink-0" />
              Join the Waitlist
            </Link>
            <p className="hidden text-center text-sm font-normal text-white/80 md:block">
              No spam, just updates about our Calgary launch ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
