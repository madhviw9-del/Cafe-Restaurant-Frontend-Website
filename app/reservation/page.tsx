"use client";

import { FormEvent, useState } from "react";

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // later: send to backend / admin dashboard
    setTimeout(() => {
      alert("Your reservation request has been received. We’ll confirm shortly.");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* HEADER */}
        <section className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Palm Island Café
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Book your table
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Reserve a cosy spot for your next coffee date, study session or
            creative workshop at Palm Island, Ankleshwar.
          </p>
        </section>

        {/* FORM CARD */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Phone</label>
              <input
                required
                type="tel"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Date */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Date</label>
              <input
                required
                type="date"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            {/* Time */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Time</label>
              <input
                required
                type="time"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
              />
            </div>

            {/* Guests */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Number of guests</label>
              <input
                required
                type="number"
                min={1}
                max={20}
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="2"
              />
            </div>

            {/* Type */}
            <div className="space-y-1 md:col-span-1">
              <label className="text-xs text-zinc-400">Booking type</label>
              <select
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                defaultValue="regular"
              >
                <option value="regular">Regular dine-in</option>
                <option value="workshop">Creative workshop</option>
                <option value="birthday">Birthday / celebration</option>
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-1 md:col-span-2">
              <label className="text-xs text-zinc-400">
                Notes / special requests
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="Any special arrangements, workshop theme, or seating preference..."
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-emerald-500 text-zinc-950 py-2 text-xs font-semibold uppercase tracking-[0.18em] disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Confirm reservation request"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
