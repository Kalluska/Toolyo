import Link from "next/link";
import type { Tool } from "@/data/tools";
import { getToolIcon } from "@/lib/tool-icons";

type ToolCardProps = {
  tool: Tool;
  href?: string;
  badge?: string;
  compact?: boolean;
};

export default function ToolCard({
  tool,
  href,
  badge,
  compact = false,
}: ToolCardProps) {
  return (
    <Link
      href={href || `/tools/${tool.slug}`}
      className={`toolyo-card group block rounded-2xl border border-zinc-200 bg-white/95 transition hover:-translate-y-[2px] hover:border-zinc-400 hover:shadow-lg hover:shadow-black/10 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:shadow-black/40 ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl leading-none">
          {getToolIcon(tool.category, tool.slug)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="truncate text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {tool.name}
            </div>

            {badge ? (
              <span className="shrink-0 rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-white shadow-sm shadow-black/20 dark:bg-white dark:text-black">
                {badge}
              </span>
            ) : null}
          </div>

          <div className="mt-1 inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-zinc-300">
            {tool.category}
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
