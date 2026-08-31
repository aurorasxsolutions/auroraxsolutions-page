document.addEventListener("DOMContentLoaded", () => {
  initNavigation();           // js/navigation.js
  initScrollAnimations();     // js/animations.js
  window.AXS.initPreferences(); // js/i18n.js
  if (window.lucide) window.lucide.createIcons();
});
