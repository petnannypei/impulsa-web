import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import { WA_LINKS } from '../constants'

const NAV_LINKS = [
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Paquetes',   href: '#paquetes' },
  { label: 'Proceso',    href: '#proceso' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-gray-900">Impulsa</span>
          <span className="text-brand">Web</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-700 rounded-md"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 font-medium text-base"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand text-white px-4 py-2.5 rounded-lg text-sm font-semibold w-fit"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
