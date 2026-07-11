import { useState } from 'react'

function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fffaf7]/85 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-slate-900"
            onClick={closeMenu}
          >
            Arun Kumar V
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#d96b4f]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#f1bea9] hover:text-[#d96b4f] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <path d="M6 6 18 18M6 18 18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-all duration-200 md:hidden ${
            menuOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#fff5f1] hover:text-[#d96b4f]"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
