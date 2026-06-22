/* ==========================================================================
   AltaMedicare - Interactive features
   ========================================================================== */

(function () {
  'use strict';

  /* Bret's SunFire consumer quoting/enrollment portal. Keep in sync with
     COMPARE_PLANS_URL in src/consts.ts (this static file can't import it). */
  const COMPARE_PLANS_URL = 'https://www.sunfirematrix.com/app/consumer/medicareadvocates/5454608/#/';

  /* ---------- SKIP TO CONTENT (injected site-wide) ---------- */
  if (!document.querySelector('.skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'skip-link';
    skip.textContent = 'Skip to content';
    document.body.insertBefore(skip, document.body.firstChild);

    // Mark the first major content region as the skip target
    const header = document.querySelector('.site-header');
    let target = header ? header.nextElementSibling : document.querySelector('section, main');
    while (target && target.tagName !== 'SECTION' && target.tagName !== 'MAIN') {
      target = target.nextElementSibling;
    }
    if (target) {
      if (!target.id) target.id = 'main-content';
      target.setAttribute('tabindex', '-1');
      skip.href = '#' + target.id;
    } else {
      skip.href = '#';
    }
  }

  /* ---------- STICKY MOBILE ACTION BAR (injected site-wide) ---------- */
  if (!document.querySelector('.mobile-action-bar')) {
    const phoneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>';
    const textIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';
    const calIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
    const enrollIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>';

    const bar = document.createElement('nav');
    bar.className = 'mobile-action-bar';
    bar.setAttribute('aria-label', 'Quick contact');
    bar.innerHTML =
      '<a href="tel:4352925548" class="mab-item mab-call">' + phoneIcon + 'Call</a>' +
      '<a href="sms:14352925548?body=Hi%20Bret%2C%20I%20have%20a%20question%20about%20Medicare." class="mab-item mab-text">' + textIcon + 'Text</a>' +
      '<a href="' + COMPARE_PLANS_URL + '" target="_blank" rel="noopener" class="mab-item mab-enroll">' + enrollIcon + 'Enroll</a>' +
      '<a href="contact.html" class="mab-item mab-schedule">' + calIcon + 'Schedule</a>';
    document.body.appendChild(bar);
  }

  /* ---------- DESKTOP "TEXT US" HEADER BUTTON (injected site-wide) ---------- */
  const headerCta = document.querySelector('.header-cta');
  const headerPhone = document.querySelector('.header-phone');
  if (headerCta && headerPhone && !headerCta.querySelector('.header-text')) {
    const textBtn = document.createElement('a');
    textBtn.className = 'header-text';
    textBtn.href = 'sms:14352925548?body=Hi%20Bret%2C%20I%20have%20a%20question%20about%20Medicare.';
    textBtn.setAttribute('aria-label', 'Text AltaMedicare');
    textBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>Text Us';
    headerPhone.insertAdjacentElement('afterend', textBtn);
  }

  /* ---------- "ENROLL" HEADER BUTTON → Sunfire shop-and-enroll portal (site-wide) ---------- */
  if (headerCta && !headerCta.querySelector('.header-enroll')) {
    const enrollBtn = document.createElement('a');
    enrollBtn.className = 'header-enroll';
    enrollBtn.href = COMPARE_PLANS_URL;
    enrollBtn.target = '_blank';
    enrollBtn.rel = 'noopener';
    enrollBtn.setAttribute('aria-label', 'Browse and enroll in a Medicare plan online');
    enrollBtn.textContent = 'Enroll';
    const menuToggle = headerCta.querySelector('.menu-toggle');
    if (menuToggle) headerCta.insertBefore(enrollBtn, menuToggle);
    else headerCta.appendChild(enrollBtn);
  }

  /* ---------- STICKY HEADER (shrink on scroll) ---------- */
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    const onScroll = () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- "QUESTIONS? TEXT BRET" BUBBLE (replaces Ask Bret chat) ---------- */
  const oldBubble = document.querySelector('.chat-bubble');
  const oldPanel = document.querySelector('.chat-panel');
  if (oldPanel) oldPanel.remove();
  if (oldBubble) {
    const newBubble = document.createElement('a');
    newBubble.className = 'chat-bubble';
    newBubble.href = 'sms:14352925548?body=Hi%20Bret%2C%20I%20have%20a%20question%20about%20Medicare.';
    newBubble.setAttribute('aria-label', 'Text Bret a question');
    newBubble.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' +
      '<span class="cb-text"><small>Questions?</small>Text Bret</span>';
    oldBubble.replaceWith(newBubble);
  }

  /* ---------- MOBILE NAV ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    const closeMenu = () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', () => {
      const expanded = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', expanded);
      // Lock background scroll while the full-height panel is open (matters on phones).
      document.body.style.overflow = expanded ? 'hidden' : '';
    });

    // Dropdown toggle while the hamburger menu is active (tracks the CSS breakpoint
    // via the toggle's visibility, so it stays correct if the breakpoint changes).
    document.querySelectorAll('.has-dropdown > a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (menuToggle.offsetParent !== null) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });

    // Close menu when clicking a real navigation link
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (a.parentElement.classList.contains('has-dropdown')) return;
        closeMenu();
      });
    });

    // Close on Escape, or when clicking outside the open panel.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('open')) closeMenu();
    });
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('open') &&
          !mainNav.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');

      // Close siblings within the same list
      const siblings = item.parentElement.querySelectorAll('.faq-item');
      siblings.forEach(s => s.classList.remove('open'));

      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- FAQ SEARCH FILTER ---------- */
  const faqSearch = document.querySelector('.faq-search input');
  if (faqSearch) {
    const faqList = faqSearch.closest('section') || document;
    const faqItems = faqList.querySelectorAll('.faq-item');
    let noResults = faqList.querySelector('.faq-no-results');

    faqSearch.addEventListener('input', () => {
      const q = faqSearch.value.trim().toLowerCase();
      let visible = 0;
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = q === '' || text.includes(q);
        item.hidden = !match;
        if (match) visible++;
      });
      if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    });
  }

  /* ---------- REVIEW SLIDER (auto-scroll, pause on hover) ---------- */
  const slider = document.querySelector('.review-slider');
  if (slider) {
    const slides = Array.from(slider.querySelectorAll('.review-slide'));
    const dots = Array.from(slider.querySelectorAll('.review-dot'));
    let current = 0;
    let timer = null;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
      dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
    }
    function start() {
      stop();
      timer = setInterval(() => show(current + 1), 6000);
    }
    function stop() { if (timer) clearInterval(timer); }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { show(idx); start(); });
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);

    if (slides.length > 1) { show(0); start(); }
  }

  /* ---------- MEDIA CARDS: play real video when a source is provided ---------- */
  // A card "goes live" only when data-yt (YouTube ID) or data-video (.mp4 path) is set.
  // Until then it shows the branded animated poster — never a broken box.
  function activateMedia(card) {
    if (!card) return false;
    const yt = (card.dataset.yt || '').trim();
    const mp4 = (card.dataset.video || '').trim();
    const poster = card.querySelector('.media-poster');
    if (yt) {
      const frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(yt) + '?autoplay=1&rel=0';
      frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      frame.setAttribute('allowfullscreen', '');
      frame.title = card.getAttribute('aria-label') || 'Video';
      if (poster) poster.remove();
      card.appendChild(frame);
      return true;
    }
    if (mp4) {
      const vid = document.createElement('video');
      vid.src = mp4;
      vid.controls = true;
      vid.autoplay = true;
      vid.muted = true;
      vid.playsInline = true;
      if (poster) poster.remove();
      card.appendChild(vid);
      return true;
    }
    return false; // no source yet — leave the poster in place
  }

  document.querySelectorAll('.media-card .media-play').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.media-card');
      if (!activateMedia(card)) {
        // No video uploaded yet — guide them to the next best action.
        window.location.href = 'sms:14352925548?body=Hi%20Bret%2C%20I%27d%20like%20to%20learn%20more%20about%20Medicare.';
      }
    });
  });

  /* ---------- HERO REEL: rotating captions + pause ---------- */
  const heroCaptionEl = document.querySelector('.hero-media .media-captions p');
  const heroPauseBtn = document.querySelector('.hero-media .media-pause');
  if (heroCaptionEl) {
    const captions = [
      'Turning 65 soon?',
      'Compare plans with confidence.',
      'Free, no-pressure Medicare guidance.',
      'Text us anytime — a real Utah agent replies.'
    ];
    let capIndex = 0;
    let capTimer = null;
    function rotate() {
      capIndex = (capIndex + 1) % captions.length;
      heroCaptionEl.style.opacity = '0';
      setTimeout(() => {
        heroCaptionEl.textContent = captions[capIndex];
        heroCaptionEl.style.opacity = '1';
      }, 320);
    }
    function startCaps() { stopCaps(); capTimer = setInterval(rotate, 3200); }
    function stopCaps() { if (capTimer) clearInterval(capTimer); capTimer = null; }
    startCaps();
    if (heroPauseBtn) {
      heroPauseBtn.addEventListener('click', () => {
        if (capTimer) { stopCaps(); heroPauseBtn.textContent = 'Play'; }
        else { startCaps(); heroPauseBtn.textContent = 'Pause'; }
      });
    }
  }

  /* ---------- EDUCATIONAL VIDEO CENTER: topic tabs ---------- */
  const videoTopics = document.querySelectorAll('.video-topic');
  const videoPlayer = document.getElementById('videoPlayer');
  if (videoTopics.length && videoPlayer) {
    const vTitle = document.getElementById('videoTitle');
    const vDesc = document.getElementById('videoDesc');
    const vTranscript = document.getElementById('videoTranscript');

    // Show the real YouTube thumbnail on the poster when a video ID is set, so the
    // card reads as a playable video while still staying a lite embed (the iframe
    // isn't created until the play button is clicked).
    function applyPosterThumb() {
      const poster = videoPlayer.querySelector('.media-poster');
      if (!poster) return;
      const yt = (videoPlayer.dataset.yt || '').trim();
      if (yt) {
        poster.style.backgroundImage =
          "linear-gradient(rgba(13,42,92,0.45), rgba(13,42,92,0.2)), " +
          "url('https://i.ytimg.com/vi/" + yt + "/hqdefault.jpg')";
        poster.style.backgroundSize = 'cover';
        poster.style.backgroundPosition = 'center';
        poster.classList.add('has-thumb');
      } else {
        poster.style.backgroundImage = '';
        poster.style.backgroundSize = '';
        poster.style.backgroundPosition = '';
        poster.classList.remove('has-thumb');
      }
    }

    function resetPlayer() {
      // Rebuild a fresh poster (drops any iframe/video from a previous topic)
      videoPlayer.querySelectorAll('iframe, video').forEach(el => el.remove());
      if (!videoPlayer.querySelector('.media-poster')) {
        const poster = document.createElement('div');
        poster.className = 'media-poster';
        poster.innerHTML =
          '<span class="media-badge">Medicare 101</span>' +
          '<button class="media-play" type="button" aria-label="Play this video">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>' +
          '<span class="media-watch"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg> Watch the video</span>';
        videoPlayer.appendChild(poster);
        poster.querySelector('.media-play').addEventListener('click', () => {
          if (!activateMedia(videoPlayer)) {
            window.location.href = 'sms:14352925548?body=Hi%20Bret%2C%20I%27d%20like%20to%20learn%20more%20about%20Medicare.';
          }
        });
      }
      applyPosterThumb();
    }

    // Apply the thumbnail to the server-rendered poster on first load.
    applyPosterThumb();

    videoTopics.forEach(topic => {
      topic.addEventListener('click', () => {
        videoTopics.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        topic.classList.add('active');
        topic.setAttribute('aria-selected', 'true');

        if (vTitle) vTitle.textContent = topic.dataset.title || '';
        if (vDesc) vDesc.textContent = topic.dataset.desc || '';
        if (vTranscript && topic.dataset.transcript) vTranscript.href = topic.dataset.transcript;

        // Carry this topic's video source onto the player, then reset it
        videoPlayer.dataset.yt = topic.dataset.yt || '';
        videoPlayer.dataset.video = topic.dataset.video || '';
        videoPlayer.setAttribute('aria-label', topic.dataset.title || 'Educational video');
        resetPlayer();
      });
    });
  }

  /* ---------- LATEST ARTICLES CAROUSEL ---------- */
  const articlesTrack = document.getElementById('articlesTrack');
  const articlesPrev = document.getElementById('articlesPrev');
  const articlesNext = document.getElementById('articlesNext');
  if (articlesTrack && articlesPrev && articlesNext) {
    const step = () => {
      const card = articlesTrack.querySelector('.article-card');
      const gap = 22;
      return card ? card.getBoundingClientRect().width + gap : 340;
    };
    const updateBtns = () => {
      const maxScroll = articlesTrack.scrollWidth - articlesTrack.clientWidth - 2;
      articlesPrev.disabled = articlesTrack.scrollLeft <= 2;
      articlesNext.disabled = articlesTrack.scrollLeft >= maxScroll;
    };
    articlesPrev.addEventListener('click', () => articlesTrack.scrollBy({ left: -step(), behavior: 'smooth' }));
    articlesNext.addEventListener('click', () => articlesTrack.scrollBy({ left: step(), behavior: 'smooth' }));
    articlesTrack.addEventListener('scroll', updateBtns, { passive: true });
    updateBtns();
  }

  /* ---------- ENROLLMENT LINK — single config point ----------
     Paste Bret's online enrollment / quoting portal URL below (SunFire, Connecture,
     Integrity, Ritter, HealthSherpa, MedicareCENTER, FMO portal, etc.).
     Every "Enroll Online" link updates automatically. Leave '' to fall back to contact.html. */
  const ENROLL_URL = '';
  if (ENROLL_URL) {
    document.querySelectorAll('[data-enroll]').forEach(a => {
      a.setAttribute('href', ENROLL_URL);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    });
  }

  /* ---------- MEDICARE COST ESTIMATOR ---------- */
  const estimatorModal = document.getElementById('costEstimator');
  if (estimatorModal) {
    // 2025 CMS figures — UPDATE ANNUALLY. Educational estimate only, not a quote.
    // Each bracket: income up to `upTo` → total monthly Part B premium + Part D IRMAA add-on.
    const EST = {
      standardPartB: 185.00,
      single: [
        { upTo: 106000, partB: 185.00, partD: 0 },
        { upTo: 133000, partB: 259.00, partD: 13.70 },
        { upTo: 167000, partB: 370.00, partD: 35.30 },
        { upTo: 200000, partB: 480.90, partD: 57.00 },
        { upTo: 500000, partB: 591.90, partD: 78.60 },
        { upTo: Infinity, partB: 628.90, partD: 85.80 }
      ],
      married: [
        { upTo: 212000, partB: 185.00, partD: 0 },
        { upTo: 266000, partB: 259.00, partD: 13.70 },
        { upTo: 334000, partB: 370.00, partD: 35.30 },
        { upTo: 400000, partB: 480.90, partD: 57.00 },
        { upTo: 750000, partB: 591.90, partD: 78.60 },
        { upTo: Infinity, partB: 628.90, partD: 85.80 }
      ],
      medigap: [120, 220],  // typical Plan G monthly range
      partD: [0, 60]        // typical standalone Part D range
    };

    const form = document.getElementById('estimatorForm');
    const resultsEl = document.getElementById('estimatorResults');
    const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
    const TEXT_LINK = 'sms:14352925548?body=Hi%20Bret%2C%20can%20you%20help%20me%20understand%20my%20Medicare%20costs%3F';
    let lastEstimate = null;

    function openEstimator() { estimatorModal.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeEstimator() { estimatorModal.classList.remove('open'); document.body.style.overflow = ''; }

    document.querySelectorAll('[data-estimator]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); openEstimator(); });
    });
    estimatorModal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeEstimator));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && estimatorModal.classList.contains('open')) closeEstimator();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const filing = document.getElementById('estFiling').value;
      const income = parseFloat(document.getElementById('estIncome').value) || 0;
      const brackets = EST[filing] || EST.single;
      const b = brackets.find(x => income <= x.upTo) || brackets[brackets.length - 1];
      const hasIrmaa = b.partB > EST.standardPartB;
      const lo = b.partB + b.partD + EST.medigap[0] + EST.partD[0];
      const hi = b.partB + b.partD + EST.medigap[1] + EST.partD[1];
      lastEstimate = { filing, income, b, hasIrmaa, lo, hi };

      let html = '';
      if (hasIrmaa) {
        html += '<div class="est-irmaa"><strong>Heads up:</strong> your income may trigger IRMAA — an income-based surcharge added to Part&nbsp;B and Part&nbsp;D. Bret can help you plan around it.</div>';
      }
      html += '<div class="est-line"><span>Part B premium' + (hasIrmaa ? ' (incl. IRMAA)' : '') + '</span><span class="est-val">' + money(b.partB) + '/mo</span></div>';
      if (b.partD > 0) {
        html += '<div class="est-line"><span>Part D income surcharge (IRMAA)</span><span class="est-val">+' + money(b.partD) + '/mo</span></div>';
      }
      html += '<div class="est-line"><span>Typical Medigap (Plan G)</span><span class="est-val">' + money(EST.medigap[0]) + '–' + money(EST.medigap[1]) + '/mo</span></div>';
      html += '<div class="est-line"><span>Typical Part D drug plan</span><span class="est-val">' + money(EST.partD[0]) + '–' + money(EST.partD[1]) + '/mo</span></div>';

      // Part A — informational only, not a calculation
      html += '<div class="est-note"><strong>Medicare Part A:</strong> most people pay <strong>$0/month</strong> because they (or a spouse) paid Medicare taxes while working. If a premium applies, Bret can explain your options.</div>';

      // Typical coverage paths
      html += '<h4 class="est-subhead">Typical coverage paths</h4>';
      html += '<div class="est-path"><div class="est-path-head"><span>Original Medicare + Plan&nbsp;G + Part&nbsp;D</span><span class="est-val">' + money(lo) + '–' + money(hi) + '/mo</span></div>' +
              '<p>Predictable costs and the freedom to see any doctor that accepts Medicare.</p></div>';
      html += '<div class="est-path"><div class="est-path-head"><span>Medicare Advantage</span><span class="est-val">' + money(b.partB) + '/mo + copays</span></div>' +
              '<p>You still pay your Part&nbsp;B premium, but many Medicare Advantage plans add <strong>$0</strong> in monthly premium — copays and benefits vary by county.</p>' +
              '<a href="https://www.medicare.gov/plan-compare/" target="_blank" rel="noopener" class="btn btn-primary btn-sm" data-est-link>Compare Plans</a></div>';

      // Still have questions — save + talk to Bret
      html += '<div class="est-cta"><h4 class="est-subhead">Still have questions?</h4>' +
              '<p>Save this estimate and talk with a licensed Utah agent — free, no pressure.</p>' +
              '<div class="est-cta-btns">' +
              '<a href="tel:4352925548" class="btn btn-secondary" data-est-link>Call</a>' +
              '<a href="' + TEXT_LINK + '" class="btn btn-primary" data-est-link>Text</a>' +
              '<a href="contact.html" class="btn btn-outline" data-est-link>Schedule</a>' +
              '<button type="button" class="btn btn-outline" data-print-estimate>Print / Save as PDF</button>' +
              '</div></div>';

      // Related resources — the ecosystem
      html += '<h4 class="est-subhead">Related resources</h4><div class="est-resources">' +
              '<a class="search-result" href="index.html#videos" data-est-link><span class="sr-badge type-video">Video</span><span class="sr-title">Understanding Medicare Costs</span></a>' +
              '<a class="search-result" href="medicare-basics.html" data-est-link><span class="sr-badge type-article">Article</span><span class="sr-title">How IRMAA Works</span></a>' +
              '<a class="search-result" href="index.html#faq" data-est-link><span class="sr-badge type-faq">FAQ</span><span class="sr-title">What if my income changes?</span></a>' +
              '<a class="search-result" href="index.html#tools" data-est-link><span class="sr-badge type-tool">Tool</span><span class="sr-title">Drug Cost Calculator</span></a>' +
              '</div>';

      resultsEl.innerHTML = html;
      resultsEl.hidden = false;
    });

    // Print / Save-as-PDF and resource-link handling (delegated)
    resultsEl.addEventListener('click', (e) => {
      if (e.target.closest('[data-print-estimate]')) { e.preventDefault(); printEstimate(); return; }
      if (e.target.closest('[data-est-link]')) closeEstimator();
    });

    function printEstimate() {
      if (!lastEstimate) return;
      const d = lastEstimate;
      const row = (label, val) => '<tr><td>' + label + '</td><td class="r">' + val + '</td></tr>';
      const win = window.open('', '_blank', 'width=720,height=900');
      if (!win) return;
      win.document.write(
        '<!doctype html><html><head><meta charset="utf-8"><title>AltaMedicare — Medicare Cost Estimate</title>' +
        '<style>body{font-family:Inter,Arial,sans-serif;color:#0f172a;max-width:640px;margin:32px auto;padding:0 20px;line-height:1.6}' +
        'h1{color:#0f766e;font-size:1.4rem;margin:0 0 4px}.sub{color:#64748b;margin:0 0 18px}' +
        'table{width:100%;border-collapse:collapse;margin:10px 0}td{padding:9px 0;border-bottom:1px solid #e2e8f0}.r{text-align:right;font-weight:700}' +
        '.total td{border-top:2px solid #cbd5e1;border-bottom:0;font-size:1.1rem}' +
        '.note{background:#f1f5f9;padding:12px 14px;border-radius:8px;font-size:.9rem;margin:14px 0}' +
        '.disc{color:#64748b;font-size:.8rem;margin-top:22px}a{color:#0f766e}</style></head><body>' +
        '<h1>AltaMedicare — Medicare Cost Estimate</h1>' +
        '<p class="sub">Educational estimate · 2025 figures · ' + (d.filing === 'married' ? 'Married filing jointly' : 'Single / Head of household') + (d.income ? ' · income ~' + money(d.income) : '') + '</p>' +
        '<table>' +
        row('Part B premium' + (d.hasIrmaa ? ' (incl. IRMAA)' : ''), money(d.b.partB) + '/mo') +
        (d.b.partD > 0 ? row('Part D IRMAA surcharge', '+' + money(d.b.partD) + '/mo') : '') +
        row('Typical Medigap (Plan G)', money(EST.medigap[0]) + '–' + money(EST.medigap[1]) + '/mo') +
        row('Typical Part D drug plan', money(EST.partD[0]) + '–' + money(EST.partD[1]) + '/mo') +
        '<tr class="total"><td>Estimated total</td><td class="r">' + money(d.lo) + '–' + money(d.hi) + '/mo</td></tr>' +
        '</table>' +
        '<div class="note"><strong>Medicare Part A:</strong> most people pay $0/month.</div>' +
        '<p><strong>Questions?</strong> Call or text Bret Swope, licensed Utah agent: <a href="tel:4352925548">(435) 292-5548</a></p>' +
        '<p class="disc">Educational estimate based on 2025 figures. Not a quote. Actual premiums and plan costs vary by location, age, income, and the coverage you choose.</p>' +
        '</body></html>'
      );
      win.document.close();
      win.focus();
      win.print();
    }
  }

  /* ---------- UNIVERSAL MEDICARE SEARCH (hero + site-wide modal) ---------- */
  (function initSearch() {
    const SEARCH_INDEX = [
      { t: 'Can I keep my doctor?', type: 'faq', url: 'index.html#faq', k: 'doctor provider network keep physician specialist' },
      { t: 'What does Medicare cost?', type: 'faq', url: 'index.html#faq', k: 'cost price premium part b how much money expensive' },
      { t: 'What happens when I turn 65?', type: 'faq', url: 'turning-65.html', k: 'turning 65 enrollment eligible initial age birthday when start sign up' },
      { t: 'Can I change plans later?', type: 'faq', url: 'index.html#faq', k: 'change switch plan annual enrollment aep later' },
      { t: 'Are prescriptions covered?', type: 'faq', url: 'prescription-drug-plans.html', k: 'prescription drug part d medication pharmacy covered' },
      { t: 'Advantage vs Supplement', type: 'faq', url: 'index.html#faq', k: 'advantage supplement medigap difference compare vs versus which better' },
      { t: 'Medicare Advantage Plans', type: 'service', url: 'medicare-advantage.html', k: 'advantage part c bundled all in one dental vision' },
      { t: 'Medicare Supplement (Medigap)', type: 'service', url: 'medicare-supplement.html', k: 'supplement medigap predictable any doctor' },
      { t: 'Prescription Drug Plans', type: 'service', url: 'prescription-drug-plans.html', k: 'part d prescription drug formulary pharmacy' },
      { t: 'Dual Eligible / Medicaid', type: 'service', url: 'dual-eligible.html', k: 'dual eligible medicaid low income help extra' },
      { t: 'Dental, Vision & Hearing', type: 'service', url: 'dental-vision-hearing.html', k: 'dental vision hearing aids glasses teeth' },
      { t: 'Drug Savings Review', type: 'service', url: 'drug-savings.html', k: 'drug savings lower prescription cost review pharmacy' },
      { t: 'Medicare Basics Explained', type: 'article', url: 'medicare-basics.html', k: 'basics parts a b c d explained beginner start new' },
      { t: 'Turning 65 Checklist', type: 'article', url: 'turning-65.html', k: 'turning 65 checklist enrollment timeline penalty what do month' },
      { t: 'Enrollment Periods Explained', type: 'article', url: 'medicare-basics.html', k: 'enrollment period iep aep sep when sign up deadline window' },
      { t: 'Latest Medicare News & Updates', type: 'article', url: 'medicare-news.html', k: 'news updates 2026 2027 changes scam alert insulin cap' },
      { t: 'About Bret Swope', type: 'article', url: 'about.html', k: 'bret swope about agent advisor meet who licensed' },
      { t: 'Video: Understanding Parts A, B, C & D', type: 'video', url: 'index.html#videos', k: 'video watch parts a b c d explained basics medicare 101' },
      { t: 'Video: Advantage vs Supplement', type: 'video', url: 'index.html#videos', k: 'video watch advantage supplement medigap difference compare' },
      { t: 'Video: When Can I Enroll?', type: 'video', url: 'index.html#videos', k: 'video watch enroll enrollment when period turning 65 sign up' },
      { t: 'Video: Can I Keep My Doctor?', type: 'video', url: 'index.html#videos', k: 'video watch doctor keep network provider' },
      { t: 'Video: Prescription Drug Plans', type: 'video', url: 'index.html#videos', k: 'video watch prescription drug part d plan pharmacy ozempic lipitor eliquis jardiance metformin insulin medication brand' },
      { t: 'Drug Cost Calculator', type: 'tool', url: 'index.html#tools', k: 'prescription prescriptions drug cost calculator compare plans medication estimate part d price how much money tool plan finder ozempic lipitor eliquis jardiance xarelto metformin insulin trulicity' },
      { t: 'Shop & Enroll Online', type: 'tool', url: 'index.html#tools', k: 'enroll online shop compare plans enrollment sign up apply secure self do it myself tool view' },
      { t: 'Doctor Network Search', type: 'tool', url: 'index.html#tools', k: 'doctor provider network search find physician specialist keep my doctor care compare in network tool' },
      { t: 'Medicare Cost Estimator', type: 'tool', url: 'index.html#tools', k: 'cost estimate estimator how much does medicare cost part b premium irmaa high income surcharge medigap budget calculator tool monthly what will i pay' },
      { t: 'Turning 65 Timeline Tool', type: 'tool', url: 'turning-65.html', k: 'turning 65 timeline tool when enroll birthday before after steps' },
      { t: 'Does Medicare cover my medications?', type: 'faq', url: 'prescription-drug-plans.html', k: 'cover covered medication drug ozempic lipitor eliquis jardiance formulary does medicare part d prescription' },
      { t: 'Text Bret (licensed Utah agent)', type: 'contact', url: 'sms:14352925548?body=Hi%20Bret%2C%20I%20have%20a%20question%20about%20Medicare.', k: 'contact text message bret call phone talk licensed agent help human' }
    ];
    const TYPE_LABEL = { tool: 'Tool', faq: 'FAQ', service: 'Plan', video: 'Video', article: 'Article', contact: 'Contact' };
    const GROUP_LABEL = { tool: 'Tools', faq: 'FAQs', service: 'Plans', video: 'Videos', article: 'Articles', contact: 'Contact' };
    const POPULAR = ['Drug cost calculator', 'Enroll online', 'Turning 65', 'Can I keep my doctor?', 'Compare plans'];
    const STOP = { the: 1, and: 1, for: 1, are: 1, can: 1, you: 1, what: 1, when: 1, how: 1, why: 1, with: 1, that: 1, this: 1, your: 1, does: 1, should: 1, about: 1, will: 1, have: 1 };

    // Natural-language scoring: rank items by how many query words appear in title + keywords
    function matches(q) {
      q = q.trim().toLowerCase();
      if (!q) return [];
      const words = q.split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP[w]);
      if (!words.length) return [];
      return SEARCH_INDEX
        .map(item => {
          const hay = (item.t + ' ' + item.k).toLowerCase();
          let score = 0;
          words.forEach(w => { if (hay.includes(w)) score++; });
          if (item.t.toLowerCase().includes(q)) score += 3;
          return { item, score };
        })
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(s => s.item);
    }

    function resultsHTML(q) {
      const m = matches(q);
      if (!m.length) {
        return '<div class="search-empty">No matches yet. <a href="contact.html">Ask Bret directly &rarr;</a></div>';
      }
      const order = ['tool', 'faq', 'service', 'video', 'article', 'contact'];
      return order.map(type => {
        const items = m.filter(x => x.type === type);
        if (!items.length) return '';
        const label = GROUP_LABEL[type] || type;
        return '<div class="search-group-label">' + label + '</div>' +
          items.map(x =>
            '<a class="search-result" href="' + x.url + '">' +
            '<span class="sr-badge type-' + x.type + '">' + TYPE_LABEL[x.type] + '</span>' +
            '<span class="sr-title">' + x.t + '</span></a>'
          ).join('');
      }).join('');
    }

    /* --- Hero inline search (homepage) --- */
    const heroInput = document.querySelector('.site-search input');
    if (heroInput) {
      const wrap = heroInput.closest('.site-search');
      const dd = document.createElement('div');
      dd.className = 'search-results';
      wrap.appendChild(dd);
      const update = () => {
        if (!heroInput.value.trim()) { dd.classList.remove('open'); dd.innerHTML = ''; return; }
        dd.innerHTML = resultsHTML(heroInput.value);
        dd.classList.add('open');
      };
      heroInput.addEventListener('input', update);
      heroInput.addEventListener('focus', () => { if (heroInput.value.trim()) update(); });
      document.addEventListener('click', (e) => { if (!e.target.closest('.site-search')) dd.classList.remove('open'); });
      heroInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { dd.classList.remove('open'); heroInput.blur(); } });

      // Clickable example chips beneath the hero search
      document.querySelectorAll('.search-example').forEach(chip => {
        chip.addEventListener('click', () => {
          heroInput.value = chip.dataset.q || chip.textContent;
          heroInput.focus();
          update();
        });
      });
    }

    /* --- Site-wide Spotlight-style modal --- */
    const searchIconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';

    // Inject compact header trigger (before the phone link → 🔍 Search · Call · Text · Schedule)
    const headerCtaEl = document.querySelector('.header-cta');
    const phoneEl = document.querySelector('.header-phone');
    if (headerCtaEl && phoneEl && !headerCtaEl.querySelector('.header-search-btn')) {
      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'header-search-btn';
      trigger.setAttribute('aria-label', 'Search the site');
      trigger.innerHTML = searchIconSvg + '<span>Search</span>';
      phoneEl.insertAdjacentElement('beforebegin', trigger);
    }

    // Build the modal once
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Search AltaMedicare');
    modal.innerHTML =
      '<div class="search-modal-backdrop"></div>' +
      '<div class="search-modal-panel">' +
        '<button class="search-modal-close" aria-label="Close search">&times;</button>' +
        '<h2 class="search-modal-title">Ask a Medicare Question</h2>' +
        '<div class="search-modal-field">' + searchIconSvg +
          '<input type="text" autocomplete="off" aria-label="Search" placeholder="e.g. I&rsquo;m turning 65 next month — what do I do?" />' +
        '</div>' +
        '<div class="search-modal-popular">' +
          '<p class="search-popular-label">Popular searches</p>' +
          '<div class="search-chips">' +
            POPULAR.map(p => '<button type="button" class="search-chip">' + p + '</button>').join('') +
          '</div>' +
        '</div>' +
        '<div class="search-modal-results"></div>' +
      '</div>';
    document.body.appendChild(modal);

    const modalInput = modal.querySelector('input');
    const modalResults = modal.querySelector('.search-modal-results');
    const modalPopular = modal.querySelector('.search-modal-popular');

    function modalUpdate() {
      const q = modalInput.value.trim();
      if (!q) {
        modalResults.innerHTML = '';
        modalPopular.style.display = '';
        return;
      }
      modalPopular.style.display = 'none';
      modalResults.innerHTML = resultsHTML(q);
    }
    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      modalInput.value = '';
      modalUpdate();
      setTimeout(() => modalInput.focus(), 60);
    }
    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
      if (e.target.closest('.header-search-btn')) { e.preventDefault(); openModal(); }
    });
    modal.querySelector('.search-modal-close').addEventListener('click', closeModal);
    modal.querySelector('.search-modal-backdrop').addEventListener('click', closeModal);
    modalInput.addEventListener('input', modalUpdate);
    modal.querySelectorAll('.search-chip').forEach(chip => {
      chip.addEventListener('click', () => { modalInput.value = chip.textContent; modalInput.focus(); modalUpdate(); });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
      // Power-user shortcut: Cmd/Ctrl+K opens search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openModal(); }
    });
  })();

  /* ---------- MEDICARE QUIZ ---------- */
  const quizQuestions = [
    {
      q: 'When are you turning 65 (or have already)?',
      options: [
        'Within 3 months',
        'Already 65 or older',
        'More than 3 months away',
        "I'm helping a family member"
      ]
    },
    {
      q: 'What matters most to you in a Medicare plan?',
      options: [
        'Lowest monthly cost',
        'Predictable costs even if I get sick',
        'Extra benefits like dental & vision',
        "I'm not sure yet"
      ]
    },
    {
      q: 'How would you describe your prescription drug needs?',
      options: [
        'I take several medications',
        'I take 1–2 medications',
        'I take none right now',
        "I'm not sure"
      ]
    },
    {
      q: 'Do you want flexibility to see any doctor nationwide?',
      options: [
        'Yes, that flexibility matters to me',
        'No, a network is fine if costs are lower',
        "I'm not sure"
      ]
    },
    {
      q: 'Do you currently receive Medicaid or other low-income help?',
      options: [
        'Yes',
        'No',
        "I'm not sure — I'd like to check"
      ]
    }
  ];

  const quizContainer = document.querySelector('.quiz-container');
  if (quizContainer) {
    let currentQ = 0;
    const answers = [];

    function renderQuiz() {
      const total = quizQuestions.length;
      const progressPct = (currentQ / total) * 100;

      if (currentQ < total) {
        const q = quizQuestions[currentQ];
        quizContainer.innerHTML = `
          <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progressPct}%"></div></div>
          <div class="quiz-question active">
            <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">Question ${currentQ + 1} of ${total}</div>
            <h3>${q.q}</h3>
            <div class="quiz-options">
              ${q.options.map((opt, i) => `<button class="quiz-option" data-answer="${i}">${opt}</button>`).join('')}
            </div>
          </div>
        `;

        quizContainer.querySelectorAll('.quiz-option').forEach(btn => {
          btn.addEventListener('click', () => {
            answers.push(parseInt(btn.dataset.answer, 10));
            currentQ++;
            renderQuiz();
          });
        });
      } else {
        // Render result
        quizContainer.innerHTML = `
          <div class="quiz-progress"><div class="quiz-progress-bar" style="width:100%"></div></div>
          <div class="quiz-result active">
            <div style="font-size: 3rem; margin-bottom: 10px;">✓</div>
            <h3>Thanks — you're a great fit for a personal Medicare review.</h3>
            <p style="color:var(--charcoal-soft); margin-bottom:24px;">
              Based on your answers, Bret can walk you through the options that may make the most sense
              for your situation. There's no cost and no pressure — just clear guidance.
            </p>
            <a href="contact.html" class="btn btn-primary btn-lg">Schedule a Free Consultation</a>
            <div style="margin-top:18px;">
              <a href="tel:4352925548" style="font-weight:600; font-size:1.1rem;">or call (435) 292-5548</a>
            </div>
            <button id="restartQuiz" style="margin-top:24px; background:none; border:0; color:var(--mountain-blue); cursor:pointer; text-decoration:underline; font-family:inherit; font-size:0.95rem;">Restart quiz</button>
          </div>
        `;
        const restart = document.getElementById('restartQuiz');
        if (restart) {
          restart.addEventListener('click', () => {
            currentQ = 0;
            answers.length = 0;
            renderQuiz();
          });
        }
      }
    }
    renderQuiz();
  }

  /* ---------- UTAH CITY MAP ---------- */
  const cityList = document.querySelectorAll('.city-list li');
  cityList.forEach(li => {
    li.addEventListener('click', () => {
      cityList.forEach(c => c.classList.remove('active'));
      li.classList.add('active');
      const cityName = li.dataset.city;
      const dot = document.querySelector(`.city-dot[data-city="${cityName}"]`);
      if (dot) {
        document.querySelectorAll('.city-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });

  /* ---------- INTERSECTION FADE-IN ---------- */
  const observerOpts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.card, .news-card, .testimonial, .timeline-item, .blog-card').forEach(el => {
    observer.observe(el);
  });

  /* ---------- HIGHLIGHT ACTIVE NAV LINK ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

})();
