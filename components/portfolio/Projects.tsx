'use client';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

const W = 1440;

export default function Projects() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <section
      id="proyectos"
      className="py-[130px] mob:py-[65px] bg-d-surface"
      style={{ borderTop: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}
    >
      <div className="mx-auto px-10 mob:px-[22px] xs:px-4" style={{ maxWidth: W }}>
        <div data-reveal className="text-sm font-bold tracking-[0.1em] uppercase text-d-accent mb-11">
          {d.projects02}
        </div>

        {/* Churupos — featured */}
        <div
          data-reveal
          className="bg-d-bg rounded-[32px] overflow-hidden grid [grid-template-columns:1fr_1.1fr] mob:grid-cols-1 items-stretch"
          style={{ border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}
        >
          <div className="p-[60px] xs:p-[26px] flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[13px] font-bold text-d-accent mb-[22px]">
              {d.live}
            </div>
            <h3
              className="font-sg font-bold leading-[0.9] tracking-[-0.03em] m-0 mb-5 text-d-text"
              style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
            >
              Churupos
            </h3>
            <p
              className="text-[19px] leading-[1.6] m-0 mb-[30px]"
              style={{ color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))', maxWidth: 420 }}
            >
              {d.churuposDesc}
            </p>
            <a
              href="https://churupos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sg font-bold text-[18px] text-d-accent no-underline inline-flex items-center gap-[10px] pb-1 w-fit transition-[gap] duration-200"
              style={{ borderBottom: '2px solid color-mix(in oklab, var(--d-accent) 45%, var(--d-bg))' }}
            >
              churupos.com →
            </a>
          </div>
          <div
            className="relative self-stretch min-h-[440px] mob:min-h-[260px] overflow-hidden"
            style={{
              borderLeft: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))',
              background: '#0a0d0c',
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/churupos.png`}
              alt="Churupos dashboard"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
              priority
            />
          </div>
        </div>

        {/* Secondary cards */}
        <div data-reveal className="grid [grid-template-columns:1fr_1fr] mob:grid-cols-1 gap-6 mt-6">
          <div
            className="bg-d-bg rounded-3xl p-11 xs:p-6 flex flex-col justify-between min-h-[230px]"
            style={{ border: '1px solid color-mix(in oklab, var(--d-text) 12%, var(--d-bg))' }}
          >
            <div>
              <div
                className="text-[13px] font-bold mb-4"
                style={{ color: 'color-mix(in oklab, var(--d-text) 48%, var(--d-bg))' }}
              >
                {d.personal}
              </div>
              <h3 className="font-sg font-semibold text-[32px] tracking-[-0.02em] m-0 mb-[10px] text-d-text">
                {d.ctfTitle}
              </h3>
              <p
                className="text-base leading-[1.6] m-0"
                style={{ color: 'color-mix(in oklab, var(--d-text) 56%, var(--d-bg))' }}
              >
                {d.ctfDesc}
              </p>
            </div>
            <a
              href="https://github.com/Dgbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sg font-bold text-d-accent no-underline text-base mt-[22px] w-fit"
            >
              {d.githubLink} →
            </a>
          </div>

          <div className="bg-d-dark text-d-ondark rounded-3xl p-11 xs:p-6 flex flex-col justify-center items-start min-h-[230px]">
            <h3 className="font-sg font-semibold text-[32px] tracking-[-0.02em] m-0 mb-[10px] text-d-ondark">
              {d.yourProject}
            </h3>
            <p
              className="text-base leading-[1.6] m-0 mb-6"
              style={{ color: 'color-mix(in oklab, var(--d-ondark) 55%, var(--d-dark))' }}
            >
              {d.yourProjectDesc}
            </p>
            <a
              href="#contacto"
              className="inline-flex px-[26px] py-[13px] bg-d-accent hover:bg-d-accenth text-d-onaccent rounded-full font-bold text-[15px] no-underline transition-colors duration-200"
            >
              {d.letsTalk}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
