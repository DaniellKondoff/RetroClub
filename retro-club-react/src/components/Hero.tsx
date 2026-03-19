import badgeImg from '../assets/badge.webp';

export default function Hero() {
  const spokes = Array.from({ length: 16 }, (_, i) => i);

  return (
    <header
      className="relative overflow-hidden flex flex-col"
      style={{
        background: 'radial-gradient(ellipse 130% 110% at 50% -10%, #2a1f08 0%, #1a1408 40%, #0f0c06 100%)',
        minHeight: 'min(92vh, 860px)',
      }}
    >
      {/* ── Spoke background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {spokes.map((i) => (
          <div key={i} className="spoke" style={{ transform: `rotate(${i * 22.5}deg)` }} />
        ))}
      </div>

      {/* ── Radial gold glow behind badge ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 50% at 50% 42%, rgba(180,134,11,0.22) 0%, rgba(180,134,11,0.07) 45%, transparent 70%)',
        }}
      />

      {/* ── Corner ornaments (md+) ── */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          inset: '22px',
          background: [
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) top    left /64px 1px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) top    left /1px 64px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) top    right/64px 1px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) top    right/1px 64px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) bottom left /64px 1px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) bottom left /1px 64px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) bottom right/64px 1px no-repeat',
            'linear-gradient(rgba(180,134,11,0.5),rgba(180,134,11,0.5)) bottom right/1px 64px no-repeat',
          ].join(','),
        }}
      />

      {/* ── Side vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(15,12,6,0.7) 0%, transparent 18%, transparent 82%, rgba(15,12,6,0.7) 100%)',
        }}
      />

      {/* ── Top accent ── */}
      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #6b0f0f 0%, #b8860b 20%, #e8c84a 50%, #b8860b 80%, #6b0f0f 100%)',
        }}
      />

      {/* ── Main centered content ── */}
      <div className="relative z-[5] flex-1 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">

        {/* Provenance pill */}
        <div
          className="animate-rise-1 inline-flex items-center gap-[10px] border border-[rgba(180,134,11,0.38)]
            px-4 py-[6px] rounded-full mb-8 md:mb-10"
          style={{ background: 'rgba(26,20,8,0.55)', backdropFilter: 'blur(6px)' }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full flex-shrink-0"
            style={{ background: '#d4a017', boxShadow: '0 0 8px rgba(212,160,23,0.8)' }}
          />
          <span className="font-['Cinzel'] text-[9px] tracking-[0.44em] uppercase text-gold-light sm:text-[10px]">
            Старозагорски · Основан 1990
          </span>
        </div>

        {/* Badge image */}
        <div
          className="hero-badge animate-fade-6 rounded-full overflow-hidden flex-shrink-0 mb-8 md:mb-10
            w-[180px] h-[180px] border-[3px] border-gold-mid
            sm:w-[230px] sm:h-[230px]
            md:w-[290px] md:h-[290px] md:border-4
            lg:w-[320px] lg:h-[320px]"
          style={{ background: '#fff', opacity: 0 }}
        >
          <img
            src={badgeImg}
            alt="Старозагорски Автомобилен Клуб Ретро"
            className="w-full h-full object-contain block"
            style={{ clipPath: 'circle(50% at 50% 50%)', WebkitClipPath: 'circle(50% at 50% 50%)' }}
          />
        </div>

        {/* РЕТРО */}
        <h1
          className="animate-rise-2 gradient-text-silver font-['Cinzel'] font-bold leading-[0.88]"
          style={{ fontSize: 'clamp(68px, 13vw, 148px)', letterSpacing: '0.14em' }}
        >
          РЕТРО
        </h1>

        {/* Subtitle */}
        <div
          className="animate-rise-3 gradient-text-gold font-['Cinzel'] font-normal uppercase mt-3"
          style={{ fontSize: 'clamp(12px, 1.8vw, 18px)', letterSpacing: '0.36em' }}
        >
          Автомобилен Клуб
        </div>

        {/* Ornament */}
        <div className="animate-rise-4 flex items-center gap-3 mt-6 mb-5">
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to right, transparent, rgba(180,134,11,0.6))' }} />
          <div className="flex gap-[5px] items-center">
            <div className="w-[7px] h-[3px] rounded-[50%_0] bg-gold-bright opacity-65" />
            <div className="w-[5px] h-[5px] rotate-45 bg-gold-light" style={{ margin: '0 1px' }} />
            <div className="w-[7px] h-[3px] rounded-[0_50%] bg-gold-bright opacity-65" />
          </div>
          <div className="h-px w-16 md:w-24" style={{ background: 'linear-gradient(to left, transparent, rgba(180,134,11,0.6))' }} />
        </div>

        {/* Tagline */}
        <p
          className="animate-rise-5 font-['EB_Garamond'] italic text-white/40 tracking-[0.04em]"
          style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}
        >

        </p>
      </div>

      {/* ── Bottom accent ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          height: '5px',
          background: 'linear-gradient(90deg, #3a0808 0%, #9b1c1c 30%, #c0282a 50%, #9b1c1c 70%, #3a0808 100%)',
        }}
      />
    </header>
  );
}
