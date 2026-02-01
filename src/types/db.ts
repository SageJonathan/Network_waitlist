
export type WaitlistInsert = {
  id: number;
  name: string;
  email: string;
  activities?: string[];
  availability?: string;
  how_did_you_hear?: string;
};

export type SurveyInsert = {
  networking_pain_selected?: string[];
  networking_pain?: string | null;
  career_dev_pain?: string | null;
  struggle_selected?: string[];
  struggle_other?: string | null;
  feature_selected?: string[];
  feature_other?: string | null;
};
