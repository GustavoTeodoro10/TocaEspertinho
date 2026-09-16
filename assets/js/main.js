// Toca do Espertinho — interações da landing page
// Sem dependências externas: JS puro, progressivo (o site funciona sem ele).

(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var menuIconOpen = document.getElementById("icon-menu-open");
  var menuIconClose = document.getElementById("icon-menu-close");
  var whatsappFloat = document.getElementById("whatsapp-float");
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("main section[id]");

  /* ---------- Monta o link do WhatsApp com a mensagem certa para cada botão ---------- */
  var WHATSAPP_NUMBER = "551145445015";
  document.querySelectorAll(".wa-link").forEach(function (link) {
    var message = link.getAttribute("data-msg") || "Olá! Vim pelo site e gostaria de falar com a Toca do Espertinho.";
    link.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message));
  });

  /* ---------- Cabeçalho com sombra ao rolar + botão flutuante ---------- */
  function onScroll() {
    var scrolled = window.scrollY > 12;
    header.classList.toggle("is-scrolled", scrolled);

    if (whatsappFloat) {
      whatsappFloat.classList.toggle("opacity-0", window.scrollY < 320);
      whatsappFloat.classList.toggle("pointer-events-none", window.scrollY < 320);
      whatsappFloat.classList.toggle("translate-y-4", window.scrollY < 320);
    }

    updateActiveLink();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuIconOpen.classList.toggle("hidden", isOpen);
      menuIconClose.classList.toggle("hidden", !isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      });
    });
  }

  /* ---------- Marca o link de navegação da seção visível ---------- */
  function updateActiveLink() {
    var current = "";
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      var isCurrent = link.getAttribute("href") === "#" + current;
      link.classList.toggle("text-navy-700", isCurrent);
      link.classList.toggle("after:w-full", isCurrent);
      link.classList.toggle("text-navy-500/70", !isCurrent);
    });
  }

  /* ---------- Revelação suave ao rolar (IntersectionObserver) ---------- */
  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.getAttribute("data-delay") || "0";
            entry.target.style.transitionDelay = delay + "ms";
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (target) {
      observer.observe(target);
    });
  } else {
    revealTargets.forEach(function (target) {
      target.classList.add("is-visible");
    });
  }

  /* ---------- Contadores animados (números reais das redes sociais) ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    var countersObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          countersObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (counter) {
      countersObserver.observe(counter);
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute("data-counter"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = target * eased;
      el.textContent = (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }
})();
