import React from 'react'
import { motion } from 'framer-motion'

const Case = ({ title, points, idx }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur py-16">
    <div className="absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_0%,rgba(20,184,166,0.12),transparent),radial-gradient(1000px_300px_at_50%_100%,rgba(234,179,8,0.08),transparent)]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="text-2xl sm:text-3xl font-semibold text-white">{title}</div>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300/85">
        {points.map((p, i) => (
          <li key={i} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">{p}</li>
        ))}
      </ul>
    </div>
    <div className="pointer-events-none absolute -inset-1 bg-[linear-gradient(120deg,rgba(16,185,129,0.15),transparent_30%,rgba(234,179,8,0.12)_70%,transparent)] opacity-40" />
  </motion.div>
)

function Portfolio() {
  const cases = [
    {
      title: 'AI Knowledge Assistant',
      points: ['90% faster retrieval', 'Policy-safe responses', 'Feedback loops built-in'],
    },
    {
      title: 'Enterprise Front Door Redesign',
      points: ['Unified intake', 'Smart routing', 'Ops visibility increased'],
    },
    {
      title: 'Credit Assessment Optimisation',
      points: ['Risk model uplift', 'Manual review reduced', 'Decision time ↓ 35%'],
    },
    {
      title: 'Customer Operations Agent',
      points: ['Resolve first contact', 'Lower handle time', 'Secure actions via APIs'],
    },
    {
      title: 'Capability Mapping',
      points: ['Skills inventory', 'Role-level pathways', 'Target-state design'],
    },
  ]

  return (
    <section id="portfolio" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.07),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(13,148,136,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-semibold text-white">
          Selected Work
        </motion.h2>
        <div className="mt-10 space-y-8">
          {cases.map((c, i) => (
            <Case key={i} idx={i} title={c.title} points={c.points} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
