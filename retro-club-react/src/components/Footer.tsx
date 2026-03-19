export default function Footer() {
  return (
    <footer style={{ background: '#1a1408', textAlign: 'center', padding: '2rem 1rem' }}>
      {/* Ornamental divider */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <div style={{ width: '4rem', height: '1px', background: 'linear-gradient(to right, transparent, #b8860b)' }} />
        <span style={{ color: '#b8860b', fontSize: '0.6rem' }}>◆</span>
        <div style={{ width: '4rem', height: '1px', background: 'linear-gradient(to left, transparent, #b8860b)' }} />
      </div>

      {/* Info line */}
      <p style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        color: '#7a6a40',
        textTransform: 'uppercase',
        margin: 0,
      }}>
        Ретро Клуб &nbsp;·&nbsp; Стара Загора &nbsp;·&nbsp; © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
