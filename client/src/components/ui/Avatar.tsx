import DefaultAvatar from "../../assets/images/nav/users.png";
import { Image } from "./Image";

interface AvatarProps extends React.HTMLProps<HTMLImageElement> {
	name: string;
	src?: string;
}

export const Avatar = ({ src }: AvatarProps) => {
	return (
		<Image
			src={src ?? DefaultAvatar}
			alt="User avatar"
			className="rounded-full border-2 color-black border-purple-500 bg-purple p-2 cursor-pointer hover:outline-dashed outline-white"
		/>
	);
};
