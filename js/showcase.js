window.addEventListener('load', function(){
    var canvas = document.getElementById('showcase-canvas');
    if(!canvas) return;

    var wrapper = canvas.parentElement;
    if(!wrapper) return;

    var w = wrapper.clientWidth || 800;
    var h = wrapper.clientHeight || 500;

    var slidesData = [
        { tag:"LAYİHƏ 01", title:"EMSAR RX", desc:"Modern texnoloji idarəetmə və yüksək performans həlli.", modelPath:"/glb/nuclear_staffing_noHumans.glb", scale:1, rotY:Math.PI },
        { tag:"E-TİCARƏT PLATFORMASI", title:"Çantam.az", desc:"Onlayn satış platforması — modern stack üzərində qurulan B2C marketplace.", modelPath:"/glb/nuclear_staffing_noHumans.glb", scale:1, rotY:Math.PI+0.5 },
        { tag:"BULUD XİDMƏTLƏRİ", title:"EMSAR Cloud", desc:"Yüksək sürətli təhlükəsiz serverlər və qlobal məlumat şəbəkəsi idarəetmə sistemi.", modelPath:"/glb/nuclear_staffing_noHumans.glb", scale:1, rotY:Math.PI+1 },
        { tag:"MOBİL TƏTBİQ", title:"Çantam Mobile", desc:"iOS və Android üçün optimallaşdırılmış sürətli və rahat mobil alış-veriş təcrübəsi.", modelPath:"/glb/nuclear_staffing_noHumans.glb", scale:1, rotY:Math.PI+1.5 }
    ];

    var currentIndex = 0;
    var isTransitioning = false;
    var loadedModels = [];

    if(typeof THREE === 'undefined') {
        console.error('THREE.js yuklenmeyib');
        return;
    }

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    var renderer = new THREE.WebGLRenderer({ canvas:canvas, antialias:true, alpha:true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    if(renderer.outputEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;

    var controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.target.set(0, 0, 0);
    controls.minDistance = 1.2;
    controls.maxDistance = 7.0;

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    var dl = new THREE.DirectionalLight(0xffffff, 2.0);
    dl.position.set(5, 8, 5);
    scene.add(dl);
    var rl = new THREE.DirectionalLight(0x3b82f6, 3.0);
    rl.position.set(-5, -2, -5);
    scene.add(rl);
    var sl = new THREE.DirectionalLight(0xffffff, 1.2);
    sl.position.set(-5, 4, 3);
    scene.add(sl);

    var stageGroup = new THREE.Group();
    scene.add(stageGroup);

    var dracoLoader;
    if(typeof THREE.DRACOLoader !== 'undefined') {
        dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    }
    var gltfLoader = new THREE.GLTFLoader();
    if(dracoLoader) gltfLoader.setDRACOLoader(dracoLoader);

    var loadedCount = 0;
    slidesData.forEach(function(slide, index){
        gltfLoader.load(slide.modelPath, function(gltf){
            var raw = gltf.scene;
            raw.updateMatrixWorld(true);
            var box = new THREE.Box3().setFromObject(raw);
            var center = new THREE.Vector3();
            box.getCenter(center);
            var pivot = new THREE.Group();
            raw.position.set(-center.x, -center.y, -center.z);
            pivot.add(raw);
            pivot.scale.set(0, 0, 0);
            pivot.rotation.y = slide.rotY;
            pivot.visible = false;
            stageGroup.add(pivot);
            loadedModels[index] = pivot;
            loadedCount++;
            console.log('Showcase model yuklendi:', index+1, '/', slidesData.length);
            if(loadedCount === slidesData.length) showModel(0);
        }, function(progress){
            console.log('Yuklenir:', slide.title, progress.loaded);
        }, function(err){
            console.error("Model xətası:", slide.modelPath, err);
        });
    });

    function showModel(index){
        var m = loadedModels[index];
        var d = slidesData[index];
        if(!m) return;
        m.visible = true;
        m.scale.set(0.001, 0.001, 0.001);
        m.rotation.y = d.rotY - 1.2;
        if(typeof gsap !== 'undefined') {
            gsap.to(m.scale, { x:d.scale, y:d.scale, z:d.scale, duration:1.4, ease:"power3.out" });
            gsap.to(m.rotation, { y:d.rotY, duration:1.4, ease:"power3.out", onComplete:function(){ isTransitioning=false; } });
        } else {
            m.scale.set(d.scale, d.scale, d.scale);
            m.rotation.y = d.rotY;
            isTransitioning = false;
        }
    }

    function changeSlide(nextIndex){
        if(isTransitioning || loadedModels.length < slidesData.length) return;
        isTransitioning = true;
        var cur = loadedModels[currentIndex];
        if(typeof gsap !== 'undefined') {
            gsap.to(cur.scale, { x:0, y:0, z:0, duration:0.8, ease:"power2.in" });
            gsap.to(cur.rotation, { y:cur.rotation.y+1.2, duration:0.8, ease:"power2.in", onComplete:function(){
                cur.visible = false;
                currentIndex = nextIndex;
                showModel(currentIndex);
            }});
            var els = [document.getElementById('slide-tag'), document.getElementById('slide-title'), document.getElementById('slide-desc')];
            gsap.to(els, { opacity:0, y:-15, duration:0.4, stagger:0.05, onComplete:function(){
                document.getElementById('slide-tag').innerText = slidesData[nextIndex].tag;
                document.getElementById('slide-title').innerText = slidesData[nextIndex].title;
                document.getElementById('slide-desc').innerText = slidesData[nextIndex].desc;
                document.getElementById('current-index').innerText = '0'+(nextIndex+1);
                gsap.fromTo(els, {opacity:0,y:15}, {opacity:1,y:0,duration:0.6,stagger:0.08,ease:"power2.out"});
            }});
        } else {
            cur.visible = false;
            currentIndex = nextIndex;
            showModel(currentIndex);
            isTransitioning = false;
        }
    }

    var nextBtn = document.getElementById('next-btn');
    var prevBtn = document.getElementById('prev-btn');
    if(nextBtn) nextBtn.addEventListener('click', function(){ changeSlide((currentIndex+1)%slidesData.length); });
    if(prevBtn) prevBtn.addEventListener('click', function(){ changeSlide((currentIndex-1+slidesData.length)%slidesData.length); });

    window.addEventListener('keydown', function(e){
        if(e.key==='ArrowRight') changeSlide((currentIndex+1)%slidesData.length);
        if(e.key==='ArrowLeft') changeSlide((currentIndex-1+slidesData.length)%slidesData.length);
    });

    function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', function(){
        var nw = wrapper.clientWidth;
        var nh = wrapper.clientHeight;
        if(nw === 0 || nh === 0) return;
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
    });
});
