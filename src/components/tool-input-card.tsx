import type { ReactNode } from "react";

type ToolInputCardProps = {
  label?: string;
  children: ReactNode;
};

export default function ToolInputCard({
  label = "Input",
  children,
}: ToolInputCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-300 bg-white p-4 shadow-sm">
      <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-700">
        {label}
      </div>
      {children}
    </div>
  );
}
