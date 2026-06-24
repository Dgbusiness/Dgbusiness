'use client';
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { PALETTES, DEFAULT_PALETTE_INDEX, type Mode, type Lang } from '@/lib/theme';

interface ThemeCtx {
  mode: Mode;
  lang: Lang;
  paletteIndex: number;
  setMode: (m: Mode) => void;
  setLang: (l: Lang) => void;
  setPalette: (i: number) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState]        = useState<Mode>('light');
  const [lang, setLangState]        = useState<Lang>('es');
  const [paletteIndex, setPalState] = useState(DEFAULT_PALETTE_INDEX);

  // Refs so setters always have the current value without stale closures
  const modeRef    = useRef<Mode>('light');
  const palRef     = useRef(DEFAULT_PALETTE_INDEX);
  const userSetMode = useRef(false);

  const applyVars = useCallback((m: Mode, pi: number) => {
    if (typeof document === 'undefined') return;
    const pal = PALETTES[pi] ?? PALETTES[0];
    const p   = m === 'dark' ? pal.dark : pal.light;
    const root = document.documentElement;
    root.style.setProperty('--d-bg',       p.bg);
    root.style.setProperty('--d-surface',  p.surface);
    root.style.setProperty('--d-text',     p.text);
    root.style.setProperty('--d-accent',   p.accent);
    root.style.setProperty('--d-accenth',  p.accenth);
    root.style.setProperty('--d-dark',     p.dark);
    root.style.setProperty('--d-onaccent', p.onaccent);
    root.style.setProperty('--d-ondark',   p.ondark);
    root.style.colorScheme = m;
  }, []);

  // Setters apply CSS vars immediately via refs — no waiting for effects
  const setMode = useCallback((m: Mode) => {
    userSetMode.current = true;
    modeRef.current = m;
    setModeState(m);
    applyVars(m, palRef.current);
  }, [applyVars]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const setPalette = useCallback((i: number) => {
    palRef.current = i;
    setPalState(i);
    applyVars(modeRef.current, i);
  }, [applyVars]);

  // On mount: detect system color scheme and apply initial theme
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const initial: Mode = mq.matches ? 'dark' : 'light';
    modeRef.current = initial;
    setModeState(initial);
    applyVars(initial, palRef.current);

    const handler = (e: MediaQueryListEvent) => {
      if (userSetMode.current) return;
      const next: Mode = e.matches ? 'dark' : 'light';
      modeRef.current = next;
      setModeState(next);
      applyVars(next, palRef.current);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [applyVars]);

  // Scroll reveal
  useEffect(() => {
    const reveal = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(el => {
        if (el.dataset.revealed) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -60) {
          el.dataset.revealed = '1';
          el.style.removeProperty('opacity');
          el.style.removeProperty('transform');
          el.style.removeProperty('transition');
          try {
            el.animate(
              [{ opacity: '0', transform: 'translateY(22px)' }, { opacity: '1', transform: 'translateY(0)' }],
              { duration: 750, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'forwards' }
            );
          } catch {
            el.style.opacity = '1';
          }
        }
      });
    };

    const onScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
        const sp = parseFloat(el.dataset.parallax ?? '0');
        el.style.transform = `translate3d(0,${(y * sp).toFixed(1)}px,0)`;
      });
      reveal();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', reveal);
    reveal();
    const t = setInterval(reveal, 600);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', reveal);
      clearInterval(t);
    };
  }, []);

  return (
    <Ctx.Provider value={{ mode, lang, paletteIndex, setMode, setLang, setPalette }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
}
