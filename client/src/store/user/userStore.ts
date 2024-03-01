import { create } from "zustand";

type State = {
	token: null | string;
};

type Actions = {
	setToken: (token: string | null) => void;
	resetToken: () => void;
	getToken: () => null | string;
};

export const useUserStore = create<State & Actions>((set, get) => ({
	token: null,
	setToken: (token) =>
		set(() => ({
			token,
		})),
	resetToken: () => set({ token: null }),
	getToken: () => get().token,
}));
