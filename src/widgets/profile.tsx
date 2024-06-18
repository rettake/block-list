import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data: session } = useSessionQuery();

  if (!session) null

  return (
    <div className="flex gap-2 items-center">
      {session?.email} <SignOutButton />
    </div>
  );
}
