import { ResultType, StepInputFormType } from './../components/types/StepInput';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserResultState {
  error: boolean | undefined;
  userData: StepInputFormType | undefined;
  setError: () => void;
  removeError: () => void;
  setUserData: (data: StepInputFormType) => void;
  removeUserData: () => void;
}

export const useUserResultState = create<UserResultState>()(
  devtools(
    persist(
      (set) => ({
        error: undefined,
        userData: undefined,
        setError: () => set(() => ({ error: true })),
        removeError: () => set(() => ({ error: undefined })),
        setUserData: (data) => set(() => ({ userData: data })),
        removeUserData: () => set(() => ({ userData: undefined })),
      }),
      { name: 'user-store' }
    )
  )
);

export interface ShareParamData {
  ilju: number | undefined;
  username: string | undefined;
}
interface ShareParamState extends ShareParamData {
  setData: (data: ShareParamData) => void;
  removeData: () => void;
}

export const useShareParamState = create<ShareParamState>()(
  devtools(
    (set) => ({
      ilju: undefined,
      username: undefined,
      setData: (data) => set(() => ({ ...data })),
      removeData: () => set(() => ({ ilju: undefined, username: undefined })),
    }),
    { name: 'share-param-store' }
  )
);
