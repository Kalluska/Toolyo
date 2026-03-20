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
      className={`rounded-[28px] border border-dashed border-[var(--border-main)] bg-[var(--bg-soft)]/80 p-5 text-center shadow-sm ${minHeightClass} ${className}`}
    >
      <div className="flex h-full min-h-inherit items-center justify-center">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-faint)]">
            Ad Slot
          </div>
          <div className="mt-2 text-lg font-semibold text-[var(--text-soft)]">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}