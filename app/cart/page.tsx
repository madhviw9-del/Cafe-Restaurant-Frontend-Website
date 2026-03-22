"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, total, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  const hasItems = cart.length > 0;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-16 px-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl font-semibold">Your Cart</h1>
          <p className="text-sm text-zinc-400">
            Review your order before choosing dine-in or parcel.
          </p>
        </header>

        {!hasItems && (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 text-center space-y-3">
            <p className="text-sm text-zinc-300">Your cart is empty.</p>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950"
            >
              Browse menu
            </Link>
          </div>
        )}

        {hasItems && (
          <>
            <section className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-4"
                >
                  <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-zinc-800/80">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-zinc-500">
                          {item.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[11px] uppercase tracking-[0.16em] text-zinc-500 hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="h-7 w-7 rounded-full border border-zinc-700 flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="h-7 w-7 rounded-full border border-zinc-700 flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-emerald-400">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SUMMARY */}
            <section className="space-y-3 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-300">Subtotal</p>
                <p className="text-lg font-semibold text-emerald-400">
                  ₹{total}
                </p>
              </div>

              <div className="flex flex-wrap justify-between gap-3 pt-3 border-t border-zinc-800 mt-2">
                <button
                  onClick={clearCart}
                  className="text-xs uppercase tracking-[0.16em] text-zinc-500 hover:text-red-400"
                >
                  Clear cart
                </button>

                <Link
                  href="/checkout/type"
                  className="rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-950 text-center"
                >
                  Proceed
                </Link>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
