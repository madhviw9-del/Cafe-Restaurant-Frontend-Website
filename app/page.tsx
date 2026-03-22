"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* HERO SECTION */}
      <section className="min-h-[80vh] px-6 pt-24 pb-16 flex items-center">
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
            PALM ISLAND CAFÉ · ANKLESHWAR
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Palm Island Café
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            Cosy coffee, thick shakes, cheesecakes and creative workshops —
            a little island of calm right in the middle of Ankleshwar.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/reservation"
              className="rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 hover:bg-emerald-400"
            >
              Book a table
            </Link>

            <Link
              href="/menu"
              className="rounded-full border border-zinc-700 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 hover:border-emerald-400"
            >
              View menu
            </Link>
          </div>

          {/* SMALL TAGS */}
          <div className="flex flex-wrap justify-center gap-3 text-[11px] text-zinc-400 mt-4">
            <span className="px-3 py-1 rounded-full border border-zinc-700">
              Coffee · Frappes · Shakes
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-700">
              Cheesecake & brownies
            </span>
            <span className="px-3 py-1 rounded-full border border-zinc-700">
              Creative workshops
            </span>
          </div>
        </div>
      </section>

      {/* BENTO SPECIALS SECTION */}
      <section id="highlights" className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                What&apos;s special here
              </p>
              <h2 className="text-2xl font-semibold mt-1">
                Palm Island highlights
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden md:inline-flex text-xs text-zinc-400 hover:text-emerald-300"
            >
              Browse gallery →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4 auto-rows-[170px] md:auto-rows-[200px]">
            {/* Signature Drinks (big card) */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 md:col-span-2 md:row-span-2 overflow-hidden transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_22px_55px_rgba(16,185,129,0.25)]">
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),transparent_60%)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Drinks & Desserts
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Signature coffees, frappes & cheesecakes.
              </h3>
              <p className="mt-3 text-sm text-zinc-400 max-w-md">
                From cold coffees and thick shakes to Nutella cheesecake and
                hot brownies — everything is crafted to feel special.
              </p>
            </div>

            {/* Ambience */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Ambience
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Cosy, dim-lit, island-style corners.
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Perfect for long talks, study sessions or chill evenings.
              </p>
            </div>

            {/* Workshops */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Creative workshops
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                Paint, customise & create.
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Tote bag painting, DIY art and more.
              </p>
            </div>

            {/* Location */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Location
              </p>
              <h3 className="mt-2 text-sm font-semibold">
                In the heart of Ankleshwar.
              </h3>
              <p className="mt-2 text-xs text-zinc-400">
                Easy to find, hard to leave early.
              </p>
            </div>

            {/* Dine-in */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Dine-in experience
              </p>
              <p className="mt-2 text-sm font-semibold">
                Order from your phone, pay after your meal.
              </p>
            </div>

            {/* Takeaway */}
            <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Takeaway
              </p>
              <p className="mt-2 text-sm font-semibold">
                Pickup or Zomato / Swiggy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US – BIG HEADING VERSION */}
      <section
        id="about"
        className="px-6 py-28 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950"
      >
        <div className="mx-auto max-w-6xl space-y-20">
          {/* BIG CENTER HEADING */}
          <div className="space-y-6 text-center">

            {/* BIGGEST TITLE */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-emerald-300">
              ABOUT PALM ISLAND
            </h2>

            {/* SUBTITLE */}
            <p className="text-2xl md:text-4xl font-semibold leading-snug text-zinc-100 mt-4">
              A cozy little island
              <br className="hidden md:block" />
              in the middle of Ankleshwar.
            </p>

            <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Palm Island Café is a calm corner built for slow evenings,
              warm food, creative workshops & meaningful conversations.
            </p>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT – STORY */}
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-300">
                Our story
              </h3>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Palm Island started with the idea of creating a warm,
                dim-lit environment where people could slow down and feel 
                at ease. A place to study, chat, celebrate or just exist
                peacefully for a while.
              </p>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Whether you're here for coffee, dessert, work or workshops —
                this café is designed to make you feel at home.
              </p>
            </div>

            {/* RIGHT – HIGHLIGHTS */}
            <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-[0_0_45px_rgba(16,185,129,0.12)] backdrop-blur-md">
              <h3 className="text-2xl md:text-3xl font-semibold text-emerald-300">
                What makes us special?
              </h3>

              <ul className="space-y-3 text-sm md:text-base text-zinc-400 leading-relaxed">
                <li>• Cozy, warm, island-inspired ambience</li>
                <li>• Thick shakes, frappes, coffees & cheesecakes</li>
                <li>• Perfect for work, study or long talks</li>
                <li>• Calm lighting and peaceful vibe</li>
                <li>• Creative workshops (tote bags, painting, DIY)</li>
                <li>• Designed for slow evenings & conversations</li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex text-xs uppercase tracking-[0.25em] text-emerald-300 hover:text-emerald-200"
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-8 mt-auto">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center text-sm font-bold">
              PI
            </div>
            <div>
              <p className="text-sm font-semibold">Palm Island Café</p>
              <p className="text-xs text-zinc-500">
                Ankleshwar · Coffee · Food · Creativity
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
            <span>Open: 11:00 AM – 11:00 PM</span>
            <span>·</span>
            <span>For reservations, visit the booking page.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
