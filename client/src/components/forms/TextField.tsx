import React from "react";
import { useFormContext } from "react-hook-form";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	fieldName: string;
}

export const TextField = ({
	label,
	type = "text",
	fieldName,
	...rest
}: TextFieldProps) => {
	const { register } = useFormContext();

	return (
		<div className="flex flex-col gap-2">
			{label && <label>{label}</label>}
			<input type={type} {...rest} {...register(fieldName)} />
		</div>
	);
};
