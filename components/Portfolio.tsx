'use client';
import { useState, useEffect, useLayoutEffect } from 'react';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';
import Image from 'next/image';

const SG   = { fontFamily: "var(--font-space, 'Space Grotesk', sans-serif)" } as const;
const MONO = { fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" } as const;

function reveal(style?: React.CSSProperties): React.CSSProperties {
  return {
    opacity: 0,
    transform: 'translateY(22px)',
    transition: 'opacity .8s ease, transform .9s cubic-bezier(.2,.75,.25,1)',
    ...style,
  };
}

function useBreakpoint() {
  const [w, setW] = useState(0);
  useIsoLayoutEffect(() => {
    const upd = () => setW(window.innerWidth);
    upd();
    window.addEventListener('resize', upd, { passive: true });
    return () => window.removeEventListener('resize', upd);
  }, []);
  return {
    mob: w > 0 && w <= 860,
    sm:  w > 0 && w <= 520,
    xs:  w > 0 && w <= 360,
    ham: w > 0 && w <= 430,
  };
}

const W = 1440;

export default function Portfolio() {
  const { mode, lang, setMode, setLang } = useTheme();
  const d = getData(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { mob, sm, xs, ham } = useBreakpoint();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const px  = xs ? 16 : mob ? 22 : 40;  // lateral padding
  const vp  = mob ? 65 : 130;            // vertical padding (130px sections)
  const vp9 = mob ? 45 : 90;             // vertical padding (90px sections)

  return (
    <div style={{ background: 'var(--d-bg)', color: 'var(--d-text)', fontFamily: "var(--font-hanken, 'Hanken Grotesk', sans-serif)" }}>

      {/* ══════════════════════════════ FIXED HEADER ══════════════════════ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? `20px ${px}px` : `30px ${px}px`,
        display: 'grid', gridTemplateColumns: mob ? '1fr auto' : '1fr auto 1fr',
        alignItems: 'center', gap: mob ? 10 : 16,
        fontSize: 14, fontWeight: 600, letterSpacing: '0.02em',
        color: 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))',
        borderBottom: '1px solid color-mix(in oklab, var(--d-text) 16%, var(--d-bg))',
        background: scrolled ? 'var(--d-bg)' : 'transparent',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        transition: 'padding .3s ease, background .4s ease',
      }}>

        <span>{d.year}</span>

        {!mob && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: 'var(--d-text)', justifyContent: 'center' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3fae6b', boxShadow: '0 0 0 4px rgba(63,174,107,0.18)', animation: 'blink 2.6s steps(1) infinite', flexShrink: 0 }} />
            {d.status}
          </span>
        )}

        {ham ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{ background: 'none', border: '1px solid color-mix(in oklab, var(--d-text) 22%, var(--d-bg))', borderRadius: 8, cursor: 'pointer', color: 'var(--d-text)', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color .2s' }}
          >
            {menuOpen
              ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            }
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: mob ? 8 : 12, justifyContent: 'flex-end', flexWrap: 'nowrap' }}>
            <div style={{ display: 'flex', gap: 3, padding: 3, border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))', borderRadius: 999 }}>
              {(['es', 'en'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 12, letterSpacing: '0.04em', padding: sm ? '4px 9px' : '5px 12px', borderRadius: 999, background: lang === l ? 'var(--d-text)' : 'transparent', color: lang === l ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))', transition: 'background .2s, color .2s' }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 3, padding: 3, border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))', borderRadius: 999 }}>
              {(['light', 'dark'] as const).map(m => (
                <button key={m} onClick={() => setMode(m)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 12, letterSpacing: '0.04em', padding: sm ? '4px 9px' : '5px 12px', borderRadius: 999, background: mode === m ? 'var(--d-text)' : 'transparent', color: mode === m ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))', transition: 'background .2s, color .2s' }}>
                  {m === 'light' ? d.modeLight : d.modeDark}
                </button>
              ))}
            </div>
            {scrolled && (
              <a href="#contacto" style={{ display: 'inline-flex', padding: '11px 28px', background: 'var(--d-accent)', color: 'var(--d-onaccent)', borderRadius: 999, fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background .2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--d-accenth)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--d-accent)'; }}
              >{d.btnContact}</a>
            )}
          </div>
        )}
      </header>

      {/* ══════════════════════════════ MOBILE MENU ══════════════════════ */}
      {ham && menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 98, background: 'var(--d-bg)', display: 'flex', flexDirection: 'column', padding: `100px ${px}px 40px`, overflowY: 'auto' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {([
              { href: '#sobre-mi',  label: lang === 'es' ? 'Sobre mí'  : 'About'    },
              { href: '#stack',     label: 'Stack'                                   },
              { href: '#proyectos', label: lang === 'es' ? 'Proyectos' : 'Projects' },
              { href: '#contacto',  label: lang === 'es' ? 'Contacto'  : 'Contact'  },
            ]).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ ...SG, display: 'block', fontSize: 'clamp(32px, 10vw, 48px)', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--d-text)', textDecoration: 'none', padding: '16px 0', borderBottom: '1px solid color-mix(in oklab, var(--d-text) 10%, var(--d-bg))', transition: 'color .2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--d-accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--d-text)'; }}
              >{label}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 32, borderTop: '1px solid color-mix(in oklab, var(--d-text) 10%, var(--d-bg))', marginTop: 32 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ display: 'flex', gap: 3, padding: 3, border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))', borderRadius: 999 }}>
                {(['es', 'en'] as const).map(l => (
                  <button key={l} onClick={() => setLang(l)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', padding: '7px 16px', borderRadius: 999, background: lang === l ? 'var(--d-text)' : 'transparent', color: lang === l ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))', transition: 'background .2s, color .2s' }}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 3, padding: 3, border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))', borderRadius: 999 }}>
                {(['light', 'dark'] as const).map(m => (
                  <button key={m} onClick={() => setMode(m)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em', padding: '7px 16px', borderRadius: 999, background: mode === m ? 'var(--d-text)' : 'transparent', color: mode === m ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))', transition: 'background .2s, color .2s' }}>
                    {m === 'light' ? d.modeLight : d.modeDark}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 28px', background: 'var(--d-accent)', color: 'var(--d-onaccent)', borderRadius: 999, fontWeight: 700, fontSize: 16, letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--d-accenth)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--d-accent)'; }}
            >{d.btnContact}</a>
          </div>
        </div>
      )}

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: 80, paddingBottom: 0 }}>

        <div data-parallax="0.12" style={{ position: 'absolute', top: '-14%', right: '-6%', width: mob ? 300 : 560, height: mob ? 300 : 560, borderRadius: '50%', background: 'radial-gradient(circle at 32% 30%, color-mix(in oklab, var(--d-accent) 18%, var(--d-bg)), color-mix(in oklab, var(--d-accent) 50%, var(--d-bg)) 58%, var(--d-accent))', opacity: 0.42, filter: 'blur(4px)', pointerEvents: 'none' }} />
        <div data-parallax="-0.05" style={{ position: 'absolute', bottom: '4%', left: '-6%', width: mob ? 200 : 340, height: mob ? 200 : 340, borderRadius: '50%', background: 'color-mix(in oklab, var(--d-accent) 12%, var(--d-bg))', opacity: 0.8, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: W, margin: '0 auto', padding: `0 ${px}px`, width: '100%' }}>

          <h1 data-reveal className="hero-h1" style={reveal({
            ...SG, fontWeight: 700,
            fontSize: xs ? '20vw' : mob ? 'clamp(40px, 13vw, 74px)' : 'clamp(56px, 12.5vw, 180px)',
            lineHeight: 0.86, letterSpacing: '-0.035em', margin: 0, transitionDelay: '0.05s',
          })}>
            Daniel<br />
            <span style={{ color: 'var(--d-accent)' }}>Giannotti</span>
          </h1>

          <div data-reveal style={reveal({
            marginTop: xs ? 20 : 42,
            display: 'grid',
            gridTemplateColumns: mob ? '1fr' : '1.5fr 1fr',
            gap: mob ? 24 : 40,
            alignItems: mob ? 'start' : 'end',
            transitionDelay: '0.18s',
          })}>
            <div style={{ ...SG, fontSize: 'clamp(20px, 2.6vw, 32px)', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.18, color: 'var(--d-text)', maxWidth: 680 }}>
              Full-Stack Software Engineer
              <span style={{ color: 'color-mix(in oklab, var(--d-text) 48%, var(--d-bg))' }}>{d.roleTail}</span>
            </div>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 12,
              flexDirection: xs ? 'column' : 'row',
              justifyContent: xs ? 'center' : mob ? 'flex-start' : 'flex-end',
            }}>
              <a href="#proyectos"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9, padding: '15px 28px', background: 'var(--d-text)', color: 'var(--d-bg)', borderRadius: 999, fontWeight: 600, fontSize: 16, textDecoration: 'none', transition: 'background .2s, color .2s', ...(xs ? { width: '100%' } : {}) }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--d-accent)'; e.currentTarget.style.color = 'var(--d-onaccent)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--d-text)'; e.currentTarget.style.color = 'var(--d-bg)'; }}
              >{d.btnProjects}</a>
              <a href="#contacto"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '15px 28px', background: 'transparent', border: '1.5px solid color-mix(in oklab, var(--d-text) 28%, var(--d-bg))', color: 'var(--d-text)', borderRadius: 999, fontWeight: 600, fontSize: 16, textDecoration: 'none', transition: 'border-color .2s', ...(xs ? { width: '100%' } : {}) }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--d-text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-text) 28%, var(--d-bg))'; }}
              >{d.btnContact}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ MARQUEE ═════════════════════════════ */}
      <div style={{ background: 'var(--d-dark)', color: 'var(--d-ondark)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', ...SG, fontSize: mob ? 14 : 18, fontWeight: 600, letterSpacing: '0.01em', padding: '18px 0', animation: 'marqueeC 26s linear infinite' }}>
          {[...d.marquee, ...d.marquee].map((t, i) => (
            <span key={i}><span style={{ padding: mob ? '0 12px' : '0 18px' }}>{t}</span><span style={{ color: 'var(--d-accent)' }}>✦</span></span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="sobre-mi" style={{ padding: `${vp}px 0`, background: 'var(--d-surface)', borderBottom: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px`, display: 'grid', gridTemplateColumns: mob ? '1fr' : '0.5fr 2fr', gap: mob ? 24 : 48 }}>
          <div data-reveal style={reveal({ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)' })}>
            {d.about01}
          </div>
          <div data-reveal style={reveal({ transitionDelay: '0.08s' })}>
            <p style={{ ...SG, fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 0 32px', color: 'var(--d-text)' }}>
              {d.aboutA}<span style={{ color: 'var(--d-accent)' }}>{d.aboutH1}</span>{d.aboutB}<span style={{ color: 'var(--d-accent)' }}>{d.aboutH2}</span>{d.aboutC}
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))', margin: 0, maxWidth: 640 }}>
              {d.aboutPara}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ STACK ═══════════════════════════════ */}
      <section id="stack" style={{ padding: `${vp9}px 0`, background: 'var(--d-bg)' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div data-reveal style={reveal({ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)', marginBottom: 20 })}>
            {d.stackLabel}
          </div>
          {d.stackGroups.map((g, i) => (
            <div key={i} data-reveal style={reveal({ display: 'grid', gridTemplateColumns: mob ? '1fr' : '0.5fr 2fr', gap: mob ? 12 : 48, alignItems: mob ? 'start' : 'center', padding: '28px 0', borderTop: '1px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))' })}>
              <div style={{ ...SG, fontSize: 19, fontWeight: 600, color: 'var(--d-text)' }}>{g.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {g.items.map(it => (
                  <span key={it} style={{ ...SG, padding: '9px 18px', background: 'var(--d-surface)', border: '1.5px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))', borderRadius: 999, fontSize: 16, fontWeight: 500, color: 'var(--d-text)' }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ PROJECTS ════════════════════════════ */}
      <section id="proyectos" style={{ padding: `${vp}px 0`, background: 'var(--d-surface)', borderTop: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div data-reveal style={reveal({ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)', marginBottom: 44 })}>
            {d.projects02}
          </div>

          {/* Churupos */}
          <div data-reveal style={reveal({ background: 'var(--d-bg)', border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))', borderRadius: 32, overflow: 'hidden', display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1.1fr', alignItems: 'stretch' })}>
            <div style={{ padding: xs ? 26 : 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: 'var(--d-accent)', marginBottom: 22 }}>{d.live}</div>
              <h3 style={{ ...SG, fontWeight: 700, fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 0.9, letterSpacing: '-0.03em', margin: '0 0 20px', color: 'var(--d-text)' }}>Churupos</h3>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))', margin: '0 0 30px', maxWidth: 420 }}>{d.churuposDesc}</p>
              <a href="https://churupos.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...SG, fontWeight: 700, fontSize: 18, color: 'var(--d-accent)', textDecoration: 'none', borderBottom: '2px solid color-mix(in oklab, var(--d-accent) 45%, var(--d-bg))', paddingBottom: 4, width: 'fit-content', transition: 'gap .2s' }}>
                churupos.com →
              </a>
            </div>
            <div style={{ position: 'relative', alignSelf: 'stretch', minHeight: mob ? 260 : 440, overflow: 'hidden', borderLeft: mob ? 'none' : '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))', borderTop: mob ? '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' : 'none', background: '#0a0d0c' }}>
              <Image src="/churupos.png" alt="Churupos dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top left' }} priority />
            </div>
          </div>

          {/* secondary */}
          <div data-reveal style={reveal({ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 24, marginTop: 24, transitionDelay: '0.08s' })}>
            <div style={{ background: 'var(--d-bg)', border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))', borderRadius: 24, padding: xs ? 24 : 44, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 230 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'color-mix(in oklab, var(--d-text) 48%, var(--d-bg))', marginBottom: 16 }}>{d.personal}</div>
                <h3 style={{ ...SG, fontWeight: 600, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 10px', color: 'var(--d-text)' }}>{d.ctfTitle}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))', margin: 0 }}>{d.ctfDesc}</p>
              </div>
              <a href="https://github.com/Dgbusiness" target="_blank" rel="noopener noreferrer" style={{ ...SG, fontWeight: 700, color: 'var(--d-accent)', textDecoration: 'none', fontSize: 16, marginTop: 22, width: 'fit-content' }}>
                {d.githubLink} →
              </a>
            </div>
            <div style={{ background: 'var(--d-dark)', color: 'var(--d-ondark)', borderRadius: 24, padding: xs ? 24 : 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', minHeight: 230 }}>
              <h3 style={{ ...SG, fontWeight: 600, fontSize: 32, letterSpacing: '-0.02em', margin: '0 0 10px', color: 'var(--d-ondark)' }}>{d.yourProject}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'color-mix(in oklab, var(--d-ondark) 55%, var(--d-dark))', margin: '0 0 24px' }}>{d.yourProjectDesc}</p>
              <a href="#contacto"
                style={{ display: 'inline-flex', padding: '13px 26px', background: 'var(--d-accent)', color: 'var(--d-onaccent)', borderRadius: 999, fontWeight: 700, fontSize: 15, textDecoration: 'none', transition: 'background .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--d-accenth)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--d-accent)'; }}
              >{d.letsTalk}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ METRICS ═════════════════════════════ */}
      <section style={{ padding: `${vp}px 0`, background: 'var(--d-bg)' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div data-reveal style={reveal({ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)', marginBottom: 20 })}>
            {d.impact03}
          </div>
          {d.metrics.map((m, i) => (
            <div key={i} data-reveal style={reveal({ display: 'grid', gridTemplateColumns: mob ? '1fr' : '0.7fr 2fr', gap: mob ? 8 : 40, alignItems: mob ? 'start' : 'center', padding: '34px 0', borderTop: '1px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))' })}>
              <div style={{ ...SG, fontWeight: 700, fontSize: mob ? 'clamp(40px, 11vw, 72px)' : 'clamp(48px, 7vw, 92px)', lineHeight: 0.85, letterSpacing: '-0.03em', color: 'var(--d-accent)' }}>{m.value}</div>
              <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.4, color: 'var(--d-text)', margin: 0, maxWidth: 620 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ SERVICES ════════════════════════════ */}
      <section style={{ padding: `0 0 ${vp}px`, background: 'var(--d-bg)' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div data-reveal style={reveal({ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)', marginBottom: 48 })}>
            {d.services04}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : 'repeat(2, 1fr)', gap: 24 }}>
            {d.services.map((s, i) => (
              <div key={i} data-reveal
                style={reveal({ background: 'var(--d-surface)', border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))', borderRadius: 24, padding: xs ? 24 : 46, transition: 'border-color .2s' })}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'color-mix(in oklab, var(--d-accent) 40%, var(--d-bg))'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'color-mix(in oklab, var(--d-text) 12%, var(--d-bg))'; }}
              >
                <div style={{ ...SG, fontSize: 15, fontWeight: 700, color: 'var(--d-accent)', marginBottom: 18 }}>{s.n}</div>
                <h3 style={{ ...SG, fontSize: 25, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 12px', color: 'var(--d-text)' }}>{s.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CONTACT ═════════════════════════════ */}
      <section id="contacto" style={{ padding: `${vp}px 0 40px`, background: 'var(--d-dark)', color: 'var(--d-ondark)' }}>
        <div style={{ maxWidth: W, margin: '0 auto', padding: `0 ${px}px` }}>
          <div data-reveal style={reveal()}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--d-accent)', marginBottom: 24 }}>{d.contact05}</div>
            <h2 style={{ ...SG, fontWeight: 700, fontSize: 'clamp(40px, 9vw, 128px)', lineHeight: 0.9, letterSpacing: '-0.035em', margin: '0 0 40px', color: 'var(--d-ondark)' }}>{d.contactBig}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 40 }}>
              <a href="https://www.linkedin.com/in/dgbusiness" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', padding: '16px 32px', background: 'var(--d-accent)', color: 'var(--d-onaccent)', borderRadius: 999, fontWeight: 700, fontSize: 17, textDecoration: 'none', transition: 'background .2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--d-accenth)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--d-accent)'; }}
              >LinkedIn</a>
              <a href="https://github.com/Dgbusiness" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', padding: '16px 32px', background: 'transparent', border: '1.5px solid color-mix(in oklab, var(--d-ondark) 30%, var(--d-dark))', color: 'var(--d-ondark)', borderRadius: 999, fontWeight: 700, fontSize: 17, textDecoration: 'none', transition: 'border-color .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--d-ondark)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-ondark) 30%, var(--d-dark))'; }}
              >GitHub</a>
            </div>
          </div>
        </div>

        {/* ── footer bar — full width ── */}
        <div style={{ width: '100%', padding: `30px ${px}px 0`, marginTop: 80, borderTop: '1px solid color-mix(in oklab, var(--d-ondark) 22%, var(--d-dark))', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, fontSize: 14, color: 'color-mix(in oklab, var(--d-ondark) 50%, var(--d-dark))' }}>
          <span>© 2026 Daniel Giannotti · <a href="https://github.com/Dgbusiness" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid color-mix(in oklab, var(--d-ondark) 35%, var(--d-dark))', transition: 'color .2s, border-color .2s' }} onMouseEnter={e => { e.currentTarget.style.color = 'var(--d-ondark)'; e.currentTarget.style.borderColor = 'var(--d-ondark)'; }} onMouseLeave={e => { e.currentTarget.style.color = 'inherit'; e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-ondark) 35%, var(--d-dark))'; }}>Dgbusiness</a></span>
          <span style={{ ...MONO }}>{d.builtWith}</span>
        </div>
      </section>

    </div>
  );
}
