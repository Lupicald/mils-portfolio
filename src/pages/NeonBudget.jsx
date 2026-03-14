import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutDashboard,
  ArrowLeftRight,
  Target,
  TrendingUp,
  BarChart2,
  Trophy,
  Github,
  Smartphone,
  ShieldCheck,
  Wallet,
  CreditCard,
  PiggyBank,
  Landmark,
  Banknote,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Design tokens (neon finance palette) ─────────────────────────── */
const N = {
  void:        '#050510',
  surface:     '#0B0B1C',
  card:        '#10102A',
  cardAlt:     '#0E0E24',
  neon:        '#B026FF',
  neonLight:   '#CC6EFF',
  neonGlow:    'rgba(176,38,255,0.22)',
  cyan:        '#00D4FF',
  cyanGlow:    'rgba(0,212,255,0.15)',
  green:       '#00FF87',
  greenGlow:   'rgba(0,255,135,0.15)',
  pink:        '#FF2D78',
  pinkGlow:    'rgba(255,45,120,0.15)',
  ghost:       '#EAE8F5',
  ghostMuted:  'rgba(234,232,245,0.5)',
  ghostDim:    'rgba(234,232,245,0.18)',
  border:      'rgba(176,38,255,0.18)',
  borderHover: 'rgba(176,38,255,0.42)',
  borderCyan:  'rgba(0,212,255,0.22)',
  borderGreen: 'rgba(0,255,135,0.22)',
  borderPink:  'rgba(255,45,120,0.22)',
}

/* ── Nav translations ─────────────────────────────────────────────── */
const NB_NAV = {
  EN: { links: ['Features', 'Accounts', 'Stack', 'Privacy'], back: 'MILS' },
  ES: { links: ['Funciones', 'Cuentas', 'Stack', 'Privacidad'], back: 'MILS' },
}

/* ── Navbar ───────────────────────────────────────────────────────── */
function NBNavbar() {
  const { lang, toggle } = useLang()
  const nav = NB_NAV[lang]
  const anchors = ['nb-features', 'nb-accounts', 'nb-stack', 'nb-privacy']

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-5 px-5 py-2.5 rounded-full"
      style={{ background: 'rgba(5,5,16,0.75)', backdropFilter: 'blur(24px)', border: `1px solid ${N.border}`, boxShadow: `0 0 40px ${N.neonGlow}` }}
    >
      <Link to="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors"
        style={{ color: N.ghostMuted }}
        onMouseEnter={e => (e.currentTarget.style.color = N.ghost)}
        onMouseLeave={e => (e.currentTarget.style.color = N.ghostMuted)}>
        <ArrowLeft size={11} /> {nav.back}
      </Link>
      <span style={{ width: 1, height: 16, background: N.border }} />
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: N.neon, boxShadow: `0 0 8px ${N.neon}` }} />
        <span className="font-sans font-black text-sm tracking-[-0.03em]" style={{ color: N.ghost }}>NeonBudget</span>
      </div>
      <span style={{ width: 1, height: 16, background: N.border }} />
      <div className="flex items-center gap-4">
        {nav.links.map((l, i) => (
          <a key={l} href={`#${anchors[i]}`}
            className="font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: N.ghostMuted }}
            onMouseEnter={e => (e.currentTarget.style.color = N.neonLight)}
            onMouseLeave={e => (e.currentTarget.style.color = N.ghostMuted)}>
            {l}
          </a>
        ))}
      </div>
      <button onClick={toggle}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[9px] tracking-widest uppercase transition-all"
        style={{ background: `${N.neon}15`, border: `1px solid ${N.border}`, color: N.neonLight }}>
        {lang === 'ES' ? 'EN' : 'ES'}
      </button>
      <a href="https://github.com/Lupicald/neonbudgetapp" target="_blank" rel="noopener noreferrer"
        className="btn-magnetic flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-[10px] tracking-[0.15em] uppercase"
        style={{ background: N.neon, color: '#fff', boxShadow: `0 0 20px ${N.neonGlow}` }}>
        <Github size={11} /> GitHub
      </a>
    </nav>
  )
}

/* ── Mobile Navbar ────────────────────────────────────────────────── */
function NBMobileNav() {
  const { lang } = useLang()
  const nav = NB_NAV[lang]
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 px-5 pt-5">
      <div className="flex items-center justify-between px-5 py-3.5 rounded-2xl"
        style={{ background: 'rgba(5,5,16,0.9)', backdropFilter: 'blur(20px)', border: `1px solid ${N.border}` }}>
        <Link to="/" className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase" style={{ color: N.ghostMuted }}>
          <ArrowLeft size={11} /> {nav.back}
        </Link>
        <span className="font-sans font-black text-sm" style={{ color: N.ghost }}>NeonBudget</span>
        <a href="https://github.com/Lupicald/neonbudgetapp" target="_blank" rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-widest uppercase" style={{ color: N.neon }}>
          GitHub
        </a>
      </div>
    </div>
  )
}

/* ── Hero translations ────────────────────────────────────────────── */
const NB_HERO = {
  EN: {
    tag:     'NeonBudget v1.0 — Mobile App',
    l1:      'Every transaction.',
    l2:      'Illuminated.',
    desc:    'Personal finance tracking built for clarity. Multi-account management, smart budgets, savings goals, and spending analytics — all offline-first on your device.',
    cta:     'View on GitHub',
    explore: 'Explore Features',
    offline: 'Offline-First',
  },
  ES: {
    tag:     'NeonBudget v1.0 — App Móvil',
    l1:      'Cada transacción.',
    l2:      'Iluminada.',
    desc:    'Control financiero personal diseñado para la claridad. Gestión multi-cuenta, presupuestos inteligentes, metas de ahorro y analíticas de gastos — todo offline en tu dispositivo.',
    cta:     'Ver en GitHub',
    explore: 'Ver Funciones',
    offline: 'Sin Conexión',
  },
}

/* ── Hero ─────────────────────────────────────────────────────────── */
function NBHero() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ht = NB_HERO[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo('.nb-hero-tag',  { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
        .fromTo('.nb-hero-l1',   { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1,   ease: 'power3.out' }, '-=0.3')
        .fromTo('.nb-hero-l2',   { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, '-=0.7')
        .fromTo('.nb-hero-desc', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .fromTo('.nb-hero-cta',  { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
        .fromTo('.nb-hero-badge',{ y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, '-=0.4')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col" style={{ background: N.void }}>

      {/* Multi-color glow orbs */}
      <div className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, rgba(176,38,255,0.14) 0%, transparent 70%)`, bottom: -150, left: '30%', transform: 'translateX(-50%)' }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)`, top: '15%', right: '5%' }} />
      <div className="absolute pointer-events-none" style={{ width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(0,255,135,0.07) 0%, transparent 70%)`, bottom: '10%', right: '25%' }} />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(${N.border} 1px, transparent 1px), linear-gradient(90deg, ${N.border} 1px, transparent 1px)`,
        backgroundSize: '60px 60px', opacity: 0.25,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* Spacer */}
      <div className="flex-1 min-h-[88px]" />

      {/* Content */}
      <div className="relative px-8 pb-10 md:px-16 md:pb-16 max-w-5xl">

        {/* Tag */}
        <div className="nb-hero-tag flex items-center gap-3 mb-6">
          <span className="inline-block w-5 h-px" style={{ background: N.neon }} />
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase" style={{ color: N.ghostMuted }}>{ht.tag}</span>
          <span className="font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full uppercase"
            style={{ background: `${N.neon}20`, color: N.neonLight, border: `1px solid ${N.border}` }}>
            iOS + Android
          </span>
        </div>

        {/* Headline */}
        <h1 className="nb-hero-l1 font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none uppercase" style={{ color: N.ghost }}>
          {ht.l1}
        </h1>
        <h1 className="nb-hero-l2 font-serif italic text-5xl md:text-8xl lg:text-[9rem] leading-[0.9] mt-1"
          style={{ color: N.neon, textShadow: `0 0 60px rgba(176,38,255,0.55), 0 0 120px rgba(176,38,255,0.2)` }}>
          {ht.l2}
        </h1>

        {/* Description */}
        <p className="nb-hero-desc font-sans text-sm md:text-base leading-relaxed max-w-md mt-6 md:mt-8" style={{ color: N.ghostMuted }}>
          {ht.desc}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a href="https://github.com/Lupicald/neonbudgetapp" target="_blank" rel="noopener noreferrer"
            className="nb-hero-cta btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs tracking-[0.15em] uppercase"
            style={{ background: N.neon, color: '#fff', boxShadow: `0 0 30px rgba(176,38,255,0.45)` }}>
            <Github size={13} /> {ht.cta} <ArrowUpRight size={13} />
          </a>
          <a href="#nb-features"
            className="nb-hero-cta btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs tracking-[0.15em] uppercase transition-all"
            style={{ border: `1px solid ${N.border}`, color: N.ghostMuted }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = N.neon; e.currentTarget.style.color = N.ghost }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = N.border; e.currentTarget.style.color = N.ghostMuted }}>
            {ht.explore} <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-4 mt-10">
          {['Android', 'iOS'].map(p => (
            <div key={p} className="nb-hero-badge flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: `${N.neon}10`, border: `1px solid ${N.border}` }}>
              <Smartphone size={11} style={{ color: N.neonLight }} />
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: N.ghostMuted }}>{p}</span>
            </div>
          ))}
          <div className="nb-hero-badge flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: `${N.green}0D`, border: `1px solid ${N.borderGreen}` }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: N.green, boxShadow: `0 0 6px ${N.green}` }} />
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: `${N.green}CC` }}>{ht.offline}</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: `linear-gradient(to bottom, transparent, ${N.void})` }} />
    </section>
  )
}

/* ── Features translations ────────────────────────────────────────── */
const NB_FEATURES = {
  EN: {
    tag:   'What NeonBudget does',
    title: 'Total financial clarity.',
    drama: 'Nothing left in the dark.',
    aiLabel: 'Smart',
    cards: [
      { icon: LayoutDashboard, accent: N.cyan,  border: 'borderCyan',  label: 'OVERVIEW', smart: false, title: 'Dashboard',             desc: 'Real-time overview of all your accounts, recent transactions, and budget health — at a glance, every time you open the app.' },
      { icon: ArrowLeftRight,  accent: N.ghost, border: 'border',      label: 'TRACK',    smart: false, title: 'Transaction Tracking',   desc: 'Log income and expenses with merchants, categories, notes, and receipt images. Full history with calendar and timeline views.' },
      { icon: Target,          accent: N.pink,  border: 'borderPink',  label: 'BUDGET',   smart: true,  title: 'Smart Budgets',          desc: 'Set monthly per-category spending limits. Visual progress bars and alerts keep you on track before you overspend.' },
      { icon: TrendingUp,      accent: N.green, border: 'borderGreen', label: 'GOALS',    smart: false, title: 'Savings Goals',          desc: 'Define savings targets with deadlines and track your progress. Watch your goals fill up as you contribute.' },
      { icon: BarChart2,       accent: N.cyan,  border: 'borderCyan',  label: 'ANALYTICS',smart: false, title: 'Spending Analytics',     desc: 'Charts, breakdowns by category, platform distribution, and monthly trends. See exactly where your money goes.' },
      { icon: Trophy,          accent: N.neon,  border: 'border',      label: 'ACHIEVE',  smart: true,  title: 'Achievements',           desc: '10 unlockable financial milestones — streaks, budget goals, transaction counts. Finance, gamified.' },
    ],
  },
  ES: {
    tag:   'Qué hace NeonBudget',
    title: 'Claridad financiera total.',
    drama: 'Nada queda en la oscuridad.',
    aiLabel: 'Smart',
    cards: [
      { icon: LayoutDashboard, accent: N.cyan,  border: 'borderCyan',  label: 'RESUMEN',  smart: false, title: 'Dashboard',             desc: 'Vista en tiempo real de todas tus cuentas, transacciones recientes y estado de presupuestos — de un vistazo, cada vez que abres la app.' },
      { icon: ArrowLeftRight,  accent: N.ghost, border: 'border',      label: 'RASTREAR', smart: false, title: 'Transacciones',          desc: 'Registra ingresos y gastos con comercios, categorías, notas e imágenes de recibos. Historial completo con vistas de calendario y línea de tiempo.' },
      { icon: Target,          accent: N.pink,  border: 'borderPink',  label: 'BUDGET',   smart: true,  title: 'Presupuestos Inteligentes',desc: 'Define límites de gasto mensuales por categoría. Barras de progreso y alertas te mantienen en línea antes de que te pases.' },
      { icon: TrendingUp,      accent: N.green, border: 'borderGreen', label: 'METAS',    smart: false, title: 'Metas de Ahorro',        desc: 'Define objetivos de ahorro con fechas límite y rastrea tu progreso. Mira cómo se van llenando tus metas.' },
      { icon: BarChart2,       accent: N.cyan,  border: 'borderCyan',  label: 'ANALYTICS',smart: false, title: 'Analíticas de Gasto',    desc: 'Gráficas, desglose por categoría, distribución por plataforma y tendencias mensuales. Ve exactamente a dónde va tu dinero.' },
      { icon: Trophy,          accent: N.neon,  border: 'border',      label: 'LOGROS',   smart: true,  title: 'Logros',                 desc: '10 hitos financieros desbloqueables — rachas, objetivos de presupuesto, conteos de transacciones. Finanzas, gamificadas.' },
    ],
  },
}

/* ── Features Section ─────────────────────────────────────────────── */
function NBFeatures() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ft = NB_FEATURES[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nb-feat-heading', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.nb-feat-heading', start: 'top 85%' },
      })
      gsap.fromTo('.nb-feat-card', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: 'power3.out',
        scrollTrigger: { trigger: '.nb-feat-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="nb-features" style={{ background: N.void }} className="py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="nb-feat-heading mb-16">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: `${N.neon}80` }}>{ft.tag}</span>
          <h2 className="font-sans font-black text-4xl md:text-6xl tracking-[-0.03em] mt-3 leading-none" style={{ color: N.ghost }}>{ft.title}</h2>
          <h2 className="font-serif italic text-4xl md:text-6xl leading-tight mt-1" style={{ color: N.neonLight }}>{ft.drama}</h2>
        </div>

        <div className="nb-feat-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ft.cards.map(card => {
            const Icon = card.icon
            const accentBorder = N[card.border] || N.border
            return (
              <div key={card.title} className="nb-feat-card flex flex-col gap-4 p-7 rounded-4xl transition-all duration-500"
                style={{ background: N.card, border: `1px solid ${accentBorder}` }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = card.accent === N.ghost ? N.borderHover : card.accent; e.currentTarget.style.boxShadow = `0 0 35px ${card.accent}18`; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = accentBorder; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: `${card.accent}15`, border: `1px solid ${card.accent}35` }}>
                    <Icon size={17} style={{ color: card.accent === N.ghost ? N.neonLight : card.accent }} />
                  </div>
                  {card.smart ? (
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${N.neon}18`, color: N.neonLight, border: `1px solid ${N.border}`, boxShadow: `0 0 10px ${N.neonGlow}` }}>
                      {ft.aiLabel}
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: N.ghostDim, color: 'rgba(234,232,245,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {card.label}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-sans font-black text-lg leading-tight" style={{ color: N.ghost }}>{card.title}</h3>
                  <p className="font-sans text-sm leading-relaxed mt-2.5" style={{ color: N.ghostMuted }}>{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Account types strip ──────────────────────────────────────────── */
const NB_ACCOUNTS = {
  EN: {
    label: 'Account Types',
    title: 'All your accounts, one place.',
    items: [
      { icon: Landmark,  label: 'Bank',       color: N.cyan  },
      { icon: Banknote,  label: 'Cash',       color: N.green },
      { icon: CreditCard,label: 'Credit',     color: N.pink  },
      { icon: PiggyBank, label: 'Savings',    color: N.neon  },
      { icon: Wallet,    label: 'Investment', color: '#FFB800' },
    ],
  },
  ES: {
    label: 'Tipos de Cuenta',
    title: 'Todas tus cuentas, un solo lugar.',
    items: [
      { icon: Landmark,  label: 'Banco',      color: N.cyan  },
      { icon: Banknote,  label: 'Efectivo',   color: N.green },
      { icon: CreditCard,label: 'Crédito',    color: N.pink  },
      { icon: PiggyBank, label: 'Ahorro',     color: N.neon  },
      { icon: Wallet,    label: 'Inversión',  color: '#FFB800' },
    ],
  },
}

function NBAccounts() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ac = NB_ACCOUNTS[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nb-account-pill', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="nb-accounts" className="py-20 px-6 md:px-16"
      style={{ background: N.surface, borderTop: `1px solid ${N.border}`, borderBottom: `1px solid ${N.border}` }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-shrink-0">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-1" style={{ color: `${N.neon}80` }}>{ac.label}</span>
            <p className="font-sans font-black text-2xl md:text-3xl tracking-[-0.03em]" style={{ color: N.ghost }}>{ac.title}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ac.items.map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="nb-account-pill flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                  style={{ background: `${item.color}10`, border: `1px solid ${item.color}30` }}>
                  <Icon size={14} style={{ color: item.color }} />
                  <span className="font-mono text-[11px] tracking-wide font-medium" style={{ color: item.color }}>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stack ────────────────────────────────────────────────────────── */
const NB_STACK = ['React Native', 'Expo ~52', 'TypeScript', 'SQLite', 'React Navigation', 'expo-linear-gradient', 'react-native-chart-kit', 'date-fns', 'expo-haptics']

const NB_STACK_T = { EN: 'Tech Stack', ES: 'Stack Tecnológico' }

function NBStack() {
  const ref = useRef(null)
  const { lang } = useLang()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nb-stack-item', { y: 25, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.07, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="nb-stack" style={{ background: N.void }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-8" style={{ color: `${N.neon}80` }}>
          {NB_STACK_T[lang]}
        </span>
        <div className="flex flex-wrap gap-3">
          {NB_STACK.map(tech => (
            <div key={tech} className="nb-stack-item hover-lift font-mono text-sm px-5 py-2.5 rounded-full transition-all duration-300 cursor-default"
              style={{ background: `${N.neon}0D`, border: `1px solid ${N.border}`, color: N.ghostMuted }}
              onMouseEnter={e => { e.currentTarget.style.background = `${N.neon}1A`; e.currentTarget.style.borderColor = N.neonLight; e.currentTarget.style.color = N.ghost; e.currentTarget.style.boxShadow = `0 0 15px ${N.neonGlow}` }}
              onMouseLeave={e => { e.currentTarget.style.background = `${N.neon}0D`; e.currentTarget.style.borderColor = N.border; e.currentTarget.style.color = N.ghostMuted; e.currentTarget.style.boxShadow = 'none' }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Privacy ──────────────────────────────────────────────────────── */
const NB_PRIVACY_T = {
  EN: {
    tag:      'Privacy First',
    headline: 'Your money data stays on your device.',
    cards: [
      { label: 'No Cloud Sync',  color: N.pink,  desc: 'Zero cloud storage. All your financial data lives exclusively in local SQLite. Nothing ever leaves your phone.' },
      { label: 'No Ads',         color: N.green, desc: 'Completely ad-free experience. No banners, no sponsored content, no algorithmic upsells.' },
      { label: 'Offline-First',  color: N.cyan,  desc: 'Full functionality without internet. Import, track, analyze — entirely on-device after setup.' },
    ],
  },
  ES: {
    tag:      'Privacidad Primero',
    headline: 'Tus datos financieros se quedan en tu dispositivo.',
    cards: [
      { label: 'Sin Nube',       color: N.pink,  desc: 'Cero almacenamiento en la nube. Todos tus datos financieros viven exclusivamente en SQLite local. Nada sale de tu teléfono.' },
      { label: 'Sin Anuncios',   color: N.green, desc: 'Experiencia completamente libre de publicidad. Sin banners, sin contenido patrocinado, sin ventas algorítmicas.' },
      { label: 'Sin Conexión',   color: N.cyan,  desc: 'Funcionalidad completa sin internet. Importa, rastrea, analiza — todo en el dispositivo tras la configuración.' },
    ],
  },
}

function NBPrivacy() {
  const ref = useRef(null)
  const { lang } = useLang()
  const pv = NB_PRIVACY_T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nb-privacy-word', { y: '120%', opacity: 0 }, {
        y: '0%', opacity: 1, stagger: 0.04, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="nb-privacy" className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden"
      style={{ background: N.surface }}>
      {/* Multi-color glow */}
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(176,38,255,0.1) 0%, transparent 70%)`, top: '50%', left: '30%', transform: 'translate(-50%,-50%)' }} />
      <div className="absolute pointer-events-none" style={{ width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)`, top: '40%', right: '20%', transform: 'translateY(-50%)' }} />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${N.neon}18`, border: `1px solid ${N.border}` }}>
            <ShieldCheck size={17} style={{ color: N.neon }} />
          </div>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: `${N.neon}80` }}>{pv.tag}</span>
        </div>

        <h2 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight" style={{ color: N.ghost }}>
          {pv.headline.split(' ').map((w, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="nb-privacy-word inline-block">{w}&nbsp;</span>
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {pv.cards.map(item => (
            <div key={item.label} className="p-6 rounded-4xl" style={{ background: N.card, border: `1px solid ${item.color}25` }}>
              <p className="font-sans font-black text-xl mb-2" style={{ color: item.color, textShadow: `0 0 20px ${item.color}55` }}>{item.label}</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: N.ghostMuted }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Footer ───────────────────────────────────────────────────────── */
const NB_FOOTER_T = {
  EN: {
    ready:   'Ready to take control?',
    headline: 'Light up your finances',
    drama:   'tonight.',
    github:  'View on GitHub',
    back:    'Back to Portfolio',
    license: 'MIT License',
    builtBy: 'Built by',
  },
  ES: {
    ready:   '¿Listo para tomar el control?',
    headline: 'Ilumina tus finanzas',
    drama:   'esta noche.',
    github:  'Ver en GitHub',
    back:    'Volver al Portafolio',
    license: 'Licencia MIT',
    builtBy: 'Creado por',
  },
}

function NBFooter() {
  const ref = useRef(null)
  const { lang } = useLang()
  const ft = NB_FOOTER_T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nb-cta-content', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={ref} style={{ background: N.void, borderTop: `1px solid ${N.border}` }} className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="nb-cta-content text-center mb-20 pb-20" style={{ borderBottom: `1px solid ${N.border}` }}>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-6" style={{ color: `${N.neon}70` }}>
            {ft.ready}
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-none mb-2" style={{ color: N.ghost }}>
            {ft.headline}
          </h2>
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-10"
            style={{ color: N.neon, textShadow: `0 0 40px rgba(176,38,255,0.5)` }}>
            {ft.drama}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://github.com/Lupicald/neonbudgetapp" target="_blank" rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm tracking-[0.12em] uppercase"
              style={{ background: N.neon, color: '#fff', boxShadow: `0 0 40px rgba(176,38,255,0.4)` }}>
              <Github size={15} /> {ft.github} <ArrowUpRight size={14} />
            </a>
            <Link to="/"
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-[0.12em] uppercase transition-all"
              style={{ border: `1px solid ${N.border}`, color: N.ghostMuted }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = N.neon; e.currentTarget.style.color = N.ghost }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = N.border; e.currentTarget.style.color = N.ghostMuted }}>
              <ArrowLeft size={14} /> {ft.back}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: N.neon, boxShadow: `0 0 8px ${N.neon}` }} />
            <span className="font-sans font-black text-xl" style={{ color: N.ghost }}>NeonBudget</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: N.ghostDim }}>
            v1.0 — {ft.builtBy}{' '}
            <Link to="/" className="transition-colors" style={{ color: N.ghostMuted }}
              onMouseEnter={e => (e.currentTarget.style.color = N.neonLight)}
              onMouseLeave={e => (e.currentTarget.style.color = N.ghostMuted)}>
              MILS
            </Link>
          </span>
          <span className="font-mono text-[10px] tracking-widest" style={{ color: N.ghostDim }}>
            {ft.license}
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function NeonBudget() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'NeonBudget — MILS'
    return () => { document.title = 'MILS — Software Engineer' }
  }, [])

  return (
    <div className="font-sans antialiased" style={{ background: N.void }}>
      <NBNavbar />
      <NBMobileNav />
      <NBHero />
      <NBFeatures />
      <NBAccounts />
      <NBStack />
      <NBPrivacy />
      <NBFooter />
    </div>
  )
}
