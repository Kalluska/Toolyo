"use client";

import { useState } from "react";
import { getBestOutputField } from "@/lib/tool-dom";

export default function OutputActionBar() {
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [downloadLabel, setDownloadLabel] = useState("Download");

  const withOutput = (fn: (output: HTMLInputElement | HTMLTextAreaElement) => void) => {
    const root = document.getElementById("toolyo-tool-root");
    if (!root) return;

    const output = getBestOutputField(root);
    if (!output) return;

    fn(output);
  };

  const handleCopy = async () => {
    withOutput(async (output) => {
      const value = output.value ?? "";
      if (!value.trim()) return;
      await navigator.clipboard.writeText(value);
      setCopyLabel("Copied");
      setTimeout(() => setCopyLabel("Copy"), 1200);
    });
  };

  const handleSelect = () => {
    withOutput((output) => {
      output.focus();
      output.select?.();
    });
  };

  const handleDownload = () => {
    withOutput((output) => {
      const value = output.value ?? "";
      if (!value.trim()) return;

      const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "toolyo-output.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setDownloadLabel("Downloaded");
      setTimeout(() => setDownloadLabel("Download"), 1200);
      setTimeout(() => URL.revokeObjectURL(url), 300);
    });
  };

  return (
    <div className="mb-3 flex flex-wrap gap-2">
      <button
        onClick={handleCopy}
        className="rounded-lg border border-zinc-300 px-3 py-1 text-sm transition hover:border-zinc-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-zinc-50 dark:hover:border-neutral-500"
        type="button"
      >
        {copyLabel}
      </button>

      <button
        onClick={handleSelect}
        className="rounded-lg border border-zinc-300 px-3 py-1 text-sm transition hover:border-zinc-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-zinc-50 dark:hover:border-neutral-500"
        type="button"
      >
        Select output
      </button>

      <button
        onClick={handleDownload}
        className="rounded-lg border border-zinc-300 px-3 py-1 text-sm transition hover:border-zinc-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-zinc-50 dark:hover:border-neutral-500"
        type="button"
      >
        {downloadLabel}
      </button>
    </div>
  );
}
