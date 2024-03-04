import { links_section_1, links_section_2, links_section_3 } from "./data";
import { useNavStore } from "../../store";
import { Image } from "../ui";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Each, ROUTES } from "../../common";

import Logo from "../../assets/images/Logo.png";

export const Nav = () => {
	const params = useSearch({
		strict: false,
	}) as Record<"section", string>;
	const navigate = useNavigate();
	const isOpen = useNavStore((state) => state.isOpen);
	const handleNav = useNavStore((state) => state.handleNav);

	const containerStyles = isOpen
		? "z-15 relative flex flex-col max-w-96 min-w-56 w-3/12 transition-all duration-200 ease-out bg-[#21201E] cursor-pointer"
		: "z-15 relative flex flex-col max-w-16 min-w-16 w-16 p-2 transition-all duration-200 ease-out bg-[#21201E] cursor-pointer";

	const handleNavigate = (search: Record<string, string> | {}) => {
		navigate({
			search: { ...search },
			replace: true,
		});
	};

	return (
		<nav className={containerStyles}>
			<div
				className="flex items-center justify-center mt-5 object-contain"
				onClick={handleNav}
			>
				<Image
					src={Logo}
					alt="Strimiera Logo icon"
					onDrag={() => false}
					className={`self-start ${isOpen ? "w-36" : "w-12"} cursor-pointer select-none pointer-events-none`}
				/>
			</div>
			<div className="flex flex-col justify-evenly max-h-screen h-screen">
				<ul className="flex flex-col h-1/6 items-center justify-center gap-5 text-white">
					<Each
						of={links_section_1}
						render={(link) => (
							<li
								key={link.id}
								className="flex flex-row items-center justify-center w-36  gap-3 min-w-0 text-center"
								style={{
									textDecoration:
										(params?.section && params?.section === link?.section) ||
										(!params?.section && link?.title === "Home")
											? "underline"
											: "none",
									textUnderlineOffset: "5px",
								}}
							>
								<Image
									src={link.image}
									alt={link.title}
									onClick={() => handleNavigate(link.search)}
									className="cursor-pointer"
								/>
								{isOpen && (
									<Link
										className="flex-1 text-start"
										to={ROUTES.profile}
										search={link.search}
									>
										{link.title}
									</Link>
								)}
							</li>
						)}
					/>
				</ul>
				<ul className="flex flex-col h-1/6 items-center  justify-center gap-5 text-white">
					<Each
						of={links_section_2}
						render={(link) => (
							<li
								key={link.id}
								className="flex flex-row items-center justify-center w-36  gap-3 min-w-0 text-center"
								style={{
									textDecoration:
										params?.section && params?.section === link?.section
											? "underline"
											: "none",
									textUnderlineOffset: "5px",
								}}
							>
								<Image
									onClick={() => handleNavigate(link.search)}
									src={link.image}
									alt={link.title}
									className="cursor-pointer"
									style={{}}
								/>
								{isOpen && (
									<Link
										className="flex-1 text-start"
										to={ROUTES.profile}
										search={link.search}
									>
										{link.title}
									</Link>
								)}
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
								style={{
									textDecoration:
										(params?.section && params?.section === link?.section) ||
										(!params?.section && link?.title === "Home")
											? "underline"
											: "none",
									textUnderlineOffset: "5px",
								}}
							>
								<Image
									onClick={() => handleNavigate(link.search)}
									src={link.image}
									alt={link.title}
									className="cursor-pointer"
								/>
								{isOpen && (
									<Link
										className="flex-1 text-start"
										to={link?.to ?? ROUTES.profile}
										search={link.search}
									>
										{link.title}
									</Link>
								)}
							</li>
						)}
					/>
				</ul>
			</div>
		</nav>
	);
};
