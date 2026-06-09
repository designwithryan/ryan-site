import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Zap, Globe, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Layers,
    label: '01',
    title: 'Brand Identity',
    description:
      'From naming and strategy to visual language and guidelines , we build identities that hold under pressure and grow with your ambition.',
    tags: ['Strategy', 'Visual identity', 'Guidelines'],
  },
  {
    icon: Zap,
    label: '02',
    title: 'Motion & Film',
    description:
      'Title sequences, brand films, motion graphics. We bring stillness to life and make the fleeting feel permanent.',
    tags: ['Motion graphics', 'Brand film', 'Direction'],
  },
  {
    icon: Globe,
    label: '03',
    title: 'Digital Experience',
    description:
      'Websites and digital products that balance craft and conversion. Every interaction considered, nothing left to chance.',
    tags: ['Web design', 'Product', 'Interaction'],
  },
  {
    icon: Sparkles,
    label: '04',
    title: 'Creative Direction',
    description:
      'For teams who need a senior creative eye without the overhead. We embed into your process and raise the ceiling.',
    tags: ['Art direction', 'Consulting', 'Production'],
  },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <section id="services" className="relative bg-[#0c0b0a] px-8 pb-40">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-20 border-t border-primary/10 pt-20">
          <div>
            <p className="text-gray-200 text-xs tracking-[0.3em] uppercase font-light mb-5">
              What we do
            </p>
            <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] text-primary leading-tight">
              Four disciplines.<br />
              <span className="font-serif italic text-gray-200">One studio.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-3 text-gray-200 hover:text-primary text-sm tracking-widest uppercase font-light border border-primary/15 hover:border-primary/40 px-6 py-3 rounded-full transition-all"
          >
            Start a project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/[0.06]">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
                className="relative bg-[#0c0b0a] p-10 group hover:bg-[#111009] transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-primary/20 text-xs tracking-[0.3em] font-light">
                    {feature.label}
                  </span>
                  <Icon
                    size={20}
                    className="text-primary/20 group-hover:text-gray-200 transition-colors"
                  />
                </div>

                <h3 className="font-sans font-bold text-2xl text-primary mb-5 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-gray-200 font-light text-base leading-relaxed mb-10">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-200 text-xs tracking-widest uppercase font-light border border-primary/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/15 transition-colors" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
