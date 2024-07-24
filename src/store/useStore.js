import { set } from "firebase/database";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export let useUserStore = create(
  persist(
    immer((set) => ({
      user: {},
      isloggedin: false,
      login: (user) =>
        set((state) => {
          console.log(user);
          state.user = user;
          state.isloggedin = true;
        }),
      logout: (user) =>
        set((state) => {
          console.log(user);
          state.user = {};
          state.isloggedin = false;
        }),
    })),
    {
        name:'userStore',
        storage: createJSONStorage(() => sessionStorage)
    }
  )
);
