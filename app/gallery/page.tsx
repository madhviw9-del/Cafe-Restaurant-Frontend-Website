"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type Category = "all" | "vibes" | "food" | "workshops" | "people";

type MediaType = "image" | "video";

type GalleryItem = {
  id: number;
  src: string;        // main file (jpg/mp4)
  thumbnail: string;  // preview image for videos too
  title: string;
  category: Category;
  type: MediaType;
};

const items: GalleryItem[] = [
  // VIBES
  {
    id: 1,
    src: "/gallery/cafe-vibes-1.jpg",
    thumbnail: "/gallery/cafe-vibes-1.jpg",
    title: "Evening café mood",
    category: "vibes",
    type: "image",
  },
  {
    id: 2,
    src: "/gallery/cafe-vibes-2.jpg",
    thumbnail: "/gallery/cafe-vibes-2.jpg",
    title: "Neon corner at Palm Island",
    category: "vibes",
    type: "image",
  },

  // FOOD
  {
    id: 3,
    src: "/gallery/food-1.jpg",
    thumbnail: "/gallery/food-1.jpg",
    title: "Signature cheesecake & coffee",
    category: "food",
    type: "image",
  },
    {
    id: 4,
    src: "/gallery/food-2.jpg",
    thumbnail: "/gallery/food-2.jpg",
    title: "Frappes & cold brews",
    category: "food",
    type: "image",
  },

  // WORKSHOPS (photos)
  {
    id: 5,
    src: "/gallery/workshop-1.jpg",
    thumbnail: "/gallery/workshop-1.jpg",
    title: "Tote bag painting evening",
    category: "workshops",
    type: "image",
  },
  {
    id: 6,
    src: "/gallery/workshop-2.jpg",
    thumbnail: "/gallery/workshop-2.jpg",
    title: "DIY art table setup",
    category: "workshops",
    type: "image",
  },

  // WORKSHOPS (short video)
  {
    id: 7,
    src: "/gallery/workshop-video-1.mp4",     // 🎥 your MP4 file
    thumbnail: "/gallery/workshop-video-1-thumb.jpg", // preview image
    title: "Painting session in action",
    category: "workshops",
    type: "video",
  },

  // PEOPLE
  {
    id: 8,
    src: "/gallery/people-1.jpg",
    thumbnail: "/gallery/people-1.jpg",
    title: "Friends night at Palm Island",
    category: "people",
    type: "image",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "vibes", label: "Café vibes" },
  { id: "food", label: "Food & drinks" },
  { id: "workshops", label: "Workshops" },
  { id: "people", label: "People & moments" },
];

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 " +
  "transition-all hover:-translate-y-1 hover:border-emerald-400/80 " +
  "hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)] cursor-pointer";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filtered =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-16 px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* HEADER */}
        <header className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Gallery – Photos & Videos
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Scroll through the vibes, food, creative workshops and the people
            who bring Palm Island Café to life.
          </p>
        </header>

        {/* FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs border transition ${
                selectedCategory === cat.id
                  ? "bg-emerald-500 text-zinc-900 border-emerald-500 shadow-[0_0_26px_rgba(16,185,129,0.55)]"
                  : "border-zinc-700 text-zinc-300 hover:border-emerald-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* BENTO GRID */}
        <section className="grid gap-4 md:grid-cols-4 auto-rows-[170px] md:auto-rows-[200px]">
          {filtered.map((item, index) => {
            const isWide = index % 7 === 0;
            const isTall = index % 5 === 0;

            return (
              <article
                key={item.id}
                className={[
                  cardBase,
                  isWide ? "md:col-span-2" : "",
                  isTall ? "md:row-span-2" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveItem(item)}
              >
                {/* Glow overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),transparent_60%)]" />

                {/* THUMBNAIL */}
                <div className="relative h-full w-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-black/70 flex items-center justify-center text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                        ▶ video
                      </div>
                    </div>
                  )}
                </div>

                {/* LABEL */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                    {categories.find((c) => c.id === item.category)?.label}
                  </p>
                  <p className="text-sm text-zinc-50 mt-1">{item.title}</p>
                </div>
              </article>
            );
          })}
        </section>
      </div>

      {/* LIGHTBOX OVERLAY (IMAGE / VIDEO) */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[80vh] rounded-3xl border border-zinc-800 bg-zinc-900/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-zinc-200 hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Media */}
            <div className="relative w-full h-[60vh] bg-black">
              {activeItem.type === "image" ? (
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Caption */}
            <div className="p-4 border-t border-zinc-800">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                {categories.find((c) => c.id === activeItem.category)?.label}
              </p>
              <p className="text-sm text-zinc-50 mt-1">{activeItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
