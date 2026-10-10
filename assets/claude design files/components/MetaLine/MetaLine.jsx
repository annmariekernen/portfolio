export function MetaLine({ children, tone = 'muted' }) {
  const tones = { muted: 'var(--fg-3)', ink: 'var(--fg-1)', inverse: 'var(--mist)' };
  return (
    <div style={{
      fontFamily: 'var(--font-body)', fontVariationSettings: "'wdth' var(--wdth-body)",
      fontSize: 'var(--fs-sm)', fontWeight: 500,
      fontVariantCaps: 'var(--caps-variant)', fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)', textTransform: 'none',
      color: tones[tone] || tones.muted,
    }}>{children}</div>
  );
}
