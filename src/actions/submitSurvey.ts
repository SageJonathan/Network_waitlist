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
      ? { networking_selected: data.networkingPainSelected }
      : {}),
    networking_other: data.networkingPain ?? null,
    ...(data.struggleSelected?.length
      ? { career_selected: data.struggleSelected }
      : {}),
    career_other: data.struggleOther ?? data.careerDevPain ?? null,
    ...(data.featureSelected?.length
      ? { feature_selected: data.featureSelected }
      : {}),
    feature_other: data.featureOther ?? null,
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
