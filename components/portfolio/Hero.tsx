'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Hero() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-20">
      <div
        data-parallax="0.12"
        className="absolute top-[-14%] right-[-6%] rounded-full opacity-[0.42] blur-[4px] pointer-events-none w-[560px] h-[560px] mob:w-[300px] mob:h-[300px]"
        style={{
          background: 'radial-gradient(circle at 32% 30%, color-mix(in oklab, var(--d-accent) 18%, var(--d-bg)), color-mix(in oklab, var(--d-accent) 50%, var(--d-bg)) 58%, var(--d-accent))',
        }}
      />
      <div
        data-parallax="-0.05"
        className="absolute bottom-[4%] left-[-6%] rounded-full opacity-80 pointer-events-none w-[340px] h-[340px] mob:w-[200px] mob:h-[200px]"
        style={{ background: 'color-mix(in oklab, var(--d-accent) 12%, var(--d-bg))' }}
      />

      <div className="relative w-full mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <h1
          data-reveal
          className="font-sg font-bold leading-[0.86] tracking-[-0.035em] m-0 text-d-text text-[clamp(56px,12.5vw,180px)] mob:text-[clamp(40px,13vw,74px)] xs:text-[20vw]"
        >
          Daniel<br />
          <span className="text-d-accent">Giannotti</span>
        </h1>

        <div
          data-reveal
          className="mt-[42px] mob:mt-5 grid [grid-template-columns:1.5fr_1fr] mob:grid-cols-1 gap-10 mob:gap-6 items-end mob:items-start"
        >
          <div
            className="font-sg font-medium leading-[1.18] tracking-[-0.01em] text-d-text"
            style={{ fontSize: 'clamp(20px, 2.6vw, 32px)', maxWidth: 680 }}
          >
            Full-Stack Software Engineer
            <span style={{ color: 'color-mix(in oklab, var(--d-text) 48%, var(--d-bg))' }}>
              {d.roleTail}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-end mob:justify-start xs:flex-col xs:items-stretch">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-[9px] px-7 py-[15px] bg-d-text text-d-bg rounded-full font-semibold text-base no-underline transition-[background,color] duration-200 hover:bg-d-accent hover:text-d-onaccent"
            >
              {d.btnProjects}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-7 py-[15px] bg-transparent text-d-text rounded-full font-semibold text-base no-underline transition-[border-color] duration-200"
              style={{ border: '1.5px solid color-mix(in oklab, var(--d-text) 28%, var(--d-bg))' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--d-text)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'color-mix(in oklab, var(--d-text) 28%, var(--d-bg))'; }}
            >
              {d.btnContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
