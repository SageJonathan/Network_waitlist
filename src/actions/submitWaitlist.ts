"use server";

import type { WaitlistInsert } from "@/types/db";
import type { WaitlistFormData } from "@/types/forms";
import { supabaseAdmin } from "@/lib/supabase-server";

export type SubmitWaitlistResult =
  | { success: true; id: string }
  | { success: false; error: string };

function toWaitlistRow(data: WaitlistFormData): Omit<WaitlistInsert, "id"> {
  return {
    name: data.name,
    email: data.email,
    activities: data.activities,
    availability: data.availability,
    how_did_you_hear: data.howDidYouHear || undefined,
  };
}

export async function submitWaitlistEntry(
  data: WaitlistFormData
): Promise<SubmitWaitlistResult> {
  try {
    const row = toWaitlistRow(data);
    const { data: inserted, error } = await supabaseAdmin
      .from("prelaunch_waitlist")
      .insert(row)
      .select("id")
      .single();

    if (error) {
      console.error("[submitWaitlistEntry]", error);
      return { success: false, error: error.message };
    }

    const id = inserted?.id;
    if (id == null) {
      return { success: false, error: "No id returned from insert" };
    }

    return { success: true, id: String(id) };
  } catch (err) {
    console.error("[submitWaitlistEntry]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to join waitlist",
    };
  }
}
