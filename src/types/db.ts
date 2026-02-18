
export type WaitlistInsert = {
  name: string;
  email: string;
  city: string;
  funnel?: string;
};

export type SurveyInsert = {
  networking_selected?: string[];
  networking_other?: string | null;
  career_selected?: string[];
  career_other?: string | null;
  feature_selected?: string[];
  feature_other?: string | null;

  industry?: string | null;
  job_title?: string | null;
  seniority?: string | null;
  
  activities?: string[];
  availability?: string | null;
};