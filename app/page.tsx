export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Inventory Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find products eating<br />your cash flow
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store and instantly surface slow-moving inventory. Get ML-powered sell-through predictions before dead stock kills your margins.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">23%</div>
            <div className="text-xs text-[#8b949e] mt-1">avg. capital freed</div>
          </div>
          <div className="border-x border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">48h</div>
            <div className="text-xs text-[#8b949e] mt-1">to first insight</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff]">1-click</div>
            <div className="text-xs text-[#8b949e] mt-1">Shopify connect</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22] text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Shopify product sync",
              "Dead stock detection dashboard",
              "ML sell-through rate predictions",
              "Webhook real-time inventory updates",
              "CSV export & actionable reports",
              "Email alerts for at-risk SKUs"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "You install our Shopify app with one click. We use OAuth to securely read your product and order data, then set up webhooks for real-time inventory sync — no manual exports needed."
            },
            {
              q: "How accurate are the sell-through predictions?",
              a: "Our model is trained on historical sales velocity, seasonality, and category benchmarks. Predictions improve over time as we collect more of your store's data, typically reaching 85%+ accuracy within 30 days."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no cancellation fees."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Dead Stock Detector. All rights reserved.
      </footer>
    </main>
  );
}
