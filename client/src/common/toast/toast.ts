import { toast } from "react-toastify";

export const TOAST = {
	sucess: (message: string) => {
		toast.success(message, {
			position: "top-right",
		});
	},
	error: (message: string) => {
		toast.error(message, {
			position: "top-right",
		});
	},
};
