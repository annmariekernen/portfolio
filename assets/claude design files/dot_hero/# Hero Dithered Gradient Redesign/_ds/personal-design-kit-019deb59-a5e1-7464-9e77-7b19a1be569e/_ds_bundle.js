/* @ds-bundle: {"format":4,"namespace":"PersonalDesignKit_019deb","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"MetaLine","sourcePath":"components/MetaLine/MetaLine.jsx"},{"name":"SectionMarker","sourcePath":"components/SectionMarker/SectionMarker.jsx"},{"name":"Tag","sourcePath":"components/Tag/Tag.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"c1246753ce4b","components/Card/Card.jsx":"d1e4a2d1c3f0","components/MetaLine/MetaLine.jsx":"03f2eb7b6b78","components/SectionMarker/SectionMarker.jsx":"7d0ae372a241","components/Tag/Tag.jsx":"dbea7526790b","ui_kits/case_study/header.jsx":"cc1a972de407","ui_kits/case_study/sections.jsx":"dd9c20a1f240","ui_kits/portfolio/chrome.jsx":"677af4dfb8e4","ui_kits/portfolio/hero.jsx":"834e7080516b","ui_kits/portfolio/primitives.jsx":"ad4dc3ae0127","ui_kits/portfolio/sections.jsx":"ec2dde900882","ui_kits/portfolio/workgrid.jsx":"4960a7661546"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PersonalDesignKit_019deb = window.PersonalDesignKit_019deb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  onClick,
  as = 'button',
  href,
  disabled = false,
  onInk = false
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontVariationSettings: "'wdth' var(--wdth-body)",
    fontWeight: 600,
    fontSize: 'var(--fs-base)',
    fontVariantCaps: 'var(--caps-variant)',
    fontFeatureSettings: 'var(--caps-features)',
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'none',
    padding: '5px 16px',
    border: 'var(--border-default)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)'
  };
  const variants = {
    primary: {
      background: 'var(--action)',
      borderColor: 'var(--action)',
      color: 'var(--action-fg)'
    },
    secondary: {
      background: 'var(--green-deep)',
      borderColor: 'var(--green-deep)',
      color: 'var(--bone)'
    },
    ghost: {
      background: 'transparent',
      borderColor: onInk ? 'var(--mist)' : 'var(--border-color)',
      color: onInk ? 'var(--paper)' : 'var(--fg-1)'
    },
    ink: {
      background: 'var(--ink)',
      borderColor: 'var(--border-color)',
      color: 'var(--paper)'
    }
  };
  const hovers = {
    primary: {
      background: 'var(--action-hover)',
      borderColor: 'var(--action-hover)'
    },
    secondary: {
      background: 'var(--green-deeper)',
      borderColor: 'var(--green-deeper)'
    },
    ghost: onInk ? {
      background: 'var(--ink-soft)',
      borderColor: 'var(--paper)'
    } : {
      background: 'var(--mist-pale)'
    },
    ink: {
      background: 'var(--ink-soft)',
      borderColor: 'var(--ink-soft)'
    }
  };
  const off = {
    background: 'var(--mist-pale)',
    borderColor: 'var(--mist)',
    color: 'var(--ink-faint)'
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const buttonStyle = {
    ...base,
    ...v,
    ...(hover && !disabled ? hovers[variant] : null),
    ...(disabled ? off : null)
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  return as === 'a' ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: buttonStyle
  }, handlers), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: buttonStyle
  }, handlers), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
const SURFACES = {
  bone: 'var(--bone)',
  paper: 'var(--paper)',
  quiet: 'var(--paper-2)',
  bluePale: 'var(--blue-pale)',
  greenPale: 'var(--green-pale)',
  ink: 'var(--ink)'
};

/** Ghost outline variants must match the surface BEHIND the card. */
const GHOSTS = {
  paper: 'var(--ghost)',
  alt: 'var(--ghost-alt)',
  bright: 'var(--ghost-bright)',
  none: 'none'
};
function Card({
  children,
  fill = 'bone',
  ghost = 'paper',
  hero = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: SURFACES[fill] || SURFACES.bone,
      border: 'var(--border-default)',
      boxShadow: GHOSTS[ghost] || GHOSTS.paper,
      padding: hero ? 'var(--space-7)' : 'var(--space-6)',
      color: fill === 'ink' ? 'var(--fg-inverse)' : 'var(--fg-1)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/MetaLine/MetaLine.jsx
try { (() => {
function MetaLine({
  children,
  tone = 'muted'
}) {
  const tones = {
    muted: 'var(--fg-3)',
    ink: 'var(--fg-1)',
    inverse: 'var(--mist)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      color: tones[tone] || tones.muted
    }
  }, children);
}
Object.assign(__ds_scope, { MetaLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/MetaLine/MetaLine.jsx", error: String((e && e.message) || e) }); }

// components/SectionMarker/SectionMarker.jsx
try { (() => {
function SectionMarker({
  num,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      padding: '0 0 14px 0',
      borderBottom: 'var(--border-default)',
      marginBottom: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, num && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      color: 'var(--fg-3)',
      flexShrink: 0
    }
  }, num), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 600,
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SectionMarker/SectionMarker.jsx", error: String((e && e.message) || e) }); }

// components/Tag/Tag.jsx
try { (() => {
const FILLS = {
  default: {
    background: 'var(--paper-2)',
    color: 'var(--fg-1)'
  },
  blue: {
    background: 'var(--blue-deep)',
    color: 'var(--bone)'
  },
  green: {
    background: 'var(--green-deep)',
    color: 'var(--bone)'
  },
  bluePale: {
    background: 'var(--blue-pale)',
    color: 'var(--fg-1)'
  },
  greenPale: {
    background: 'var(--green-pale)',
    color: 'var(--fg-1)'
  },
  mist: {
    background: 'var(--mist-pale)',
    color: 'var(--fg-1)'
  },
  rust: {
    background: 'var(--rust)',
    color: 'var(--bone)'
  },
  ink: {
    background: 'var(--ink)',
    color: 'var(--paper)'
  }
};
function Tag({
  children,
  variant = 'default',
  dot = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      ...(FILLS[variant] || FILLS.default)
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'currentColor',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/header.jsx
try { (() => {
const CS_CAPS = {
  fontFamily: 'var(--font-body)',
  fontVariationSettings: "'wdth' var(--wdth-body)",
  fontVariantCaps: 'var(--caps-variant)',
  fontFeatureSettings: 'var(--caps-features)',
  letterSpacing: 'var(--ls-caps)',
  textTransform: 'none'
};

/* Case study nav (name, prev/next, position) plus a section nav for this page.
   The active section follows scroll; clicking a section scrolls to it. */
window.CaseHeader = function CaseHeader({
  sections,
  position = 'Case 03 / 04'
}) {
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
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);
  const go = id => e => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 112,
      behavior: 'smooth'
    });
  };
  const link = {
    ...CS_CAPS,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    color: 'var(--fg-2)',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--paper)',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: COL,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../portfolio/index.html",
    style: {
      textDecoration: 'none',
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' 100",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '0.28em',
      textTransform: 'uppercase'
    }
  }, "Ann Marie Kernen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#prev",
    onClick: e => e.preventDefault(),
    style: link
  }, "\u25C2 Prev"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      color: 'var(--fg-3)',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-full)',
      background: 'var(--green-deep)',
      display: 'inline-block'
    }
  }), position), /*#__PURE__*/React.createElement("a", {
    href: "#next",
    onClick: e => e.preventDefault(),
    style: link
  }, "Next \u25B8"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      overflowX: 'auto',
      padding: '6px 0 10px',
      borderBottom: 'var(--border-default)'
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: '#' + s.id,
    onClick: go(s.id),
    style: {
      ...link,
      fontSize: 13,
      padding: '5px 10px',
      background: active === s.id ? 'var(--blue-deep)' : 'transparent',
      color: active === s.id ? 'var(--bone)' : 'var(--fg-2)'
    }
  }, s.label)))));
};
window.CaseHero = function CaseHero({
  id,
  tag,
  title,
  sub,
  year,
  role,
  team,
  duration
}) {
  return /*#__PURE__*/React.createElement(Band, {
    id: id,
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "blue"
  }, tag), /*#__PURE__*/React.createElement(Tag, null, year)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 700,
      fontSize: 'clamp(32px, 7vw, var(--fs-3xl))',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 16,
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(CaseFact, {
    label: "Role",
    value: role
  }), /*#__PURE__*/React.createElement(CaseFact, {
    label: "Team",
    value: team
  }), /*#__PURE__*/React.createElement(CaseFact, {
    label: "Duration",
    value: duration
  })));
};
function CaseFact({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CS_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginTop: 4,
      lineHeight: 1.35
    }
  }, value));
}
window.MetricRow = function MetricRow({
  items
}) {
  return /*#__PURE__*/React.createElement(Band, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -24,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '24px 32px'
    }
  }, items.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CS_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: m.color || 'var(--fg-1)'
    }
  }, m.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--fg-2)'
    }
  }, m.note)))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/sections.jsx
try { (() => {
const CSS_CAPS = {
  fontFamily: 'var(--font-body)',
  fontVariationSettings: "'wdth' var(--wdth-body)",
  fontVariantCaps: 'var(--caps-variant)',
  fontFeatureSettings: 'var(--caps-features)',
  letterSpacing: 'var(--ls-caps)',
  textTransform: 'none'
};
window.Prose = function Prose({
  id,
  children,
  kicker,
  heading
}) {
  return /*#__PURE__*/React.createElement(Band, {
    id: id
  }, kicker && /*#__PURE__*/React.createElement(SectionMarker, {
    num: kicker
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--fg-1)',
      textWrap: 'pretty',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, children));
};
window.QuoteBlock = function QuoteBlock({
  children,
  attrib
}) {
  return /*#__PURE__*/React.createElement(Band, {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.3,
      letterSpacing: 'var(--ls-tight)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-deep)'
    }
  }, "\u201C"), children, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-deep)'
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CSS_CAPS,
      marginTop: 14,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, attrib));
};
window.BeforeAfter = function BeforeAfter({
  id
}) {
  return /*#__PURE__*/React.createElement(Band, {
    id: id
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[03]"
  }, "Before and after"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    label: "Before, Q1 2024",
    color: "var(--rust)"
  }, /*#__PURE__*/React.createElement(FakeUI, {
    variant: "before"
  })), /*#__PURE__*/React.createElement(Frame, {
    label: "After, Q2 2025",
    color: "var(--green-deep)"
  }, /*#__PURE__*/React.createElement(FakeUI, {
    variant: "after"
  }))));
};
function Frame({
  children,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CSS_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color,
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-default)',
      padding: 16
    }
  }, children));
}
function FakeUI({
  variant
}) {
  if (variant === 'before') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '1px solid var(--rule)',
        paddingBottom: 8,
        marginBottom: 8,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    }, "file \xB7 edit \xB7 view \xB7 admin \xB7 system \xB7 billing \xB7 users \xB7 reports \xB7 settings \xB7 help"), Array.from({
      length: 6
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '6px 0',
        borderBottom: i < 5 ? '1px solid var(--rule)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", null, "row_", String(i + 1).padStart(3, '0'), " \xB7 long.descriptive.name"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--rust)'
      }
    }, "3 dropdowns \u25BE"))));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      padding: '10px 12px',
      marginBottom: 10
    }
  }, "\u2318K \xA0> find anything_"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, ['create user', 'export billing.csv', 'view incident #4823', 'open dashboard ▸ throughput'].map((cmd, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '8px 12px',
      border: '1px solid var(--rule)',
      background: i === 0 ? 'var(--blue-pale)' : 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, cmd), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-3)'
    }
  }, "\u21B5")))));
}
window.ProcessTimeline = function ProcessTimeline({
  id
}) {
  const steps = [{
    n: '01',
    label: 'Audit',
    body: 'I shadowed six ops people for a week and counted every click.'
  }, {
    n: '02',
    label: 'Map',
    body: 'We put every screen and state on one wall so the whole team could see the overlap.'
  }, {
    n: '03',
    label: 'Prototype',
    body: 'We tried three directions. The fastest one worked like a simple terminal.'
  }, {
    n: '04',
    label: 'Test',
    body: 'We tested with experienced ops staff and new hires, and measured time to task before and after.'
  }, {
    n: '05',
    label: 'Ship',
    body: 'We released it behind a flag. Within 11 days we switched it from opt-in to opt-out.'
  }];
  return /*#__PURE__*/React.createElement(Band, {
    id: id
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[04]"
  }, "Process"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: 'grid',
      gridTemplateColumns: '40px minmax(0,1fr)',
      gap: 12,
      padding: '14px 0',
      borderBottom: i < steps.length - 1 ? '1px solid var(--rule)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...CSS_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)',
      paddingTop: 2
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, s.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, s.body))))));
};
window.NextCase = function NextCase() {
  return /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-default)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CSS_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, "Next case study"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.2,
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Notes app, again")), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#next"
  }, "Read next \u25B8")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/chrome.jsx
try { (() => {
const CHROME_CAPS = {
  fontFamily: 'var(--font-body)',
  fontVariationSettings: "'wdth' var(--wdth-body)",
  fontVariantCaps: 'var(--caps-variant)',
  fontFeatureSettings: 'var(--caps-features)',
  letterSpacing: 'var(--ls-caps)',
  textTransform: 'none'
};
window.TopNav = function TopNav({
  active = 'work',
  onNav
}) {
  const items = [{
    id: 'work',
    label: 'Work'
  }, {
    id: 'side',
    label: 'Side projects'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--paper)',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: COL,
      margin: '0 auto',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      textDecoration: 'none',
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' 100",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '0.28em',
      textTransform: 'uppercase'
    }
  }, "Ann Marie Kernen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: '#' + it.id,
    onClick: e => {
      e.preventDefault();
      onNav && onNav(it.id);
    },
    style: {
      ...CHROME_CAPS,
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none',
      color: active === it.id ? 'var(--fg-1)' : 'var(--fg-3)'
    }
  }, it.label)))));
};
window.Footer = function Footer() {
  const links = ['Email ↗', 'LinkedIn ↗', 'read.cv ↗'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: COL,
      margin: '0 auto',
      borderTop: 'var(--border-default)',
      padding: '24px 0 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      ...CHROME_CAPS,
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Ann Marie Kernen"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#link",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--fg-2)',
      textDecoration: 'none'
    }
  }, l)))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/hero.jsx
try { (() => {
window.Hero = function Hero() {
  return /*#__PURE__*/React.createElement(Band, {
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-full)',
      background: 'var(--green-deep)',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--fg-2)'
    }
  }, "I'm taking on new work for Q3, in San Francisco or remote.")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 700,
      fontSize: 'clamp(32px, 7vw, var(--fs-3xl))',
      lineHeight: 1.05,
      letterSpacing: '-0.025em',
      textWrap: 'balance'
    }
  }, "I design tools for complex work."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, "I'm a UX designer for complex products: admin tools, design tooling, and anything with a real workflow behind it. I'd be glad to show you what I've been working on."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#work"
  }, "See my work \u25B8"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contact",
    variant: "ghost"
  }, "Say hello \u25B8")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Local mirrors of the library primitives, styled entirely from tokens.
   Cherry-pick these into prototypes, or import the compiled components. */

const BTN_BASE = {
  fontFamily: 'var(--font-body)',
  fontVariationSettings: "'wdth' var(--wdth-body)",
  fontVariantCaps: 'var(--caps-variant)',
  fontFeatureSettings: 'var(--caps-features)',
  letterSpacing: 'var(--ls-caps)',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 'var(--fs-base)',
  padding: '5px 16px',
  border: 'var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  display: 'inline-block',
  textDecoration: 'none',
  transition: 'background var(--dur-fast) var(--ease-snap), border-color var(--dur-fast) var(--ease-snap)'
};
window.Button = function Button({
  children,
  variant = 'primary',
  onClick,
  as = 'button',
  href,
  disabled = false,
  onInk = false
}) {
  const rest = {
    primary: {
      background: 'var(--action)',
      color: 'var(--action-fg)'
    },
    secondary: {
      background: 'var(--green-deep)',
      color: 'var(--bone)'
    },
    ghost: {
      background: 'transparent',
      borderColor: onInk ? 'var(--mist)' : 'var(--border-color)',
      color: onInk ? 'var(--paper)' : 'var(--fg-1)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--paper)'
    }
  };
  const over = {
    primary: {
      background: 'var(--action-hover)'
    },
    secondary: {
      background: 'var(--green-deeper)'
    },
    ghost: onInk ? {
      background: 'var(--ink-soft)'
    } : {
      background: 'var(--mist-pale)'
    },
    ink: {
      background: 'var(--ink-soft)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...BTN_BASE,
    ...(rest[variant] || rest.primary),
    ...(hover && !disabled ? over[variant] : null),
    ...(disabled ? {
      background: 'var(--mist-pale)',
      color: 'var(--ink-faint)',
      cursor: 'not-allowed'
    } : null)
  };
  const p = disabled ? {
    style
  } : {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  return as === 'a' ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, p), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, p), children);
};
const TAG_FILLS = {
  default: {
    background: 'var(--paper-2)',
    color: 'var(--fg-1)'
  },
  blue: {
    background: 'var(--blue-deep)',
    color: 'var(--bone)'
  },
  green: {
    background: 'var(--green-deep)',
    color: 'var(--bone)'
  },
  bluePale: {
    background: 'var(--blue-pale)',
    color: 'var(--fg-1)'
  },
  greenPale: {
    background: 'var(--green-pale)',
    color: 'var(--fg-1)'
  },
  mist: {
    background: 'var(--mist-pale)',
    color: 'var(--fg-1)'
  },
  rust: {
    background: 'var(--rust)',
    color: 'var(--bone)'
  },
  ink: {
    background: 'var(--ink)',
    color: 'var(--paper)'
  }
};
window.Tag = function Tag({
  children,
  variant = 'default',
  dot = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)',
      ...(TAG_FILLS[variant] || TAG_FILLS.default)
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'currentColor',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block'
    }
  }), children);
};
const CARD_SURFACES = {
  bone: 'var(--bone)',
  paper: 'var(--paper)',
  quiet: 'var(--paper-2)',
  bluePale: 'var(--blue-pale)',
  greenPale: 'var(--green-pale)',
  ink: 'var(--ink)'
};
const CARD_GHOSTS = {
  paper: 'var(--ghost)',
  alt: 'var(--ghost-alt)',
  bright: 'var(--ghost-bright)',
  none: 'none'
};
window.Card = function Card({
  children,
  fill = 'bone',
  ghost = 'paper',
  hero = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: CARD_SURFACES[fill] || CARD_SURFACES.bone,
      border: 'var(--border-default)',
      boxShadow: CARD_GHOSTS[ghost] || CARD_GHOSTS.paper,
      padding: hero ? 'var(--space-7)' : 'var(--space-6)',
      color: fill === 'ink' ? 'var(--fg-inverse)' : 'var(--fg-1)',
      ...style
    }
  }, children);
};
window.MetaLine = function MetaLine({
  children,
  tone = 'muted'
}) {
  const tones = {
    muted: 'var(--fg-3)',
    ink: 'var(--fg-1)',
    inverse: 'var(--mist)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      color: tones[tone] || tones.muted
    }
  }, children);
};
window.SectionMarker = function SectionMarker({
  num,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      padding: '0 0 12px 0',
      borderBottom: 'var(--border-default)',
      marginBottom: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, num && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontVariationSettings: "'wdth' var(--wdth-body)",
      fontVariantCaps: 'var(--caps-variant)',
      fontFeatureSettings: 'var(--caps-features)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'none',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      color: 'var(--fg-3)',
      flexShrink: 0
    }
  }, num), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 600,
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, children));
};

/* Shared section shell: one centered 608px column, no fill. Hairlines live inside the column. */
window.COL = 608;
window.Band = function Band({
  children,
  id,
  rule = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      padding: '0 24px',
      scrollMarginTop: 112,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: COL,
      margin: '0 auto',
      padding: '56px 0',
      borderTop: rule ? 'var(--border-default)' : 'none'
    }
  }, children));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections.jsx
try { (() => {
const SEC_CAPS = {
  fontFamily: 'var(--font-body)',
  fontVariationSettings: "'wdth' var(--wdth-body)",
  fontVariantCaps: 'var(--caps-variant)',
  fontFeatureSettings: 'var(--caps-features)',
  letterSpacing: 'var(--ls-caps)',
  textTransform: 'none'
};
window.NowPlaying = function NowPlaying() {
  return /*#__PURE__*/React.createElement(Band, {
    id: "side"
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[03]"
  }, "Side projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(NowRow, {
    status: "Exploring",
    color: "var(--blue-deep)",
    label: "Midjourney"
  }), /*#__PURE__*/React.createElement(NowRow, {
    status: "Designing",
    color: "var(--green-deep)",
    label: "Physical product design"
  }), /*#__PURE__*/React.createElement(NowRow, {
    status: "Learning",
    color: "var(--fg-3)",
    label: "3D explorations"
  }), /*#__PURE__*/React.createElement(NowRow, {
    status: "Learning",
    color: "var(--fg-3)",
    label: "Vibe coding"
  })));
};
function NowRow({
  status,
  color,
  label,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '110px minmax(0,1fr)',
      gap: 16,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-full)',
      background: color,
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...SEC_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color
    }
  }, status)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, label), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--fg-2)',
      marginTop: 3
    }
  }, desc)));
}
window.PrincipleStrip = function PrincipleStrip() {
  const principles = [{
    n: '01',
    title: 'Specifics over vibes',
    body: 'I show the numbers, screenshots, and exact wording behind each decision.'
  }, {
    n: '02',
    title: 'Constraint as gift',
    body: 'Limits on time, budget, or tech tell me where the real design problem is.'
  }, {
    n: '03',
    title: 'Boring on purpose',
    body: "Familiar patterns are easier to use. I save new ideas for the places that need them."
  }, {
    n: '04',
    title: 'Ship to learn',
    body: 'A small version in front of real users teaches more than a polished mockup.'
  }];
  return /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[02]"
  }, "How I work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '28px 32px'
    }
  }, principles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...SEC_CAPS,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--fg-3)'
    }
  }, p.n), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontSize: 'var(--fs-h4)',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: 'var(--ls-tight)'
    }
  }, p.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, p.body)))));
};
window.ContactCTA = function ContactCTA() {
  return /*#__PURE__*/React.createElement(Band, null, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[04]"
  }, "Work with me"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, "Have a complex problem? I'd like to hear about it."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, "Send me the details, even if they're messy. I'll tell you honestly whether I'm the right person for it."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#hello"
  }, "Say hello \u25B8"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#chat",
    variant: "ghost"
  }, "Book a 15-min chat \u25B8")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/workgrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
window.WorkGrid = function WorkGrid({
  onOpen
}) {
  const items = [{
    id: 'personas',
    year: '2025',
    client: 'Freddie Mac',
    title: 'The Personas Library',
    status: 'Ongoing',
    accent: 'var(--blue-deep)'
  }, {
    id: 'procedures',
    year: '2024',
    client: 'Wells Fargo',
    title: 'Procedures Updater',
    accent: 'var(--blue-deep)'
  }, {
    id: 'planr',
    year: '2023',
    client: 'Springboard',
    title: 'PLANR: Transit Planning App',
    accent: 'var(--blue-deep)'
  }];
  return /*#__PURE__*/React.createElement(Band, {
    id: "work"
  }, /*#__PURE__*/React.createElement(SectionMarker, {
    num: "[01]"
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(WorkRow, _extends({
    key: it.id
  }, it, {
    last: i === items.length - 1,
    onClick: () => onOpen && onOpen(it.id)
  })))));
};
function WorkRow({
  id,
  year,
  client,
  title,
  status,
  accent,
  last,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'grid',
      gap: 6,
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(MetaLine, null, year, " \xB7 ", client), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontVariationSettings: "'wdth' var(--wdth-display)",
      fontWeight: 600,
      fontSize: 'var(--fs-h3)',
      lineHeight: 1.2,
      letterSpacing: 'var(--ls-tight)',
      color: hover ? accent : 'var(--fg-1)',
      transition: 'color var(--dur-fast) var(--ease-snap)'
    }
  }, title, " ", hover ? '▸▸' : '▸'), status && /*#__PURE__*/React.createElement(Tag, {
    variant: "ink"
  }, status)));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/workgrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetaLine = __ds_scope.MetaLine;

__ds_ns.SectionMarker = __ds_scope.SectionMarker;

__ds_ns.Tag = __ds_scope.Tag;

})();
