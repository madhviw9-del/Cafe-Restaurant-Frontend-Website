"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type CategoryId =
  | "cold-drinks"
  | "refreshers"
  | "thick-shake"
  | "frappuccino"
  | "hot-chocolate"
  | "chocolava-cup"
  | "cheesecake"
  | "walnut-brownie"
  | "coffee";

type Category = {
  id: CategoryId;
  label: string;
};

type MenuItem = {
  id: string;
  name: string;
  price: string; // display price like "₹50 / ₹80"
  categoryId: CategoryId;
  image: string;
};

const categories: Category[] = [
  { id: "cold-drinks", label: "Cold Drinks" },
  { id: "refreshers", label: "Refreshers" },
  { id: "thick-shake", label: "Thick Shakes" },
  { id: "frappuccino", label: "Frappuccino" },
  { id: "hot-chocolate", label: "Hot Chocolate" },
  { id: "chocolava-cup", label: "Chocolava Cup" },
  { id: "cheesecake", label: "Cheesecake" },
  { id: "walnut-brownie", label: "Walnut Brownie" },
  { id: "coffee", label: "Coffee" },
];

const items: MenuItem[] = [
  // COLD DRINKS
  {
    id: "coca-cola",
    name: "Coca Cola",
    price: "₹50 / ₹80",
    categoryId: "cold-drinks",
    image: "/menu/items/coca-cola.jpg",
  },
  {
    id: "fanta-sprite",
    name: "Fanta / Sprite",
    price: "₹50 / ₹80",
    categoryId: "cold-drinks",
    image: "/menu/items/fanta-sprite.jpg",
  },
  {
    id: "thumbs-up",
    name: "Thumbs Up",
    price: "₹50 / ₹80",
    categoryId: "cold-drinks",
    image: "/menu/items/thumbs-up.jpg",
  },
  {
    id: "mineral-water-500",
    name: "Mineral Water 500ml",
    price: "₹10",
    categoryId: "cold-drinks",
    image: "/menu/items/mineral-water-500.jpg",
  },
  {
    id: "mineral-water-1l",
    name: "Mineral Water 1L",
    price: "₹20",
    categoryId: "cold-drinks",
    image: "/menu/items/mineral-water-1l.jpg",
  },

  // REFRESHERS
  {
    id: "mix-berry",
    name: "Mix Berry",
    price: "₹130 / ₹170",
    categoryId: "refreshers",
    image: "/menu/items/mix-berry.jpg",
  },
  {
    id: "pineapple-passionfruit",
    name: "Pineapple Passionfruit",
    price: "₹150 / ₹190",
    categoryId: "refreshers",
    image: "/menu/items/pineapple-passionfruit.jpg",
  },
  {
    id: "rasp-cran-strawberry",
    name: "Rasp–Cran–Strawberry",
    price: "₹150 / ₹190",
    categoryId: "refreshers",
    image: "/menu/items/rasp-cran-strawberry.jpg",
  },

  // THICK SHAKES
  {
    id: "strawberry-shake",
    name: "Strawberry",
    price: "₹130",
    categoryId: "thick-shake",
    image: "/menu/items/strawberry-shake.jpg",
  },
  {
    id: "mango-shake",
    name: "Mango",
    price: "₹140",
    categoryId: "thick-shake",
    image: "/menu/items/mango-shake.jpg",
  },
  {
    id: "blueberry-shake",
    name: "Blueberry",
    price: "₹150",
    categoryId: "thick-shake",
    image: "/menu/items/blueberry-shake.jpg",
  },
  {
    id: "kitkat-shake",
    name: "Kit-Kat",
    price: "₹180",
    categoryId: "thick-shake",
    image: "/menu/items/kitkat-shake.jpg",
  },
  {
    id: "oreo-shake",
    name: "Oreo",
    price: "₹180",
    categoryId: "thick-shake",
    image: "/menu/items/oreo-shake.jpg",
  },
  {
    id: "popcorn-caramel-shake",
    name: "Popcorn Caramel",
    price: "₹200",
    categoryId: "thick-shake",
    image: "/menu/items/popcorn-caramel.jpg",
  },
  {
    id: "cadbury-brownie-shake",
    name: "Cadbury Brownie",
    price: "₹200",
    categoryId: "thick-shake",
    image: "/menu/items/cadbury-brownie-shake.jpg",
  },
  {
    id: "lotus-biscoff-shake",
    name: "Lotus Biscoff",
    price: "₹230",
    categoryId: "thick-shake",
    image: "/menu/items/lotus-biscoff-shake.jpg",
  },

  // FRAPPUCCINO
  {
    id: "caramel-cookie-frap",
    name: "Caramel Cookie",
    price: "₹180 / ₹280",
    categoryId: "frappuccino",
    image: "/menu/items/caramel-cookie-frap.jpg",
  },
  {
    id: "choco-toffee-frap",
    name: "Choco Chips & Toffee Nut",
    price: "₹180 / ₹280",
    categoryId: "frappuccino",
    image: "/menu/items/choco-toffee-frap.jpg",
  },
  {
    id: "blueberry-cheesecake-frap",
    name: "Blueberry Cheesecake Frappe",
    price: "₹180 / ₹280",
    categoryId: "frappuccino",
    image: "/menu/items/blueberry-cheesecake-frap.jpg",
  },
  {
    id: "raspberry-mocha-frap",
    name: "STW Raspberry Mocha",
    price: "₹180 / ₹280",
    categoryId: "frappuccino",
    image: "/menu/items/raspberry-mocha-frap.jpg",
  },

  // HOT CHOCOLATE
  {
    id: "cadbury-hot-chocolate",
    name: "Cadbury Hot Chocolate",
    price: "₹130",
    categoryId: "hot-chocolate",
    image: "/menu/items/cadbury-hot-chocolate.jpg",
  },
  {
    id: "nutella-hot-chocolate",
    name: "Nutella Hot Chocolate",
    price: "₹130",
    categoryId: "hot-chocolate",
    image: "/menu/items/nutella-hot-chocolate.jpg",
  },
  {
    id: "biscoff-hot-chocolate",
    name: "Biscoff Hot Chocolate",
    price: "₹150",
    categoryId: "hot-chocolate",
    image: "/menu/items/biscoff-hot-chocolate.jpg",
  },

  // CHOCOLAVA CUP
  {
    id: "chocolava-cup",
    name: "Chocolava Cup",
    price: "₹120",
    categoryId: "chocolava-cup",
    image: "/menu/items/chocolava-cup.jpg",
  },

  // CHEESECAKE
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    price: "₹250",
    categoryId: "cheesecake",
    image: "/menu/items/blueberry-cheesecake.jpg",
  },
  {
    id: "nutella-cheesecake",
    name: "Nutella Cheesecake",
    price: "₹250",
    categoryId: "cheesecake",
    image: "/menu/items/nutella-cheesecake.jpg",
  },
  {
    id: "biscoff-cheesecake",
    name: "Biscoff Cheesecake",
    price: "₹280",
    categoryId: "cheesecake",
    image: "/menu/items/biscoff-cheesecake.jpg",
  },

  // WALNUT BROWNIE
  {
    id: "hc-brownie-icecream",
    name: "Hot Chocolate Brownie with Ice Cream",
    price: "₹150",
    categoryId: "walnut-brownie",
    image: "/menu/items/hc-brownie-icecream.jpg",
  },
  {
    id: "nutella-brownie-icecream",
    name: "Nutella Brownie with Ice Cream",
    price: "₹160",
    categoryId: "walnut-brownie",
    image: "/menu/items/nutella-brownie-icecream.jpg",
  },
  {
    id: "biscoff-brownie-icecream",
    name: "Biscoff Brownie with Ice Cream",
    price: "₹165",
    categoryId: "walnut-brownie",
    image: "/menu/items/biscoff-brownie-icecream.jpg",
  },

  // COFFEE
  {
    id: "americano",
    name: "Americano",
    price: "₹80",
    categoryId: "coffee",
    image: "/menu/items/americano.jpg",
  },
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    price: "₹100",
    categoryId: "coffee",
    image: "/menu/items/hot-coffee.jpg",
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    price: "₹100",
    categoryId: "coffee",
    image: "/menu/items/cold-coffee.jpg",
  },
  {
    id: "iced-coffee",
    name: "Iced Coffee",
    price: "₹100",
    categoryId: "coffee",
    image: "/menu/items/iced-coffee.jpg",
  },
  {
    id: "coffee-addons",
    name: "Hazelnut / Caramel / Mocha Syrup",
    price: "₹40 extra",
    categoryId: "coffee",
    image: "/menu/items/coffee-addons.jpg",
  },
];

// helper: convert "₹180 / ₹280" or "₹40 extra" → 180 or 40
function parsePriceToNumber(price: string): number {
  const cleaned = price.replace(/[^0-9.]/g, " ").trim();
  const firstNumberStr = cleaned.split(/\s+/)[0];
  const value = Number(firstNumberStr);
  return Number.isNaN(value) ? 0 : value;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | CategoryId>(
    "all",
  );
  const { addToCart } = useCart();

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.categoryId === selectedCategory);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* HEADER */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Menu with Pictures
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Tap a category or browse everything. Hover on a card to preview the
            dish like a modern food app.
          </p>
        </header>

        {/* CATEGORY PILLS */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              selectedCategory === "all"
                ? "bg-emerald-500 text-zinc-900 border-emerald-500 shadow-[0_0_26px_rgba(16,185,129,0.55)]"
                : "border-zinc-700 text-zinc-300 hover:border-emerald-400"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? "bg-emerald-500 text-zinc-900 border-emerald-500 shadow-[0_0_26px_rgba(16,185,129,0.55)]"
                  : "border-zinc-700 text-zinc-300 hover:border-emerald-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ANCHORS FOR /menu#coffee ETC. */}
        <div className="space-y-0">
          <div id="cold-drinks" />
          <div id="refreshers" />
          <div id="thick-shake" />
          <div id="frappuccino" />
          <div id="hot-chocolate" />
          <div id="chocolava-cup" />
          <div id="cheesecake" />
          <div id="walnut-brownie" />
          <div id="coffee" />
        </div>

        {/* ITEMS GRID */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const categoryLabel =
              categories.find((c) => c.id === item.categoryId)?.label || "";

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)] hover:border-emerald-400/80"
              >
                {/* glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.45),transparent_60%)]" />

                {/* IMAGE */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative p-4 flex flex-col gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-zinc-50">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-400">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    {categoryLabel}
                  </p>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: parsePriceToNumber(item.price),
                        image: item.image,
                        quantity: 1,
                        category: categoryLabel,
                      })
                    }
                    className="mt-2 w-full rounded-full border border-emerald-500/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 bg-transparent transition-colors duration-200 group-hover:bg-emerald-500 group-hover:text-zinc-950"
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
