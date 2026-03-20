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

  {
    slug: "remove-tabs",
    name: "Remove Tabs",
    category: "Text",
    description: "Remove tab characters from text instantly.",
    seoTitle: "Remove Tabs",
    seoDescription: "Remove tab characters from text instantly.",
  },

  {
    slug: "paragraph-counter",
    name: "Paragraph Counter",
    category: "Text",
    description: "Count paragraphs in text instantly.",
    seoTitle: "Paragraph Counter",
    seoDescription: "Count paragraphs in text instantly.",
  },

  {
    slug: "reading-time-calculator",
    name: "Reading Time Calculator",
    category: "Text",
    description: "Estimate reading time from text instantly.",
    seoTitle: "Reading Time Calculator",
    seoDescription: "Estimate reading time from text instantly.",
  },

  {
    slug: "text-length-counter",
    name: "Text Length Counter",
    category: "Text",
    description: "Count text length instantly.",
    seoTitle: "Text Length Counter",
    seoDescription: "Count text length instantly.",
  },

  {
    slug: "lowercase-converter",
    name: "Lowercase Converter",
    category: "Text",
    description: "Convert text to lowercase instantly.",
    seoTitle: "Lowercase Converter",
    seoDescription: "Convert text to lowercase instantly.",
  },

  {
    slug: "uppercase-converter",
    name: "Uppercase Converter",
    category: "Text",
    description: "Convert text to uppercase instantly.",
    seoTitle: "Uppercase Converter",
    seoDescription: "Convert text to uppercase instantly.",
  },

  {
    slug: "title-case-converter",
    name: "Title Case Converter",
    category: "Text",
    description: "Convert text to title case instantly.",
    seoTitle: "Title Case Converter",
    seoDescription: "Convert text to title case instantly.",
  },

  {
    slug: "unicode-normalizer",
    name: "Unicode Normalizer",
    category: "Developer",
    description: "Normalize unicode text instantly.",
    seoTitle: "Unicode Normalizer",
    seoDescription: "Normalize unicode text instantly.",
  },

  {
    slug: "text-to-csv",
    name: "Text to CSV",
    category: "Developer",
    description: "Convert plain text lines into CSV instantly.",
    seoTitle: "Text to CSV",
    seoDescription: "Convert plain text lines into CSV instantly.",
  },

  {
    slug: "keyword-counter",
    name: "Keyword Counter",
    category: "SEO",
    description: "Count keyword occurrences in text instantly.",
    seoTitle: "Keyword Counter",
    seoDescription: "Count keyword occurrences in text instantly.",
  },

  {
    slug: "meta-description-length",
    name: "Meta Description Length Checker",
    category: "SEO",
    description: "Check meta description length instantly.",
    seoTitle: "Meta Description Length Checker",
    seoDescription: "Check meta description length instantly.",
  },

  {
    slug: "keyword-density-checker",
    name: "Keyword Density Checker",
    category: "SEO",
    description: "Check keyword density in text instantly.",
    seoTitle: "Keyword Density Checker",
    seoDescription: "Check keyword density in text instantly.",
  },

  {
    slug: "text-diff",
    name: "Text Diff Checker",
    category: "Text",
    description: "Compare differences between two text blocks instantly.",
    seoTitle: "Text Diff Checker",
    seoDescription: "Compare differences between two text blocks instantly.",
  },

  {
    slug: "html-minifier",
    name: "HTML Minifier",
    category: "Developer",
    description: "Minify HTML code instantly.",
    seoTitle: "HTML Minifier",
    seoDescription: "Minify HTML code instantly.",
  },

  {
    slug: "css-minifier",
    name: "CSS Minifier",
    category: "Developer",
    description: "Minify CSS code instantly.",
    seoTitle: "CSS Minifier",
    seoDescription: "Minify CSS code instantly.",
  },

  {
    slug: "js-minifier",
    name: "JavaScript Minifier",
    category: "Developer",
    description: "Minify JavaScript code instantly.",
    seoTitle: "JavaScript Minifier",
    seoDescription: "Minify JavaScript code instantly.",
  },

  {
    slug: "uuid-generator",
    name: "UUID Generator",
    category: "Developer",
    description: "Generate UUID values instantly.",
    seoTitle: "UUID Generator",
    seoDescription: "Generate UUID values instantly.",
  },

  {
    slug: "password-generator",
    name: "Password Generator",
    category: "Developer",
    description: "Generate strong passwords instantly.",
    seoTitle: "Password Generator",
    seoDescription: "Generate strong passwords instantly.",
  },

  {
    slug: "json-to-csv",
    name: "JSON to CSV",
    category: "Developer",
    description: "Convert JSON data to CSV instantly.",
    seoTitle: "JSON to CSV",
    seoDescription: "Convert JSON data to CSV instantly.",
  },

  {
    slug: "csv-to-json",
    name: "CSV to JSON",
    category: "Developer",
    description: "Convert CSV data to JSON instantly.",
    seoTitle: "CSV to JSON",
    seoDescription: "Convert CSV data to JSON instantly.",
  },

  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    category: "Text",
    description: "Generate lorem ipsum placeholder text instantly.",
    seoTitle: "Lorem Ipsum Generator",
    seoDescription: "Generate lorem ipsum placeholder text instantly.",
  },

  {
    slug: "binary-to-text",
    name: "Binary to Text",
    category: "Developer",
    description: "Convert binary to readable text instantly.",
    seoTitle: "Binary to Text",
    seoDescription: "Convert binary to readable text instantly.",
  },

  {
    slug: "text-to-binary",
    name: "Text to Binary",
    category: "Developer",
    description: "Convert text to binary instantly.",
    seoTitle: "Text to Binary",
    seoDescription: "Convert text to binary instantly.",
  },

  {
    slug: "json-to-yaml",
    name: "JSON to YAML",
    category: "Developer",
    description: "Convert JSON to YAML instantly.",
    seoTitle: "JSON to YAML",
    seoDescription: "Convert JSON to YAML instantly.",
  },

  {
    slug: "yaml-to-json",
    name: "YAML to JSON",
    category: "Developer",
    description: "Convert YAML to JSON instantly.",
    seoTitle: "YAML to JSON",
    seoDescription: "Convert YAML to JSON instantly.",
  },

  {
    slug: "random-number-generator",
    name: "Random Number Generator",
    category: "Developer",
    description: "Generate random numbers instantly.",
    seoTitle: "Random Number Generator",
    seoDescription: "Generate random numbers instantly.",
  },

  {
    slug: "line-counter",
    name: "Line Counter",
    category: "Text",
    description: "Count lines in text instantly.",
    seoTitle: "Line Counter",
    seoDescription: "Count lines in text instantly.",
  },

  {
    slug: "remove-html-tags",
    name: "Remove HTML Tags",
    category: "Text",
    description: "Remove HTML tags from text instantly.",
    seoTitle: "Remove HTML Tags",
    seoDescription: "Remove HTML tags from text instantly.",
  },

  {
    slug: "case-swapper",
    name: "Case Swapper",
    category: "Text",
    description: "Swap uppercase and lowercase letters instantly.",
    seoTitle: "Case Swapper",
    seoDescription: "Swap uppercase and lowercase letters instantly.",
  },

  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    category: "Developer",
    description: "Decode JWT tokens instantly.",
    seoTitle: "JWT Decoder",
    seoDescription: "Decode JWT tokens instantly.",
  },

  {
    slug: "regex-tester",
    name: "Regex Tester",
    category: "Developer",
    description: "Test regular expressions instantly.",
    seoTitle: "Regex Tester",
    seoDescription: "Test regular expressions instantly.",
  },

  {
    slug: "ascii-to-text",
    name: "ASCII to Text",
    category: "Developer",
    description: "Convert ASCII codes to readable text instantly.",
    seoTitle: "ASCII to Text",
    seoDescription: "Convert ASCII codes to readable text instantly.",
  },

  {
    slug: "text-to-ascii",
    name: "Text to ASCII",
    category: "Developer",
    description: "Convert text to ASCII codes instantly.",
    seoTitle: "Text to ASCII",
    seoDescription: "Convert text to ASCII codes instantly.",
  },

  {
    slug: "binary-to-decimal",
    name: "Binary to Decimal",
    category: "Developer",
    description: "Convert binary numbers to decimal instantly.",
    seoTitle: "Binary to Decimal",
    seoDescription: "Convert binary numbers to decimal instantly.",
  },

  {
    slug: "decimal-to-binary",
    name: "Decimal to Binary",
    category: "Developer",
    description: "Convert decimal numbers to binary instantly.",
    seoTitle: "Decimal to Binary",
    seoDescription: "Convert decimal numbers to binary instantly.",
  },

  {
    slug: "decimal-to-hex",
    name: "Decimal to Hex",
    category: "Developer",
    description: "Convert decimal numbers to hexadecimal instantly.",
    seoTitle: "Decimal to Hex",
    seoDescription: "Convert decimal numbers to hexadecimal instantly.",
  },

  {
    slug: "hex-to-decimal",
    name: "Hex to Decimal",
    category: "Developer",
    description: "Convert hexadecimal values to decimal instantly.",
    seoTitle: "Hex to Decimal",
    seoDescription: "Convert hexadecimal values to decimal instantly.",
  },

  {
    slug: "hex-to-rgb",
    name: "Hex to RGB",
    category: "Developer",
    description: "Convert HEX colors to RGB instantly.",
    seoTitle: "Hex to RGB",
    seoDescription: "Convert HEX colors to RGB instantly.",
  },

  {
    slug: "rgb-to-hex",
    name: "RGB to HEX",
    category: "Developer",
    description: "Convert RGB colors to HEX instantly.",
    seoTitle: "RGB to HEX",
    seoDescription: "Convert RGB colors to HEX instantly.",
  },

  {
    slug: "hex-to-hsl",
    name: "HEX to HSL",
    category: "Developer",
    description: "Convert HEX colors to HSL instantly.",
    seoTitle: "HEX to HSL",
    seoDescription: "Convert HEX colors to HSL instantly.",
  },

  {
    slug: "hsl-to-hex",
    name: "HSL to HEX",
    category: "Developer",
    description: "Convert HSL colors to HEX instantly.",
    seoTitle: "HSL to HEX",
    seoDescription: "Convert HSL colors to HEX instantly.",
  },

  {
    slug: "color-contrast-checker",
    name: "Color Contrast Checker",
    category: "Developer",
    description: "Check color contrast ratios instantly.",
    seoTitle: "Color Contrast Checker",
    seoDescription: "Check color contrast ratios instantly.",
  },

  {
    slug: "css-gradient-generator",
    name: "CSS Gradient Generator",
    category: "Developer",
    description: "Generate CSS gradients instantly.",
    seoTitle: "CSS Gradient Generator",
    seoDescription: "Generate CSS gradients instantly.",
  },

  {
    slug: "markdown-to-html",
    name: "Markdown to HTML",
    category: "Developer",
    description: "Convert Markdown to HTML instantly.",
    seoTitle: "Markdown to HTML",
    seoDescription: "Convert Markdown to HTML instantly.",
  },

  {
    slug: "html-to-markdown",
    name: "HTML to Markdown",
    category: "Developer",
    description: "Convert HTML to Markdown instantly.",
    seoTitle: "HTML to Markdown",
    seoDescription: "Convert HTML to Markdown instantly.",
  },

  {
    slug: "xml-formatter",
    name: "XML Formatter",
    category: "Developer",
    description: "Format XML code instantly.",
    seoTitle: "XML Formatter",
    seoDescription: "Format XML code instantly.",
  },

  {
    slug: "xml-validator",
    name: "XML Validator",
    category: "Developer",
    description: "Validate XML instantly.",
    seoTitle: "XML Validator",
    seoDescription: "Validate XML instantly.",
  },

  {
    slug: "json-to-xml",
    name: "JSON to XML",
    category: "Developer",
    description: "Convert JSON data to XML instantly.",
    seoTitle: "JSON to XML",
    seoDescription: "Convert JSON data to XML instantly.",
  },

  {
    slug: "xml-to-json",
    name: "XML to JSON",
    category: "Developer",
    description: "Convert XML data to JSON instantly.",
    seoTitle: "XML to JSON",
    seoDescription: "Convert XML data to JSON instantly.",
  },

  {
    slug: "yaml-formatter",
    name: "YAML Formatter",
    category: "Developer",
    description: "Format YAML instantly.",
    seoTitle: "YAML Formatter",
    seoDescription: "Format YAML instantly.",
  },

  {
    slug: "sql-formatter",
    name: "SQL Formatter",
    category: "Developer",
    description: "Format SQL queries instantly.",
    seoTitle: "SQL Formatter",
    seoDescription: "Format SQL queries instantly.",
  },

  {
    slug: "sql-minifier",
    name: "SQL Minifier",
    category: "Developer",
    description: "Minify SQL queries instantly.",
    seoTitle: "SQL Minifier",
    seoDescription: "Minify SQL queries instantly.",
  },

  {
    slug: "html-prettifier",
    name: "HTML Prettifier",
    category: "Developer",
    description: "Prettify HTML code instantly.",
    seoTitle: "HTML Prettifier",
    seoDescription: "Prettify HTML code instantly.",
  },

  {
    slug: "css-prettifier",
    name: "CSS Prettifier",
    category: "Developer",
    description: "Prettify CSS code instantly.",
    seoTitle: "CSS Prettifier",
    seoDescription: "Prettify CSS code instantly.",
  },

  {
    slug: "js-prettifier",
    name: "JavaScript Prettifier",
    category: "Developer",
    description: "Prettify JavaScript code instantly.",
    seoTitle: "JavaScript Prettifier",
    seoDescription: "Prettify JavaScript code instantly.",
  },

  {
    slug: "base32-encoder",
    name: "Base32 Encoder",
    category: "Developer",
    description: "Encode text to Base32 instantly.",
    seoTitle: "Base32 Encoder",
    seoDescription: "Encode text to Base32 instantly.",
  },

  {
    slug: "base32-decoder",
    name: "Base32 Decoder",
    category: "Developer",
    description: "Decode Base32 strings instantly.",
    seoTitle: "Base32 Decoder",
    seoDescription: "Decode Base32 strings instantly.",
  },

  {
    slug: "rot13-encoder",
    name: "ROT13 Encoder",
    category: "Developer",
    description: "Encode text with ROT13 instantly.",
    seoTitle: "ROT13 Encoder",
    seoDescription: "Encode text with ROT13 instantly.",
  },

  {
    slug: "rot13-decoder",
    name: "ROT13 Decoder",
    category: "Developer",
    description: "Decode ROT13 text instantly.",
    seoTitle: "ROT13 Decoder",
    seoDescription: "Decode ROT13 text instantly.",
  },

  {
    slug: "query-string-parser",
    name: "Query String Parser",
    category: "Developer",
    description: "Parse URL query strings instantly.",
    seoTitle: "Query String Parser",
    seoDescription: "Parse URL query strings instantly.",
  },

  {
    slug: "query-string-builder",
    name: "Query String Builder",
    category: "Developer",
    description: "Build URL query strings instantly.",
    seoTitle: "Query String Builder",
    seoDescription: "Build URL query strings instantly.",
  },

  {
    slug: "url-parser",
    name: "URL Parser",
    category: "Developer",
    description: "Parse URLs into components instantly.",
    seoTitle: "URL Parser",
    seoDescription: "Parse URLs into components instantly.",
  },

  {
    slug: "url-validator",
    name: "URL Validator",
    category: "Developer",
    description: "Validate URLs instantly.",
    seoTitle: "URL Validator",
    seoDescription: "Validate URLs instantly.",
  },

  {
    slug: "email-validator",
    name: "Email Validator",
    category: "Developer",
    description: "Validate email addresses instantly.",
    seoTitle: "Email Validator",
    seoDescription: "Validate email addresses instantly.",
  },

  {
    slug: "domain-extractor",
    name: "Domain Extractor",
    category: "Developer",
    description: "Extract domain names from text instantly.",
    seoTitle: "Domain Extractor",
    seoDescription: "Extract domain names from text instantly.",
  },

  {
    slug: "link-extractor",
    name: "Link Extractor",
    category: "Text",
    description: "Extract links from text instantly.",
    seoTitle: "Link Extractor",
    seoDescription: "Extract links from text instantly.",
  },

  {
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    category: "Developer",
    description: "Convert Unix timestamps instantly.",
    seoTitle: "Timestamp Converter",
    seoDescription: "Convert Unix timestamps instantly.",
  },

  {
    slug: "timestamp-now",
    name: "Current Timestamp",
    category: "Developer",
    description: "Get the current Unix timestamp instantly.",
    seoTitle: "Current Timestamp",
    seoDescription: "Get the current Unix timestamp instantly.",
  },

  {
    slug: "password-strength-checker",
    name: "Password Strength Checker",
    category: "Developer",
    description: "Check password strength instantly.",
    seoTitle: "Password Strength Checker",
    seoDescription: "Check password strength instantly.",
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
