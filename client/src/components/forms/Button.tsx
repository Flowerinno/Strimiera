import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export const Button = ({ text, ...rest }: ButtonProps) => {
	return <button {...rest}>{text}</button>;
};
