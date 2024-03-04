import { useEffect, useRef, useState } from "react";
import DefaultAvatar from "../../assets/images/nav/users.png";
import { useUserStore } from "../../store";
import { Image, Popup } from ".";

interface AvatarProps extends React.HTMLProps<HTMLImageElement> {
	src?: string;
}

export const Avatar = ({ src }: AvatarProps) => {
	const name = useUserStore((state) => state.name);
	const ref = useRef<HTMLDivElement | null>(null);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsHovered(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return (
		<div className="relative" ref={ref}>
			<Image
				src={src ?? DefaultAvatar}
				alt="User avatar"
				className="rounded-full border-2 color-black border-purple-500 bg-purple p-2 cursor-pointer hover:outline-dashed outline-white transition-all duration-200 ease-in"
				onClick={() => setIsHovered(!isHovered)}
			/>
			{isHovered && (
				<Popup
					title={name ?? "Name"}
					links={[
						{
							to: "/profile",
							text: "Settings",
							search: { section: "settings" },
						},
						{ to: "/logout", text: "Logout", search: {} },
					]}
					className="absolute bottom-0 translate-y-36 right-0 p-5 min-w-40 rounded-md shadow-md transition-all duration-200 ease-in bg-purple z-25 text-white flex flex-col gap-2"
				/>
			)}
		</div>
	);
};
