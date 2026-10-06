/* Comparador de antes e depois.
   Os casos ficam no bloco JSON #casos-antes-depois do index.html: título, resumo, legenda,
   proporção do quadro e, para "antes" e "depois", src, largura, altura, foco (object-position) e alt.
   As duas fotos de um caso devem ter o mesmo enquadramento; sem "src" aparece um espaço identificado. */
(function () {
  "use strict";
  var root = document.querySelector(".ba");
  if (!root) return;

  var stage = root.querySelector(".ba__stage");
  var range = root.querySelector(".ba__range");
  var panel = root.querySelector(".ba__panel");
  var caption = root.querySelector(".ba__caption");
  var list = root.querySelector(".ba__cases");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hasGsap = !!(window.gsap && window.ScrollTrigger);

  var cases = [];
  try { cases = JSON.parse(document.getElementById("casos-antes-depois").textContent); } catch (err) { cases = []; }

  // Os botões dos casos nascem do JSON: um caso novo aparece só editando os dados.
  var tabs = [];
  if (cases.length) {
    list.setAttribute("role", "tablist");
    list.textContent = "";
    cases.forEach(function (c, i) {
      var t = document.createElement("button");
      t.type = "button";
      t.className = "ba__case";
      t.id = "ba-t-" + i;
      t.setAttribute("role", "tab");
      t.setAttribute("aria-controls", "ba-panel");
      t.setAttribute("aria-selected", String(i === 0));
      t.tabIndex = i === 0 ? 0 : -1;
      var thumb;
      if (c.miniatura) {
        thumb = document.createElement("img");
        thumb.src = c.miniatura; thumb.width = 120; thumb.height = 160; thumb.alt = "";
      } else {
        thumb = document.createElement("span");
        thumb.className = "ba__case-ph";
        thumb.setAttribute("aria-hidden", "true");
        thumb.textContent = "Sem foto";
      }
      var text = document.createElement("span"), title = document.createElement("strong"), sub = document.createElement("span");
      title.textContent = c.titulo || "Caso " + (i + 1);
      sub.textContent = c.resumo || "";
      text.appendChild(title); text.appendChild(sub);
      t.appendChild(thumb); t.appendChild(text);
      list.appendChild(t);
      tabs.push(t);
    });
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "ba-t-0");
  }

  var pos = 50, current = 0, auto = null, interacted = false;
  var pendingCase = null, switchToken = 0, movedSinceSwitch = false;

  function setPos(p) {
    pos = Math.max(0, Math.min(100, p));
    stage.style.setProperty("--pos", pos + "%");
    var r = Math.round(pos);
    range.value = r;
    range.setAttribute("aria-valuetext", "Antes " + r + "%, depois " + (100 - r) + "%");
  }

  // Qualquer gesto do visitante encerra o que estiver animando sozinho.
  function takeOver() {
    interacted = true;
    if (auto) { auto.kill(); auto = null; }
  }

  // Gesto no meio de uma troca de caso: a troca termina na hora e nada recentra depois.
  function userAct() {
    takeOver();
    movedSinceSwitch = true;
    if (pendingCase === null) return;
    switchToken++;
    apply(pendingCase);
    pendingCase = null;
    panel.classList.remove("is-switching");
  }

  function fromClientX(x) {
    var box = stage.getBoundingClientRect();
    return (x - box.left) / box.width * 100;
  }

  /* ---------- Arraste: mouse e caneta na hora; toque só com intenção horizontal ---------- */
  var drag = null;
  function begin(e) {
    drag.active = true;
    try { stage.setPointerCapture(drag.id); } catch (err) { /* ponteiro já liberado */ }
    root.classList.add("is-dragging");
    setPos(fromClientX(e.clientX));
  }
  function finish() {
    drag = null;
    root.classList.remove("is-dragging");
  }
  stage.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    userAct();
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, touch: e.pointerType === "touch", active: false };
    if (!drag.touch) { e.preventDefault(); begin(e); }
  });
  stage.addEventListener("pointermove", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.active) {
      var dx = Math.abs(e.clientX - drag.x), dy = Math.abs(e.clientY - drag.y);
      if (dy > 8 && dy >= dx) { finish(); return; }       // gesto vertical: a página rola
      if (dx > 6 && dx > dy) begin(e); else return;
    }
    setPos(fromClientX(e.clientX));                       // acompanha o gesto direto, sem interpolação
  });
  stage.addEventListener("pointerup", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.touch && !drag.active) setPos(fromClientX(e.clientX)); // toque curto leva a divisória ao ponto
    finish();
  });
  stage.addEventListener("pointercancel", function (e) { if (drag && e.pointerId === drag.id) finish(); });
  stage.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* ---------- Teclado: a divisória é um range nativo ---------- */
  range.addEventListener("input", function () { userAct(); setPos(+range.value); });
  range.addEventListener("keydown", function (e) {
    var step = e.shiftKey ? 10 : 2, next = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = pos - step;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") next = pos + step;
    if (next !== null) { e.preventDefault(); userAct(); setPos(next); }
  });

  /* ---------- Casos ---------- */
  function fillLayer(layer, data, label) {
    var img = layer.querySelector(".ba__img");
    var ph = layer.querySelector(".ba__ph");
    if (data && data.src) {
      if (ph) ph.remove();
      img.hidden = false;
      img.src = data.src;
      if (data.largura) img.width = data.largura;
      if (data.altura) img.height = data.altura;
      img.alt = data.alt || "";
      img.style.objectPosition = data.foco || "50% 50%";
    } else {
      img.hidden = true;
      img.removeAttribute("src");
      if (!ph) { ph = document.createElement("span"); ph.className = "ba__ph"; layer.appendChild(ph); }
      ph.textContent = "Espaço para: foto real do caso (" + label + ")";
    }
  }

  function apply(i) {
    var c = cases[i];
    stage.style.setProperty("--ratio", c.proporcao || "3/4");
    fillLayer(stage.querySelector(".ba__after"), c.depois, "depois");
    fillLayer(stage.querySelector(".ba__before"), c.antes, "antes");
    caption.textContent = "";
    var strong = document.createElement("strong");
    strong.textContent = c.titulo + ".";
    caption.appendChild(strong);
    caption.appendChild(document.createTextNode(" " + (c.legenda || "")));
  }

  function centre() {
    if (hasGsap && !reduce.matches) {
      var o = { p: pos };
      auto = gsap.to(o, { p: 50, duration: 0.5, ease: "power2.out", onUpdate: function () { setPos(o.p); }, onComplete: function () { auto = null; } });
    } else {
      setPos(50);
    }
  }

  function select(i, focus) {
    if (!cases[i] || i === current) { if (focus) tabs[i].focus(); return; }
    current = i;
    tabs.forEach(function (t, k) {
      t.setAttribute("aria-selected", String(k === i));
      t.tabIndex = k === i ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tabs[i].id);
    if (focus) tabs[i].focus();
    takeOver();

    if (reduce.matches) { apply(i); setPos(50); return; }
    movedSinceSwitch = false;
    pendingCase = i;
    var token = ++switchToken;
    panel.classList.add("is-switching");
    var imgs = [cases[i].antes, cases[i].depois].filter(function (d) { return d && d.src; }).map(function (d) {
      var im = new Image(); im.src = d.src; return im.decode ? im.decode().catch(function () {}) : Promise.resolve();
    });
    var wait = new Promise(function (res) { setTimeout(res, 220); });
    Promise.all(imgs.concat([wait])).then(function () {
      if (token !== switchToken) return;          // o visitante já assumiu a troca
      apply(i);
      pendingCase = null;
      panel.classList.remove("is-switching");
      if (!movedSinceSwitch && !drag) centre();
    });
  }

  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { select(i); });
    t.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") n = 0;
      if (e.key === "End") n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(n, true); }
    });
  });

  if (cases.length) apply(0);
  setPos(50);

  /* ---------- Entrada da seção e dica de uso (só com movimento liberado) ---------- */
  if (!hasGsap) return;
  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", function () {
    gsap.from(stage, {
      clipPath: "inset(100% 0% 0% 0%)", duration: 1.2, ease: "expo.out", clearProps: "clipPath",
      scrollTrigger: { trigger: stage, start: "top 78%", once: true },
      onComplete: function () {
        if (interacted) return;
        // Um vai e vem curto mostra que a divisória se move; some ao primeiro toque do visitante.
        var o = { p: 50 };
        auto = gsap.timeline({ delay: 0.15, onComplete: function () { auto = null; } })
          .to(o, { p: 40, duration: 0.6, ease: "power2.inOut", onUpdate: function () { setPos(o.p); } })
          .to(o, { p: 58, duration: 0.7, ease: "power2.inOut", onUpdate: function () { setPos(o.p); } })
          .to(o, { p: 50, duration: 0.5, ease: "power2.out", onUpdate: function () { setPos(o.p); } });
      }
    });
    gsap.from(".ba__case", { opacity: 0, y: 18, duration: 0.8, ease: "expo.out", stagger: 0.1, scrollTrigger: { trigger: ".ba__cases", start: "top 88%", once: true } });
  });
})();
