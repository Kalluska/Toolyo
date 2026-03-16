import { toolSeoContentMap } from "@/lib/toolSeoContentMap";

type ToolFaqSchemaProps = {
  slug: string;
};

export default function ToolFaqSchema({ slug }: ToolFaqSchemaProps) {
  const content = toolSeoContentMap[slug];

  if (!content?.faq || content.faq.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
