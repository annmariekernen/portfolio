const SURFACES = {
  bone:      'var(--bone)',
  paper:     'var(--paper)',
  quiet:     'var(--paper-2)',
  bluePale:  'var(--blue-pale)',
  greenPale: 'var(--green-pale)',
  ink:       'var(--ink)',
};

/** Ghost outline variants must match the surface BEHIND the card. */
const GHOSTS = { paper: 'var(--ghost)', alt: 'var(--ghost-alt)', bright: 'var(--ghost-bright)', none: 'none' };

export function Card({ children, fill = 'bone', ghost = 'paper', hero = false, style = {} }) {
  return (
    <div style={{
      background: SURFACES[fill] || SURFACES.bone,
      border: 'var(--border-default)',
      boxShadow: GHOSTS[ghost] || GHOSTS.paper,
      padding: hero ? 'var(--space-7)' : 'var(--space-6)',
      color: fill === 'ink' ? 'var(--fg-inverse)' : 'var(--fg-1)',
      ...style,
    }}>{children}</div>
  );
}
