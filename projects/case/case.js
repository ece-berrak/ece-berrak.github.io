/* Brand case-study interactions. Vanilla JS, no dependencies. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* tabs (product thinking, channels) */
  $$('[data-tabs]').forEach(function (box) {
    var tabs = $$('[role=tab]', box), panels = $$('.panel', box);
    function pick(t) {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); x.tabIndex = x === t ? 0 : -1; });
      panels.forEach(function (p) { p.hidden = p.id !== t.getAttribute('aria-controls'); });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pick(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        n = (n + tabs.length) % tabs.length; tabs[n].focus(); pick(tabs[n]); e.preventDefault();
      });
    });
  });

  /* logo stage: explain cells, dark mode, wrong versions */
  var stage = $('.stage[data-stage]');
  if (stage) {
    var ex = $('.explain', stage), base = ex ? ex.innerHTML : '';
    $$('.cell', stage).forEach(function (c) {
      function say() { ex.innerHTML = c.getAttribute('data-say'); }
      c.addEventListener('click', say);
      c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); say(); } });
    });
    $$('[data-toggle]', stage).forEach(function (b) {
      b.addEventListener('click', function () {
        var on = b.getAttribute('aria-pressed') !== 'true';
        b.setAttribute('aria-pressed', on);
        if (b.dataset.toggle === 'dark') {
          stage.classList.toggle('dark', on);
          $$('[data-dark-src]', stage).forEach(function (el) {
            if (!el.dataset.lightSrc) el.dataset.lightSrc = el.getAttribute('src');
            el.setAttribute('src', on ? el.dataset.darkSrc : el.dataset.lightSrc);
          });
        }
        if (b.dataset.toggle === 'wrong') { $('.wrongs', stage.parentNode).classList.toggle('on', on); }
      });
    });
  }

  /* palette inspector */
  function lum(hex) {
    var c = hex.replace('#', ''); var v = [0, 2, 4].map(function (i) {
      var x = parseInt(c.substr(i, 2), 16) / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    }); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
  }
  function ratio(a, b) { var l1 = lum(a), l2 = lum(b); if (l1 < l2) { var t = l1; l1 = l2; l2 = t; } return (l1 + 0.05) / (l2 + 0.05); }
  var sws = $$('.sw'), info = $('#swinfo');
  if (sws.length && info) {
    var light = $('.swatches').dataset.light, dark = $('.swatches').dataset.dark;
    function show(s) {
      sws.forEach(function (x) { x.setAttribute('aria-pressed', x === s ? 'true' : 'false'); });
      var hex = s.dataset.hex;
      $('.dot', info).style.background = hex;
      $('h3', info).textContent = s.dataset.name + '  ' + hex;
      $('.why', info).textContent = s.dataset.why;
      var r1 = ratio(hex, light), r2 = ratio(hex, dark);
      function badge(r) { return r >= 4.5 ? 'AA text' : r >= 3 ? 'large text only' : 'decoration only'; }
      function chip(bg, label, r) {
        var fg = lum(bg) > 0.5 ? '#111' : '#eee';
        return '<span style="background:' + bg + ';color:' + fg + ';border:1px solid #8884"><b style="color:' + hex + ';font-size:15px;font-family:inherit">Aa</b> ' + label + ' ' + r.toFixed(1) + ':1 · ' + badge(r) + '</span>';
      }
      $('.ratio', info).innerHTML = chip(light, 'on light', r1) + chip(dark, 'on dark', r2);
      var cp = $('.copy', info); cp.dataset.hex = hex; cp.textContent = 'copy ' + hex;
    }
    sws.forEach(function (s) { s.addEventListener('click', function () { show(s); }); });
    $('.copy', info).addEventListener('click', function (e) {
      var b = e.currentTarget, h = b.dataset.hex;
      function done() { b.textContent = 'copied'; setTimeout(function () { b.textContent = 'copy ' + h; }, 1200); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(h).then(done, done); else done();
    });
    show(sws[0]);
  }

  /* voice do / don't */
  $$('[data-voice]').forEach(function (box) {
    var btns = $$('button', box), lists = $$('ul', box);
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        lists.forEach(function (l) { l.hidden = l.dataset.kind !== b.dataset.kind; });
      });
    });
  });

  /* gallery + lightbox */
  var items = $$('.gal .it'), lb = $('dialog.lb');
  $$('.filters button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.filters button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var f = b.dataset.f;
      items.forEach(function (it) { it.hidden = !(f === 'all' || it.dataset.ch === f || it.dataset.fmt === f); });
    });
  });
  items.forEach(function (it) {
    var v = $('video', it);
    if (v) { it.addEventListener('mouseenter', function () { v.play().catch(function () {}); }); it.addEventListener('mouseleave', function () { v.pause(); }); }
  });
  if (lb) {
    var idx = 0;
    function vis() { return items.filter(function (i) { return !i.hidden; }); }
    function open(i) {
      var list = vis(); idx = (i + list.length) % list.length; var it = list[idx];
      var m = $('.media', lb); m.innerHTML = '';
      var v = $('video', it), src = it.dataset.src;
      var el;
      if (v) { el = document.createElement('video'); el.src = src; el.controls = true; el.autoplay = true; el.loop = true; el.playsInline = true; }
      else { el = document.createElement('img'); el.src = src; el.alt = it.dataset.alt || ''; }
      m.appendChild(el);
      $('.lt', lb).textContent = it.dataset.title; $('.lw', lb).textContent = it.dataset.why;
      $('.lm', lb).textContent = it.dataset.ch + ' · ' + it.dataset.fmt;
      if (!lb.open) lb.showModal();
    }
    items.forEach(function (it) { it.addEventListener('click', function () { open(vis().indexOf(it)); }); });
    function close() { var vv = $('video', lb); if (vv) vv.pause(); lb.close(); }
    $('[data-prev]', lb).addEventListener('click', function () { open(idx - 1); });
    $('[data-next]', lb).addEventListener('click', function () { open(idx + 1); });
    $('[data-close]', lb).addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('in')) close(); });
    lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') open(idx + 1); if (e.key === 'ArrowLeft') open(idx - 1); });
    lb.addEventListener('close', function () { var vv = $('video', lb); if (vv) vv.pause(); });
  }

  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function jsonOf(id) { var n = document.getElementById(id); if (!n) return null; try { return JSON.parse(n.textContent); } catch (e) { return null; } }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* confetti on swatch click */
  var hexes = $$('.sw').map(function (x) { return x.dataset.hex; });
  $$('.sw').forEach(function (b) {
    b.addEventListener('click', function (ev) {
      if (reduce || !hexes.length) return;
      for (var i = 0; i < 16; i++) {
        var c = document.createElement('i'); c.className = 'conf';
        c.style.left = ev.clientX + 'px'; c.style.top = ev.clientY + 'px'; c.style.background = hexes[i % hexes.length];
        document.body.appendChild(c);
        (function (c) {
          var dx = (Math.random() - .5) * 260, dy = -60 - Math.random() * 180, r = Math.random() * 540;
          requestAnimationFrame(function () { c.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + r + 'deg)'; c.style.opacity = '0'; });
          setTimeout(function () { c.remove(); }, 1000);
        })(c);
      }
    });
  });

  /* generic block explainer */
  var arch = $('#arch'), ainfo = $('#archinfo'), adata = jsonOf('archdata');
  if (arch && ainfo && adata) {
    var nds = $$('.nd', arch);
    var showN = function (i) {
      nds.forEach(function (n, k) { n.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
      ainfo.innerHTML = '<h4>' + esc(adata[i][0]) + '</h4><p>' + esc(adata[i][2]) + '</p>';
    };
    nds.forEach(function (n, i) { n.addEventListener('click', function () { showN(i); }); });
    showN(0);
  }

  /* qutum: join flow */
  var join = $('#join'), games = jsonOf('gdata') || [];
  if (join) {
    var tv = $('#tvbody'), ph = $('#phbody'), note = $('#jnote'), chip = $('#tvchip');
    var jtabs = $$('.jsteps button', join), step = 0;
    var CODE = 'KQ7F', COLS = ['#FF5A1F', '#F2B544', '#2F6BFF', '#2fbf71', '#ff5c8a', '#8d6bd8'];
    var st = { name: '', col: COLS[0], joined: false, bots: false, g: 'where', hand: false };
    var others = [{ n: 'Mert', c: '#F2B544' }, { n: 'Aylin', c: '#2F6BFF' }];
    var picks = ['where', 'knock', 'crowns', 'bullrun', 'nightops'];
    var notes = [
      'Open qutum.app in any browser: a smart TV, a laptop on an HDMI cable, a cast tab. The page shows a room code. Nothing to install.',
      'Everyone points their camera at the QR code, or types the room code. No account, no app store.',
      'Pick a name and a colour. Your seat appears on the TV straight away. Press Join on the little phone.',
      'The host picks a game. If the table is short, bots fill the seats. Then press Open my hand: the phone shows what only you should see.'
    ];
    var qr = function () {
      var n = 21, h = '', seed = 7;
      var fin = function (x, y) { return (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13); };
      var finOn = function (x, y) { var lx = x > 13 ? x - 14 : x, ly = y > 13 ? y - 14 : y; var d = Math.max(Math.abs(lx - 3), Math.abs(ly - 3)); return d === 3 || d <= 1; };
      for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
        var on; if (fin(x, y)) on = finOn(x, y); else { seed = (seed * 1103515245 + 12345) & 0x7fffffff; on = (seed >> 8) % 2 === 0; }
        h += '<i' + (on ? ' class="k"' : '') + '></i>';
      }
      return '<div class="qr" aria-hidden="true">' + h + '</div>';
    };
    var seatsHtml = function (g) {
      var humans = others.slice(); if (st.joined) humans.push({ n: st.name || 'You', c: st.col });
      var need = g ? g.min : 0;
      var list = humans.map(function (h) { return '<span class="seat on" style="background:' + h.c + '">' + esc((h.n || '?').charAt(0).toUpperCase()) + '<small>' + esc(h.n) + '</small></span>'; });
      if (st.bots && g) { var i = 1; while (list.length < need) { list.push('<span class="seat bot">bot<small>bot ' + i + '</small></span>'); i++; } }
      while (list.length < 6) list.push('<span class="seat"></span>');
      return '<div class="seats" style="margin-bottom:22px">' + list.join('') + '</div>';
    };
    var code = function () { return '<div class="codebox" aria-label="room code ' + CODE + '">' + CODE.split('').map(function (c) { return '<b>' + c + '</b>'; }).join('') + '</div>'; };
    var gameOf = function (k) { return games.filter(function (g) { return g.key === k; })[0]; };
    var render = function () {
      jtabs.forEach(function (t, i) { t.setAttribute('aria-selected', i === step ? 'true' : 'false'); });
      note.textContent = notes[step]; chip.textContent = step === 0 ? 'qutum.app' : 'qutum.app · ' + CODE;
      $('#jprev').disabled = step === 0; $('#jnext').disabled = step === 3;
      if (step === 0) {
        tv.innerHTML = '<h4>Game night starts here.</h4><p>Room code, ready and waiting:</p>' + code() + '<p>Waiting for players…</p>';
        ph.innerHTML = '<h4>Your phone</h4><p>Nothing to install. Point the camera at the TV.</p><button class="pbtn" type="button" data-go="1">Scan the TV →</button>';
      } else if (step === 1) {
        tv.innerHTML = '<div class="tvrow">' + qr() + '<div><h4>Scan to join</h4><p>or open <b>qutum.app</b> and type</p>' + code() + '</div></div>';
        ph.innerHTML = '<div class="view" aria-hidden="true"></div><p>Camera sees: <b>qutum.app · ' + CODE + '</b></p><button class="pbtn" type="button" data-go="2">Join the room →</button>';
      } else if (step === 2) {
        tv.innerHTML = '<h4>' + (st.joined ? 'You are in, ' + esc(st.name || 'You') + '.' : 'Who is at the table?') + '</h4><p>' + (st.joined ? 'Your seat just lit up.' : 'Two friends are already in. Seats appear as phones join.') + '</p>' + seatsHtml(null);
        if (!st.joined) {
          ph.innerHTML = '<h4>Pick a name</h4><input id="pname" maxlength="12" placeholder="Your name" aria-label="Your name" value="' + esc(st.name) + '"><div class="swc" role="group" aria-label="Pick a colour">' + COLS.map(function (c) { return '<button type="button" data-c="' + c + '" aria-pressed="' + (c === st.col) + '" style="background:' + c + '" aria-label="colour ' + c + '"></button>'; }).join('') + '</div><button class="pbtn" type="button" id="pjoin">Join</button>';
        } else {
          ph.innerHTML = '<h4>You are in!</h4><p>Waiting for the host to pick a game.</p><button class="pbtn sec" type="button" data-go="3">Host picks a game →</button>';
        }
      } else {
        if (!st.joined) { st.joined = true; if (!st.name) st.name = 'You'; }
        var g = gameOf(st.g) || games[0];
        var humans = others.length + 1, short = g.min - humans;
        tv.innerHTML = '<div class="gpick" role="group" aria-label="Pick a game">' + picks.map(function (k) { var x = gameOf(k); return x ? '<button type="button" data-g="' + k + '" aria-pressed="' + (k === g.key) + '" style="--gc:' + x.accent + '">' + esc(x.title) + '</button>' : ''; }).join('') + '</div>' +
          '<div class="gcard"><img src="' + g.c + '" alt=""><div><h4>' + esc(g.title) + '</h4><p>' + esc(g.tagline) + '</p><ol>' + g.steps.map(function (x) { return '<li><b>' + esc(x[0]) + ':</b> ' + esc(x[1]) + '</li>'; }).join('') + '</ol>' +
          (short > 0 && !st.bots ? '<span class="warn">needs ' + g.min + ' players, you have ' + humans + '</span>' : '<span class="warn" style="background:#2fbf71">ready to deal' + (st.bots && short > 0 ? ' (bots fill in)' : '') + '</span>') + '</div></div>' + seatsHtml(g) +
          '<div class="gpick"><button type="button" id="jbots" aria-pressed="' + st.bots + '">bots fill empty seats</button></div>';
        if (!st.hand) ph.innerHTML = '<h4>' + esc(g.title) + '</h4><p>The host started the game.</p><button class="pbtn" type="button" id="phand">Open my hand</button>';
        else ph.innerHTML = '<h4>Only you see this</h4><div class="view" style="aspect-ratio:auto;padding:16px;color:#fff;text-align:center;font-weight:700">' + esc(g.phone) + '</div><p>The TV shows the board. This stays on your phone.</p><button class="pbtn sec" type="button" id="phide">Hide it</button>';
      }
    };
    var go = function (n) { step = Math.max(0, Math.min(3, n)); if (step !== 3) st.hand = false; render(); };
    jtabs.forEach(function (t, i) { t.addEventListener('click', function () { go(i); }); });
    $('#jprev').addEventListener('click', function () { go(step - 1); });
    $('#jnext').addEventListener('click', function () { go(step + 1); });
    join.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.go) go(+t.dataset.go);
      if (t.dataset.c) { st.name = ($('#pname') || {}).value || st.name; st.col = t.dataset.c; render(); }
      if (t.id === 'pjoin') { st.name = (($('#pname') || {}).value || '').trim() || 'You'; st.joined = true; render(); }
      if (t.dataset.g) { st.g = t.dataset.g; st.hand = false; render(); }
      if (t.id === 'jbots') { st.bots = !st.bots; render(); }
      if (t.id === 'phand') { st.hand = true; render(); }
      if (t.id === 'phide') { st.hand = false; render(); }
    });
    render();
  }

  /* qutum: shelf + game sheet */
  var shelf = $$('.gc'), gs = $('dialog.gs');
  if (shelf.length && gs) {
    var gf = $$('[data-gfilters] button');
    var rules = {
      all: function () { return true; },
      two: function (c) { return +c.dataset.min <= 2; },
      big: function (c) { return +c.dataset.max >= 7; },
      quick: function (c) { return +c.dataset.mins < 30; },
      roles: function (c) { return /secret roles|bluff/.test(c.dataset.tags); },
      coop: function (c) { return /co-op/.test(c.dataset.tags); },
      party: function (c) { return /party/.test(c.dataset.tags); }
    };
    gf.forEach(function (b) {
      b.addEventListener('click', function () {
        gf.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        shelf.forEach(function (c) { c.hidden = !rules[b.dataset.f](c); });
      });
    });
    var sheet = $('#gsheet'), cur = null, curStep = 0;
    var drawSheet = function () {
      var g = cur, s = g.steps[curStep];
      sheet.style.setProperty('--ga', g.accent);
      sheet.innerHTML = '<button class="gx" type="button" data-x>close ✕</button><div class="ban" style="background-image:url(' + g.h + ')"><span class="gg">' + esc(g.genre) + '</span></div><div class="gb"><div><h3>' + esc(g.title) + '</h3><p class="tl">' + esc(g.tagline) + '</p><p>' + esc(g.desc) + '</p><div class="pills"><span>' + g.min + '–' + esc(g.maxl) + ' players</span><span>' + (g.mins ? g.mins + ' min' : 'your pace') + '</span><span>age ' + esc(g.age) + '</span></div><a class="go" href="https://qutum.app/" target="_blank" rel="noopener">Play it at qutum.app ↗</a></div>' +
        '<div><div class="gsteps" role="tablist" aria-label="Round steps">' + g.steps.map(function (x, i) { return '<button type="button" role="tab" data-st="' + i + '" aria-selected="' + (i === curStep) + '">' + (i + 1) + ' ' + esc(x[0]) + '</button>'; }).join('') + '</div><div class="gstep"><b>' + esc(s[0]) + '</b>' + esc(s[1]) + '</div><div class="gphone">Your phone shows: <b>' + esc(g.phone) + '</b></div></div></div>';
    };
    shelf.forEach(function (c) {
      c.addEventListener('click', function () {
        cur = games.filter(function (g) { return g.key === c.dataset.g; })[0]; if (!cur) return; curStep = 0; drawSheet(); if (!gs.open) gs.showModal();
      });
    });
    gs.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest && t.closest('[data-x]')) { gs.close(); return; }
      var b = t.closest && t.closest('[data-st]'); if (b) { curStep = +b.dataset.st; drawSheet(); return; }
      if (t === gs || t.classList.contains('gin')) gs.close();
    });
  }

  /* qutum: design process + flip cards */
  var pr = $$('#proc button'), pp = $$('#procp .procp');
  pr.forEach(function (b, i) {
    b.addEventListener('click', function () {
      pr.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      pp.forEach(function (p, k) { p.hidden = k !== i; });
    });
  });
  $$('.flip').forEach(function (f) { f.addEventListener('click', function () { f.setAttribute('aria-pressed', f.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); }); });

  /* mutfaq: pin anatomy + boards */
  var anat = $('#anat');
  if (anat) {
    var ah = $$('.hot', anat), an = $$('.notes button', anat);
    var pickA = function (i) { ah.forEach(function (h, k) { h.setAttribute('aria-pressed', k === i ? 'true' : 'false'); }); an.forEach(function (n, k) { n.setAttribute('aria-pressed', k === i ? 'true' : 'false'); }); };
    ah.forEach(function (h) { h.addEventListener('click', function () { pickA(+h.dataset.a); }); });
    an.forEach(function (n) { n.addEventListener('click', function () { pickA(+n.dataset.a); }); });
  }
  var doors = $$('#libmap .door');
  doors.forEach(function (d) { d.addEventListener('click', function () { doors.forEach(function (x) { x.setAttribute('aria-pressed', x === d ? 'true' : 'false'); }); }); });

  /* two forks: swipe demo */
  var tf = $('#tfdemo'), dishes = jsonOf('tfdata');
  if (tf && dishes) {
    var IMG = '../../uploads/brands/two-forks/dishes/', N = 10, deck = dishes.slice(0, N), di = 0, votes = [];
    var CUIS = ['turkish', 'italian', 'french', 'asian'], TRAITS = ['comfort', 'quick', 'veggie', 'meat', 'rich', 'sweet'];
    var NAMES = { turkish: 'Kebab Captain', italian: 'Pasta Poet', french: 'Brunch Diplomat', asian: 'Noodle Nomad', comfort: 'Cosy', quick: 'Speedy', veggie: 'Green', meat: 'Carnivore', rich: 'Indulgent', sweet: 'Sweet-Tooth' };
    var friend = { italian: 2, comfort: 1, quick: 1, veggie: 1, meat: -1 };
    var fv = function (d) { var sc = 0; d.t.forEach(function (t) { sc += friend[t] || 0; }); return sc >= 3 ? 2 : sc >= 1 ? 1 : 0; };
    var dimg = $('#dimg'), dname = $('#dname'), dtags = $('#dtags'), dstamp = $('#dstamp'), prog = $('#prog'), out = $('#tfout');
    var drawCard = function () {
      var d = deck[di]; dimg.src = IMG + d.f + '.webp'; dimg.alt = d.n; dname.textContent = d.n;
      dtags.innerHTML = d.t.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('');
      dstamp.className = 'stampi';
      prog.innerHTML = deck.map(function (_, k) { return '<i' + (k < di ? ' class="d"' : '') + '></i>'; }).join('');
    };
    var prof = function (vs) { var v = {}; deck.forEach(function (d, k) { d.t.forEach(function (t) { v[t] = (v[t] || 0) + vs[k]; }); }); return v; };
    var cos = function (a, b) { var keys = Object.keys(Object.assign({}, a, b)), dot = 0, na = 0, nb = 0; keys.forEach(function (k) { var x = Math.max(0, a[k] || 0), y = Math.max(0, b[k] || 0); dot += x * y; na += x * x; nb += y * y; }); return na && nb ? dot / Math.sqrt(na * nb) : 0; };
    var result = function () {
      var mine = prof(votes);
      var top = function (arr) { return arr.slice().sort(function (a, b) { return (mine[b] || 0) - (mine[a] || 0); })[0]; };
      var c = top(CUIS), t = top(TRAITS), mx = Math.max.apply(null, CUIS.map(function (k) { return Math.max(0, mine[k] || 0); })) || 1;
      var loved = deck.filter(function (d, k) { return votes[k] >= 1; });
      var fvotes = deck.map(fv), agree = 0; deck.forEach(function (d, k) { agree += 1 - Math.abs(votes[k] - fvotes[k]) / 2; }); agree /= deck.length;
      var match = Math.round(100 * (0.7 * agree + 0.3 * cos(mine, prof(fvotes))));
      var both = deck.filter(function (d, k) { return votes[k] >= 1 && fvotes[k] >= 1; }).slice(0, 4);
      out.innerHTML = '<div class="eat"><span class="k">your Eatype (demo)</span><h3>' + esc(NAMES[t] + ' ' + NAMES[c]) + '</h3><p>Built from your ' + N + ' swipes.</p><div class="bars">' +
        CUIS.map(function (k) { var w = Math.round(100 * Math.max(0, mine[k] || 0) / mx); return '<div class="bar"><span>' + k + '</span><div><i style="width:' + w + '%"></i></div><span>' + w + '%</span></div>'; }).join('') + '</div>' +
        (loved.length ? '<div class="grid">' + loved.slice(0, 4).map(function (d) { return '<img src="' + IMG + d.f + '.webp" alt="' + esc(d.n) + '">'; }).join('') + '</div>' : '') +
        '<div class="acts"><button type="button" id="tfagain">swipe again</button></div></div>' +
        '<div class="matchbox"><div class="ring" style="--p:' + match + '"><b>' + match + '%</b></div><div><b>Match with a friend</b><p style="font-size:14px">Demo friend: loves Italian, comfort food and anything quick.</p><div class="shared">' + both.map(function (d) { return '<img src="' + IMG + d.f + '.webp" alt="' + esc(d.n) + '">'; }).join('') + '</div>' + (both.length ? '' : '<p style="font-size:14px">No shared loves, so a hard night.</p>') + '</div></div>' +
        '<details class="formula"><summary>How is the match scored?</summary><p>In the real app: 70% how often you voted the same, card by card, plus 30% how alike your taste profiles are. This demo uses the same split with a made-up friend.</p></details>';
    };
    var vote = function (v, label) {
      if (di >= N) return; votes.push(v); dstamp.textContent = label; dstamp.className = 'stampi show'; dstamp.style.color = v ? '#2fbf71' : '#E0383E';
      setTimeout(function () { di++; if (di >= N) { prog.innerHTML = deck.map(function () { return '<i class="d"></i>'; }).join(''); result(); } else drawCard(); }, reduce ? 0 : 260);
    };
    $('#bno').addEventListener('click', function () { vote(0, 'NOPE'); });
    $('#byes').addEventListener('click', function () { vote(1, 'YUM'); });
    $('#blove').addEventListener('click', function () { vote(2, 'LOVE'); });
    tf.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') vote(0, 'NOPE'); if (e.key === 'ArrowRight') vote(1, 'YUM'); if (e.key === 'ArrowDown') vote(2, 'LOVE'); });
    out.addEventListener('click', function (e) { if (e.target.id === 'tfagain') { di = 0; votes = []; out.innerHTML = '<div class="eat"><span class="k">your Eatype</span><h3>Swipe a few dishes…</h3><p>Your food personality shows up here after <b>10 swipes</b>.</p></div>'; drawCard(); } });
    drawCard();
  }

  /* reveal */
  var rv = $$('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .08 });
    rv.forEach(function (n) { io.observe(n); });
  } else rv.forEach(function (n) { n.classList.add('in'); });
})();
