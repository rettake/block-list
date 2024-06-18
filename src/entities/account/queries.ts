import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "./../../shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const accountKey = ["account"];

export function useAccountQueries() {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: accountKey });
    },
  });
}
