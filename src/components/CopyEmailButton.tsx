import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const EMAIL = 'ryanm@ryanmohammad.com'

interface Props {
  variant: 'nav' | 'cta'
  label?: string
  onCopied?: () => void
}

export function CopyEmailButton({ variant, label, onCopied }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    onCopied?.()
    setTimeout(() => setCopied(false), 2000)
  }

  if (variant === 'nav') {
    return (
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 text-sm tracking-widest uppercase font-light text-gray-200 hover:text-primary border border-primary/15 hover:border-primary/50 px-5 py-2 rounded-full transition-all"
      >
        {copied ? (
          <>
            <Check size={13} className="text-primary" />
            <span className="text-primary">Copied</span>
          </>
        ) : (
          <>
            Say hello
            <Copy size={13} />
          </>
        )}
      </button>
    )
  }

  const defaultLabel = label ?? EMAIL

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-[#0c0b0a] text-sm font-bold tracking-widest uppercase rounded-full hover:bg-primary/80 transition-colors"
    >
      {copied ? (
        <>
          <Check size={15} />
          Copied!
        </>
      ) : (
        <>
          {defaultLabel}
          <Copy size={15} />
        </>
      )}
    </button>
  )
}
