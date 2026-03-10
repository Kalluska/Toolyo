"use client";

function dispatchInput(el: HTMLInputElement | HTMLTextAreaElement) {
  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

function getSampleForSlug(slug: string) {
  const s = slug.toLowerCase();

  if (s.includes("json")) {
    return '{\n  "name": "Toolyo",\n  "type": "utility"\n}';
  }
  if (s.includes("url") || s.includes("utm")) {
    return "https://toolyo-kappa.vercel.app/tools/word-counter?ref=demo";
  }
  if (s.includes("html")) {
    return "<h1>Hello</h1><p>Toolyo demo</p>";
  }
  if (s.includes("xml")) {
    return "<root><item>Toolyo</item></root>";
  }
  if (s.includes("yaml")) {
    return "name: Toolyo\ntype: utility";
  }
  if (s.includes("csv")) {
    return "name,age\nAlice,25\nBob,30";
  }
  if (s.includes("base64")) {
    return "Hello Toolyo";
  }
  if (s.includes("binary")) {
    return "Hello";
  }
  if (s.includes("timestamp")) {
    return "1710000000";
  }
  if (s.includes("password")) {
    return "Toolyo#2026";
  }
  if (s.includes("slug")) {
    return "My Great Toolyo Page";
  }
  if (s.includes("keyword")) {
    return "Toolyo is a fast tool site. Toolyo helps with text, SEO, and developer workflows.";
  }

  return "Hello from Toolyo.\nThis is sample text.";
}

function getEditableFields(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLTextAreaElement | HTMLInputElement>(
      'textarea:not([readonly]), input[type="text"], input[type="search"], input[type="url"], input[type="email"], input[type="password"], input:not([type])'
    )
  );
}

function getOutputField(root: HTMLElement) {
  const readonlyTextareas = Array.from(
    root.querySelectorAll<HTMLTextAreaElement>("textarea[readonly]")
  );

  if (readonlyTextareas.length > 0) {
    return readonlyTextareas[readonlyTextareas.length - 1];
  }

  const allTextareas = Array.from(root.querySelectorAll<HTMLTextAreaElement>("textarea"));
  if (allTextareas.length > 1) {
    return allTextareas[allTextareas.length - 1];
  }

  return null;
}

type ToolActionBarProps = {
  currentSlug: string;
};

export default function ToolActionBar({ currentSlug }: ToolActionBarProps) {
  const withRoot = (fn: (root: HTMLElement) => void) => {
    const root = document.getElementById("toolyo-tool-root");
    if (!root) return;
    fn(root);
  };

  const handleCopy = async () => {
    withRoot(async (root) => {
      const output = getOutputField(root);
      if (output && output.value.trim()) {
        await navigator.clipboard.writeText(output.value);
        return;
      }

      const editable = getEditableFields(root);
      if (editable.length > 0 && editable[0].value.trim()) {
        await navigator.clipboard.writeText(editable[0].value);
      }
    });
  };

  const handleClear = () => {
    withRoot((root) => {
      const editable = getEditableFields(root);
      editable.forEach((field) => {
        field.value = "";
        dispatchInput(field);
      });
    });
  };

  const handleSample = () => {
    withRoot((root) => {
      const editable = getEditableFields(root);
      if (editable.length === 0) return;

      editable[0].value = getSampleForSlug(currentSlug);
      dispatchInput(editable[0]);
    });
  };

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <button
        onClick={handleCopy}
        className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:border-zinc-400"
        type="button"
      >
        Copy result
      </button>
      <button
        onClick={handleClear}
        className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:border-zinc-400"
        type="button"
      >
        Clear
      </button>
      <button
        onClick={handleSample}
        className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:border-zinc-400"
        type="button"
      >
        Sample
      </button>
    </div>
  );
}
