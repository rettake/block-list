import { queyClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function AppProviders({ children }: { children?: ReactNode }) {
  return <QueryClientProvider client={queyClient}>{children}</QueryClientProvider>;
}
