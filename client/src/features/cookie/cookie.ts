import Cookies from "js-cookie";

type SetCookie = {
	name?: string;
	value: string;
	httpOnly?: boolean;
};

export const setCookie = ({
	name = "strimiera_access_token",
	value = "",
	httpOnly = false,
}: SetCookie) => {
	Cookies.set(name, value, {
		expires: 7,
		httpOnly,
	});
};

export const getToken = () => {
	return Cookies.get("strimiera_access_token");
};

export const removeCookie = () => {
	Cookies.remove("strimiera_access_token");
	Cookies.remove("strimiera_user");
};

export const parseCookie = (name: string) => {
	try {
		return JSON.parse(Cookies.get(name) as string);
	} catch (error) {
		return null;
	}
};
