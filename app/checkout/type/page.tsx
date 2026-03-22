"use client";

import { useRouter } from "next/navigation";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";

export default function CheckoutTypePage() {
  const router = useRouter();

  const handleSelect = (type: "dine-in" | "takeaway") => {
    if (typeof window !== "undefined") {
      localStorage.setItem("palm_orderType", type);
    }
    router.push(`/checkout/${type}`);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-3xl space-y-10">

        {/* HEADER */}
        <header className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl font-semibold">How would you like to order?</h1>
          <p className="text-sm text-zinc-400">
            Choose your preferred way to receive your delicious food.
          </p>
        </header>

        {/* OPTIONS */}
        <section className="grid gap-6 md:grid-cols-2">

          {/* TAKEAWAY */}
          <button
            onClick={() => handleSelect("takeaway")}
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_22px_55px_rgba(16,185,129,0.25)]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)]" />
            
            <ShoppingBag className="h-10 w-10 text-emerald-300 mb-4" />

            <h2 className="text-xl font-semibold mb-2">Takeaway</h2>
            <p className="text-sm text-zinc-400">
              Enjoy your meal at home within 30 minutes.  
              Order seamlessly through Zomato or Swiggy.
            </p>
          </button>

          {/* DINE-IN */}
          <button
            onClick={() => handleSelect("dine-in")}
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-left transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_22px_55px_rgba(16,185,129,0.25)]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)]" />

            <UtensilsCrossed className="h-10 w-10 text-emerald-300 mb-4" />

            <h2 className="text-xl font-semibold mb-2">Dine In</h2>
            <p className="text-sm text-zinc-400">
              Sit back and enjoy your food in our cosy café atmosphere.
            </p>
          </button>
        </section>
      </div>
    </main>
  );
}
