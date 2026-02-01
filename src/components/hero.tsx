import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Two interconnected loops (infinity-style) */}
        <circle cx="14" cy="12" r="6" fill="url(#logo-grad)" />
        <circle cx="26" cy="12" r="6" fill="url(#logo-grad2)" />
        <defs>
          <linearGradient id="logo-grad" x1="8" y1="6" x2="20" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="logo-grad2" x1="20" y1="6" x2="32" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-semibold text-neutral-800">Humanae</span>
    </div>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="16" cy="10" r="5" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="8" cy="22" r="4" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="22" r="4" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M12 18c2-1.5 4-1.5 6 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 18c2-1.5 4-1.5 6 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-[#fdf8f3] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left column: content */}
        <div className="flex flex-col">
          <Logo />
          <div className="mt-8 flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-700/30 bg-[#fde8dc] px-4 py-2 text-sm font-medium text-neutral-800">
              <span aria-hidden>🇨🇦</span>
              <span>Launching in Calgary</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Networking that doesn&apos;t feel like{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                work
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-neutral-700">
              Meet amazing people doing things you actually love. No elevator pitches. No awkward
              mixers. Just real connections through shared activities.
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:shadow-xl hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#fdf8f3]"
              >
                <EnvelopeIcon className="shrink-0" />
                Join the Waitlist
              </button>
              <p className="flex items-center gap-1.5 text-sm text-neutral-500">
                No spam, just updates about our Calgary launch
                <SparkleIcon className="shrink-0 text-amber-400" aria-hidden />
              </p>
            </div>
          </div>
        </div>

        {/* Right column: image + floating card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
                alt="Group of friends smiling together outdoors"
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl md:-left-6 md:p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-1.5 md:h-14 md:w-14">
                <PeopleIcon className="h-full w-full text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-600">Real connections</p>
                <p className="text-base font-bold text-neutral-900">No small talk required</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
