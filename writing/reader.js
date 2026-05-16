// Shared reader-page JS: progress bar + TOC active highlight + reveal
(function () {
  // Reading progress bar
  var bar = document.querySelector('.progress');
  function updateProgress() {
    if (!bar) return;
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? Math.min(100, (scrolled / max) * 100) : 0;
    bar.style.width = pct + '%';
  }
  document.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // TOC active highlight
  var tocLinks = document.querySelectorAll('.prose-toc a');
  var headings = Array.prototype.map.call(tocLinks, function (a) {
    var id = a.getAttribute('href').slice(1);
    return document.getElementById(id);
  }).filter(Boolean);

  function updateActive() {
    var y = window.scrollY + 140;
    var current = null;
    headings.forEach(function (h) {
      if (h.offsetTop <= y) current = h;
    });
    tocLinks.forEach(function (a) { a.classList.remove('active'); });
    if (current) {
      var active = document.querySelector('.prose-toc a[href="#' + current.id + '"]');
      if (active) active.classList.add('active');
    }
  }
  document.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  // Reveal on scroll
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (e) { io.observe(e); });
})();
