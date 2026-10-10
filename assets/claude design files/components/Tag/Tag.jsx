const FILLS = {
  default:    { background: 'var(--paper-2)', color: 'var(--fg-1)' },
  blue:       { background: 'var(--blue-deep)',  color: 'var(--bone)' },
  green:      { background: 'var(--green-deep)', color: 'var(--bone)' },
  bluePale:   { background: 'var(--blue-pale)',  color: 'var(--fg-1)' },
  greenPale:  { background: 'var(--green-pale)', color: 'var(--fg-1)' },
  mist:       { background: 'var(--mist-pale)',  color: 'var(--fg-1)' },
  rust:       { background: 'var(--rust)',       color: 'var(--bone)' },
  ink:        { background: 'var(--ink)',        color: 'var(--paper)' },
};

export function Tag({ children, variant = 'default', dot = false }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)', fontVariationSettings: "'wdth' var(--wdth-body)",
      fontSize: 'var(--fs-xs)', fontWeight: 600,
      fontVariantCaps: 'var(--caps-variant)', fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)', textTransform: 'none',
      padding: '3px 10px', borderRadius: 'var(--radius-full)',
      ...(FILLS[variant] || FILLS.default),
    }}>
      {dot && <span style={{ width: 6, height: 6, background: 'currentColor', borderRadius: 'var(--radius-full)', display: 'inline-block' }}/>}
      {children}
    </span>
  );
}
