export interface StepTitleType {
  questionText: string;
  description?: string;
  step: number;
}

export type Gender = '남자' | '여자';

export interface StepInputFormType {
  name: string;
  gender: Gender | undefined;
  birthPlace: string;
  birthDate: string;
  birthTime: string;
  calendar: boolean;
  intercalation: boolean;
  termsOfService: boolean;
}

export type Dosi = { value: string; label: string }[];

export interface ResultParams {
  gender: string;
  birthplace: string;
  calendar: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  min: number;
  intercalation: string | null;
  target?: number;
}

export interface ResultType {
  no: string;
  solar: string;
  query: string;
  lunar: string;
  lunar_ss: string;
  time: string;
  day: string;
  month: string;
  year: string;
  time_kr: string;
  day_kr: string;
  month_kr: string;
  year_kr: string;
  temp: string;
  res_str: string;
  image: string;
  advice: string;
  s_no: string;
  negative: string;
  positive: string;
  relation_score: string;
  relation_reverse_score: string;
}
