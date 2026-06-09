import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CopyEmailButton } from './CopyEmailButton'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Resume', href: '/resume' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          to="/"
          className="text-primary font-sans font-bold text-base tracking-[0.12em] uppercase hover:text-gray-200 transition-colors"
        >
          Ryan Mohammad
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={`text-sm tracking-widest uppercase font-light transition-colors ${
                location.pathname.startsWith(href)
                  ? 'text-primary'
                  : 'text-gray-200 hover:text-gray-200'
              }`}
            >
              {label}
            </Link>
          ))}
          <CopyEmailButton variant="nav" />
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-primary transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-primary transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-primary transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0c0b0a] border-b border-primary/10 px-8 pb-6 flex flex-col gap-5"
          >
            {links.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-gray-200 hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
            <CopyEmailButton variant="nav" onCopied={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
