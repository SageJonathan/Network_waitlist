

export type WaitlistFormData = {
  name: string;
  email: string;
  activities: string[];
  availability: string;
  howDidYouHear: string;
};

export type SurveyFormData = {
  networkingPainSelected?: string[];
  networkingPain?: string;
  careerDevPain?: string;
  struggleSelected?: string[];
  struggleOther?: string;
  featureSelected?: string[];
  featureOther?: string;
};
