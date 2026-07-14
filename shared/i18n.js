/* VicRes i18n engine — shared by every concept.
   - fills [data-i18n] text nodes and [data-i18n-attr="attr:key;attr2:key2"]
   - swaps <html lang> and dir (rtl for Hebrew)
   - updates <title> + meta description for SEO
   - wires email / WhatsApp links from shared contact data
   - remembers the choice in localStorage */
(function () {
  var I = window.VICRES_I18N;
  if (!I) return;
  var LS_KEY = "vicres-lang";

  function pickInitial() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q && I[q]) return q;
    } catch (e) {}
    var saved = null;
    try { saved = localStorage.getItem(LS_KEY); } catch (e) {}
    if (saved && I[saved]) return saved;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (I[nav]) return nav;
    return "en";
  }

  function setText(lang) {
    var dict = I[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2 && dict[parts[1]] != null) {
          el.setAttribute(parts[0].trim(), dict[parts[1]].trim());
        }
      });
    });
  }

  function setMeta(lang) {
    var dict = I[lang];
    if (dict.doc_title) document.title = dict.doc_title;
    var desc = dict.meta_desc || dict.hero_lead || "";
    ["meta[name='description']", "meta[property='og:description']"].forEach(function (sel) {
      var m = document.querySelector(sel);
      if (m) m.setAttribute("content", desc);
    });
    var ogt = document.querySelector("meta[property='og:title']");
    if (ogt) ogt.setAttribute("content", dict.doc_title || "");
    var ogl = document.querySelector("meta[property='og:locale']");
    if (ogl) ogl.setAttribute("content", { en: "en_US", uk: "uk_UA", pl: "pl_PL", he: "he_IL" }[lang] || "en_US");
  }

  function wireContacts() {
    var m = I.meta;
    document.querySelectorAll("[data-link='email']").forEach(function (a) {
      a.setAttribute("href", "mailto:" + m.email);
    });
    document.querySelectorAll("[data-text='email']").forEach(function (el) {
      el.textContent = m.email;
    });
    document.querySelectorAll("[data-link='wa']").forEach(function (a) {
      a.setAttribute("href", "https://wa.me/" + m.waDigits);
    });
    document.querySelectorAll("[data-text='wa']").forEach(function (el) {
      el.textContent = m.waDisplay;
    });
  }

  function markActive(lang) {
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function apply(lang) {
    if (!I[lang]) lang = "en";
    var dir = I[lang].dir || "ltr";
    var html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);
    setText(lang);
    setMeta(lang);
    markActive(lang);
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
  }

  function buildSwitcher() {
    document.querySelectorAll("[data-lang-switch]").forEach(function (nav) {
      I.meta.order.forEach(function (code) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lang-btn";
        b.setAttribute("data-lang", code);
        b.setAttribute("lang", code);
        b.textContent = I.meta.names[code];
        b.addEventListener("click", function () { apply(code); });
        nav.appendChild(b);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSwitcher();
    wireContacts();
    apply(pickInitial());
  });
})();
