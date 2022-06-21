import create from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

export type Name = string;
export type Gender = number;
export type Birthplace = string;
export type Calendar = 'lunar' | 'solar';
export type BirthDate = Date;
export type Intercalation = boolean;

export interface Birth {
  birthplace: Birthplace;
  calendar: Calendar;
  birthDay: BirthDate;
  birthHour: BirthDate;
  intercalation: Intercalation;
}
interface UserState {
  name: Name;
  setName: (name: Name) => void;
  gender: Gender; //1 or 2
  setGender: (gender: Gender) => void;
  birth: Birth;
  setBirth: (birth: Birth) => void;
}

export interface SajuData {
  lunar: string;
  lunar_ss: string;
  solar: string;
  year: string;
  month: string;
  day: string;
  time: string;
}
interface SajuState {
  data: SajuData;
  setSaju: (data: SajuData) => void;
}

export const useUserState = create<UserState>()(
  devtools(
    persist(
      subscribeWithSelector((set) => ({
        name: '',
        setName: (name) => set(() => ({ name })),
        gender: 1,
        setGender: (gender) => set(() => ({ gender })),
        birth: {
          birthplace: '',
          calendar: 'solar',
          birthDay: new Date(),
          birthHour: new Date(),
          intercalation: false,
        },
        setBirth: (birth) => set(() => ({ birth })),
      })),
      {
        name: 'user-storage',
        getStorage: () => sessionStorage,
      }
    )
  )
);

export const useSajuState = create<SajuState>()(
  devtools(
    persist(
      subscribeWithSelector((set) => ({
        data: {
          lunar: '',
          lunar_ss: '',
          solar: '',
          year: '',
          month: '',
          day: '',
          time: '',
        },
        setSaju: (data) => set(() => ({ data })),
      })),
      {
        name: 'saju-storage',
        getStorage: () => sessionStorage,
      }
    )
  )
);
