import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  return {
    isPending: signInMutation.isPending,
    error: signInMutation.error?.message,
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
  };
}
