import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Story from './components/Story'
import Portfolio from './components/Portfolio'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-400/30 selection:text-white">
      {/* Global gradient and particle-like textures */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(16,185,129,0.06),transparent),radial-gradient(900px_300px_at_90%_110%,rgba(13,148,136,0.08),transparent)]" />

      <Navigation />
      <main>
        <Hero />
        <Story />
        <Portfolio />
        <Booking />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Neuronovate Consulting</p>
          <a href="#book" className="rounded-lg bg-gold/90 px-4 py-2 text-slate-900 font-semibold">Book session</a>
        </div>
      </footer>
    </div>
  )
}

export default App
