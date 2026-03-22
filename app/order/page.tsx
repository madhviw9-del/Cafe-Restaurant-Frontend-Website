export default function OrderPage() {
  return (
    <main>
      <section className="palm-container text-center max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Order Online
        </h1>
        <p className="text-amber-100/70 mb-6">
          This is where your online ordering and payment flow will live. For
          now, it’s a placeholder explaining how customers can place orders.
        </p>

        <div className="rounded-2xl bg-[#111]/80 border border-[#3b2117]/70 p-6 text-left text-sm text-amber-100/80">
          <p className="mb-3 font-semibold text-amber-200">
            Coming soon – Online Ordering
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Show a WhatsApp “Order Now” button for quick orders</li>
            <li>Or integrate a cart + payment gateway (Razorpay, Stripe, etc.)</li>
            <li>Highlight delivery partners like Swiggy / Zomato if you use them</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
