document.addEventListener('click', function(e) {
    var link = e.target.closest('.mobile-nav__item > a');
    if (!link) return;
    var item = link.parentElement;
    var submenu = item.querySelector('.mobile-nav__submenu');
    if (submenu) {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle('is-open');
    }
}, true);

(function(){
    if (document.querySelector('header:not(.sub-page)')) return;
    var menuBtn = document.querySelector('.menu-btn');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener('click', function() {
        var isOpen = mobileNav.classList.contains('is-open');
        if (isOpen) {
            mobileNav.classList.remove('is-open');
            mobileNav.classList.add('is-closing');
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            menuBtn.setAttribute('aria-expanded', 'false');
            setTimeout(function(){ mobileNav.classList.remove('is-closing'); }, 400);
        } else {
            mobileNav.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
            menuBtn.setAttribute('aria-expanded', 'true');
        }
    });

    var closeBtn = mobileNav.querySelector('.mobile-nav__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            mobileNav.classList.remove('is-open');
            mobileNav.classList.add('is-closing');
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            menuBtn.setAttribute('aria-expanded', 'false');
            setTimeout(function(){ mobileNav.classList.remove('is-closing'); }, 400);
        });
    }
})();

// Language switching is handled by i18n.js — no reload needed.

(function(){
    var header = document.querySelector('header.sub-page');
    if (!header) return;
    var ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            ticking = false;
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

(function(){
    var tag = document.querySelector('.hero__tag');
    var buttons = document.querySelector('.hero__buttons');
    if (!tag && !buttons) return;
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                var scrollY = window.scrollY || window.pageYOffset;
                var vh = window.innerHeight;
                var progress = Math.min(scrollY / (vh * 0.4), 1);
                if (tag) tag.style.opacity = 1 - progress;
                if (buttons) buttons.style.opacity = 1 - progress;
                ticking = false;
            });
            ticking = true;
        }
    }, {passive: true});
})();

(function(){
    var loader = document.getElementById('loader');
    if (!loader) return;
    var revealed = false;

    function hideLoader() {
        if (revealed) return;
        revealed = true;
        if (loader.classList.contains('hide')) return;
        loader.classList.add('hide');
        setTimeout(function(){ loader.style.display = 'none'; }, 700);
    }

    function revealSite() {
        hideLoader();
        document.querySelectorAll('.hero .hero__title, .hero .hero__subtitle, .hero .hero__tag, .hero .hero__buttons').forEach(function(el) {
            el.style.removeProperty('opacity');
            el.style.removeProperty('transform');
        });
        document.querySelectorAll('.sub-hero, .hero, .flow').forEach(function(el) {
            el.classList.add('show');
        });
        var header = document.querySelector('header');
        if (header) header.classList.add('show');
        document.querySelector('#app > canvas')?.classList.add('is-ready');
    }

    var checkInterval = setInterval(function() {
        if (revealed) { clearInterval(checkInterval); return; }
        var ui = window.__vectrLoaderUI;
        if (ui && ui.renderedReadyAt) {
            clearInterval(checkInterval);
            setTimeout(revealSite, 200);
        }
    }, 50);

    setTimeout(function() { clearInterval(checkInterval); revealSite(); }, 10000);
})();

(function(){
    var whySection = document.querySelector('#why');
    var badge = document.querySelector('.stats-komanda-badge');
    if (!whySection) return;

    var isStopped = false;

    function stopCanvas() {
        if (isStopped) return;
        isStopped = true;
        try {
            Object.defineProperty(document, 'hidden', { get: function(){ return true; }, configurable: true });
            document.dispatchEvent(new Event('visibilitychange'));
            delete document.hidden;
        } catch(e){}
        var c = document.querySelector('#app > canvas');
        if (c) { c.style.display = 'none'; c.classList.remove('is-ready'); }
    }

    function startCanvas() {
        if (!isStopped) return;
        isStopped = false;
        var c = document.querySelector('#app > canvas');
        if (c) { c.style.display = ''; c.classList.add('is-ready'); }
        try {
            Object.defineProperty(document, 'hidden', { get: function(){ return false; }, configurable: true });
            document.dispatchEvent(new Event('visibilitychange'));
            delete document.hidden;
        } catch(e){}
        window.dispatchEvent(new Event('resize'));
    }

    var ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function() {
            var whyRect = whySection.getBoundingClientRect();
            var whyVisible = whyRect.top < window.innerHeight && whyRect.bottom > 0;

            if (whyVisible) {
                stopCanvas();
            } else if (badge) {
                var badgeRect = badge.getBoundingClientRect();
                var badgeVisible = badgeRect.top < window.innerHeight && badgeRect.bottom > 0;
                if (badgeVisible) startCanvas();
            }
            ticking = false;
        });
    }, { passive: true });
})();

(function(){
    var projectSection = document.querySelector('#project');
    var testimonialsSection = document.querySelector('.testimonials-section');
    var projectFrame = document.querySelector('.project-3d-frame');
    if (!projectSection || !testimonialsSection || !projectFrame) return;

    var iframeStopped = false;

    function stopIframe() {
        if (iframeStopped) return;
        iframeStopped = true;
        projectFrame.style.display = 'none';
    }

    function startIframe() {
        if (!iframeStopped) return;
        iframeStopped = false;
        projectFrame.style.display = '';
        window.dispatchEvent(new Event('resize'));
    }

    var ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function() {
            var tRect = testimonialsSection.getBoundingClientRect();
            var tVisible = tRect.top < window.innerHeight && tRect.bottom > 0;

            if (tVisible) {
                stopIframe();
            } else {
                var pRect = projectSection.getBoundingClientRect();
                var pVisible = pRect.top < window.innerHeight && pRect.bottom > 0;
                if (pVisible) startIframe();
            }
            ticking = false;
        });
    }, { passive: true });
})();
