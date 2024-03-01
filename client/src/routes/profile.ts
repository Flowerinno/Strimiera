import { createFileRoute } from "@tanstack/react-router";
import { Profile } from "../pages";

export const Route = createFileRoute("/profile")({
	component: Profile,
});
