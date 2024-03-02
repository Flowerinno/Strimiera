import Cookies from "js-cookie";

export const setCookie = (value: string, httpOnly: boolean = false) => {
	Cookies.set("strimiera_access_token", value, {
		expires: 7,
		httpOnly,
	});
};

export const getCookie = () => {
	return Cookies.get("strimiera_access_token");
};

export const removeCookie = () => {
	Cookies.remove("strimiera_access_token");
};
