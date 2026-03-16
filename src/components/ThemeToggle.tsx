"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleTheme() {
    const root = document.documentElement
    const nextDark = !root.classList.contains("dark")

    root.classList.add("theme-animate")

    if (nextDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setDark(nextDark)

    window.setTimeout(() => {
      root.classList.remove("theme-animate")
    }, 380)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex min-w-[112px] items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900/90 dark:text-white dark:hover:bg-neutral-800"
    >
      <span className="text-base transition-transform duration-300">
        {dark ? "☀️" : "🌙"}
      </span>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  )
}
