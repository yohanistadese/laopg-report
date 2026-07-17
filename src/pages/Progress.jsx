import { useState } from 'react'

function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-slate-300 flex items-center gap-1.5 text-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Close
        </button>
        <img src={src} alt={alt} className="w-full h-auto rounded-xl shadow-2xl" />
      </div>
    </div>
  )
}

function Screenshot({ label, labelColor, dotColor, src, alt }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="p-5">
        <p className={`text-xs font-bold uppercase tracking-wide mb-3 flex items-center gap-1.5 ${labelColor}`}>
          <span className={`w-2 h-2 rounded-full inline-block ${dotColor}`} />
          {label}
        </p>
        <div
          className="rounded-xl overflow-hidden border border-slate-200 cursor-zoom-in group relative"
          onClick={() => setOpen(true)}
        >
          <div className="h-56 overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              Click to enlarge
            </span>
          </div>
        </div>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  )
}

export default function Progress() {
  return (
    <div className="bg-slate-50 min-h-full py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Work In Progress
          </span>
          <h1 className="text-3xl font-extrabold text-brand-700 mb-3">Development Progress</h1>
          <p className="text-slate-500 leading-relaxed">
            A transparent view of what has been completed and what is actively being worked on
            as the LAOPG towing system is integrated into FoxTow.
          </p>
        </div>

        {/* This Week */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-base font-bold text-slate-800">This Week's Focus</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            This week was mainly focused on understanding and becoming deeply familiar with the
            LAOPG towing system — its workflow, reports, business logic, and how each part of
            the system operates.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            This step is essential before writing code. Understanding the system properly ensures
            that every feature integrated into FoxTow works correctly and reliably for the team.
          </p>
        </div>

        {/* Completed */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-base font-bold text-slate-800">Completed Work</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full inline-block mb-3">
                Completed
              </span>
              <h3 className="font-bold text-slate-800 text-base mb-2">
                Auction Hand Out Sheet — Redesigned &amp; Integrated into FoxTow
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The original LAOPG Auction Hand Out Sheet desktop form has been completely
                redesigned and successfully integrated into FoxTow as a modern web interface.
                All original functionality is preserved and the experience is significantly improved.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <Screenshot
                label="Before — LAOPG Desktop"
                labelColor="text-slate-400"
                dotColor="bg-slate-300"
                src="/assets/screenshots/before-auction.jpeg"
                alt="Original LAOPG Auction Hand Out Sheet — legacy Windows desktop form"
              />
              <Screenshot
                label="After — FoxTow Web"
                labelColor="text-green-600"
                dotColor="bg-green-500"
                src="/assets/screenshots/after-auction.jpeg"
                alt="Auction Hand Out Sheet redesigned inside FoxTow"
              />
            </div>

            <div className="px-6 pb-6 pt-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 leading-relaxed">
                The original desktop dialog has been rebuilt in FoxTow with date filters, dispatch lookup,
                vehicle search, and a clean organized table. All original data and functionality
                is fully carried over.
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-base font-bold text-slate-800 mb-4">Ongoing Integration Work</h2>
          <ul className="space-y-3">
            {[
              'Continuing to study and map remaining LAOPG screens and reports',
              'Integrating additional LAOPG report screens into FoxTow one by one',
              'Verifying data flows correctly between the dispatch and invoicing systems',
              'Testing each integrated screen before moving to the next',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-1.5 w-3.5 h-3.5 rounded-full border-2 border-amber-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Commitment */}
        <div className="bg-brand-700 rounded-2xl p-7 text-white">
          <h3 className="font-bold text-base mb-2">Our Commitment</h3>
          <p className="text-brand-200 text-sm leading-relaxed">
            This integration is being done carefully and properly. The goal is not just to
            move features across — it is to understand the business deeply and build something
            that the LA OPG team can depend on. Progress is made every day, and quality
            is prioritized at every step.
          </p>
        </div>

      </div>
    </div>
  )
}
