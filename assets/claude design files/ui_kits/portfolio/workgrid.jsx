window.WorkGrid = function WorkGrid({ onOpen }) {
  const items = [
    { id:'personas',   year:'2025', client:'Freddie Mac', title:'The Personas Library', status:'Ongoing', accent:'var(--blue-deep)' },
    { id:'procedures', year:'2024', client:'Wells Fargo', title:'Procedures Updater', accent:'var(--blue-deep)' },
    { id:'planr',      year:'2023', client:'Springboard', title:'PLANR: Transit Planning App', accent:'var(--blue-deep)' },
  ];
  return (
    <Band id="work">
      <SectionMarker num="[01]">Selected work</SectionMarker>
      <div style={{display:'flex', flexDirection:'column'}}>
        {items.map((it, i) => (
          <WorkRow key={it.id} {...it} last={i === items.length - 1} onClick={()=>onOpen&&onOpen(it.id)}/>
        ))}
      </div>
    </Band>
  );
};

function WorkRow({ id, year, client, title, status, accent, last, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={'#' + id} onClick={(e)=>{e.preventDefault();onClick()}}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        textDecoration:'none', color:'inherit', display:'grid', gap:6,
        padding:'16px 0',
      }}>
      <MetaLine>{year} · {client}</MetaLine>
      <div style={{display:'flex', alignItems:'center', gap:12, flexWrap:'wrap'}}>
        <h3 style={{
          margin:0, fontFamily:'var(--font-display)', fontVariationSettings:"'wdth' var(--wdth-display)",
          fontWeight:600, fontSize:'var(--fs-h3)', lineHeight:1.2, letterSpacing:'var(--ls-tight)',
          color: hover ? accent : 'var(--fg-1)', transition:'color var(--dur-fast) var(--ease-snap)',
        }}>{title} {hover ? '▸▸' : '▸'}</h3>
        {status && <Tag variant="ink">{status}</Tag>}
      </div>
    </a>
  );
}
