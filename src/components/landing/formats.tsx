"use client";

import Image from "next/image";

// Local images from public folder (webp)
const FORMATS = [
  {
    id: "fireside",
    title: "Fireside chats",
    description:
    "Ask your questions directly to founders, artists, athletes, activists, and changemakers in an intimate setting.",
    image: "/fireqa.webp",
    alt: "People gathered around a campfire for conversation",
  },
  {
    id: "affinity",
    title: "Affinity groups",
    description:
      "Find support and community with people who share your identity or experiences — from women's groups to shared interests and beyond.",
    image: "/affinity.webp",
    alt: "Diverse group of friends together",
  },
  {
    id: "popup",
    title: "Popup events",
    description:
      "Join us for one-time events that bring people together for an out of the norm experience.",
    image: "/popup.webp",
    alt: "Two people meeting and shaking hands",
  },
  {
    id: "workshops",
    title: "Workshops",
    description:
      "Meet 1-on-1 with people who can help you grow, whether in your career or personal life.",
    image: "/workshops.webp",
    alt: "Two people meeting and shaking hands",
  },
  {
    id: "warm-intros",
    title: "Warm introductions",
    description:
      "Meet 1-on-1 with people who can help you grow, whether in your career or personal life.",
    image: "/warmintro.webp",
    alt: "Two people meeting and shaking hands",
  },
] as const;


export default function Formats() {
  const duplicated = [...FORMATS, ...FORMATS];

  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-bold leading-tight text-neutral-900 md:text-[2rem] lg:text-[2.25rem]">
            More than clubs —{" "}
            <span className="bg-gradient-to-r from-[#F89B37] to-[#F4529B] bg-clip-text text-transparent">
              intimate formats
            </span>
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-neutral-700 md:text-[1.0625rem]">
            We create experiences that empower you to take control.
          </p>
        </header>
      </div>

      {/* Full-bleed marquee outside max-w container */}
      <div className="mt-12 overflow-hidden lg:mt-16" aria-hidden>
        <div
          className="flex w-max gap-6 py-4"
          style={{ animation: "marquee-rtl 40s linear infinite" }}
        >
          {duplicated.map(({ id, title, description, image, alt }, i) => (
            <div
              key={`${id}-${i}`}
              className="group flex w-72 shrink-0 flex-col rounded-2xl border border-neutral-200/80 bg-neutral-50/80 overflow-hidden text-center shadow-sm transition-all duration-200 hover:border-neutral-300/80 hover:bg-white hover:shadow-md md:w-80"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="320px"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
                <p className="mt-2 text-center text-sm font-normal leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}