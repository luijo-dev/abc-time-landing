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

/** A single row inside a detail spec group */
export interface WatchDetailSpecRow {
  label: string;
  value: string;
}

/** One of the four tech groups shown in the detail panel */
export interface WatchDetailSpecGroup {
  icon: string;         // Material Symbol name
  title: string;        // e.g. "Caja"
  rows: WatchDetailSpecRow[];
}

/** Full detail data rendered in the product drawer */
export interface WatchDetail {
  eyebrow: string;       // e.g. "Excellence Collection"
  description: string;
  specGroups: WatchDetailSpecGroup[];
  /** Ergonomics / lifestyle section */
  ergonomics?: {
    title: string;
    body: string[];
    image?: WatchImage;
  };
}

export interface FeaturedWatch {
  id: string;
  name: string;
  collection: string;
  image?: WatchImage;
  /** Alternate image shown on hover in the catalog grid */
  hoverImage?: WatchImage;
  specs: [WatchSpec, WatchSpec, WatchSpec];
  ctaUrl: string;
  ctaLabel?: string;
  mood?: 'gold' | 'smoke';
  detail?: WatchDetail;
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
