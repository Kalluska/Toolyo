"use client";

import { useState } from "react";
import SiteSidebar from "@/components/site-sidebar";

export default function HeroSearch() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-semibold transition hover:border-zinc-400"
      >
        Search tools
      </button>

      <SiteSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}
