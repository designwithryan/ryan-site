import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { LOGOS } from '../../data/content'
import { CopyEmailButton } from '../../components/CopyEmailButton'

export function Digitas() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto px-8 pt-32 pb-16"
      >
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-primary transition-colors mb-14 font-light">
          <ArrowLeft size={14} />
          All work
        </Link>
        <div className="mb-5">
          <img
            src={LOGOS.digitas}
            alt="Digitas"
            className="h-8 w-auto brightness-0 invert opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-5">
          Design Strategy & Consulting · 2023
        </p>
        <h1 className="font-sans font-bold text-[clamp(2.5rem,5vw,5rem)] tracking-tight text-primary leading-[1.02] max-w-4xl">
          Consulting at Speed: BRJ Platform Strategy
        </h1>
        <p className="mt-6 text-xl text-gray-200 font-serif italic font-light leading-snug max-w-2xl">
          Five fragmented platforms. One clear insight. One unified product.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {[
            { label: 'Role', value: 'Design Director (Consulting)' },
            { label: 'Client', value: 'Digitas Publicis Groupe × BRJ' },
            { label: 'Timeline', value: '~3 months, 2023' },
            { label: 'Location', value: 'Remote' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-primary text-sm tracking-[0.25em] uppercase mb-1">{label}</p>
              <p className="text-sm font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Platform Consolidation', 'UX Strategy', 'Design Systems', 'Discovery'].map((tag) => (
            <span key={tag} className="text-gray-400 text-xs tracking-widest uppercase font-light border border-gray-600/50 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Brief */}
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The brief</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-6 max-w-2xl">
              Saudi Arabia's largest employment platform. Five separate products. Growing fragmentation. A brief that said redesign , and an insight that said consolidate.
            </p>
            <p className="text-gray-200 text-base leading-relaxed font-light max-w-xl">
              BRJ operated five separate digital platforms covering different employment segments , full-time jobs, part-time, seasonal, shifts, freelancing, internships, mentorships, and training-to-employment. The vision was to build something that could compete with LinkedIn in the Saudi market. The problem: five platforms, fragmented UX, inconsistent patterns, and a growing maintenance burden.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Process */}
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The process</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-8 max-w-2xl">
              20+ stakeholder sessions. 55+ documents analyzed. One recommendation that changed everything.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {[
                { title: 'Discovery sprint', desc: 'Ran 20+ stakeholder sessions across users, business, marketing, and technical teams in the first weeks. Collected, created, and analyzed 55+ documents.' },
                { title: 'The key insight', desc: 'The five platforms overlapped more than they differed. Separate investments were creating redundancy, not value. Consolidation was the harder but better path.' },
                { title: 'Three parallel tracks', desc: 'Led UX + IA (architecture, flows, wireframes, testing), UI + Design System (visual direction, custom system), and Business Analysis (documentation, cross-track alignment) simultaneously.' },
                { title: 'Single point of clarity', desc: 'My role was the single point of clarity across three teams, two organizations, and one deadline. Both UX and UI tracks ran simultaneously by design.' },
              ].map(({ title, desc }) => (
                <div key={title} className="p-6 border border-primary/10 rounded-2xl">
                  <h4 className="text-sm font-bold text-primary mb-3">{title}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-primary/8 border border-primary/15 rounded-2xl">
              <p className="text-sm text-gray-200 mb-1 font-light">Design system scope</p>
              <p className="text-2xl font-bold text-primary">60+ components · 50+ pattern groups</p>
              <p className="text-sm text-gray-200 mt-1 font-light">Built from scratch. Scoped to be durable beyond just this platform.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Outcome */}
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The outcome</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-8 max-w-2xl">
              Five deliverables. One platform. Launched to significant press reception in the Saudi market.
            </p>
            <ul className="space-y-4 max-w-2xl mb-10">
              {[
                'Consolidated platform strategy , with 8+ research and discovery documents',
                'The BRJ Design System , 60+ components, 50+ pattern groups',
                'A phased launch plan for the unified platform',
                'Production-ready high-fidelity designs with full handoff across Phase 1 scope',
                "Internal team structure recommendation for BRJ's product org built for the scale of a unified platform",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  <p className="text-base text-gray-200 leading-relaxed font-light">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />
      <div className="max-w-[1400px] mx-auto px-8 py-20 flex gap-4">
        <CopyEmailButton variant="cta" label="Get in touch" />
        <Link to="/work" className="px-6 py-3 border border-primary/15 text-gray-200 text-sm font-light tracking-widest uppercase rounded-full hover:border-primary/40 hover:text-primary transition-all">
          All work
        </Link>
      </div>
    </div>
  )
}
