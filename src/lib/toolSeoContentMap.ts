export const toolSeoContentMap: Record<string, {
  about: string;
  steps: string[];
  faq: { q: string; a: string }[];
}> = {

  "word-counter": {
    about: "A word counter helps you instantly count words, characters, and text length directly in your browser. Writers, students, and marketers use it to control length limits and analyze text quickly.",
    steps: [
      "Paste or type your text into the input area.",
      "The tool automatically counts words and characters.",
      "Use the counts to adjust your text length."
    ],
    faq: [
      { q: "Does the word counter update automatically?", a: "Yes. The tool recalculates the counts instantly as you type or paste text." },
      { q: "Can I use it for essays or articles?", a: "Yes. It works for essays, blog posts, SEO text, and any other writing." }
    ]
  },

  "character-counter": {
    about: "A character counter measures the number of characters in a text. It is useful for social media limits, SEO descriptions, and writing constraints.",
    steps: [
      "Paste or type your text.",
      "The character count updates instantly.",
      "Use the result to adjust your text length."
    ],
    faq: [
      { q: "Does it count spaces?", a: "Yes. Most character counters include spaces in the total count." },
      { q: "Why do people use character counters?", a: "They help meet limits for Twitter posts, meta descriptions, and messaging apps." }
    ]
  },

  "json-formatter": {
    about: "A JSON formatter makes JSON data easier to read by adding indentation and structure. Developers often use it when debugging APIs or reviewing data responses.",
    steps: [
      "Paste your JSON data into the input field.",
      "The tool formats it automatically.",
      "Copy the formatted output for debugging or development."
    ],
    faq: [
      { q: "Does this validate JSON?", a: "Yes. Invalid JSON will usually trigger an error or fail formatting." },
      { q: "Why format JSON?", a: "Formatted JSON is easier to read and debug." }
    ]
  },

  "password-generator": {
    about: "A password generator creates strong and random passwords. These are safer than manually created passwords and reduce the risk of account compromise.",
    steps: [
      "Generate a password using the tool.",
      "Copy the generated password.",
      "Use it for accounts that require strong security."
    ],
    faq: [
      { q: "Are generated passwords secure?", a: "Random passwords are generally stronger than human-created ones." },
      { q: "Should I reuse passwords?", a: "No. Each account should have its own unique password." }
    ]
  },

  "password-strength-checker": {
    about: "A password strength checker evaluates how secure a password is by checking length, symbols, numbers, and letter variety.",
    steps: [
      "Enter your password into the tool.",
      "The tool analyzes its strength.",
      "Improve the password until it reaches a strong rating."
    ],
    faq: [
      { q: "What makes a password strong?", a: "Length, symbols, numbers, and mixed letter cases improve strength." },
      { q: "Does this tool store passwords?", a: "No. Everything runs locally in your browser." }
    ]
  },

  "base64-to-text": {
    about: "Base64 decoding converts encoded Base64 strings back into readable text. It is commonly used in web development and data transmission.",
    steps: [
      "Paste a Base64 string.",
      "The tool decodes it instantly.",
      "Copy the decoded output."
    ],
    faq: [
      { q: "Why is Base64 used?", a: "It allows binary data to be transferred safely as text." },
      { q: "Is Base64 encryption?", a: "No. It is encoding, not encryption." }
    ]
  },

  "text-to-base64": {
    about: "This tool converts normal text into Base64 encoding, which is widely used in APIs, authentication headers, and data transfer.",
    steps: [
      "Enter the text you want to encode.",
      "The tool converts it to Base64.",
      "Copy the encoded result."
    ],
    faq: [
      { q: "Where is Base64 used?", a: "It is used in email systems, APIs, and authentication headers." },
      { q: "Can Base64 be reversed?", a: "Yes. It can be decoded back to the original text." }
    ]
  },

  "slug-generator": {
    about: "A slug generator converts titles or phrases into URL-friendly slugs for websites and SEO.",
    steps: [
      "Enter a title or phrase.",
      "The tool converts it to a slug.",
      "Use the slug in your page URL."
    ],
    faq: [
      { q: "What is a slug?", a: "A slug is the readable part of a URL that identifies a page." },
      { q: "Why are slugs important for SEO?", a: "Clean URLs help both users and search engines understand page content." }
    ]
  },

  "timestamp-converter": {
    about: "A timestamp converter translates Unix timestamps into readable date formats.",
    steps: [
      "Paste a Unix timestamp.",
      "The tool converts it to human-readable time.",
      "Use the output for debugging or logging."
    ],
    faq: [
      { q: "What is a Unix timestamp?", a: "It represents seconds since January 1, 1970." },
      { q: "Why convert timestamps?", a: "Developers need readable dates when debugging logs." }
    ]
  },

  "url-parser": {
    about: "A URL parser breaks a URL into its individual components like protocol, hostname, path, query, and fragment.",
    steps: [
      "Paste a full URL.",
      "The tool splits it into components.",
      "Use the parsed output for debugging or analysis."
    ],
    faq: [
      { q: "What parts does a URL contain?", a: "Protocol, domain, path, query parameters, and fragments." },
      { q: "Why parse URLs?", a: "It helps developers inspect routing and query parameters." }
    ]
  }

};
