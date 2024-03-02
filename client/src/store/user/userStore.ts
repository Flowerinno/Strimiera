import { create } from "zustand";

type State = {
	token: null | string;
	name: null | string;
	email: null | string;
	id: null | string;
};

type Actions = {
	setToken: (token: string | null) => void;
	resetToken: () => void;
	getToken: () => null | string;
};

export const useUserStore = create<State & Actions>((set, get) => ({
	token: null,
	name: null,
	email: null,
	id: null,
	setToken: (token) =>
		set((state) => ({
			...state,
			token,
		})),
	resetToken: () => set((state) => ({ ...state, token: null })),
	getToken: () => get().token,
}));
