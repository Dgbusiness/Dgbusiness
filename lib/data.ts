import type { Lang } from './theme';

export interface StackGroup { label: string; items: string[] }
export interface Metric     { value: string; label: string }
export interface Service    { n: string; title: string; desc: string }

export function getData(lang: Lang) {
  const es = lang === 'es';
  return {
    year:          es ? 'Portafolio' : 'Portfolio',
    status:        es ? 'Disponible para nuevos proyectos' : 'Available for new projects',
    modeLight:     es ? 'Claro' : 'Light',
    modeDark:      es ? 'Oscuro' : 'Dark',
    paletteLabel:  es ? 'Fondo' : 'Background',
    roleTail:      es
      ? ' — 8+ años construyendo y escalando aplicaciones web, de la API al frontend.'
      : ' — 8+ years building and scaling web apps, from the API to the frontend.',
    btnProjects:   es ? 'Ver proyectos' : 'View projects',
    btnContact:    es ? 'Contáctame' : 'Get in touch',
    marquee:       es
      ? ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Microservicios', 'TDD', 'Cloud', 'Headless CMS']
      : ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'Microservices', 'TDD', 'Cloud', 'Headless CMS'],
    about01:       es ? '(01) Sobre mí' : '(01) About',
    aboutA:        es ? 'Cómodo en todo el stack — de sitios cliente en WordPress a builds ' : 'Comfortable across the whole stack — from WordPress client sites to ',
    aboutH1:       'headless',
    aboutB:        es ? ' y backends orientados a ' : ' builds and ',
    aboutH2:       es ? 'APIs' : 'API-driven',
    aboutC:        es ? '.' : ' backends.',
    aboutPara:     es
      ? 'He mentoreado a desarrolladores junior y colaborado con equipos de diseño, SEO y marketing. Fuera del trabajo exploro seguridad ofensiva con un repositorio de CTFs y práctica de pentesting.'
      : 'I have mentored junior developers and collaborated with design, SEO and marketing teams. Outside of work I explore offensive security with a CTF write-up repository and hands-on pentesting practice.',
    stackLabel:    'Stack',
    projects02:    es ? '(02) Proyectos destacados' : '(02) Featured projects',
    live:          es ? '● Producto en vivo · Next.js' : '● Live product · Next.js',
    churuposDesc:  es
      ? 'Tu gestor de finanzas personales, simplificado. Llevá el control de tus churupos sin fricción — construido con Next.js de punta a punta.'
      : 'Your personal finance manager, simplified. Keep track of your money without friction — built end-to-end with Next.js.',
    personal:      es ? 'Proyecto personal' : 'Personal project',
    ctfTitle:      es ? 'CTF & Seguridad ofensiva' : 'CTF & Offensive security',
    ctfDesc:       es
      ? 'Documentación de CTFs y práctica con metodologías de pentesting.'
      : 'CTF write-ups and hands-on practice with pentesting methodologies.',
    githubLink:    es ? 'Ver en GitHub' : 'View on GitHub',
    yourProject:   es ? '¿Tu proyecto, aquí?' : 'Your project here?',
    yourProjectDesc: es ? 'Estoy abierto a freelance y colaboraciones.' : 'Open to freelance work and collaborations.',
    letsTalk:      es ? 'Hablemos' : "Let's talk",
    impact03:      es ? '(03) Impacto' : '(03) Impact',
    services04:    es ? '(04) Servicios' : '(04) Services',
    contact05:     es ? '(05) Contacto' : '(05) Contact',
    contactBig:    es ? 'Construyamos algo juntos.' : "Let's build something together.",
    footer:        '© 2026 Daniel Giannotti · Dgbusiness',
    builtWith:     es ? 'Construido con Next.js' : 'Built with Next.js',
    stackGroups: (es ? [
      { label: 'Frontend',         items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
      { label: 'Backend',          items: ['Node.js', 'PHP / Laravel', 'REST APIs', 'Microservicios'] },
      { label: 'Práctica & Cloud', items: ['TDD', 'CI/CD', 'Cloud Infra', 'Headless CMS', 'WordPress'] },
    ] : [
      { label: 'Frontend',         items: ['React', 'Next.js', 'TypeScript', 'JavaScript'] },
      { label: 'Backend',          items: ['Node.js', 'PHP / Laravel', 'REST APIs', 'Microservices'] },
      { label: 'Practice & Cloud', items: ['TDD', 'CI/CD', 'Cloud Infra', 'Headless CMS', 'WordPress'] },
    ]) as StackGroup[],
    metrics: (es ? [
      { value: '50%+',  label: 'menos pérdida de datos de atribución, centralizando el tracking de UTM entre Meta Ads y el flujo de compra.' },
      { value: '+22%',  label: 'de engagement y −18% de bounce rate optimizando landing pages junto a marketing y SEO.' },
      { value: '90%+',  label: 'de cobertura de tests en microservicios críticos, garantizando integraciones estables con terceros.' },
      { value: '200+',  label: 'páginas entregadas en 23+ cuentas, con un turnaround promedio de ~45 min por página.' },
    ] : [
      { value: '50%+',  label: 'less attribution data loss by centralizing UTM tracking across Meta Ads and the purchase flow.' },
      { value: '+22%',  label: 'engagement and −18% bounce rate by optimizing landing pages with marketing and SEO.' },
      { value: '90%+',  label: 'test coverage on critical microservices, ensuring stable third-party integrations.' },
      { value: '200+',  label: 'pages delivered across 23+ accounts, averaging ~45 min turnaround per page.' },
    ]) as Metric[],
    services: (es ? [
      { n: '01', title: 'Aplicaciones full-stack',   desc: 'Productos web completos con React, Next.js y Node.js — del diseño de la API al frontend pulido.' },
      { n: '02', title: 'Headless CMS & WordPress',  desc: 'Desde sitios cliente en WordPress hasta builds headless y arquitecturas orientadas a contenido.' },
      { n: '03', title: 'APIs & microservicios',     desc: 'Backends robustos con TDD, alta cobertura de tests e integraciones de terceros confiables.' },
      { n: '04', title: 'Optimización & SEO',        desc: 'Mejoras de conversión, tracking de atribución y performance de landing pages junto a marketing.' },
    ] : [
      { n: '01', title: 'Full-stack applications',   desc: 'Complete web products with React, Next.js and Node.js — from API design to a polished frontend.' },
      { n: '02', title: 'Headless CMS & WordPress',  desc: 'From WordPress client sites to headless builds and content-driven architectures.' },
      { n: '03', title: 'APIs & microservices',      desc: 'Robust backends with TDD, high test coverage and reliable third-party integrations.' },
      { n: '04', title: 'Optimization & SEO',        desc: 'Conversion improvements, attribution tracking and landing-page performance with marketing.' },
    ]) as Service[],
  };
}
