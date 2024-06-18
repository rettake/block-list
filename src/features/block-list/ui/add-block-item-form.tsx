import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "Keyword", value: AddBlockItemDtoType.Keyword },
];

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "Keyword" ? "Enter Keyword" : "Enter Webiste URL",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
}
