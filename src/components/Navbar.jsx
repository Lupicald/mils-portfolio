import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react'
import { useLang } from '../context/LangContext'

const T = {
  EN: {
    links: [
      { label: 'Work',    href: '#work' },
      { label: 'About',   href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'See My Work',
  },
  ES: {
    links: [
      { label: 'Proyectos', href: '#work' },
      { label: 'Sobre Mí',  href: '#about' },
      { label: 'Proceso',   href: '#process' },
      { label: 'Contacto',  href: '#contact' },
    ],
    cta: 'Ver Mi Trabajo',
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle } = useLang()
  const t = T[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Desktop ── */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-7 px-6 py-3 rounded-full transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-ivory/70 backdrop-blur-2xl border border-mist/15 shadow-2xl shadow-obsidian/20'
            : 'bg-transparent'
        }`}
      >
        <span className={`font-sans font-black text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 ${scrolled ? 'text-obsidian' : 'text-ivory'}`}>
          MILS
        </span>

        <div className="flex items-center gap-5">
          {t.links.map(({ label, href }) => (
            <a key={label} href={href}
              className={`hover-lift text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-mist/70 hover:text-obsidian' : 'text-ivory/60 hover:text-ivory'
              }`}>
              {label}
            </a>
          ))}
        </div>

        <a href="#work"
          className={`btn-magnetic flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
            scrolled ? 'bg-champagne text-obsidian' : 'bg-champagne/15 backdrop-blur-sm text-champagne border border-champagne/30'
          }`}>
          {t.cta} <ArrowUpRight size={11} strokeWidth={2.5} />
        </a>

        <button
          onClick={toggle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[9px] tracking-widest uppercase transition-all ${
            scrolled
              ? 'border border-mist/20 text-mist/50 hover:text-obsidian hover:border-mist/40'
              : 'border border-ivory/15 text-ivory/35 hover:text-ivory hover:border-ivory/30'
          }`}
        >
          <Globe size={10} />
          {lang === 'ES' ? 'EN' : 'ES'}
        </button>
      </nav>

      {/* ── Mobile ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-5 pt-5">
        <div className={`flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 ${
          scrolled || mobileOpen ? 'bg-ivory/80 backdrop-blur-2xl border border-mist/15 shadow-lg' : 'bg-obsidian/40 backdrop-blur-sm'
        }`}>
          <span className={`font-sans font-black text-[11px] tracking-[0.3em] uppercase ${scrolled || mobileOpen ? 'text-obsidian' : 'text-ivory'}`}>
            MILS
          </span>
          <div className="flex items-center gap-3">
            <button onClick={toggle}
              className={`font-mono text-[9px] tracking-widest uppercase px-2 py-1 rounded-full border ${
                scrolled || mobileOpen ? 'border-mist/20 text-mist/50' : 'border-ivory/20 text-ivory/40'
              }`}>
              {lang === 'ES' ? 'EN' : 'ES'}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className={`transition-colors ${scrolled || mobileOpen ? 'text-obsidian' : 'text-ivory'}`}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="mt-2 bg-ivory/95 backdrop-blur-2xl rounded-2xl border border-mist/15 shadow-xl overflow-hidden">
            {t.links.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase text-mist/70 hover:text-obsidian border-b border-mist/10 last:border-0 transition-colors">
                {label}
              </a>
            ))}
            <div className="p-4">
              <a href="#work" onClick={() => setMobileOpen(false)}
                className="btn-magnetic flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-champagne text-obsidian text-[11px] font-bold tracking-[0.15em] uppercase">
                {t.cta} <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
