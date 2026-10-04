/* Shared across all v3 pages: fades + rises in each .reveal section as it
   scrolls into view. Page-level fade-in is pure CSS (see styles-v3.css);
   this just handles the per-section part, which needs scroll position. */
(function () {
  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  // Triggers the moment a section enters the viewport, so the full
  // transition plays out while still scrolling, instead of mostly
  // finishing before it's visible.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
