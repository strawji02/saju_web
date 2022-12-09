import { ResultType, StepInputFormType } from './../components/types/StepInput';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserResultState {
  result: ResultType | undefined;
  userData: StepInputFormType | undefined;
  setResult: (data: ResultType) => void;
  removeResult: () => void;
  setUserData: (data: StepInputFormType) => void;
  removeUserData: () => void;
}

export const useUserResultState = create<UserResultState>()(
  devtools(
    persist((set) => ({
      result: undefined,
      userData: undefined,
      setResult: (data) => set(() => ({ result: data })),
      removeResult: () => set(() => ({ result: undefined })),
      setUserData: (data) => set(() => ({ userData: data })),
      removeUserData: () => set(() => ({ userData: undefined })),
    }))
  )
);
