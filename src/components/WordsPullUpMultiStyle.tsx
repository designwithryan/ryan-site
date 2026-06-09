import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export interface TextSegment {
  text: string
  italic?: boolean
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
  delay?: number
}

export function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const allWords: { word: string; italic: boolean; extra: string; idx: number }[] = []
  let idx = 0

  for (const seg of segments) {
    for (const word of seg.text.split(' ').filter(Boolean)) {
      allWords.push({ word, italic: seg.italic ?? false, extra: seg.className ?? '', idx: idx++ })
    }
  }

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {allWords.map(({ word, italic, extra, idx: i }) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${italic ? 'font-serif italic' : ''} ${extra}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.055,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
