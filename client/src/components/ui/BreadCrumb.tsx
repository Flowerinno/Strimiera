import { Link } from "@tanstack/react-router";

interface BreadCrumbProps {
	title: string;
	to: string;
}

export const BreadCrumb = ({ title, to }: BreadCrumbProps) => {
	return (
		<Link
			className="absolute left-2 top-2 p-2 text-sm underline underline-offset-2 text-white tracking-widest font-bold"
			to={to}
		>
			{title}
		</Link>
	);
};
