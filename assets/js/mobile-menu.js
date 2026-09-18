(function () {
    var hamburger = document.querySelector('.hamburger');
    var overlay = document.querySelector('.mobile-menu-overlay');
    var panel = document.querySelector('.mobile-menu-panel');
    var closeBtn = document.querySelector('.mobile-menu-close');
    var submenuToggles = document.querySelectorAll('.mobile-menu-links .has-submenu > a');

    if (!hamburger || !overlay || !panel) return;

    function openMenu() {
        hamburger.classList.add('active');
        overlay.classList.add('active');
        panel.classList.add('active');
        document.body.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        panel.classList.remove('active');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.querySelectorAll('.mobile-menu-submenu').forEach(function (el) {
            el.classList.remove('open');
        });
    }

    hamburger.addEventListener('click', function () {
        if (panel.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && panel.classList.contains('active')) {
            closeMenu();
        }
    });

    submenuToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var submenu = this.parentElement.querySelector('.mobile-menu-submenu');
            if (submenu) {
                submenu.classList.toggle('open');
            }
        });
    });

    var menuLinks = panel.querySelectorAll('.mobile-menu-links a:not(.has-submenu > a)');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });
})();
