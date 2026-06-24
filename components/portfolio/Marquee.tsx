'use client';
import { useTheme } from '@/context/ThemeContext';
import { getData } from '@/lib/data';

export default function Marquee() {
  const { lang } = useTheme();
  const d = getData(lang);

  return (
    <div className="bg-d-dark text-d-ondark overflow-hidden">
      <div
        className="font-sg flex items-center whitespace-nowrap font-semibold tracking-[0.01em] py-[18px] text-[18px] mob:text-[14px]"
        style={{ animation: 'marqueeC 26s linear infinite' }}
      >
        {[...d.marquee, ...d.marquee].map((t, i) => (
          <span key={i}>
            <span className="px-[18px] mob:px-3">{t}</span>
            <span className="text-d-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
