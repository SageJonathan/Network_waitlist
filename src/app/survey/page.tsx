import { Suspense } from "react";

import Survey from "@/components/forms/survey";

export default function SurveyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-[#FCF9ED]">
          <p className="text-neutral-500">Loading…</p>
        </div>
      }
    >
      <Survey />
    </Suspense>
  );
}
