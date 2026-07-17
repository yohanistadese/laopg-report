export default function About() {
  return (
    <div className="bg-slate-50 min-h-full py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-brand-700 mb-3">About</h1>
          <p className="text-slate-500 leading-relaxed text-sm">
            FoxTow is a modern web-based towing management platform being actively built and
            improved. This project connects the existing LA OPG towing operation into FoxTow —
            bringing its workflows, reports, and business logic into a clean, reliable system.
          </p>
        </div>

        {/* This Week */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">This Week</p>
            <p className="text-amber-900 text-sm leading-relaxed">
              This week was focused on understanding the LAOPG towing software — its screens,
              workflows, reports, and business logic. Getting a deep understanding of the system
              is the foundation for doing the integration correctly.
            </p>
          </div>
        </div>

        {/* Business Owner */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Business Owner</p>
          <p className="font-bold text-slate-800 text-xl mb-0.5">Mike Tallent</p>
          <p className="text-slate-500 text-sm font-medium mb-5">LA OPG — Certified Towing</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Need to reach out? Feel free to contact via email.
          </p>
          <a
            href="mailto:certifiedtowing10@gmail.com"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            certifiedtowing10@gmail.com
          </a>
        </div>

        {/* Developer */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Developer</p>
          <p className="font-bold text-slate-800 text-xl mb-0.5">Yohanis Tadese</p>
          <p className="text-brand-600 text-sm font-medium mb-5">Fullstack Software Engineer — FoxTow Team</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Need to reach out? Feel free to contact via email.
          </p>
          <a
            href="mailto:Yohanis.tadese.dev@gmail.com"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Yohanis.tadese.dev@gmail.com
          </a>
        </div>

        {/* Reach out note */}
        <p className="text-slate-400 text-xs text-center leading-relaxed">
          For any questions about the project or development progress, reach out via email above.
        </p>

      </div>
    </div>
  )
}
