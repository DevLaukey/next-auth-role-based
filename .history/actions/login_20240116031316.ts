"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { error } from "console";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return {
    sucess: "Email sent!",
  };
}; 
