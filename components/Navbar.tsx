"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800 fixed top-0 left-0 z-50">
      
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-emerald-500 text-black font-bold px-3 py-1 rounded-full">
          PI
        </div>
        <p className="text-sm font-semibold tracking-wide">Palm Island</p>
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* CART ICON */}
        <Link href="/cart" className="relative">
          <ShoppingCart className="w-5 h-5 text-emerald-300" />
        </Link>

        {/* BOOK TABLE */}
        <Link
          href="/reservation"
          className="bg-emerald-500 text-black text-xs px-4 py-2 rounded-full font-semibold"
        >
          Book a Table
        </Link>
      </div>
    </nav>
  );
}
