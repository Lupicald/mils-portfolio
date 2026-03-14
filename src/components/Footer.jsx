import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useLang } from '../context/LangContext'

gsap.registerPlugin(ScrollTrigger)

const T = {
  EN: {
    tag:       "Let's build together",
    cta1:      'Have a project',
    cta2:      'in mind?',
    response:  'Response within 24 hours',
    navLabel:  'Navigation',
    navLinks:  [{ label: 'Work', href: '#work' }, { label: 'About', href: '#about' }, { label: 'Process', href: '#process' }],
    socLabel:  'Connect',
    socLinks:  ['GitHub', 'LinkedIn', 'Twitter / X', 'Email'],
    status:    'System Operational',
    rights:    'All rights reserved.',
    built:     'Built with precision. Deployed with intent.',
    tagline:   'Engineering fast, scalable systems from frontend to bare metal. Every architecture decision built to last.',
    hire:      'Hire Me',
  },
  ES: {
    tag:       'Construyamos juntos',
    cta1:      '¿Tienes un proyecto',
    cta2:      'en mente?',
    response:  'Respuesta en menos de 24 horas',
    navLabel:  'Navegación',
    navLinks:  [{ label: 'Proyectos', href: '#work' }, { label: 'Sobre Mí', href: '#about' }, { label: 'Proceso', href: '#process' }],
    socLabel:  'Conectar',
    socLinks:  ['GitHub', 'LinkedIn', 'Twitter / X', 'Email'],
    status:    'Sistema Operativo',
    rights:    'Todos los derechos reservados.',
    built:     'Construido con precisión. Desplegado con intención.',
    tagline:   'Construyendo sistemas rápidos y escalables desde el frontend hasta el hardware. Cada decisión arquitectónica para perdurar.',
    hire:      'Contrátame',
  },
}

export default function Footer() {
  const footerRef = useRef(null)
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-cta', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-cta', start: 'top 85%' },
      })
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} id="contact" className="bg-obsidian rounded-t-6xl px-8 md:px-16 pt-20 pb-12">

      <div className="footer-cta max-w-7xl mx-auto mb-20 pb-20 border-b border-mist/25">
        <span className="font-mono text-champagne/50 text-[10px] tracking-[0.35em] uppercase block mb-6">{t.tag}</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 className="font-sans font-black text-ivory text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none">{t.cta1}</h2>
            <h2 className="font-serif italic text-champagne text-5xl md:text-7xl lg:text-8xl leading-[0.9] mt-1">{t.cta2}</h2>
          </div>
          <div className="flex flex-col gap-4 flex-shrink-0">
            <a href="mailto:hello@mils.dev"
              className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-4 bg-champagne text-obsidian rounded-full font-bold text-xs tracking-[0.15em] uppercase">
              <Mail size={14} strokeWidth={2.5} />
              hello@mils.dev
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
            <p className="font-mono text-ivory/25 text-[10px] tracking-widest text-center">{t.response}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
        <div className="md:col-span-2">
          <span className="font-sans font-black text-ivory text-4xl tracking-[-0.03em]">MILS</span>
          <p className="font-sans text-ivory/35 text-sm leading-relaxed mt-4 max-w-xs">{t.tagline}</p>
          <div className="flex items-center gap-2.5 mt-8">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-ivory/30 text-[10px] tracking-[0.3em] uppercase">{t.status}</span>
          </div>
        </div>

        <div>
          <span className="font-mono text-ivory/25 text-[10px] tracking-[0.3em] uppercase block mb-5">{t.navLabel}</span>
          <div className="flex flex-col gap-3">
            {t.navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="hover-lift font-sans text-ivory/45 hover:text-ivory text-sm transition-colors">{label}</a>
            ))}
          </div>
        </div>

        <div>
          <span className="font-mono text-ivory/25 text-[10px] tracking-[0.3em] uppercase block mb-5">{t.socLabel}</span>
          <div className="flex flex-col gap-3">
            {t.socLinks.map(label => (
              <a key={label} href={label === 'Email' ? 'mailto:hello@mils.dev' : '#'}
                className="hover-lift font-sans text-ivory/45 hover:text-champagne text-sm transition-colors">{label}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-mist/25 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-ivory/20 text-[10px] tracking-widest">© 2025 MILS. {t.rights}</span>
        <span className="font-mono text-ivory/20 text-[10px] tracking-widest">{t.built}</span>
      </div>
    </footer>
  )
}
