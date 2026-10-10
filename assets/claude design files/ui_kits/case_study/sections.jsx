const CSS_CAPS = {fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none'};

window.Prose = function Prose({ id, children, kicker, heading }) {
  return (
    <Band id={id}>
      {kicker && <SectionMarker num={kicker}>{heading}</SectionMarker>}
      <div style={{fontSize:17, lineHeight:1.65, color:'var(--fg-1)', textWrap:'pretty', display:'flex', flexDirection:'column', gap:16}}>{children}</div>
    </Band>
  );
};

window.QuoteBlock = function QuoteBlock({ children, attrib }) {
  return (
    <Band style={{paddingTop:8}}>
      <div style={{
        fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
        fontWeight:600, fontSize:24, lineHeight:1.3, letterSpacing:'var(--ls-tight)', textWrap:'pretty',
      }}><span style={{color:'var(--blue-deep)'}}>“</span>{children}<span style={{color:'var(--blue-deep)'}}>”</span></div>
      <div style={{...CSS_CAPS, marginTop:14, fontSize:13, fontWeight:600, color:'var(--fg-3)'}}>{attrib}</div>
    </Band>
  );
};

window.BeforeAfter = function BeforeAfter({ id }) {
  return (
    <Band id={id}>
      <SectionMarker num="[03]">Before and after</SectionMarker>
      <div style={{display:'flex', flexDirection:'column', gap:28}}>
        <Frame label="Before, Q1 2024" color="var(--rust)"><FakeUI variant="before"/></Frame>
        <Frame label="After, Q2 2025" color="var(--green-deep)"><FakeUI variant="after"/></Frame>
      </div>
    </Band>
  );
};

function Frame({ children, label, color }) {
  return (
    <div>
      <div style={{...CSS_CAPS, fontSize:13, fontWeight:600, color, marginBottom:8}}>{label}</div>
      <div style={{border:'var(--border-default)', padding:16}}>{children}</div>
    </div>
  );
}

function FakeUI({ variant }) {
  if (variant === 'before') {
    return (
      <div style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--fg-2)'}}>
        <div style={{borderBottom:'1px solid var(--rule)', paddingBottom:8, marginBottom:8, overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>file · edit · view · admin · system · billing · users · reports · settings · help</div>
        {Array.from({length:6}).map((_, i) => (
          <div key={i} style={{display:'flex', justifyContent:'space-between', gap:12, padding:'6px 0', borderBottom: i < 5 ? '1px solid var(--rule)' : 'none'}}>
            <span>row_{String(i+1).padStart(3,'0')} · long.descriptive.name</span>
            <span style={{color:'var(--rust)'}}>3 dropdowns ▾</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <div style={{background:'var(--ink)', color:'var(--paper)', fontFamily:'var(--font-mono)', fontSize:13, padding:'10px 12px', marginBottom:10}}>⌘K &nbsp;&gt; find anything_</div>
      <div style={{display:'flex', flexDirection:'column', gap:6}}>
        {['create user','export billing.csv','view incident #4823','open dashboard ▸ throughput'].map((cmd, i) => (
          <div key={i} style={{
            padding:'8px 12px', border:'1px solid var(--rule)',
            background: i === 0 ? 'var(--blue-pale)' : 'transparent',
            fontFamily:'var(--font-mono)', fontSize:12, display:'flex', justifyContent:'space-between',
          }}>
            <span>{cmd}</span><span style={{color:'var(--fg-3)'}}>↵</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ProcessTimeline = function ProcessTimeline({ id }) {
  const steps = [
    { n:'01', label:'Audit', body:'I shadowed six ops people for a week and counted every click.' },
    { n:'02', label:'Map', body:'We put every screen and state on one wall so the whole team could see the overlap.' },
    { n:'03', label:'Prototype', body:'We tried three directions. The fastest one worked like a simple terminal.' },
    { n:'04', label:'Test', body:'We tested with experienced ops staff and new hires, and measured time to task before and after.' },
    { n:'05', label:'Ship', body:'We released it behind a flag. Within 11 days we switched it from opt-in to opt-out.' },
  ];
  return (
    <Band id={id}>
      <SectionMarker num="[04]">Process</SectionMarker>
      <div style={{display:'flex', flexDirection:'column'}}>
        {steps.map((s, i) => (
          <div key={s.n} style={{
            display:'grid', gridTemplateColumns:'40px minmax(0,1fr)', gap:12, padding:'14px 0',
            borderBottom: i < steps.length - 1 ? '1px solid var(--rule)' : 'none',
          }}>
            <span style={{...CSS_CAPS, fontSize:13, fontWeight:600, color:'var(--fg-3)', paddingTop:2}}>{s.n}</span>
            <div>
              <div style={{fontSize:16, fontWeight:600, lineHeight:1.3}}>{s.label}</div>
              <p style={{margin:'4px 0 0', fontSize:15, lineHeight:1.55, color:'var(--fg-2)', textWrap:'pretty'}}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Band>
  );
};

window.NextCase = function NextCase() {
  return (
    <Band>
      <div style={{borderTop:'var(--border-default)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', gap:20, flexWrap:'wrap'}}>
        <div>
          <div style={{...CSS_CAPS, fontSize:13, fontWeight:600, color:'var(--fg-3)'}}>Next case study</div>
          <h3 style={{
            margin:'6px 0 0', fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
            fontWeight:600, fontSize:'var(--fs-h3)', lineHeight:1.2, letterSpacing:'var(--ls-tight)',
          }}>Notes app, again</h3>
        </div>
        <Button as="a" href="#next">Read next ▸</Button>
      </div>
    </Band>
  );
};
