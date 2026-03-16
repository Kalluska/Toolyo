type AdSlotProps = {
  label: string;
  className?: string;
  minHeightClass?: string;
};

export default function AdSlot({
  label,
  className = "",
  minHeightClass = "min-h-[120px]",
}: AdSlotProps) {
  return (
    <div
      className={`rounded-2xl border border-dashed border-zinc-400 bg-zinc-100/80 p-4 text-center shadow-sm ${minHeightClass} ${className}`}
    >
      <div className="flex h-full min-h-inherit items-center justify-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Ad Slot
          </div>
          <div className="mt-2 text-lg font-semibold text-zinc-700">{label}</div>
        </div>
      </div>
    </div>
  );
}
