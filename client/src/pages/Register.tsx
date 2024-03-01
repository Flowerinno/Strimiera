import { Helmet } from "react-helmet";
import { CREATE_USER_MUTATION } from "../api";
import { useMutation } from "@apollo/client";
import { useUserStore } from "../store";
import { BreadCrumb, registerSchema, RegisterSchema } from "../components";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";
import { Button, TextField } from "../components";
import { Text } from "../components/ui/Text";
import { Link, useNavigate } from "@tanstack/react-router";
import { ROUTES, TOAST } from "../common";
import { setCookie } from "../features";

export const Register = () => {
	const navigate = useNavigate();
	const [createUser] = useMutation(CREATE_USER_MUTATION, {
		ignoreResults: false,
	});

	const methods = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		reValidateMode: "onSubmit",
		resolver: zodResolver(registerSchema),
		shouldFocusError: true,
	});

	const submitLoginForm = async ({ email, name, password }: RegisterSchema) => {
		try {
			const { data } = await createUser({
				variables: {
					email,
					name,
					password,
				},
			});

			if (data?.createUser?.token) {
				useUserStore.getState().setToken(data.createUser.token);

				setCookie(data?.createUser?.token);

				TOAST.sucess("Account created successfully");
				navigate({
					to: ROUTES.home,
				});
			}
		} catch (error) {
			TOAST.error("Error creating account");
		}
	};

	const errors = methods.formState.errors;

	return (
		<div className="font-bold w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets//images/HomeSceen.png')] no-repeat bg-cover bg-center bg-lightPurple">
			<BreadCrumb title="Home" to={ROUTES.home} />
			<Helmet>
				<title>Strimiera | Register</title>
			</Helmet>
			<h2 className="text-white font-semibold text-2xl text-center p-4">
				Create Strimiera account to enjoy the newest movies and TV shows
			</h2>
			<br />
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(submitLoginForm)}
					className="flex flex-col gap-3 w-9/12 md:w-4/12"
				>
					<TextField
						fieldName="name"
						placeholder="Name"
						className="text_field"
					/>
					{errors.name?.message && (
						<Text className="text-red-500" text={errors.name.message} />
					)}
					<TextField
						fieldName="email"
						type="email"
						placeholder="Email"
						className="text_field"
					/>
					{errors.email?.message && (
						<Text className="text-red-500" text={errors.email.message} />
					)}
					<TextField
						fieldName="password"
						type="password"
						placeholder="Password"
						className="text_field"
					/>
					{errors.password?.message && (
						<Text className="text-red-500" text={errors.password.message} />
					)}
					<Button text="Sign up" type="submit" className="button" />
				</form>
				<Link
					className="mt-3 p-1 text-white hover:outline-dashed transition-all duration-300"
					to={ROUTES.login}
				>
					Already have an account? Login
				</Link>
			</FormProvider>
		</div>
	);
};
