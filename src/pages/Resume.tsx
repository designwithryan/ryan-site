import { motion } from 'framer-motion'
import { experience, skills } from '../data/content'

export function Resume() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 pb-16 border-b border-primary/10"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase pt-1">Resume</p>
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="font-sans font-bold text-[clamp(2.5rem,4vw,3.5rem)] text-primary tracking-tight">
                Ryan Mohammad
              </h1>
              <p className="mt-2 text-gray-200 text-base font-bold">
                Product Design Leader · AI-Enabled Design Systems, Enterprise Scaling & Cross-Functional Leadership
              </p>
            </div>
            <a
              href="https://linkedin.com/in/RyanMohammad"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 mt-2 text-gray-200 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 py-16 border-b border-primary/10"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase pt-1">Summary</p>
          <p className="text-gray-200 text-base font-light leading-relaxed max-w-3xl">
            Design leader with 13+ years building digital products from the ground up and turning design into a strategic competitive advantage. Expert in zero-to-one design system builds, hands-on design leadership, and growing high-performing teams where design becomes the operational backbone of the product. Known for working across web, mobile, and internal tools. Thriving in ambiguous, fast-moving environments where structure doesn't yet exist. Track record includes building design organizations from scratch, driving measurable velocity and consistency gains, and leading design as a strategic partner from day one.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 py-16 border-b border-primary/10"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase pt-1">Skills</p>
          <div className="grid sm:grid-cols-2 gap-10">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xs tracking-[0.3em] uppercase text-primary font-light mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 border border-gray-600/50 text-gray-400 rounded-full font-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 py-16 border-b border-primary/10"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase pt-1">Experience</p>
          <div className="space-y-14">
            {experience.map((job) => (
              <div key={`${job.role}-${job.company}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-sans font-bold text-base text-primary">{job.role}</h3>
                    <p className="text-sm text-gray-200 font-light mt-0.5">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-200 font-light shrink-0 tracking-wide">{job.period}</span>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4 text-sm text-gray-200 leading-relaxed font-light">
                      <span className="mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-20 py-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase pt-1">Education</p>
          <div>
            <h3 className="font-sans font-bold text-base text-primary">BBA, Business Administration - JNU</h3>
            <p className="text-sm text-gray-200 italic font-light mt-2">Never stopped learning…</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
