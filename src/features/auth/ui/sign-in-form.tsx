import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { isPending, handleSubmit, register, error } = useSignInForm();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <UiTextField
        label="email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton disabled={isPending} variant="primary">
        Sign In
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_UP}>
        Sign Up
      </UiLink>
      {error && <div className="text-rose-500">{error}</div>}
    </form>
  );
}
