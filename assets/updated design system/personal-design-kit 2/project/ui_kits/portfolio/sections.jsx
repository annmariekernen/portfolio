const SEC_CAPS = {fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none'};

window.NowPlaying = function NowPlaying() {
  return (
    <Band id="side">
      <SectionMarker num="[03]">Side projects</SectionMarker>
      <div style={{display:'flex', flexDirection:'column', gap:14}}>
        <NowRow status="Exploring" color="var(--blue-deep)" label="Midjourney"/>
        <NowRow status="Designing" color="var(--green-deep)" label="Physical product design"/>
        <NowRow status="Learning" color="var(--fg-3)" label="3D explorations"/>
        <NowRow status="Learning" color="var(--fg-3)" label="Vibe coding"/>
      </div>
    </Band>
  );
};

function NowRow({ status, color, label, desc }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'110px minmax(0,1fr)', gap:16, alignItems:'baseline'}}>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span style={{width:7, height:7, borderRadius:'var(--radius-full)', background:color, display:'inline-block'}}/>
        <span style={{...SEC_CAPS, fontSize:13, fontWeight:600, color}}>{status}</span>
      </div>
      <div>
        <div style={{fontSize:16, fontWeight:600, lineHeight:1.3}}>{label}</div>
        {desc && <div style={{fontSize:15, lineHeight:1.5, color:'var(--fg-2)', marginTop:3}}>{desc}</div>}
      </div>
    </div>
  );
}

window.PrincipleStrip = function PrincipleStrip() {
  const principles = [
    { n:'01', title:'Specifics over vibes', body:'I show the numbers, screenshots, and exact wording behind each decision.' },
    { n:'02', title:'Constraint as gift', body:'Limits on time, budget, or tech tell me where the real design problem is.' },
    { n:'03', title:'Boring on purpose', body:"Familiar patterns are easier to use. I save new ideas for the places that need them." },
    { n:'04', title:'Ship to learn', body:'A small version in front of real users teaches more than a polished mockup.' },
  ];
  return (
    <Band>
      <SectionMarker num="[02]">How I work</SectionMarker>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'28px 32px'}}>
        {principles.map(p => (
          <div key={p.n}>
            <div style={{display:'flex', gap:10, alignItems:'baseline'}}>
              <span style={{...SEC_CAPS, fontSize:13, fontWeight:600, color:'var(--fg-3)'}}>{p.n}</span>
              <h4 style={{margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)", fontSize:'var(--fs-h4)', fontWeight:600, lineHeight:1.25, letterSpacing:'var(--ls-tight)'}}>{p.title}</h4>
            </div>
            <p style={{margin:'6px 0 0', fontSize:15, lineHeight:1.55, color:'var(--fg-2)', textWrap:'pretty'}}>{p.body}</p>
          </div>
        ))}
      </div>
    </Band>
  );
};

window.ContactCTA = function ContactCTA() {
  return (
    <Band>
      <SectionMarker num="[04]">Work with me</SectionMarker>
      <h2 style={{
        margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
        fontWeight:700, fontSize:'var(--fs-h2)', lineHeight:1.15, letterSpacing:'-0.02em', textWrap:'balance',
      }}>Have a complex problem? I'd like to hear about it.</h2>
      <p style={{margin:'14px 0 0', fontSize:17, lineHeight:1.6, color:'var(--fg-2)', textWrap:'pretty'}}>
        Send me the details, even if they're messy. I'll tell you honestly whether I'm the right person for it.
      </p>
      <div style={{marginTop:24, display:'flex', gap:12, flexWrap:'wrap'}}>
        <Button as="a" href="#hello">Say hello ▸</Button>
        <Button as="a" href="#chat" variant="ghost">Book a 15-min chat ▸</Button>
      </div>
    </Band>
  );
};
