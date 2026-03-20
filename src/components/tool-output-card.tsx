import type { ReactNode } from "react";

type ToolOutputCardProps = {
  label?: string;
  status?: string;
  statusTone?: "default" | "success" | "error";
  children: ReactNode;
};

export default function ToolOutputCard({
  label = "Output",
  status,
  statusTone = "default",
  children,
}: ToolOutputCardProps) {
  const toneClass =
    statusTone === "success"
      ? "text-green-700 dark:text-green-400"
      : statusTone === "error"
        ? "text-red-700 dark:text-red-400"
        : "text-zinc-600 dark:text-zinc-400";

  return (
    <div className="rounded-2xl border border-zinc-300 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
          {label}
        </div>
        {status ? <div className={`text-xs font-medium ${toneClass}`}>{status}</div> : null}
      </div>
      {children}
    </div>
  );
}
