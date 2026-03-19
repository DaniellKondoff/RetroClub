import type { Event } from '../data/events';
import EventTag from './EventTag';

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const delay = `${0.75 + index * 0.1}s`;

  /* ── Featured event ── */
  if (event.featured) {
    return (
      <div
        className="event-row event-row--featured relative overflow-hidden rounded-xl"
        style={{
          '--delay': delay,
          background: 'radial-gradient(ellipse 120% 160% at 50% -10%, #2a1f08 0%, #1a1408 55%, #0f0c06 100%)',
          border: '1px solid rgba(212,160,23,0.45)',
          boxShadow: '0 8px 56px rgba(180,134,11,0.22), 0 2px 0 rgba(212,160,23,0.25)',
        } as React.CSSProperties}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{ height: '3px', background: 'linear-gradient(90deg, #6b0f0f, #b8860b, #e8c84a, #b8860b, #6b0f0f)' }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(180,134,11,0.14) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 flex items-start gap-6 px-8 pt-8 pb-7 sm:px-10 sm:pt-9 sm:pb-8">
          {/* Date block */}
          <div
            className="date-medallion flex-shrink-0 flex flex-col items-center justify-center rounded-lg w-16 h-20 sm:w-18 sm:h-22"
            style={{
              background: 'rgba(212,160,23,0.11)',
              border: '1px solid rgba(212,160,23,0.32)',
            }}
          >
            <span className="font-['Cinzel'] font-bold leading-none" style={{ fontSize: '28px', color: 'white' }}>
              {event.day}
            </span>
            <span className="font-['EB_Garamond'] italic tracking-widest uppercase mt-1" style={{ fontSize: '11px', color: '#b8860b' }}>
              {event.month}
            </span>
          </div>

          {/* Vertical divider */}
          <div
            className="self-stretch w-px flex-shrink-0"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.3) 20%, rgba(212,160,23,0.3) 80%, transparent)' }}
          />

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <h3
                className="gradient-text-gold font-['Cinzel'] font-bold leading-tight"
                style={{ fontSize: 'clamp(18px, 2.4vw, 26px)', letterSpacing: '0.03em' }}
              >
                {event.title}
              </h3>
              <div className="flex-shrink-0">
                <EventTag tag={event.tag} tagType={event.tagType} />
              </div>
            </div>
            <p className="font-['EB_Garamond'] italic" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>
              {event.meta}
            </p>
            <p className="font-['EB_Garamond'] leading-relaxed" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.60)' }}>
              {event.description}
            </p>
            <p className="font-['Cinzel'] uppercase tracking-[0.35em] mt-5" style={{ fontSize: '8px', color: '#b8860b', opacity: 0.75 }}>
              Главното събитие за 2026 г.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── Regular event row ── */
  return (
    <div
      className="event-row w-full flex items-stretch cursor-pointer rounded-xl overflow-hidden"
      style={{
        '--delay': delay,
        border: '1px solid rgba(180,134,11,0.28)',
        boxShadow: '0 2px 12px rgba(42,32,16,0.07), inset 0 1px 0 rgba(255,255,255,0.85)',
      } as React.CSSProperties}
    >
      {/* Date */}
      <div
        className="date-medallion flex-shrink-0 flex flex-col items-center justify-center w-20 sm:w-24 py-5"
        style={{ background: 'rgba(180,134,11,0.08)' }}
      >
        <span className="font-['Cinzel'] font-bold leading-none" style={{ fontSize: '32px', color: '#2a2010' }}>
          {event.day}
        </span>
        <span className="font-['Cinzel'] tracking-[0.25em] uppercase mt-1" style={{ fontSize: '11px', color: '#b8860b' }}>
          {event.month}
        </span>
        <span className="font-['Cinzel'] tracking-[0.2em] uppercase mt-0.5" style={{ fontSize: '9px', color: 'rgba(122,106,64,0.65)' }}>
          {event.year}
        </span>
      </div>

      {/* Gold accent line */}
      <div
        className="w-[2px] flex-shrink-0 self-stretch"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.45) 20%, rgba(212,160,23,0.45) 80%, transparent)' }}
      />

      {/* Main content */}
      <div
        className="event-content flex-1 min-w-0 flex flex-col justify-center gap-1.5 px-5 sm:px-6 py-4 sm:py-5"
        style={{ background: 'rgba(255,255,255,0.28)' }}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className="font-['Cinzel'] font-semibold leading-snug"
            style={{ fontSize: '15px', color: '#2a2010', letterSpacing: '0.025em' }}
          >
            {event.title}
          </span>
          <div className="flex-shrink-0 mt-0.5">
            <EventTag tag={event.tag} tagType={event.tagType} />
          </div>
        </div>
        <p
          className="font-['EB_Garamond'] italic"
          style={{ fontSize: '14px', color: '#7a6a40' }}
        >
          {event.meta}
        </p>
        <p
          className="font-['EB_Garamond'] leading-relaxed line-clamp-2"
          style={{ fontSize: '14px', color: '#5a4e2c', opacity: 0.82 }}
        >
          {event.description}
        </p>
      </div>
    </div>
  );
}
