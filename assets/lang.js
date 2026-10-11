// Language toggle: EN <-> AR. Remembers choice; defaults to the browser language.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('h7-lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'en').slice(0, 2) === 'ar' ? 'ar' : 'en');
  function apply(l) {
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('h7-lang', l); } catch (e) {}
  }
  apply(lang);
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-lang-toggle]')) apply(document.documentElement.lang === 'ar' ? 'en' : 'ar');
  });
})();
