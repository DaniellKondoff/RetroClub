import { useState, useEffect } from 'react';
import { fetchEvents } from '../lib/contentful';
import type { Event } from '../data/events';
import EventCard from './EventCard';

export default function Events() {
  const [events, setEvents]   = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() => setError('Неуспешно зареждане на събитията.'))
      .finally(() => setLoading(false));
  }, []);

  const globalIndexMap = new Map(events.map((ev, i) => [ev, i]));

  const grouped = events.reduce<{ month: string; items: Event[] }[]>((acc, ev) => {
    const last = acc[acc.length - 1];
    if (last && last.month === ev.month) last.items.push(ev);
    else acc.push({ month: ev.month, items: [ev] });
    return acc;
  }, []);

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

      <div
        className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
        style={{ paddingTop: '96px', paddingBottom: '80px' }}
      >

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Provenance pill */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(180,134,11,0.14)', border: '1px solid rgba(180,134,11,0.45)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4a017', boxShadow: '0 0 5px rgba(212,160,23,0.7)' }} />
            <span className="font-['Cinzel'] uppercase tracking-[0.44em]" style={{ fontSize: '11px', color: '#7a5c10' }}>
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

        {/* ── Loading state ── */}
        {loading && (
          <p
            className="text-center font-['Cinzel'] uppercase tracking-[0.3em]"
            style={{ fontSize: '13px', color: '#b8860b', opacity: 0.7 }}
          >
            Зареждане…
          </p>
        )}

        {/* ── Error state ── */}
        {error && (
          <p
            className="text-center font-['EB_Garamond'] italic"
            style={{ fontSize: '16px', color: '#9b1c1c' }}
          >
            {error}
          </p>
        )}

        {/* ── Month groups ── */}
        {!loading && !error && grouped.map(({ month, items }) => (
          <div key={month} className="mb-12 last:mb-0">

            {/* Month label */}
            <div className="flex items-center gap-3 mb-5 pt-2">
              {/* Ornament bars */}
              <div className="flex items-end gap-0.5 flex-shrink-0">
                <div className="w-[3px] h-4 rounded-full" style={{ background: 'rgba(180,134,11,0.6)' }} />
                <div className="w-[1.5px] h-3 rounded-full" style={{ background: 'rgba(180,134,11,0.4)' }} />
              </div>
              <span
                className="font-['Cinzel'] font-bold uppercase tracking-[0.40em] flex-shrink-0"
                style={{ fontSize: '13px', color: '#7a5c10' }}
              >
                {month}
              </span>
              <div
                className="flex-1 h-[1.5px]"
                style={{ background: 'linear-gradient(to right, rgba(180,134,11,0.45), transparent)' }}
              />
              <div className="w-1.5 h-1.5 flex-shrink-0 rotate-45" style={{ background: 'rgba(180,134,11,0.5)' }} />
            </div>

            {/* Event cards */}
            <div className="w-full flex flex-col gap-3">
              {items.map((event) => (
                <EventCard key={`${event.day}-${event.month}`} event={event} index={globalIndexMap.get(event)!} />
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
