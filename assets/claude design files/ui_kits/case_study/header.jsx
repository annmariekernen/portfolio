const CS_CAPS = {fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none'};

/* Case study nav (name, prev/next, position) plus a section nav for this page.
   The active section follows scroll; clicking a section scrolls to it. */
window.CaseHeader = function CaseHeader({ sections, position='Case 03 / 04' }) {
  const [active, setActive] = React.useState(sections[0].id);
  React.useEffect(() => {
    const onScroll = () => {
      let cur = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior:'smooth' });
  };
  const link = { ...CS_CAPS, fontSize:14, fontWeight:600, textDecoration:'none', color:'var(--fg-2)', whiteSpace:'nowrap' };
  return (
    <header style={{position:'sticky', top:0, zIndex:10, background:'var(--paper)', padding:'0 24px'}}>
      <div style={{maxWidth:COL, margin:'0 auto'}}>
        <div style={{height:60, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
          <a href="../portfolio/index.html" style={{
            textDecoration:'none', color:'var(--fg-1)', whiteSpace:'nowrap',
            fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' 100",
            fontWeight:400, fontSize:12, letterSpacing:'0.28em', textTransform:'uppercase',
          }}>Ann Marie Kernen</a>
          <div style={{display:'flex', alignItems:'center', gap:18}}>
            <a href="#prev" onClick={(e)=>e.preventDefault()} style={link}>◂ Prev</a>
            <span style={{...link, color:'var(--fg-3)', fontWeight:500, display:'flex', alignItems:'center', gap:8}}>
              <span style={{width:7, height:7, borderRadius:'var(--radius-full)', background:'var(--green-deep)', display:'inline-block'}}></span>{position}
            </span>
            <a href="#next" onClick={(e)=>e.preventDefault()} style={link}>Next ▸</a>
          </div>
        </div>
        <nav style={{display:'flex', gap:4, overflowX:'auto', padding:'6px 0 10px', borderBottom:'var(--border-default)'}}>
          {sections.map(s => (
            <a key={s.id} href={'#' + s.id} onClick={go(s.id)} style={{
              ...link, fontSize:13, padding:'5px 10px',
              background: active === s.id ? 'var(--blue-deep)' : 'transparent',
              color: active === s.id ? 'var(--bone)' : 'var(--fg-2)',
            }}>{s.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};

window.CaseHero = function CaseHero({ id, tag, title, sub, year, role, team, duration }) {
  return (
    <Band id={id} style={{paddingTop:16}}>
      <div style={{display:'flex', gap:8, marginBottom:20, flexWrap:'wrap'}}>
        <Tag variant="blue">{tag}</Tag>
        <Tag>{year}</Tag>
      </div>
      <h1 style={{
        margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
        fontWeight:700, fontSize:'clamp(32px, 7vw, var(--fs-3xl))', lineHeight:1.05, letterSpacing:'-0.025em', textWrap:'balance',
      }}>{title}</h1>
      <p style={{margin:'18px 0 0', fontSize:17, lineHeight:1.6, color:'var(--fg-2)', textWrap:'pretty'}}>{sub}</p>
      <div style={{
        marginTop:32, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))', gap:16,
        borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', padding:'16px 0',
      }}>
        <CaseFact label="Role" value={role}/>
        <CaseFact label="Team" value={team}/>
        <CaseFact label="Duration" value={duration}/>
      </div>
    </Band>
  );
};

function CaseFact({ label, value }) {
  return (
    <div>
      <div style={{...CS_CAPS, fontSize:13, fontWeight:600, color:'var(--fg-3)'}}>{label}</div>
      <div style={{fontSize:15, fontWeight:600, marginTop:4, lineHeight:1.35}}>{value}</div>
    </div>
  );
}

window.MetricRow = function MetricRow({ items }) {
  return (
    <Band style={{paddingTop:0}}>
      <div style={{marginTop:-24, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'24px 32px'}}>
        {items.map((m, i) => (
          <div key={i}>
            <div style={{...CS_CAPS, fontSize:13, fontWeight:600, color:'var(--fg-3)'}}>{m.label}</div>
            <div style={{
              marginTop:6, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
              fontWeight:700, fontSize:36, lineHeight:1, letterSpacing:'-0.03em', color: m.color || 'var(--fg-1)',
            }}>{m.value}</div>
            <div style={{marginTop:6, fontSize:14, lineHeight:1.45, color:'var(--fg-2)'}}>{m.note}</div>
          </div>
        ))}
      </div>
    </Band>
  );
};
