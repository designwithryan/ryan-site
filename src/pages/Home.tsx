import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from '../components/WordsPullUp'
import { AnimatedLetter } from '../components/AnimatedLetter'
import { philosophy, leadership } from '../data/content'
import { CopyEmailButton } from '../components/CopyEmailButton'

const ABOUT_TEXT =
  "A design leader with 13+ years building digital products from the ground up and turning design into a strategic competitive advantage. Expert in zero-to-one design system builds, hands-on design leadership, and growing high-performing teams where design becomes the operational backbone of the product."

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.3'] })
  const chars = ABOUT_TEXT.split('')

  return (
    <section ref={ref} className="px-8 py-32 max-w-[1400px] mx-auto">
      <p className="text-primary text-sm tracking-[0.3em] uppercase mb-10">Who I am</p>
      <p className="font-sans font-light text-[clamp(1.25rem,2.8vw,2.25rem)] leading-[1.45] text-primary max-w-5xl">
        {chars.map((char, i) => (
          <AnimatedLetter key={i} char={char} scrollProgress={scrollYProgress} index={i} total={chars.length} />
        ))}
      </p>
    </section>
  )
}

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end px-8 pb-20 pt-40 max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-white text-xs tracking-[0.3em] uppercase font-light mb-10"
        >
          Design Leader · Berlin, Germany
        </motion.p>

        <h1 className="font-sans font-bold text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-tight text-primary mb-10">
          <WordsPullUp text="Ryan" delay={0.3} className="block" />
          <WordsPullUp text="Mohammad" delay={0.4} className="block" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="text-gray-200 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-12"
        >
          Design isn't decoration or making things look pretty.{' '}
          <span className="font-serif italic text-gray-200">It's the infrastructure that makes a company scalable.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-wrap gap-5"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-[#0c0b0a] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-primary/80 transition-colors"
          >
            View my work
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center px-7 py-3.5 border border-primary/20 text-gray-200 text-sm font-light tracking-widest uppercase rounded-full hover:border-primary/50 hover:text-primary transition-all"
          >
            Full resume
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="absolute bottom-8 right-8 flex gap-10">
          {[
            { number: '13+', label: 'Years' },
            { number: '16+', label: 'Team built' },
            { number: '55+', label: 'AI initiatives' },
          ].map(({ number, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-right"
            >
              <p className="font-bold text-xl text-gray-200">{number}</p>
              <p className="text-gray-200 text-xs tracking-widest uppercase font-light">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* About , scroll animated */}
      <AboutSection />

      {/* Divider */}
      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* What I do */}
      <section className="px-8 py-32 max-w-[1400px] mx-auto">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-12">What I do</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/[0.06]">
          {[
            { title: "Design Leadership", desc: "Building and scaling design organizations from zero , org structure, hiring, mentorship, career frameworks, and cultural change." },
            { title: "Design Systems", desc: "Zero-to-one design system architecture: tokens, components, patterns, governance models, and AI-enabled documentation pipelines." },
            { title: "UX & Product Design", desc: "End-to-end product design across web and mobile , research, strategy, interaction design, and high-fidelity execution." },
            { title: "AI-Enabled Workflows", desc: "Designing and implementing AI transformation strategies for design teams , agents, automation, and intelligent tooling at scale." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-black/20 backdrop-blur-sm p-8 hover:bg-black/30 transition-colors">
              <h3 className="font-sans font-bold text-base text-primary mb-3">{title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed font-light">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Design Philosophy */}
      <section className="px-8 py-32 max-w-[1400px] mx-auto">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-5">Design Philosophy</p>
        <p className="text-gray-200 font-light text-lg mb-16 max-w-xl leading-relaxed">
          The best design orgs produce better decisions. Faster. Together. With fewer rework cycles.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {philosophy.map(({ title, body }) => (
            <div key={title} className="border-t border-primary/10 pt-8">
              <h3 className="font-sans font-bold text-sm text-primary mb-3">{title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* Leadership Principles */}
      <section className="px-8 py-32 max-w-[1400px] mx-auto">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-12">Leadership Principles</p>
        <div className="grid sm:grid-cols-3 gap-10">
          {leadership.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-sans font-bold text-xl text-primary mb-4">{title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-primary/8 max-w-[1400px] mx-auto px-8" />

      {/* CTA */}
      <section className="px-8 py-32 max-w-[1400px] mx-auto">
        <h2 className="font-sans font-bold text-[clamp(2.5rem,5vw,4rem)] text-primary leading-tight mb-8 max-w-2xl">
          Let's talk about what comes{' '}
          <span className="font-serif italic text-gray-200">next.</span>
        </h2>
        <CopyEmailButton variant="cta" label="Say hello" />
      </section>
    </div>
  )
}
