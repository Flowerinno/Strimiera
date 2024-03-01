import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const TextField = ({
	label,
	type = "text",
	...rest
}: TextFieldProps) => {
	return (
		<div className="flex flex-col gap-2">
			{label && <label htmlFor="">{label}</label>}
			<input type={type} {...rest} />
		</div>
	);
};
