import { events } from '../data/events';
import EventCard from './EventCard';

// Group events by month, preserving source order
const grouped = events.reduce<{ month: string; items: typeof events }[]>((acc, ev) => {
  const last = acc[acc.length - 1];
  if (last && last.month === ev.month) {
    last.items.push(ev);
  } else {
    acc.push({ month: ev.month, items: [ev] });
  }
  return acc;
}, []);

export default function Events() {
  return (
    <section
      className="w-full relative"
      style={{
        background: 'linear-gradient(180deg, #ede9dc 0%, #f4f0e6 8%, #f4f0e6 100%)',
        borderTop: '1px solid rgba(180,134,11,0.18)',
      }}
    >
      {/* Top gold accent bar */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: '4px', background: 'linear-gradient(90deg, transparent 0%, #9b1c1c 15%, #b8860b 35%, #e8c84a 50%, #b8860b 65%, #9b1c1c 85%, transparent 100%)' }}
      />

      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 md:py-24">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Provenance pill */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
            style={{ background: 'rgba(180,134,11,0.09)', border: '1px solid rgba(180,134,11,0.28)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4a017' }} />
            <span className="font-['Cinzel'] uppercase tracking-[0.44em]" style={{ fontSize: '9px', color: '#b8860b' }}>
              Сезон · 2026
            </span>
          </div>

          {/* Heading */}
          <h2
            className="gradient-text-gold font-['Cinzel'] font-bold uppercase tracking-[0.18em]"
            style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}
          >
            Програма
          </h2>

          {/* Ornament */}
          <div className="flex items-center gap-4 mt-6 mb-5 w-48">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(180,134,11,0.5))' }} />
            <div className="w-2 h-2 flex-shrink-0 rotate-45" style={{ background: '#d4a017', opacity: 0.75 }} />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(180,134,11,0.5))' }} />
          </div>

          {/* Subtitle */}
          <p className="font-['EB_Garamond'] italic" style={{ fontSize: '17px', color: '#7a6a40' }}>
            Предстоящи събития и изяви
          </p>
        </div>

        {/* ── Month groups ── */}
        {grouped.map(({ month, items }) => (
          <div key={month} className="mb-10 last:mb-0">

            {/* Month label */}
            <div className="flex items-center gap-5 mb-4">
              <span
                className="font-['Cinzel'] uppercase tracking-[0.45em] flex-shrink-0"
                style={{ fontSize: '10px', color: '#b8860b' }}
              >
                {month}
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: 'linear-gradient(to right, rgba(180,134,11,0.35), transparent)' }}
              />
            </div>

            {/* Event rows */}
            <div
              className="w-full overflow-hidden rounded-xl"
              style={{
                border: '1px solid rgba(180,134,11,0.14)',
                boxShadow: '0 2px 20px rgba(42,32,16,0.06)',
              }}
            >
              {items.map((event, i) => (
                <div key={`${event.day}-${event.month}`} className="w-full">
                  <EventCard event={event} index={i} />
                  {/* Separator between regular rows (not after last, not between featured) */}
                  {!event.featured && i < items.length - 1 && !items[i + 1]?.featured && (
                    <div
                      className="ml-16 sm:ml-20"
                      style={{ height: '1px', background: 'rgba(180,134,11,0.10)' }}
                    />
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
