/**
 * Shared data contracts for the AVC TIME homepage root experience.
 * These types define the data flow: page → VitrineStage → child components.
 */

export interface WatchSpec {
  label: 'Movimiento' | 'Material' | 'Reserva';
  value: string;
}

export interface WatchImage {
  src: string;
  alt: string;
  priority?: boolean;
}

export interface FeaturedWatch {
  id: string;
  name: string;
  collection: string;
  image?: WatchImage;
  specs: [WatchSpec, WatchSpec, WatchSpec];
  ctaUrl: string;
  ctaLabel?: string;
  mood?: 'gold' | 'smoke';
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  intro: string;
  tooltip?: string;
}

export interface SupportingSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  cta?: { href: string; label: string };
}
