import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Name = string;
type Gender = number;
type Birthplace = string;
type Calendar = 'lunar' | 'solar';
type Birth = Date;
type Intercalation = boolean;

interface UserState {
  name: Name;
  setName: (name: Name) => void;
  gender: Gender; //1 or 2
  setGender: (gender: Gender) => void;
  birthplace: Birthplace;
  setBirthplace: (birthplace: Birthplace) => void;
  calendar: Calendar;
  setCalendar: (calendar: Calendar) => void;
  birth: Birth;
  setBirth: (birth: Birth) => void;
  intercalation: Intercalation;
  setIntercalation: (intercalation: Intercalation) => void;
}

export const useUserState = create<UserState>()(
  devtools(
    persist((set) => ({
      name: '',
      setName: (name) => set((state) => ({ name })),
      gender: 1,
      setGender: (gender) => set((state) => ({ gender })),
      birthplace: '',
      setBirthplace: (birthplace) => set((state) => ({ birthplace })),
      calendar: 'solar',
      setCalendar: (calendar) => set((state) => ({ calendar })),
      birth: new Date(),
      setBirth: (birth) => set((state) => ({ birth })),
      intercalation: false,
      setIntercalation: (intercalation) =>
        set((state) =>
          state.calendar === 'lunar'
            ? { intercalation }
            : { intercalation: false }
        ),
    }))
  )
);
