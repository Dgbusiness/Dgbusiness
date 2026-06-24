'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Metrics() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section className="py-[130px] mob:py-[65px] bg-d-bg">
      <div className="mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <div data-reveal className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent mb-5">
          {d.impact03}
        </div>

        {d.metrics.map((m, i) => (
          <div
            key={i}
            data-reveal
            className="grid [grid-template-columns:0.7fr_2fr] mob:grid-cols-1 gap-10 mob:gap-2 items-center mob:items-start py-[34px]"
            style={{ borderTop: '1px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))' }}
          >
            <div
              className="font-sg font-bold leading-[0.85] tracking-[-0.03em] text-d-accent text-[clamp(48px,7vw,92px)] mob:text-[clamp(40px,11vw,72px)]"
            >
              {m.value}
            </div>
            <p
              className="m-0 text-d-text leading-[1.4]"
              style={{ fontSize: 'clamp(18px, 2vw, 24px)', maxWidth: 620 }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
