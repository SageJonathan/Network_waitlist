"use client";

import { useState } from "react";

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

function CalendarIcon({ className }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

const ACTIVITIES = [
  "Coffee & Walks",
  "Fitness & Yoga",
  "Food & Cooking",
  "Art & Creativity",
  "Hiking & Outdoors",
  "Book Clubs",
  "Sports & Games",
  "Music & Events",
];

const AVAILABILITY_OPTIONS = [
  { value: "", label: "Select your availability" },
  { value: "weekday-mornings", label: "Weekday mornings" },
  { value: "weekday-evenings", label: "Weekday evenings" },
  { value: "weekends", label: "Weekends" },
  { value: "flexible", label: "Flexible" },
];

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(
    new Set()
  );
  const [availability, setAvailability] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");

  function toggleActivity(activity: string) {
    setSelectedActivities((prev) => {
      const next = new Set(prev);
      if (next.has(activity)) next.delete(activity);
      else next.add(activity);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: submit to backend
  }

  return (
    <section className="bg-[#FCF9ED] px-6 pb-16 md:pb-20">
      <div className="mx-auto max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="rotate-2 rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:rotate-0 md:p-8"
        >
          {/* Your Name */}
          <label className="mb-2 block text-sm font-bold text-neutral-800">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="mb-6 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
          />

          {/* Email Address */}
          <label className="mb-2 block text-sm font-bold text-neutral-800">
            Email Address <span className="text-red-600">*</span>
          </label>
          <div className="relative mb-6">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              <EnvelopeIcon className="h-5 w-5" />
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-neutral-300 bg-white py-3 pl-12 pr-4 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
            />
          </div>

          {/* What activities interest you? */}
          <label className="mb-3 block text-sm font-bold text-neutral-800">
            What activities interest you? (Select all that apply)
          </label>
          <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {ACTIVITIES.map((activity) => {
              const isSelected = selectedActivities.has(activity);
              return (
                <button
                  key={activity}
                  type="button"
                  onClick={() => toggleActivity(activity)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30 ${
                    isSelected
                      ? "border-[#F89B37] bg-[#FFEEDD] text-neutral-800"
                      : "border-neutral-300 bg-neutral-50 text-neutral-700 hover:border-neutral-400"
                  }`}
                >
                  {activity}
                </button>
              );
            })}
          </div>

          {/* When are you usually available? */}
          <label className="mb-2 block text-sm font-bold text-neutral-800">
            When are you usually available?
          </label>
          <div className="relative mb-6">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              <CalendarIcon className="h-5 w-5" />
            </span>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full appearance-none rounded-xl border border-neutral-300 bg-white py-3 pl-12 pr-4 text-neutral-800 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30 [&:invalid]:text-neutral-400"
            >
              {AVAILABILITY_OPTIONS.map((opt) => (
                <option key={opt.value || "placeholder"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* How did you hear about us? */}
          <label className="mb-2 block text-sm font-bold text-neutral-800">
            How did you hear about us?
          </label>
          <input
            type="text"
            value={howDidYouHear}
            onChange={(e) => setHowDidYouHear(e.target.value)}
            placeholder="Friend, social media, search..."
            className="mb-8 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
          />

          {/* Submit + disclaimer */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F89B37] to-[#F4529B] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:from-[#F89B37] hover:to-[#dc2626] focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2 focus:ring-offset-white"
            >
              Join the Waitlist
            </button>
            <p className="text-center text-sm text-neutral-500">
              No spam ever. We&apos;ll only reach out when we&apos;re ready to
              launch in Calgary ✨
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
