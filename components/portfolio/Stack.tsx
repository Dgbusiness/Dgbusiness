'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Stack() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section id="stack" className="py-[90px] mob:py-[45px] bg-d-bg">
      <div className="mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <div data-reveal className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent mb-5">
          {d.stackLabel}
        </div>

        {d.stackGroups.map((g, i) => (
          <div
            key={i}
            data-reveal
            className="grid [grid-template-columns:0.5fr_2fr] mob:grid-cols-1 gap-12 mob:gap-3 items-center mob:items-start py-7"
            style={{ borderTop: '1px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))' }}
          >
            <div className="font-sg text-[19px] font-semibold text-d-text">{g.label}</div>
            <div className="flex flex-wrap gap-[10px]">
              {g.items.map(it => (
                <span
                  key={it}
                  className="font-sg px-[18px] py-[9px] bg-d-surface text-d-text rounded-full text-base font-medium"
                  style={{ border: '1.5px solid color-mix(in oklab, var(--d-text) 14%, var(--d-bg))' }}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
