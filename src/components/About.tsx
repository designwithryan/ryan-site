import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { AnimatedLetter } from './AnimatedLetter'

const PARAGRAPH =
  "We believe great design is never decoration. It's the architecture of meaning , the invisible hand that guides someone from confusion to clarity, from indifference to conviction. At Prisma, we don't just make things look beautiful. We make them work beautifully."

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.3'],
  })

  const chars = PARAGRAPH.split('')

  return (
    <section
      ref={containerRef}
      id="studio"
      className="relative bg-[#0c0b0a] noise-overlay px-8 py-40 max-w-[1400px] mx-auto"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-200 text-xs tracking-[0.3em] uppercase font-light mb-16">
          Our philosophy
        </p>

        <p className="font-sans font-light text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.35] tracking-tight text-primary">
          {chars.map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollProgress={scrollYProgress}
              index={i}
              total={chars.length}
            />
          ))}
        </p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { number: '07', label: 'Years of practice' },
            { number: '140+', label: 'Projects delivered' },
            { number: '30+', label: 'Global clients' },
          ].map(({ number, label }) => (
            <div key={label} className="border-t border-primary/10 pt-8">
              <p className="font-sans font-bold text-5xl text-gray-200 mb-3">{number}</p>
              <p className="text-gray-200 text-sm tracking-widest uppercase font-light">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
