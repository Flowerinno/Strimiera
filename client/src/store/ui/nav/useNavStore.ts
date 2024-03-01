import { create } from "zustand";

type State = {
	isOpen: boolean;
};

type Actions = {
	handleNav: () => void;
};

export const useNavStore = create<State & Actions>((set) => ({
	isOpen: true,
	handleNav: () =>
		set((state) => ({
			isOpen: !state.isOpen,
		})),
}));
