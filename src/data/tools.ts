export type Tool = {
  slug: string;
  name: string;
  category: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export const tools: Tool[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    category: "Text",
    description: "Count words, characters, lines, paragraphs, and reading time.",
    seoTitle: "Word Counter",
    seoDescription: "Free online word counter. Count words, characters, lines, paragraphs, and reading time instantly.",
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    category: "Text",
    description: "Count characters, characters without spaces, words, and lines.",
    seoTitle: "Character Counter",
    seoDescription: "Free online character counter. Count characters, words, lines, and characters without spaces instantly.",
  },
  {
    slug: "remove-line-breaks",
    name: "Remove Line Breaks",
    category: "Text",
    description: "Turn multi-line text into a single clean line.",
    seoTitle: "Remove Line Breaks",
    seoDescription: "Remove line breaks from text online instantly. Convert multi-line text into one clean line.",
  },
  {
    slug: "remove-extra-spaces",
    name: "Remove Extra Spaces",
    category: "Text",
    description: "Clean repeated spaces, tabs, and uneven spacing from text.",
    seoTitle: "Remove Extra Spaces",
    seoDescription: "Remove extra spaces from text online. Clean repeated spaces, tabs, and uneven spacing instantly.",
  },
  {
    slug: "remove-duplicate-lines",
    name: "Remove Duplicate Lines",
    category: "Text",
    description: "Remove repeated lines from text while keeping unique ones.",
    seoTitle: "Remove Duplicate Lines",
    seoDescription: "Remove duplicate lines from text online and keep only unique lines instantly.",
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    category: "Text",
    description: "Convert text to uppercase, lowercase, or title case.",
    seoTitle: "Case Converter",
    seoDescription: "Convert text to uppercase, lowercase, or title case instantly with this free online case converter.",
  },
  {
    slug: "text-compare",
    name: "Text Compare",
    category: "Text",
    description: "Compare two text blocks line by line.",
    seoTitle: "Text Compare",
    seoDescription: "Compare two text blocks online line by line with this free text compare tool.",
  },
  {
    slug: "reverse-text",
    name: "Reverse Text",
    category: "Text",
    description: "Reverse characters in your text instantly.",
    seoTitle: "Reverse Text",
    seoDescription: "Reverse text online instantly. Flip characters in words, sentences, or full text blocks.",
  },
  {
    slug: "text-sorter",
    name: "Text Sorter",
    category: "Text",
    description: "Sort words alphabetically.",
    seoTitle: "Text Sorter",
    seoDescription: "Sort text and words alphabetically online with this free text sorter tool.",
  },
  {
    slug: "word-sorter",
    name: "Word Sorter",
    category: "Text",
    description: "Sort words alphabetically from input text.",
    seoTitle: "Word Sorter",
    seoDescription: "Sort words alphabetically online instantly with this free word sorter.",
  },
  {
    slug: "duplicate-word-remover",
    name: "Duplicate Word Remover",
    category: "Text",
    description: "Remove duplicate words from text.",
    seoTitle: "Duplicate Word Remover",
    seoDescription: "Remove duplicate words from text online instantly and keep only unique words.",
  },
  {
    slug: "text-trimmer",
    name: "Text Trimmer",
    category: "Text",
    description: "Remove spaces from the start and end of text.",
    seoTitle: "Text Trimmer",
    seoDescription: "Trim text online by removing spaces from the beginning and end instantly.",
  },
  {
    slug: "line-sorter",
    name: "Line Sorter",
    category: "Text",
    description: "Sort lines alphabetically.",
    seoTitle: "Line Sorter",
    seoDescription: "Sort lines alphabetically online instantly with this free line sorter tool.",
  },
  {
    slug: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    category: "Text",
    description: "Generate dummy text paragraphs instantly.",
    seoTitle: "Lorem Ipsum Generator",
    seoDescription: "Generate lorem ipsum placeholder text online instantly with this free generator.",
  },
  {
    slug: "slug-generator",
    name: "Slug Generator",
    category: "SEO",
    description: "Convert text into a clean URL slug.",
    seoTitle: "Slug Generator",
    seoDescription: "Generate clean URL slugs online instantly from titles, phrases, and text.",
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    category: "Developer",
    description: "Format and validate JSON instantly.",
    seoTitle: "JSON Formatter",
    seoDescription: "Format and validate JSON online instantly with this free JSON formatter.",
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    category: "Developer",
    description: "Validate JSON data instantly.",
    seoTitle: "JSON Validator",
    seoDescription: "Validate JSON online instantly and check whether your JSON is valid.",
  },
  {
    slug: "base64-tool",
    name: "Base64 Encode / Decode",
    category: "Developer",
    description: "Encode plain text or decode valid Base64 strings.",
    seoTitle: "Base64 Encode / Decode",
    seoDescription: "Encode and decode Base64 online instantly with this free Base64 tool.",
  },
  {
    slug: "url-tool",
    name: "URL Encode / Decode",
    category: "Developer",
    description: "Encode and decode URL-safe strings instantly.",
    seoTitle: "URL Encode / Decode",
    seoDescription: "Encode and decode URLs online instantly with this free URL encode/decode tool.",
  },
  {
    slug: "html-escape",
    name: "HTML Escape",
    category: "Developer",
    description: "Escape HTML special characters.",
    seoTitle: "HTML Escape",
    seoDescription: "Escape HTML special characters online instantly with this free HTML escape tool.",
  },
  {
    slug: "html-unescape",
    name: "HTML Unescape",
    category: "Developer",
    description: "Convert escaped HTML back to normal text.",
    seoTitle: "HTML Unescape",
    seoDescription: "Unescape HTML online instantly and convert escaped HTML back to readable text.",
  },

  {
    slug: "remove-punctuation",
    name: "Remove Punctuation",
    category: "Text",
    description: "Remove punctuation from text instantly.",
    seoTitle: "Remove Punctuation",
    seoDescription: "Remove punctuation from text instantly.",
  },

  {
    slug: "remove-empty-lines",
    name: "Remove Empty Lines",
    category: "Text",
    description: "Remove empty lines from text instantly.",
    seoTitle: "Remove Empty Lines",
    seoDescription: "Remove empty lines from text instantly.",
  },

  {
    slug: "text-repeater",
    name: "Text Repeater",
    category: "Text",
    description: "Repeat text multiple times instantly.",
    seoTitle: "Text Repeater",
    seoDescription: "Repeat text multiple times instantly.",
  },

  {
    slug: "sentence-counter",
    name: "Sentence Counter",
    category: "Text",
    description: "Count sentences in text instantly.",
    seoTitle: "Sentence Counter",
    seoDescription: "Count sentences in text instantly.",
  },

  {
    slug: "remove-numbers",
    name: "Remove Numbers",
    category: "Text",
    description: "Remove numbers from text instantly.",
    seoTitle: "Remove Numbers",
    seoDescription: "Remove numbers from text instantly.",
  },

  {
    slug: "remove-special-characters",
    name: "Remove Special Characters",
    category: "Text",
    description: "Remove special characters from text instantly.",
    seoTitle: "Remove Special Characters",
    seoDescription: "Remove special characters from text instantly.",
  },

  {
    slug: "capitalize-words",
    name: "Capitalize Words",
    category: "Text",
    description: "Capitalize every word in text instantly.",
    seoTitle: "Capitalize Words",
    seoDescription: "Capitalize every word in text instantly.",
  },

  {
    slug: "text-deduplicator",
    name: "Text Deduplicator",
    category: "Text",
    description: "Remove duplicate text fragments instantly.",
    seoTitle: "Text Deduplicator",
    seoDescription: "Remove duplicate text fragments instantly.",
  },

  {
    slug: "csv-to-text",
    name: "CSV to Text",
    category: "Developer",
    description: "Convert CSV content into plain text instantly.",
    seoTitle: "CSV to Text",
    seoDescription: "Convert CSV content into plain text instantly.",
  },

  {
    slug: "remove-non-ascii",
    name: "Remove Non-ASCII",
    category: "Developer",
    description: "Remove non-ASCII characters from text instantly.",
    seoTitle: "Remove Non-ASCII",
    seoDescription: "Remove non-ASCII characters from text instantly.",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
