"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { error } from "console";

export const login = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return {
    success: "Email sent!",
  };
}; 
