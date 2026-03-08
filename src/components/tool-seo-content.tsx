type ToolSeoContentProps = {
  title: string;
  description: string;
  about?: string[];
  steps?: string[];
  faq?: { question: string; answer: string }[];
};

export default function ToolSeoContent({
  title,
  description,
  about,
  steps,
  faq,
}: ToolSeoContentProps) {
  const defaultAbout = [
    `${title} helps you work with text quickly in your browser without installing anything. This free online tool is built for speed, simplicity, and everyday use.`,
    description,
  ];

  const defaultSteps = [
    "Paste or type your text into the input field.",
    "Adjust any available settings if the tool has options.",
    "Copy the result from the output area instantly.",
  ];

  const defaultFaq = [
    {
      question: "Is this tool free to use?",
      answer: `Yes. ${title} is free to use in your browser.`,
    },
    {
      question: "Does this tool upload my text?",
      answer:
        "Most Toolyo tools are designed to work directly in the browser for speed and simplicity.",
    },
    {
      question: "Who is this tool for?",
      answer:
        "This tool is useful for writers, students, marketers, developers, and anyone who needs quick text processing online.",
    },
  ];

  const finalAbout = about && about.length > 0 ? about : defaultAbout;
  const finalSteps = steps && steps.length > 0 ? steps : defaultSteps;
  const finalFaq = faq && faq.length > 0 ? faq : defaultFaq;

  return (
    <section className="mt-8 space-y-6">
      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">About this tool</h3>
        <div className="mt-3 space-y-3 text-zinc-700">
          {finalAbout.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">How to use {title}</h3>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
          {finalSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6">
        <h3 className="text-2xl font-bold">FAQ</h3>

        <div className="mt-4 space-y-4">
          {finalFaq.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold">{item.question}</h4>
              <p className="mt-1 text-zinc-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
