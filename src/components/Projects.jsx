import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'

gsap.registerPlugin(ScrollTrigger)

const T = {
  EN: {
    tag:   'Selected Work',
    title: "What I've built.",
    hire:  'Hire Me',
    stack: 'Stack',
    projects: [
      {
        index: '01',
        title: 'Distributed Task Engine',
        description: 'High-throughput job queue built on Redis Streams and Node.js. Handles 100K+ tasks/min with priority queuing, exponential backoff, dead-letter queues, and horizontal worker scaling.',
        tags: ['Node.js', 'Redis', 'TypeScript', 'Docker'],
        stat: '100K+ tasks/min', statLabel: 'Throughput', href: null,
      },
      {
        index: '02',
        title: 'Real-Time Analytics Platform',
        description: 'Full-stack dashboard for streaming telemetry data with sub-50ms WebSocket latency. React frontend with virtualized tables, PostgreSQL time-series queries, and Go microservices backend.',
        tags: ['React', 'Go', 'WebSockets', 'PostgreSQL'],
        stat: '<50ms', statLabel: 'Latency', href: null,
      },
      {
        index: '03',
        title: 'NeonBudget',
        description: 'Personal finance mobile app with multi-account management, smart budgets, savings goals, spending analytics, and gamified achievements. Fully offline-first with SQLite — no cloud, no tracking.',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
        stat: 'iOS + Android', statLabel: 'Platform', href: '/neonbudget', internal: true,
      },
      {
        index: '04',
        title: 'BacklogFlow',
        description: 'Mobile app built with React Native + Expo for managing your Steam gaming backlog. Imports your full library via Steam Web API, tracks status per game, integrates HowLongToBeat estimates, and runs fully offline-first on SQLite.',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
        stat: 'iOS + Android', statLabel: 'Platform', href: '/backlogflow', internal: true,
      },
    ],
  },
  ES: {
    tag:   'Trabajo Selecto',
    title: 'Lo que he construido.',
    hire:  'Contrátame',
    stack: 'Tecnologías',
    projects: [
      {
        index: '01',
        title: 'Motor de Tareas Distribuidas',
        description: 'Cola de tareas de alto rendimiento sobre Redis Streams y Node.js. Maneja más de 100K tareas/min con colas por prioridad, backoff exponencial, colas de mensajes muertos y escalado horizontal de workers.',
        tags: ['Node.js', 'Redis', 'TypeScript', 'Docker'],
        stat: '100K+ tareas/min', statLabel: 'Rendimiento', href: null,
      },
      {
        index: '02',
        title: 'Plataforma de Analíticas en Tiempo Real',
        description: 'Dashboard full-stack para datos de telemetría en streaming con latencia WebSocket de menos de 50ms. Frontend en React con tablas virtualizadas, consultas de series temporales en PostgreSQL y microservicios en Go.',
        tags: ['React', 'Go', 'WebSockets', 'PostgreSQL'],
        stat: '<50ms', statLabel: 'Latencia', href: null,
      },
      {
        index: '03',
        title: 'NeonBudget',
        description: 'App móvil de finanzas personales con gestión multi-cuenta, presupuestos inteligentes, metas de ahorro, analíticas de gastos y logros gamificados. Completamente offline con SQLite — sin nube, sin rastreo.',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
        stat: 'iOS + Android', statLabel: 'Plataforma', href: '/neonbudget', internal: true,
      },
      {
        index: '04',
        title: 'BacklogFlow',
        description: 'App móvil con React Native + Expo para gestionar tu biblioteca de videojuegos de Steam. Importa tu biblioteca completa via Steam Web API, rastrea el estado por juego, integra tiempos de HowLongToBeat y funciona offline-first con SQLite.',
        tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
        stat: 'iOS + Android', statLabel: 'Plataforma', href: '/backlogflow', internal: true,
      },
    ],
  },
}

const SKILLS = ['TypeScript', 'React', 'Node.js', 'Go', 'Rust', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'GraphQL', 'WebSockets', 'WASM']

export default function Projects() {
  const sectionRef = useRef(null)
  const { lang } = useLang()
  const t = T[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-heading', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-heading', start: 'top 85%' },
      })
      gsap.fromTo('.project-card', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' },
      })
      gsap.fromTo('.skill-tag', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-row', start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="bg-ivory py-28 md:py-36 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="projects-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-mist/40 text-[10px] tracking-[0.35em] uppercase">{t.tag}</span>
            <h2 className="font-sans font-black text-obsidian text-4xl md:text-6xl tracking-[-0.03em] mt-3 leading-none">{t.title}</h2>
          </div>
          <a href="#contact"
            className="btn-magnetic self-start md:self-auto inline-flex items-center gap-2 px-7 py-3.5 bg-obsidian text-ivory rounded-full font-bold text-xs tracking-[0.15em] uppercase">
            {t.hire} <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {t.projects.map(project => {
            const CardWrapper = ({ children }) =>
              project.internal ? (
                <Link to={project.href} className="project-card group bg-ivory border border-mist/12 rounded-4xl p-8 flex flex-col gap-5 hover:shadow-2xl hover:shadow-obsidian/10 hover:-translate-y-1.5 transition-all duration-500 block">
                  {children}
                </Link>
              ) : (
                <div className="project-card group bg-ivory border border-mist/12 rounded-4xl p-8 flex flex-col gap-5 hover:shadow-2xl hover:shadow-obsidian/10 hover:-translate-y-1.5 transition-all duration-500">
                  {children}
                </div>
              )
            return (
              <CardWrapper key={project.index}>
                <div className="flex items-start justify-between">
                  <span className="font-mono text-champagne font-bold text-3xl">{project.index}</span>
                  {project.href && project.internal ? (
                    <Link to={project.href} className="hover-lift w-9 h-9 rounded-full border border-mist/15 flex items-center justify-center text-mist/40 group-hover:text-obsidian group-hover:border-mist/40 transition-colors">
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover-lift w-9 h-9 rounded-full border border-mist/15 flex items-center justify-center text-mist/40 group-hover:text-obsidian group-hover:border-mist/40 transition-colors">
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <div className="w-9 h-9 rounded-full border border-mist/15 flex items-center justify-center text-mist/20">
                      <ArrowUpRight size={15} />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-black text-obsidian text-xl leading-tight tracking-tight">{project.title}</h3>
                  <p className="font-sans text-mist/55 text-sm leading-relaxed mt-3">{project.description}</p>
                </div>
                <div className="pt-5 border-t border-mist/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-sans font-black text-champagne text-2xl tracking-tight">{project.stat}</p>
                      <p className="font-mono text-mist/35 text-[10px] tracking-widest uppercase mt-0.5">{project.statLabel}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-mist/50 bg-mist/8 px-2.5 py-1 rounded-full border border-mist/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            )
          })}
        </div>

        <div className="skills-row">
          <span className="font-mono text-mist/35 text-[10px] tracking-[0.3em] uppercase mb-5 block">{t.stack}</span>
          <div className="flex flex-wrap gap-2.5">
            {SKILLS.map(skill => (
              <span key={skill} className="skill-tag hover-lift cursor-default font-mono text-xs text-mist/60 bg-mist/8 border border-mist/10 px-3.5 py-1.5 rounded-full hover:text-obsidian hover:border-mist/30 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
