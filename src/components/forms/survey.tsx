"use client";

import Link from "next/link";
import { useState } from "react";

import { submitSurveyResponses } from "@/actions";
import SuccessModal from "@/components/modals/success-modal";
import { sanitizeSurveyPayload, validateSurveyForm } from "@/utils/sanitation";

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

const NETWORKING_PAIN_OPTIONS = [
  "Too transactional",
  "Boring / repetitive",
  "Hard to follow up",
  "Awkward small talk",
  "Feels inauthentic",
  "Wrong crowd",
  "Time / location",
  "Other",
];

const STRUGGLE_OPTIONS = [
  "Finding mentors",
  "Work-life balance",
  "Switching roles",
  "Visibility / advancement",
  "Skill gaps",
  "Imposter syndrome",
  "Other",
];

const FEATURE_OPTIONS = [
  "Mentorship",
  "Skill swaps",
  "Accountability buddies",
  "Career workshops",
  "Community events",
  "Job / role support",
  "Other",
];

export default function Survey() {
  const [activitiesSelected, setActivitiesSelected] = useState<Set<string>>(
    new Set(),
  );
  const [availability, setAvailability] = useState("");
  const [networkingPainSelected, setNetworkingPainSelected] = useState<
    Set<string>
  >(new Set());
  const [networkingPain, setNetworkingPain] = useState("");
  const [struggleSelected, setStruggleSelected] = useState<Set<string>>(
    new Set(),
  );
  const [struggleOther, setStruggleOther] = useState("");
  const [featureSelected, setFeatureSelected] = useState<Set<string>>(
    new Set(),
  );
  const [featureOther, setFeatureOther] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function toggleActivity(activity: string) {
    setActivitiesSelected((prev) => {
      const next = new Set(prev);
      if (next.has(activity)) next.delete(activity);
      else next.add(activity);
      return next;
    });
  }

  function toggleNetworkingPain(option: string) {
    setNetworkingPainSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  }

  function toggleStruggle(option: string) {
    setStruggleSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  }

  function toggleFeature(option: string) {
    setFeatureSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const payload = {
      activities: [...activitiesSelected],
      availability: availability || undefined,
      networkingPainSelected: [...networkingPainSelected],
      networkingPain,
      struggleSelected: [...struggleSelected],
      struggleOther,
      featureSelected: [...featureSelected],
      featureOther,
    };
    const { valid, errors: validationErrors } = validateSurveyForm(payload);
    if (!valid) {
      setErrors(validationErrors);
      return;
    }
    const sanitized = sanitizeSurveyPayload(payload);
    setIsSubmitting(true);
    try {
      const result = await submitSurveyResponses(sanitized);
      if (!result.success) throw new Error(result.error);
      setShowSuccessModal(true);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#FCF9ED] px-6 pb-16 pt-8 md:pb-20">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <Link
            href="/Waitlist"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2 focus:ring-offset-[#FCF9ED]"
          >
            <span aria-hidden>←</span>
            Back to waitlist
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] md:text-3xl">
            Help us build something you&apos;ll love
          </h1>
          <p className="mt-2 text-base text-neutral-600">
            A few questions so we can shape the community around what you need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-8"
        >
          {errors.form && (
            <p className="mb-4 text-sm font-medium text-red-600" role="alert">
              {errors.form}
            </p>
          )}

          {/* Part 1: What you like */}
          <div className="mb-10">
            <label className="mb-2 block text-sm font-bold text-neutral-800">
              Activities you enjoy
            </label>
            <p className="mb-3 text-xs text-neutral-500">
              Optional — select any that apply
            </p>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ACTIVITIES.map((activity) => {
                const isSelected = activitiesSelected.has(activity);
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
            <label className="mb-2 block text-sm font-bold text-neutral-800">
              When are you usually free?
            </label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="mb-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
              aria-invalid={!!errors.availability}
            >
              {AVAILABILITY_OPTIONS.map(({ value, label }) => (
                <option key={value || "empty"} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.activities && (
              <p className="mb-2 text-sm text-red-600">{errors.activities}</p>
            )}
            {errors.availability && (
              <p className="mb-2 text-sm text-red-600">{errors.availability}</p>
            )}
          </div>

          {/* Part 2: What you don't */}
          <div className="mb-10">
            <label className="mb-2 block text-sm font-bold text-neutral-800">
              What frustrates you about networking events?
            </label>
            <p className="mb-3 text-xs text-neutral-500">
              Optional — select any that apply
            </p>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {NETWORKING_PAIN_OPTIONS.map((option) => {
                const isSelected = networkingPainSelected.has(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleNetworkingPain(option)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30 ${
                      isSelected
                        ? "border-[#F89B37] bg-[#FFEEDD] text-neutral-800"
                        : "border-neutral-300 bg-neutral-50 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <textarea
              value={networkingPain}
              onChange={(e) => setNetworkingPain(e.target.value)}
              placeholder="Anything else? (optional)"
              rows={2}
              className="mb-8 w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
            />
            <label className="mb-2 block text-sm font-bold text-neutral-800">
              Where do you struggle most in your career?
            </label>
            <p className="mb-3 text-xs text-neutral-500">
              Optional — select any that apply
            </p>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {STRUGGLE_OPTIONS.map((option) => {
                const isSelected = struggleSelected.has(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleStruggle(option)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30 ${
                      isSelected
                        ? "border-[#F89B37] bg-[#FFEEDD] text-neutral-800"
                        : "border-neutral-300 bg-neutral-50 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <textarea
              value={struggleOther}
              onChange={(e) => setStruggleOther(e.target.value)}
              placeholder="Anything else? (optional)"
              rows={2}
              className="mb-2 w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
            />
          </div>

          {/* Part 3: What you want */}
          <div className="mb-8">
            <label className="mb-2 block text-sm font-bold text-neutral-800">
              Services or features you’d want
            </label>
            <p className="mb-3 text-xs text-neutral-500">
              Optional — select any that appeal to you
            </p>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {FEATURE_OPTIONS.map((option) => {
                const isSelected = featureSelected.has(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleFeature(option)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30 ${
                      isSelected
                        ? "border-[#F89B37] bg-[#FFEEDD] text-neutral-800"
                        : "border-neutral-300 bg-neutral-50 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <textarea
              value={featureOther}
              onChange={(e) => setFeatureOther(e.target.value)}
              placeholder="Something else you'd love to see? (optional)"
              rows={2}
              className="w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#F89B37] focus:outline-none focus:ring-2 focus:ring-[#F89B37]/30"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#F89B37] to-[#F4529B] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:from-[#F89B37] hover:to-[#dc2626] focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? "Submitting…" : "Submit survey"}
            </button>
            <Link
              href="/"
              className="text-sm font-medium text-neutral-600 underline underline-offset-2 hover:text-neutral-800"
            >
              Skip and go home
            </Link>
          </div>
        </form>
      </div>

      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thanks for sharing"
        message="Your input helps us build something you'll actually love. 
        We look forward to building it with you."
        primaryAction={{ label: "Back to home", href: "/" }}
      />
    </section>
  );
}
