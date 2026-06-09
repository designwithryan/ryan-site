import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { LOGOS } from '../../data/content'
import { CopyEmailButton } from '../../components/CopyEmailButton'

export function ProTenders() {
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

        {/* Logo */}
        <div className="mb-5">
          <img
            src={LOGOS.protenders}
            alt="ProTenders"
            className="h-8 w-auto brightness-0 invert opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-5">
          Product Design · 2018–2020
        </p>
        <h1 className="font-sans font-bold text-[clamp(2.5rem,5vw,5rem)] tracking-tight text-primary leading-[1.02] max-w-4xl">
          Redesigning a Construction Procurement Platform
        </h1>
        <p className="mt-6 text-xl text-gray-200 font-serif italic font-light leading-snug max-w-2xl">
          Usability, systems, and CRM , built for a platform that builds.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {[
            { label: 'Role', value: 'Product Design Lead' },
            { label: 'Company', value: 'ProTenders' },
            { label: 'Timeline', value: 'Oct 2018 – Jan 2020' },
            { label: 'Location', value: 'Dubai, UAE' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-white text-xs tracking-[0.25em] uppercase font-light mb-1">{label}</p>
              <p className="text-sm font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Platform Redesign', 'Design Systems', 'CRM', 'Enterprise UX'].map((tag) => (
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
              A large-scale procurement and construction platform with fragmented UX, no design system, and a growing gap between what users needed and what the product delivered.
            </p>
            <p className="text-gray-200 text-base leading-relaxed font-light max-w-xl">
              ProTenders is a construction procurement platform connecting contractors, consultants, and owners across the MENA region. When I joined, the platform had evolved through engineering-driven iterations , functional but not designed. The task was to redesign the core experience, introduce a design system, and build an integrated CRM solution for workflow collaboration.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Work */}
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The work</p>
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: 'Platform redesign',
                  desc: 'Redesigned the core procurement platform end-to-end , improving navigation, workflows, and information architecture across a complex multi-role system.',
                },
                {
                  title: 'Centralized Design System',
                  desc: 'Introduced a design system from scratch: shared components, tokens, and patterns that unified the visual language and improved implementation speed across teams.',
                },
                {
                  title: 'CRM integration',
                  desc: 'Designed and launched an integrated CRM solution to support workflow management and collaboration between users and internal teams.',
                },
                {
                  title: 'Cross-functional alignment',
                  desc: 'Worked directly with engineering and product to ensure the design system was adopted at implementation , not just delivered at handoff.',
                },
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

      {/* Outcome */}
      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The outcome</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-8 max-w-2xl">
              A redesigned platform, a shared design language, and a CRM that connected teams across the construction procurement workflow.
            </p>
            <ul className="space-y-4 max-w-2xl">
              {[
                'Redesigned the core platform experience , improving usability across contractor, consultant, and owner roles',
                'Introduced a centralized Design System that improved consistency and implementation efficiency across teams',
                'Designed and launched an integrated CRM solution for workflow management and collaboration between users and internal teams',
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
