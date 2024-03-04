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
		image: FilmIcon,
		search: {},
	},
	{
		id: 2,
		title: "Favourites",
		image: Favourites,
		section: "favourites",
		search: {
			section: "favourites",
		},
	},
	{
		id: 3,
		title: "Trending",
		image: TrendingIcon,
		section: "trending",
		search: {
			section: "trending",
		},
	},
	{
		id: 4,
		title: "Coming soon",
		image: ComingSoonIcon,
		section: "coming-soon",
		search: {
			section: "coming-soon",
		},
	},
];

export const links_section_2 = [
	{
		id: 1,
		title: "Community",
		image: CommunityIcon,
		section: "community",
		search: {
			section: "community",
		},
	},
	{
		id: 2,
		title: "Social",
		image: SocialIcon,
		section: "social",
		search: {
			section: "social",
		},
	},
];

export const links_section_3 = [
	{
		id: 1,
		title: "Settings",
		image: SettingsIcon,
		section: "settings",
		search: {
			section: "settings",
		},
	},
	{
		id: 2,
		title: "Logout",
		image: LogoutIcon,
		to: "/logout",
		search: {},
	},
];
