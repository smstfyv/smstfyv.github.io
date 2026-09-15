(function () {
    var isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var pixelRatio = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);

    var projectDict = {
        az: {
            cta: 'Ətraflı Məlumat →',
            loading: '3D MODELLƏR YÜKLƏNİR...'
        },
        en: {
            cta: 'More Details →',
            loading: 'LOADING 3D MODELS...'
        },
        ru: {
            cta: 'Подробнее →',
            loading: 'ЗАГРУЗКА 3D МОДЕЛЕЙ...'
        }
    };

    function getLang() {
        try { return localStorage.getItem('emsar.lang') || 'az'; } catch (e) { return 'az'; }
    }

    function applyProjectI18n(lang) {
        var dict = projectDict[lang] || projectDict.az;
        var ctaBtn = document.getElementById('slide-cta');
        if (ctaBtn) {
            var arrow = ctaBtn.querySelector('span');
            ctaBtn.childNodes[0].textContent = dict.cta.replace(' →', ' ');
            if (arrow) arrow.innerHTML = '&rarr;';
        }
        var loaderText = document.querySelector('#loading-screen div[style]');
        if (loaderText) loaderText.textContent = dict.loading;

        document.querySelectorAll('[data-project-lang]').forEach(function (el) {
            el.style.display = el.getAttribute('data-project-lang') === lang ? '' : 'none';
        });
    }

    applyProjectI18n(getLang());

    window.addEventListener('lang:change', function (e) {
        applyProjectI18n(e.detail.lang);
    });

    try {
        window.addEventListener('storage', function (e) {
            if (e.key === 'emsar.lang' && e.newValue) applyProjectI18n(e.newValue);
        });
    } catch (e) {}

    var slidesData = [
        { tag: "EMSAR RX", title: "EMSAR RX", desc: "Mühasibatlıq, anbar və kadr uçotunun kompleks idarə edilməsi sistemi.", modelPath: "/glb/mac-hr.glb", scale: 10, rotationY: Math.PI + 34.3, ctaUrl: "/pages/emsar-rx/index.html" },
        { tag: "E-TİCARƏT PLATFORMASI", title: "Çantam.az", desc: "Onlayn satış platforması — modern stack üzərində qurulan B2C marketplace.", modelPath: "/glb/iphone-17-cantam.glb", scale: 10, rotationY: Math.PI },
        { tag: "MOBİL TƏTBİQ", title: "Derby Azerbaycan", desc: "Özünə komanda qur, kadrosunu formalaşdır və digər komandalarla oyun axtar. Canlı çat ilə birbaşa əlaqə.", modelPath: "/glb/iphone-17-derby.glb", scale: 10, rotationY: Math.PI }
    ];

    var currentIndex = 0;
    var isTransitioning = false;
    var loadedModels = [];
    var totalModels = slidesData.length;
    var isAnimating = false;

    var canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    var initW = canvas.clientWidth || window.innerWidth;
    var initH = canvas.clientHeight || window.innerHeight;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, initW / initH, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    var renderer;
    try {
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !isMobile, alpha: true, powerPreference: isMobile ? 'low-power' : 'high-performance' });
    } catch (e) {
        renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true, powerPreference: 'low-power' });
    }
    renderer.setSize(initW, initH);
    renderer.setPixelRatio(pixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = !isMobile;
    if (!isMobile) renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0);
    controls.minDistance = 1.5;
    controls.maxDistance = 6;
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE };
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    var mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 8, 5);
    if (!isMobile) mainLight.castShadow = true;
    scene.add(mainLight);

    var rimLight = new THREE.DirectionalLight(0x3b82f6, 3.0);
    rimLight.position.set(-5, -2, -5);
    scene.add(rimLight);

    var softLight = new THREE.DirectionalLight(0xffffff, 1.2);
    softLight.position.set(-5, 4, 3);
    scene.add(softLight);

    if (!isMobile) {
        var shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), new THREE.ShadowMaterial({ opacity: 0.3 }));
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = -1.2;
        shadowPlane.receiveShadow = true;
        scene.add(shadowPlane);
    }

    var stageGroup = new THREE.Group();
    scene.add(stageGroup);

    var dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    dracoLoader.setCrossOrigin('anonymous');
    var gltfLoader = new THREE.GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.setCrossOrigin('anonymous');

    var loaderEl = document.getElementById('loading-screen');
    var spinnerEl = loaderEl ? loaderEl.querySelector('.spinner') : null;

    function updateLoaderProgress(pct) {
        if (spinnerEl) {
            spinnerEl.style.borderTopColor = '#3b82f6';
            spinnerEl.style.boxShadow = '0 0 ' + Math.round(pct / 3) + 'px rgba(59,130,246,0.4)';
        }
    }

    function hideLoader() {
        if (!loaderEl) return;
        loaderEl.style.opacity = '0';
        setTimeout(function () { loaderEl.style.display = 'none'; }, 600);
    }

    function loadModel(index, callback, onProgress) {
        if (loadedModels[index]) { if (callback) callback(); return; }
        var slide = slidesData[index];
        gltfLoader.load(
            slide.modelPath,
            function (gltf) {
                var rawModel = gltf.scene;
                rawModel.updateMatrixWorld(true);
                var box = new THREE.Box3().setFromObject(rawModel);
                var center = new THREE.Vector3();
                box.getCenter(center);
                var pivot = new THREE.Group();
                rawModel.position.set(-center.x, -center.y, -center.z);
                pivot.add(rawModel);
                rawModel.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = !isMobile;
                        child.receiveShadow = !isMobile;
                        if (isMobile && child.material) {
                            child.material.flatShading = true;
                        }
                    }
                });
                pivot.scale.set(0, 0, 0);
                pivot.rotation.y = slide.rotationY;
                pivot.visible = false;
                stageGroup.add(pivot);
                loadedModels[index] = pivot;
                if (callback) callback();
            },
            function (xhr) {
                if (onProgress && xhr.total) {
                    onProgress(Math.round((xhr.loaded / xhr.total) * 100));
                }
            },
            function (err) {
                console.error("Model xətası:", slide.modelPath, err);
                if (callback) callback();
            }
        );
    }

    function getScale(data, index) {
        var w = window.innerWidth;
        if (w < 1000 && index === 0) return 11.5;
        if (w < 1000 && index >= 1) return 14.5;
        return data.scale;
    }

    function showModel(index) {
        if (!loadedModels[index]) return;
        var model = loadedModels[index];
        var data = slidesData[index];
        var s = getScale(data, index);
        model.visible = true;
        model.scale.set(0.001, 0.001, 0.001);
        model.rotation.y = data.rotationY - 1.2;
        gsap.to(model.scale, { x: s, y: s, z: s, duration: isMobile ? 0.8 : 1.4, ease: "power3.out" });
        gsap.to(model.rotation, { y: data.rotationY, duration: isMobile ? 0.8 : 1.4, ease: "power3.out", onComplete: function () { isTransitioning = false; } });
    }

    var blurOverlay = document.getElementById('model-blur-overlay');

    function toggleBlur(index) {
        if (!blurOverlay) return;
        if (slidesData[index].ctaUrl) {
            blurOverlay.classList.remove('active');
        } else {
            blurOverlay.classList.add('active');
        }
    }

    function changeSlide(nextIndex) {
        if (isTransitioning || !loadedModels[currentIndex] || !loadedModels[nextIndex]) return;
        isTransitioning = true;
        var currentModel = loadedModels[currentIndex];
        gsap.to(currentModel.scale, { x: 0, y: 0, z: 0, duration: 0.6, ease: "power2.in" });
        gsap.to(currentModel.rotation, {
            y: currentModel.rotation.y + 1.2, duration: 0.6, ease: "power2.in",
            onComplete: function () {
                currentModel.visible = false;
                currentIndex = nextIndex;
                showModel(currentIndex);
                toggleBlur(currentIndex);
            }
        });
        gsap.to([".slide-tag", ".slide-title", ".slide-desc", ".cta-btn"], {
            opacity: 0, y: -15, duration: 0.3, stagger: 0.05,
            onComplete: function () {
                var slide = slidesData[nextIndex];
                document.getElementById('slide-tag').innerText = slide.tag;
                document.getElementById('slide-title').innerText = slide.title;
                document.getElementById('slide-desc').innerText = slide.desc;
                document.getElementById('current-index').innerText = "0" + (nextIndex + 1);
                var ctaBtn = document.getElementById('slide-cta');
                if (slide.ctaUrl) {
                    ctaBtn.href = slide.ctaUrl;
                    ctaBtn.target = '_parent';
                    ctaBtn.style.display = '';
                } else {
                    ctaBtn.style.display = 'none';
                }
                gsap.fromTo([".slide-tag", ".slide-title", ".slide-desc", ".cta-btn"],
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
                );
            }
        });
    }

    document.getElementById('prev-btn').addEventListener('click', function () {
        changeSlide((currentIndex - 1 + totalModels) % totalModels);
    });
    document.getElementById('next-btn').addEventListener('click', function () {
        changeSlide((currentIndex + 1) % totalModels);
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') changeSlide((currentIndex + 1) % totalModels);
        if (e.key === 'ArrowLeft') changeSlide((currentIndex - 1 + totalModels) % totalModels);
    });

    function animate() {
        requestAnimationFrame(animate);
        if (!isAnimating) return;
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    function startAnimating() { isAnimating = true; }
    function stopAnimating() { isAnimating = false; }

    loadModel(0, function () {
        hideLoader();
        showModel(0);
        toggleBlur(0);
        startAnimating();
        for (var i = 1; i < totalModels; i++) {
            (function(idx) {
                setTimeout(function () {
                    loadModel(idx);
                }, idx * 800);
            })(i);
        }
    }, function (pct) {
        updateLoaderProgress(pct);
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startAnimating();
            } else {
                stopAnimating();
            }
        });
    }, { threshold: 0.1 });
    observer.observe(canvas);

    var scrollContainer = canvas.closest('.content-card') ? canvas.parentElement : document.body;
    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        try { window.parent.scrollBy(0, e.deltaY); } catch (err) {}
    }, { passive: false });

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            var w = canvas.clientWidth || window.innerWidth;
            var h = canvas.clientHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }, 100);
    });
})();
