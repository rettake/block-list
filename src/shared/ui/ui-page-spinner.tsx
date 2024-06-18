import clsx from "clsx";
import { UiSpinner } from "./ui-spinner";

export function UiPageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-slate-100",
        className,
      )}
    >
      <UiSpinner className="text-teal-600 h-24 w-24" />
    </div>
  );
}
