"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DineInPage() {
  const router = useRouter();
  const [table, setTable] = useState("");

  const handleSubmit = () => {
    if (!table.trim()) {
      alert("Please enter a table number");
      return;
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("palm_dinein_table", table);
      localStorage.setItem("palm_dinein_status", "preparing");
    }

    // ✅ IMPORTANT: this path matches your folders
    router.push("/checkout/dine-in/confirm");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-lg space-y-8">
        <header className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl font-semibold">Dine-In Details</h1>
          <p className="text-sm text-zinc-400">
            Enter your table number so we can prepare your order.
          </p>
        </header>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 space-y-4">
          <label className="text-sm text-zinc-300">Table Number</label>
          <input
            value={table}
            onChange={(e) => setTable(e.target.value)}
            placeholder="e.g., T3"
            className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
          />
          <button
            onClick={handleSubmit}
            className="w-full rounded-full bg-emerald-500 text-zinc-950 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
