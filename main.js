// ==========================================
// 1. CONFIGURATION & PORTFOLIO DATA
// ==========================================
const PROJECTS = [
  {
    id: "proj1",
    title: "Hyper Drift Web Engine",
    desc: "A high-performance HTML5 Canvas 2D game engine with custom particle physics, sprite animation systems, and PS2 retro UI.",
    tech: ["JavaScript (ES6+)", "HTML5 Canvas", "Web Audio API", "CSS3"],
    size: "51 KB"
  },
  {
    id: "proj2",
    title: "Low-Level Systems Visualizer",
    desc: "RISC-V assembly simulator and cache controller hardware visualizer designed for interactive computer architecture education.",
    tech: ["C++", "CMake", "RISC-V", "Assembly"],
    size: "42 KB"
  },
  {
    id: "proj3",
    title: "Cyberpunk Neural Matrix",
    desc: "Real-time AI matrix visualization engine featuring custom shaders and audio-reactive particle nodes.",
    tech: ["TypeScript", "WebGL", "Three.js"],
    size: "68 KB"
  }
];

const BIO_TEXT = "Greetings! I'm sleepyhead, a Computer Science Engineer crafting high-performance systems, retro game engines, and immersive web experiences.";
const SKILLS = ["C++", "JavaScript", "HTML5 Canvas", "Web Audio API", "Git", "CMake", "RISC-V", "CSS3"];

const ACHIEVEMENTS = [
  { id: "booted", title: "System Booted", desc: "Successfully booted into the PS2 matrix." },
  { id: "browser_opened", title: "Memory Browser Access", desc: "Entered the PS2 Memory Card Save Browser." },
  { id: "drifter_dash", title: "Phantasm Dash", desc: "Executed a hard-light phantom dash." },
  { id: "sword_slash", title: "Data Blade", desc: "Slashed a corrupt data node with your hard-light sword." },
  { id: "table", title: "Project Explorer", desc: "Accessed the Main Project Terminal." },
  { id: "counter", title: "Drifter Lore", desc: "Scanned the Bio & Capabilities Shrine." }
];

let unlockedAchievements = JSON.parse(localStorage.getItem('sleepyhead_achievements')) || ["booted"];

// Config state
const DATE_FORMATS = ['DD/MM/YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY'];
let dateFmtIndex = 0;
let cfgDateFormat = DATE_FORMATS[0];

const CLOCK_DISPLAYS = ['24-Hour', '12-Hour (AM/PM)'];
let clockDispIndex = 0;

const VCR_FILTERS = ['VCR VHS Tracking', 'CRT Scanlines', 'Disabled'];
let vcrFilterIndex = 0;

const CONSOLE_PALETTES = ['PS2 Classic Blue', 'Dorfic', 'Liquid Metal', 'Frutiger Aero', 'Mecha Sci-Fi', 'Cyberpunk'];
let paletteIndex = 0;

const BROWSER_THEMES = ['Classic Save Cards', 'Glassmorphic 3D', 'Cyber Matrix', 'VCR Slate'];
let bthemeIndex = 0;

let cfgAudio = true;

// ==========================================
// 2. PS2 WEB AUDIO SYNTHESIZER
// ==========================================
let audioCtx = null;

function initAudio() {
  if (!audioCtx && cfgAudio) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playPS2SelectSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(680, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(340, audioCtx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch(e) {}
}

function playPS2ConfirmSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.18); // C6
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.18);
  } catch(e) {}
}

function playPS2BackSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch(e) {}
}

function playDashSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch(e) {}
}

function playSlashSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(900, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ==========================================
// 3. SEVEN STARS ORBITAL ANIMATION ENGINE (Image 1)
// ==========================================
const sevenStarsCanvas = document.getElementById('seven-stars-canvas');
const ssCtx = sevenStarsCanvas ? sevenStarsCanvas.getContext('2d') : null;

function resizeSevenStars() {
  if (!sevenStarsCanvas) return;
  sevenStarsCanvas.width = window.innerWidth;
  sevenStarsCanvas.height = window.innerHeight;
}
resizeSevenStars();
window.addEventListener('resize', resizeSevenStars);

let starAngle = 0;
function renderSevenStars() {
  if (!ssCtx || document.getElementById('ps2-main-menu').classList.contains('hidden')) {
    requestAnimationFrame(renderSevenStars);
    return;
  }

  ssCtx.clearRect(0, 0, sevenStarsCanvas.width, sevenStarsCanvas.height);
  const cx = sevenStarsCanvas.width * 0.4;
  const cy = sevenStarsCanvas.height * 0.5;

  // Draw 3 Orbital Ellipse Rings
  ssCtx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
  ssCtx.lineWidth = 1.5;

  for (let r = 0; r < 3; r++) {
    ssCtx.save();
    ssCtx.translate(cx, cy);
    ssCtx.rotate((r * Math.PI / 3) + (starAngle * 0.2));
    ssCtx.beginPath();
    ssCtx.ellipse(0, 0, 160, 80, 0, 0, Math.PI * 2);
    ssCtx.stroke();
    ssCtx.restore();
  }

  // Draw 7 Orbiting Cyan Orbs
  const numOrbs = 7;
  for (let i = 0; i < numOrbs; i++) {
    const orbA = starAngle + (i * Math.PI * 2 / numOrbs);
    const rx = 160 * Math.cos(orbA);
    const ry = 80 * Math.sin(orbA);

    // Apply rotation tilt
    const rot = Math.PI / 6;
    const finalX = cx + (rx * Math.cos(rot) - ry * Math.sin(rot));
    const finalY = cy + (rx * Math.sin(rot) + ry * Math.cos(rot));

    ssCtx.shadowColor = '#00f0ff';
    ssCtx.shadowBlur = 15;
    ssCtx.fillStyle = '#00f0ff';
    ssCtx.beginPath();
    ssCtx.arc(finalX, finalY, i === 0 ? 12 : 9, 0, Math.PI * 2);
    ssCtx.fill();
  }
  ssCtx.shadowBlur = 0;

  starAngle += 0.015;
  requestAnimationFrame(renderSevenStars);
}
requestAnimationFrame(renderSevenStars);

// ==========================================
// 4. SPOKE SPHERE SYSTEM CONFIG DIAL (Image 2)
// ==========================================
const spokeCanvas = document.getElementById('spoke-dial-canvas');
const spokeCtx = spokeCanvas ? spokeCanvas.getContext('2d') : null;

let spokeAngle = 0;
function renderSpokeDial() {
  if (!spokeCtx || document.getElementById('ps2-sysconfig-screen').classList.contains('hidden')) {
    requestAnimationFrame(renderSpokeDial);
    return;
  }

  spokeCtx.clearRect(0, 0, spokeCanvas.width, spokeCanvas.height);
  const cx = spokeCanvas.width * 0.5;
  const cy = spokeCanvas.height * 0.5;

  // Center Glowing Sphere
  spokeCtx.shadowColor = '#00f0ff';
  spokeCtx.shadowBlur = 20;
  spokeCtx.fillStyle = '#00f0ff';
  spokeCtx.beginPath();
  spokeCtx.arc(cx, cy, 24, 0, Math.PI * 2);
  spokeCtx.fill();
  spokeCtx.shadowBlur = 0;

  // 12 Radiating Spoke Tubes
  const spokes = 12;
  spokeCtx.strokeStyle = 'rgba(100, 160, 220, 0.4)';
  spokeCtx.lineWidth = 6;

  for (let i = 0; i < spokes; i++) {
    const a = (i * Math.PI * 2 / spokes) + spokeAngle;
    const rOuter = 110;
    spokeCtx.beginPath();
    spokeCtx.moveTo(cx, cy);
    spokeCtx.lineTo(cx + Math.cos(a) * rOuter, cy + Math.sin(a) * rOuter);
    spokeCtx.stroke();
  }

  // Orbiting Translucent Cubes
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI * 2 / 6) - (spokeAngle * 0.8);
    const radius = 90;
    const qx = cx + Math.cos(a) * radius;
    const qy = cy + Math.sin(a) * radius;

    spokeCtx.fillStyle = 'rgba(0, 240, 255, 0.15)';
    spokeCtx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
    spokeCtx.lineWidth = 1.5;

    spokeCtx.fillRect(qx - 14, qy - 14, 28, 28);
    spokeCtx.strokeRect(qx - 14, qy - 14, 28, 28);
  }

  spokeAngle += 0.01;
  requestAnimationFrame(renderSpokeDial);
}
requestAnimationFrame(renderSpokeDial);

// ==========================================
// 5. VERSION CONSTELLATION CANVAS (Image 4)
// ==========================================
const versionCanvas = document.getElementById('version-orbs-canvas');
const vCtx = versionCanvas ? versionCanvas.getContext('2d') : null;

let vAngle = 0;
function renderVersionConstellation() {
  if (!vCtx || document.getElementById('ps2-version-screen').classList.contains('hidden')) {
    requestAnimationFrame(renderVersionConstellation);
    return;
  }

  vCtx.clearRect(0, 0, versionCanvas.width, versionCanvas.height);
  const points = [
    { x: 50, y: 60 },
    { x: 120, y: 40 },
    { x: 200, y: 50 },
    { x: 170, y: 120 },
    { x: 80, y: 160 },
    { x: 240, y: 180 }
  ];

  vCtx.fillStyle = '#00f0ff';
  vCtx.shadowColor = '#00f0ff';
  vCtx.shadowBlur = 12;

  points.forEach((pt, idx) => {
    const floatY = pt.y + Math.sin(vAngle + idx) * 6;
    vCtx.beginPath();
    vCtx.arc(pt.x, floatY, 6, 0, Math.PI * 2);
    vCtx.fill();
  });
  vCtx.shadowBlur = 0;

  vAngle += 0.02;
  requestAnimationFrame(renderVersionConstellation);
}
requestAnimationFrame(renderVersionConstellation);

// ==========================================
// 6. NAVIGATION STATE MACHINE & SCREEN SWITCHER
// ==========================================
const screens = {
  boot: document.getElementById('boot-prompt'),
  bootVideoWrap: document.getElementById('boot-video-wrap'),
  intro: document.getElementById('ps2-intro-screen'),
  mainMenu: document.getElementById('ps2-main-menu'),
  version: document.getElementById('ps2-version-screen'),
  sysconfig: document.getElementById('ps2-sysconfig-screen'),
  memcard: document.getElementById('ps2-memcard-browser'),
  game: document.getElementById('game-wrap')
};

const bootVideo = document.getElementById('boot-video');

let currentScreen = 'boot';
let mainMenuIndex = 0; // 0: Browser, 1: System Configuration
let sysConfigIndex = 0; // 0: Date, 1: Clock, 2: VCR, 3: Palette, 4: BrowserTheme, 5: Audio
let memcardIndex = 0; // 0..5 grid index

function showScreen(targetScreen) {
  Object.keys(screens).forEach(key => {
    if (screens[key]) {
      if (key === targetScreen) screens[key].classList.remove('hidden');
      else screens[key].classList.add('hidden');
    }
  });
  currentScreen = targetScreen;
}

// System clock update
function updateSystemClock() {
  const timeEl = document.getElementById('sys-time-disp');
  const dateEl = document.getElementById('sys-date-disp');
  const now = new Date();

  if (timeEl) {
    if (CLOCK_DISPLAYS[clockDispIndex] === '12-Hour (AM/PM)') {
      timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    } else {
      timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }
  }
  
  if (dateEl) {
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const yyyy = now.getFullYear();
    if (cfgDateFormat === 'DD/MM/YYYY') dateEl.innerText = `${dd}/${mm}/${yyyy}`;
    else if (cfgDateFormat === 'YYYY-MM-DD') dateEl.innerText = `${yyyy}-${mm}-${dd}`;
    else dateEl.innerText = `${mm}/${dd}/${yyyy}`;
  }
}
setInterval(updateSystemClock, 1000);
updateSystemClock();

// Boot sequence handlers
function handleBootClick() {
  initAudio();
  if (bootVideo) {
    showScreen('bootVideoWrap');
    bootVideo.currentTime = 0;
    bootVideo.play().catch(err => {
      console.warn("Boot video playback error/blocked, advancing to intro:", err);
      transitionFromVideoToIntro();
    });
  } else {
    transitionFromVideoToIntro();
  }
}

function transitionFromVideoToIntro() {
  if (bootVideo) bootVideo.pause();
  showScreen('intro');
  playPS2ConfirmSound();
}

if (bootVideo) {
  bootVideo.addEventListener('ended', transitionFromVideoToIntro);
}

if (screens.bootVideoWrap) {
  screens.bootVideoWrap.addEventListener('click', transitionFromVideoToIntro);
}

screens.boot.addEventListener('click', handleBootClick, { once: true });

screens.intro.addEventListener('click', () => {
  showScreen('mainMenu');
  playPS2ConfirmSound();
});

// Main Menu Navigation (Image 1)
function updateMainMenuSelection(index) {
  mainMenuIndex = index;
  const items = document.querySelectorAll('.main-menu-options .menu-item');
  items.forEach((item, idx) => {
    if (idx === mainMenuIndex) item.classList.add('active');
    else item.classList.remove('active');
  });
  playPS2SelectSound();
}

document.getElementById('menu-opt-browser').addEventListener('mouseenter', () => updateMainMenuSelection(0));
document.getElementById('menu-opt-sysconfig').addEventListener('mouseenter', () => updateMainMenuSelection(1));

document.getElementById('menu-opt-browser').addEventListener('click', () => enterMainMenuOption());
document.getElementById('menu-opt-sysconfig').addEventListener('click', () => enterMainMenuOption());

function enterMainMenuOption() {
  playPS2ConfirmSound();
  if (mainMenuIndex === 0) {
    unlockAchievement('browser_opened');
    showScreen('memcard');
    updateMemcardSelection(0);
  } else {
    showScreen('sysconfig');
    updateSysConfigSelection(0);
  }
}

// System Config Navigation (Image 2)
function updateSysConfigSelection(index) {
  const opts = document.querySelectorAll('.sysconfig-opt');
  if (index < 0) index = opts.length - 1;
  if (index >= opts.length) index = 0;
  sysConfigIndex = index;

  opts.forEach((o, idx) => {
    if (idx === sysConfigIndex) o.classList.add('selected');
    else o.classList.remove('selected');
  });
  playPS2SelectSound();
}

document.querySelectorAll('.sysconfig-opt').forEach((opt, idx) => {
  opt.addEventListener('mouseenter', () => updateSysConfigSelection(idx));
  opt.addEventListener('click', () => toggleSysConfigOption());
});

function toggleSysConfigOption() {
  playPS2ConfirmSound();
  if (sysConfigIndex === 0) {
    dateFmtIndex = (dateFmtIndex + 1) % DATE_FORMATS.length;
    cfgDateFormat = DATE_FORMATS[dateFmtIndex];
    document.getElementById('val-date-format').innerText = cfgDateFormat;
  } else if (sysConfigIndex === 1) {
    clockDispIndex = (clockDispIndex + 1) % CLOCK_DISPLAYS.length;
    document.getElementById('val-clock').innerText = CLOCK_DISPLAYS[clockDispIndex];
  } else if (sysConfigIndex === 2) {
    vcrFilterIndex = (vcrFilterIndex + 1) % VCR_FILTERS.length;
    const currentVCR = VCR_FILTERS[vcrFilterIndex];
    document.getElementById('val-vcr').innerText = currentVCR;
    document.body.classList.toggle('vcr-overlay', currentVCR === 'VCR VHS Tracking');
    document.body.classList.toggle('crt-overlay', currentVCR !== 'Disabled');
  } else if (sysConfigIndex === 3) {
    paletteIndex = (paletteIndex + 1) % CONSOLE_PALETTES.length;
    const currentPalette = CONSOLE_PALETTES[paletteIndex];
    document.getElementById('val-palette').innerText = currentPalette;
    document.body.setAttribute('data-palette', currentPalette);
    applyWallpaperTheme(currentPalette);
  } else if (sysConfigIndex === 4) {
    bthemeIndex = (bthemeIndex + 1) % BROWSER_THEMES.length;
    const currentBTheme = BROWSER_THEMES[bthemeIndex];
    document.getElementById('val-btheme').innerText = currentBTheme;
    document.body.setAttribute('data-btheme', currentBTheme);
  } else if (sysConfigIndex === 5) {
    cfgAudio = !cfgAudio;
    document.getElementById('val-audio').innerText = cfgAudio ? 'ENABLED' : 'DISABLED';
  }
}

function applyWallpaperTheme(palette) {
  const vid = document.getElementById('wallpaper-video');
  const img = document.getElementById('wallpaper-img');
  if (!vid || !img) return;

  if (palette === 'Frutiger Aero') {
    vid.src = 'Themes/Frutiger/frutiger_live.mp4';
    vid.classList.remove('hidden');
    img.classList.add('hidden');
    vid.play().catch(() => {});
  } else if (palette === 'Mecha Sci-Fi') {
    vid.src = 'Themes/Mecha/MECHA - YOUTUBE.mp4';
    vid.classList.remove('hidden');
    img.classList.add('hidden');
    vid.play().catch(() => {});
  } else if (palette === 'Dorfic') {
    vid.pause();
    vid.classList.add('hidden');
    img.style.backgroundImage = "url('Themes/Dorfic/preview.jpg')";
    img.classList.remove('hidden');
  } else if (palette === 'Liquid Metal') {
    vid.pause();
    vid.classList.add('hidden');
    img.style.backgroundImage = "url('Themes/Liquid Metal/preview.jpg')";
    img.classList.remove('hidden');
  } else {
    vid.pause();
    vid.classList.add('hidden');
    img.classList.add('hidden');
  }
}

// Memory Card Save Icon Grid Navigation (Image 5)
const iconCards = document.querySelectorAll('.save-icon-card');
const iconHeaders = [
  { header: "My Projects", sub: "RUBIX Game / 64 KB" },
  { header: "Featured Work", sub: "Project Engine / 48 KB" },
  { header: "Systems Hardware", sub: "RISC-V Simulator / 42 KB" },
  { header: "Neural Matrix", sub: "Three.js Shaders / 68 KB" },
  { header: "Drifter Profile", sub: "Bio & Capabilities / 12 KB" },
  { header: "Console Saves", sub: "Trophy Storage / 8 KB" }
];

function updateMemcardSelection(index) {
  if (index < 0) index = iconCards.length - 1;
  if (index >= iconCards.length) index = 0;
  memcardIndex = index;

  iconCards.forEach((card, idx) => {
    if (idx === memcardIndex) card.classList.add('selected');
    else card.classList.remove('selected');
  });

  const headerInfo = iconHeaders[memcardIndex];
  document.getElementById('selected-icon-header').innerText = headerInfo.header;
  document.getElementById('selected-icon-subheader').innerText = headerInfo.sub;
  playPS2SelectSound();
}

iconCards.forEach((card, idx) => {
  card.addEventListener('mouseenter', () => updateMemcardSelection(idx));
  card.addEventListener('click', () => enterMemcardOption(idx));
});

function enterMemcardOption(index) {
  playPS2ConfirmSound();
  const card = iconCards[index];
  const iconType = card.dataset.icon;

  if (iconType === 'game') {
    // Launch Hyper Light Drifter Canvas Game World!
    showScreen('game');
    startCanvasGame();
  } else if (iconType === 'proj1' || iconType === 'proj2' || iconType === 'proj3') {
    openModal('projects');
  } else if (iconType === 'bio') {
    openModal('bio');
  } else if (iconType === 'trophies') {
    openModal('achievements');
  }
}

// Global Keyboard Navigation
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();

  if (currentScreen === 'boot') {
    handleBootClick();
    return;
  }
  if (currentScreen === 'bootVideoWrap') {
    transitionFromVideoToIntro();
    return;
  }
  if (currentScreen === 'intro') {
    showScreen('mainMenu');
    playPS2ConfirmSound();
    return;
  }
  if (currentScreen === 'mainMenu') {
    if (k === 'w' || k === 'arrowup') updateMainMenuSelection(0);
    if (k === 's' || k === 'arrowdown') updateMainMenuSelection(1);
    if (k === 'enter' || k === 'x' || k === ' ') enterMainMenuOption();
    if (k === 'v' || k === 't') {
      showScreen('version');
      playPS2ConfirmSound();
    }
    return;
  }
  if (currentScreen === 'version') {
    if (k === 'escape' || k === 'o' || k === 'backspace') {
      showScreen('mainMenu');
      playPS2BackSound();
    }
    return;
  }
  if (currentScreen === 'sysconfig') {
    if (k === 'w' || k === 'arrowup') updateSysConfigSelection(sysConfigIndex - 1);
    if (k === 's' || k === 'arrowdown') updateSysConfigSelection(sysConfigIndex + 1);
    if (k === 'enter' || k === 'x' || k === ' ') toggleSysConfigOption();
    if (k === 'escape' || k === 'o' || k === 'backspace') {
      showScreen('mainMenu');
      playPS2BackSound();
    }
    return;
  }
  if (currentScreen === 'memcard') {
    if (k === 'd' || k === 'arrowright') updateMemcardSelection(memcardIndex + 1);
    if (k === 'a' || k === 'arrowleft') updateMemcardSelection(memcardIndex - 1);
    if (k === 'w' || k === 'arrowup') updateMemcardSelection(memcardIndex - 3);
    if (k === 's' || k === 'arrowdown') updateMemcardSelection(memcardIndex + 3);
    if (k === 'enter' || k === 'x' || k === ' ') enterMemcardOption(memcardIndex);
    if (k === 'escape' || k === 'o' || k === 'backspace') {
      showScreen('mainMenu');
      playPS2BackSound();
    }
    return;
  }
  if (currentScreen === 'game' && k === 'escape' && !isModalOpen) {
    showScreen('memcard');
    playPS2BackSound();
  }
});

document.getElementById('btn-return-ps2').addEventListener('click', () => {
  showScreen('memcard');
  playPS2BackSound();
});

// ==========================================
// 7. HYPER LIGHT DRIFTER GAME ENGINE
// ==========================================
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const player = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  speed: 4,
  facingDir: 'down',
  isMoving: false,
  isDashing: false,
  dashTimer: 0,
  dashCooldown: 0,
  isSlashing: false,
  slashTimer: 0,
  slashAngle: 0
};

let dashGhosts = [];
let particles = [];

const interactiveObjects = [
  { id: "table", name: "Main Project Obelisk", x: 0, y: 0, w: 60, h: 60, panel: "projects", color: '#00f0ff' },
  { id: "counter", name: "Drifter Lore Shrine", x: 0, y: 0, w: 60, h: 60, panel: "bio", color: '#e2c044' },
  { id: "chest", name: "Data Relic Vault", x: 0, y: 0, w: 50, h: 50, panel: "achievements", color: '#ff0055' }
];

function updateObjectPositions() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  interactiveObjects[0].x = cx - 250;
  interactiveObjects[0].y = cy - 100;
  interactiveObjects[1].x = cx + 190;
  interactiveObjects[1].y = cy - 100;
  interactiveObjects[2].x = cx;
  interactiveObjects[2].y = cy - 200;
}

let activeObject = null;
let isModalOpen = false;
let gameLoopStarted = false;

const keys = {};
window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
  if (currentScreen !== 'game') return;

  if (e.key === ' ' || e.code === 'Space') triggerDash();
  if (e.key.toLowerCase() === 'j') triggerSlash();
  handleInteractionInput(e);
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

function triggerDash() {
  if (player.dashCooldown > 0 || player.isDashing) return;
  player.isDashing = true;
  player.dashTimer = 12;
  player.dashCooldown = 35;
  playDashSound();
  unlockAchievement('drifter_dash');
  createParticleBurst(player.x, player.y, '#00f0ff', 12);
}

function triggerSlash() {
  if (player.isSlashing) return;
  player.isSlashing = true;
  player.slashTimer = 15;
  playSlashSound();
  unlockAchievement('sword_slash');

  if (player.facingDir === 'right') player.slashAngle = 0;
  else if (player.facingDir === 'down') player.slashAngle = Math.PI / 2;
  else if (player.facingDir === 'left') player.slashAngle = Math.PI;
  else if (player.facingDir === 'up') player.slashAngle = -Math.PI / 2;

  createParticleBurst(player.x, player.y, '#ff0055', 8);
}

function createParticleBurst(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4 + 1;
    particles.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 2,
      color: color,
      life: 20
    });
  }
}

function updatePlayer() {
  if (isModalOpen || currentScreen !== 'game') return;

  updateObjectPositions();
  if (player.dashCooldown > 0) player.dashCooldown--;
  
  if (player.isDashing) {
    player.dashTimer--;
    const dashSpeed = 12;
    if (player.facingDir === 'right') player.x += dashSpeed;
    if (player.facingDir === 'left') player.x -= dashSpeed;
    if (player.facingDir === 'up') player.y -= dashSpeed;
    if (player.facingDir === 'down') player.y += dashSpeed;

    dashGhosts.push({
      x: player.x, y: player.y,
      facingDir: player.facingDir,
      alpha: 0.7, color: '#00f0ff'
    });

    if (player.dashTimer <= 0) player.isDashing = false;
  } else {
    let moveX = 0, moveY = 0;
    if (keys['w'] || keys['arrowup']) moveY -= 1;
    if (keys['s'] || keys['arrowdown']) moveY += 1;
    if (keys['a'] || keys['arrowleft']) moveX -= 1;
    if (keys['d'] || keys['arrowright']) moveX += 1;

    player.isMoving = (moveX !== 0 || moveY !== 0);
    if (moveX !== 0 && moveY !== 0) { moveX *= 0.7071; moveY *= 0.7071; }

    if (moveX > 0) player.facingDir = 'right';
    else if (moveX < 0) player.facingDir = 'left';
    else if (moveY > 0) player.facingDir = 'down';
    else if (moveY < 0) player.facingDir = 'up';

    player.x += moveX * player.speed;
    player.y += moveY * player.speed;
  }

  if (player.isSlashing) {
    player.slashTimer--;
    if (player.slashTimer <= 0) player.isSlashing = false;
  }

  const margin = 40;
  player.x = Math.max(margin, Math.min(canvas.width - margin, player.x));
  player.y = Math.max(margin, Math.min(canvas.height - margin, player.y));

  for (let i = dashGhosts.length - 1; i >= 0; i--) {
    dashGhosts[i].alpha -= 0.08;
    if (dashGhosts[i].alpha <= 0) dashGhosts.splice(i, 1);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;
    particles[i].life--;
    if (particles[i].life <= 0) particles.splice(i, 1);
  }

  checkProximity();
}

function checkProximity() {
  const interactPrompt = document.getElementById('interact-prompt');
  activeObject = null;

  for (let obj of interactiveObjects) {
    const dx = player.x - (obj.x + obj.w / 2);
    const dy = player.y - (obj.y + obj.h / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 75) {
      activeObject = obj;
      break;
    }
  }

  if (activeObject && !isModalOpen) {
    interactPrompt.classList.remove('hidden');
    interactPrompt.innerText = `Press E for ${activeObject.name}`;
  } else {
    interactPrompt.classList.add('hidden');
  }
}

function renderGameWorld() {
  if (currentScreen !== 'game') return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#060a22';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
  ctx.lineWidth = 1;
  const gridSize = 40;
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  interactiveObjects.forEach(obj => {
    ctx.shadowColor = obj.color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = 'rgba(10, 20, 55, 0.9)';
    ctx.strokeStyle = obj.color;
    ctx.lineWidth = 2;
    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    ctx.strokeRect(obj.x, obj.y, obj.w, obj.h);

    ctx.fillStyle = obj.color;
    ctx.beginPath(); ctx.arc(obj.x + obj.w / 2, obj.y + obj.h / 2, 8, 0, Math.PI * 2); ctx.fill();

    ctx.shadowBlur = 0;
    ctx.font = '10px Orbitron';
    ctx.fillStyle = obj.color;
    ctx.textAlign = 'center';
    ctx.fillText(obj.name, obj.x + obj.w / 2, obj.y - 10);
  });

  dashGhosts.forEach(ghost => {
    ctx.save();
    ctx.globalAlpha = ghost.alpha;
    ctx.fillStyle = ghost.color;
    ctx.shadowColor = ghost.color;
    ctx.shadowBlur = 10;
    ctx.fillRect(ghost.x - 12, ghost.y - 16, 24, 32);
    ctx.restore();
  });

  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 6;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  ctx.shadowBlur = 0;

  // Drifter Character
  ctx.save();
  ctx.translate(player.x, player.y);

  ctx.fillStyle = '#ff0055';
  ctx.shadowColor = '#ff0055';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  if (player.facingDir === 'up') ctx.fillRect(-8, 8, 16, 16);
  else if (player.facingDir === 'down') ctx.fillRect(-8, -16, 16, 10);
  else if (player.facingDir === 'left') ctx.fillRect(4, -10, 10, 18);
  else if (player.facingDir === 'right') ctx.fillRect(-14, -10, 10, 18);

  ctx.fillStyle = '#0a1a3a';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2;
  ctx.fillRect(-10, -16, 20, 28);
  ctx.strokeRect(-10, -16, 20, 28);

  ctx.fillStyle = '#00f0ff';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 10;
  if (player.facingDir === 'down') ctx.fillRect(-6, -12, 12, 4);
  else if (player.facingDir === 'left') ctx.fillRect(-8, -12, 6, 4);
  else if (player.facingDir === 'right') ctx.fillRect(2, -12, 6, 4);
  else if (player.facingDir === 'up') ctx.fillRect(-4, -14, 8, 3);

  ctx.fillStyle = '#e2c044';
  ctx.beginPath(); ctx.arc(0, -2, 4, 0, Math.PI * 2); ctx.fill();

  if (player.isSlashing) {
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(0, 0, 36, player.slashAngle - Math.PI / 3, player.slashAngle + Math.PI / 3);
    ctx.stroke();
  }

  ctx.restore();
}

function gameLoop() {
  updatePlayer();
  renderGameWorld();
  requestAnimationFrame(gameLoop);
}

function startCanvasGame() {
  if (!gameLoopStarted) {
    gameLoopStarted = true;
    requestAnimationFrame(gameLoop);
  }
}

// ==========================================
// 8. PS2 MEMORY CARD MODAL OVERLAY
// ==========================================
const modalOverlay = document.getElementById('modal-overlay');

function handleInteractionInput(e) {
  const key = e.key.toLowerCase();
  if (key === 'e' && activeObject && !isModalOpen) {
    openModal(activeObject.panel);
    if (activeObject.id === 'table') unlockAchievement('table');
    if (activeObject.id === 'counter') unlockAchievement('counter');
  }
  if ((key === 'escape' || key === 'o') && isModalOpen) {
    closeModal();
  }
}

function openModal(panelType) {
  isModalOpen = true;
  modalOverlay.classList.remove('hidden');
  document.getElementById('interact-prompt').classList.add('hidden');

  document.querySelectorAll('.memcard-panel').forEach(panel => {
    if (panel.dataset.panel === panelType) panel.classList.add('active');
    else panel.classList.remove('active');
  });

  if (panelType === 'projects') renderProjects();
  if (panelType === 'bio') renderBio();
  if (panelType === 'achievements') renderAchievements();
}

function closeModal() {
  isModalOpen = false;
  modalOverlay.classList.add('hidden');
}

document.getElementById('modal-x-close').addEventListener('click', closeModal);

function renderProjects() {
  const listEl = document.getElementById('projects-list');
  const detailEl = document.getElementById('projects-detail');
  
  listEl.innerHTML = '';
  PROJECTS.forEach((proj, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>[0${idx+1}]</strong> ${proj.title}</span> <span style="font-size:12px;color:var(--ps2-cyan);">${proj.size}</span>`;
    li.onclick = () => {
      document.querySelectorAll('#projects-list li').forEach(el => el.classList.remove('selected'));
      li.classList.add('selected');
      playPS2SelectSound();
      detailEl.innerHTML = `
        <h4 style="color:var(--ps2-gold);margin-top:0;">${proj.title}</h4>
        <p style="margin:8px 0;">${proj.desc}</p>
        <p style="color:var(--ps2-cyan);margin:0;"><strong>Tech Stack:</strong> ${proj.tech.join(', ')}</p>
      `;
    };
    listEl.appendChild(li);
  });
}

function renderBio() {
  document.getElementById('bio-copy').innerText = BIO_TEXT;
  const skillsEl = document.getElementById('skills-list');
  skillsEl.innerHTML = SKILLS.map(skill => `<li>${skill}</li>`).join('');
}

function renderAchievements() {
  const listEl = document.getElementById('achievements-list');
  listEl.innerHTML = '';
  
  ACHIEVEMENTS.forEach(ach => {
    const isUnlocked = unlockedAchievements.includes(ach.id);
    const li = document.createElement('li');
    li.style.borderColor = isUnlocked ? 'var(--ps2-cyan)' : 'var(--ps2-cyan-dim)';
    li.style.color = isUnlocked ? 'var(--ps2-silver)' : '#6c7086';
    li.innerHTML = `
      <span>${isUnlocked ? '★' : '☆'} <strong>${ach.title}</strong>: ${ach.desc}</span>
      <span style="font-size:12px;">${isUnlocked ? '[UNLOCKED]' : '[LOCKED]'}</span>
    `;
    listEl.appendChild(li);
  });
}

function unlockAchievement(id) {
  if (!unlockedAchievements.includes(id)) {
    unlockedAchievements.push(id);
    localStorage.setItem('sleepyhead_achievements', JSON.stringify(unlockedAchievements));
  }
}