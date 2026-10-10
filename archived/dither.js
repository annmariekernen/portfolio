/* DitherField — ordered (Bayer 8×8) dithered gradient on a low-res WebGL canvas.
   Modes: 0 = ambient field (with optional calm rect), 1 = horizon band, 2 = light panel.
   Ported from assets/claude design files/design_handoff_dithered_hero/ — only mode 1
   is used on this site. One change from the handoff: the palette's top tone was
   #FBF9F6 (the kit's original warm paper) and has been changed to #FFFFFF to match
   this site's live --paper token, so the band's top edge still dissolves into the page. */
(function () {
  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FS = `
precision highp float;
uniform vec2 uRes; uniform float uPh; uniform int uMode; uniform float uN;
uniform vec4 uCalm; uniform float uFeather; uniform vec2 uLight;
uniform vec3 uC0, uC1, uC2, uC3; uniform float uBlue;
float bayer2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}
float bayer4(vec2 a){return bayer2(.5*a)*.25+bayer2(a);}
float bayer8(vec2 a){return bayer4(.5*a)*.25+bayer2(a);}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes; float asp=uRes.x/uRes.y; vec2 p=vec2(uv.x*asp,uv.y);
  vec2 c=vec2(cos(uPh),sin(uPh));
  float t=0.;
  if(uMode==0){
    vec2 q=p*1.15;
    vec2 w=vec2(fbm(q+c*.32),fbm(q+vec2(5.2,1.3)-c*.32));
    float n=fbm(q*.9+w*1.5+c*.18);
    float base=uv.x*.6+(1.-uv.y)*.3;
    t=base*.95+(n-.5)*1.1;
    t=t*(1.+uBlue*.55)+uBlue*.26;
    t*=smoothstep(1.,.86,uv.y);
    vec2 px=gl_FragCoord.xy;
    vec2 d=max(uCalm.xy-px,px-uCalm.zw);
    float m=smoothstep(0.,uFeather,length(max(d,0.)));
    t=mix(min(t,.08),t,m);
  } else if(uMode==1){
    float y=1.-uv.y;
    float wave=.07*sin(p.x*2.1+uPh)+.035*sin(p.x*4.7-2.*uPh)+(fbm(vec2(p.x*1.4,y*1.6)+c*.4)-.5)*.3;
    t=clamp((y-.08+wave)/.9,0.,1.);
    t=pow(t,1.15);
  } else if(uMode==3){
    float y=uv.y, dx=abs(uv.x-.5)*2.;
    vec2 q=vec2(p.x*1.25,y*1.5);
    float n=fbm(q+c*.35), n2=fbm(q*1.9+vec2(4.1,2.3)-c*.25);
    float h=.19+.035*sin(uPh)+.52*pow(dx,2.3)+(n-.5)*.2+.025*sin(p.x*2.3+uPh);
    t=clamp(1.-(y+(n2-.5)*.1)/max(h,.05),0.,1.);
    t=pow(t,.8)*1.06;
    t=t*(1.+uBlue*.45)+uBlue*.16*smoothstep(0.,.15,t);
    vec2 px=gl_FragCoord.xy;
    vec2 d=max(uCalm.xy-px,px-uCalm.zw);
    float m=smoothstep(0.,uFeather,length(max(d,0.)));
    t=mix(min(t,.08),t,m);
  } else {
    vec2 L=uLight*vec2(asp,1.);
    vec2 dv=p-L; dv.y*=1.15;
    float n=fbm(p*1.7+c*.35);
    t=smoothstep(.06,1.25,length(dv))*1.1+(n-.5)*.36;
  }
  float s=clamp(t,0.,1.)*uN; float i=floor(s);
  if(s-i>bayer8(gl_FragCoord.xy)) i+=1.;
  i=min(i,uN);
  vec3 col=i<.5?uC0:i<1.5?uC1:i<2.5?uC2:uC3;
  gl_FragColor=vec4(col,1.);
}`;
  const hex = h => [1, 3, 5].map(k => parseInt(h.slice(k, k + 2), 16) / 255);
  const PALETTES = {
    four: ['#FFFFFF', '#DEE9F6', '#8FA5C4', '#1E86EE'],
    three: ['#FFFFFF', '#DFE6F0', '#1E86EE']
  };
  const STILL_PHASE = 1.1;

  class DitherField {
    constructor(canvas, opts) {
      this.c = canvas;
      this.o = Object.assign({ mode: 0, cell: 3, loop: 16, palette: 'four', calmEl: null, calmPad: 40, calmFeather: 180, pointer: false, still: false }, opts);
      if (!this.initGL()) return;
      this.onLost = e => { e.preventDefault(); this.lost = true; cancelAnimationFrame(this.raf); this.raf = 0; };
      this.onRestored = () => { this.lost = false; if (this.dead) return; this.initGL(); this.resize(); this.draw(); this.kick(); };
      canvas.addEventListener('webglcontextlost', this.onLost);
      canvas.addEventListener('webglcontextrestored', this.onRestored);
      this.light = [0.62, 0.6]; this.ptr = null; this.visible = true; this.last = 0; this.t0 = performance.now();
      this.mq = matchMedia('(prefers-reduced-motion: reduce)');
      this.onMq = () => this.kick(); this.mq.addEventListener('change', this.onMq);
      this.ro = new ResizeObserver(() => { this.resize(); this.draw(); }); this.ro.observe(canvas);
      this.io = new IntersectionObserver(e => { this.visible = e[0].isIntersecting; if (this.visible) this.kick(); }); this.io.observe(canvas);
      this.onMove = e => { const r = this.c.getBoundingClientRect(); if (!r.width) return; this.ptr = [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height]; };
      this.onVis = () => this.kick(); document.addEventListener('visibilitychange', this.onVis);
      this.frame = this.frame.bind(this);
      this.applyPointer(); this.resize(); this.kick();
    }
    initGL() {
      const gl = this.c.getContext('webgl', { antialias: false, depth: false, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: true });
      if (!gl) return false;
      this.gl = gl;
      const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s)); return s; };
      const pr = gl.createProgram();
      gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr); gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      this.u = {}; ['uRes', 'uPh', 'uMode', 'uN', 'uCalm', 'uFeather', 'uLight', 'uC0', 'uC1', 'uC2', 'uC3', 'uBlue'].forEach(n => this.u[n] = gl.getUniformLocation(pr, n));
      return true;
    }
    get still() { return this.o.still || this.mq.matches; }
    applyPointer() {
      window.removeEventListener('pointermove', this.onMove);
      if (this.o.pointer) window.addEventListener('pointermove', this.onMove, { passive: true });
    }
    set(o) { Object.assign(this.o, o); if (!this.gl) return; this.applyPointer(); this.resize(); this.draw(); this.kick(); }
    kick() { if (!this.raf && !this.dead) this.raf = requestAnimationFrame(this.frame); }
    frame(now) {
      this.raf = 0;
      if (this.dead || !this.gl || this.lost) return;
      if (this.still) { this.draw(); return; }
      if (!this.visible || document.hidden) return;
      if (now - this.last >= 32) { this.last = now; this.draw(); }
      this.raf = requestAnimationFrame(this.frame);
    }
    resize() {
      const r = this.c.getBoundingClientRect(), cell = this.o.cell;
      const w = Math.max(1, Math.round(r.width / cell)), h = Math.max(1, Math.round(r.height / cell));
      if (this.c.width !== w || this.c.height !== h) { this.c.width = w; this.c.height = h; }
      this.gl.viewport(0, 0, w, h);
    }
    draw() {
      const gl = this.gl; if (!gl || this.dead || this.lost) return;
      const o = this.o, still = this.still;
      const ph = still ? STILL_PHASE : ((performance.now() - this.t0) / 1000 / o.loop) * Math.PI * 2;
      const pal = (PALETTES[o.palette] || PALETTES.four).map(hex);
      while (pal.length < 4) pal.push(pal[pal.length - 1]);
      const n = (PALETTES[o.palette] || PALETTES.four).length - 1;
      gl.uniform2f(this.u.uRes, this.c.width, this.c.height);
      gl.uniform1f(this.u.uPh, ph);
      gl.uniform1i(this.u.uMode, o.mode);
      gl.uniform1f(this.u.uBlue, o.blue || 0);
      gl.uniform1f(this.u.uN, n);
      ['uC0', 'uC1', 'uC2', 'uC3'].forEach((k, i) => gl.uniform3fv(this.u[k], pal[i]));
      let calm = [-1e5, -1e5, -1e5, -1e5];
      if ((o.mode === 0 || o.mode === 3) && o.calmEl && o.calmEl.isConnected) {
        const r = this.c.getBoundingClientRect(), t = o.calmEl.getBoundingClientRect(), k = o.cell, pd = o.calmPad;
        calm = [(t.left - r.left - pd) / k, (r.bottom - t.bottom - pd) / k, (t.right - r.left + pd) / k, (r.bottom - t.top + pd) / k];
      }
      gl.uniform4fv(this.u.uCalm, calm);
      gl.uniform1f(this.u.uFeather, o.calmFeather / o.cell);
      const base = [0.6 + 0.07 * Math.cos(ph), 0.6 + 0.06 * Math.sin(ph)];
      let target = base;
      if (o.pointer && this.ptr && !still) {
        const cl = v => Math.max(-0.5, Math.min(1.5, v));
        target = [base[0] + (cl(this.ptr[0]) - 0.5) * 0.28, base[1] + (cl(this.ptr[1]) - 0.5) * 0.28];
      }
      if (still) this.light = base.slice();
      else { this.light[0] += (target[0] - this.light[0]) * 0.05; this.light[1] += (target[1] - this.light[1]) * 0.05; }
      gl.uniform2fv(this.u.uLight, this.light);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    destroy() {
      this.dead = true; cancelAnimationFrame(this.raf);
      if (!this.gl) return;
      this.ro.disconnect(); this.io.disconnect();
      this.mq.removeEventListener('change', this.onMq);
      window.removeEventListener('pointermove', this.onMove);
      document.removeEventListener('visibilitychange', this.onVis);
      this.c.removeEventListener('webglcontextlost', this.onLost);
      this.c.removeEventListener('webglcontextrestored', this.onRestored);
    }
  }
  window.DitherField = DitherField;
})();
