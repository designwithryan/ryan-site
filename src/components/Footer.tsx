import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-primary/10 mt-auto">
      <div className="max-w-[1400px] mx-auto px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-primary">Ryan Mohammad</p>
          <p className="text-sm text-gray-200 mt-1 font-light tracking-wide">Design Leader · Berlin, Germany</p>
        </div>

        <nav className="flex flex-wrap gap-8">
          <Link to="/work" className="text-sm text-gray-200 hover:text-primary transition-colors font-light tracking-widest uppercase">
            Work
          </Link>
          <Link to="/resume" className="text-sm text-gray-200 hover:text-primary transition-colors font-light tracking-widest uppercase">
            Resume
          </Link>
          <a
            href="https://linkedin.com/in/RyanMohammad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-200 hover:text-primary transition-colors font-light tracking-widest uppercase"
          >
            LinkedIn
          </a>
        </nav>

        <p className="text-xs text-primary/20 font-light">
          © {new Date().getFullYear()} Ryan Mohammad
        </p>
      </div>
    </footer>
  )
}
