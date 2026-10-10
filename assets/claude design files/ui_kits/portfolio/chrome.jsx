const CHROME_CAPS = {fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none'};

window.TopNav = function TopNav({ active='work', onNav }) {
  const items = [
    { id:'work',  label:'Work' },
    { id:'side',  label:'Side projects' },
    { id:'about', label:'About' },
    { id:'contact', label:'Contact' },
  ];
  return (
    <nav style={{position:'sticky', top:0, zIndex:10, background:'var(--paper)', padding:'0 24px'}}>
      <div style={{maxWidth:COL, margin:'0 auto', height:64, display:'flex', alignItems:'center', justifyContent:'space-between', gap:20}}>
        <a href="#home" onClick={(e)=>{e.preventDefault();onNav&&onNav('home')}} style={{
          textDecoration:'none', color:'var(--fg-1)', whiteSpace:'nowrap',
          fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' 100",
          fontWeight:400, fontSize:12, letterSpacing:'0.28em', textTransform:'uppercase',
        }}>Ann Marie Kernen</a>
        <div style={{display:'flex', alignItems:'center', gap:20}}>
          {items.map(it => (
            <a key={it.id} href={'#' + it.id} onClick={(e)=>{e.preventDefault();onNav&&onNav(it.id)}} style={{
              ...CHROME_CAPS, fontSize:14, fontWeight:600, textDecoration:'none',
              color: active === it.id ? 'var(--fg-1)' : 'var(--fg-3)',
            }}>{it.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

window.Footer = function Footer() {
  const links = ['Email ↗','LinkedIn ↗','read.cv ↗'];
  return (
    <footer style={{padding:'0 24px'}}>
      <div style={{
        maxWidth:COL, margin:'0 auto', borderTop:'var(--border-default)', padding:'24px 0 48px',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16,
        ...CHROME_CAPS, fontSize:13, fontWeight:500, color:'var(--fg-3)',
      }}>
        <span>© 2026 Ann Marie Kernen</span>
        <span style={{display:'flex', gap:18}}>
          {links.map(l => <a key={l} href="#link" onClick={(e)=>e.preventDefault()} style={{color:'var(--fg-2)', textDecoration:'none'}}>{l}</a>)}
        </span>
      </div>
    </footer>
  );
};
