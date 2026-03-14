import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Gamepad2,
  Timer,
  ShoppingCart,
  BarChart3,
  Shield,
  ChevronRight,
  Github,
  Smartphone,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Design tokens (purple palette) ─────────────────────────────────── */
const P = {
  void:        '#0A0A14',
  voidSurface: '#111120',
  voidCard:    '#14142A',
  plasma:      '#7B61FF',
  plasmaLight: '#9D8BFF',
  plasmaGlow:  'rgba(123,97,255,0.22)',
  ghost:       '#F0EFF4',
  ghostMuted:  'rgba(240,239,244,0.45)',
  ghostDim:    'rgba(240,239,244,0.18)',
  border:      'rgba(123,97,255,0.18)',
  borderHover: 'rgba(123,97,255,0.4)',
}

const STACK = [
  'React Native',
  'Expo ~51',
  'TypeScript',
  'SQLite',
  'Expo Router',
  'EAS Build',
]

const BF_NAV = {
  EN: { links: ['Features', 'Stack', 'Privacy'], back: 'MILS' },
  ES: { links: ['Funciones', 'Stack', 'Privacidad'], back: 'MILS' },
}

/* ── BacklogFlow Navbar ───────────────────────────────────────────────── */
function BFNavbar() {
  const { lang, toggle } = useLang()
  const nav = BF_NAV[lang]
  const anchors = ['bf-features', 'bf-stack', 'bf-privacy']

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-5 px-5 py-2.5 rounded-full"
      style={{ background: 'rgba(10,10,20,0.7)', backdropFilter: 'blur(24px)', border: `1px solid ${P.border}`, boxShadow: `0 0 40px ${P.plasmaGlow}` }}
    >
      <Link to="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors"
        style={{ color: P.ghostMuted }}
        onMouseEnter={e => (e.currentTarget.style.color = P.ghost)}
        onMouseLeave={e => (e.currentTarget.style.color = P.ghostMuted)}>
        <ArrowLeft size={11} /> {nav.back}
      </Link>
      <span style={{ width: 1, height: 16, background: P.border }} />
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: P.plasma, boxShadow: `0 0 8px ${P.plasma}` }} />
        <span className="font-sans font-black text-sm tracking-[-0.03em]" style={{ color: P.ghost }}>BacklogFlow</span>
      </div>
      <span style={{ width: 1, height: 16, background: P.border }} />
      <div className="flex items-center gap-4">
        {nav.links.map((l, i) => (
          <a key={l} href={`#${anchors[i]}`}
            className="font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: P.ghostMuted }}
            onMouseEnter={e => (e.currentTarget.style.color = P.plasmaLight)}
            onMouseLeave={e => (e.currentTarget.style.color = P.ghostMuted)}>
            {l}
          </a>
        ))}
      </div>
      <button onClick={toggle}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[9px] tracking-widest uppercase transition-all"
        style={{ background: `${P.plasma}15`, border: `1px solid ${P.border}`, color: P.plasmaLight }}>
        {lang === 'ES' ? 'EN' : 'ES'}
      </button>
      <a href="https://github.com/Lupicald/steam-backlog-manager" target="_blank" rel="noopener noreferrer"
        className="btn-magnetic flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-[10px] tracking-[0.15em] uppercase"
        style={{ background: P.plasma, color: '#fff', boxShadow: `0 0 20px ${P.plasmaGlow}` }}>
        <Github size={11} /> GitHub
      </a>
    </nav>
  )
}

/* ── Mobile Navbar ───────────────────────────────────────────────────── */
function BFMobileNav() {
  const { lang } = useLang()
  const nav = BF_NAV[lang]
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-5 pt-5">
      <div
        className="flex items-center justify-between px-5 py-3.5 rounded-2xl"
        style={{ background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(20px)', border: `1px solid ${P.border}` }}
      >
        <Link to="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase" style={{ color: P.ghostMuted }}>
          <ArrowLeft size={11} /> {nav.back}
        </Link>
        <span className="font-sans font-black text-sm" style={{ color: P.ghost }}>BacklogFlow</span>
        <a
          href="https://github.com/Lupicald/steam-backlog-manager"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: P.plasma }}
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

const BF_HERO = {
  EN: {
    tag:    'BacklogFlow v1.0 — Mobile App',
    l1:     'Stop scrolling.',
    l2:     'Start playing.',
    desc:   'AI-powered backlog management for PC gamers. Import your Steam library, get smart recommendations, track every game — fully offline, completely private.',
    cta:    'View on GitHub',
    explore:'Explore Features',
    offline:'Offline-First',
    availForWork: 'AVAILABLE FOR WORK',
  },
  ES: {
    tag:    'BacklogFlow v1.0 — App Móvil',
    l1:     'Deja de scrollear.',
    l2:     'Empieza a jugar.',
    desc:   'Gestión de backlog con IA para gamers de PC. Importa tu biblioteca de Steam, obtén recomendaciones inteligentes, rastrea cada juego — completamente offline, totalmente privado.',
    cta:    'Ver en GitHub',
    explore:'Ver Funciones',
    offline:'Sin Conexión',
    availForWork: 'DISPONIBLE',
  },
}

/* ── Hero ────────────────────────────────────────────────────────────── */
function BFHero() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ht = BF_HERO[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo('.bf-hero-tag',  { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        .fromTo('.bf-hero-l1',   { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, '-=0.3')
        .fromTo('.bf-hero-l2',   { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, '-=0.7')
        .fromTo('.bf-hero-desc', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .fromTo('.bf-hero-cta',  { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
        .fromTo('.bf-hero-badge',{ y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.4')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col"
      style={{ background: P.void }}
    >
      {/* ── Radial glow orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(123,97,255,0.18) 0%, transparent 70%)`,
          bottom: -200, left: '50%', transform: 'translateX(-50%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(123,97,255,0.1) 0%, transparent 70%)`,
          top: '10%', right: '10%',
        }}
      />

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${P.border} 1px, transparent 1px), linear-gradient(90deg, ${P.border} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.3,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* ── Spacer: pushes content to bottom but never less than navbar clearance ── */}
      <div className="flex-1 min-h-[88px]" />

      {/* ── Content ── */}
      <div className="relative px-8 pb-10 md:px-16 md:pb-16 max-w-5xl">

        {/* Tag */}
        <div className="bf-hero-tag flex items-center gap-3 mb-6">
          <span className="inline-block w-5 h-px" style={{ background: P.plasma }} />
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase" style={{ color: P.ghostMuted }}>{ht.tag}</span>
          <span className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full uppercase"
            style={{ background: `${P.plasma}22`, color: P.plasmaLight, border: `1px solid ${P.border}` }}>
            iOS + Android
          </span>
        </div>

        {/* Headline */}
        <h1 className="bf-hero-l1 font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none uppercase" style={{ color: P.ghost }}>
          {ht.l1}
        </h1>
        <h1 className="bf-hero-l2 font-serif italic text-5xl md:text-8xl lg:text-[9rem] leading-[0.9] mt-1"
          style={{ color: P.plasma, textShadow: `0 0 60px rgba(123,97,255,0.5)` }}>
          {ht.l2}
        </h1>

        {/* Description */}
        <p className="bf-hero-desc font-sans text-sm md:text-base leading-relaxed max-w-md mt-6 md:mt-8" style={{ color: P.ghostMuted }}>
          {ht.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a href="https://github.com/Lupicald/steam-backlog-manager" target="_blank" rel="noopener noreferrer"
            className="bf-hero-cta btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase"
            style={{ background: P.plasma, color: '#fff', boxShadow: `0 0 30px rgba(123,97,255,0.4)` }}>
            <Github size={13} /> {ht.cta} <ArrowUpRight size={13} />
          </a>
          <a href="#bf-features"
            className="bf-hero-cta btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs tracking-[0.15em] uppercase transition-all"
            style={{ border: `1px solid ${P.border}`, color: P.ghostMuted }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = P.plasma; e.currentTarget.style.color = P.ghost }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.color = P.ghostMuted }}>
            {ht.explore} <ChevronRight size={13} />
          </a>
        </div>

        {/* Platform badges */}
        <div className="flex items-center gap-4 mt-10">
          {[{ text: 'Android' }, { text: 'iOS' }].map(({ text }) => (
            <div key={text} className="bf-hero-badge flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: `${P.plasma}12`, border: `1px solid ${P.border}` }}>
              <Smartphone size={11} style={{ color: P.plasmaLight }} />
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: P.ghostMuted }}>{text}</span>
            </div>
          ))}
          <div className="bf-hero-badge flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px #22c55e' }} />
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(34,197,94,0.7)' }}>{ht.offline}</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${P.void})` }}
      />
    </section>
  )
}

const BF_FEATURES = {
  EN: {
    tag:    'What BacklogFlow does',
    title:  'Every tool you need.',
    drama:  "Nothing you don't.",
    cards: [
      { icon: Brain,       ai: true,  label: 'AI',      title: 'Smart Recommendations',   desc: "Tell the engine your mood, your goal, or how much time you have — and it picks the perfect game from your backlog. No more infinite scrolling." },
      { icon: Gamepad2,    ai: false, label: 'SYNC',    title: 'Seamless Steam Sync',      desc: 'Import your entire Steam library in seconds using your public Profile ID. No passwords, no OAuth, no friction. Just your games.' },
      { icon: Timer,       ai: false, label: 'HLTB',    title: 'HowLongToBeat Integration',desc: 'Auto-fetches completion time estimates for every game in your collection. Know exactly how many hours stand between you and the credits.' },
      { icon: ShoppingCart,ai: true,  label: 'AI',      title: 'Purchase Advisor',         desc: "Before you buy, let the AI analyze your backlog and give you a Reality Check. Stop buying games you won't play for three years." },
      { icon: BarChart3,   ai: false, label: 'STATS',   title: 'Library Statistics',       desc: 'Completion rates, platform distribution, total library value, estimated hours to finish everything. Beautiful data, sobering truth.' },
      { icon: Shield,      ai: false, label: 'PRIVACY', title: 'Privacy First',            desc: 'All data lives on your device in SQLite. Completely ad-free, zero tracking, works fully offline after first import. Your library is yours.' },
    ],
    aiLabel: 'AI Powered',
  },
  ES: {
    tag:    'Qué hace BacklogFlow',
    title:  'Todo lo que necesitas.',
    drama:  'Solo lo esencial.',
    cards: [
      { icon: Brain,       ai: true,  label: 'IA',        title: 'Recomendaciones Inteligentes', desc: 'Dile al motor tu estado de ánimo, tu objetivo o cuánto tiempo tienes — y él elige el juego perfecto de tu backlog. Sin más scroll infinito.' },
      { icon: Gamepad2,    ai: false, label: 'SYNC',      title: 'Sincronización con Steam',     desc: 'Importa toda tu biblioteca de Steam en segundos usando tu ID de perfil público. Sin contraseñas, sin OAuth, sin fricción. Solo tus juegos.' },
      { icon: Timer,       ai: false, label: 'HLTB',      title: 'Integración HowLongToBeat',    desc: 'Obtiene automáticamente tiempos estimados de finalización para cada juego. Sabe exactamente cuántas horas te separan de los créditos finales.' },
      { icon: ShoppingCart,ai: true,  label: 'IA',        title: 'Asesor de Compras',            desc: 'Antes de comprar, deja que la IA analice tu backlog y te dé una revisión de realidad. Deja de comprar juegos que no jugarás en tres años.' },
      { icon: BarChart3,   ai: false, label: 'STATS',     title: 'Estadísticas de Biblioteca',   desc: 'Tasas de finalización, distribución por plataforma, valor total de la biblioteca, horas estimadas para terminar todo. Datos hermosos, verdad cruda.' },
      { icon: Shield,      ai: false, label: 'PRIVACIDAD',title: 'Privacidad Primero',           desc: 'Todos los datos viven en tu dispositivo en SQLite. Sin anuncios, sin rastreo, funciona offline después del primer import. Tu biblioteca es tuya.' },
    ],
    aiLabel: 'Con IA',
  },
}

/* ── Features Section ────────────────────────────────────────────────── */
function BFFeatures() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ft = BF_FEATURES[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bf-feat-heading', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.bf-feat-heading', start: 'top 85%' },
      })
      gsap.fromTo('.bf-feat-card', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bf-feat-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="bf-features" style={{ background: P.void }} className="py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bf-feat-heading mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: `${P.plasma}80` }}>{ft.tag}</span>
          <h2 className="font-sans font-black text-4xl md:text-6xl tracking-[-0.03em] mt-3 leading-none" style={{ color: P.ghost }}>{ft.title}</h2>
          <h2 className="font-serif italic text-4xl md:text-6xl leading-tight mt-1" style={{ color: P.plasma }}>{ft.drama}</h2>
        </div>

        {/* Feature cards */}
        <div className="bf-feat-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ft.cards.map(feature => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="bf-feat-card group flex flex-col gap-4 p-7 rounded-4xl transition-all duration-500"
                style={{ background: P.voidCard, border: `1px solid ${P.border}`, boxShadow: feature.ai ? `0 0 30px ${P.plasmaGlow}, inset 0 0 30px ${P.plasmaGlow}` : 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = P.borderHover; e.currentTarget.style.boxShadow = `0 0 40px ${P.plasmaGlow}, inset 0 0 20px rgba(123,97,255,0.06)`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.boxShadow = feature.ai ? `0 0 30px ${P.plasmaGlow}, inset 0 0 30px ${P.plasmaGlow}` : 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${P.plasma}18`, border: `1px solid ${P.border}` }}>
                    <Icon size={17} style={{ color: feature.ai ? P.plasma : P.plasmaLight }} />
                  </div>
                  {feature.ai ? (
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${P.plasma}20`, color: P.plasmaLight, border: `1px solid ${P.border}`, boxShadow: `0 0 10px ${P.plasmaGlow}` }}>
                      {ft.aiLabel}
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: P.ghostDim, color: 'rgba(240,239,244,0.3)', border: `1px solid rgba(255,255,255,0.05)` }}>
                      {feature.label}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-sans font-black text-lg leading-tight" style={{ color: P.ghost }}>{feature.title}</h3>
                  <p className="font-sans text-sm leading-relaxed mt-2.5" style={{ color: P.ghostMuted }}>{feature.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const BF_STATUSES = {
  EN: {
    label: 'Game Statuses', title: 'Every state of play.',
    items: [
      { label: 'Not Started', color: 'rgba(240,239,244,0.15)' },
      { label: 'Up Next',     color: '#3B82F6' },
      { label: 'Playing',     color: '#7B61FF' },
      { label: 'Paused',      color: '#F59E0B' },
      { label: 'Completed',   color: '#22C55E' },
      { label: 'Abandoned',   color: '#EF4444' },
    ],
  },
  ES: {
    label: 'Estados de Juego', title: 'Cada estado de progreso.',
    items: [
      { label: 'Sin Empezar',  color: 'rgba(240,239,244,0.15)' },
      { label: 'En Cola',      color: '#3B82F6' },
      { label: 'Jugando',      color: '#7B61FF' },
      { label: 'En Pausa',     color: '#F59E0B' },
      { label: 'Completado',   color: '#22C55E' },
      { label: 'Abandonado',   color: '#EF4444' },
    ],
  },
}

/* ── Game Statuses strip ─────────────────────────────────────────────── */
function BFStatuses() {
  const ref = useRef(null)
  const { lang } = useLang()
  const st = BF_STATUSES[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bf-status-pill', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-16 overflow-hidden"
      style={{ background: P.voidSurface, borderTop: `1px solid ${P.border}`, borderBottom: `1px solid ${P.border}` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-shrink-0">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-1" style={{ color: `${P.plasma}80` }}>{st.label}</span>
            <p className="font-sans font-black text-2xl md:text-3xl tracking-[-0.03em]" style={{ color: P.ghost }}>{st.title}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {st.items.map(s => (
              <div key={s.label} className="bf-status-pill flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}35` }}>
                <span className="w-2 h-2 rounded-full" style={{ background: s.color, boxShadow: `0 0 6px ${s.color}` }} />
                <span className="font-mono text-[11px] tracking-wide" style={{ color: s.color }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BF_PRIVACY_T = {
  EN: {
    icon: 'Privacy First', tag: 'Privacy First',
    headline: 'Your data never leaves your device.',
    cards: [
      { label: 'Ad-Free',      desc: 'Zero advertisements. Zero sponsored content. Just your games.' },
      { label: 'Zero Tracking',desc: 'No analytics, no telemetry, no third-party data collection.' },
      { label: 'Offline-First',desc: 'Full functionality with SQLite. Works without internet after setup.' },
    ],
  },
  ES: {
    icon: 'Privacidad', tag: 'Privacidad Primero',
    headline: 'Tus datos nunca salen de tu dispositivo.',
    cards: [
      { label: 'Sin Anuncios',  desc: 'Cero publicidad. Cero contenido patrocinado. Solo tus juegos.' },
      { label: 'Sin Rastreo',  desc: 'Sin analíticas, sin telemetría, sin recolección de datos de terceros.' },
      { label: 'Sin Conexión', desc: 'Funcionalidad completa con SQLite. Funciona sin internet tras la configuración.' },
    ],
  },
}

const BF_STACK_T = {
  EN: 'Tech Stack',
  ES: 'Stack Tecnológico',
}

const BF_FOOTER_T = {
  EN: {
    ready: "Ready to conquer your backlog?",
    drama: 'today.',
    github: 'View on GitHub',
    back: 'Back to Portfolio',
    license: 'MIT License',
    privacy: 'Privacy Policy',
    builtBy: 'Built by',
  },
  ES: {
    ready: '¿Listo para conquistar tu backlog?',
    drama: 'hoy.',
    github: 'Ver en GitHub',
    back: 'Volver al Portafolio',
    license: 'Licencia MIT',
    privacy: 'Política de Privacidad',
    builtBy: 'Creado por',
  },
}

/* ── Tech Stack ──────────────────────────────────────────────────────── */
function BFStack() {
  const ref = useRef(null)
  const { lang } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bf-stack-item', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="bf-stack" style={{ background: P.void }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-8" style={{ color: `${P.plasma}80` }}>
          {BF_STACK_T[lang]}
        </span>
        <div className="flex flex-wrap gap-3">
          {STACK.map(tech => (
            <div
              key={tech}
              className="bf-stack-item hover-lift font-mono text-sm px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                background: `${P.plasma}10`,
                border: `1px solid ${P.border}`,
                color: P.ghostMuted,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${P.plasma}20`
                e.currentTarget.style.borderColor = P.plasmaLight
                e.currentTarget.style.color = P.ghost
                e.currentTarget.style.boxShadow = `0 0 15px ${P.plasmaGlow}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${P.plasma}10`
                e.currentTarget.style.borderColor = P.border
                e.currentTarget.style.color = P.ghostMuted
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Privacy Statement ───────────────────────────────────────────────── */
function BFPrivacy() {
  const ref = useRef(null)
  const { lang } = useLang()
  const pv = BF_PRIVACY_T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bf-privacy-word', { y: '120%', opacity: 0 }, {
        y: '0%', opacity: 1, stagger: 0.04, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="bf-privacy"
      className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden"
      style={{ background: P.voidSurface }}
    >
      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500, borderRadius: '50%',
          background: `radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)`,
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${P.plasma}18`, border: `1px solid ${P.border}` }}>
            <Shield size={17} style={{ color: P.plasma }} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: `${P.plasma}80` }}>{pv.tag}</span>
        </div>

        <h2 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight overflow-hidden" style={{ color: P.ghost }}>
          {pv.headline.split(' ').map((w, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="bf-privacy-word inline-block">{w}&nbsp;</span>
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {pv.cards.map(item => (
            <div key={item.label} className="p-6 rounded-4xl" style={{ background: P.voidCard, border: `1px solid ${P.border}` }}>
              <p className="font-sans font-black text-xl mb-2" style={{ color: P.plasmaLight }}>{item.label}</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: P.ghostMuted }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA + Footer ────────────────────────────────────────────────────── */
function BFFooter() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ft = BF_FOOTER_T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.bf-cta-content', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={ref}
      style={{ background: P.void, borderTop: `1px solid ${P.border}` }}
      className="py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Big CTA */}
        <div className="bf-cta-content text-center mb-20 pb-20" style={{ borderBottom: `1px solid ${P.border}` }}>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-6" style={{ color: `${P.plasma}70` }}>
            {ft.ready}
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none mb-2" style={{ color: P.ghost }}>
            {lang === 'ES' ? '¡Conquista tu backlog' : 'Conquer your backlog'}
          </h2>
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10" style={{ color: P.plasma, textShadow: `0 0 40px rgba(123,97,255,0.4)` }}>
            {ft.drama}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Lupicald/steam-backlog-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm tracking-[0.12em] uppercase"
              style={{ background: P.plasma, color: '#fff', boxShadow: `0 0 40px rgba(123,97,255,0.4)` }}
            >
              <Github size={15} /> {ft.github} <ArrowUpRight size={14} />
            </a>
            <Link
              to="/"
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-[0.12em] uppercase transition-all"
              style={{ border: `1px solid ${P.border}`, color: P.ghostMuted }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.color = P.ghost }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = P.border; e.currentTarget.style.color = P.ghostMuted }}
            >
              <ArrowLeft size={14} /> {ft.back}
            </Link>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: P.plasma, boxShadow: `0 0 8px ${P.plasma}` }}
            />
            <span className="font-sans font-black text-xl" style={{ color: P.ghost }}>BacklogFlow</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: P.ghostDim }}>
            v1.0 — {ft.builtBy}{' '}
            <Link to="/" className="transition-colors" style={{ color: P.ghostMuted }}
              onMouseEnter={e => (e.currentTarget.style.color = P.plasmaLight)}
              onMouseLeave={e => (e.currentTarget.style.color = P.ghostMuted)}
            >
              MILS
            </Link>
          </span>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="font-mono text-[10px] tracking-widest transition-colors"
              style={{ color: P.ghostDim }}
              onMouseEnter={e => (e.currentTarget.style.color = P.ghostMuted)}
              onMouseLeave={e => (e.currentTarget.style.color = P.ghostDim)}
            >
              {ft.privacy}
            </Link>
            <span style={{ color: P.ghostDim, fontSize: 10 }}>·</span>
            <span className="font-mono text-[10px] tracking-widest" style={{ color: P.ghostDim }}>
              {ft.license}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default function BacklogFlow() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'BacklogFlow — MILS'
    return () => { document.title = 'MILS — Software Engineer' }
  }, [])

  return (
    <div className="font-sans antialiased" style={{ background: P.void }}>
      <BFNavbar />
      <BFMobileNav />
      <BFHero />
      <BFFeatures />
      <BFStatuses />
      <BFStack />
      <BFPrivacy />
      <BFFooter />
    </div>
  )
}
