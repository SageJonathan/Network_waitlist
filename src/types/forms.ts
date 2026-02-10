

export type WaitlistFormData = {
  name: string;
  email: string;
  howDidYouHear: string;
};

export type SurveyFormData = {
  activities?: string[];
  availability?: string;
  networkingPainSelected?: string[];
  networkingPain?: string;
  careerDevPain?: string;
  struggleSelected?: string[];
  struggleOther?: string;
  featureSelected?: string[];
  featureOther?: string;
};
