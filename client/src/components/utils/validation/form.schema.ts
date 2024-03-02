import z from "zod";

export const registerSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(4, "Password must be at least 4 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
