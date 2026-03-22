"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DineInConfirmPage() {
  const [table, setTable] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = localStorage.getItem("palm_dinein_table");
    setTable(t);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-lg space-y-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
          Dine-in confirmed
        </p>

        <h1 className="text-3xl font-semibold">Your order is being prepared</h1>

        <p className="text-sm text-zinc-400">
          Please relax and enjoy your time at Palm Island Café.
          You can pay after you finish your meal.
        </p>

        {table && (
          <div className="mx-auto mt-4 inline-flex flex-col items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Table
            </span>
            <span className="text-lg font-semibold text-emerald-300">
              {table}
            </span>
          </div>
        )}

        <div className="mt-8 space-y-3">
          <p className="text-xs text-zinc-500">
            When your table is marked <span className="text-emerald-300">Ready to pay</span>,
            a <strong>“Pay Bill”</strong> option will appear in your dock.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950"
          >
            Back to menu
          </Link>
        </div>
      </div>
    </main>
  );
}
