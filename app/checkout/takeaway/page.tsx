"use client";

import Link from "next/link";
import { ExternalLink, ShoppingBag, Package } from "lucide-react";

export default function TakeawayPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-3xl space-y-10">
        {/* HEADER */}
        <header className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl font-semibold">Takeaway options</h1>
          <p className="text-sm text-zinc-400">
            Choose how you&apos;d like to get your food packed.
          </p>
        </header>

        {/* OPTIONS */}
        <section className="grid gap-6">
          {/* ZOMATO */}
          <a
            href="https://www.zomato.com" // change to real cafe link later
            target="_blank"
            className="group relative flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all hover:-translate-y-1 hover:border-pink-400/80 hover:shadow-[0_22px_55px_rgba(255,0,122,0.25)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,0,122,0.25),transparent_60%)]" />
            <div className="flex items-center gap-4">
              <ShoppingBag className="h-9 w-9 text-pink-300" />
              <div>
                <h2 className="text-lg font-semibold">Order on Zomato</h2>
                <p className="text-sm text-zinc-400">
                  Compare offers and order through Zomato.
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-zinc-500 group-hover:text-pink-300" />
          </a>

          {/* SWIGGY */}
          <a
            href="https://www.swiggy.com" // change to real cafe link later
            target="_blank"
            className="group relative flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all hover:-translate-y-1 hover:border-orange-400/80 hover:shadow-[0_22px_55px_rgba(255,160,0,0.25)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.25),transparent_60%)]" />
            <div className="flex items-center gap-4">
              <ShoppingBag className="h-9 w-9 text-orange-300" />
              <div>
                <h2 className="text-lg font-semibold">Order on Swiggy</h2>
                <p className="text-sm text-zinc-400">
                  Quick delivery from Swiggy to your doorstep.
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-zinc-500 group-hover:text-orange-300" />
          </a>

          {/* CAFE PARCEL OPTION (NEW) */}
          <Link
            href="/checkout/parcel"
            className="group relative flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_22px_55px_rgba(16,185,129,0.25)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)]" />
            <div className="flex items-center gap-4">
              <Package className="h-9 w-9 text-emerald-300" />
              <div>
                <h2 className="text-lg font-semibold">Pickup from café</h2>
                <p className="text-sm text-zinc-400">
                  We&apos;ll pack it fresh. Pay at counter by cash or UPI.
                </p>
              </div>
            </div>
            <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
              Counter parcel
            </span>
          </Link>
        </section>

        {/* BACK */}
        <div className="text-center">
          <Link
            href="/checkout/type"
            className="text-xs text-zinc-500 hover:text-emerald-300"
          >
            ← Go back
          </Link>
        </div>
      </div>
    </main>
  );
}
