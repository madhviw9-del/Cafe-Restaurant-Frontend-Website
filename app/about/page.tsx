// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* HERO-LIKE TOP SECTION */}
      <section className="px-6 pt-20 pb-16 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-zinc-950">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            About Palm Island Café
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold">
            A tiny island of calm in Ankleshwar.
          </h1>

          <p className="text-sm md:text-base text-zinc-400 max-w-3xl mx-auto">
            Palm Island Café is a cosy corner in Ankleshwar where coffee, food
            and creativity come together. A place to slow down, talk longer, and
            try something new.
          </p>

          {/* Little stats row */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs text-zinc-300">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Location
              </p>
              <p className="mt-1 text-sm text-emerald-300">
                Ankleshwar, Gujarat
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Mood
              </p>
              <p className="mt-1 text-sm text-emerald-300">
                Cosy · Creative · Chill
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                What we serve
              </p>
              <p className="mt-1 text-sm text-emerald-300">
                Coffee, shakes & comfort bites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
          {/* LEFT: STORY */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Our story
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Palm Island started with a simple idea — Ankleshwar also deserves
              a space that feels like a break from the usual. Not too loud, not
              too formal, just a warm café where you can sit for hours with
              good coffee, better conversations, and something fresh on the
              plate.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              From carefully brewed coffees and frappes to cheesecakes,
              brownies and thick shakes, every item on our menu is made to feel
              a little indulgent, without losing the comfort of “regular” food.
            </p>
          </div>

          {/* RIGHT: WHAT MAKES US DIFFERENT */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              What makes Palm Island different?
            </h2>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <span className="text-emerald-300">•</span> A cosy,
                island-inspired vibe in the middle of the city.
              </li>
              <li>
                <span className="text-emerald-300">•</span> A menu that
                balances comfort food with café classics.
              </li>
              <li>
                <span className="text-emerald-300">•</span> Regular creative
                workshops — like tote bag painting and DIY art sessions.
              </li>
              <li>
                <span className="text-emerald-300">•</span> A place to study,
                work, celebrate or just sit with your people.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKSHOPS + EXPERIENCE STRIP */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Creative corner
            </p>
            <h3 className="text-lg font-semibold">
              Not just coffee — a place to create.
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Palm Island regularly hosts small, hands-on workshops: tote bag
              painting, DIY crafts, art jams and more. You don&apos;t have to be
              a “pro artist” — you just have to be curious.
            </p>
            <p className="text-xs text-zinc-500">
              Keep an eye on our Instagram or ask our team for the next
              workshop date.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              How people use this space
            </p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>• Evening coffee dates that stretch for hours.</li>
              <li>• Study groups and laptop work sessions.</li>
              <li>• Small birthday celebrations and meetups.</li>
              <li>• Solo time with music, a book and a frappe.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PAGE FOOTER (CONNECTED VISUALLY TO HERO) */}
      <footer className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-8">
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
            <p>Open: 11:00 AM – 11:00 PM</p>
            <p className="hidden md:inline-block">·</p>
            <p>For workshops & reservations, see Contact / Reservation pages.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
