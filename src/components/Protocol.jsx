import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../context/LangContext'

gsap.registerPlugin(ScrollTrigger)

const T = {
  EN: {
    tag:   'Process',
    title: 'The Protocol.',
    cards: [
      {
        number: '01',
        title: 'Architect',
        description: 'Design from first principles. No cargo-culted patterns, no premature abstraction. Every architectural decision is driven by scale requirements and failure modes — not familiarity.',
      },
      {
        number: '02',
        title: 'Engineer',
        description: 'Build with obsessive attention to detail. Typed boundaries, clean interfaces, integration tests that actually guard production. Code that reads like documentation.',
      },
      {
        number: '03',
        title: 'Scale',
        description: 'Deploy systems that grow under pressure. Observability, resilience, and horizontal scaling baked in from day one — never bolted on as an afterthought.',
      },
    ],
  },
  ES: {
    tag:   'Proceso',
    title: 'El Protocolo.',
    cards: [
      {
        number: '01',
        title: 'Arquitecto',
        description: 'Diseño desde primeros principios. Sin atajos, sin patrones copiados. Cada decisión arquitectónica está respaldada por requisitos de escala y modos de falla, no por familiaridad.',
      },
      {
        number: '02',
        title: 'Ingeniero',
        description: 'Construir con atención obsesiva al detalle. Interfaces tipadas, fronteras limpias y pruebas que realmente protegen producción. Código que se lee como documentación.',
      },
      {
        number: '03',
        title: 'Escalar',
        description: 'Desplegar sistemas que crecen bajo presión. Observabilidad, resiliencia y escalado horizontal integrados desde el primer día, nunca añadidos como solución posterior.',
      },
    ],
  },
}

/* ── SVG Visuals ─────────────────────────────────────────────────────── */
function GeometricMotif() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden>
      <g className="geo-outer" style={{ transformOrigin: '90px 90px' }}>
        <circle cx="90" cy="90" r="78" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180
          return <line key={i} x1={90 + 55 * Math.cos(a)} y1={90 + 55 * Math.sin(a)} x2={90 + 78 * Math.cos(a)} y2={90 + 78 * Math.sin(a)} stroke="#C9A84C" strokeWidth="0.6" opacity="0.3" />
        })}
      </g>
      <g className="geo-mid" style={{ transformOrigin: '90px 90px' }}>
        <circle cx="90" cy="90" r="55" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 * Math.PI) / 180
          return <line key={i} x1={90 + 32 * Math.cos(a)} y1={90 + 32 * Math.sin(a)} x2={90 + 55 * Math.cos(a)} y2={90 + 55 * Math.sin(a)} stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />
        })}
      </g>
      <circle cx="90" cy="90" r="32" stroke="#C9A84C" strokeWidth="1" opacity="0.6" />
      <circle cx="90" cy="90" r="8" fill="#C9A84C" opacity="0.4" />
    </svg>
  )
}

const DOT_OPACITIES = [0.6,0.3,0.5,0.2,0.7,0.4,0.3,0.4,0.6,0.2,0.5,0.3,0.7,0.2,0.3,0.5,0.4,0.6,0.2,0.5,0.3,0.5,0.2,0.7,0.3,0.4,0.6,0.2,0.2,0.4,0.3,0.5,0.6,0.2,0.4,0.7,0.3,0.5,0.2,0.3,0.4,0.6,0.3,0.5,0.2,0.7,0.4,0.3,0.5]

function ScannerGrid() {
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden>
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={12 + col * 26} cy={12 + row * 26} r="2.5" fill="#C9A84C" opacity={DOT_OPACITIES[row * 7 + col]} />
        ))
      )}
      <line className="scan-line" x1="0" y1="90" x2="180" y2="90" stroke="#C9A84C" strokeWidth="1.5" opacity="0.7" />
      <line x1="0" y1="90" x2="180" y2="90" stroke="url(#scanGlow)" strokeWidth="12" opacity="0.15" />
      <defs>
        <linearGradient id="scanGlow" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0" />
          <stop offset="50%"  stopColor="#C9A84C" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Waveform() {
  const path = 'M 0 90 L 20 90 L 30 40 L 40 140 L 55 90 L 75 90 L 85 55 L 95 125 L 105 90 L 125 90 L 135 45 L 145 135 L 155 90 L 180 90'
  return (
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" aria-hidden>
      <path d={path} stroke="#C9A84C" strokeWidth="4" opacity="0.08" strokeLinecap="round" />
      <path className="wave-path" d={path} stroke="#C9A84C" strokeWidth="1.5" opacity="0.8" strokeLinecap="round"
        style={{ strokeDasharray: 700, strokeDashoffset: 700 }} />
      <circle className="wave-dot" cx="0" cy="90" r="4" fill="#C9A84C" opacity="0.9" />
    </svg>
  )
}

const VISUALS = [GeometricMotif, ScannerGrid, Waveform]
const CARD_BG = ['#0D0D12', '#111118', '#16161F']

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.geo-outer', { rotation: 360, duration: 24, repeat: -1, ease: 'none', transformOrigin: '90px 90px' })
      gsap.to('.geo-mid',   { rotation: -360, duration: 16, repeat: -1, ease: 'none', transformOrigin: '90px 90px' })
      gsap.to('.scan-line', { y: -65, duration: 2.2, repeat: -1, yoyo: true, ease: 'power2.inOut' })
      gsap.to('.wave-path', { strokeDashoffset: 0, duration: 2.4, repeat: -1, ease: 'power2.inOut' })
      gsap.to('.wave-dot',  { x: 180, duration: 2.4, repeat: -1, ease: 'power2.inOut' })

      cardRefs.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card, { y: 70, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 82%' },
        })
      })

      cardRefs.current.forEach((card, i) => {
        if (!card || i === 0) return
        ScrollTrigger.create({
          trigger: card, start: 'top 70%', end: 'top 20%', scrub: 0.5,
          onUpdate: self => {
            for (let j = 0; j < i; j++) {
              if (!cardRefs.current[j]) return
              const d = i - j
              gsap.set(cardRefs.current[j], {
                scale: 1 - self.progress * (0.05 * d),
                filter: `blur(${self.progress * d * 5}px)`,
                opacity: 1 - self.progress * (0.3 * d),
              })
            }
          },
          onLeaveBack: () => {
            for (let j = 0; j < i; j++) {
              if (!cardRefs.current[j]) return
              gsap.to(cardRefs.current[j], { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 0.5, ease: 'power2.out' })
            }
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="bg-ivory py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-mist/40 text-[10px] tracking-[0.35em] uppercase">{t.tag}</span>
          <h2 className="font-sans font-black text-obsidian text-4xl md:text-6xl tracking-[-0.03em] mt-3 leading-none">{t.title}</h2>
        </div>
        <div className="flex flex-col gap-5">
          {t.cards.map((card, i) => {
            const Visual = VISUALS[i]
            return (
              <div key={card.number} ref={el => (cardRefs.current[i] = el)}
                className="relative rounded-4xl overflow-hidden"
                style={{ background: CARD_BG[i], zIndex: i + 1 }}>
                <div className="absolute inset-0 rounded-4xl border border-white/[0.06] pointer-events-none" />
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 p-8 md:p-12 lg:p-16">
                  <div className="flex-shrink-0 opacity-70"><Visual /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-champagne/50 text-sm tracking-[0.3em]">{card.number}</span>
                      <span className="inline-block w-8 h-px bg-champagne/20" />
                    </div>
                    <h3 className="font-sans font-black text-ivory text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-none">{card.title}</h3>
                    <p className="font-sans text-ivory/45 text-base leading-relaxed mt-5 max-w-lg">{card.description}</p>
                  </div>
                  <div className="hidden lg:block flex-shrink-0">
                    <span className="font-sans font-black text-[8rem] leading-none tracking-tighter select-none" style={{ color: 'rgba(201,168,76,0.06)' }}>{card.number}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
