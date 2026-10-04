window.Hero = function Hero() {
  return (
    <Band style={{paddingTop:48}}>
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:24}}>
        <span style={{width:8, height:8, borderRadius:'var(--radius-full)', background:'var(--green-deep)', display:'inline-block'}}/>
        <span style={{fontFamily:'var(--font-body)', fontVariationSettings:"'wdth' var(--wdth-body)", fontVariantCaps:'var(--caps-variant)', fontFeatureSettings:'var(--caps-features)', letterSpacing:'var(--ls-caps)', textTransform:'none', fontSize:14, fontWeight:600, color:'var(--fg-2)'}}>I'm taking on new work for Q3, in San Francisco or remote.</span>
      </div>
      <h1 style={{
        margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
        fontWeight:700, fontSize:'clamp(32px, 7vw, var(--fs-3xl))', lineHeight:1.05, letterSpacing:'-0.025em', textWrap:'balance',
      }}>I design tools for complex work.</h1>
      <p style={{margin:'20px 0 0', fontSize:17, lineHeight:1.6, color:'var(--fg-2)', textWrap:'pretty'}}>
        I'm a UX designer for complex products: admin tools, design tooling, and anything with a real workflow behind it. I'd be glad to show you what I've been working on.
      </p>
      <div style={{display:'flex', gap:12, marginTop:28, flexWrap:'wrap'}}>
        <Button as="a" href="#work">See my work ▸</Button>
        <Button as="a" href="#contact" variant="ghost">Say hello ▸</Button>
      </div>
    </Band>
  );
};
