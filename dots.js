/* DotGrid — "chaos to order" dot field on a 2D canvas.
   Dots start scattered and drifting, ease (staggered, ease-out) into a precise grid,
   then hold with a slow, slight opacity shimmer. Plays once. Reduced motion → settled grid. */
(function () {
  function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const easeOut = t => 1 - Math.pow(1 - t, 4);
  const ss = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const TAU = Math.PI * 2;

  class DotGrid {
    constructor(canvas, opts) {
      this.c = canvas; this.ctx = canvas.getContext('2d');
      this.o = Object.assign({ spacing: 16, size: 3, inset: 24, colors: ['#1E86EE', '#756D62'], mix: 0.2, settle: 3.6, stagger: 1, shimmer: 0.2, shimmerPeriod: 10, maskEl: null, maskPad: 32, maskFeather: 120, still: false, seed: 11 }, opts);
      this.mq = matchMedia('(prefers-reduced-motion: reduce)');
      this.start = null; this.visible = true; this.raf = 0; this.last = 0;
      this.frame = this.frame.bind(this);
      this.ro = new ResizeObserver(() => { this.layout(); this.draw(performance.now()); }); this.ro.observe(canvas);
      this.io = new IntersectionObserver(e => { this.visible = e[0].isIntersecting; if (this.visible) this.kick(); }); this.io.observe(canvas);
      this.onVis = () => this.kick(); document.addEventListener('visibilitychange', this.onVis);
      this.onMq = () => this.kick(); this.mq.addEventListener('change', this.onMq);
      this.layout(); this.kick();
    }
    get still() { return this.o.still || this.mq.matches; }
    set(o) {
      const keys = ['spacing', 'size', 'inset', 'colors', 'mix', 'seed'];
      const relayout = keys.some(k => k in o && JSON.stringify(o[k]) !== JSON.stringify(this.o[k]));
      Object.assign(this.o, o);
      if (relayout) this.layout();
      this.draw(performance.now()); this.kick();
    }
    replay() { this.start = null; this.kick(); }
    layout() {
      const r = this.c.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1), o = this.o;
      this.w = r.width; this.h = r.height; this.dpr = dpr;
      const W = Math.max(1, Math.round(r.width * dpr)), H = Math.max(1, Math.round(r.height * dpr));
      if (this.c.width !== W || this.c.height !== H) { this.c.width = W; this.c.height = H; }
      const sp = o.spacing, ins = o.inset;
      const cols = Math.max(1, Math.floor((this.w - 2 * ins) / sp) + 1), rows = Math.max(1, Math.floor((this.h - 2 * ins) / sp) + 1);
      const ox = (this.w - (cols - 1) * sp) / 2, oy = (this.h - (rows - 1) * sp) / 2;
      const rand = rng(o.seed), spread = Math.max(this.w, this.h) * 0.2;
      const cx = this.w / 2, cy = this.h / 2, maxd = Math.hypot(cx, cy) || 1;
      const g = () => (rand() + rand() + rand() - 1.5) / 1.5;
      this.dots = [];
      for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
        const tx = ox + i * sp, ty = oy + j * sp, d = Math.hypot(tx - cx, ty - cy) / maxd;
        this.dots.push({ tx, ty, sx: tx + g() * spread, sy: ty + g() * spread * 0.8, ph: rand() * TAU, fq: 0.5 + rand() * 0.7, amp: 5 + rand() * 12, col: rand() < o.mix ? 1 : 0, delay: 0.55 * rand() + 0.45 * d, dur: 0.75 + rand() * 0.35 });
      }
      const px = Math.max(1, o.size * dpr), s = Math.ceil(px) + 2;
      this.half = s / 2;
      this.sprites = o.colors.map(col => { const cv = document.createElement('canvas'); cv.width = cv.height = s; const x = cv.getContext('2d'); x.fillStyle = col; x.beginPath(); x.arc(s / 2, s / 2, px / 2, 0, TAU); x.fill(); return cv; });
    }
    kick() { if (!this.raf && !this.dead) this.raf = requestAnimationFrame(this.frame); }
    frame(now) {
      this.raf = 0;
      if (this.dead) return;
      if (this.still) { this.draw(now); return; }
      if (!this.visible || document.hidden) return;
      if (this.start === null) this.start = now;
      const t = (now - this.start) / 1000, settled = t > this.o.settle + 1.5;
      if (!settled || now - this.last >= 40) { this.last = now; this.draw(now); }
      this.raf = requestAnimationFrame(this.frame);
    }
    draw(now) {
      if (this.dead || !this.dots) return;
      const o = this.o, ctx = this.ctx, dpr = this.dpr, T = o.settle, still = this.still;
      const t = still ? 1e4 : (this.start === null ? 0 : (now - this.start) / 1000);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this.c.width, this.c.height);
      let m = null;
      if (o.maskEl && o.maskEl.isConnected) {
        const r = this.c.getBoundingClientRect(), e = o.maskEl.getBoundingClientRect(), p = o.maskPad;
        m = [e.left - r.left - p, e.top - r.top - p, e.right - r.left + p, e.bottom - r.top + p];
      }
      const fadeIn = still ? 1 : ss(0, 0.6, t);
      const shAmt = o.shimmer * (still ? 1 : ss(T, T + 1.5, t));
      const wph = (still ? 0.3 : t / o.shimmerPeriod) * TAU;
      const diag = (this.w + this.h) || 1;
      for (const d of this.dots) {
        const st = 0.25 + d.delay * o.stagger * 0.4 * T, du = d.dur * 0.5 * T;
        const p = easeOut(Math.max(0, Math.min(1, (t - st) / du)));
        let x, y;
        if (p >= 1) { x = d.tx; y = d.ty; }
        else {
          const k = 1 - p;
          const dx = d.amp * Math.sin(d.fq * t + d.ph), dy = d.amp * Math.cos(d.fq * 0.8 * t + d.ph * 1.3);
          x = d.tx + (d.sx + dx - d.tx) * k; y = d.ty + (d.sy + dy - d.ty) * k;
        }
        let a = fadeIn * (0.45 + 0.55 * p);
        if (shAmt > 0) a *= 1 - shAmt * (0.5 + 0.5 * Math.sin(wph - ((d.tx * 1.0 + d.ty * 0.6) / diag) * TAU * 1.4));
        if (m) {
          const ex = Math.max(m[0] - x, 0, x - m[2]), ey = Math.max(m[1] - y, 0, y - m[3]);
          a *= ss(0, o.maskFeather, Math.hypot(ex, ey));
        }
        if (a < 0.01) continue;
        ctx.globalAlpha = a;
        let X = x * dpr - this.half, Y = y * dpr - this.half;
        if (p >= 1) { X = Math.round(X); Y = Math.round(Y); }
        ctx.drawImage(this.sprites[d.col] || this.sprites[0], X, Y);
      }
      ctx.globalAlpha = 1;
    }
    destroy() {
      this.dead = true; cancelAnimationFrame(this.raf);
      this.ro.disconnect(); this.io.disconnect();
      document.removeEventListener('visibilitychange', this.onVis);
      this.mq.removeEventListener('change', this.onMq);
    }
  }
  window.DotGrid = DotGrid;
})();
