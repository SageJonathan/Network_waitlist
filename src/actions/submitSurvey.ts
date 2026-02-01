"use server";

import type { SurveyInsert } from "@/types/db";
import type { SurveyFormData } from "@/types/forms";
import { supabaseAdmin } from "@/lib/supabase-server";

export type SubmitSurveyResult =
  | { success: true }
  | { success: false; error: string };

type SubmitSurveyPayload = SurveyFormData & { waitlist_id?: string };

function toSurveyRow(payload: SubmitSurveyPayload): SurveyInsert {
  return {
    ...(payload.waitlist_id != null && { waitlist_id: payload.waitlist_id }),
    networking_pain_selected: payload.networkingPainSelected ?? [],
    networking_pain: payload.networkingPain ?? null,
    career_dev_pain: payload.careerDevPain ?? null,
    struggle_selected: payload.struggleSelected ?? [],
    struggle_other: payload.struggleOther ?? null,
    feature_selected: payload.featureSelected ?? [],
    feature_other: payload.featureOther ?? null,
  };
}

export async function submitSurveyResponses(
  payload: SubmitSurveyPayload
): Promise<SubmitSurveyResult> {
  try {
    const row = toSurveyRow(payload);
    const { error } = await supabaseAdmin.from("prelaunch_survey").insert(row);

    if (error) {
      console.error("[submitSurveyResponses]", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("[submitSurveyResponses]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to submit survey",
    };
  }
}
