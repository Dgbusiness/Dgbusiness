export type Mode = 'light' | 'dark';
export type Lang = 'es' | 'en';

export interface Palette {
  bg: string;
  surface: string;
  text: string;
  accent: string;
  accenth: string;
  dark: string;
  onaccent: string;
  ondark: string;
}

export interface PaletteEntry {
  name: { es: string; en: string };
  light: Palette;
  dark: Palette;
}

export const PALETTES: PaletteEntry[] = [
  {
    name: { es: 'Hueso', en: 'Bone' },
    light:  { bg: '#f4f4f1', surface: '#fbfbf9', text: '#1d211e', accent: '#2f6b4f', accenth: '#245540', dark: '#141a16', onaccent: '#ffffff', ondark: '#eaefe9' },
    dark:   { bg: '#101310', surface: '#181c17', text: '#e7ece6', accent: '#54a079', accenth: '#67b48b', dark: '#0a0d0a', onaccent: '#081310', ondark: '#e7ece6' },
  },
  {
    name: { es: 'Gris cálido', en: 'Warm gray' },
    light:  { bg: '#efedea', surface: '#f8f6f3', text: '#211f1c', accent: '#2f6b4f', accenth: '#245540', dark: '#181612', onaccent: '#ffffff', ondark: '#efece6' },
    dark:   { bg: '#13120f', surface: '#1b1916', text: '#ece9e4', accent: '#57a37c', accenth: '#6ab48d', dark: '#0c0b09', onaccent: '#0a1310', ondark: '#ece9e4' },
  },
  {
    name: { es: 'Niebla', en: 'Mist' },
    light:  { bg: '#eceef0', surface: '#f7f8f9', text: '#1a1e20', accent: '#336b50', accenth: '#27543e', dark: '#161b1c', onaccent: '#ffffff', ondark: '#eaeef0' },
    dark:   { bg: '#0f1213', surface: '#181b1c', text: '#e6eaec', accent: '#52a17e', accenth: '#66b491', dark: '#0a0d0e', onaccent: '#081310', ondark: '#e6eaec' },
  },
  {
    name: { es: 'Blanco', en: 'White' },
    light:  { bg: '#ffffff', surface: '#f6f6f4', text: '#17191a', accent: '#2f6b4f', accenth: '#245540', dark: '#15191a', onaccent: '#ffffff', ondark: '#edf0ef' },
    dark:   { bg: '#0d0f0e', surface: '#161918', text: '#eceeec', accent: '#54a079', accenth: '#67b48b', dark: '#070908', onaccent: '#081310', ondark: '#eceeec' },
  },
];

export const DEFAULT_PALETTE_INDEX = 2; // Niebla
