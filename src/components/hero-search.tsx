"use client";

import { useEffect, useState } from "react";
import SiteSidebar from "@/components/site-sidebar";

export default function HeroSearch() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim()) {
      setOpen(true);
    }
  }, [search]);

  return (
    <>
      <div className="w-full max-w-[280px]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="Search tools..."
          className="w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-zinc-400"
        />
      </div>

      <SiteSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}
