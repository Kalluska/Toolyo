"use client";
import { useMemo, useState } from "react";
import ToolLayout from "@/components/tool-layout";

type CompareRow = {
  line: number;
  a: string;
  b: string;
  equal: boolean;
};

export default function TextComparePage() {
  const [compareA, setCompareA] = useState("Line one\nLine two\nLine three");
  const [compareB, setCompareB] = useState("Line one\nLine too\nLine three");

  const compareResult = useMemo<CompareRow[]>(() => {
    const aLines = compareA.split("\n");
    const bLines = compareB.split("\n");
    const max = Math.max(aLines.length, bLines.length);
    const rows: CompareRow[] = [];

    for (let i = 0; i < max; i += 1) {
      rows.push({
        line: i + 1,
        a: aLines[i] ?? "",
        b: bLines[i] ?? "",
        equal: (aLines[i] ?? "") === (bLines[i] ?? ""),
      });
    }

    return rows;
  }, [compareA, compareB]);

  return (
    <ToolLayout
      currentSlug="text-compare"
      title="Text Compare"
      description="Compare two text blocks line by line."
    >
      <div className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-2 text-sm font-medium">Version A</div>
            <textarea
              value={compareA}
              onChange={(e) => setCompareA(e.target.value)}
              className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4"
            />
          </div>
          <div>
            <div className="mb-2 text-sm font-medium">Version B</div>
            <textarea
              value={compareB}
              onChange={(e) => setCompareB(e.target.value)}
              className="min-h-[220px] w-full rounded-2xl border border-zinc-200 p-4"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 text-left">
              <tr>
                <th className="px-4 py-3">Line</th>
                <th className="px-4 py-3">A</th>
                <th className="px-4 py-3">B</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {compareResult.map((row) => (
                <tr key={row.line} className={row.equal ? "bg-white" : "bg-zinc-50"}>
                  <td className="border-t px-4 py-3">{row.line}</td>
                  <td className="border-t px-4 py-3 font-mono text-xs">{row.a}</td>
                  <td className="border-t px-4 py-3 font-mono text-xs">{row.b}</td>
                  <td className="border-t px-4 py-3">{row.equal ? "Match" : "Different"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ToolLayout>
  );
}
