import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { LOGOS } from '../../data/content'
import { CopyEmailButton } from '../../components/CopyEmailButton'

export function Mirum() {
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
            src={LOGOS.mirum}
            alt="Mirum / Wunderman Thompson"
            className="h-8 w-auto brightness-0 invert opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-5">
          UX Design Leadership · 2020–2022
        </p>
        <h1 className="font-sans font-bold text-[clamp(2.5rem,5vw,5rem)] tracking-tight text-primary leading-[1.02] max-w-4xl">
          Enterprise Design Across Banking, Fintech & Gov
        </h1>
        <p className="mt-6 text-xl text-gray-200 font-serif italic font-light leading-snug max-w-2xl">
          Five sectors. Multiple enterprise clients. One design standard.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {[
            { label: 'Role', value: 'UX Design Lead' },
            { label: 'Company', value: 'Mirum / Wunderman Thompson' },
            { label: 'Timeline', value: 'Feb 2020 – Jul 2022' },
            { label: 'Clients', value: 'FAB, SABB, SNB, Aldar, Maqta Gateway' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-primary text-sm tracking-[0.25em] uppercase mb-1">{label}</p>
              <p className="text-sm font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Enterprise Design', 'Banking', 'Fintech', 'Government', 'Cross-functional'].map((tag) => (
            <span key={tag} className="text-gray-400 text-xs tracking-widest uppercase font-light border border-gray-600/50 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The context</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-6 max-w-2xl">
              As UX Design Lead at one of the largest global experience agencies, I led design delivery across a diverse portfolio of enterprise clients.
            </p>
            <p className="text-gray-200 text-base leading-relaxed font-light max-w-xl mb-8">
              From major regional banks (FAB, SABB, SNB) to real estate (Aldar) and government logistics (Maqta Gateway) , each client brought different constraints, audiences, and definitions of success.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Banking & Fintech', clients: 'FAB · SABB · SNB' },
                { label: 'Real Estate', clients: 'Aldar Properties' },
                { label: 'Government Logistics', clients: 'Maqta Gateway' },
              ].map(({ label, clients }) => (
                <div key={label} className="p-5 border border-primary/10 rounded-xl">
                  <p className="text-xs text-gray-200 tracking-widest uppercase font-light mb-2">{label}</p>
                  <p className="text-sm font-bold text-primary">{clients}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The work</p>
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Cross-functional team leadership', desc: 'Led design delivery across teams on each engagement, directing end-to-end UX and product design across web and mobile platforms.' },
                { title: 'Client relationship management', desc: 'Managed key client relationships directly, balancing creative direction with commercial delivery across five sectors.' },
                { title: 'Design standards & consistency', desc: 'Established design standards across the agency to ensure consistent quality across engagements , regardless of sector or client.' },
                { title: 'Mentorship & team development', desc: 'Mentored designers at all levels. Built a culture of craft and delivery predictability across the team.' },
              ].map(({ title, desc }) => (
                <div key={title} className="p-6 border border-primary/10 rounded-2xl">
                  <h4 className="text-sm font-bold text-primary mb-3">{title}</h4>
                  <p className="text-sm text-gray-200 leading-relaxed font-light">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The outcome</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-8 max-w-2xl">
              Delivered complex enterprise digital products across five sectors. Built a track record of stakeholder management and cross-functional leadership at scale.
            </p>
            <ul className="space-y-4 max-w-2xl">
              {[
                'Led enterprise digital product delivery across banking, fintech, automotive, government, and sustainability sectors',
                'Managed key client relationships across FAB, SABB, SNB, Aldar, and Maqta Gateway',
                "Established design standards that improved delivery consistency across the agency's client portfolio",
                'Mentored designers at all levels and built a culture of craft and accountability',
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
