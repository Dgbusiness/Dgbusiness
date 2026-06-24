'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  const { mode, lang, setMode, setLang } = useTheme();
  const d = getData(lang);

  if (!open) return null;

  const links = [
    { href: '#sobre-mi',  label: lang === 'es' ? 'Sobre mí'  : 'About'    },
    { href: '#stack',     label: 'Stack'                                   },
    { href: '#proyectos', label: lang === 'es' ? 'Proyectos' : 'Projects' },
    { href: '#contacto',  label: lang === 'es' ? 'Contacto'  : 'Contact'  },
  ];

  return (
    <div
      className="fixed inset-0 z-[98] bg-d-bg flex flex-col overflow-y-auto px-[22px] xs:px-4"
      style={{ paddingTop: 100, paddingBottom: 40 }}
    >
      <nav className="flex flex-col flex-1">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="font-sg block text-d-text hover:text-d-accent no-underline py-4 transition-colors duration-200"
            style={{
              fontSize: 'clamp(32px, 10vw, 48px)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              borderBottom: '1px solid color-mix(in oklab, var(--d-text) 10%, var(--d-bg))',
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <div
        className="flex flex-col gap-4 pt-8 mt-8"
        style={{ borderTop: '1px solid color-mix(in oklab, var(--d-text) 10%, var(--d-bg))' }}
      >
        <div className="flex gap-[10px] justify-center">
          <div
            className="flex gap-[3px] p-[3px] rounded-full"
            style={{ border: '1px solid color-mix(in oklab, var(--d-text) 18%, var(--d-bg))' }}
          >
            {(['es', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="border-none cursor-pointer font-[inherit] font-bold text-[13px] tracking-[0.04em] px-4 py-[7px] rounded-full transition-[background,color] duration-200"
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
                className="border-none cursor-pointer font-[inherit] font-bold text-[13px] tracking-[0.04em] px-4 py-[7px] rounded-full transition-[background,color] duration-200"
                style={{
                  background: mode === m ? 'var(--d-text)' : 'transparent',
                  color: mode === m ? 'var(--d-bg)' : 'color-mix(in oklab, var(--d-text) 55%, var(--d-bg))',
                }}
              >
                {m === 'light' ? d.modeLight : d.modeDark}
              </button>
            ))}
          </div>
        </div>

        <a
          href="#contacto"
          onClick={onClose}
          className="flex items-center justify-center px-7 py-4 bg-d-accent hover:bg-d-accenth text-d-onaccent rounded-full font-bold text-base tracking-[0.06em] uppercase no-underline transition-colors duration-200"
        >
          {d.btnContact}
        </a>
      </div>
    </div>
  );
}
