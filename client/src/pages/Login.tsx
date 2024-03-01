import { Helmet } from "react-helmet";
import { CREATE_USER_MUTATION } from "../api";
import { useMutation } from "@apollo/client";
import { useUserStore } from "../store";
import { loginSchema } from "../components";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, useFormContext } from "react-hook-form";
import { Button, TextField } from "../components";
import { Text } from "../components/ui/Text";

export const Login = () => {
	const [createUser, { data }] = useMutation(CREATE_USER_MUTATION, {
		ignoreResults: false,
	});

	const {
		watch,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(loginSchema),
	});

	watch();

	const submitLoginForm = async () => {
		console.log(getValues());
	};

	return (
		<div className="font-bold w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets//images/HomeSceen.png')] no-repeat bg-cover bg-center bg-lightPurple">
			<Helmet>
				<title>Strimiera | Login</title>
			</Helmet>
			<h2 className="text-white font-semibold text-2xl text-center">
				Create Strimiera account to enjoy the newest movies and TV shows
			</h2>
			<br />
			<form
				onSubmit={handleSubmit(submitLoginForm)}
				className="flex flex-col gap-3 w-7/12"
			>
				<TextField
					type="text"
					placeholder="Name"
					name="name"
					className="text_field"
					required
				/>
				{errors.name?.message && (
					<Text className="text-red-500" text={errors.name.message} />
				)}
				<TextField
					type="email"
					placeholder="Email"
					name="email"
					className="text_field"
					required
				/>
				{errors.email?.message && (
					<Text className="text-red-500" text={errors.email.message} />
				)}
				<TextField
					type="password"
					placeholder="Password"
					name="password"
					className="text_field"
					required
				/>
				{errors.password?.message && (
					<Text className="text-red-500" text={errors.password.message} />
				)}
				<Button text="Login" type="submit" className="button" />
			</form>
		</div>
	);
};
