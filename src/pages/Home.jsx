import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-full">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Active Development
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            LAOPG is Being Integrated<br />
            <span className="text-brand-200">into FoxTow</span>
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed mb-8">
            This site tracks the progress of integrating the LA OPG towing system into FoxTow —
            a modern, web-based platform being built for the future of the business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/progress"
              className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors shadow-sm"
            >
              View Work Progress
            </Link>
            <Link
              to="/about"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* What this site is */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-700 mb-4">What Is This Site?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            This page is a project update hub for Mike Tallent and the LA OPG team. It provides
            a transparent view of what development work has been completed, what is currently
            in progress, and who is handling the integration.
          </p>
          <p className="text-slate-600 leading-relaxed">
            FoxTow is being built carefully and professionally. Every part of the LA OPG towing
            system — its reports, workflows, and business logic — is being studied and rebuilt
            in FoxTow to ensure the integration is done correctly and reliably.
          </p>
        </div>
      </section>

      {/* Status cards */}
      <section className="pb-16 px-4">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-bold text-slate-700 text-sm mb-1">Work Completed</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Auction Hand Out Sheet fully redesigned and integrated into FoxTow.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-bold text-slate-700 text-sm mb-1">In Progress</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              4 hours/day, 5 days/week actively working on the LAOPG integration.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
            <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="font-bold text-slate-700 text-sm mb-1">Built Carefully</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every feature is understood and tested before being moved into FoxTow.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
