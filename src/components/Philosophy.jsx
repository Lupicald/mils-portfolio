import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../context/LangContext'

gsap.registerPlugin(ScrollTrigger)

const T = {
  EN: {
    contrast: 'Most engineers focus on: shipping features fast.',
    focus:    'MILS focuses on:',
    drama:    'systems that endure.',
    stats: [
      { value: '5+',  label: 'Years shipping' },
      { value: '40+', label: 'Systems built' },
      { value: '∞',   label: 'Lines of intent' },
    ],
  },
  ES: {
    contrast: 'La mayoría de los ingenieros se enfocan en: entregar funciones rápido.',
    focus:    'MILS se enfoca en:',
    drama:    'sistemas que perduran.',
    stats: [
      { value: '5+',  label: 'Años construyendo' },
      { value: '40+', label: 'Sistemas construidos' },
      { value: '∞',   label: 'Líneas de intención' },
    ],
  },
}

function WordSplit({ text }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="reveal-word inline-block">{word}&nbsp;</span>
        </span>
      ))}
    </>
  )
}

export default function Philosophy() {
  const sectionRef = useRef(null)
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.phil-contrast', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.phil-contrast', start: 'top 85%' },
      })
      gsap.fromTo('.reveal-word', { y: '110%', opacity: 0 }, {
        y: '0%', opacity: 1, duration: 0.65, stagger: 0.05, ease: 'power3.out',
        scrollTrigger: { trigger: '.phil-manifesto', start: 'top 75%' },
      })
      gsap.fromTo('.phil-stat', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.phil-stats', start: 'top 85%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-obsidian py-32 md:py-48 px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1920&q=80')` }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="phil-contrast mb-14 flex items-start gap-4">
          <span className="inline-block w-6 h-px bg-ivory/20 mt-3 flex-shrink-0" />
          <p className="font-sans text-ivory/35 text-lg md:text-xl leading-relaxed max-w-xl">{t.contrast}</p>
        </div>
        <div className="phil-manifesto">
          <h2 className="font-sans font-black text-ivory text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight">
            <WordSplit text={t.focus} />
          </h2>
          <h2 className="font-serif italic text-champagne text-4xl md:text-6xl lg:text-8xl leading-[0.95] mt-2">
            <WordSplit text={t.drama} />
          </h2>
        </div>
        <div className="mt-20 pt-16 border-t border-mist/40">
          <div className="phil-stats grid grid-cols-3 gap-8">
            {t.stats.map(stat => (
              <div key={stat.label} className="phil-stat">
                <p className="font-sans font-black text-champagne text-5xl md:text-6xl lg:text-7xl tracking-tight">{stat.value}</p>
                <p className="font-mono text-ivory/25 text-[10px] tracking-[0.3em] uppercase mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
    </section>
  )
}
