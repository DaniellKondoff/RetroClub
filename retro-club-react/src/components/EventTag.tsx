import type { TagType } from '../data/events';

interface TagStyle {
  bg: string;
  border: string;
  text: string;
}

const TAG_STYLES: Record<TagType, TagStyle> = {
  'et-izl': {
    bg:     'rgba(180,134,11,0.13)',
    border: 'rgba(180,134,11,0.55)',
    text:   '#b8860b',
  },
  'et-rali': {
    bg:     'rgba(60,80,60,0.12)',
    border: 'rgba(70,100,70,0.50)',
    text:   '#4a6840',
  },
  'et-sr': {
    bg:     'rgba(122,106,64,0.10)',
    border: 'rgba(122,106,64,0.42)',
    text:   '#7a6a40',
  },
  'et-fest': {
    bg:     'rgba(192,40,42,0.14)',
    border: 'rgba(192,40,42,0.48)',
    text:   '#c0282a',
  },
  'et-featured': {
    bg:     'rgba(232,200,74,0.18)',
    border: 'rgba(212,160,23,0.6)',
    text:   '#d4a017',
  },
};

interface EventTagProps {
  tag: string;
  tagType: TagType;
}

export default function EventTag({ tag, tagType }: EventTagProps) {
  const s = TAG_STYLES[tagType];
  const featured = tagType === 'et-featured';
  return (
    <span
      className={`inline-flex items-center font-['Cinzel'] tracking-[0.3em] uppercase px-3 py-[5px] rounded-full border leading-none ${featured ? 'text-[11px] font-bold' : 'text-[11px]'}${tagType === 'et-fest' ? ' event-tag--fest' : ''}`}
      style={{ background: s.bg, borderColor: s.border, color: s.text }}
    >
      {tag}
    </span>
  );
}
