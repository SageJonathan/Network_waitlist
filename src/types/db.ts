
export type WaitlistInsert = {
  name: string;
  email: string;
  activities?: string[];
  availability?: string;
  funnel?: string;
};

export type SurveyInsert = {
  networking_selected?: string[];
  networking_other?: string | null;
  career_selected?: string[];
  career_other?: string | null;
  feature_selected?: string[];
  feature_other?: string | null;
};