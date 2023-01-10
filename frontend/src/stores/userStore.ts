import create from "zustand";

interface setUser {
  auth: boolean;
  user?: UserData;
}

interface userState {
  user: UserData;
  setUserStore: (data: setUser) => void;
  auth: boolean;
}

export const useUserStore = create<userState>((set) => ({
  user: {
    username: "",
    password: "",
    displayUsername: false,
  },
  setUserStore: (data) => {
    set(() => ({
      user: data.user,
      auth: data.auth,
    }));
  },
  auth: false,
}));
