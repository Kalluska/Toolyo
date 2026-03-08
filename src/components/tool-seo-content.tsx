type ToolSeoContentProps = {
  title: string;
  description: string;
};

export default function ToolSeoContent({
  title,
  description,
}: ToolSeoContentProps) {
  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">About this tool</h3>
        <p className="mt-3 text-zinc-700">
          {title} helps you work with text quickly in your browser without installing
          anything. This free online tool is designed for speed, simplicity, and
          everyday use.
        </p>
        <p className="mt-3 text-zinc-700">{description}</p>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">How to use {title}</h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
          <li>Paste or type your text into the input field.</li>
          <li>Adjust any available settings if the tool has options.</li>
          <li>Copy the result from the output area instantly.</li>
        </ol>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">FAQ</h3>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold">Is this tool free to use?</h4>
            <p className="mt-1 text-zinc-700">
              Yes. {title} is free to use in your browser.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Does this tool upload my text?</h4>
            <p className="mt-1 text-zinc-700">
              Most Toolyo tools are designed to work directly in the browser for speed
              and simplicity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Who is this tool for?</h4>
            <p className="mt-1 text-zinc-700">
              This tool is useful for writers, students, marketers, developers, and
              anyone who needs quick text processing online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
