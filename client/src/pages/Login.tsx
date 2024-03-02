import { Helmet } from "react-helmet";
import { LOGIN_USER_MUTATION } from "../api";
import { useMutation } from "@apollo/client";
import { useUserStore } from "../store";
import { BreadCrumb, loginSchema, LoginSchema } from "../components";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";
import { Button, TextField } from "../components";
import { Text } from "../components/ui/Text";
import { Link, useNavigate } from "@tanstack/react-router";
import { ROUTES, TOAST } from "../common";
import { getCookie, setCookie } from "../features";

export const Login = () => {
	const navigate = useNavigate();
	const [createUser, { data }] = useMutation(LOGIN_USER_MUTATION, {
		ignoreResults: false,
	});

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		reValidateMode: "onSubmit",
		resolver: zodResolver(loginSchema),
		shouldFocusError: true,
	});

	const submitLoginForm = async ({ email, password }: LoginSchema) => {
		try {
			const { data } = await createUser({
				variables: {
					email,
					password,
				},
			});

			if (data?.login?.token) {
				useUserStore.getState().setToken(data.login.token);
				setCookie(data?.login?.token);
				TOAST.sucess("Welcome back!");
				navigate({
					to: ROUTES.home,
				});
			}
		} catch (error) {
			TOAST.error("Error logging into account! Please, try again.");
		}
	};

	const errors = methods.formState.errors;

	return (
		<div className="font-bold w-screen h-screen flex flex-col justify-center items-center bg-[url('../assets//images/HomeSceen.png')] no-repeat bg-cover bg-center bg-lightPurple">
			<BreadCrumb title="Home" to={ROUTES.home} />
			<Helmet>
				<title>Strimiera | Login</title>
			</Helmet>
			<h2 className="text-white font-semibold text-2xl text-center p-4">
				Get back to Strimiera to enjoy the newest movies and TV shows
			</h2>
			<br />
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit(submitLoginForm)}
					className="flex flex-col gap-3 w-9/12 md:w-4/12"
				>
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
					{data?.login?.message && (
						<Text
							className="text-red-500 text-center font-bold"
							text={data?.login.message}
						/>
					)}
					<Button text="Login" type="submit" className="button" />
				</form>

				<Link
					className="mt-3 p-1 text-white hover:outline-dashed transition-all duration-300"
					to={ROUTES.register}
					onClick={() => getCookie()}
				>
					Don't have an account? Sign up
				</Link>
			</FormProvider>
		</div>
	);
};
