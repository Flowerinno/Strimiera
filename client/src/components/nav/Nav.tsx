import { links_section_1, links_section_2, links_section_3 } from "./data";
import { useNavStore } from "../../store";
import NavIcon from "../../assets/svg/Nav.svg";
import { Image } from "../ui";
import { Link, useNavigate } from "@tanstack/react-router";
import { Each, ROUTES } from "../../common";

import Logo from "../../assets/images/Logo.png";

export const Nav = () => {
	const navigate = useNavigate();
	const isOpen = useNavStore((state) => state.isOpen);
	const handleNav = useNavStore((state) => state.handleNav);

	if (!isOpen) {
		return (
			<Image
				src={NavIcon}
				alt="Nav icon"
				className="w-12 h-12 cursor-pointer z-20 rotate-180 transition-all duration-200 ease-out"
				onClick={handleNav}
			/>
		);
	}

	return (
		<nav
			className="relative flex flex-col max-w-96 min-w-56 w-3/12 transition-all duration-200 ease-out bg-[#21201E]"
			style={{
				transform: isOpen ? "" : "translateX(-100%)",
			}}
		>
			<Image
				src={NavIcon}
				alt="Nav icon"
				className="absolute top-3 right-0 translate-x-12 w-12 h-12 cursor-pointer z-20"
				onClick={handleNav}
			/>
			<div className="flex items-center justify-center mt-5 object-contain">
				<Image
					src={Logo}
					alt="Strimiera Logo icon"
					className="self-start w-36 cursor-pointer"
					onClick={() =>
						navigate({
							to: ROUTES.profile,
						})
					}
				/>
			</div>
			<ul className="flex flex-col h-2/6 items-center justify-center gap-5 text-white">
				<Each
					of={links_section_1}
					render={(link) => (
						<li
							key={link.id}
							className="flex flex-row items-center justify-center w-36  gap-3 min-w-0 text-center"
						>
							<Image src={link.image} alt={link.title} />
							<Link className="flex-1 text-start" to={link.url}>
								{link.title}
							</Link>
						</li>
					)}
				/>
			</ul>
			<ul className="flex flex-col h-2/6 items-center  justify-center gap-5 text-white">
				<Each
					of={links_section_2}
					render={(link) => (
						<li
							key={link.id}
							className="flex flex-row items-center justify-center w-36  gap-3 min-w-0 text-center"
						>
							<Image src={link.image} alt={link.title} />
							<Link className="flex-1 text-start" to={link.url}>
								{link.title}
							</Link>
						</li>
					)}
				/>
			</ul>
			<ul className="flex flex-col items-center justify-center gap-5 p-2 text-white">
				<Each
					of={links_section_3}
					render={(link) => (
						<li
							key={link.id}
							className="flex flex-row items-center justify-center w-36  gap-3 min-w-0 text-center"
						>
							<Image src={link.image} alt={link.title} />
							<Link className="flex-1 text-start" to={link.url}>
								{link.title}
							</Link>
						</li>
					)}
				/>
			</ul>
		</nav>
	);
};
