import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/content'

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-5 w-auto brightness-0 invert opacity-50"
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
    />
  )
}

export function Work() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-20 border-b border-primary/10 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xs tracking-[0.3em] uppercase font-light mb-6"
          >
            Selected Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans font-bold text-[clamp(2.5rem,5vw,4.5rem)] text-primary leading-tight max-w-3xl"
          >
            Projects that shaped how I think about{' '}
            <span className="font-serif italic text-gray-200">design.</span>
          </motion.h1>
        </div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.08 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-b border-primary/10 hover:border-primary/25 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-5 mb-3">
                    <span className="text-primary/20 text-xs tracking-[0.2em] font-light mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      {/* Logo + category row */}
                      <div className="flex items-center gap-3 mb-2">
                        <CompanyLogo src={project.logo} alt={project.company} />
                        <p className="text-white text-xs tracking-widest uppercase font-light">
                          {project.category} · {project.year}
                        </p>
                      </div>
                      <h2 className="font-sans font-bold text-xl md:text-2xl text-primary group-hover:text-primary/80 transition-colors leading-snug">
                        {project.company} - {project.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed font-light max-w-xl ml-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 ml-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-gray-400 text-xs tracking-widest uppercase font-light border border-gray-600/50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-10 md:ml-0">
                  <span className="text-xs tracking-widest uppercase text-gray-200 group-hover:text-primary transition-colors font-light">
                    View case study
                  </span>
                  <ArrowUpRight size={16} className="text-primary/20 group-hover:text-primary/60 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
