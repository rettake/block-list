import { useBlockRemoveItemMutation } from "@/entities/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { UiDelete } from "@/shared/ui/ui-delete";

export function BlockItem({
  data,
  id,
  type,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) {
  const blockRemoveItemMutation = useBlockRemoveItemMutation();
  const handleRemove = () => {
    blockRemoveItemMutation.mutate(id);
  };

  return (
    <div className="flex gap-2">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
      <button
        className="ml-auto"
        onClick={handleRemove}
        disabled={blockRemoveItemMutation.isPending}
      >
        <UiDelete className="w-6 h-6 text-rose-500 hover:text-rose-600 disabled:opacity-50" />
      </button>
    </div>
  );
}
