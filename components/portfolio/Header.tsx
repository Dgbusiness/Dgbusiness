'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { mode, lang, setMode, setLang } = useTheme();
  const d = getData(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[100]',
          'flex items-center gap-[10px]',
          'px-10 mob:px-[22px] xs:px-4',
          scrolled ? 'py-5 bg-d-bg' : 'py-[30px] bg-transparent',
          'text-sm font-semibold tracking-[0.02em] border-b',
          'backdrop-blur-[12px]',
          'transition-[padding,background-color] duration-300',
        ].join(' ')}
        style={{
          color: 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))',
          borderBottomColor: 'color-mix(in oklab, var(--d-text) 16%, var(--d-bg))',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <span className="flex-1">{d.year}</span>

        {/* Status dot — desktop only */}
        <span className="mob:hidden inline-flex items-center gap-[9px] text-d-text">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{
              background: '#3fae6b',
              boxShadow: '0 0 0 4px rgba(63,174,107,0.18)',
              animation: 'blink 2.6s steps(1) infinite',
            }}
          />
          {d.status}
        </span>

        {/* Right side — wrapper prevents grid jumping */}
        <div className="flex-1 flex justify-end items-center">
          {/* Hamburger: CSS shows this on ≤430px, no JS needed for initial render */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="hidden ham:flex items-center justify-center rounded-lg cursor-pointer bg-transparent transition-[border-color] duration-200"
            style={{
              border: '1px solid color-mix(in oklab, var(--d-text) 22%, var(--d-bg))',
              color: 'var(--d-text)',
              padding: '8px 10px',
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          {/* Nav controls: CSS hides this on ≤430px */}
          <div className="ham:hidden flex items-center gap-3 sm2:gap-2 flex-nowrap">
            <div
              className="flex gap-[3px] p-[3px] rounded-full"
              style={{ border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))' }}
            >
              {(['es', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="border-none cursor-pointer font-[inherit] font-bold text-xs tracking-[0.04em] px-3 py-[5px] sm2:px-[9px] sm2:py-1 rounded-full transition-[background,color] duration-200"
                  style={{
                    background: lang === l ? 'var(--d-text)' : 'transparent',
                    color: lang === l ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <div
              className="flex gap-[3px] p-[3px] rounded-full"
              style={{ border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))' }}
            >
              {(['light', 'dark'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="border-none cursor-pointer font-[inherit] font-bold text-xs tracking-[0.04em] px-3 py-[5px] sm2:px-[9px] sm2:py-1 rounded-full transition-[background,color] duration-200"
                  style={{
                    background: mode === m ? 'var(--d-text)' : 'transparent',
                    color: mode === m ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))',
                  }}
                >
                  {m === 'light' ? d.modeLight : d.modeDark}
                </button>
              ))}
            </div>

            {scrolled && (
              <a
                href="#contacto"
                className="inline-flex px-7 py-[11px] bg-d-accent hover:bg-d-accenth text-d-onaccent rounded-full font-bold text-[13px] tracking-[0.06em] uppercase no-underline transition-colors duration-200 whitespace-nowrap"
              >
                {d.btnContact}
              </a>
            )}
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
