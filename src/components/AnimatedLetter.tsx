import { motion, useTransform, MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  scrollProgress: MotionValue<number>
  index: number
  total: number
}

export function AnimatedLetter({ char, scrollProgress, index, total }: AnimatedLetterProps) {
  const start = index / total
  const end = Math.min((index + 2) / total, 1)

  const opacity = useTransform(scrollProgress, [start, end], [0.1, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  )
}
