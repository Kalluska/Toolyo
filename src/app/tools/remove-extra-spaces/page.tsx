"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";
import ToolSeoContent from "@/components/tool-seo-content";
import RelatedTools from "@/components/related-tools";
import ToolFeaturedTools from "@/components/tool-featured-tools";

export default function RemoveExtraSpacesPage() {
  const [text, setText] = useState("");

  const output = useMemo(() => {
    return text
      .replace(/[ \t]+/g, " ")
      .replace(/\n /g, "\n")
      .replace(/ \n/g, "\n");
  }, [text]);

  return (
    <ToolLayout
      currentSlug="remove-extra-spaces"
      title="Remove Extra Spaces"
      description="Clean repeated spaces, tabs, and uneven spacing from text."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-medium">Input</div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text with extra spaces here..."
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4 outline-none focus:border-zinc-400"
          />
        </div>
        <div>
          <div className="mb-2 text-sm font-medium">Output</div>
          <textarea
            readOnly
            value={output}
            className="min-h-[240px] w-full rounded-2xl border border-zinc-200 p-4"
          />
        </div>
      </div>
    
      
      <ToolSeoContent
        title="Remove Extra Spaces"
        description="Clean repeated spaces, tabs, and uneven spacing from text."
        about={[
          "Remove Extra Spaces is useful when text contains messy spacing caused by copy-paste, formatting issues, or imported data.",
          "This tool helps normalize text by reducing repeated spaces and uneven spacing. It is useful for making content cleaner and easier to read before publishing or processing it further.",
        ]}
        steps={[
          "Paste text with messy spacing into the input field.",
          "The tool automatically cleans repeated spaces and uneven spacing.",
          "Copy the cleaned version from the output area.",
        ]}
        faq={[
          {
            question: "Does this help with copied text from documents?",
            answer: "Yes. It is very useful for cleaning text copied from documents, websites, or spreadsheets.",
          },
          {
            question: "Will it change the words themselves?",
            answer: "No. It only changes spacing, not the text content.",
          },
          {
            question: "Is this useful before publishing content?",
            answer: "Yes. Clean spacing improves readability and makes text look more professional.",
          },
        ]}
      />
      <ToolFeaturedTools currentSlug="remove-extra-spaces" />
      <RelatedTools currentSlug="remove-extra-spaces" />

    </ToolLayout>
  );
}
