"use client";

// Tech-sector fit: mix of physical, mental, indoor, outdoor — no duplicate-sounding names
const ACTIVITIES = [
  { label: "Running Club", emoji: "🏃", bg: "#22C55E" },
  { label: "Climbing", emoji: "🧗", bg: "#8B5CF6" },
  { label: "Board Games", emoji: "🎲", bg: "#F97316" },
  { label: "Coffee & Code", emoji: "☕", bg: "#EA580C" },
  { label: "Hiking", emoji: "🥾", bg: "#0D9488" },
  { label: "Book Club", emoji: "📚", bg: "#2563EB" },
  { label: "Trivia", emoji: "❓", bg: "#7C3AED" },
  { label: "Cycling", emoji: "🚴", bg: "#16A34A" },
  { label: "Side Projects", emoji: "💡", bg: "#EAB308" },
  { label: "Yoga", emoji: "🧘", bg: "#A855F7" },
  { label: "Escape Rooms", emoji: "🔐", bg: "#DC2626" },
  { label: "Patio Drinks", emoji: "🍻", bg: "#F59E0B" },
  { label: "Chess", emoji: "♟️", bg: "#475569" },
  { label: "Pickup Basketball", emoji: "🏀", bg: "#EF4444" },
  { label: "Live Music", emoji: "🎵", bg: "#EC4899" },
  { label: "Camping", emoji: "⛺", bg: "#059669" },
  { label: "Comedy", emoji: "🎤", bg: "#F43F5E" },
  { label: "Disc Golf", emoji: "🥏", bg: "#14B8A6" },
  { label: "Coworking", emoji: "💻", bg: "#64748B" },
  { label: "Skiing", emoji: "⛷️", bg: "#0EA5E9" },
  { label: "Podcast Club", emoji: "🎧", bg: "#6366F1" },
  { label: "Cooking", emoji: "👨‍🍳", bg: "#FBBF24" },
  { label: "Stargazing", emoji: "🔭", bg: "#1E293B" },
  { label: "Ultimate Frisbee", emoji: "🥏", bg: "#06B6D4" },
];

export default function Eng1() {
  const duplicated = [...ACTIVITIES, ...ACTIVITIES];

  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2rem] font-bold leading-tight text-neutral-900 md:text-[2.25rem] lg:text-[2.75rem]">
            What&apos;s your{" "}
            <span className="text-[#F56565]">thing?</span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-neutral-700 md:text-[1.0625rem]">
            From sunrise hikes to late-night board games — we&apos;ve got you
            covered.
          </p>
        </header>

        {/* Endless marquee: bright rounded squares with emoji + name, right to left */}
        <div className="mt-12 overflow-hidden lg:mt-16" aria-hidden>
          <div
            className="flex w-max gap-4 py-4"
            style={{
              animation: "marquee-rtl 45s linear infinite",
            }}
          >
            {duplicated.map(({ label, emoji, bg }, i) => (
              <div
                key={`${label}-${i}`}
                className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl text-white shadow-md md:h-32 md:w-32 md:rounded-3xl md:gap-3"
                style={{ backgroundColor: bg }}
              >
                <span className="text-3xl md:text-4xl" aria-hidden>
                  {emoji}
                </span>
                <span className="text-center text-xs font-semibold leading-tight md:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
