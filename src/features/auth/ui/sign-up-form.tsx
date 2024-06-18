import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";

export function SignUpForm() {
  const { isPending, handleSubmit, register, error } = useSignUpForm();

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
        Sign Up
      </UiButton>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
      {error && <div className="text-rose-500">{error}</div>}
    </form>
  );
}
