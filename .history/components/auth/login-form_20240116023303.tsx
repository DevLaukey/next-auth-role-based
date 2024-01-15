import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      LOGIN FORM
    </CardWrapper>
  );
};
