/* Local mirrors of the library primitives, styled entirely from tokens.
   Cherry-pick these into prototypes, or import the compiled components. */

const BTN_BASE = {
  fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none', fontWeight:600, fontSize:'var(--fs-base)',
  padding:'5px 16px', border:'var(--border-default)', borderRadius:'var(--radius-sm)', cursor:'pointer',
  display:'inline-block', textDecoration:'none',
  transition:'background var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)',
};

window.Button = function Button({ children, variant='primary', onClick, as='button', href, disabled=false, onInk=false }) {
  const rest = {
    primary:   { background:'var(--action)', color:'var(--action-fg)' },
    secondary: { background:'var(--green-deep)', color:'var(--bone)' },
    ghost:     { background:'transparent', borderColor: onInk ? 'var(--mist)' : 'var(--border-color)', color: onInk ? 'var(--paper)' : 'var(--fg-1)' },
    ink:       { background:'var(--ink)', color:'var(--paper)' },
  };
  const over = {
    primary:   { background:'var(--action-hover)' },
    secondary: { background:'var(--green-deeper)' },
    ghost:     onInk ? { background:'var(--ink-soft)' } : { background:'var(--mist-pale)' },
    ink:       { background:'var(--ink-soft)' },
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...BTN_BASE, ...(rest[variant] || rest.primary),
    ...(hover && !disabled ? over[variant] : null),
    ...(disabled ? { background:'var(--mist-pale)', color:'var(--ink-faint)', cursor:'not-allowed' } : null),
  };
  const p = disabled ? { style } : { style, onMouseEnter:()=>setHover(true), onMouseLeave:()=>setHover(false), onClick };
  return as === 'a' ? <a href={href} {...p}>{children}</a> : <button type="button" disabled={disabled} {...p}>{children}</button>;
};

const TAG_FILLS = {
  default:   { background: 'var(--paper-2)', color: 'var(--fg-1)' },
  blue:      { background:'var(--blue-deep)', color:'var(--bone)' },
  green:     { background:'var(--green-deep)', color:'var(--bone)' },
  bluePale:  { background:'var(--blue-pale)', color:'var(--fg-1)' },
  greenPale: { background:'var(--green-pale)', color:'var(--fg-1)' },
  mist:      { background:'var(--mist-pale)', color:'var(--fg-1)' },
  rust:      { background:'var(--rust)', color:'var(--bone)' },
  ink:       { background:'var(--ink)', color:'var(--paper)' },
};

window.Tag = function Tag({ children, variant='default', dot=false }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:'var(--space-3)',
      fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none', fontSize:'var(--fs-xs)', fontWeight:600,
      padding:'3px 10px', borderRadius:'var(--radius-full)',
      ...(TAG_FILLS[variant] || TAG_FILLS.default),
    }}>
      {dot && <span style={{width:6, height:6, background:'currentColor', borderRadius:'var(--radius-full)', display:'inline-block'}}/>}
      {children}
    </span>
  );
};

const CARD_SURFACES = { bone:'var(--bone)', paper:'var(--paper)', quiet:'var(--paper-2)', bluePale:'var(--blue-pale)', greenPale:'var(--green-pale)', ink:'var(--ink)' };
const CARD_GHOSTS = { paper:'var(--ghost)', alt:'var(--ghost-alt)', bright:'var(--ghost-bright)', none:'none' };

window.Card = function Card({ children, fill='bone', ghost='paper', hero=false, style={} }) {
  return (
    <div style={{
      background: CARD_SURFACES[fill] || CARD_SURFACES.bone,
      border: 'var(--border-default)',
      boxShadow: CARD_GHOSTS[ghost] || CARD_GHOSTS.paper,
      padding: hero ? 'var(--space-7)' : 'var(--space-6)',
      color: fill === 'ink' ? 'var(--fg-inverse)' : 'var(--fg-1)',
      ...style,
    }}>{children}</div>
  );
};

window.MetaLine = function MetaLine({ children, tone='muted' }) {
  const tones = { muted:'var(--fg-3)', ink:'var(--fg-1)', inverse:'var(--mist)' };
  return <div style={{
    fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none', fontSize:'var(--fs-sm)', fontWeight:500, color: tones[tone] || tones.muted,
  }}>{children}</div>;
};

window.SectionMarker = function SectionMarker({ num, children }) {
  return (
    <div style={{
      display:'flex', alignItems:'baseline', gap:'var(--space-5)', padding:'0 0 12px 0',
      borderBottom: 'var(--border-default)',
      marginBottom:'var(--space-6)', flexWrap:'wrap',
    }}>
      {num && <span style={{
        fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none', fontWeight:600, fontSize:'var(--fs-sm)', color:'var(--fg-3)', flexShrink:0,
      }}>{num}</span>}
      <h2 style={{
        margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
        fontWeight:600, fontSize:'var(--fs-lg)', lineHeight:'var(--lh-snug)', letterSpacing:'var(--ls-tight)',
      }}>{children}</h2>
    </div>
  );
};

/* Shared section shell: one centered 608px column, no fill. Hairlines live inside the column. */
window.COL = 608;
window.Band = function Band({ children, id, rule=false, style={} }) {
  return (
    <section id={id} style={{padding:'0 24px', scrollMarginTop:112, ...style}}>
      <div style={{maxWidth:COL, margin:'0 auto', padding:'56px 0', borderTop: rule ? 'var(--border-default)' : 'none'}}>{children}</div>
    </section>
  );
};
