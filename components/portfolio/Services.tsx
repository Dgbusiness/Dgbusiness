'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Services() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section className="pb-[130px] mob:pb-[65px] bg-d-bg">
      <div className="mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <div data-reveal className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent mb-12">
          {d.services04}
        </div>

        <div className="grid [grid-template-columns:repeat(2,1fr)] mob:grid-cols-1 gap-6">
          {d.services.map((s, i) => (
            <div
              key={i}
              data-reveal
              className="bg-d-surface rounded-3xl p-[46px] xs:p-6 transition-[border-color] duration-200"
              style={{ border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'color-mix(in oklab, var(--d-accent) 40%, var(--d-bg))';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'color-mix(in oklab, var(--d-text) 12%, var(--d-bg))';
              }}
            >
              <div className="font-sg text-[15px] font-bold text-d-accent mb-[18px]">{s.n}</div>
              <h3 className="font-sg text-[25px] font-semibold tracking-[-0.01em] m-0 mb-3 text-d-text">
                {s.title}
              </h3>
              <p
                className="text-base leading-[1.6] m-0"
                style={{ color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))' }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
