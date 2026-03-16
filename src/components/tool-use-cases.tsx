type ToolUseCasesProps = {
  title?: string;
  items: string[];
};

export default function ToolUseCases({
  title = "Common use cases",
  items,
}: ToolUseCasesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-300 bg-zinc-50 p-6">
      <h3 className="text-2xl font-bold text-zinc-950">{title}</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-zinc-300 bg-white p-4 text-zinc-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
