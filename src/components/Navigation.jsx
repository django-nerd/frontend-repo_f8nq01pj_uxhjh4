import React from 'react'
import { motion } from 'framer-motion'

function Navigation() {
  const onBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 ring-2 ring-gold/70 shadow-[0_0_20px_0_rgba(212,175,55,0.35)]" />
            <span className="text-sm font-semibold tracking-wide text-gold/90">Neuronovate Consulting</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
            <a href="#what" className="hover:text-white transition">What we do</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#metrics" className="hover:text-white transition">Impact</a>
          </div>
          <button onClick={onBook} className="group relative inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition hover:shadow-[0_18px_40px_-12px_rgba(212,175,55,0.75)]">
            <span className="relative z-10">Book a Strategy Session</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-gold/70" />
            <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gold/20 blur-md opacity-0 group-hover:opacity-100 transition" />
          </button>
        </motion.nav>
      </div>
    </div>
  )
}

export default Navigation
