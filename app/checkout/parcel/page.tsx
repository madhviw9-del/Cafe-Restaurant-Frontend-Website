"use client";

import Link from "next/link";

export default function ParcelPickupPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-lg space-y-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
          Café parcel
        </p>

        <h1 className="text-3xl font-semibold">
          We&apos;re working on your order
        </h1>

        <p className="text-sm text-zinc-400">
          Your food will be packed fresh at the counter. Please wait for your
          name or table to be called.
        </p>

        <div className="mt-4 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 space-y-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Payment options
          </p>

          <button
            className="w-full rounded-full bg-zinc-800 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100 hover:bg-zinc-700"
            onClick={() => alert("Pay directly in cash at the counter.")}
          >
            Pay in cash at counter
          </button>

          <button
            className="w-full rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 hover:bg-emerald-400"
            onClick={() =>
              alert("UPI / Razorpay payment screen will be connected later.")
            }
          >
            Pay by UPI (Razorpay)
          </button>
        </div>

        <div className="mt-6">
          <Link
            href="/menu"
            className="text-xs text-zinc-500 hover:text-emerald-300"
          >
            ← Back to menu
          </Link>
        </div>
      </div>
    </main>
  );
}
