"use server";

import type { SurveyInsert } from "@/types/db";
import type { SurveyFormData } from "@/types/forms";
import { supabaseAdmin } from "@/lib/supabase-server";

export type SubmitSurveyResult =
  | { success: true }
  | { success: false; error: string };

function toSurveyRow(data: SurveyFormData): SurveyInsert {
  return {
    ...(data.networkingPainSelected?.length
      ? { networking_pain_selected: data.networkingPainSelected }
      : {}),
    ...(data.networkingPain != null
      ? { networking_pain: data.networkingPain }
      : {}),
    ...(data.careerDevPain != null
      ? { career_dev_pain: data.careerDevPain }
      : {}),
    ...(data.struggleSelected?.length
      ? { struggle_selected: data.struggleSelected }
      : {}),
    ...(data.struggleOther != null ? { struggle_other: data.struggleOther } : {}),
    ...(data.featureSelected?.length
      ? { feature_selected: data.featureSelected }
      : {}),
    ...(data.featureOther != null ? { feature_other: data.featureOther } : {}),
  };
}

export async function submitSurveyResponses(
  data: SurveyFormData
): Promise<SubmitSurveyResult> {
  try {
    const row = toSurveyRow(data);
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
