(function () {
    var slidesData = [
        { tag: "LAYİHƏ 01", title: "EMSAR RX", desc: "Modern texnoloji idarəetmə və yüksək performans həlli.", modelPath: "/glb/mac-hr.glb", scale: 10, rotationY: Math.PI + 34.3 },
        { tag: "E-TİCARƏT PLATFORMASI", title: "Çantam.az", desc: "Onlayn satış platforması — modern stack üzərində qurulan B2C marketplace.", modelPath: "/glb/iphone-17-cantam.glb", scale: 10, rotationY: Math.PI },
        { tag: "MOBİL TƏTBİQ", title: "Çantam Mobile", desc: "iOS və Android üçün optimallaşdırılmış sürətli və rahat mobil alış-veriş təcrübəsi.", modelPath: "/glb/iphone-17-cantam.glb", scale: 8, rotationY: Math.PI }
    ];

    var currentIndex = 0;
    var isTransitioning = false;
    var loadedModels = [];
    var loadedCount = 0;
    var totalModels = slidesData.length;
    var isAnimating = false;

    var canvas = document.getElementById('webgl-canvas');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.target.set(0, 0, 0);
    controls.minDistance = 3.2;
    controls.maxDistance = 3.2;
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE };

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));

    var mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    var rimLight = new THREE.DirectionalLight(0x3b82f6, 3.0);
    rimLight.position.set(-5, -2, -5);
    scene.add(rimLight);

    var softLight = new THREE.DirectionalLight(0xffffff, 1.2);
    softLight.position.set(-5, 4, 3);
    scene.add(softLight);

    var shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(15, 15), new THREE.ShadowMaterial({ opacity: 0.3 }));
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    var stageGroup = new THREE.Group();
    scene.add(stageGroup);

    var gltfLoader = new THREE.GLTFLoader();

    function hideLoader() {
        var el = document.getElementById('loading-screen');
        if (el) { el.style.opacity = '0'; setTimeout(function () { el.style.display = 'none'; }, 600); }
    }

    function loadModel(index, callback) {
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
                    if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
                });
                pivot.scale.set(0, 0, 0);
                pivot.rotation.y = slide.rotationY;
                pivot.visible = false;
                stageGroup.add(pivot);
                loadedModels[index] = pivot;
                loadedCount++;
                if (callback) callback();
            },
            undefined,
            function (err) {
                console.error("Model xətası:", slide.modelPath, err);
                loadedCount++;
                if (callback) callback();
            }
        );
    }

    function showModel(index) {
        if (!loadedModels[index]) return;
        var model = loadedModels[index];
        var data = slidesData[index];
        model.visible = true;
        model.scale.set(0.001, 0.001, 0.001);
        model.rotation.y = data.rotationY - 1.2;
        gsap.to(model.scale, { x: data.scale, y: data.scale, z: data.scale, duration: 1.4, ease: "power3.out" });
        gsap.to(model.rotation, { y: data.rotationY, duration: 1.4, ease: "power3.out", onComplete: function () { isTransitioning = false; } });
    }

    function changeSlide(nextIndex) {
        if (isTransitioning || !loadedModels[currentIndex] || !loadedModels[nextIndex]) return;
        isTransitioning = true;
        var currentModel = loadedModels[currentIndex];
        gsap.to(currentModel.scale, { x: 0, y: 0, z: 0, duration: 0.8, ease: "power2.in" });
        gsap.to(currentModel.rotation, {
            y: currentModel.rotation.y + 1.2, duration: 0.8, ease: "power2.in",
            onComplete: function () {
                currentModel.visible = false;
                currentIndex = nextIndex;
                showModel(currentIndex);
            }
        });
        gsap.to([".slide-tag", ".slide-title", ".slide-desc"], {
            opacity: 0, y: -15, duration: 0.4, stagger: 0.05,
            onComplete: function () {
                document.getElementById('slide-tag').innerText = slidesData[nextIndex].tag;
                document.getElementById('slide-title').innerText = slidesData[nextIndex].title;
                document.getElementById('slide-desc').innerText = slidesData[nextIndex].desc;
                document.getElementById('current-index').innerText = "0" + (nextIndex + 1);
                gsap.fromTo([".slide-tag", ".slide-title", ".slide-desc"],
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
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

    function loadRemainingModels() {
        var indicesToLoad = [];
        for (var i = 0; i < totalModels; i++) {
            if (!loadedModels[i]) indicesToLoad.push(i);
        }
        var idx = 0;
        function loadNext() {
            if (idx >= indicesToLoad.length) return;
            loadModel(indicesToLoad[idx], function () { idx++; setTimeout(loadNext, 200); });
        }
        loadNext();
    }

    loadModel(0, function () {
        hideLoader();
        showModel(0);
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                startAnimating();
                loadRemainingModels();
            } else {
                stopAnimating();
            }
        });
    }, { threshold: 0.1 });
    observer.observe(canvas);

    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        try { window.parent.scrollBy(0, e.deltaY); } catch (err) {}
    }, { passive: false });

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
