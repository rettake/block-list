
import { PropsWithChildren, ReactElement } from "react";
import { UiPageSpinner } from "../../../shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { ROUTES } from "../../../shared/constants/routes";
import { useSessionQuery } from "@/entities/session/queries";

export function withAuth<P>(Component: (Props: P) => ReactElement) {
  return function WithAuth(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) return <UiPageSpinner />;

    if (isError) router.replace(ROUTES.SIGN_IN);

    return <Component {...props} />;
  };
}
