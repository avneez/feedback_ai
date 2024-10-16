import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must not be more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    usernamae: usernameValidation,
    email: z.string().email({ message: "Invalid Email Address" }),
    password: z.string().min(6, { message: "Password  must be at least 6 characters" })
})