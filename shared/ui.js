/* VicRes — shared UI behaviour for the FINAL builds.
   Theme toggle · mobile nav · FAQ accordion · consultation form.
   Generic: it hooks onto data-attributes, so every concept can style it freely. */
(function () {
  var I = window.VICRES_I18N || {};
  function dict() { return I[document.documentElement.getAttribute("lang")] || I.en || {}; }
  function t(k, fallback) { var d = dict(); return d[k] != null ? d[k] : (fallback || ""); }

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

  /* ---------- Consultation form ---------- */
  function initForm() {
    var form = document.querySelector("[data-consult-form]");
    if (!form) return;
    var statusEl = form.querySelector("[data-form-status]");
    var successEl = document.querySelector("[data-form-success]");

    function showError(field, key) {
      var el = form.querySelector('[data-err="' + field + '"]');
      var input = form.querySelector('[name="' + field + '"]');
      if (el) el.textContent = key ? t(key) : "";
      if (input) input.setAttribute("aria-invalid", key ? "true" : "false");
    }

    function fieldValue(n) {
      // NB: use elements[] — form.name would return the form's own name attribute
      var el = form.elements[n];
      return el && "value" in el ? el.value.trim() : "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = fieldValue("name");
      var contact = fieldValue("contact");
      var message = fieldValue("message");
      var ok = true;
      showError("name", name ? "" : (ok = false, "form_err_name"));
      showError("contact", contact ? "" : (ok = false, "form_err_contact"));
      showError("message", message ? "" : (ok = false, "form_err_msg"));
      if (!ok) {
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }
      if (statusEl) { statusEl.textContent = t("form_sending"); statusEl.hidden = false; }

      var meta = I.meta || {};
      var body = t("form_wa_intro") + "\n\n" +
        t("form_name_l") + ": " + name + "\n" +
        t("form_contact_l") + ": " + contact + "\n" +
        t("form_msg_l") + ": " + message;
      var waUrl = "https://wa.me/" + (meta.waDigits || "") + "?text=" + encodeURIComponent(body);

      // brief "sending" beat, then hand off to WhatsApp and reveal success
      setTimeout(function () {
        try { window.open(waUrl, "_blank", "noopener"); } catch (err) {}
        if (statusEl) statusEl.hidden = true;
        if (successEl) {
          successEl.hidden = false;
          successEl.setAttribute("tabindex", "-1");
          successEl.focus();
        }
        form.reset();
      }, 650);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initFaq();
    initForm();
  });
})();
