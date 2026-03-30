/* ===== road.js — Interactive Road Trip Portfolio ===== */
(function () {
  'use strict';

  /* ── Data ──────────────────────────────────────────────────── */
  const EXPERIENCE_STOPS = [
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Full Stack Developer',
      subtitle: 'Astor A.Ş. · 09.2023 – Şimdi',
      body: 'ASP.NET WebApi, ASP.NET MVC, .NET Core, React.js frameworklerini kullanarak çeşitli web tabanlı uygulamalar ve COM uyumlu dinamik kütüphaneler geliştirmekteyim. Projelerin back-end ve front-end bölümlerinde aktif olarak geliştirme yaparken sunucu yönetim ve dağıtım işlemlerini başarı ile yürütüyorum.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'İleri Robotik Kodlama Eğitmeni',
      subtitle: 'T3 Vakfı · 04.2023 – 07.2023',
      body: 'Deneyap Türkiye Teknoloji Atölyelerinde teorik ve uygulamalı ileri robotik eğitimleri verdim. Öğrencilerle Esp32 üzerinde yazılım geliştirdik ve çeşitli projeler hayata geçirdik.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'BilgeAdam Boost Staj',
      subtitle: 'BilgeAdam · 11.2022 – 08.2023',
      body: 'C#, .NET, .NET Core, ASP.NET MVC, Web API, React.js, HTML, CSS, JavaScript, MS SQL, PostgreSQL gibi teknolojilerle yoğun staj deneyimi edindim.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Elektronik Programlama ve IoT Eğitmeni',
      subtitle: 'T3 Vakfı · 12.2022 – 04.2023',
      body: 'Deneyap Türkiye Teknoloji Atölyelerinde elektronik programlama ve Nesnelerin İnterneti eğitimleri verdim. Esp32, Arduino gibi geliştirme kartları üzerinde IoT projeleri geliştirdik.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Robotik Kodlama Eğitmeni',
      subtitle: 'T3 Vakfı · 09.2022 – 12.2022',
      body: 'Deneyap Türkiye Teknoloji Atölyelerinde teorik ve uygulamalı Robotik Kodlama eğitimleri verdim. Öğrencilerle LEGO® Education SPIKE kullanarak çeşitli algoritmalar geliştirdik.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Ar-Ge Mühendisi',
      subtitle: 'Radsan Elektromekanik A.Ş. · 06.2022 – 10.2022',
      body: 'Firmada çeşitli Ar-Ge projeleri geliştirdim. Robot kol programlama ve elektronik sistemleri üzerine çalışma fırsatı buldum.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Aday Mühendis',
      subtitle: 'Astor Enerji A.Ş. · 02.2022 – 06.2022',
      body: 'Firmada otomasyon sistemlerinin kurulması ve bakım onarım faaliyetlerinin yürütülmesinde aday mühendis olarak görev aldım.'
    },
    {
      type: 'work',
      label: 'Çalışma Deneyimi',
      title: 'Stajyer Mühendis',
      subtitle: 'Kastamonu Üniversitesi · 07.2021 – 08.2021',
      body: 'Üniversite dönemimde İnsansız Hava Aracı üreten geniş bir ekip içerisinde lider rolü üstlendim. Staj dönemim bittikten sonra projeye gönüllü olarak devam ettim.'
    },
    {
      type: 'education',
      label: 'Eğitim',
      title: 'Bilgisayar Mühendisliği Yüksek Lisans',
      subtitle: 'Konya Teknik Üniversitesi · 2023 – Şimdi',
      body: 'Tezli Yüksek Lisans programında eğitimime devam etmekteyim.'
    },
    {
      type: 'education',
      label: 'Eğitim',
      title: 'Bilgeadam Boost',
      subtitle: '2022 – 2023 · 600+ saat',
      body: '6 ay boyunca uygulama tabanlı Full-Stack Developer eğitimi aldım. C#, .NET Core, ASP.NET MVC, Web API, HTML, CSS, SCSS, JavaScript, React.js, MS SQL, PostgreSQL teknolojileriyle çalıştım.'
    },
    {
      type: 'education',
      label: 'Eğitim',
      title: 'Elektrik Elektronik Mühendisliği Lisans',
      subtitle: 'Kastamonu Üniversitesi · 2019 – 2022',
      body: 'Kastamonu Üniversitesi Elektrik Elektronik Mühendisliği Lisans programını tamamladım.'
    },
    {
      type: 'education',
      label: 'Eğitim',
      title: 'Web Tasarım ve Kodlama',
      subtitle: 'Anadolu Üniversitesi · 2020 – 2022',
      body: 'Anadolu Üniversitesi Web Tasarım ve Kodlama Ön Lisans programını tamamladım.'
    },
    {
      type: 'skills',
      label: 'Yetkinlikler',
      title: 'Teknik Beceriler',
      subtitle: 'Araçlar & Teknolojiler',
      isSkills: true
    }
  ];

  const SKILLS_TEXT = `{
  <span class="skills-key">"Frameworks"</span>:      <span class="skills-val">["ASP.Net WebApi", "ASP.Net MVC", ".Net Core", "React.js"]</span>,
  <span class="skills-key">"ORM"</span>:             <span class="skills-val">["Entity Framework", "Entity Framework Core"]</span>,
  <span class="skills-key">"Databases"</span>:       <span class="skills-val">["MS SQL Server", "PgAdmin 4", "Azure SQL Database"]</span>,
  <span class="skills-key">"IDE"</span>:             <span class="skills-val">["Visual Studio", "VS Code", "Clomosy IDE", "Arduino IDE"]</span>,
  <span class="skills-key">"Api_Testing"</span>:     <span class="skills-val">["Postman", "SwaggerUI"]</span>,
  <span class="skills-key">"Version_Control"</span>: <span class="skills-val">["Git", "GitHub", "Azure TFS"]</span>,
  <span class="skills-key">"Web_Design"</span>:      <span class="skills-val">["HTML", "CSS", "SCSS", "Bootstrap", "React Table"]</span>,
  <span class="skills-key">"Languages"</span>:       <span class="skills-val">["C#", "C", "JavaScript"]</span>,
  <span class="skills-key">"Methodology"</span>:     <span class="skills-val">["Agile Scrum", "Microsoft Azure DevOps"]</span>
}`;

  const PROJECT_STOPS = [
    {
      name: 'OD Eğitim Tanıtım Sitesi',
      desc: 'Eğitim sektöründeki faaliyetleri tanıtmak ve duyurmak için React kullanılarak geliştirilen web sitesi. Online ders içerikleri ve satın alma geliştirmeleri devam etmektedir.',
      link: 'https://odegitim.com.tr',
      isExternal: true
    },
    {
      name: 'GYM Member Ship DApp',
      desc: 'Kullanıcıların çeşitli spor salonlarına üye olabilecekleri ve üyeliklerini yönetebilecekleri merkeziyetsiz bir uygulama. Solidity ile yazılmış olup Scroll Sepolia testnet üzerinde çalışmaktadır.',
      link: 'https://github.com/Onur-Kose/GymMembershipDApp',
      isExternal: true
    },
    {
      name: 'Proje ve Tasarımcı Takip ve Planlama Programı API',
      desc: 'Astor Enerji için rol bazlı yetkilendirme ile sipariş yönetimi, tasarımcı atama ve planlama yapabilen kapsamlı API. Aktif olarak kullanılmakta ve sürekli güncellenmektedir.',
      link: 'contact.html',
      isExternal: false
    },
    {
      name: 'Proje ve Tasarımcı Takip ve Planlama Programı Ön Yüzü',
      desc: 'React.js ile geliştirilen bu ön yüz; admin, müdür, elektrik/mekanik ekip yöneticisi ve tasarım üyeleri için 7 farklı rol içermektedir. Axios, sweetAlert, toastify, scss ve timeline-chart kullanılmıştır.',
      link: 'contact.html',
      isExternal: false
    },
    {
      name: 'Bilge Adam Kampüs (Takım Çalışması)',
      desc: 'Agile Scrum metodolojisiyle geliştirilen öğrenci, öğretmen ve ders yönetim sistemi. .NET Web API + React.js + Onion Architecture + Entity Framework Core + Identity kullanılmıştır.',
      link: 'contact.html',
      isExternal: false
    },
    {
      name: 'İnsan Kaynakları Yönetim Programı (Takım Çalışması)',
      desc: 'Identity Framework + ASP.Net Core MVC + Azure DevOps + Entity Framework Core ile geliştirilen HR uygulaması. Admin, Yönetici ve Çalışan olmak üzere 3 farklı kullanıcı rolü bulunmaktadır.',
      link: 'contact.html',
      isExternal: false
    },
    {
      name: 'Kişisel Web Sayfası',
      desc: 'Kişisel bilgiler ve projeler hakkında bilgiler içeren ve düzenli olarak güncellenen kişisel portfolyo web sayfası.',
      link: 'https://onur-kose.github.io/',
      isExternal: true
    },
    {
      name: 'Blog Sitesi',
      desc: 'ASP.NET Core MVC Tasarım Deseni ile hazırlanmış, kullanıcıların içerik ekleyip silebildiği ve güncelleyebildiği blog uygulaması. Identity, MSSQL, Entity Framework ve Bootstrap kullanılmıştır.',
      link: 'https://github.com/Onur-Kose/Icaz.com',
      isExternal: true
    },
    {
      name: 'Diyet Takip Projesi',
      desc: 'Masaüstü uygulama olarak hazırlanmış; kullanıcı bilgilerini dikkate alarak günlük alınması gereken kaloriyi hesaplayan ve tüketilen besinlerin kalori miktarını takip eden uygulama.',
      link: 'https://github.com/DiyetisyenWinApp/DiyetApp',
      isExternal: true
    }
  ];

  const CONTACT_STOPS = [
    {
      label: 'İletişim',
      title: '📬 Benimle İletişime Geçin',
      subtitle: 'Projeler, iş birlikleri ve sorularınız için',
      body: 'Bana ulaşmanızı bekliyorum! E-posta veya formu kullanarak iletişime geçebilirsiniz.',
      link: 'contact.html'
    }
  ];

  /* ── State ─────────────────────────────────────────────────── */
  const state = {
    currentRoad: null,   // 'experience' | 'projects' | 'contact'
    currentStop: 0,
    visitedRoads: new Set(JSON.parse(localStorage.getItem('visitedRoads') || '[]')),
    roadActive: false,
    carMoving: false,
    drawerOpen: false
  };

  function saveVisited() {
    localStorage.setItem('visitedRoads', JSON.stringify([...state.visitedRoads]));
  }

  /* ── DOM refs ──────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);
  const portalScreen  = $('portal-screen');
  const roadScreen    = $('road-screen');
  const stopCard      = $('stop-card');
  const roadHud       = $('road-hud');
  const car           = $('car');
  const drawerOverlay = $('drawer-overlay');
  const sideDrawer    = $('side-drawer');
  const drawerTitle   = $('drawer-title');
  const drawerBody    = $('drawer-body');
  const drawerLink    = $('drawer-link');
  const drawerClose   = $('drawer-close');
  const flash         = $('transition-flash');
  const canvas        = $('road-canvas');

  /* ── Road Canvas (endless road) ────────────────────────────── */
  const ctx  = canvas.getContext('2d');
  let rAF    = null;
  let lineY  = 0;
  let roadRunning = false;

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function drawRoad(speed) {
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    // Road
    const roadW = Math.min(320, W * 0.55);
    const roadX = (W - roadW) / 2;
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(roadX, 0, roadW, H);

    // Road edges
    ctx.strokeStyle = '#f0c040';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(roadX, 0); ctx.lineTo(roadX, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(roadX + roadW, 0); ctx.lineTo(roadX + roadW, H); ctx.stroke();

    // Center dashed lines
    const dashH = 48, dashGap = 36;
    const total  = dashH + dashGap;
    ctx.fillStyle = '#f0c040';
    const startY = (lineY % total) - total;
    for (let y = startY; y < H + total; y += total) {
      ctx.fillRect(W / 2 - 3, y, 6, dashH);
    }

    if (roadRunning) lineY += speed;
  }

  function startRoadAnimation(speed = 3) {
    roadRunning = true;
    function loop() {
      drawRoad(speed);
      rAF = requestAnimationFrame(loop);
    }
    if (!rAF) loop();
  }

  function stopRoadAnimation() {
    roadRunning = false;
  }

  function slowRoad() {
    roadRunning = false;
    drawRoad(0);
  }

  /* ── Screens ────────────────────────────────────────────────── */
  function showPortal() {
    state.currentRoad = null;
    state.roadActive  = false;
    roadHud.classList.remove('visible');
    car.style.display = 'none';
    car.classList.remove('moving');
    stopRoadAnimation();
    cancelAnimationFrame(rAF);
    rAF = null;

    roadScreen.classList.remove('active');
    portalScreen.classList.add('active');
    updatePortalButtons();
    drawRoad(0);
  }

  function updatePortalButtons() {
    ['experience', 'projects', 'contact'].forEach(road => {
      const btn = document.querySelector(`[data-road="${road}"]`);
      if (btn) {
        if (state.visitedRoads.has(road)) {
          btn.classList.add('visited');
          btn.setAttribute('aria-label', `${btn.textContent.trim()} (Gezildi) ✓`);
        } else {
          btn.classList.remove('visited');
        }
      }
    });
  }

  function startRoad(road) {
    state.currentRoad = road;
    state.currentStop = 0;
    state.roadActive  = true;

    const labels = { experience: '🏢 Deneyimler Yolu', projects: '💼 Projeler Yolu', contact: '📬 İletişim Yolu' };
    roadHud.textContent = labels[road] || '';
    roadHud.classList.add('visible');

    portalScreen.classList.remove('active');
    roadScreen.classList.add('active');
    car.style.display = 'block';
    car.style.left = '50%';
    car.style.transform = 'translateX(-50%)';

    doFlash(() => {
      startRoadAnimation(3);
      car.classList.add('moving');
      setTimeout(() => {
        car.classList.remove('moving');
        stopRoadAnimation();
        showStop();
      }, 1200);
    });
  }

  /* ── Stop rendering ─────────────────────────────────────────── */
  function getStops() {
    if (state.currentRoad === 'experience') return EXPERIENCE_STOPS;
    if (state.currentRoad === 'projects')   return PROJECT_STOPS;
    if (state.currentRoad === 'contact')    return CONTACT_STOPS;
    return [];
  }

  function showStop() {
    const stops = getStops();
    const idx   = state.currentStop;

    stopCard.innerHTML = '';
    stopCard.className = 'stop-card';

    // Progress pips
    const pip = document.createElement('div');
    pip.className = 'stop-progress';
    const totalStops = stops.length + 1; // +1 for portal
    for (let i = 0; i <= stops.length; i++) {
      const p = document.createElement('div');
      p.className = 'stop-pip' + (i < idx ? ' done' : i === idx ? ' active' : '');
      pip.appendChild(p);
    }
    stopCard.appendChild(pip);

    // Portal stop (last)
    if (idx >= stops.length) {
      showPortalExit();
      return;
    }

    const stop = stops[idx];

    if (state.currentRoad === 'projects') {
      renderProjectStop(stop, idx);
    } else if (state.currentRoad === 'contact') {
      renderContactStop(stop);
    } else {
      renderExperienceStop(stop, idx);
    }

    // animate card
    stopCard.style.animation = 'none';
    void stopCard.offsetWidth;
    stopCard.style.animation = '';
  }

  function renderExperienceStop(stop, idx) {
    const label = document.createElement('div');
    label.className = 'stop-label';
    label.innerHTML = `<span class="stop-dot"></span>${stop.label} #${idx + 1}`;
    stopCard.appendChild(label);

    const title = document.createElement('div');
    title.className = 'stop-title';
    title.textContent = stop.title;
    stopCard.appendChild(title);

    const sub = document.createElement('div');
    sub.className = 'stop-subtitle';
    sub.textContent = stop.subtitle;
    stopCard.appendChild(sub);

    if (stop.isSkills) {
      const block = document.createElement('div');
      block.className = 'skills-block';
      block.innerHTML = SKILLS_TEXT;
      stopCard.appendChild(block);
    } else {
      const body = document.createElement('div');
      body.className = 'stop-body';
      body.textContent = stop.body;
      stopCard.appendChild(body);
    }

    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const next = document.createElement('button');
    next.className = 'btn-next';
    next.textContent = '▶ İlerle';
    next.setAttribute('aria-label', 'Sonraki durağa ilerle');
    next.addEventListener('click', advanceStop);
    actions.appendChild(next);
    stopCard.appendChild(actions);
  }

  function renderProjectStop(stop, idx) {
    const label = document.createElement('div');
    label.className = 'stop-label';
    label.innerHTML = `<span class="stop-dot" style="background:var(--accent2);box-shadow:0 0 8px var(--accent2)"></span>Proje #${idx + 1}`;
    stopCard.appendChild(label);

    const title = document.createElement('div');
    title.className = 'stop-title';
    title.textContent = stop.name;
    stopCard.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const open = document.createElement('button');
    open.className = 'btn-drawer';
    open.textContent = '🔍 Detayları Gör';
    open.setAttribute('aria-label', `${stop.name} proje detaylarını aç`);
    open.addEventListener('click', () => openDrawer(idx));
    actions.appendChild(open);

    const next = document.createElement('button');
    next.className = 'btn-next';
    next.textContent = '▶ İlerle';
    next.setAttribute('aria-label', 'Sonraki projeye ilerle');
    next.addEventListener('click', advanceStop);
    actions.appendChild(next);

    stopCard.appendChild(actions);
  }

  function renderContactStop(stop) {
    const label = document.createElement('div');
    label.className = 'stop-label';
    label.innerHTML = `<span class="stop-dot" style="background:#ff9944;box-shadow:0 0 8px #ff9944"></span>${stop.label}`;
    stopCard.appendChild(label);

    const title = document.createElement('div');
    title.className = 'stop-title';
    title.textContent = stop.title;
    stopCard.appendChild(title);

    const sub = document.createElement('div');
    sub.className = 'stop-subtitle';
    sub.textContent = stop.subtitle;
    stopCard.appendChild(sub);

    const body = document.createElement('div');
    body.className = 'stop-body';
    body.textContent = stop.body;
    stopCard.appendChild(body);

    const actions = document.createElement('div');
    actions.className = 'card-actions';

    const link = document.createElement('a');
    link.href = stop.link;
    link.className = 'btn-project-link contact-link';
    link.textContent = '📧 İletişim Sayfasına Git';
    link.setAttribute('aria-label', 'İletişim sayfasını aç');
    actions.appendChild(link);

    const next = document.createElement('button');
    next.className = 'btn-next';
    next.textContent = '▶ İlerle';
    next.setAttribute('aria-label', 'Portala ilerle');
    next.addEventListener('click', advanceStop);
    actions.appendChild(next);

    stopCard.appendChild(actions);
  }

  function showPortalExit() {
    const div = document.createElement('div');
    div.className = 'portal-exit-card';
    div.innerHTML = `
      <span class="portal-gate" aria-hidden="true">🌀</span>
      <h2>Yolun Sonu</h2>
      <p>Bu yolun tüm duraklarını tamamladın. Portala girerek ana kavşağa dön.</p>
    `;
    const btn = document.createElement('button');
    btn.className = 'btn-portal';
    btn.textContent = '🌀 Portala Gir';
    btn.setAttribute('aria-label', 'Ana portala dön');
    btn.addEventListener('click', exitViaPortal);
    div.appendChild(btn);
    stopCard.appendChild(div);
  }

  function advanceStop() {
    state.currentStop++;
    car.classList.add('moving');
    startRoadAnimation(4);
    setTimeout(() => {
      car.classList.remove('moving');
      stopRoadAnimation();
      showStop();
    }, 700);
  }

  function exitViaPortal() {
    state.visitedRoads.add(state.currentRoad);
    saveVisited();
    doFlash(() => {
      showPortal();
      if (state.visitedRoads.size >= 3) {
        setTimeout(launchConfetti, 400);
      }
    });
  }

  /* ── Drawer ─────────────────────────────────────────────────── */
  function openDrawer(idx) {
    const stop = PROJECT_STOPS[idx];
    if (!stop) return;

    drawerTitle.textContent = stop.name;
    drawerBody.textContent  = stop.desc;

    drawerLink.textContent = stop.isExternal ? '🚀 Projeye Git' : '📧 Proje Hakkında İletişim';
    drawerLink.href = stop.link;
    drawerLink.className = stop.isExternal ? 'btn-project-link' : 'btn-project-link contact-link';
    if (stop.isExternal) {
      drawerLink.target = '_blank';
      drawerLink.rel    = 'noopener noreferrer';
    } else {
      drawerLink.removeAttribute('target');
      drawerLink.removeAttribute('rel');
    }

    drawerOverlay.classList.add('open');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    sideDrawer.classList.add('open');
    sideDrawer.setAttribute('aria-hidden', 'false');
    state.drawerOpen = true;
    stopRoadAnimation();
    drawerClose.focus();
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('open');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    sideDrawer.classList.remove('open');
    sideDrawer.setAttribute('aria-hidden', 'true');
    state.drawerOpen = false;
  }

  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.drawerOpen) closeDrawer();
  });

  /* ── Confetti ───────────────────────────────────────────────── */
  function launchConfetti() {
    if (typeof confetti !== 'function') return;
    const end = Date.now() + 5000;
    (function fire() {
      confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors: ['#00ff88','#f0c040','#00ccff','#ff9944'] });
      confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors: ['#00ff88','#f0c040','#00ccff','#ff4466'] });
      if (Date.now() < end) requestAnimationFrame(fire);
    }());
  }

  /* ── Flash transition ───────────────────────────────────────── */
  function doFlash(cb) {
    flash.classList.add('flash');
    setTimeout(() => { flash.classList.remove('flash'); if (cb) cb(); }, 260);
  }

  /* ── Portal button wiring ───────────────────────────────────── */
  document.querySelectorAll('[data-road]').forEach(btn => {
    btn.addEventListener('click', () => {
      const road = btn.getAttribute('data-road');
      startRoad(road);
    });
  });

  /* ── Init ───────────────────────────────────────────────────── */
  showPortal();

}());
