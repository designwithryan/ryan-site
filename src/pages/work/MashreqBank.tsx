import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { LOGOS } from '../../data/content'
import { CopyEmailButton } from '../../components/CopyEmailButton'

export function MashreqBank() {
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
            src={LOGOS.mashreqbank}
            alt="MashreqBank"
            className="h-8 w-auto brightness-0 invert opacity-60"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <p className="text-white text-xs tracking-[0.3em] uppercase font-light mb-5">
          Product Design · 2013–2018
        </p>
        <h1 className="font-sans font-bold text-[clamp(2.5rem,5vw,5rem)] tracking-tight text-primary leading-[1.02] max-w-4xl">
          Mashreq Neo , Digital Banking Pioneer
        </h1>
        <p className="mt-6 text-xl text-gray-200 font-serif italic font-light leading-snug max-w-2xl">
          One of the region's first fully digital banking platforms. Before digital banking was mainstream.
        </p>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {[
            { label: 'Role', value: 'Design Manager → Senior Designer → Product Designer' },
            { label: 'Company', value: 'MashreqBank' },
            { label: 'Timeline', value: 'Mar 2013 – Oct 2018' },
            { label: 'Location', value: 'Dubai, UAE' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-primary text-sm tracking-[0.25em] uppercase mb-1">{label}</p>
              <p className="text-sm font-bold text-primary">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Mobile Design', 'UX Research', 'Digital Banking', 'Team Leadership'].map((tag) => (
            <span key={tag} className="text-gray-400 text-xs tracking-widest uppercase font-light border border-gray-600/50 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The challenge</p>
          <div>
            <p className="font-bold text-xl md:text-2xl text-primary leading-snug mb-6 max-w-2xl">
              Make complex banking accessible to everyday users , on web, mobile, and SMS , before digital banking had a playbook.
            </p>
            <p className="text-gray-200 text-base leading-relaxed font-light max-w-xl">
              Mashreq Neo was one of the UAE region's first fully digital banking platforms, launching before digital banking was mainstream. The challenge was to make complex banking workflows , payments, account management, transfers, SMS banking , accessible and trustworthy to everyday users on three channels simultaneously.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      <section className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20">
          <p className="text-primary text-sm tracking-[0.25em] uppercase pt-1">The work</p>
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Research & optimization', desc: 'Led research, testing, and iterative optimization across all three channels , web, mobile, and SMS banking , based on real user feedback.' },
                { title: 'Cross-functional team leadership', desc: 'Built and managed a cross-functional team of 10 across design, development, analytics, and operations over five years.' },
                { title: 'Design standards', desc: "Established design standards and mentored junior designers, building a foundation of consistency that would hold across the platform's rapid growth." },
                { title: 'Full product lifecycle', desc: 'Spanned the full product lifecycle: discovery, design, testing, iteration, and continuous improvement , progressing from Product Designer to Design Manager.' },
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
              Set the benchmark for digital banking UX in the UAE region. Five years of growing strategic impact.
            </p>
            <ul className="space-y-4 max-w-2xl">
              {[
                'Established design standards and a culture of user research that set the benchmark for digital banking UX in the UAE region',
                "Mashreq Neo became one of the region's most recognized digital banking products",
                'Built and led a cross-functional team of 10 spanning design, development, analytics, and operations',
                'Progressed from Product Designer to Senior Designer to Design Manager over five years , demonstrating growing strategic impact alongside hands-on craft',
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
