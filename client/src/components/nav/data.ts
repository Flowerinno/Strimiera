import FilmIcon from "../../assets/images/nav/film.png";
import Favourites from "../../assets/images/nav/heart.png";
import TrendingIcon from "../../assets/images/nav/trending-up.png";
import ComingSoonIcon from "../../assets/images/nav/calendar.png";
import CommunityIcon from "../../assets/images/nav/users.png";
import SocialIcon from "../../assets/images/nav/message-circle.png";
import SettingsIcon from "../../assets/images/nav/sliders.png";
import LogoutIcon from "../../assets/images/nav/log-out.png";

export const links_section_1 = [
	{
		id: 1,
		title: "Home",
		url: "/",
		image: FilmIcon,
	},
	{
		id: 2,
		title: "Favourites",
		url: "/favourites",
		image: Favourites,
	},
	{
		id: 3,
		title: "Trending",
		url: "/trending",
		image: TrendingIcon,
	},
	{
		id: 4,
		title: "Coming soon",
		url: "/coming",
		image: ComingSoonIcon,
	},
];

export const links_section_2 = [
	{
		id: 1,
		title: "Community",
		url: "/community",
		image: CommunityIcon,
	},
	{
		id: 2,
		title: "Social",
		url: "/social",
		image: SocialIcon,
	},
];

export const links_section_3 = [
	{
		id: 1,
		title: "Settings",
		url: "/settings",
		image: SettingsIcon,
	},
	{
		id: 2,
		title: "Logout",
		url: "/logout",
		image: LogoutIcon,
	},
];
