import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden noise-overlay">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster=""
      >
        {/* Fallback gradient when no video src */}
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0c0b0a]" />

      {/* Fallback background for when video doesn't load */}
      <div className="absolute inset-0 -z-10 bg-[#0c0b0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1710] via-[#0c0b0a] to-[#0d0c09]" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-7">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-sans font-bold text-lg tracking-wide"
        >
          PRISMA
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden md:flex items-center gap-10"
        >
          {['Work', 'Studio', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-200 hover:text-primary transition-colors text-sm font-light tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-sm font-light tracking-widest uppercase text-gray-200 hover:text-primary transition-colors border border-primary/20 hover:border-primary/50 px-5 py-2.5 rounded-full"
        >
          Start a project
        </motion.a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-20 max-w-[1400px] mx-auto">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-gray-200 text-sm tracking-[0.25em] uppercase font-light mb-8"
          >
            Creative Studio , Est. 2019
          </motion.p>

          <h1 className="font-sans font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-primary">
            <WordsPullUp text="We shape" delay={0.4} className="block" />
            <span className="block overflow-hidden">
              <motion.span
                className="font-serif italic text-gray-200 inline-block"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              >
                ideas
              </motion.span>
              <span className="font-sans"> </span>
              <WordsPullUp text="into" delay={0.6} />
            </span>
            <WordsPullUp text="visual worlds" delay={0.65} className="block" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="mt-10 text-gray-200 text-lg font-light max-w-md leading-relaxed"
          >
            Brand identity, motion, and digital experiences for studios and founders who refuse to be ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
            className="mt-12 flex items-center gap-8"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-primary text-sm tracking-widest uppercase font-light hover:gap-4 transition-all group"
            >
              View our work
              <ArrowDownRight
                size={16}
                className="text-primary/60 group-hover:text-primary transition-colors"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom metadata strip */}
        <div className="absolute bottom-8 right-8 text-right">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-gray-200 text-xs tracking-widest uppercase"
          >
            Berlin · Dubai · Remote
          </motion.p>
        </div>
      </div>
    </section>
  )
}
