export interface StepTitleType {
  questionText: string;
  description?: string;
}

export type RenderInputType = { form: React.ReactNode; title: StepTitleType };

export type Gender = '남자' | '여자';
