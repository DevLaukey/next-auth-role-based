"use client"
import * as z from "zod"

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });


  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => console.log(data))}
          className="space-y-6">
          <div className="space-y-4">
            <FormField {...form} name="email">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" />
              <FormMessage />
            </FormField>
            <FormField {...form} name="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" />
              <FormMessage />
            </FormField>
          </div>
          </form>
      </Form>
    </CardWrapper>
  );
};
