import clsx from "clsx";
import {
  InputHTMLAttributes,
  PropsWithRef,
  SelectHTMLAttributes,
  useId,
} from "react";

export type UiSelectOptions = {
  value: string;
  label: string;
};
export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOptions[];
};

export function UiSelectField({
  className,
  label,
  error,
  selectProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map((option, index) => (
          <option key={index}>{option.label}</option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
