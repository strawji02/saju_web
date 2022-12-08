export interface StepTitleType {
  questionText: string;
  description?: string;
}

export type Gender = '남자' | '여자';

export interface StepInputFormType {
  name: string;
  gender: Gender | undefined;
  birthPlace: string;
  birthDate: Date;
  birthTime: Date;
  calendar: boolean;
  intercalation: boolean;
  termsOfService: boolean;
}

export type Dosi = { value: string; label: string }[];
