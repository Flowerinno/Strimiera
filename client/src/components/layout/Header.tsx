import { Avatar } from "../ui/Avatar";
import { Text } from "../ui/Text";

export const Header = () => {
	return (
		<div className="absolute top-0 p-2 z-50 w-full flex flex-row justify-around backdrop-blur-sm">
			<div className="w-9/12 sm:flex flex-row gap-10 items-center text-white font-bold hidden ">
				<Text text="Movies" className="cursor-pointer hover:scale-105" />
				<Text text="Shows" className="cursor-pointer hover:scale-105" />
				<Text text="Documentaries" className="cursor-pointer hover:scale-105" />
			</div>
			<Avatar name="Sasa" />
		</div>
	);
};
