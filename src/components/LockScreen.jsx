import { useState } from 'react'

export default function LockScreen({ onUnlock }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [shaking, setShaking] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const ok = onUnlock(code)
    if (!ok) {
      setError('Incorrect access code. Please try again.')
      setShaking(true)
      setCode('')
      setTimeout(() => setShaking(false), 500)
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-brand-700 to-brand-600 flex items-center justify-center z-50 px-4">
      <div className={`w-full max-w-sm ${shaking ? 'animate-bounce' : ''}`}>
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-brand-600 px-8 py-6 text-center">
            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-white font-bold text-xl">LA OPG Knowledge Base</h1>
            <p className="text-brand-200 text-sm mt-1">Restricted Access</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-7">
            <label htmlFor="accessCode" className="block text-sm font-semibold text-slate-700 mb-2">
              Access Code
            </label>
            <input
              id="accessCode"
              type="password"
              value={code}
              onChange={e => { setCode(e.target.value); setError('') }}
              autoFocus
              autoComplete="off"
              placeholder="Enter access code"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition placeholder-slate-400"
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Unlock Access
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 pb-5">
            Access expires after 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}
