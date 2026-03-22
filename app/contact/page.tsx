export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 py-20 px-6">
      <div className="mx-auto max-w-4xl space-y-16">
        
        {/* HEADER */}
        <section className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Palm Island Café
          </p>

          <h1 className="text-4xl font-semibold">Contact Us</h1>

          <p className="text-sm text-zinc-400">
            We love conversations — reach out anytime!
          </p>
        </section>

        {/* CONTACT GRID */}
        <section className="grid gap-10 md:grid-cols-2">
          
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                Address
              </p>
              <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
                Palm Island Café,  
                <br />Ankleshwar, Gujarat
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                Phone
              </p>
              <p className="mt-1 text-sm text-zinc-300">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                Email
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                palmislandcafe@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                Timings
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                Monday – Sunday  
                <br />11:00 AM – 11:00 PM
              </p>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-60 md:h-full rounded-3xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.815684559109!2d72.995!3d21.618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM3JzA0LjgiTiA3MsKwNTknNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* WORKSHOPS */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-300">
            Creative Workshops at Palm Island
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            We host hands-on creative sessions — from painting tote bags to 
            DIY art, clay modeling, resin coasters, and more.  
            Whether you’re an artist or just exploring new hobbies, 
            Palm Island is the perfect spot to create, relax, and sip your favourite drink.
          </p>
          <p className="text-sm text-zinc-400">
            Follow us on Instagram for the latest workshop announcements.
          </p>
        </section>

        {/* CONTACT FORM */}
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 space-y-6">
          <h2 className="text-xl font-semibold text-emerald-300">
            Send us a message
          </h2>

          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-zinc-400">Name</label>
              <input
                type="text"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-zinc-400">Email</label>
              <input
                type="email"
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-zinc-400">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-zinc-950 border border-zinc-700 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-emerald-500 text-zinc-950 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
