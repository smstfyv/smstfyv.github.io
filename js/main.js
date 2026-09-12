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
    function hideLoader() {
        if (loader.classList.contains('hide')) return;
        loader.classList.add('hide');
        setTimeout(function(){ loader.style.display = 'none'; }, 700);
    }
    window.addEventListener('load', function(){ setTimeout(hideLoader, 300); });
    setTimeout(hideLoader, 8000);
})();
