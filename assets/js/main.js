(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ---------- Menu móvel ---------- */
  var burger = $(".burger"), menu = $("#menu"), bar = $(".bar");
  // Com o menu aberto, o resto da página sai da ordem de foco.
  var behind = [$("main"), $(".cues"), $(".skip")];
  function setMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (open) { menu.hidden = false; requestAnimationFrame(function () { menu.classList.add("is-open"); }); }
    else { menu.classList.remove("is-open"); }
    behind.forEach(function (el) { if (el) el.inert = open; });
    root.classList.toggle("is-locked", open);
    root.classList.toggle("is-menu", open);
    if (open) { var f = $("a", menu); if (f) f.focus({ preventScroll: true }); }
  }
  // Cabeçalho ganha chão opaco depois do primeiro movimento de rolagem (no celular o texto passa por baixo dele).
  var ticking = false;
  function onScroll() { if (ticking) return; ticking = true; requestAnimationFrame(function () { bar.classList.toggle("is-scrolled", window.scrollY > 24); ticking = false; }); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { setMenu(false); burger.focus(); }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", function (m) { if (m.matches) setMenu(false); });

  /* ---------- Abas de especialidades ---------- */
  var tabs = $("[data-tabs]");
  if (tabs) {
    var tbs = $$('[role="tab"]', tabs), pans = $$('[role="tabpanel"]', tabs), figs = $$(".proj__img"), cap = $(".proj__cap");
    var pick = function (i, focus) {
      tbs.forEach(function (t, k) { t.setAttribute("aria-selected", String(k === i)); t.tabIndex = k === i ? 0 : -1; });
      pans.forEach(function (p, k) { p.hidden = k !== i; });
      // Cada aba mostra só a sua prova; Cobertura não tem foto e mostra o convite para enviar uma.
      var want = pans[i].getAttribute("data-img"), text = "";
      figs.forEach(function (el) {
        var on = el.getAttribute("data-for") === want;
        el.classList.toggle("is-on", on);
        if (on) text = el.getAttribute("data-cap") || "";
      });
      cap.textContent = text;
      cap.hidden = !text;
      if (focus) tbs[i].focus();
    };
    tbs.forEach(function (t, i) {
      t.addEventListener("click", function () { pick(i); });
      t.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = (i + 1) % tbs.length;
        if (e.key === "ArrowLeft") n = (i - 1 + tbs.length) % tbs.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = tbs.length - 1;
        if (n !== null) { e.preventDefault(); pick(n, true); }
      });
    });
  }

  /* ---------- Galeria ampliada ---------- */
  var frames = [
    { src: "assets/img/religioso-a-1600.webp", w: 1600, h: 2133, t: "Fechamento religioso", d: "Detalhe do rosto e da coroa de espinhos. Enquadramento 1 de 2.", alt: "Detalhe do ombro tatuado: rosto com coroa de espinhos, cruz e raios de luz." },
    { src: "assets/img/religioso-b-1600.webp", w: 1600, h: 2133, t: "Fechamento religioso", d: "A composição completa no braço. Enquadramento 2 de 2.", alt: "Braço completo tatuado em realismo religioso: rosto, cruz, olho e águia." },
    { src: "assets/img/oriental-1080.webp", w: 1080, h: 1350, t: "Fechamento oriental", d: "Samurai, máscara, dragão e flores.", alt: "Fechamento de braço oriental em preto e cinza: samurai, máscara, dragão e flores." },
    { src: "assets/img/leao-caveira-lobo-1600.webp", w: 1600, h: 1945, t: "Leão, caveira e lobo", d: "Composição extensa, com detalhes em azul.", alt: "Fechamento de braço com leão, caveira com detalhes em azul, montanhas e lobo." },
    { src: "assets/img/mulher-lobo-1600.webp", w: 1600, h: 2133, t: "Mulher-lobo", d: "Retrato em realismo, com o olhar como foco.", alt: "Retrato de mulher com capuz de lobo tatuado no braço, olhos azuis, lua e montanhas." },
    { src: "assets/img/lettering-perna.webp", w: 470, h: 1024, t: "Fechamento em lettering", d: "Perna inteira, letras góticas e cursivas.", alt: "Perna inteira fechada com lettering em preto, letras góticas e cursivas sobre faixas sombreadas." },
    { src: "assets/img/cob-espartano-braco-agora.webp", w: 405, h: 630, t: "Espartano no braço", d: "Cobertura de uma carpa antiga: o trabalho pronto. Foto 1 de 2.", alt: "Elmo de guerreiro espartano em realismo preto e cinza no braço." },
    { src: "assets/img/cob-espartano-braco-antes.webp", w: 313, h: 362, t: "Espartano no braço", d: "Antes: a carpa antiga no ombro, em outro ângulo. Foto 2 de 2.", alt: "Antes: carpa antiga tatuada no ombro, vista de lado." }
  ];
  var lb = $("#lb"), lbImg = $(".lb__img", lb), lbCap = $(".lb__cap", lb), lbCount = $(".lb__count", lb);
  var cur = 0;
  function show(i) {
    cur = (i + frames.length) % frames.length;
    var f = frames[cur];
    lbImg.src = f.src; lbImg.alt = f.alt; lbImg.width = f.w; lbImg.height = f.h;
    lbCap.textContent = f.t + ". " + f.d;
    lbCount.textContent = (cur + 1) + " / " + frames.length;
    [1, -1].forEach(function (d) { var n = frames[(cur + d + frames.length) % frames.length]; var im = new Image(); im.src = n.src; });
  }
  $$("[data-open]").forEach(function (b) {
    b.addEventListener("click", function () { show(parseInt(b.getAttribute("data-open"), 10)); root.classList.add("is-locked"); lb.showModal(); $(".lb__x", lb).focus(); });
  });
  function closeLb() { if (lb.open) lb.close(); }
  lb.addEventListener("close", function () { root.classList.remove("is-locked"); });
  $(".lb__x", lb).addEventListener("click", closeLb);
  $(".lb__nav--p", lb).addEventListener("click", function () { show(cur - 1); });
  $(".lb__nav--n", lb).addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  var tx = null;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1));
  });

  /* ---------- Movimento (GSAP + ScrollTrigger) ---------- */
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", function () {
    var mobile = window.matchMedia("(max-width: 899px)").matches;

    // Cena principal: a luz sobe e a obra se abre do detalhe para o braço inteiro.
    var tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".hero", start: "top top", end: mobile ? "+=110%" : "+=150%", pin: true, scrub: 0.7, anticipatePin: 1 }
    });
    tl.fromTo(".hero__img", { scale: mobile ? 2.1 : 2.7 }, { scale: 1, ease: "power2.inOut", duration: 1 }, 0)
      .fromTo(".hero__dim", { opacity: 0.5 }, { opacity: 0, duration: 0.8 }, 0.1)
      .fromTo(".hero__horizon", { scaleY: 0.04, opacity: 0.4 }, { scaleY: 1, opacity: 1, ease: "power1.out", duration: 0.7 }, 0)
      .fromTo(".hero__glow", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.4)
      .to(".hero__text", { yPercent: mobile ? 0 : -4, duration: 1 }, 0);

    // Primeira luz: cada obra acende ao entrar e a linha de horizonte corre.
    $$(".gal__i").forEach(function (li, i) {
      var ph = $(".gal__ph", li), img = $("img", li);
      gsap.fromTo(ph, { "--line": 0 }, { "--line": 1, ease: "none", scrollTrigger: { trigger: li, start: "top 90%", end: "top 40%", scrub: true } });
      gsap.fromTo(img, { filter: "brightness(.22) contrast(1.1)" }, { filter: "brightness(1) contrast(1)", ease: "none", scrollTrigger: { trigger: li, start: "top 88%", end: "top 38%", scrub: 0.5 } });
      gsap.fromTo(img, { yPercent: -4, scale: 1.1 }, { yPercent: 4, scale: 1.1, ease: "none", scrollTrigger: { trigger: li, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.fromTo($(".gal__cap", li), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: li, start: "top 60%", once: true } });
    });

    // Alvorada: títulos entram por máscara, passos acendem em sequência.
    $$("#h-ba, #projetos h2, #lucas h2, #contato h2, .steps h3").forEach(function (h) {
      // Margem negativa no topo e nas laterais: acentos das maiúsculas (VOCÊ, COMEÇA) nunca ficam cortados.
      gsap.fromTo(h, { clipPath: "inset(-30% -4% 100% -4%)", y: 28 }, { clipPath: "inset(-30% -4% -20% -4%)", y: 0, duration: 1.1, ease: "expo.out", clearProps: "clipPath", scrollTrigger: { trigger: h, start: "top 85%", once: true } });
    });
    gsap.from(".steps li", { opacity: 0, y: 30, duration: 0.9, ease: "expo.out", stagger: 0.14, scrollTrigger: { trigger: ".steps ol", start: "top 85%", once: true } });
    gsap.from(".lucas__fig img", { clipPath: "inset(0 0 100% 0)", duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: ".lucas__fig", start: "top 80%", once: true } });
    gsap.fromTo(".day__note", { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: ".day__note", start: "top 92%", once: true } });

    return function () { gsap.set([".gal__ph img"], { clearProps: "transform,filter" }); };
  });

  // Triggers de estado criados depois do pin do hero, para que a ordem de refresh conte o espaço do pin.
  // Estado de cue: trilho lateral e cabeçalho acompanham a luz.
  var cueLinks = {};
  $$("[data-cue]").forEach(function (a) { cueLinks[a.getAttribute("data-cue")] = a; });
  var cueEls = $(".cues");
  function setCue(name) {
    Object.keys(cueLinks).forEach(function (k) {
      var on = k === name;
      cueLinks[k].classList.toggle("is-on", on);
      if (on) cueLinks[k].setAttribute("aria-current", "true"); else cueLinks[k].removeAttribute("aria-current");
    });
  }
  [["inicio", "#inicio"], ["obras", "#obras"], ["obras", "#coberturas"], ["projetos", "#projetos"], ["projetos", "#lucas"], ["contato", "#contato"]].forEach(function (c) {
    ScrollTrigger.create({ trigger: c[1], start: "top 55%", end: "bottom 55%", onToggle: function (s) { if (s.isActive) setCue(c[0]); } });
  });
  ScrollTrigger.create({
    trigger: ".dawn__fade", start: "45% 40px", endTrigger: "#contato", end: "bottom top",
    onToggle: function (s) { bar.classList.toggle("is-day", s.isActive); cueEls.classList.toggle("is-day", s.isActive); }
  });
  setCue("inicio");

  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  $$("img[loading=lazy]").forEach(function (im) { if (!im.complete) im.addEventListener("load", function () { ScrollTrigger.refresh(); }, { once: true }); });
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
