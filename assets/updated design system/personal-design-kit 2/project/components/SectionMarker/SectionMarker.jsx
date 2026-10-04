export function SectionMarker({ num, children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 'var(--space-5)',
      padding: '0 0 14px 0',
      borderBottom: 'var(--border-default)',
      marginBottom: 'var(--space-7)', flexWrap: 'wrap',
    }}>
      {num && <span style={{
        fontFamily: 'var(--font-body)', fontVariationSettings: "'wdth' var(--wdth-body)",
        fontWeight: 600, fontSize: 'var(--fs-sm)',
        fontVariantCaps: 'var(--caps-variant)', fontFeatureSettings: 'var(--caps-features)',
        letterSpacing: 'var(--ls-caps)', color: 'var(--fg-3)', flexShrink: 0,
      }}>{num}</span>}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)',
        fontVariationSettings: "'wdth' var(--wdth-display)", fontWeight: 600,
        fontSize: 'var(--fs-lg)', lineHeight: 'var(--lh-snug)', letterSpacing: 'var(--ls-tight)',
      }}>{children}</h2>
    </div>
  );
}
