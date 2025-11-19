import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', company: '', notes: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="book" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.08),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold text-white">
          Book a Strategy Session
        </motion.h2>
        <p className="mt-3 text-slate-300/85">Tell us a bit about your goals. We’ll follow up with scheduling options.</p>

        {sent ? (
          <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-100">
            Thanks — your request has been recorded. We’ll be in touch shortly.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" onChange={onChange} value={form.name} placeholder="Full name" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            <input type="email" name="email" onChange={onChange} value={form.email} placeholder="Work email" className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            <input name="company" onChange={onChange} value={form.company} placeholder="Company" className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            <textarea name="notes" rows={4} onChange={onChange} value={form.notes} placeholder="What would you like to explore?" className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            <div className="sm:col-span-2">
              <button type="submit" className="group relative inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition hover:shadow-[0_18px_40px_-12px_rgba(212,175,55,0.75)]">
                <span className="relative z-10">Request booking</span>
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-gold/70" />
                <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default Booking
