interface EventTagProps {
  tag: string;
  index: number;
  featured?: boolean;
}

const EVEN_STYLE = {
  bg:     'rgba(180,134,11,0.13)',
  border: 'rgba(180,134,11,0.55)',
  text:   '#b8860b',
  bold:   false,
};

const ODD_STYLE = {
  bg:     'rgba(122,106,64,0.10)',
  border: 'rgba(122,106,64,0.42)',
  text:   '#7a6a40',
  bold:   false,
};

const FEATURED_STYLE = {
  bg:     'rgba(232,200,74,0.18)',
  border: 'rgba(212,160,23,0.6)',
  text:   '#d4a017',
  bold:   true,
};

export default function EventTag({ tag, index, featured = false }: EventTagProps) {
  const s = featured ? FEATURED_STYLE : index % 2 === 0 ? EVEN_STYLE : ODD_STYLE;
  return (
    <span
      className={`inline-flex items-center font-['Cinzel'] tracking-[0.3em] uppercase px-3 py-[5px] rounded-full border leading-none text-[11px]${s.bold ? ' font-bold' : ''}`}
      style={{ background: s.bg, borderColor: s.border, color: s.text }}
    >
      {tag}
    </span>
  );
}
