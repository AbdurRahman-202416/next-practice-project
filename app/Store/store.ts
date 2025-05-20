import { create } from "zustand";

interface User {
  id:number;
  firstName: string;
  phoneStart: string;
  phoneMid: string;
  emailId: string;
}

interface UserStore {
  users: User[] | null;
  addUser: (user: User) => void;
  removeAllUsers: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => {
    set((state) => ({ users: [...(state.users ?? []), user] }));
  },
  removeAllUsers: () => set({ users: [] }),
}));


export default useUserStore;
