import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, Code2, Server } from 'lucide-react'
import { useLang } from '../context/LangContext'

gsap.registerPlugin(ScrollTrigger)

const T = {
  EN: {
    tag:      'Engineering Principles',
    title:    'Built different.',
    subtitle: 'Three principles that define every line of code I write and every system I architect.',
    card1: {
      title: 'Performance',
      label: 'LIVE METRICS',
      desc:  'Core Web Vitals obsession. Every millisecond is a design decision.',
      metrics: [
        { label: 'Core Web Vitals', value: '99', unit: '/100', tag: 'Performance' },
        { label: 'Bundle Size',     value: '42', unit: 'KB gz', tag: 'Optimization' },
        { label: 'Time to Interactive', value: '0.8', unit: 's TTI', tag: 'Runtime' },
      ],
    },
    card2: {
      title:   'Craft',
      label:   'LIVE FEED',
      desc:    'Clean code, strict types, comprehensive tests. Zero tolerance for technical debt.',
      messages: [
        '> Running ESLint... ✓ 0 violations',
        '> TypeScript strict: PASS',
        '> Test coverage: 94.2% ✓',
        '> Code review: APPROVED',
        '> Cyclomatic complexity: A+',
        '> Build output: 42.1 KB gz',
        '> Accessibility audit: 100/100',
        '> Security scan: 0 vulnerabilities',
      ],
    },
    card3: {
      title:   'Scale',
      label:   'DEPLOY GRID',
      desc:    'Multi-env CI/CD pipelines. Zero-downtime deploys. Horizontal scale by design.',
      waiting: 'Awaiting next deployment window...',
      ready:   'Deploy scheduled — 3 environments ✓',
      envs:    ['dev', 'staging', 'prod'],
      online:  'ONLINE',
      standby: 'STANDBY',
    },
  },
  ES: {
    tag:      'Principios de Ingeniería',
    title:    'Construido diferente.',
    subtitle: 'Tres principios que definen cada línea de código que escribo y cada sistema que diseño.',
    card1: {
      title: 'Rendimiento',
      label: 'MÉTRICAS',
      desc:  'Obsesión con Core Web Vitals. Cada milisegundo es una decisión de diseño.',
      metrics: [
        { label: 'Core Web Vitals',      value: '99',  unit: '/100',  tag: 'Rendimiento' },
        { label: 'Tamaño del Bundle',    value: '42',  unit: 'KB gz', tag: 'Optimización' },
        { label: 'Tiempo de Interacción', value: '0.8', unit: 's TTI', tag: 'Runtime' },
      ],
    },
    card2: {
      title:   'Artesanía',
      label:   'FEED EN VIVO',
      desc:    'Código limpio, tipos estrictos, pruebas completas. Cero tolerancia a la deuda técnica.',
      messages: [
        '> Ejecutando ESLint... ✓ 0 errores',
        '> TypeScript strict: APROBADO',
        '> Cobertura de pruebas: 94.2% ✓',
        '> Revisión de código: APROBADA',
        '> Complejidad ciclomática: A+',
        '> Salida del build: 42.1 KB gz',
        '> Auditoría de accesibilidad: 100/100',
        '> Análisis de seguridad: 0 vulnerabilidades',
      ],
    },
    card3: {
      title:   'Escala',
      label:   'GRILLA DE DESPLIEGUE',
      desc:    'Pipelines CI/CD multiambiente. Despliegues sin tiempo de inactividad. Escala horizontal por diseño.',
      waiting: 'Esperando ventana de despliegue...',
      ready:   'Despliegue programado — 3 ambientes ✓',
      envs:    ['dev', 'staging', 'prod'],
      online:  'ACTIVO',
      standby: 'ESPERA',
    },
  },
}

/* ── Card 1: Shuffler ──────────────────────────────────────────────── */
function ShufflerCard({ data }) {
  const [metrics, setMetrics] = useState(data.metrics)

  useEffect(() => { setMetrics(data.metrics) }, [data])

  useEffect(() => {
    const iv = setInterval(() => {
      setMetrics(prev => { const n = [...prev]; n.unshift(n.pop()); return n })
    }, 3000)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className="bg-obsidian border border-mist/30 rounded-4xl p-6 flex flex-col gap-5 h-full min-h-[320px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-champagne/10 flex items-center justify-center">
            <Zap size={13} className="text-champagne" />
          </div>
          <span className="font-sans font-semibold text-ivory text-sm">{data.title}</span>
        </div>
        <span className="font-mono text-mist/50 text-[10px] tracking-widest">{data.label}</span>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-700"
            style={{
              background: i === 0 ? 'rgba(201,168,76,0.07)' : 'rgba(42,42,53,0.25)',
              borderColor: i === 0 ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.04)',
              transform: `scale(${1 - i * 0.03}) translateY(${i * 2}px)`,
              opacity: 1 - i * 0.28,
              transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
            <div>
              <p className="font-mono text-ivory/40 text-[10px] tracking-widest">{m.tag}</p>
              <p className="font-sans text-ivory/70 text-xs mt-0.5">{m.label}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-3xl" style={{ color: i === 0 ? '#C9A84C' : 'rgba(250,248,245,0.4)' }}>{m.value}</span>
              <span className="font-mono text-ivory/30 text-[10px]">{m.unit}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="font-sans text-ivory/35 text-xs leading-relaxed">{data.desc}</p>
    </div>
  )
}

/* ── Card 2: Typewriter ────────────────────────────────────────────── */
function TypewriterCard({ data }) {
  const [log, setLog] = useState([])
  const [cursor, setCursor] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  // Reset when language changes
  useEffect(() => {
    setLog([])
    setCursor('')
    setMsgIdx(0)
    setCharIdx(0)
  }, [data.messages])

  useEffect(() => {
    const msgs = data.messages
    if (charIdx < msgs[msgIdx].length) {
      const t = setTimeout(() => { setCursor(p => p + msgs[msgIdx][charIdx]); setCharIdx(c => c + 1) }, 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLog(p => [...p.slice(-4), cursor])
        setCursor(''); setCharIdx(0)
        setMsgIdx(m => (m + 1) % msgs.length)
      }, 1400)
      return () => clearTimeout(t)
    }
  }, [charIdx, msgIdx, cursor, data.messages])

  return (
    <div className="bg-obsidian border border-mist/30 rounded-4xl p-6 flex flex-col gap-5 h-full min-h-[320px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-champagne/10 flex items-center justify-center">
            <Code2 size={13} className="text-champagne" />
          </div>
          <span className="font-sans font-semibold text-ivory text-sm">{data.title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-mist/50 text-[10px] tracking-widest">{data.label}</span>
        </div>
      </div>
      <div className="flex-1 bg-mist/20 rounded-2xl p-4 overflow-hidden flex flex-col justify-end gap-1.5 min-h-[160px]">
        {log.map((line, i) => (
          <p key={i} className="font-mono text-ivory/30 text-[11px] leading-relaxed truncate">{line}</p>
        ))}
        <p className="font-mono text-champagne text-[11px] leading-relaxed">
          {cursor}
          <span className="inline-block w-[2px] h-3 bg-champagne ml-[1px] animate-pulse align-middle" />
        </p>
      </div>
      <p className="font-sans text-ivory/35 text-xs leading-relaxed">{data.desc}</p>
    </div>
  )
}

/* ── Card 3: Scheduler ─────────────────────────────────────────────── */
const DAYS_EN = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const DAYS_ES = ['D', 'L', 'M', 'X', 'J', 'V', 'S']
const DEPLOY_DAYS = [1, 3, 5]

function SchedulerCard({ data, lang }) {
  const [activeDay, setActiveDay] = useState(null)
  const [phase, setPhase] = useState('idle')
  const days = lang === 'ES' ? DAYS_ES : DAYS_EN

  useEffect(() => {
    let timers = []
    const run = () => {
      const day = DEPLOY_DAYS[Math.floor(Math.random() * DEPLOY_DAYS.length)]
      timers.push(setTimeout(() => setPhase('selecting'), 200))
      timers.push(setTimeout(() => { setActiveDay(day); setPhase('active') }, 900))
      timers.push(setTimeout(() => setPhase('saving'), 1700))
      timers.push(setTimeout(() => setPhase('done'), 2500))
      timers.push(setTimeout(() => { setPhase('idle'); setActiveDay(null) }, 3800))
    }
    run()
    const iv = setInterval(run, 4800)
    return () => { clearInterval(iv); timers.forEach(clearTimeout) }
  }, [])

  const envStatuses = [
    { label: data.envs[0], status: phase !== 'idle' },
    { label: data.envs[1], status: phase === 'saving' || phase === 'done' },
    { label: data.envs[2], status: phase === 'done' },
  ]

  return (
    <div className="bg-obsidian border border-mist/30 rounded-4xl p-6 flex flex-col gap-5 h-full min-h-[320px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-champagne/10 flex items-center justify-center">
            <Server size={13} className="text-champagne" />
          </div>
          <span className="font-sans font-semibold text-ivory text-sm">{data.title}</span>
        </div>
        <span className="font-mono text-mist/50 text-[10px] tracking-widest">{data.label}</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1.5 justify-between">
          {days.map((day, i) => (
            <div key={i} className="flex-1 aspect-square rounded-xl flex items-center justify-center text-[11px] font-mono"
              style={{
                background: activeDay === i ? 'rgba(201,168,76,0.2)' : 'rgba(42,42,53,0.4)',
                border: activeDay === i ? '1px solid rgba(201,168,76,0.4)' : '1px solid rgba(255,255,255,0.04)',
                color: activeDay === i ? '#C9A84C' : 'rgba(255,255,255,0.25)',
                transform: activeDay === i && phase === 'active' ? 'scale(0.93)' : 'scale(1)',
                transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              }}>
              {day}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {envStatuses.map(env => (
            <div key={env.label} className="flex items-center justify-between px-3 py-2 rounded-xl border transition-all duration-500"
              style={{
                background: env.status ? 'rgba(74,222,128,0.05)' : 'rgba(42,42,53,0.25)',
                borderColor: env.status ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.04)',
              }}>
              <span className="font-mono text-[10px] text-ivory/40 tracking-widest uppercase">{env.label}</span>
              <span className="font-mono text-[10px] tracking-widest" style={{ color: env.status ? '#4ade80' : 'rgba(255,255,255,0.2)' }}>
                {env.status ? `● ${data.online}` : `○ ${data.standby}`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="font-sans text-ivory/35 text-xs leading-relaxed mt-auto">{data.desc}</p>
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────────────── */
export default function Features() {
  const sectionRef = useRef(null)
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features-heading', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.feature-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-ivory py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="features-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-mist/40 text-[10px] tracking-[0.35em] uppercase">{t.tag}</span>
            <h2 className="font-sans font-black text-obsidian text-4xl md:text-6xl tracking-[-0.03em] mt-3 leading-none">{t.title}</h2>
          </div>
          <p className="font-sans text-mist/50 text-sm leading-relaxed max-w-xs">{t.subtitle}</p>
        </div>
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="feature-card"><ShufflerCard data={t.card1} /></div>
          <div className="feature-card"><TypewriterCard data={t.card2} /></div>
          <div className="feature-card"><SchedulerCard data={t.card3} lang={lang} /></div>
        </div>
      </div>
    </section>
  )
}
