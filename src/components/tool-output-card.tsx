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
      ? "text-green-700"
      : statusTone === "error"
        ? "text-red-700"
        : "text-zinc-600";

  return (
    <div className="rounded-2xl border border-zinc-300 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="text-sm font-semibold uppercase tracking-wide text-zinc-700">
          {label}
        </div>
        {status ? <div className={`text-xs font-medium ${toneClass}`}>{status}</div> : null}
      </div>
      {children}
    </div>
  );
}
