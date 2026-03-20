"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 transition-all duration-300 ${
        active ? "scale-100 opacity-100" : "scale-90 opacity-45"
      }`}
      fill="none"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2.5V5.25M12 18.75V21.5M21.5 12H18.75M5.25 12H2.5M18.72 5.28L16.78 7.22M7.22 16.78L5.28 18.72M18.72 18.72L16.78 16.78M7.22 7.22L5.28 5.28"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 transition-all duration-300 ${
        active ? "scale-100 opacity-100" : "scale-90 opacity-45"
      }`}
      fill="none"
    >
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  function handleToggle() {
    const root = document.documentElement;

    setSwitching(true);
    root.classList.add("theme-changing");

    setTheme(isDark ? "light" : "dark");

    window.setTimeout(() => {
      root.classList.remove("theme-changing");
      setSwitching(false);
    }, 220);
  }

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-12 items-center rounded-full border border-[var(--border-main)] bg-[var(--bg-elevated)] px-2 shadow-sm"
      >
        <span className="relative flex h-8 w-[96px] items-center rounded-full bg-[var(--bg-soft)] p-1">
          <span className="absolute left-1 top-1 h-6 w-[42px] rounded-full bg-[var(--button-bg)] shadow-sm" />
          <span className="relative z-10 grid w-full grid-cols-2 text-[var(--text-main)]">
            <span className="flex items-center justify-center">
              <SunIcon active={true} />
            </span>
            <span className="flex items-center justify-center">
              <MoonIcon active={false} />
            </span>
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={switching}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="inline-flex h-12 items-center rounded-full border border-[var(--border-main)] bg-[var(--bg-elevated)] px-2 shadow-sm transition-all duration-300 hover:shadow-md disabled:cursor-default"
    >
      <span className="relative flex h-8 w-[96px] items-center rounded-full bg-[var(--bg-soft)] p-1 ring-1 ring-black/5">
        <span
          className={`absolute top-1 h-6 w-[42px] rounded-full bg-[var(--button-bg)] shadow-sm transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] ${
            isDark ? "left-[49px]" : "left-1"
          }`}
        />

        <span className="relative z-10 grid w-full grid-cols-2">
          <span
            className={`flex items-center justify-center transition-colors duration-300 ${
              !isDark ? "text-[var(--button-text)]" : "text-[var(--text-faint)]"
            }`}
          >
            <SunIcon active={!isDark} />
          </span>

          <span
            className={`flex items-center justify-center transition-colors duration-300 ${
              isDark ? "text-[var(--button-text)]" : "text-[var(--text-faint)]"
            }`}
          >
            <MoonIcon active={isDark} />
          </span>
        </span>
      </span>
    </button>
  );
}