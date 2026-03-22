// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "./context/CartContext";
import { AppleStyleDock } from "@/components/ui/dock-demo";
import CartToast from "@/components/CartToast";

export const metadata: Metadata = {
  title: "Palm Island Café – Ankleshwar",
  description:
    "Palm Island Café in Ankleshwar – great brews, chill vibes, good company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen">
        <CartProvider>
          <main className="pb-28">{children}</main>

          {/* 🔔 popup when item added */}
          <CartToast />

          {/* dock at bottom */}
          <AppleStyleDock />
        </CartProvider>
      </body>
    </html>
  );
}
