// ==========================================
// 1. CONFIGURATION & PORTFOLIO DATA
// ==========================================
const DEV_INFO = {
  name: "Sazidul Karim",
  alias: "sleepyhead",
  role: "Indie Game Developer & Cybersecurity Researcher",
  institution: "Islamic University of Technology (IUT)",
  department: "Department of Computer Science & Engineering (CSE)",
  status: "B.Sc. in CSE — In Progress (2nd Year, 2nd Semester)",
  email: "Sajid589karim@gmail.com",
  discord: "sleepyhead3960",
  github: "Saad0110Meh",
  githubUrl: "https://github.com/Saad0110meh",
  itchUrl: "https://sajidulkarim.itch.io/",
  steamUrl: "https://steamcommunity.com/profiles/76561198447696633/",
  malUrl: "https://myanimelist.net/profile/Shiro_Neko0110"
};

const PROJECTS = [
  {
    id: "tariq",
    title: "Tariq — Quranic Arabic Learning Platform",
    category: "Full-Stack EdTech",
    desc: "An interactive, gamified Quranic Arabic learning platform and pedagogical engine adapted from the acclaimed textbook series “Esho Arbi Shikhi” (by Maulana Abu Taher Misbah). Features chunked curriculum modules, vocabulary & grammar rules, contextual Q&A, sequential harakat (vowel-mark) fading to build direct reading fluency, and curated typography with English and Bengali (Bangla) localization.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "CSS3", "TanStack", "Git"],
    link: "https://github.com/amir-al-razin/a_tariq",
    size: "64 KB",
    tag: "COLLAB"
  },
  {
    id: "santiago",
    title: "IUT Cafeteria (DevSprint 2026)",
    category: "Distributed Systems & Services",
    desc: "A resilient, distributed, fault-tolerant microservices-based food ordering and kitchen management system built for high-concurrency traffic surges (e.g. Ramadan Iftar rush). Features containerized Student UI & Admin Dashboard, FastAPI identity-provider with JWT & rate limiting, Express/Node.js order-gateway BFF with Redis caching, FastAPI stock-service with PostgreSQL optimistic concurrency control, Express kitchen-queue for lifecycle tracking, and Socket.io real-time notifications.",
    tech: ["Docker", "FastAPI", "Express", "Node.js", "Redis", "PostgreSQL", "Socket.io"],
    link: "https://github.com/Saad0110meh/Santiago-s_neinth_requiem",
    size: "48 KB",
    tag: "SYSTEMS"
  },
  {
    id: "another_tsapp",
    title: "Project Tsapp — 3D Snakes & Ladders",
    category: "3D Game Engine & Minigames",
    desc: "A 3D adaptation of the classic Snakes and Ladders board game featuring 3D physics-based dice collision and a capybara player token. Packed with built-in arcade minigames: 3D Raycaster Wolfenstein-style FPS dungeon crawler with sprite animation and boss fights, SnakeKnot survival evasion game, Capybara Rhythm lane beatmap game, Spaceship arcade shooter with asteroid physics, and Dice Roulette mini-events.",
    tech: ["C", "CMake", "3D Raycaster", "Physics Engine", "Sprite Animation", "Rhythm Engine", "Git"],
    link: "https://github.com/abrarnaguib/AnotherTSAPP_TEST",
    size: "52 KB",
    tag: "GAME DEV"
  },
  {
    id: "indie_vault",
    title: "Indie Game Lab",
    category: "Indie Game Dev & Audio",
    desc: "Original indie game experiments, mechanics, and prototypes across Godot, Unity, and RPG Maker. Features custom pixel art and sprite assets created in Aseprite, 3D asset modeling in Blender, and original synthesized musical scores composed in FL Studio and Piapro Studio NT2 / Crypton CV1.",
    tech: ["Godot", "Unity", "RPG Maker", "Blender", "Aseprite", "FL Studio", "Piapro Studio NT2", "Crypton CV1"],
    link: null,
    size: "88 KB",
    tag: "INDIE DEV"
  },
  {
    id: "cybersec_ctf",
    title: "Cybersecurity & CTF Operations",
    category: "Cybersecurity & CTF",
    desc: "Active competitive cybersecurity CTF player. Competed in UAP Cyber Siege 2025, Deadsec CTF 2025, Phoenix Summit CTF 2025, CUET StealthFlags 2025, and various national & global CTF challenges with satisfactory rankings.",
    tech: ["UAP Cyber Siege 2025", "Deadsec CTF 2025", "Phoenix Summit 2025", "CUET StealthFlags 2025"],
    link: null,
    size: "44 KB",
    tag: "SECURITY"
  }
];

const CAREER_EDUCATION = {
  experience: [
    {
      role: "Paid Game Tester & QA Analyst",
      company: "Korean Indie Game Testing Platform",
      period: "Active Role",
      badge: "GAMESCOM & BIC 2026",
      desc: "Contracted game quality assurance specialist testing pre-release indie titles, including official showcase games from Gamescom 2026, Busan Indie Connect (BIC) Festival 2026, and upcoming international indie projects. Delivering in-depth bug analysis, gameplay balance telemetry, and user experience feedback."
    },
    {
      role: "Competitive CTF Security Player",
      company: "National & Global CTF Circuit",
      period: "2025 - Present",
      badge: "CTF COMPETITOR",
      desc: "Participated in UAP Cyber Siege 2025, Deadsec CTF 2025, Phoenix Summit CTF 2025, CUET StealthFlags 2025, and multiple national & global CTF challenges achieving satisfactory rankings."
    },
    {
      role: "Oddjobs Specialist",
      company: "Technical Freelance",
      period: "Ongoing",
      badge: "ODDJOBS",
      desc: "Executing specialized software engineering tasks, custom scripts, audio mastering configurations, asset preparation, and development support for various client assignments."
    }
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Islamic University of Technology (IUT)",
      department: "Department of Computer Science & Engineering (CSE)",
      result: "In Progress (2nd Year, 2nd Semester)",
      badge: "CSE UNDERGRAD"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Joseph Higher Secondary School",
      department: "Science Division",
      result: "Passed (GPA-5)",
      badge: "SCIENCE"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Willes Little Flower School and College",
      department: "Science Division",
      result: "Passed (GPA-5)",
      badge: "SCIENCE"
    }
  ]
};

const SKILL_GROUPS = [
  {
    category: "Core Languages & Systems",
    icon: "💻",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "RISC-V", "CMake", "Proteus", "LaTeX"]
  },
  {
    category: "Web & Full-Stack Development",
    icon: "🌐",
    skills: ["React", "Next.js", "TanStack", "Node.js", "Spring Boot", "HTML5", "CSS3", "JavaFX", "Scene Builder"]
  },
  {
    category: "Databases & DevOps Tools",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Docker", "Git", "GitHub", "npm", "pnpm"]
  },
  {
    category: "Game Dev, 3D & Audio Suite",
    icon: "🎮",
    skills: ["Godot", "Unity", "RPG Maker", "Blender", "Aseprite", "GIMP", "Adobe Illustrator", "FL Studio", "Piapro Studio NT2", "Crypton CV1"]
  },
  {
    category: "Cybersecurity & Security Tools",
    icon: "🛡️",
    skills: ["Kali Linux Tools", "Wireshark", "Burp Suite", "CTF Competitions"]
  }
];

const LORE = {
  bio: "HI! I'm Sazidul Karim, a Computer Science & Engineering undergraduate at Islamic University of Technology (IUT). I aspire to be an indie game developer with deep interest in cybersecurity, retro aesthetics, and audio composition. When I'm not testing indie games or solving CTF challenges, I'm listening to folk tunes, cooking unique experimental scratch dishes, appreciating cars, traveling, or spending time with cats.",
  aspirations: "Aspiring Indie Game Developer & Cybersecurity Practitioner.",
  favorites: {
    games: ["Hollow Knight", "Dota 2", "No Man's Sky", "Cyberpunk 2077", "Sekiro: Shadows Die Twice", "Shadow of the Colossus"],
    anime: [
      "Monogatari Series",
      "Orb: On the Movements of the Earth",
      "The Disastrous Life of Saiki K.",
      "Food Wars! Shokugeki no Soma",
      "Neon Genesis Evangelion",
      "The Wings of Honnêamise",
      "Mobile Suit Gundam",
      "Macross"
    ],
    movies: ["No Country for Old Men", "Spider-Man: Into the Spider-Verse", "Fallen Angels"],
    reading: ["Aranyak (Bibhutibhushan Bandyopadhyay)"],
    music: [
      "Folk music from diverse global cultures",
      "Original compositions in FL Studio & Piapro Studio NT2 (Crypton CV1)"
    ],
    cooking: "Unique experimental scratch cooking & culinary experiments",
    cars: "Car enthusiast & MECHA appreciation",
    travel: "Exploring new places and traveling",
    animal: "🐱 Cats (Supreme Beings)"
  }
};

const PLATFORMS = [
  { name: "Email", handle: "Sajid589karim@gmail.com", url: "mailto:Sajid589karim@gmail.com", icon: "✉️", badge: "Direct Mail" },
  { name: "Discord", handle: "sleepyhead3960", url: "https://discord.com", icon: "💬", badge: "Chat & Voice" },
  { name: "GitHub", handle: "Saad0110Meh", url: "https://github.com/Saad0110meh", icon: "🐙", badge: "Code Repositories" },
  { name: "Itch.io", handle: "sajidulkarim", url: "https://sajidulkarim.itch.io/", icon: "🕹️", badge: "Itch.io" },
  { name: "Steam", handle: "OUTCAST", url: "https://steamcommunity.com/profiles/76561198447696633/", icon: "🎮", badge: "Gaming Profile" },
  { name: "MyAnimeList", handle: "Shiro_Neko0110", url: "https://myanimelist.net/profile/Shiro_Neko0110", icon: "🍿", badge: "Anime & Manga List" }
];

const ACHIEVEMENTS = [
  { id: "booted", title: "System Booted", desc: "Successfully booted into the PS2 BIOS matrix." },
  { id: "browser_opened", title: "Memory Browser Access", desc: "Entered the PS2 Memory Card Save Browser." },
  { id: "drifter_dash", title: "Phantasm Dash", desc: "Executed a hard-light phantom dash in the RUBIX world." },
  { id: "sword_slash", title: "Data Blade", desc: "Slashed a corrupt data node with your hard-light sword." },
  { id: "projects_checked", title: "Project Explorer", desc: "Inspected the Featured Projects repository list." },
  { id: "career_checked", title: "QA & Academic Dossier", desc: "Accessed the Korean QA Game Testing & IUT records." },
  { id: "skills_checked", title: "Arsenal Specialist", desc: "Scanned the full-stack, systems, and security matrix." },
  { id: "lore_checked", title: "Drifter Lore & Cats", desc: "Discovered anime, culinary, mecha, and supreme cat lore." },
  { id: "platforms_checked", title: "Signal Connected", desc: "Established contact frequency with external Comm Relays." },
  { id: "emotion_engine", title: "Emotion Engine [EE] Core", desc: "CLASSIFIED SECRET: Mastered the matrix and unlocked the legendary 128-bit SCEI Emotion Engine CPU hardware relic." }
];

const CORE_ACHIEVEMENT_IDS = [
  'booted', 'browser_opened', 'drifter_dash', 'sword_slash',
  'projects_checked', 'career_checked', 'skills_checked',
  'lore_checked', 'platforms_checked'
];

let unlockedAchievements = JSON.parse(localStorage.getItem('sleepyhead_trophies_v3') || '[]');

// Config state
const DATE_FORMATS = ['DD/MM/YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY'];
let dateFmtIndex = 0;
let cfgDateFormat = DATE_FORMATS[0];

const CLOCK_DISPLAYS = ['24-Hour', '12-Hour (AM/PM)'];
let clockDispIndex = 0;

const VCR_FILTERS = ['VCR VHS Tracking', 'CRT Scanlines', 'Disabled'];
let vcrFilterIndex = 0;

const CONSOLE_PALETTES = ['PS2 Classic Blue', 'Dorfic', 'Liquid Metal', 'Frutiger Aero', 'Mecha Sci-Fi', 'Vaporwave'];
let paletteIndex = parseInt(localStorage.getItem('sleepyhead_palette_idx') || '0', 10);
if (isNaN(paletteIndex) || paletteIndex < 0 || paletteIndex >= CONSOLE_PALETTES.length) paletteIndex = 0;

const BROWSER_THEMES = ['Classic Save Cards', 'Glassmorphic 3D', 'Cyber Matrix', 'VCR Slate'];
let bthemeIndex = parseInt(localStorage.getItem('sleepyhead_btheme_idx') || '0', 10);
if (isNaN(bthemeIndex) || bthemeIndex < 0 || bthemeIndex >= BROWSER_THEMES.length) bthemeIndex = 0;

const ZOOM_LEVELS = ['100%', '125%', '150%', '175%'];
let zoomIndex = parseInt(localStorage.getItem('sleepyhead_zoom_idx') || '1', 10);
if (isNaN(zoomIndex) || zoomIndex < 0 || zoomIndex >= ZOOM_LEVELS.length) zoomIndex = 1;

let cfgAudio = true;

// Custom PS2 SCPH-10000 Module Transition Sound Effects
const sfxEnterModule = new Audio('assets/SCPH-10000_00022.wav');
const sfxLeaveModule = new Audio('assets/SCPH-10000_00029.wav');

function playEnterModuleSound() {
  if (!cfgAudio) return;
  try {
    sfxEnterModule.currentTime = 0;
    sfxEnterModule.play().catch(() => {});
  } catch (e) {}
}

function playLeaveModuleSound() {
  if (!cfgAudio) return;
  try {
    sfxLeaveModule.currentTime = 0;
    sfxLeaveModule.play().catch(() => {});
  } catch (e) {}
}

function applyZoomLevel(levelStr) {
  const scaleMap = { '100%': 1, '125%': 1.25, '150%': 1.5, '175%': 1.75 };
  const scale = scaleMap[levelStr] || 1;
  const inverse = 1 / scale;
  
  document.documentElement.style.setProperty('--app-zoom-scale', scale);
  document.documentElement.style.setProperty('--app-zoom-inverse', inverse);
  
  document.body.style.zoom = scale;
  
  const valZoom = document.getElementById('val-zoom');
  if (valZoom) valZoom.innerText = levelStr;
  
  localStorage.setItem('sleepyhead_zoom_idx', zoomIndex.toString());
  
  if (typeof resizeSevenStars === 'function') resizeSevenStars();
  if (typeof resizeCanvas === 'function') resizeCanvas();
}

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

function playObeliskHitSound(hitNumber = 1) {
  if (!audioCtx || !cfgAudio) return;
  try {
    const t = audioCtx.currentTime;
    // Resonant metallic cyber-blade impact
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sawtooth';
    const baseFreq = hitNumber === 1 ? 260 : (hitNumber === 2 ? 380 : 520);
    osc1.frequency.setValueAtTime(baseFreq * 1.8, t);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, t + 0.15);

    gain1.gain.setValueAtTime(0.18, t);
    gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(t);
    osc1.stop(t + 0.15);

    // High frequency electric transient ping
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(800 + hitNumber * 220, t);
    osc2.frequency.exponentialRampToValueAtTime(140, t + 0.08);

    gain2.gain.setValueAtTime(0.12, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(t);
    osc2.stop(t + 0.08);
  } catch(e) {}
}

function playObeliskAwakenSound() {
  if (!audioCtx || !cfgAudio) return;
  try {
    const t = audioCtx.currentTime;
    // Majestic ascending cyber arpeggio chord sequence
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    notes.forEach((freq, i) => {
      const noteTime = t + i * 0.055;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.02, noteTime + 0.4);

      gain.gain.setValueAtTime(0.12, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(noteTime);
      osc.stop(noteTime + 0.45);
    });

    // Deep sub-bass energy blast
    const subOsc = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, t);
    subOsc.frequency.exponentialRampToValueAtTime(45, t + 0.6);
    subGain.gain.setValueAtTime(0.25, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
    subOsc.connect(subGain);
    subGain.connect(audioCtx.destination);
    subOsc.start(t);
    subOsc.stop(t + 0.6);
  } catch(e) {}
}

// ==========================================
// 3. THEME COLOR HELPER & CANVASES
// ==========================================
function getThemeColors() {
  const style = getComputedStyle(document.body);
  const mainColor = style.getPropertyValue('--ps2-cyan').trim() || '#00f0ff';
  const glowColor = style.getPropertyValue('--ps2-cyan-glow').trim() || 'rgba(0, 240, 255, 0.6)';
  const dimColor = style.getPropertyValue('--ps2-cyan-dim').trim() || '#1a566b';
  const goldColor = style.getPropertyValue('--ps2-gold').trim() || '#e2c044';
  const silverColor = style.getPropertyValue('--ps2-silver').trim() || '#dce6f2';
  return { mainColor, glowColor, dimColor, goldColor, silverColor };
}

// 3A. SEVEN STARS ORBITAL ANIMATION ENGINE (Image 1)
const sevenStarsCanvas = document.getElementById('seven-stars-canvas');
const ssCtx = sevenStarsCanvas ? sevenStarsCanvas.getContext('2d') : null;

function resizeSevenStars() {
  if (!sevenStarsCanvas) return;
  sevenStarsCanvas.width = window.innerWidth;
  sevenStarsCanvas.height = window.innerHeight;
}
resizeSevenStars();
window.addEventListener('resize', resizeSevenStars);

// 3. PS2 SEVEN STARS MAIN MENU CANVAS (Image 1)
// Active strictly for PS2 Classic Blue; dormant/hidden for other themes
let starAngle = 0;
function renderSevenStars() {
  const isMainMenu = document.getElementById('ps2-main-menu') && !document.getElementById('ps2-main-menu').classList.contains('hidden');
  const isClassic = CONSOLE_PALETTES[paletteIndex] === 'PS2 Classic Blue';

  if (!ssCtx || !isMainMenu || !isClassic) {
    if (ssCtx && sevenStarsCanvas) {
      ssCtx.clearRect(0, 0, sevenStarsCanvas.width, sevenStarsCanvas.height);
    }
    requestAnimationFrame(renderSevenStars);
    return;
  }

  ssCtx.clearRect(0, 0, sevenStarsCanvas.width, sevenStarsCanvas.height);
  // Center-left bias matching original PS2 BIOS layout
  const cx = sevenStarsCanvas.width * 0.38;
  const cy = sevenStarsCanvas.height * 0.50;

  const { mainColor, glowColor } = getThemeColors();

  // Draw 3 Orbital Ellipse Rings with smooth 3D tilt
  const ringAngles = [-0.35, 0.45, 1.25];
  const ringRadii = [
    { rx: 200, ry: 90 },
    { rx: 230, ry: 105 },
    { rx: 180, ry: 80 }
  ];

  for (let r = 0; r < 3; r++) {
    ssCtx.save();
    ssCtx.translate(cx, cy);
    ssCtx.rotate(ringAngles[r] + (starAngle * 0.15));
    ssCtx.strokeStyle = glowColor;
    ssCtx.lineWidth = 1.2;
    ssCtx.beginPath();
    ssCtx.ellipse(0, 0, ringRadii[r].rx, ringRadii[r].ry, 0, 0, Math.PI * 2);
    ssCtx.stroke();
    ssCtx.restore();
  }

  // Draw 7 Orbiting Luminous Orbs with dynamic theme glow
  const numOrbs = 7;
  for (let i = 0; i < numOrbs; i++) {
    const orbA = starAngle + (i * Math.PI * 2 / numOrbs);
    const rx = 210 * Math.cos(orbA);
    const ry = 95 * Math.sin(orbA);

    // Apply rotation tilt
    const rot = Math.PI / 5;
    const finalX = cx + (rx * Math.cos(rot) - ry * Math.sin(rot));
    const finalY = cy + (rx * Math.sin(rot) + ry * Math.cos(rot));

    // Outer glow
    ssCtx.shadowColor = mainColor;
    ssCtx.shadowBlur = 18;
    ssCtx.fillStyle = mainColor;
    ssCtx.beginPath();
    ssCtx.arc(finalX, finalY, i === 0 ? 11 : 8, 0, Math.PI * 2);
    ssCtx.fill();

    // Inner bright core
    ssCtx.shadowBlur = 0;
    ssCtx.fillStyle = '#ffffff';
    ssCtx.beginPath();
    ssCtx.arc(finalX, finalY, i === 0 ? 4 : 2.5, 0, Math.PI * 2);
    ssCtx.fill();
  }

  starAngle += 0.012;
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

  const { mainColor, glowColor } = getThemeColors();

  // Center Glowing Sphere with subtle breathing pulse
  const pulse = Math.sin(spokeAngle * 3) * 2;
  spokeCtx.shadowColor = mainColor;
  spokeCtx.shadowBlur = 24;
  spokeCtx.fillStyle = mainColor;
  spokeCtx.beginPath();
  spokeCtx.arc(cx, cy, 26 + pulse, 0, Math.PI * 2);
  spokeCtx.fill();

  // Inner core highlight
  spokeCtx.shadowBlur = 0;
  spokeCtx.fillStyle = '#ffffff';
  spokeCtx.beginPath();
  spokeCtx.arc(cx, cy, 8, 0, Math.PI * 2);
  spokeCtx.fill();

  // 12 Radiating Spoke Tubes
  const spokes = 12;
  spokeCtx.strokeStyle = glowColor;
  spokeCtx.lineWidth = 5;
  spokeCtx.lineCap = 'round';

  for (let i = 0; i < spokes; i++) {
    const a = (i * Math.PI * 2 / spokes) + spokeAngle;
    const rOuter = 115;
    spokeCtx.beginPath();
    spokeCtx.moveTo(cx, cy);
    spokeCtx.lineTo(cx + Math.cos(a) * rOuter, cy + Math.sin(a) * rOuter);
    spokeCtx.stroke();
  }

  // Orbiting Translucent 3D Cubes
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI * 2 / 6) - (spokeAngle * 0.75);
    const radius = 95;
    const qx = cx + Math.cos(a) * radius;
    const qy = cy + Math.sin(a) * radius;

    spokeCtx.fillStyle = glowColor;
    spokeCtx.strokeStyle = mainColor;
    spokeCtx.lineWidth = 1.5;

    spokeCtx.fillRect(qx - 13, qy - 13, 26, 26);
    spokeCtx.strokeRect(qx - 13, qy - 13, 26, 26);
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
    { x: 50, y: 70 },
    { x: 130, y: 45 },
    { x: 210, y: 60 },
    { x: 180, y: 135 },
    { x: 85, y: 175 },
    { x: 250, y: 195 }
  ];

  const { mainColor, glowColor } = getThemeColors();

  // Connected Constellation Lines
  vCtx.strokeStyle = glowColor;
  vCtx.lineWidth = 1.2;
  vCtx.beginPath();
  points.forEach((pt, idx) => {
    const floatY = pt.y + Math.sin(vAngle + idx * 0.8) * 6;
    if (idx === 0) vCtx.moveTo(pt.x, floatY);
    else vCtx.lineTo(pt.x, floatY);
  });
  vCtx.closePath();
  vCtx.stroke();

  // Glowing Constellation Stars
  vCtx.shadowColor = mainColor;
  vCtx.shadowBlur = 14;
  vCtx.fillStyle = mainColor;

  points.forEach((pt, idx) => {
    const floatY = pt.y + Math.sin(vAngle + idx * 0.8) * 6;
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

  if (targetScreen === 'memcard') {
    unlockAchievement('browser_opened');
  }

  // GPU & CPU Optimization: Pause video during canvas game to ensure 100% smooth 60 FPS gameplay!
  const vid = document.getElementById('wallpaper-video');
  if (vid) {
    if (targetScreen === 'game') {
      vid.pause();
    } else if (document.body.classList.contains('has-wallpaper')) {
      vid.play().catch(() => {});
    }
  }
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
  unlockAchievement('booted');
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
    localStorage.setItem('sleepyhead_palette_idx', paletteIndex.toString());
    applyWallpaperTheme(currentPalette);
  } else if (sysConfigIndex === 4) {
    bthemeIndex = (bthemeIndex + 1) % BROWSER_THEMES.length;
    const currentBTheme = BROWSER_THEMES[bthemeIndex];
    document.getElementById('val-btheme').innerText = currentBTheme;
    document.body.setAttribute('data-btheme', currentBTheme);
    localStorage.setItem('sleepyhead_btheme_idx', bthemeIndex.toString());
  } else if (sysConfigIndex === 5) {
    zoomIndex = (zoomIndex + 1) % ZOOM_LEVELS.length;
    applyZoomLevel(ZOOM_LEVELS[zoomIndex]);
  } else if (sysConfigIndex === 6) {
    cfgAudio = !cfgAudio;
    document.getElementById('val-audio').innerText = cfgAudio ? 'ENABLED' : 'DISABLED';
  }
}

function applyWallpaperTheme(palette) {
  const vid = document.getElementById('wallpaper-video');
  const img = document.getElementById('wallpaper-img');
  if (!vid || !img) return;

  const playVideoTheme = (srcPath) => {
    document.body.classList.add('has-wallpaper');
    vid.classList.remove('hidden');
    img.classList.add('hidden');
    // Prevent restarting/reloading the video if already playing the exact source
    if (!vid.src.endsWith(srcPath)) {
      vid.src = srcPath;
      vid.load();
    }
    vid.play().catch(() => {});
  };

  const playImageTheme = (imgPath) => {
    document.body.classList.add('has-wallpaper');
    vid.pause();
    vid.classList.add('hidden');
    img.classList.remove('hidden');
    img.style.backgroundImage = `url('${imgPath}')`;
  };

  if (palette === 'Dorfic') {
    playVideoTheme('Themes/Dorfic/Dorfic.mp4');
  } else if (palette === 'Frutiger Aero') {
    playVideoTheme('Themes/Frutiger/frutiger_live.mp4');
  } else if (palette === 'Liquid Metal') {
    playVideoTheme('Themes/Liquid Metal/liquid_metal_live.mp4');
  } else if (palette === 'Vaporwave') {
    playImageTheme('Themes/Vaporwave/futuristic_city_digital_art_hd_vaporwave.jpg');
  } else if (palette === 'Mecha Sci-Fi') {
    playVideoTheme('Themes/Mecha/mecha_live.mp4');
  } else {
    // PS2 Classic Blue:
    // Pure clean PS2 BIOS with manual 3D orbital stars canvas animation
    document.body.classList.remove('has-wallpaper');
    vid.pause();
    vid.classList.add('hidden');
    img.classList.add('hidden');
  }
}

// Memory Card Save Icon Grid Navigation (Image 5)
const iconCards = document.querySelectorAll('.save-icon-card');
const iconHeaders = [
  { header: "My Projects", sub: "RUBIX Game Engine / 64 KB" },
  { header: "Featured Repositories", sub: "Tariq & Santiago & Games / 54 KB" },
  { header: "Career & Education", sub: "Game QA & IUT CSE Dossier / 32 KB" },
  { header: "Technical Arsenal", sub: "Fullstack, GameDev & Sec / 58 KB" },
  { header: "Drifter Lore & Media", sub: "Anime, Hobbies & Cat Lore / 24 KB" },
  { header: "Comm Relay & Network", sub: "GitHub, Itch, Steam, MAL & Mail / 18 KB" }
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
  if (headerInfo) {
    document.getElementById('selected-icon-header').innerText = headerInfo.header;
    document.getElementById('selected-icon-subheader').innerText = headerInfo.sub;
  }
  playPS2SelectSound();
}

iconCards.forEach((card, idx) => {
  card.addEventListener('mouseenter', () => updateMemcardSelection(idx));
  card.addEventListener('click', () => enterMemcardOption(idx));
});

function enterMemcardOption(index) {
  const card = iconCards[index];
  const iconType = card.dataset.icon;

  if (iconType === 'game') {
    // Launch Hyper Light Drifter Canvas Game World!
    playEnterModuleSound();
    showScreen('game');
    startCanvasGame();
  } else {
    openModal(iconType);
  }
}

// Global Keyboard Navigation
window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();

  // If memory card modal is open, intercept ESC / O / Backspace to close it immediately!
  if (isModalOpen) {
    if (k === 'escape' || k === 'o' || k === 'backspace') {
      e.preventDefault();
      closeModal();
      return;
    }
    // Allow keyboard arrow navigation inside the open Projects list
    const activeProjectPanel = document.querySelector('.memcard-panel[data-panel="projects"].active');
    if (activeProjectPanel) {
      const items = document.querySelectorAll('#projects-list li');
      let currIdx = Array.from(items).findIndex(el => el.classList.contains('selected'));
      if ((k === 'w' || k === 'arrowup') && currIdx > 0) {
        items[currIdx - 1].click();
        e.preventDefault();
      } else if ((k === 's' || k === 'arrowdown') && currIdx < items.length - 1) {
        items[currIdx + 1].click();
        e.preventDefault();
      }
    }
    return;
  }

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
    playLeaveModuleSound();
  }
});

document.getElementById('btn-return-ps2').addEventListener('click', () => {
  showScreen('memcard');
  playLeaveModuleSound();
});

// ==========================================
// 7. HYPER LIGHT DRIFTER GAME ENGINE (RUBIX)
// ==========================================
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const WORLD_WIDTH = 2600;
const WORLD_HEIGHT = 2000;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const camera = {
  x: (WORLD_WIDTH - window.innerWidth) / 2,
  y: (WORLD_HEIGHT - window.innerHeight) / 2
};

const player = {
  x: WORLD_WIDTH / 2,
  y: WORLD_HEIGHT / 2,
  speed: 5.5,
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
let ambientParticles = [];
let shockwaves = [];
let cameraShake = 0;

// Initialize ambient cyber particles
for (let i = 0; i < 90; i++) {
  ambientParticles.push({
    x: Math.random() * WORLD_WIDTH,
    y: Math.random() * WORLD_HEIGHT,
    size: Math.random() * 2.5 + 1,
    alpha: Math.random() * 0.7 + 0.3,
    vy: -(Math.random() * 0.6 + 0.2),
    vx: (Math.random() - 0.5) * 0.4,
    color: Math.random() > 0.5 ? '#00f0ff' : '#ff0055'
  });
}

let interactiveObjects = [
  { id: "projects_obelisk", name: "Projects Matrix", x: 650, y: 650, w: 64, h: 64, panel: "projects", color: '#00f0ff', glyph: "💾", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 },
  { id: "career_obelisk", name: "Career & QA Dossier", x: 650, y: 1350, w: 64, h: 64, panel: "career", color: '#38bdf8', glyph: "🎮", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 },
  { id: "skills_obelisk", name: "Tech Arsenal", x: 1300, y: 450, w: 64, h: 64, panel: "skills", color: '#00f5d4', glyph: "⚡", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 },
  { id: "trophy_vault", name: "Trophy Relic Vault", x: 1300, y: 1550, w: 64, h: 64, panel: "achievements", color: '#ff0055', glyph: "🏆", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 },
  { id: "lore_shrine", name: "Drifter Lore & Media", x: 1950, y: 650, w: 64, h: 64, panel: "lore", color: '#e2c044', glyph: "🐱", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 },
  { id: "platforms_relay", name: "Comm Relay", x: 1950, y: 1350, w: 64, h: 64, panel: "platforms", color: '#ff9e00', glyph: "📡", activated: false, hits: 0, maxHits: 3, shakeTimer: 0, shakeIntensity: 0, flashTimer: 0, awakenTimer: 0 }
];

let activeObject = null;
let isModalOpen = false;
let gameLoopStarted = false;
let pulseTimer = 0;
let easterEggSpawned = false;

function checkEasterEggCondition() {
  // 1. All core achievements must be unlocked
  const allCoreUnlocked = CORE_ACHIEVEMENT_IDS.every(id => unlockedAchievements.includes(id));

  // 2. In addition, ALL world obelisks must currently be awakened (online) in the Rubix world
  const activeWorldObelisks = interactiveObjects.filter(
    obj => obj.id !== 'emotion_engine_obelisk' && obj.id !== 'trophy_vault'
  );
  const allWorldObelisksAwakened = activeWorldObelisks.length > 0 && activeWorldObelisks.every(obj => obj.activated);

  if (allCoreUnlocked && allWorldObelisksAwakened && !easterEggSpawned) {
    spawnEasterEggObelisk();
  }
}

function spawnEasterEggObelisk() {
  if (easterEggSpawned) return;
  easterEggSpawned = true;

  const eeObj = {
    id: "emotion_engine_obelisk",
    name: "Emotion Engine [EE] Core",
    x: 1268,
    y: 968,
    w: 64,
    h: 64,
    panel: "emotion_engine",
    color: '#ffe156',
    glyph: "⚡",
    activated: true,
    hits: 3,
    maxHits: 3,
    shakeTimer: 0,
    shakeIntensity: 0,
    flashTimer: 0,
    awakenTimer: 35,
    isEasterEgg: true
  };

  if (!interactiveObjects.some(o => o.id === "emotion_engine_obelisk")) {
    interactiveObjects.push(eeObj);
  }

  createShockwave(1300, 1000, '#ffe156', 220);
  createShockwave(1300, 1000, '#ffffff', 140);
  createParticleBurst(1300, 1000, '#ffe156', 35);
  showGameBanner("SECRET UNLOCKED: 128-bit Emotion Engine (EE) Relic Awakened at Spawn!");
}

function resetRubixGame() {
  // 1. Reset all standard obelisks to dormant (offline)
  interactiveObjects.forEach(obj => {
    obj.activated = false;
    obj.hits = 0;
    obj.shakeTimer = 0;
    obj.flashTimer = 0;
    obj.awakenTimer = 0;
  });

  // 2. Remove the Easter egg obelisk from the world so it disappears on R
  interactiveObjects = interactiveObjects.filter(obj => !obj.isEasterEgg);
  easterEggSpawned = false;

  // 3. Close any open modal
  closeModal();

  // 4. Reset in-game awakened obelisk trophies
  const inGameIds = ['sword_slash', 'projects_checked', 'career_checked', 'skills_checked', 'lore_checked', 'platforms_checked', 'emotion_engine'];
  unlockedAchievements = unlockedAchievements.filter(id => !inGameIds.includes(id));
  localStorage.setItem('sleepyhead_trophies_v3', JSON.stringify(unlockedAchievements));

  // 5. Reset player position to world spawn center
  player.x = WORLD_WIDTH / 2;
  player.y = WORLD_HEIGHT / 2;
  player.isDashing = false;
  player.isSlashing = false;

  // 6. Visual and audio burst
  try {
    playPS2ConfirmSound();
  } catch (e) {}
  createShockwave(player.x, player.y, '#00f0ff', 160);
  createParticleBurst(player.x, player.y, '#00f0ff', 25);

  // 7. HUD Banner
  showGameBanner("RUBIX MATRIX RESET: All Data Nodes Re-Locked (Offline). Strike with J to Awaken!");
}

function showGameBanner(text) {
  const banner = document.getElementById('game-banner');
  if (!banner) return;
  banner.innerText = text;
  banner.classList.add('show');
  setTimeout(() => {
    banner.classList.remove('show');
  }, 4500);
}

const keys = {};
window.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
  if (currentScreen !== 'game') return;

  if (e.key === ' ' || e.code === 'Space') triggerDash();
  if (e.key.toLowerCase() === 'j') triggerSlash();
  if (e.key.toLowerCase() === 'r' && !isModalOpen) resetRubixGame();
  handleInteractionInput(e);
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

canvas.addEventListener('click', (e) => {
  if (currentScreen !== 'game' || isModalOpen) return;
  const rect = canvas.getBoundingClientRect();
  const clickWorldX = (e.clientX - rect.left) + camera.x;
  const clickWorldY = (e.clientY - rect.top) + camera.y;

  for (let obj of interactiveObjects) {
    if (
      clickWorldX >= obj.x - 20 &&
      clickWorldX <= obj.x + obj.w + 20 &&
      clickWorldY >= obj.y - 20 &&
      clickWorldY <= obj.y + obj.h + 20
    ) {
      if (obj.activated) {
        openModal(obj.panel);
        if (obj.id === 'projects_obelisk') unlockAchievement('projects_checked');
        if (obj.id === 'career_obelisk') unlockAchievement('career_checked');
        if (obj.id === 'skills_obelisk') unlockAchievement('skills_checked');
        if (obj.id === 'lore_shrine') unlockAchievement('lore_checked');
        if (obj.id === 'platforms_relay') unlockAchievement('platforms_checked');
        if (obj.id === 'emotion_engine_obelisk') unlockAchievement('emotion_engine');
      }
      break;
    }
  }
});

function triggerDash() {
  if (player.dashCooldown > 0 || player.isDashing) return;
  player.isDashing = true;
  player.dashTimer = 14;
  player.dashCooldown = 30;
  playDashSound();
  unlockAchievement('drifter_dash');
  createParticleBurst(player.x, player.y, '#00f0ff', 14);
}

function triggerSlash() {
  if (player.isSlashing) return;
  player.isSlashing = true;
  player.slashTimer = 15;
  playSlashSound();

  if (player.facingDir === 'right') player.slashAngle = 0;
  else if (player.facingDir === 'down') player.slashAngle = Math.PI / 2;
  else if (player.facingDir === 'left') player.slashAngle = Math.PI;
  else if (player.facingDir === 'up') player.slashAngle = -Math.PI / 2;

  createParticleBurst(player.x, player.y, '#ff0055', 10);
  checkSlashHits();
}

function checkSlashHits() {
  const strikeX = player.x + Math.cos(player.slashAngle) * 35;
  const strikeY = player.y + Math.sin(player.slashAngle) * 35;

  for (let obj of interactiveObjects) {
    const cx = obj.x + obj.w / 2;
    const cy = obj.y + obj.h / 2;

    const nearX = Math.max(obj.x, Math.min(player.x, obj.x + obj.w));
    const nearY = Math.max(obj.y, Math.min(player.y, obj.y + obj.h));
    const distToEdge = Math.hypot(player.x - nearX, player.y - nearY);
    const distToStrike = Math.hypot(strikeX - cx, strikeY - cy);
    const distToCenter = Math.hypot(player.x - cx, player.y - cy);

    const angleToObj = Math.atan2(cy - player.y, cx - player.x);
    let angleDiff = Math.abs(player.slashAngle - angleToObj);
    while (angleDiff > Math.PI) angleDiff = Math.abs(angleDiff - Math.PI * 2);

    const isHit = (distToStrike < 60) || (distToEdge < 48) || (distToCenter < 95 && angleDiff < Math.PI * 0.65);

    if (isHit) {
      hitObelisk(obj);
      break;
    }
  }
}

function hitObelisk(obj) {
  const cx = obj.x + obj.w / 2;
  const cy = obj.y + obj.h / 2;
  const hitImpactX = (player.x + cx) / 2;
  const hitImpactY = (player.y + cy) / 2;

  unlockAchievement('sword_slash');

  if (!obj.activated) {
    obj.hits++;
    obj.shakeTimer = 20;
    obj.shakeIntensity = 10;
    obj.flashTimer = 8;
    cameraShake = Math.max(cameraShake, 6);

    playObeliskHitSound(obj.hits);
    createSparkBurst(hitImpactX, hitImpactY, ['#ffffff', '#cbd5e1', obj.color], 14);

    if (obj.hits >= obj.maxHits) {
      obj.activated = true;
      obj.awakenTimer = 35;
      cameraShake = 16;
      playObeliskAwakenSound();

      createShockwave(cx, cy, obj.color, 120);
      createShockwave(cx, cy, '#ffffff', 75);
      createParticleBurst(cx, cy, obj.color, 36);
      createParticleBurst(cx, cy, '#ffffff', 18);
      checkEasterEggCondition();
    }
  } else {
    // Tactile reaction when striking an active obelisk
    obj.shakeTimer = 10;
    obj.shakeIntensity = 5;
    obj.flashTimer = 4;
    cameraShake = Math.max(cameraShake, 3);
    playObeliskHitSound(3);
    createSparkBurst(hitImpactX, hitImpactY, [obj.color, '#ffffff'], 10);
    createShockwave(cx, cy, obj.color, 50);
  }
}

function createSparkBurst(x, y, colors, count = 12) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 6 + 2;
    const col = Array.isArray(colors) ? colors[Math.floor(Math.random() * colors.length)] : colors;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 3.5 + 1.5,
      color: col,
      life: Math.floor(Math.random() * 12 + 14)
    });
  }
}

function createShockwave(x, y, color, maxRadius = 90) {
  shockwaves.push({
    x: x,
    y: y,
    color: color,
    radius: 6,
    maxRadius: maxRadius,
    alpha: 1.0,
    speed: 4.5
  });
}

function createParticleBurst(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5 + 1.5;
    particles.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 2,
      color: color,
      life: 22
    });
  }
}

function updateCamera() {
  const targetX = player.x - canvas.width / 2;
  const targetY = player.y - canvas.height / 2;

  camera.x += (targetX - camera.x) * 0.12;
  camera.y += (targetY - camera.y) * 0.12;

  if (cameraShake > 0) {
    camera.x += (Math.random() - 0.5) * cameraShake * 2;
    camera.y += (Math.random() - 0.5) * cameraShake * 2;
    cameraShake *= 0.88;
    if (cameraShake < 0.2) cameraShake = 0;
  }

  const maxX = Math.max(0, WORLD_WIDTH - canvas.width);
  const maxY = Math.max(0, WORLD_HEIGHT - canvas.height);

  camera.x = Math.max(0, Math.min(maxX, camera.x));
  camera.y = Math.max(0, Math.min(maxY, camera.y));
}

function updatePlayer() {
  if (isModalOpen || currentScreen !== 'game') return;

  pulseTimer += 0.04;
  if (player.dashCooldown > 0) player.dashCooldown--;
  
  if (player.isDashing) {
    player.dashTimer--;
    const dashSpeed = 14;
    if (player.facingDir === 'right') player.x += dashSpeed;
    if (player.facingDir === 'left') player.x -= dashSpeed;
    if (player.facingDir === 'up') player.y -= dashSpeed;
    if (player.facingDir === 'down') player.y += dashSpeed;

    dashGhosts.push({
      x: player.x, y: player.y,
      facingDir: player.facingDir,
      alpha: 0.75, color: '#00f0ff'
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

  const margin = 50;
  player.x = Math.max(margin, Math.min(WORLD_WIDTH - margin, player.x));
  player.y = Math.max(margin, Math.min(WORLD_HEIGHT - margin, player.y));

  updateCamera();

  // Update object timers
  interactiveObjects.forEach(obj => {
    if (obj.shakeTimer > 0) obj.shakeTimer--;
    if (obj.flashTimer > 0) obj.flashTimer--;
    if (obj.awakenTimer > 0) obj.awakenTimer--;
  });

  // Update shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.radius += sw.speed;
    sw.alpha -= 0.035;
    if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
      shockwaves.splice(i, 1);
    }
  }

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

  // Update ambient particles
  ambientParticles.forEach(ap => {
    ap.y += ap.vy;
    ap.x += ap.vx;
    if (ap.y < 0) { ap.y = WORLD_HEIGHT; ap.x = Math.random() * WORLD_WIDTH; }
    if (ap.x < 0) ap.x = WORLD_WIDTH;
    if (ap.x > WORLD_WIDTH) ap.x = 0;
  });

  checkProximity();
}

function checkProximity() {
  const interactPrompt = document.getElementById('interact-prompt');
  activeObject = null;

  for (let obj of interactiveObjects) {
    const dx = player.x - (obj.x + obj.w / 2);
    const dy = player.y - (obj.y + obj.h / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 90) {
      activeObject = obj;
      break;
    }
  }

  if (activeObject && !isModalOpen) {
    interactPrompt.classList.remove('hidden');
    if (activeObject.activated) {
      interactPrompt.innerText = `Press E for ${activeObject.name}`;
      interactPrompt.style.background = 'var(--ps2-gold)';
      interactPrompt.style.color = '#050614';
      interactPrompt.style.border = 'none';
      interactPrompt.style.boxShadow = '0 4px 15px rgba(226, 192, 68, 0.4)';
    } else {
      interactPrompt.innerText = `⚔️ Strike with Slash [J] to Awaken (${activeObject.hits}/${activeObject.maxHits})`;
      interactPrompt.style.background = 'rgba(15, 23, 42, 0.95)';
      interactPrompt.style.color = 'var(--ps2-cyan)';
      interactPrompt.style.border = '1px solid var(--ps2-cyan-dim)';
      interactPrompt.style.boxShadow = '0 4px 15px rgba(0, 240, 255, 0.3)';
    }
  } else {
    interactPrompt.classList.add('hidden');
  }
}

function renderGameWorld() {
  if (currentScreen !== 'game') return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Apply Camera Transform
  ctx.save();
  ctx.translate(-Math.round(camera.x), -Math.round(camera.y));

  // Deep space cyber void background
  ctx.fillStyle = '#04081c';
  ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

  // Background Grid Floor
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.05)';
  ctx.lineWidth = 1;
  const gridSize = 50;
  for (let x = 0; x <= WORLD_WIDTH; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD_HEIGHT); ctx.stroke();
  }
  for (let y = 0; y <= WORLD_HEIGHT; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD_WIDTH, y); ctx.stroke();
  }

  // Center Spawn Pedestal Hologram
  const cx = WORLD_WIDTH / 2;
  const cy = WORLD_HEIGHT / 2;
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 90, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 0, 85, 0.2)';
  ctx.beginPath();
  ctx.arc(cx, cy, 130, 0, Math.PI * 2);
  ctx.stroke();

  // Arena Perimeter Forcefield
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 18;
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, WORLD_WIDTH - 40, WORLD_HEIGHT - 40);
  ctx.shadowBlur = 0;

  // Shockwaves
  shockwaves.forEach(sw => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, sw.alpha);
    ctx.strokeStyle = sw.color;
    ctx.shadowColor = sw.color;
    ctx.shadowBlur = 14;
    ctx.lineWidth = 3 * sw.alpha;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  // Ambient particles
  ambientParticles.forEach(ap => {
    ctx.fillStyle = ap.color;
    ctx.globalAlpha = ap.alpha * (0.5 + Math.sin(pulseTimer + ap.x) * 0.3);
    ctx.fillRect(ap.x, ap.y, ap.size, ap.size);
  });
  ctx.globalAlpha = 1.0;

  // Interactive Obelisks
  interactiveObjects.forEach((obj, idx) => {
    // Shake calculation
    let shakeX = 0, shakeY = 0;
    if (obj.shakeTimer > 0) {
      const shakeMag = (obj.shakeIntensity || 8) * (obj.shakeTimer / 20);
      shakeX = (Math.random() - 0.5) * shakeMag * 2;
      shakeY = (Math.random() - 0.5) * shakeMag * 2;
    }

    const ox = obj.x + shakeX;
    const oy = obj.y + shakeY;
    const ocx = ox + obj.w / 2;
    const ocy = oy + obj.h / 2;
    const isNearby = (activeObject && activeObject.id === obj.id);

    if (!obj.activated) {
      // ==========================================
      // INACTIVE / DORMANT OBELISK (GREY MONOLITH)
      // ==========================================
      ctx.save();
      ctx.fillStyle = obj.flashTimer > 0 ? 'rgba(230, 240, 255, 0.85)' : (isNearby ? '#22283a' : '#171a24');
      ctx.strokeStyle = obj.flashTimer > 0 ? '#ffffff' : (isNearby ? '#64748b' : '#334155');
      ctx.lineWidth = isNearby ? 2.5 : 2;
      ctx.shadowColor = isNearby ? 'rgba(100, 116, 139, 0.5)' : '#000000';
      ctx.shadowBlur = isNearby ? 10 : 4;

      ctx.fillRect(ox, oy, obj.w, obj.h);
      ctx.strokeRect(ox, oy, obj.w, obj.h);

      // Inner dormant core
      ctx.fillStyle = isNearby ? '#334155' : '#232936';
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(ocx, ocy, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Dormant glyph (faint grey)
      ctx.shadowBlur = 0;
      ctx.font = '14px Orbitron, sans-serif';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(obj.glyph, ocx, ocy);

      // Energy fissure cracks if damaged (hits 1 or 2)
      if (obj.hits > 0) {
        ctx.strokeStyle = obj.color;
        ctx.shadowColor = obj.color;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1.5;

        // Fissure 1 (from center to top-right)
        ctx.beginPath();
        ctx.moveTo(ocx + 8, ocy - 6);
        ctx.lineTo(ocx + 18, ocy - 14);
        ctx.lineTo(ox + obj.w - 6, oy + 8);
        ctx.stroke();

        // Fissure 2 (if 2 hits, spreads to bottom-left)
        if (obj.hits >= 2) {
          ctx.beginPath();
          ctx.moveTo(ocx - 8, ocy + 6);
          ctx.lineTo(ocx - 16, ocy + 16);
          ctx.lineTo(ox + 8, oy + obj.h - 6);
          ctx.stroke();

          // Second branch
          ctx.beginPath();
          ctx.moveTo(ocx + 4, ocy + 8);
          ctx.lineTo(ocx + 12, ocy + 22);
          ctx.stroke();
        }
      }

      ctx.restore();
      // NO text rendered above dormant obelisk!

    } else {
      // ==========================================
      // ACTIVE / AWAKENED OBELISK (NEON & FLOATING TEXT)
      // ==========================================
      const pulse = Math.sin(pulseTimer * 2.5 + idx) * 4;
      const awakenBloom = obj.awakenTimer > 0 ? (obj.awakenTimer / 35) * 20 : 0;

      // Glowing aura base
      ctx.save();
      ctx.shadowColor = obj.color;
      ctx.shadowBlur = (isNearby ? 28 : 16) + awakenBloom;
      ctx.fillStyle = isNearby ? 'rgba(12, 28, 70, 0.95)' : 'rgba(8, 18, 50, 0.9)';
      ctx.strokeStyle = obj.color;
      ctx.lineWidth = isNearby ? 3 : 2;

      ctx.fillRect(ox - pulse/2 - awakenBloom/4, oy - pulse/2 - awakenBloom/4, obj.w + pulse + awakenBloom/2, obj.h + pulse + awakenBloom/2);
      ctx.strokeRect(ox - pulse/2 - awakenBloom/4, oy - pulse/2 - awakenBloom/4, obj.w + pulse + awakenBloom/2, obj.h + pulse + awakenBloom/2);

      // Inner glowing core
      ctx.fillStyle = obj.color;
      ctx.beginPath();
      ctx.arc(ocx, ocy, 11 + (isNearby ? 3 : 0) + Math.sin(pulseTimer * 3 + idx) * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Center glowing glyph
      ctx.shadowBlur = 10;
      ctx.font = '14px Orbitron, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(obj.glyph, ocx, ocy);

      // Floating, twitching, and blinking Text Label above obelisk
      const floatY = Math.sin(pulseTimer * 3 + idx) * 3;
      const isTwitching = Math.sin(pulseTimer * 14 + idx * 7) > 0.86;
      const twitchX = isTwitching ? (Math.sin(pulseTimer * 25) * 2.5) : 0;
      const twitchY = isTwitching ? (Math.cos(pulseTimer * 30) * 1.8) : 0;
      const blinkAlpha = 0.85 + Math.sin(pulseTimer * 4 + idx) * 0.15;

      ctx.globalAlpha = blinkAlpha;
      ctx.shadowColor = obj.color;
      ctx.shadowBlur = isNearby ? 16 : 8;
      ctx.font = 'bold 12px Orbitron, monospace';
      ctx.fillStyle = isNearby ? '#ffffff' : obj.color;
      ctx.textAlign = 'center';
      ctx.fillText(obj.name, ocx + twitchX, oy - 14 + floatY + twitchY);

      ctx.restore();
    }
  });
  ctx.shadowBlur = 0;

  // Dash ghosts
  dashGhosts.forEach(ghost => {
    ctx.save();
    ctx.globalAlpha = ghost.alpha;
    ctx.fillStyle = ghost.color;
    ctx.shadowColor = ghost.color;
    ctx.shadowBlur = 12;
    ctx.fillRect(ghost.x - 12, ghost.y - 16, 24, 32);
    ctx.restore();
  });

  // Slash particles
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 8;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  ctx.shadowBlur = 0;

  // Drifter Character
  ctx.save();
  ctx.translate(player.x, player.y);

  // Cape / Scarf trailing
  ctx.fillStyle = '#ff0055';
  ctx.shadowColor = '#ff0055';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  if (player.facingDir === 'up') ctx.fillRect(-8, 8, 16, 16);
  else if (player.facingDir === 'down') ctx.fillRect(-8, -18, 16, 10);
  else if (player.facingDir === 'left') ctx.fillRect(6, -10, 10, 18);
  else if (player.facingDir === 'right') ctx.fillRect(-16, -10, 10, 18);

  // Body armor
  ctx.fillStyle = '#0a1a3a';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 2;
  ctx.fillRect(-11, -16, 22, 30);
  ctx.strokeRect(-11, -16, 22, 30);

  // Visor glow
  ctx.fillStyle = '#00f0ff';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 12;
  if (player.facingDir === 'down') ctx.fillRect(-7, -12, 14, 4);
  else if (player.facingDir === 'left') ctx.fillRect(-9, -12, 7, 4);
  else if (player.facingDir === 'right') ctx.fillRect(2, -12, 7, 4);
  else if (player.facingDir === 'up') ctx.fillRect(-5, -14, 10, 3);

  // Energy core
  ctx.fillStyle = '#e2c044';
  ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();

  // Light Blade Slash Arc - Fluid Tapered Hard-Light Crescent Sweep
  if (player.isSlashing && player.slashTimer > 0) {
    renderSlashEffect(ctx, player);
  }

  ctx.restore();
  ctx.restore(); // Restore Camera Transform

  // Screen Space HUD Overlay (Mini-Map)
  renderMiniMap();
}

function renderSlashEffect(ctx, player) {
  const totalFrames = 15;
  const progress = (totalFrames - player.slashTimer) / totalFrames; // 0.0 -> 1.0
  const alpha = Math.min(1, player.slashTimer / 7); // Smooth dissolve

  ctx.save();

  const arcSpan = Math.PI * 0.88; // ~158 degree sweeping strike
  const startAngle = player.slashAngle - arcSpan * 0.52;
  const endAngle = player.slashAngle + arcSpan * 0.48;

  // The leading edge whips across rapidly in the initial burst
  const sweepFactor = Math.min(1, Math.pow(progress * 2.2 + 0.25, 0.75));
  const activeEndAngle = startAngle + (endAngle - startAngle) * sweepFactor;

  // Taper parameters:
  // Starts with a longer radial reach and thicker width (12px) on the left,
  // ending in a short radial reach and razor needle point (1px) on the right.
  const startRadius = 56;
  const endRadius = 40;
  const startThickness = 12;
  const endThickness = 1.0;

  const steps = 32;
  const outerPoints = [];
  const innerPoints = [];
  const midPoints = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps; // 0 = start/left, 1 = tip/right
    const angle = startAngle + (activeEndAngle - startAngle) * t;

    // Organic non-linear taper
    const easeT = Math.pow(t, 1.25);
    const rBase = startRadius - (startRadius - endRadius) * easeT;
    const thickness = startThickness - (startThickness - endThickness) * easeT;

    const rOut = rBase + thickness * 0.55;
    const rIn = Math.max(12, rBase - thickness * 0.45);

    outerPoints.push({ x: Math.cos(angle) * rOut, y: Math.sin(angle) * rOut });
    innerPoints.push({ x: Math.cos(angle) * rIn, y: Math.sin(angle) * rIn });
    midPoints.push({ x: Math.cos(angle) * rBase, y: Math.sin(angle) * rBase });
  }

  // 1. NEON HARD-LIGHT GLOW WEDGE (Blade energy volume)
  ctx.save();
  ctx.globalAlpha = alpha * 0.95;
  ctx.shadowColor = '#ff0055';
  ctx.shadowBlur = 24;

  const grad = ctx.createLinearGradient(
    outerPoints[0].x, outerPoints[0].y,
    outerPoints[outerPoints.length - 1].x, outerPoints[outerPoints.length - 1].y
  );
  grad.addColorStop(0, 'rgba(255, 0, 85, 0.95)');
  grad.addColorStop(0.5, 'rgba(255, 45, 120, 0.85)');
  grad.addColorStop(1, 'rgba(255, 150, 200, 0.95)');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(outerPoints[0].x, outerPoints[0].y);
  for (let i = 1; i < outerPoints.length; i++) {
    ctx.lineTo(outerPoints[i].x, outerPoints[i].y);
  }
  for (let i = innerPoints.length - 1; i >= 0; i--) {
    ctx.lineTo(innerPoints[i].x, innerPoints[i].y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 2. RAZOR-SHARP HIGH-FREQUENCY BLADE CORE (White-hot laser spine)
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 12;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = Math.max(1, 3.2 * (1 - progress * 0.6));
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(midPoints[0].x, midPoints[0].y);
  for (let i = 1; i < midPoints.length; i++) {
    ctx.lineTo(midPoints[i].x, midPoints[i].y);
  }
  ctx.stroke();
  ctx.restore();

  // 3. MOTION SPEED TRAILS (Outer & Inner sonic streak lines)
  ctx.save();
  ctx.globalAlpha = alpha * 0.65;
  ctx.strokeStyle = 'rgba(255, 130, 185, 0.8)';
  ctx.lineWidth = 1.2;

  // Leading edge outer streak
  ctx.beginPath();
  const streakStart = startAngle + (activeEndAngle - startAngle) * 0.2;
  ctx.arc(0, 0, startRadius + 4, streakStart, activeEndAngle);
  ctx.stroke();

  // Trailing inner echo streak
  ctx.beginPath();
  ctx.arc(0, 0, endRadius - 4, streakStart, activeEndAngle);
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

function renderMiniMap() {
  const mapW = 140;
  const mapH = 100;
  const mapX = canvas.width - mapW - 20;
  const mapY = 70;

  ctx.save();
  ctx.fillStyle = 'rgba(2, 6, 23, 0.8)';
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
  ctx.lineWidth = 1;
  ctx.fillRect(mapX, mapY, mapW, mapH);
  ctx.strokeRect(mapX, mapY, mapW, mapH);

  // Draw Obelisks on Mini-Map
  interactiveObjects.forEach(obj => {
    const mx = mapX + (obj.x / WORLD_WIDTH) * mapW;
    const my = mapY + (obj.y / WORLD_HEIGHT) * mapH;
    ctx.fillStyle = obj.activated ? obj.color : '#475569';
    ctx.fillRect(mx - 2, my - 2, 4, 4);
    if (obj.activated) {
      ctx.shadowColor = obj.color;
      ctx.shadowBlur = 4;
      ctx.fillRect(mx - 2, my - 2, 4, 4);
      ctx.shadowBlur = 0;
    }
  });

  // Draw Player on Mini-Map
  const px = mapX + (player.x / WORLD_WIDTH) * mapW;
  const py = mapY + (player.y / WORLD_HEIGHT) * mapH;
  ctx.fillStyle = '#ff0055';
  ctx.beginPath();
  ctx.arc(px, py, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function gameLoop() {
  if (currentScreen === 'game') {
    updatePlayer();
    renderGameWorld();
  }
  requestAnimationFrame(gameLoop);
}

function startCanvasGame() {
  if (!gameLoopStarted) {
    gameLoopStarted = true;
    requestAnimationFrame(gameLoop);
  }
  checkEasterEggCondition();
}

// ==========================================
// 8. PS2 MEMORY CARD MODAL OVERLAY
// ==========================================
const modalOverlay = document.getElementById('modal-overlay');

function handleInteractionInput(e) {
  const key = e.key.toLowerCase();
  if (key === 'e' && activeObject && !isModalOpen) {
    if (activeObject.activated) {
      openModal(activeObject.panel);
      if (activeObject.id === 'projects_obelisk') unlockAchievement('projects_checked');
      if (activeObject.id === 'career_obelisk') unlockAchievement('career_checked');
      if (activeObject.id === 'skills_obelisk') unlockAchievement('skills_checked');
      if (activeObject.id === 'lore_shrine') unlockAchievement('lore_checked');
      if (activeObject.id === 'platforms_relay') unlockAchievement('platforms_checked');
      if (activeObject.id === 'emotion_engine_obelisk') unlockAchievement('emotion_engine');
    }
  }
  if ((key === 'escape' || key === 'o') && isModalOpen) {
    closeModal();
  }
}

function openModal(panelType) {
  isModalOpen = true;
  modalOverlay.classList.remove('hidden');
  document.getElementById('interact-prompt').classList.add('hidden');
  playEnterModuleSound();

  const titleEl = document.getElementById('memcard-title');
  const titles = {
    projects: "MEMORY CARD [SLOT 1] // FEATURED PROJECTS & CODE REPOS",
    career: "MEMORY CARD [SLOT 1] // QA EXPERIENCE & ACADEMIC DOSSIER",
    skills: "MEMORY CARD [SLOT 1] // TECHNICAL ARSENAL & SYSTEMS MATRIX",
    lore: "MEMORY CARD [SLOT 1] // DRIFTER LORE, OTAKU ARCHIVE & CATS",
    platforms: "MEMORY CARD [SLOT 1] // EXTERNAL COMM RELAYS & NETWORK",
    achievements: "MEMORY CARD [SLOT 1] // TROPHY VAULT & UNLOCKS",
    emotion_engine: "MEMORY CARD [SLOT 1] // CLASSIFIED HARDWARE: SONY EMOTION ENGINE"
  };
  if (titleEl && titles[panelType]) {
    titleEl.innerText = titles[panelType];
  }

  document.querySelectorAll('.memcard-panel').forEach(panel => {
    if (panel.dataset.panel === panelType) panel.classList.add('active');
    else panel.classList.remove('active');
  });

  if (panelType === 'projects') {
    renderProjects();
  } else if (panelType === 'career') {
    renderCareer();
  } else if (panelType === 'skills') {
    renderSkills();
  } else if (panelType === 'lore') {
    renderLore();
  } else if (panelType === 'platforms') {
    renderPlatforms();
  } else if (panelType === 'achievements') {
    renderAchievements();
  }
}

function closeModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  modalOverlay.classList.add('hidden');
  playLeaveModuleSound();
}

const modalXClose = document.getElementById('modal-x-close');
if (modalXClose) modalXClose.addEventListener('click', closeModal);

const modalFooterClose = document.getElementById('modal-footer-close');
if (modalFooterClose) modalFooterClose.addEventListener('click', closeModal);

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

function renderProjects() {
  const listEl = document.getElementById('projects-list');
  const detailEl = document.getElementById('projects-detail');
  if (!listEl || !detailEl) return;
  
  listEl.innerHTML = '';
  PROJECTS.forEach((proj, idx) => {
    const li = document.createElement('li');
    if (idx === 0) li.classList.add('selected');
    li.innerHTML = `
      <span><strong>[0${idx+1}]</strong> ${proj.title}</span>
      <span class="project-tag-chip" style="font-size:13px;color:var(--ps2-cyan);font-weight:bold;font-family:var(--font-display);">${proj.tag || proj.size}</span>
    `;
    
    const showDetail = () => {
      document.querySelectorAll('#projects-list li').forEach(el => el.classList.remove('selected'));
      li.classList.add('selected');
      playPS2SelectSound();
      detailEl.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <h4 style="color:var(--ps2-gold);font-family:var(--font-display);font-size:22px;margin:0;letter-spacing:1px;">${proj.title}</h4>
          <span style="background:rgba(255,0,85,0.25);border:1px solid var(--ps2-magenta);color:#fff;padding:4px 10px;border-radius:4px;font-size:14px;font-family:var(--font-display);font-weight:bold;">${proj.category}</span>
        </div>
        <p style="margin:10px 0;line-height:1.6;color:var(--ps2-silver);font-size:22px;">${proj.desc}</p>
        <div style="margin-top:14px;">
          <span style="color:var(--ps2-cyan);font-weight:bold;font-size:16px;font-family:var(--font-display);letter-spacing:1.5px;">TECH SPECIFICATIONS:</span>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
            ${proj.tech.map(t => `<span style="background:rgba(0,240,255,0.14);border:1px solid var(--ps2-cyan-dim);color:var(--ps2-silver);padding:5px 12px;border-radius:4px;font-size:19px;">${t}</span>`).join('')}
          </div>
        </div>
        ${proj.link ? `
        <div class="project-action-row">
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="ps2-btn-link">
            <span>&#128279; ACCESS REPO / DEMO</span> &rarr;
          </a>
        </div>
        ` : ''}
      `;
    };

    li.onclick = showDetail;
    listEl.appendChild(li);

    if (idx === 0) showDetail();
  });
}

function renderCareer() {
  const container = document.getElementById('career-education-container');
  if (!container) return;

  container.innerHTML = `
    <div class="dossier-column">
      <h4>&#127918; INDUSTRY & QA EXPERIENCE</h4>
      ${CAREER_EDUCATION.experience.map(exp => `
        <div class="dossier-card">
          <div class="dossier-header">
            <span class="dossier-title">${exp.role}</span>
            <span class="dossier-badge">${exp.badge}</span>
          </div>
          <div class="dossier-sub">${exp.company}</div>
          <div class="dossier-meta">&#128338; ${exp.period}</div>
          <p class="dossier-desc">${exp.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="dossier-column">
      <h4>&#127891; ACADEMIC QUALIFICATIONS</h4>
      ${CAREER_EDUCATION.education.map(edu => `
        <div class="dossier-card">
          <div class="dossier-header">
            <span class="dossier-title">${edu.degree}</span>
            <span class="dossier-badge gold">${edu.badge}</span>
          </div>
          <div class="dossier-sub">${edu.institution}</div>
          ${edu.department ? `<div class="dossier-meta">${edu.department}</div>` : ''}
          ${edu.result ? `
          <div style="color:var(--ps2-gold);font-family:var(--font-display);font-size:16px;margin-top:8px;">
            STATUS: ${edu.result}
          </div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  container.innerHTML = SKILL_GROUPS.map(grp => `
    <div class="skill-cat-card">
      <div class="skill-cat-header">
        <span class="skill-cat-icon">${grp.icon}</span>
        <span>${grp.category}</span>
      </div>
      <div class="skill-badges-flow">
        ${grp.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderLore() {
  const copyEl = document.getElementById('bio-copy');
  if (copyEl) copyEl.innerText = LORE.bio;

  const container = document.getElementById('lore-details-container');
  if (!container) return;

  container.innerHTML = `
    <div class="lore-group">
      <div class="lore-group-title">&#127918; FAVORITE GAMES</div>
      <div class="lore-chips">
        ${LORE.favorites.games.map(g => `<span class="lore-chip">${g}</span>`).join('')}
      </div>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#127916; ANIME FAVORITES</div>
      <div class="lore-chips">
        ${LORE.favorites.anime.map(a => `<span class="lore-chip pink">${a}</span>`).join('')}
      </div>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#127909; MOVIES & CINEMA</div>
      <div class="lore-chips">
        ${LORE.favorites.movies.map(m => `<span class="lore-chip">${m}</span>`).join('')}
      </div>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#128218; LITERATURE & READING</div>
      <div class="lore-chips">
        ${LORE.favorites.reading.map(r => `<span class="lore-chip cyan">${r}</span>`).join('')}
      </div>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#127925; MUSIC & AUDIO SYNTHESIS</div>
      <div class="lore-chips">
        ${LORE.favorites.music.map(mu => `<span class="lore-chip">${mu}</span>`).join('')}
      </div>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#127859; CULINARY & EXPERIMENTAL COOKING</div>
      <p style="margin:6px 0 0 0;font-size:22px;color:var(--ps2-silver);">${LORE.favorites.cooking}</p>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#127950;&#65039; CARS & MECHA</div>
      <p style="margin:6px 0 0 0;font-size:22px;color:var(--ps2-silver);">${LORE.favorites.cars}</p>
    </div>

    <div class="lore-group">
      <div class="lore-group-title">&#9992;&#65039; TRAVEL & EXPLORATION</div>
      <p style="margin:6px 0 0 0;font-size:22px;color:var(--ps2-silver);">${LORE.favorites.travel}</p>
    </div>

    <div class="lore-group" style="border-color:var(--ps2-gold);">
      <div class="lore-group-title" style="color:var(--ps2-gold);">&#128049; SUPREME BEINGS</div>
      <p style="margin:6px 0 0 0;font-size:23px;color:#ffffff;font-weight:bold;">${LORE.favorites.animal}</p>
    </div>
  `;
}

function renderPlatforms() {
  const container = document.getElementById('platforms-container');
  if (!container) return;

  container.innerHTML = PLATFORMS.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="platform-card">
      <div class="platform-left">
        <div class="platform-icon-circle">${p.icon}</div>
        <div class="platform-info">
          <span class="platform-name">${p.name}</span>
          <span class="platform-handle">${p.handle}</span>
        </div>
      </div>
      <span class="platform-tag">${p.badge} &rarr;</span>
    </a>
  `).join('');
}

function renderAchievements() {
  const listEl = document.getElementById('achievements-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  
  ACHIEVEMENTS.forEach(ach => {
    const isUnlocked = unlockedAchievements.includes(ach.id);
    const isSecret = ach.id === 'emotion_engine';
    const li = document.createElement('li');
    li.style.borderColor = isUnlocked ? 'var(--ps2-cyan)' : 'var(--ps2-cyan-dim)';
    li.style.color = isUnlocked ? 'var(--ps2-silver)' : '#6c7086';

    if (isSecret && !isUnlocked) {
      li.innerHTML = `
        <span>🔒 <strong>??? [CLASSIFIED HARDWARE RELIC]</strong>: Unlock all 9 core matrix trophies to awaken the classified hardware core at the center of Rubix world.</span>
        <span style="font-size:16px;font-weight:bold;color:#6c7086;">[LOCKED]</span>
      `;
    } else {
      li.innerHTML = `
        <span>${isUnlocked ? '★' : '☆'} <strong>${ach.title}</strong>: ${ach.desc}</span>
        <span style="font-size:16px;font-weight:bold;color:${isUnlocked ? 'var(--ps2-gold)' : '#6c7086'};">${isUnlocked ? '[UNLOCKED]' : '[LOCKED]'}</span>
      `;
    }
    listEl.appendChild(li);
  });
}

function unlockAchievement(id) {
  if (!unlockedAchievements.includes(id)) {
    unlockedAchievements.push(id);
    localStorage.setItem('sleepyhead_trophies_v3', JSON.stringify(unlockedAchievements));
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      showTrophyToast(ach);
    }
    checkEasterEggCondition();
  }
}

function showTrophyToast(ach) {
  let toast = document.getElementById('trophy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'trophy-toast';
    toast.className = 'trophy-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="trophy-toast-icon">🏆</div>
    <div class="trophy-toast-content">
      <div class="trophy-toast-header">TROPHY UNLOCKED!</div>
      <div class="trophy-toast-title">${ach.title}</div>
    </div>
  `;
  toast.classList.add('show');
  try {
    playPS2ConfirmSound();
  } catch (e) {}
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Interactive footer hint button listeners
const btnHintEnter = document.getElementById('btn-hint-enter');
if (btnHintEnter) btnHintEnter.addEventListener('click', enterMainMenuOption);

const btnHintVersion = document.getElementById('btn-hint-version');
if (btnHintVersion) {
  btnHintVersion.addEventListener('click', () => {
    showScreen('version');
    playPS2ConfirmSound();
  });
}

document.querySelectorAll('.ps2-footer-bar .btn-hint-item').forEach(btn => {
  if (btn.innerText.includes('Back')) {
    btn.addEventListener('click', () => {
      showScreen('mainMenu');
      playPS2BackSound();
    });
  }
});

const btnMemcardEnter = document.getElementById('btn-memcard-enter');
if (btnMemcardEnter) {
  btnMemcardEnter.addEventListener('click', () => {
    enterMemcardOption(memcardIndex);
  });
}

const btnMemcardBack = document.getElementById('btn-memcard-back');
if (btnMemcardBack) {
  btnMemcardBack.addEventListener('click', () => {
    showScreen('mainMenu');
    playPS2BackSound();
  });
}

const btnResetRubix = document.getElementById('btn-reset-rubix');
if (btnResetRubix) {
  btnResetRubix.addEventListener('click', resetRubixGame);
}

// Apply initial palette, wallpaper theme, browser theme, and saved zoom scale
document.body.setAttribute('data-palette', CONSOLE_PALETTES[paletteIndex]);
const valPalette = document.getElementById('val-palette');
if (valPalette) valPalette.innerText = CONSOLE_PALETTES[paletteIndex];

document.body.setAttribute('data-btheme', BROWSER_THEMES[bthemeIndex]);
const valBTheme = document.getElementById('val-btheme');
if (valBTheme) valBTheme.innerText = BROWSER_THEMES[bthemeIndex];

applyWallpaperTheme(CONSOLE_PALETTES[paletteIndex]);
applyZoomLevel(ZOOM_LEVELS[zoomIndex]);