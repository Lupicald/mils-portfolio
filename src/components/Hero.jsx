import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownRight } from 'lucide-react'
import { useLang } from '../context/LangContext'

const T = {
  EN: {
    tag:       'Software Engineer — Full-Stack & Systems',
    line1:     'Ambition meets',
    line2:     'Precision.',
    desc:      'Engineering fast, scalable systems from frontend to bare metal. Every line intentional. Every architecture decision built to last.',
    cta:       'See My Projects',
    hire:      'Hire Me',
    available: 'AVAILABLE FOR WORK',
    scroll:    'SCROLL',
  },
  ES: {
    tag:       'Ingeniero de Software — Full-Stack & Sistemas',
    line1:     'La ambición se une a la',
    line2:     'Precisión.',
    desc:      'Construyendo sistemas rápidos y escalables desde el frontend hasta el hardware. Cada línea intencional. Cada decisión arquitectónica para perdurar.',
    cta:       'Ver Proyectos',
    hire:      'Contrátame',
    available: 'DISPONIBLE',
    scroll:    'SCROLL',
  },
}

export default function Hero() {
  const containerRef = useRef(null)
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo('.hero-tag',  { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
        .fromTo('.hero-line-1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-line-2', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, '-=0.7')
        .fromTo('.hero-desc',   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-cta',    { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-social', { x: 10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-scroll', { opacity: 0 },         { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="home" className="relative h-[100dvh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 to-transparent" />

      <div className="absolute bottom-0 left-0 px-8 pb-14 md:px-16 md:pb-20 max-w-5xl">
        <div className="hero-tag flex items-center gap-3 mb-6">
          <span className="inline-block w-6 h-px bg-champagne/60" />
          <span className="font-mono text-champagne/70 text-[11px] tracking-[0.35em] uppercase">{t.tag}</span>
        </div>

        <h1 className="hero-line-1 font-sans font-black text-ivory text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] tracking-[-0.03em] leading-none uppercase">
          {t.line1}
        </h1>
        <h1 className="hero-line-2 font-serif italic text-champagne text-6xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.9] -mt-1 md:-mt-3">
          {t.line2}
        </h1>

        <p className="hero-desc font-sans text-ivory/45 text-sm md:text-base leading-relaxed max-w-md mt-6 md:mt-8">
          {t.desc}
        </p>

        <div className="hero-cta flex items-center gap-4 mt-8 md:mt-10">
          <a href="#work" className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 bg-champagne text-obsidian rounded-full font-bold text-xs tracking-[0.15em] uppercase">
            {t.cta} <ArrowDownRight size={13} strokeWidth={2.5} />
          </a>
          <a href="#contact" className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 border border-ivory/20 text-ivory/70 rounded-full font-semibold text-xs tracking-[0.15em] uppercase hover:border-ivory/40 hover:text-ivory transition-colors">
            {t.hire}
          </a>
        </div>

        <div className="flex items-center gap-5 mt-10">
          <a href="#" className="hero-social hover-lift font-mono text-ivory/30 hover:text-champagne text-[11px] tracking-widest transition-colors">GH</a>
          <span className="hero-social inline-block w-px h-3 bg-ivory/20" />
          <a href="#" className="hero-social hover-lift font-mono text-ivory/30 hover:text-champagne text-[11px] tracking-widest transition-colors">LI</a>
          <span className="hero-social inline-block w-px h-3 bg-ivory/20" />
          <a href="mailto:hello@mils.dev" className="hero-social hover-lift font-mono text-ivory/30 hover:text-champagne text-[11px] tracking-widest transition-colors">MAIL</a>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-16 right-10 hidden md:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-champagne/50 to-transparent" />
        <span className="font-mono text-ivory/25 text-[9px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>{t.scroll}</span>
      </div>

      <div className="hero-scroll absolute top-8 right-8 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-ivory/10 bg-obsidian/30 backdrop-blur-sm">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-ivory/40 text-[10px] tracking-widest">{t.available}</span>
      </div>
    </section>
  )
}
