'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Contact() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section id="contacto" className="pt-[130px] mob:pt-[65px] pb-10 bg-d-dark text-d-ondark">
      <div className="mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <div data-reveal>
          <div className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent mb-6">
            {d.contact05}
          </div>
          <h2
            className="font-sg font-bold leading-[0.9] tracking-[-0.035em] m-0 mb-10 text-d-ondark"
            style={{ fontSize: 'clamp(40px, 9vw, 128px)' }}
          >
            {d.contactBig}
          </h2>
          <div className="flex flex-wrap gap-[14px] mb-10">
            <a
              href="https://www.linkedin.com/in/dgbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-d-accent hover:bg-d-accenth text-d-onaccent rounded-full font-bold text-[17px] no-underline transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Dgbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-transparent text-d-ondark rounded-full font-bold text-[17px] no-underline transition-[border-color] duration-200"
              style={{ border: '1.5px solid color-mix(in oklab, var(--d-ondark) 30%, var(--d-dark))' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--d-ondark)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-ondark) 30%, var(--d-dark))'; }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer — full width */}
      <div
        className="w-full px-10 mob:px-[22px] xs:px-4 pt-[30px] mt-20 flex justify-between items-center flex-wrap gap-[14px] text-sm ham:flex-col ham:items-center ham:text-center"
        style={{
          borderTop: '1px solid color-mix(in oklab, var(--d-ondark) 22%, var(--d-dark))',
          color: 'color-mix(in oklab, var(--d-ondark) 50%, var(--d-dark))',
        }}
      >
        <span>
          © 2026 Daniel Giannotti ·{' '}
          <a
            href="https://github.com/Dgbusiness"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-[color,border-color] duration-200"
            style={{
              color: 'inherit',
              borderBottom: '1px solid color-mix(in oklab, var(--d-ondark) 35%, var(--d-dark))',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--d-ondark)';
              e.currentTarget.style.borderColor = 'var(--d-ondark)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'color-mix(in oklab, var(--d-ondark) 50%, var(--d-dark))';
              e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-ondark) 35%, var(--d-dark))';
            }}
          >
            Dgbusiness
          </a>
        </span>
        <span className="font-jb">{d.builtWith}</span>
      </div>
    </section>
  );
}
