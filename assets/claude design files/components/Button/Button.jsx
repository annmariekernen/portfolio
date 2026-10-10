export function Button({ children, variant = 'primary', onClick, as = 'button', href, disabled = false, onInk = false }) {
  const base = {
    fontFamily: 'var(--font-body)', fontVariationSettings: "'wdth' var(--wdth-body)",
    fontWeight: 600, fontSize: 'var(--fs-base)',
    fontVariantCaps: 'var(--caps-variant)', fontFeatureSettings: 'var(--caps-features)',
    letterSpacing: 'var(--ls-caps)', textTransform: 'none',
    padding: '5px 16px', border: 'var(--border-default)', borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-block', textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)',
  };
  const variants = {
    primary:   { background: 'var(--action)',     borderColor: 'var(--action)',     color: 'var(--action-fg)' },
    secondary: { background: 'var(--green-deep)', borderColor: 'var(--green-deep)', color: 'var(--bone)' },
    ghost:     { background: 'transparent',       borderColor: onInk ? 'var(--mist)' : 'var(--border-color)', color: onInk ? 'var(--paper)' : 'var(--fg-1)' },
    ink:       { background: 'var(--ink)',        borderColor: 'var(--border-color)',        color: 'var(--paper)' },
  };
  const hovers = {
    primary:   { background: 'var(--action-hover)', borderColor: 'var(--action-hover)' },
    secondary: { background: 'var(--green-deeper)', borderColor: 'var(--green-deeper)' },
    ghost:     onInk ? { background: 'var(--ink-soft)', borderColor: 'var(--paper)' } : { background: 'var(--mist-pale)' },
    ink:       { background: 'var(--ink-soft)', borderColor: 'var(--ink-soft)' },
  };
  const off = { background: 'var(--mist-pale)', borderColor: 'var(--mist)', color: 'var(--ink-faint)' };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const buttonStyle = { ...base, ...v, ...(hover && !disabled ? hovers[variant] : null), ...(disabled ? off : null) };
  const handlers = disabled ? {} : { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick };
  return as === 'a'
    ? <a href={href} style={buttonStyle} {...handlers}>{children}</a>
    : <button type="button" disabled={disabled} style={buttonStyle} {...handlers}>{children}</button>;
}
