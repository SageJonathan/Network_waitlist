import Form from "@/components/forms/waitlist";
import WaitlistHero from "@/components/forms/waitlisthero";
import { Suspense } from "react";

export default function Waitlist() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#FCF9ED]">
          <p className="text-neutral-500">Loading…</p>
        </div>
      }
    >
      <div>
        <WaitlistHero />
        <Form />
      </div>
    </Suspense>
  );
}