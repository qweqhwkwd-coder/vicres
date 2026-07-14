/* VicRes — shared UI behaviour for the FINAL builds.
   Theme toggle · mobile nav · FAQ accordion.
   Generic: it hooks onto data-attributes, so every concept can style it freely. */
(function () {
  /* ---------- Theme ---------- */
  var THEME_KEY = "vicres-theme";
  function currentTheme() { return document.documentElement.getAttribute("data-theme") || "light"; }
  function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    });
  }
  function initTheme() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("theme"); } catch (e) {}
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (q === "light" || q === "dark") setTheme(q);
    else if (saved === "light" || saved === "dark") setTheme(saved);
    else setTheme(currentTheme()); // keep the concept's design default
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var panel = document.querySelector("[data-mobile-nav]");
    if (!toggle || !panel) return;
    function close() { panel.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll("[data-faq-item]").forEach(function (item) {
      var q = item.querySelector("[data-faq-q]");
      if (!q) return;
      q.setAttribute("aria-expanded", "false");
      q.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initFaq();
  });
})();
