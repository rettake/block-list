import {
  useAccountQueries,
  useUpdateAccountMutation,
} from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQueries();

  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data.isBlockingEnabled,
      });
    }
  };

  return {
    isLoading: updateAccountMutation.isPending,
    toggleBlocking,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    isReady: accountQuery.isSuccess,
  };
}
