export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Analysis
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Scan contracts for{' '}
          <span className="text-[#58a6ff]">payment &amp; liability risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload any freelance contract and get an instant AI-powered risk report. Flag dangerous clauses, missing protections, and unfair payment terms before you sign.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Analyzing — $24/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ Payment term analysis</span>
          <span>✓ Liability clause detection</span>
          <span>✓ Missing protections flagged</span>
          <span>✓ Plain-English summaries</span>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 py-16 border-t border-[#21262d]">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Upload Contract', desc: 'Upload your PDF or paste contract text directly into the analyzer.' },
            { step: '02', title: 'AI Scans Risks', desc: 'Our AI reviews every clause for payment traps, liability exposure, and missing protections.' },
            { step: '03', title: 'Get Risk Report', desc: 'Receive a detailed report with flagged clauses, risk scores, and recommended fixes.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-16 border-t border-[#21262d]">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
          <h3 className="text-white text-xl font-bold mb-1">Pro Plan</h3>
          <div className="text-4xl font-bold text-white mt-4 mb-1">
            $24<span className="text-lg font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect yourself</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads',
              'Full AI risk analysis',
              'Payment term red flags',
              'Liability clause detection',
              'Missing protections checklist',
              'Plain-English summaries',
              'Priority support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts (ironic, we know).</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-16 border-t border-[#21262d]">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What types of contracts can I analyze?',
              a: 'Any freelance or consulting contract — service agreements, NDAs, work-for-hire contracts, retainer agreements, and more. Upload as PDF or paste the text directly.'
            },
            {
              q: 'How accurate is the AI risk detection?',
              a: 'Our AI is trained on thousands of freelance contracts and legal patterns. It catches common red flags like unlimited revisions clauses, IP ownership traps, late payment penalties, and missing kill fees. Always consult a lawyer for high-stakes contracts.'
            },
            {
              q: 'Is my contract data kept private?',
              a: 'Yes. Your contracts are processed securely and never stored permanently or used to train AI models. Each analysis is ephemeral and deleted after your report is generated.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} ContractScan. Built for freelancers who read the fine print.</p>
      </footer>
    </main>
  );
}
