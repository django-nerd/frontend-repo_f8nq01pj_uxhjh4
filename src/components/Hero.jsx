import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const onBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-[100dvh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(45,212,191,0.1),transparent_45%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-slate-900/50 px-3 py-1 text-xs text-teal-100/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Precision strategy for AI transformation
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              Your Strategic Partner in AI-Driven Business Transformation.
            </h1>
            <p className="mt-4 text-lg text-slate-200/80">
              We help leaders unlock clarity, readiness, and measurable impact by aligning AI with strategy, operations, and culture.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button onClick={onBook} className="pointer-events-auto group relative inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition hover:shadow-[0_18px_40px_-12px_rgba(212,175,55,0.75)]">
                <span className="relative z-10">Book a Strategy Session</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-gold/70" />
                <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
              </button>
              <a href="#what" className="pointer-events-auto text-slate-200/80 hover:text-white transition">Explore the story</a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300/70">
        <div className="text-xs mb-2">Scroll</div>
        <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
