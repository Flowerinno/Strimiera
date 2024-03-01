import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	text: string;
}

export const Text = ({ text, ...rest }: TextProps) => {
	return <p {...rest}>{text}</p>;
};
