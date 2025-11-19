import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Section = ({ id, eyebrow, title, body, cta, onCta, children }) => (
  <section id={id} className="relative py-28 sm:py-36">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(13,148,136,0.08),transparent_45%)]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }} className="max-w-3xl">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-slate-900/50 px-3 py-1 text-xs text-teal-100/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {eyebrow}
          </div>
        )}
        {title && <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-white">{title}</h2>}
        {body && <p className="mt-4 text-slate-300/80 leading-relaxed">{body}</p>}
        {cta && (
          <button onClick={onCta} className="mt-8 inline-flex items-center rounded-xl bg-gold px-5 py-2.5 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]">
            {cta}
          </button>
        )}
      </motion.div>
      {children}
    </div>
  </section>
)

function Story() {
  const onBook = () => {
    const el = document.getElementById('book')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Section id="what" eyebrow="Outcomes" title="What we help leaders achieve" body="Clarity on AI opportunities, organisational readiness, and an execution path that transforms people, process and performance.">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { h: 'Clarity', p: 'Define high-value AI use cases and a grounded roadmap.' },
            { h: 'Readiness', p: 'Assess capability, data, governance and change appetite.' },
            { h: 'Transformation', p: 'Deliver integrated solutions that move the metrics.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
              <div className="text-lg font-semibold text-white">{item.h}</div>
              <p className="mt-2 text-sm text-slate-300/80">{item.p}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="how" eyebrow="Approach" title="How we combine strategy, automation and AI integration" body="We align leadership vision with operating model changes and enabling technology. Each phase builds momentum and de-risks adoption." cta="Discuss your context" onCta={onBook}>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { h: 'People', p: 'Change, skills and ways of working' },
            { h: 'Process', p: 'Automation, orchestration and controls' },
            { h: 'Performance', p: 'Goals, metrics and continuous improvement' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle,rgba(20,184,166,0.06),transparent_60%)]" />
              <div className="relative">
                <div className="text-white font-semibold">{item.h}</div>
                <p className="mt-2 text-sm text-slate-300/80">{item.p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frameworks" title="AIDE and RISE frameworks" body="Two pragmatic lenses that keep initiatives outcome-focused: AIDE (Assess, Imagine, Design, Execute) and RISE (Runway, Integrations, Scale, Evolve).">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'AIDE', steps: ['Assess', 'Imagine', 'Design', 'Execute'] },
            { name: 'RISE', steps: ['Runway', 'Integrations', 'Scale', 'Evolve'] },
          ].map((f, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-white font-semibold">{f.name}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.steps.map((s, i) => (
                  <span key={i} className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-100 text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="metrics" eyebrow="Impact metrics" title="Results we optimise for" body="Every engagement ties to measurable operational and financial outcomes.">
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: 'Time-to-value', v: '↓ 40%' },
            { k: 'Unit cost', v: '↓ 25%' },
            { k: 'Customer CSAT', v: '↑ 18%' },
            { k: 'Risk events', v: '↓ 30%' },
          ].map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.07),transparent_60%)]" />
              <div className="relative">
                <div className="text-2xl font-semibold text-white">{m.v}</div>
                <div className="mt-1 text-sm text-slate-300/80">{m.k}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Story
