'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function About() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section
      id="sobre-mi"
      className="py-[130px] mob:py-[65px] bg-d-surface"
      style={{ borderBottom: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}
    >
      <div
        className="mx-auto px-10 mob:px-[22px] xs:px-4 grid [grid-template-columns:0.5fr_2fr] mob:grid-cols-1 gap-12 mob:gap-6"
        style={{ maxWidth: W }}
      >
        <div data-reveal className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent">
          {d.about01}
        </div>

        <div data-reveal>
          <p
            className="font-sg font-medium leading-[1.12] tracking-[-0.02em] m-0 mb-8 text-d-text"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            {d.aboutA}
            <span className="text-d-accent">{d.aboutH1}</span>
            {d.aboutB}
            <span className="text-d-accent">{d.aboutH2}</span>
            {d.aboutC}
          </p>
          <p
            className="text-lg leading-[1.75] m-0"
            style={{
              color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))',
              maxWidth: 640,
            }}
          >
            {d.aboutPara}
          </p>
        </div>
      </div>
    </section>
  );
}
