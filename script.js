// Modal Data - using unified media array
// media array supports: { type: 'video', id: 'youtubeId' } or { type: 'image', src: 'path/to/image' }
const labData = {
    'airbag': {
        title: '汽車安全氣囊',
        subtitle: 'Automotive Airbag Folding',
        tag: 'SAFETY ENGINEERING',
        media: [
            { type: 'image', src: 'https://i.makeagif.com/media/7-13-2017/oOXDJX.gif' },
            { type: 'image', src: 'https://cdn.prod.www.spiegel.de/images/441a6ae4-0001-0004-0000-000001053942_w1840_r1.9230769230769231_fpx66.56_fpy50.webp' },
            { type: 'image', src: 'https://cdn.prod.www.spiegel.de/images/dd133b5e-0001-0004-0000-000001053941_w1840_r1.7142857142857142_fpx36.17_fpy50.webp' },
            { type: 'image', src: 'https://cdn.prod.www.spiegel.de/images/e5559d0f-0001-0004-0000-000001053930_w1840_r1.9230769230769231_fpx48.36_fpy45.webp' }
        ],
        stats: {
            '展開時間': '< 0.05 秒',
            '核心演算法': 'Universal Molecule',
            '開發者': 'Robert Lang'
        },
        description: `
            <p>你知道安全氣囊是如何塞進方向盤小小的空間裡嗎？這不僅僅是把它「揉成一團」那麼簡單。</p>
            <p>安全氣囊必須在碰撞發生後的<b>幾毫秒</b>內瞬間充氣展開。如果摺疊不當，展開時可能會打結，甚至因為充氣不均勻而傷害乘客。</p>
            <p>美國物理學家兼摺紙大師 <b>Robert Lang</b> 接受了德國工程公司的委託，利用他發明的<b>「Universal Molecule」演算法</b>，計算出如何在電腦模擬中將 3D 的氣囊壓扁成 2D 平面，並設計出最有效率的摺痕圖。這讓工程師可以在製造實物前，就精準預測氣囊的展開行為，拯救了無數生命。</p>
        `
    },
    'stent': {
        title: '血管支架',
        subtitle: 'Origami Heart Stent',
        tag: 'MEDICAL TECHNOLOGY',
        media: [
            { type: 'video', id: 'TXDPuQZDzO8' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://plus.maths.org/content/sites/plus.maths.org/files/articles/2007/3932/stent_large.jpg' }
        ],
        stats: {
            '收縮直徑': '12 mm',
            '展開直徑': '23 mm',
            '摺紙基礎': 'Waterbomb Base'
        },
        description: `
            <p>當血管被脂肪堵塞時，醫生需要放入「支架」來撐開血管。但問題是：<b>要怎麼把一個寬大的管子，放進狹窄的血管裡？</b></p>
            <p>牛津大學的 <b>Zhong You</b> 教授從摺紙中找到了靈感。他利用經典的<b>「水雷結構 (Waterbomb Base)」</b>，設計了一種不鏽鋼支架。</p>
            <p>這種結構允許支架在徑向（直徑方向）上大幅收縮。醫生可以把它縮得像牙籤一樣細，透過導管送到心臟的患處，然後像摺紙球一樣「撐開」，變成一個堅固的隧道，讓血液恢復暢通。</p>
        `
    },
    'robot': {
        title: '吞食機器人',
        subtitle: 'Ingestible Origami Robot',
        tag: 'MICRO ROBOTICS',
        media: [
            { type: 'video', id: '3Waj08k7sDE' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201605/MIT-Origami-Robot-01.jpg' }
        ],
        stats: {
            '材料': '乾豬腸 (可消化)',
            '控制方式': '外部磁場',
            '功能': '修補胃壁 / 取出異物'
        },
        description: `
            <p>每年都有許多小孩誤吞鈕扣電池，這會嚴重燒傷食道或胃壁。MIT 電腦科學與人工智慧實驗室 (CSAIL) 發明了一種<b>「可以被吞下的摺紙機器人」</b>。</p>
            <p>這個小機器人是用<b>乾豬腸</b>（香腸的外皮材料）做成的，平时摺疊並被包裹在一個小冰塊膠囊裡。當你把它吞下去，冰塊在胃裡融化，機器人就會像變形金剛一樣展開。</p>
            <p>醫生可以在體外用磁鐵控制它移動，讓它爬到誤吞的電池位置，像磁鐵一樣吸住電池，然後把它帶出身體，或者貼在胃壁傷口上進行修補。</p>
        `
    },
    'bridge': {
        title: '摺疊橋樑',
        subtitle: 'Deployable Structures',
        tag: 'CIVIL ENGINEERING',
        media: [
            { type: 'video', id: '7Mk4olS6SRo' },
            { type: 'image', src: 'https://materialdistrict.com/wp-content/uploads/2015/09/build-a-bridge-house-or-spacecraft-with-this-super-strong-origami-01-631x400.jpg' },
            { type: 'image', src: 'https://materialdistrict.com/wp-content/uploads/2015/09/build-a-bridge-house-or-spacecraft-with-this-super-strong-origami-04-541x400.jpg' }
        ],
        stats: {
            '承重能力': '自身重量的 100倍+',
            '特點': '厚板摺疊 (Thick Panel)',
            '應用': '災難救援 / 太空建築'
        },
        description: `
            <p>在地震或洪水發生後，災區往往道路中斷。如果能有一座橋，可以摺好放在卡車上，運到現場一拉開就能用，該有多好？</p>
            <p>密西根大學的 <b>Evgueni Filipov</b> 教授解決了一個物理難題：普通的紙很薄，摺疊容易；但蓋橋用的鋼板很厚，直接摺疊會卡住（轉軸位移問題）。</p>
            <p>他設計了一種特殊的<b>「厚板摺紙 (Thick Panel Origami)」</b>系統，讓厚重的板材也能像手風琴一樣順暢收縮。這項技術不僅能造橋，未來還能用來在月球上快速建造基地！</p>
        `
    },
    'wings': {
        title: '閃光摺紙衛星',
        subtitle: 'Origami Flasher Satellite',
        tag: 'SPACE TECHNOLOGY',
        media: [
            { type: 'video', id: '3QW1R9l-2UE' },
            { type: 'image', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/starshade_petal_unfurling.jpg' }
        ],
        stats: {
            '收縮比率': '1:10 (面積)',
            '展開機制': '彈性位能',
            '應用': 'Starshade / Solar Array'
        },
        description: `
            <p>除了三浦摺疊，NASA JPL 的工程師還利用了一種叫做<b>「Flasher (閃光摺紙)」</b>的模式來設計未來的「遮星板 (Starshade)」。</p>
            <p>這是一個巨大的花瓣狀結構，目的是在太空中展開，遮住恆星的光芒，好讓望遠鏡能拍到繞行恆星的行星。透過 Flasher 摺法，這個直徑像棒球場一樣大的結構，可以收納成一個圓柱體，塞進火箭裡發射。</p>
        `
    },
    'shield': {
        title: '可摺疊防彈盾牌',
        subtitle: 'Bulletproof Origami Shield',
        tag: 'SECURITY & DEFENSE',
        media: [
            { type: 'video', id: 'P_ezsOeX5mQ' }
        ],
        stats: {
            '摺疊模式': 'Yoshimura (吉村摺疊)',
            '材料': 'Kevlar (克維拉)',
            '防護': '子彈'
        },
        description: `
            <p>警察在面對突發槍戰時，往往來不及尋找掩護。楊百翰大學 (BYU) 的工程師團隊利用<b>「吉村摺疊 (Yoshimura pattern)」</b>設計了一款便攜式防彈盾牌。</p>
            <p>這款盾牌平時摺疊起來非常扁平，可以輕鬆放在警車的後車廂。一旦遇到危險，只需幾秒鐘就能拉開，形成一個堅固的弧形防護牆。它由 12 層克維拉 (Kevlar) 防彈纖維製成，不僅能擋下手槍子彈，其摺疊結構還提供了額外的結構支撐力。</p>
        `
    },
    'train': {
        title: '高鐵的蛇腹外衣',
        subtitle: 'Train Gangway Bellows',
        tag: 'TRANSPORTATION',
        media: [
            { type: 'image', src: 'assets/R211T_soft_shell_open_gangway.jpg' },
            { type: 'image', src: 'assets/gangway-connector.jpg' },
            { type: 'video', id: 'x3EtHiZ9KAY' }
        ],
        stats: {
            '摺疊模式': '蛇腹摺疊 (Bellows)',
            '功能': '降低風阻 + 減少噪音',
            '應用': '高鐵 / 捷運車廂'
        },
        description: `
            <p>你有注意過高鐵車廂之間那個可以伸縮的「蛇腹」嗎？就像手風琴一樣！</p>
            <p>車廂連接處利用<b>「蛇腹摺疊」</b>設計，讓列車在高速轉彎時能自由伸縮，同時保持外觀平滑。這個設計大幅降低風切聲與空氣阻力，讓乘客享有更安靜的乘車體驗，也節省了能源。</p>
            <p>下次搭高鐵時，記得觀察一下這個精巧的摺紙工程！</p>
        `
    },
    'dna': {
        title: 'DNA 奈米注射器',
        subtitle: 'DNA Origami Nanorobot',
        tag: 'BIOTECHNOLOGY',
        media: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80' },
            { type: 'image', src: 'https://media.nature.com/lw800/magazine-assets/d41586-017-08708-x/d41586-017-08708-x_15359400.jpg' }
        ],
        stats: {
            '大小': '4 微米 (鹽粒更小)',
            '精準度': '細胞級',
            '應用': '基因治療'
        },
        description: `
            <p>這是真正的「微觀摺紙」。科學家不使用紙，而是使用<b>DNA 分子</b>本身作為材料！</p>
            <p>這款 DNA 奈米裝置只有 4 微米大，比一粒鹽還小得多。它被設計成一個微小的摺疊管，裡面裝載著治療用的藥物或基因片段。只有當它遇到特定的癌細胞標記時，才會像鎖被鑰匙打開一樣，「展開」釋放出藥物。這使得癌症治療可以精準針對癌細胞，大大減少對健康細胞的副作用。</p>
        `
    },
    'forceps': {
        title: '微型手術夾爪',
        subtitle: 'Oriceps',
        tag: 'MEDICAL DEVICE',
        media: [
            { type: 'video', id: 'L_9BDZ6ZBwk' },
            { type: 'image', src: 'assets/forceps_cover.jpg' },
            { type: 'image', src: 'https://3dprintingindustry.com/wp-content/uploads/2016/03/feature-3D-printed-origami-surgical-device-byu-1.gif' }
        ],
        stats: {
            '零件減少': '75%',
            '優勢': '一體成型',
            '應用': '達文西手術'
        },
        description: `
            <p>楊百翰大學研發的機械手臂前端（Oriceps），利用摺紙原理設計出微小的夾爪。</p>
            <p>傳統的微創手術工具需要許多微小的鉸鏈和插銷，製造困難且容易故障。摺紙設計的「Oriceps」利用材料本身的撓性來彎曲，完全不需要鉸鏈。這讓它能做得更小，進入人體更深處，且減少了 75% 的零件數量，更易於消毒與製造。</p>
         `
    }
};

function openModal(id) {
    const data = labData[id];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-tag').textContent = data.tag;
    document.getElementById('modal-desc').innerHTML = data.description;

    // Build media slides dynamically
    buildMediaSlider(data.media || []);

    // Stats
    const statsContainer = document.getElementById('modal-stats');
    statsContainer.innerHTML = '';
    for (const [key, value] of Object.entries(data.stats)) {
        statsContainer.innerHTML += `
            <div class="text-center">
                <div class="text-xs text-gray-500 mb-1">${key}</div>
                <div class="text-lg font-bold text-white max-w-[100px] mx-auto leading-tight">${value}</div>
            </div>
        `;
    }

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
    // Stop all videos by clearing slider
    const slidesTrack = document.getElementById('slides-track');
    if (slidesTrack) {
        slidesTrack.innerHTML = '';
    }
    // Reset slider state
    currentSlide = 0;
    totalSlides = 0;
}

// Media Slider State
let currentSlide = 0;
let totalSlides = 0;

function buildMediaSlider(mediaArray) {
    const slidesTrack = document.getElementById('slides-track');
    const indicators = document.getElementById('slide-indicators');

    if (!slidesTrack || !indicators) return;

    // Clear existing content
    slidesTrack.innerHTML = '';
    indicators.innerHTML = '';

    // Reset state
    currentSlide = 1; // Start at 1 because of clone at beginning
    totalSlides = mediaArray.length;

    if (totalSlides === 0) {
        // No media, show placeholder
        slidesTrack.innerHTML = `
            <div class="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-800">
                <i class="fas fa-image text-6xl text-gray-600"></i>
            </div>
        `;
        return;
    }

    // Helper to create a slide element
    function createSlide(item, index) {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'w-full h-full flex-shrink-0 flex items-center justify-center bg-black';
        slideDiv.style.minWidth = '100%';

        if (item.type === 'video') {
            slideDiv.innerHTML = `
                <iframe 
                    class="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/${item.id}?rel=0&modestbranding=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            `;
        } else if (item.type === 'image') {
            slideDiv.innerHTML = `
                <img 
                    src="${item.src}" 
                    class="w-full h-full object-contain"
                    alt="Media ${index + 1}"
                    onerror="this.src='https://via.placeholder.com/800x600?text=Image+Not+Found'"
                >
            `;
        }
        return slideDiv;
    }

    // Clone last slide and prepend (for seamless backward loop)
    const lastClone = createSlide(mediaArray[mediaArray.length - 1], mediaArray.length - 1);
    lastClone.setAttribute('data-clone', 'last');
    slidesTrack.appendChild(lastClone);

    // Build actual slides
    mediaArray.forEach((item, index) => {
        slidesTrack.appendChild(createSlide(item, index));
    });

    // Clone first slide and append (for seamless forward loop)
    const firstClone = createSlide(mediaArray[0], 0);
    firstClone.setAttribute('data-clone', 'first');
    slidesTrack.appendChild(firstClone);

    // Build indicator dots (only for actual slides, not clones)
    mediaArray.forEach((item, index) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition ${index === 0 ? 'bg-white' : 'bg-white/40'}`;
        dot.onclick = () => goToSlide(index);

        // Add icon for video slides
        if (item.type === 'video') {
            dot.className = `w-4 h-4 rounded-full transition flex items-center justify-center ${index === 0 ? 'bg-white' : 'bg-white/40'}`;
            dot.innerHTML = '<i class="fas fa-play text-[6px] text-black"></i>';
        }

        indicators.appendChild(dot);
    });

    // Set initial position (no animation)
    slidesTrack.style.transition = 'none';
    slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Force reflow
    slidesTrack.offsetHeight;
    slidesTrack.style.transition = 'transform 500ms ease-out';

    updateIndicators();
}

function updateSliderPosition(animate = true) {
    const slidesTrack = document.getElementById('slides-track');
    if (!slidesTrack) return;

    if (!animate) {
        slidesTrack.style.transition = 'none';
    } else {
        slidesTrack.style.transition = 'transform 500ms ease-out';
    }

    slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (!animate) {
        // Force reflow
        slidesTrack.offsetHeight;
        slidesTrack.style.transition = 'transform 500ms ease-out';
    }

    updateIndicators();
}

function updateIndicators() {
    const indicators = document.getElementById('slide-indicators');
    if (!indicators) return;

    // Calculate actual index (accounting for clones)
    let actualIndex = currentSlide - 1;
    if (actualIndex < 0) actualIndex = totalSlides - 1;
    if (actualIndex >= totalSlides) actualIndex = 0;

    const dots = indicators.children;
    for (let i = 0; i < dots.length; i++) {
        if (i === actualIndex) {
            dots[i].classList.remove('bg-white/40');
            dots[i].classList.add('bg-white');
        } else {
            dots[i].classList.remove('bg-white');
            dots[i].classList.add('bg-white/40');
        }
    }
}

let isSliding = false;

function nextSlide() {
    if (totalSlides === 0 || isSliding) return;
    isSliding = true;

    currentSlide++;
    updateSliderPosition(true);

    // After animation, check if we're at a clone
    setTimeout(() => {
        if (currentSlide > totalSlides) {
            // We're at the first clone (after last real slide)
            currentSlide = 1;
            updateSliderPosition(false); // Jump without animation
        }
        isSliding = false;
    }, 520);
}

function prevSlide() {
    if (totalSlides === 0 || isSliding) return;
    isSliding = true;

    currentSlide--;
    updateSliderPosition(true);

    // After animation, check if we're at a clone
    setTimeout(() => {
        if (currentSlide < 1) {
            // We're at the last clone (before first real slide)
            currentSlide = totalSlides;
            updateSliderPosition(false); // Jump without animation
        }
        isSliding = false;
    }, 520);
}

function goToSlide(index) {
    if (isSliding) return;
    // Convert actual index to internal index (accounting for clone at start)
    const targetSlide = index + 1;
    if (targetSlide >= 1 && targetSlide <= totalSlides) {
        currentSlide = targetSlide;
        updateSliderPosition(true);
    }
}

// Expose slider functions globally
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;

// 3D Init
function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    const loadingText = document.getElementById('loading-text');

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    scene.fog = new THREE.Fog(0x1a1a2e, 20, 60);

    // 2. Camera Setup (Hero View)
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(22, 18, 22);
    camera.lookAt(0, 0, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    if (loadingText) loadingText.style.display = 'none';

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.5);
    sunLight.position.set(10, 20, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const earthLight = new THREE.DirectionalLight(0x0044ff, 0.5);
    earthLight.position.set(-10, -10, -5);
    scene.add(earthLight);

    // 5. Objects: Satellite Body
    const bodyGroup = new THREE.Group();
    scene.add(bodyGroup);

    const satBodyGeo = new THREE.BoxGeometry(3, 3, 3);
    const satBodyMat = new THREE.MeshStandardMaterial({
        color: 0xddbb55,
        roughness: 0.3,
        metalness: 0.9
    });
    const satBody = new THREE.Mesh(satBodyGeo, satBodyMat);
    satBody.castShadow = true;
    satBody.receiveShadow = true;
    bodyGroup.add(satBody);

    const dishGeo = new THREE.CylinderGeometry(0.5, 0, 1, 16);
    const dishMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    const dish = new THREE.Mesh(dishGeo, dishMat);
    dish.position.set(0, 1.8, 0);
    bodyGroup.add(dish);

    // 6. Solar Arrays Generation
    const solarCellMat = new THREE.MeshStandardMaterial({
        color: 0x002266,
        roughness: 0.2,
        metalness: 0.6,
        emissive: 0x000033,
        side: THREE.FrontSide
    });
    const backPanelMat = new THREE.MeshStandardMaterial({
        color: 0xcc8800,
        roughness: 0.5,
        metalness: 0.5,
        side: THREE.BackSide
    });

    function createSolarWing(direction) {
        const wingGroup = new THREE.Group();
        const panelCount = 7;
        const panelWidth = 2.5;
        const panelHeight = 3.5;
        const panelThickness = 0.08;

        const panels = [];

        for (let i = 0; i < panelCount; i++) {
            const panelGeo = new THREE.BoxGeometry(panelWidth, panelThickness, panelHeight);
            panelGeo.translate(panelWidth / 2, 0, 0);

            const greyMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
            const materials = [greyMat, greyMat, solarCellMat, backPanelMat, greyMat, greyMat];

            const panel = new THREE.Mesh(panelGeo, materials);
            panel.castShadow = true;
            panel.receiveShadow = true;
            wingGroup.add(panel);
            panels.push(panel);
        }

        return { group: wingGroup, panels: panels, dir: direction, w: panelWidth };
    }

    const rightWing = createSolarWing(1);
    const leftWing = createSolarWing(-1);

    bodyGroup.add(rightWing.group);
    bodyGroup.add(leftWing.group);

    // 7. Animation Loop
    let time = 0;

    function animate() {
        requestAnimationFrame(animate);
        time += 0.008;

        bodyGroup.rotation.y = Math.sin(time * 0.2) * 0.1;

        // 展開邏輯 (0 ~ 1)
        let cycle = (Math.sin(time) + 1) / 2;
        let progress = Math.min(Math.max((cycle - 0.2) * 1.5, 0), 1);

        updateWingZFold(rightWing, progress);
        updateWingZFold(leftWing, progress);

        renderer.render(scene, camera);
    }

    // Z-fold Logic
    function updateWingZFold(wingData, progress) {
        const { panels, dir, w } = wingData;
        const maxFoldAngle = (175 * Math.PI) / 180;
        const currentAngle = (1 - progress) * maxFoldAngle;

        let currentX = 1.6 * dir;
        let currentZ = 0;

        panels.forEach((panel, index) => {
            panel.position.set(currentX, 0, currentZ);

            let zigzagSign = (index % 2 === 0) ? 1 : -1;
            let rotAngleY = zigzagSign * currentAngle;

            if (dir === -1) {
                rotAngleY *= -1;
            }

            panel.rotation.y = rotAngleY;

            if (dir === -1) {
                panel.rotation.y += Math.PI;
            }

            let effectiveAngle = panel.rotation.y;
            let dx = w * Math.cos(effectiveAngle);
            let dz = -w * Math.sin(effectiveAngle);

            currentX += dx;
            currentZ += dz;
        });
    }

    animate();

    // RWD
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

window.addEventListener('load', initThreeJS);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.replace('bg-white/90', 'bg-white/95');
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.replace('bg-white/95', 'bg-white/90');
    }
});

// Interactive Stack Toggle
function toggleStack(container) {
    const images = container.querySelectorAll('img');
    if (images.length < 2) return;

    // Swap classNames to swap visual states (z-index, transform, brightness)
    const class0 = images[0].className;
    const class1 = images[1].className;

    images[0].className = class1;
    images[1].className = class0;
}
window.toggleStack = toggleStack;

// Card Flip Interaction
function toggleFlip(element) {
    const inner = element.querySelector('.flip-inner');
    if (inner) {
        inner.classList.toggle('flipped');
    }
}
window.toggleFlip = toggleFlip;
window.toggleFlip = toggleFlip;

// Quiz Carousel Logic
let currentQuizIndex = 0;
const totalQuizQuestions = 3;

function changeQuizQuestion(direction) {
    // Hide current
    const questions = document.querySelectorAll('.quiz-question');
    if (questions.length === 0) return;

    questions[currentQuizIndex].classList.add('hidden');
    questions[currentQuizIndex].classList.remove('animate-fade-in');

    // Update index
    currentQuizIndex += direction;
    if (currentQuizIndex >= totalQuizQuestions) currentQuizIndex = 0;
    if (currentQuizIndex < 0) currentQuizIndex = totalQuizQuestions - 1;

    // Show new
    questions[currentQuizIndex].classList.remove('hidden');
    questions[currentQuizIndex].classList.add('animate-fade-in');

    // Update dots
    const dots = document.querySelectorAll('.quiz-dot');
    dots.forEach((dot, index) => {
        if (index === currentQuizIndex) {
            dot.classList.add('bg-white', 'w-8');
            dot.classList.remove('bg-white/30', 'w-2');
        } else {
            dot.classList.add('bg-white/30', 'w-2');
            dot.classList.remove('bg-white', 'w-8');
        }
    });
}
window.changeQuizQuestion = changeQuizQuestion;

// Space Gallery State
let spaceGalleryIndex = 0;
const spaceGalleryTotal = 4;

// Space Gallery Cycler (direction: -1 for prev, +1 for next)
function cycleSpaceGallery(direction) {
    const gallery = document.getElementById('space-gallery');
    if (!gallery) return;

    const images = gallery.querySelectorAll('.gallery-img');
    const dots = document.querySelectorAll('#gallery-dots button');
    const caption = document.getElementById('space-gallery-caption');

    if (images.length === 0) return;

    // Calculate new index
    spaceGalleryIndex = (spaceGalleryIndex + direction + spaceGalleryTotal) % spaceGalleryTotal;

    // Update all images
    images.forEach((img, i) => {
        if (i === spaceGalleryIndex) {
            img.style.opacity = '1';
            img.style.zIndex = '40';
        } else {
            img.style.opacity = '0';
            img.style.zIndex = '10';
        }
    });

    // Update dots
    dots.forEach((dot, i) => {
        // Base classes that are always present
        const baseClasses = 'w-2 h-2 rounded-full transition-all duration-300 hover:scale-125';

        if (i === spaceGalleryIndex) {
            dot.className = `${baseClasses} bg-white scale-125`;
        } else {
            dot.className = `${baseClasses} bg-white/30`;
        }
    });

    // Update caption
    if (caption && images[spaceGalleryIndex]) {
        const title = images[spaceGalleryIndex].dataset.title || 'Space Technology';
        caption.textContent = `* ${title} (${spaceGalleryIndex + 1}/${spaceGalleryTotal})`;
    }
}

// Allow clicking dots to jump to specific image
function goToSpaceGallerySlide(index) {
    const diff = index - spaceGalleryIndex;
    if (diff !== 0) {
        spaceGalleryIndex = index - 1; // Set to one before so cycleSpaceGallery adds 1
        cycleSpaceGallery(1);
    }
}

window.cycleSpaceGallery = cycleSpaceGallery;
window.goToSpaceGallerySlide = goToSpaceGallerySlide;

// ============================================
// Advantage Section Three.js Animations
// ============================================

// Helper to detect Mobile or Low-end devices
function isMobileOrLegacy() {
    // 1. Check User Agent for mobile devices
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // 2. Check Screen Width (typical breakpoint)
    const isSmallScreen = window.innerWidth < 768;

    // 3. Check for WebGL support
    let hasWebGL = false;
    try {
        const canvas = document.createElement('canvas');
        hasWebGL = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        hasWebGL = false;
    }

    return isMobileUA || isSmallScreen || !hasWebGL;
}

function initAdvantageAnimations() {
    // If mobile/legacy, the individual init functions will handle showing the video
    // We just call them as usual, and they will decide what to render.
    initTransformationDemo();
    initRigidityDemo();
    initBistableDemo();
}

// Animation 1: Cube Net Folding (Transformation)
function initTransformationDemo() {
    const container = document.getElementById('advantage-canvas-1');
    if (!container) return;

    // Fallback Check
    if (isMobileOrLegacy()) {
        const video = document.getElementById('video-fallback-1');
        if (video) {
            video.classList.remove('hidden');
            // Try to play (autoplay is set, but explicit play is safer)
            video.play().catch(e => console.log('Video 1 Autoplay prevented:', e));
        }
        return; // Skip Three.js initialization
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfff8f0);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(4, 5, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Group to hold the entire paper structure
    const paperGroup = new THREE.Group();
    scene.add(paperGroup);

    const size = 1.2;
    const geometry = new THREE.PlaneGeometry(size, size);

    // Shared material settings
    const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0xfb923c, // Orange-500
        side: THREE.DoubleSide,
        metalness: 0.1,
        roughness: 0.8
    });

    // 1. Center (Bottom) Face - Fixed
    const bottomFace = new THREE.Mesh(geometry, baseMaterial.clone());
    bottomFace.rotation.x = -Math.PI / 2; // Lie flat on XZ plane
    paperGroup.add(bottomFace);

    // 2. Right Pivot & Face
    const rightPivot = new THREE.Group();
    rightPivot.position.set(size / 2, 0, 0);
    const rightFace = new THREE.Mesh(geometry, baseMaterial.clone());
    rightFace.material.color.setHex(0xfdba74); // Orange-300
    rightFace.rotation.x = -Math.PI / 2;
    rightFace.position.set(size / 2, 0, 0); // Position relative to pivot
    rightPivot.add(rightFace);
    paperGroup.add(rightPivot);

    // 3. Left Pivot & Face
    const leftPivot = new THREE.Group();
    leftPivot.position.set(-size / 2, 0, 0);
    const leftFace = new THREE.Mesh(geometry, baseMaterial.clone());
    leftFace.material.color.setHex(0xfdba74);
    leftFace.rotation.x = -Math.PI / 2;
    leftFace.position.set(-size / 2, 0, 0);
    leftPivot.add(leftFace);
    paperGroup.add(leftPivot);

    // 4. Front Pivot & Face (Z+)
    // Note: In Three.js, +Z is towards camera (if at pos Z), but "Front" usually means +Z side here.
    const frontPivot = new THREE.Group();
    frontPivot.position.set(0, 0, size / 2);
    const frontFace = new THREE.Mesh(geometry, baseMaterial.clone());
    frontFace.material.color.setHex(0xfdce95); // Lighter Orange
    frontFace.rotation.x = -Math.PI / 2;
    frontFace.position.set(0, 0, size / 2);
    frontPivot.add(frontFace);
    paperGroup.add(frontPivot);

    // 5. Back Pivot & Face (Z-)
    const backPivot = new THREE.Group();
    backPivot.position.set(0, 0, -size / 2);
    const backFace = new THREE.Mesh(geometry, baseMaterial.clone());
    backFace.material.color.setHex(0xfdce95);
    backFace.rotation.x = -Math.PI / 2;
    backFace.position.set(0, 0, -size / 2);
    backPivot.add(backFace);
    paperGroup.add(backPivot);

    // 6. Top Pivot & Face (Attached to Front Face)
    // Pivot is at the outer edge of the Front Face
    const topPivot = new THREE.Group();
    topPivot.position.set(0, 0, size); // Relative to Front Pivot (which is at 0,0,size/2 global? No, relative to front pivot origin)
    // Front face extends from 0 to size in Z (local to front pivot).
    // So Top Pivot is at Z=size inside Front Pivot group.

    const topFace = new THREE.Mesh(geometry, baseMaterial.clone());
    topFace.material.color.setHex(0xffedd5); // Lightest
    topFace.rotation.x = -Math.PI / 2;
    topFace.position.set(0, 0, size / 2); // Relative to top pivot
    topPivot.add(topFace);
    frontPivot.add(topPivot); // Attach to Front Pivot group

    let time = 0;
    let isPaused = false;

    // Wheel zoom (FOV-based for pure scaling effect)
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.fov += e.deltaY * 0.05;
        camera.fov = Math.max(20, Math.min(80, camera.fov));
        camera.updateProjectionMatrix();
    }, { passive: false });

    // Toolbar for controls
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'position:absolute; bottom:16px; left:50%; transform:translateX(-50%); display:flex; gap:16px; z-index:100; padding:10px 20px; background:rgba(255,255,255,0.85); border-radius:30px; box-shadow:0 4px 15px rgba(0,0,0,0.1); backdrop-filter:blur(5px); transition: opacity 0.3s;';
    container.style.position = 'relative';
    container.appendChild(toolbar);

    // Pause/Play Button
    const pauseBtn = document.createElement('button');
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    pauseBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

    pauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.innerHTML = '<i class="fas fa-play" style="margin-left:2px;"></i>';
            pauseBtn.style.background = '#f97316'; // Orange-500
            pauseBtn.style.color = 'white';
        } else {
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            pauseBtn.style.background = '#f4f4f5';
            pauseBtn.style.color = '#52525b';
        }
    });
    toolbar.appendChild(pauseBtn);

    // Expand/Compress Button
    const expandBtn = document.createElement('button');
    expandBtn.innerHTML = '<i class="fas fa-expand"></i>';
    expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

    let isExpanded = false;
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isExpanded) {
            // Enter Fullscreen
            container.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999999; background:#fff8f0;';
            expandBtn.innerHTML = '<i class="fas fa-compress"></i>';

            // For fullscreen, we can absolute position the button if we want to move it away
            // But to keep it simple, let's keep it in toolbar for now or clean up.
            // Current user feedback: "Button layout messed up on return"
            // So we MUST ensure clean restoration.

            toolbar.style.bottom = '30px';

            isExpanded = true;
            document.body.style.overflow = 'hidden';
            document.body.classList.add('fullscreen-active');
        } else {
            // Exit Fullscreen
            container.style.cssText = 'position:relative; width:100%; height:16rem;';
            expandBtn.innerHTML = '<i class="fas fa-expand"></i>';

            // RESTORE original button style (Flex item)
            expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

            // Reset toolbar position
            toolbar.style.bottom = '16px';

            isExpanded = false;
            document.body.style.overflow = '';
            document.body.classList.remove('fullscreen-active');
        }

        // Resize renderer
        setTimeout(() => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }, 50);
    });
    toolbar.appendChild(expandBtn);

    function animate() {
        requestAnimationFrame(animate);

        if (!isPaused) {
            time += 0.015;
        }

        // Cycle: Unfolded (0) -> Folded (1) -> Unfolded (0)
        // Using sin^2 or similar for smooth pause at ends
        const t = (Math.sin(time) + 1) / 2;
        // Sharpen the curve to hold position slightly
        const foldAngle = t * Math.PI / 2; // 0 to 90 degrees

        // Apply rotations
        // Right face folds UP (around Z axis) -> rotates +90 around Z (CCW if X -> Y)
        // Wait, pivot at +X. Face at +X. To fold UP, it needs to rotate towards +Y.
        // Right axis is +Z. Rotation +90 deg around +Z axis?
        // Right pivot Z axis points BACK? No, Y is Up.
        // Rotation around Z axis: +X -> +Y is +Rotation.
        rightPivot.rotation.z = foldAngle;

        // Left face folds UP. pivot at -X. Face at -X. To fold UP, needs -Rotation around Z.
        leftPivot.rotation.z = -foldAngle;

        // Front face folds UP. pivot at +Z. Face at +Z. To fold UP (-Z to +Y), needs -Rotation around X.
        frontPivot.rotation.x = -foldAngle;

        // Back face folds UP. pivot at -Z. Face at -Z. To fold UP (+Z to +Y), needs +Rotation around X.
        backPivot.rotation.x = foldAngle;

        // Top face folds RELATIVE to Front face.
        // It needs to fold another 90 degrees to cover the top.
        topPivot.rotation.x = -foldAngle;

        // Slowly rotate entire object
        if (!isPaused) {
            paperGroup.rotation.y = time * 0.2;
        }

        renderer.render(scene, camera);
    }
    animate();
}

// Animation 2: Corrugated Sheet (Rigidity)
function initRigidityDemo() {
    const container = document.getElementById('advantage-canvas-2');
    if (!container) return;

    // Fallback Check
    if (isMobileOrLegacy()) {
        const video = document.getElementById('video-fallback-2');
        if (video) {
            video.classList.remove('hidden');
            video.play().catch(e => console.log('Video 2 Autoplay prevented:', e));
        }
        return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfdf2f8);

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    // Better lighting for shadow/highlight variation
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xffeedd, 0.3);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    // Single continuous paper - high subdivision for smooth folding
    const paperWidth = 4;
    const paperHeight = 2.5;
    const widthSegments = 40; // Many segments for smooth accordion
    const heightSegments = 1;

    const paperGeometry = new THREE.PlaneGeometry(paperWidth, paperHeight, widthSegments, heightSegments);

    // Single uniform pink color - lighting creates variation
    const paperMaterial = new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        side: THREE.DoubleSide,
        metalness: 0.0,
        roughness: 0.7,
        flatShading: false
    });

    const paper = new THREE.Mesh(paperGeometry, paperMaterial);
    paper.rotation.x = -0.3;
    scene.add(paper);

    // Store original positions
    const positions = paperGeometry.attributes.position;
    const originalPositions = [];
    for (let i = 0; i < positions.count; i++) {
        originalPositions.push({
            x: positions.getX(i),
            y: positions.getY(i),
            z: positions.getZ(i)
        });
    }

    let time = 0;
    let isPaused = false;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let rotationX = -0.3;
    let rotationY = 0;

    // Mouse drag for 3D rotation
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        rotationY += deltaX * 0.01;
        rotationX += deltaY * 0.01;
        rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });

    // Click to pause/resume animation
    container.addEventListener('dblclick', () => {
        isPaused = !isPaused;
    });

    // Wheel zoom (FOV-based for pure scaling effect)
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.fov += e.deltaY * 0.05;
        camera.fov = Math.max(20, Math.min(80, camera.fov));
        camera.updateProjectionMatrix();
    }, { passive: false });

    // Toolbar for controls
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'position:absolute; bottom:16px; left:50%; transform:translateX(-50%); display:flex; gap:16px; z-index:100; padding:10px 20px; background:rgba(255,255,255,0.85); border-radius:30px; box-shadow:0 4px 15px rgba(0,0,0,0.1); backdrop-filter:blur(5px); transition: opacity 0.3s;';
    container.style.position = 'relative';
    container.appendChild(toolbar);

    // Pause/Play Button
    const pauseBtn = document.createElement('button');
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    pauseBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

    pauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.innerHTML = '<i class="fas fa-play" style="margin-left:2px;"></i>';
            pauseBtn.style.background = '#f472b6'; // Pink-400
            pauseBtn.style.color = 'white';
        } else {
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            pauseBtn.style.background = '#f4f4f5';
            pauseBtn.style.color = '#52525b';
        }
    });
    toolbar.appendChild(pauseBtn);

    // Expand/Compress Button
    const expandBtn = document.createElement('button');
    expandBtn.innerHTML = '<i class="fas fa-expand"></i>';
    expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

    let isExpanded = false;
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isExpanded) {
            // Enter Fullscreen
            container.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999999; background:#fdf2f8;';
            expandBtn.innerHTML = '<i class="fas fa-compress"></i>';

            toolbar.style.bottom = '30px';

            isExpanded = true;
            document.body.style.overflow = 'hidden';
            document.body.classList.add('fullscreen-active');
        } else {
            // Exit Fullscreen
            container.style.cssText = 'position:relative; width:100%; height:16rem;';
            expandBtn.innerHTML = '<i class="fas fa-expand"></i>';

            // RESTORE original button style
            expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

            // Reset toolbar position
            toolbar.style.bottom = '16px';

            isExpanded = false;
            document.body.style.overflow = '';
            document.body.classList.remove('fullscreen-active');
        }

        // Resize renderer
        setTimeout(() => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }, 50);
    });
    toolbar.appendChild(expandBtn);

    container.style.cursor = 'grab';

    function animate() {
        requestAnimationFrame(animate);

        if (!isPaused) {
            time += 0.015;
        }

        // Fold amount oscillates between 0 (flat) and 1 (fully folded)
        const foldAmount = (Math.sin(time) + 1) / 2;

        // Number of accordion folds
        const foldCount = 6;
        const foldDepth = 0.5 * foldAmount; // Max depth of fold

        // Apply accordion wave to vertices
        for (let i = 0; i < positions.count; i++) {
            const origX = originalPositions[i].x;
            const origY = originalPositions[i].y;

            // Normalize X position (0 to 1)
            const normalizedX = (origX + paperWidth / 2) / paperWidth;

            // Create sawtooth pattern for accordion folds
            const foldPhase = normalizedX * foldCount;
            const foldIndex = Math.floor(foldPhase);
            const foldProgress = foldPhase - foldIndex;

            // Alternating up/down for each fold segment
            const isEvenFold = foldIndex % 2 === 0;
            const zOffset = (isEvenFold ? foldProgress : (1 - foldProgress)) * foldDepth * 2 - foldDepth;

            // Compress X proportionally - paper width decreases as it folds
            // When fully folded, width should be approximately original / foldCount
            const compressionRatio = 1 - foldAmount * 0.7;
            const newX = origX * compressionRatio;

            positions.setX(i, newX);
            positions.setZ(i, zOffset);
        }

        positions.needsUpdate = true;
        paperGeometry.computeVertexNormals(); // Recalculate for proper lighting

        // Apply rotation from mouse drag or auto-rotate
        if (!isDragging && !isPaused) {
            rotationY = Math.sin(time * 0.3) * 0.25;
        }
        paper.rotation.x = rotationX;
        paper.rotation.y = rotationY;

        renderer.render(scene, camera);
    }
    animate();
}

// Animation 3: Bi-stable "Slap Bracelet" (Tape Measure)
function initBistableDemo() {
    const container = document.getElementById('advantage-canvas-3');
    if (!container) return;

    // Fallback Check
    if (isMobileOrLegacy()) {
        const video = document.getElementById('video-fallback-3');
        if (video) {
            video.classList.remove('hidden');
            video.play().catch(e => console.log('Video 3 Autoplay prevented:', e));
        }
        return;
    }

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0fdf9); // Light teal/mint background

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);

    // Responsive Camera
    // Use scale or distance to fit the new longer object
    const isMobile = container.clientWidth < 768;
    if (isMobile) {
        camera.position.set(0, 14, 20); // Further back
    } else {
        camera.position.set(0, 8, 14);  // Standard
    }
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Handle Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // Update Camera Position for Mobile breakpoint
        const isMobileNow = width < 768;
        if (isMobileNow) {
            camera.position.set(0, 14, 20);
        } else {
            camera.position.set(0, 8, 14);
        }
    });

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const rimLight = new THREE.SpotLight(0x14b8a6, 3);
    rimLight.position.set(-5, 2, -5);
    rimLight.lookAt(0, 0, 0);
    scene.add(rimLight);

    // --- Slap Bracelet Model ---
    const width = 1.2;  // Thinner
    const length = 24;  // Longer
    const segsW = 20;
    const segsL = 200;  // More segments for smooth coil

    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    const geometry = new THREE.PlaneGeometry(width, length, segsW, segsL);

    // Stylish Material
    const material = new THREE.MeshStandardMaterial({
        color: 0x0d9488,
        emissive: 0x002c2b,
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4,
        flatShading: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    meshGroup.add(mesh);

    // Rotate group to present Length along X axis
    meshGroup.rotation.z = -Math.PI / 2;

    // --- Animation Logic ---
    const positionAttribute = geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    const basePositions = [];
    for (let i = 0; i < vertexCount; i++) {
        basePositions.push({
            x: positionAttribute.getX(i),
            y: positionAttribute.getY(i),
            z: positionAttribute.getZ(i)
        });
    }

    let isCoiled = false;
    let transitionState = 0;
    const animSpeed = 0.02; // Slower transition for effect

    function updateGeometry(t) {
        // Curve strength (Deep C when straight)
        let curveStrength = 0.8 * (1 - Math.pow(t, 0.5));

        // Coiling
        // We want a tight spiral.
        // Target Radius for innermost can be small, e.g. 1.2
        const targetInnerRadius = 1.2;

        // Calculate max angle based on length and average radius
        // Approx length = Angle * Radius_avg
        // Radius grows from targetInnerRadius to targetInnerRadius + thickness_offset
        // Let's assume average radius is around 1.5
        // MaxAngle = 24 / 1.5 = 16 rads ~ 2.5 turns.
        const maxAngle = length / 1.5;

        // Non-linear t for coiling visual
        const coilT = t * t * (3 - 2 * t);

        for (let i = 0; i < vertexCount; i++) {
            const base = basePositions[i];

            // Width Curve
            const normX = base.x / (width / 2);
            let zOffset = curveStrength * (1.0 - normX * normX);

            let px, py, pz;

            if (coilT < 0.001) {
                // Straight
                px = base.x;
                py = base.y;
                pz = base.z + zOffset;
            } else {
                // Normalize Distance (0 at start, Length at end)
                // base.y is -L/2 to +L/2
                const distFromStart = base.y + length / 2;

                // Current Max Angle
                const currentMaxAngle = maxAngle * coilT;

                // Angle for this vertex
                let angle = (distFromStart / length) * currentMaxAngle;

                // Calculate Radius
                // Radius shrinks as 't' goes to 1 (Infinite -> Finite)
                // Interpolate Curvature: 0 -> 1/R
                const minR = 10000;
                const finalR = targetInnerRadius + (distFromStart / length) * 0.5; // Final R grows slightly along length for spiral out
                const targetCurvature = 1 / finalR;

                const currentCurvature = targetCurvature * coilT;

                let R = (currentCurvature < 0.0001) ? minR : (1 / currentCurvature);

                // Add spiral layering offset to prevent Z-fighting
                // Radial offset based on angle
                const spiralGap = 0.15; // Gap between layers
                // R += (angle / (Math.PI*2)) * spiralGap; // This expands radius as we wind out?
                // Actually if we wind "around", inner layers are covered by outer layers.
                // If we map 0 to Inner, then R should Increase with Angle.

                // Note: finalR calculation above already includes slight growth.

                // Effective Radius including C-curve height (which is 0 when fully coiled)
                const effectiveR = R + zOffset;

                // Center the coil on the X-axis (Angle-wise)
                // Coil spans 0 to currentMaxAngle.
                // Center angle = currentMaxAngle / 2.
                const relativeAngle = angle - (currentMaxAngle / 2);

                // Position
                // We wrap around X axis (Y becomes Arc)
                // Z becomes Radius direction
                const sinA = Math.sin(relativeAngle);
                const cosA = Math.cos(relativeAngle);

                py = effectiveR * Math.sin(relativeAngle);
                pz = -R + effectiveR * cosA;

                // Shift so the bottom of the coil sits on 0?
                // Or center of mass at 0?
                // Let's keep it generally centered physically
                // Center of rotation is at z = -R relative to surface.
                // At straight (R large), Z ~ 0.
                // At coiled (R small), center is closer.
                // To keep visually centered without jumping:
                // Shift Z back by (R_start - R_current)? No.
                // Let's manually tweak centering based on t

                pz += (1 - t) * 0 - t * targetInnerRadius; // Rough tweak

                px = base.x;
            }

            positionAttribute.setXYZ(i, px, py, pz);
        }

        positionAttribute.needsUpdate = true;
        geometry.computeVertexNormals();
    }

    // --- Controls ---
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    // Initial Orientation adjustments
    // We want the Straight strip to be horizontal.
    // Length is Y. We rotated Z by -90 deg. So Length is X.
    // U-curve is along Z.
    // It looks good.

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;

        // Consistent rotation
        meshGroup.rotation.y += deltaX * 0.01;
        meshGroup.rotation.x += deltaY * 0.01;

        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    container.addEventListener('mouseleave', () => isDragging = false);

    // Wheel zoom (FOV-based for pure scaling effect)
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.fov += e.deltaY * 0.05;
        camera.fov = Math.max(20, Math.min(80, camera.fov));
        camera.updateProjectionMatrix();
    }, { passive: false });

    // Toolbar
    const toolbar = document.createElement('div');
    toolbar.style.cssText = 'position:absolute; bottom:16px; left:50%; transform:translateX(-50%); display:flex; gap:16px; z-index:100; padding:10px 20px; background:rgba(255,255,255,0.85); border-radius:30px; box-shadow:0 4px 15px rgba(0,0,0,0.1); backdrop-filter:blur(5px); transition: opacity 0.3s;';
    container.style.position = 'relative';
    container.appendChild(toolbar);

    // SNAP Button
    const snapBtn = document.createElement('button');
    snapBtn.innerHTML = 'SNAP!';
    snapBtn.style.cssText = 'height:40px; px:16px; padding:0 20px; border-radius:20px; border:none; background:#0d9488; color:white; cursor:pointer; font-weight:bold; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:14px; transition:all 0.2s; white-space:nowrap;';

    snapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isCoiled = !isCoiled;
        snapBtn.innerText = isCoiled ? "EXTEND" : "SNAP!";
        snapBtn.style.background = isCoiled ? "#0f766e" : "#0d9488";
    });
    toolbar.appendChild(snapBtn);

    // Fullscreen Button
    const expandBtn = document.createElement('button');
    expandBtn.innerHTML = '<i class="fas fa-expand"></i>';
    expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

    let isExpanded = false;
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isExpanded) {
            container.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:999999; background:#f0fdf9;';
            expandBtn.innerHTML = '<i class="fas fa-compress"></i>';
            toolbar.style.bottom = '30px';
            isExpanded = true;
            document.body.style.overflow = 'hidden';
            document.body.classList.add('fullscreen-active');
        } else {
            container.style.cssText = 'position:relative; width:100%; height:16rem;';
            expandBtn.innerHTML = '<i class="fas fa-expand"></i>';

            // RESTORE original button style
            expandBtn.style.cssText = 'width:40px; height:40px; border-radius:50%; border:none; background:#f4f4f5; color:#52525b; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); font-size:16px; transition:all 0.2s;';

            toolbar.style.bottom = '16px';
            isExpanded = false;
            document.body.style.overflow = '';
            document.body.classList.remove('fullscreen-active');
        }
        setTimeout(() => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            // Mobile adjust on expand
            if (isMobile && !isExpanded) {
                camera.position.set(0, 14, 20);
            } else if (isMobile && isExpanded) {
                camera.position.set(0, 10, 15);
            }
        }, 50);
    });
    toolbar.appendChild(expandBtn);

    function animate() {
        requestAnimationFrame(animate);

        // Smooth State Transtion
        if (isCoiled && transitionState < 1) {
            transitionState += animSpeed;
            if (transitionState > 1) transitionState = 1;
            updateGeometry(transitionState);
        } else if (!isCoiled && transitionState > 0) {
            transitionState -= animSpeed;
            if (transitionState < 0) transitionState = 0;
            updateGeometry(transitionState);
        }

        // Idle Float
        meshGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.1;

        renderer.render(scene, camera);
    }

    // Init state
    updateGeometry(0);
    animate();
}

// Initialize advantage animations when page loads
window.addEventListener('load', initAdvantageAnimations);
