//@ts-nocheck
import { Link } from "@tanstack/react-router";
import { Each } from "../../common";
import { Divider } from "./Divider";

type LinkType = { to: string; text: string; search: Record<string, string> };

interface PopupProps {
	title: string;
	links: LinkType[];
	className?: string;
}

export const Popup = ({ title, links, className }: PopupProps) => {
	return (
		<div className={className}>
			<h1 className="font-bold">{title}</h1>
			<Divider />
			<ul>
				{links?.map((link, index) => (
					<li key={index} className="hover:scale-105">
						<Link to={link.to} search={link.search}>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
