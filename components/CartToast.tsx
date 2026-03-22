"use client";

import { Check } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartToast() {
  const { justAdded, lastAddedItem, acknowledgeLastAdded } = useCart();

  if (!justAdded || !lastAddedItem) return null;

  return (
    <button
      onClick={acknowledgeLastAdded}
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-emerald-500/70 bg-zinc-900/95 px-4 py-2 text-xs text-emerald-100 shadow-lg"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/80 text-zinc-950">
        <Check className="h-3 w-3" />
      </span>
      <span>
        <strong>{lastAddedItem}</strong> added to cart
      </span>
    </button>
  );
}
