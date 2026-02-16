"use client";

import Image from "next/image";

// Local images from public folder (webp)
const FORMATS = [
  {
    id: "fireside",
    title: "Fireside chat",
    description:
    "Ask your questions directly to founders, artists, athletes, activists, and changemakers in an intimate setting.",
    image: "/fireqa.webp",
    alt: "People gathered around a campfire for conversation",
    color: "#EA580C",
  },
  {
    id: "affinity",
    title: "Affinity groups",
    description:
      "Find support and community with people who share your identity or experiences — from women's groups to shared interests and beyond.",
    image: "/affinity.webp",
    alt: "Diverse group of friends together",
    color: "#7C3AED",
  },
  {
    id: "warm-intros",
    title: "Warm introductions",
    description:
      "Meet 1-on-1 with people who can help you grow, whether in your career or personal life.",
    image: "/warmintro.webp",
    alt: "Two people meeting and shaking hands",
    color: "#0D9488",
  },
] as const;

export default function Formats() {
  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
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

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {FORMATS.map(({ id, title, description, image, alt, color }) => (
            <div
              key={id}
              className="group flex flex-col rounded-2xl border border-neutral-200/80 bg-neutral-50/80 overflow-hidden text-center shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-neutral-300/80 hover:bg-white hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-30"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
              </div>
              <div className="flex flex-col p-6 md:p-8">
                <h3 className="text-lg font-bold text-neutral-900">{title}</h3>
                <p className="mt-2 max-w-sm text-center text-base font-normal leading-relaxed text-neutral-600 md:mx-auto">
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
