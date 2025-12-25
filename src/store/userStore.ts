import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  password: string;
}


interface UserStore {
  user: User | null;
  isLoggedIn: boolean;
  notFirstLogin: boolean;
  setNotFirstLogin: (value: boolean) => void;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoggedIn: false,
  notFirstLogin: false,
  setNotFirstLogin: (value) => set({ notFirstLogin: value }),
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));
