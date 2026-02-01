"use server";

import type { WaitlistInsert } from "@/types/db";
import type { WaitlistFormData } from "@/types/forms";
import { supabaseAdmin } from "@/lib/supabase-server";

export type SubmitWaitlistResult =
  | { success: true }
  | { success: false; error: string };

function toWaitlistRow(data: WaitlistFormData): WaitlistInsert {
  return {
    name: data.name,
    email: data.email,
    ...(data.activities?.length ? { activities: data.activities } : {}),
    availability: data.availability ?? "",
    funnel: data.howDidYouHear ?? "",
  };
}

export async function submitWaitlistEntry(
  data: WaitlistFormData
): Promise<SubmitWaitlistResult> {
  try {
    const row = toWaitlistRow(data);
    const { error } = await supabaseAdmin
      .from("prelaunch_waitlist")
      .insert(row);

    if (error) {
      console.error("[submitWaitlistEntry]", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("[submitWaitlistEntry]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to join waitlist",
    };
  }
}
