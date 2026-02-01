
const LIMITS = {
  name: 200,
  email: 320,
  howDidYouHear: 500,
  availabilityValue: 100,
  freeText: 2000,
  activityItem: 100,
} as const;

// Prevent XSS attacks

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

export function escapeHtml(str: string): string {
  return String(str).replace(/[&<>"'/]/g, (ch) => HTML_ENTITIES[ch] ?? ch);
}

export function sanitizeForDisplay(
  str: string,
  maxLength: number = LIMITS.freeText
): string {
  const trimmed = String(str).trim();
  const truncated =
    trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
  return escapeHtml(truncated);
}

// Prevent SQL injection

export function sanitizeForDb(
  str: string,
  maxLength: number = LIMITS.freeText
): string {
  const noNulls = String(str).replace(/\0/g, "");
  const trimmed = noNulls.trim();
  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
}

export function sanitizeArrayForDb(
  arr: string[],
  itemMaxLength: number = LIMITS.activityItem
): string[] {
  return arr
    .map((s) => sanitizeForDb(s, itemMaxLength))
    .filter((s) => s.length > 0);
}

// Form validation

export type ValidationResult = {
  valid: boolean;
  errors: Record<string, string>;
};

function required(value: unknown, fieldName: string): string | null {
  const s = typeof value === "string" ? value.trim() : "";
  return s.length === 0 ? `${fieldName} is required` : null;
}

function maxLength(
  value: string,
  fieldName: string,
  max: number
): string | null {
  const trimmed = String(value).trim();
  return trimmed.length > max
    ? `${fieldName} must be ${max} characters or less`
    : null;
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function email(value: string): string | null {
  const trimmed = String(value).trim();
  if (trimmed.length === 0) return "Email is required";
  if (trimmed.length > LIMITS.email) return `Email must be ${LIMITS.email} characters or less`;
  return EMAIL_REGEX.test(trimmed) ? null : "Please enter a valid email address";
}

export type WaitlistFormData = {
  name: string;
  email: string;
  activities: string[];
  availability: string;
  howDidYouHear: string;
};


// Component validation & sanitization
export function validateWaitlistForm(data: WaitlistFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const nameError = required(data.name, "Name") ?? maxLength(data.name, "Name", LIMITS.name);
  if (nameError) errors.name = nameError;

  const emailError = email(data.email);
  if (emailError) errors.email = emailError;

  if (Array.isArray(data.activities)) {
    const invalid = data.activities.some(
      (a) => typeof a !== "string" || a.length > LIMITS.activityItem
    );
    if (invalid) errors.activities = "Invalid activities selection";
  }

  if (typeof data.availability === "string" && data.availability.length > LIMITS.availabilityValue) {
    errors.availability = `Availability must be ${LIMITS.availabilityValue} characters or less`;
  }

  const howError = maxLength(
    data.howDidYouHear ?? "",
    "How did you hear about us",
    LIMITS.howDidYouHear
  );
  if (howError) errors.howDidYouHear = howError;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export type SurveyFormData = {
  networkingPainSelected?: string[];
  networkingPain?: string;
  careerDevPain?: string;
  struggleSelected?: string[];
  struggleOther?: string;
  featureSelected?: string[];
  featureOther?: string;
};


export function validateSurveyForm(data: SurveyFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (data.networkingPain != null) {
    const e = maxLength(data.networkingPain, "Networking feedback", LIMITS.freeText);
    if (e) errors.networkingPain = e;
  }
  if (data.careerDevPain != null) {
    const e = maxLength(data.careerDevPain, "Career development feedback", LIMITS.freeText);
    if (e) errors.careerDevPain = e;
  }
  if (data.struggleOther != null) {
    const e = maxLength(data.struggleOther, "Career struggle details", LIMITS.freeText);
    if (e) errors.struggleOther = e;
  }
  if (data.featureOther != null) {
    const e = maxLength(data.featureOther, "Feature ideas", LIMITS.freeText);
    if (e) errors.featureOther = e;
  }

  if (Array.isArray(data.networkingPainSelected)) {
    const invalid = data.networkingPainSelected.some(
      (s) => typeof s !== "string" || s.length > LIMITS.activityItem
    );
    if (invalid) errors.networkingPainSelected = "Invalid selection";
  }
  if (Array.isArray(data.struggleSelected)) {
    const invalid = data.struggleSelected.some(
      (s) => typeof s !== "string" || s.length > LIMITS.activityItem
    );
    if (invalid) errors.struggleSelected = "Invalid selection";
  }
  if (Array.isArray(data.featureSelected)) {
    const invalid = data.featureSelected.some(
      (s) => typeof s !== "string" || s.length > LIMITS.activityItem
    );
    if (invalid) errors.featureSelected = "Invalid selection";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeWaitlistPayload(data: WaitlistFormData): WaitlistFormData {
  return {
    name: sanitizeForDb(data.name, LIMITS.name),
    email: sanitizeForDb(data.email, LIMITS.email).toLowerCase(),
    activities: sanitizeArrayForDb(data.activities ?? [], LIMITS.activityItem),
    availability: sanitizeForDb(data.availability ?? "", LIMITS.availabilityValue),
    howDidYouHear: sanitizeForDb(data.howDidYouHear ?? "", LIMITS.howDidYouHear),
  };
}

export function sanitizeSurveyPayload(data: SurveyFormData): SurveyFormData {
  return {
    networkingPainSelected: Array.isArray(data.networkingPainSelected)
      ? sanitizeArrayForDb(data.networkingPainSelected, LIMITS.activityItem)
      : undefined,
    networkingPain: data.networkingPain != null ? sanitizeForDb(data.networkingPain, LIMITS.freeText) : undefined,
    careerDevPain: data.careerDevPain != null ? sanitizeForDb(data.careerDevPain, LIMITS.freeText) : undefined,
    struggleSelected: Array.isArray(data.struggleSelected)
      ? sanitizeArrayForDb(data.struggleSelected, LIMITS.activityItem)
      : undefined,
    struggleOther: data.struggleOther != null ? sanitizeForDb(data.struggleOther, LIMITS.freeText) : undefined,
    featureSelected: Array.isArray(data.featureSelected)
      ? sanitizeArrayForDb(data.featureSelected, LIMITS.activityItem)
      : undefined,
    featureOther: data.featureOther != null ? sanitizeForDb(data.featureOther, LIMITS.freeText) : undefined,
  };
}
