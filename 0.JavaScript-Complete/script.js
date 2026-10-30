// ═══════════════════════════════════════════
// SCRIPT.JS — Game logic. State machine.
// ═══════════════════════════════════════════

// ── State ─────────────────────────────────
const STATE = {
  ENTRY:       "ENTRY",
  ROUND_INTRO: "ROUND_INTRO",
  PLAYING:     "PLAYING",
  ROUND_CLEAR: "ROUND_CLEAR",
  GAME_OVER:   "GAME_OVER",
  WIN:         "WIN",
};

let currentState   = STATE.ENTRY;
let currentRound   = 0;
let timeLeft       = 20;
let escapeCount    = 0;
let gameMemory     = null;
let timerInterval  = null;
let tauntInterval  = null;
let invisInterval  = null;
let introInterval  = null;
let clearInterval_ = null;
let isInvisible    = false;
let cheatRevealed  = false;
let challengeShown = false;

// ── DOM refs ──────────────────────────────
const screens = {
  entry:      document.getElementById("screen-entry"),
  puzzle:     document.getElementById("screen-puzzle"),
  roundIntro: document.getElementById("screen-round-intro"),
  game:       document.getElementById("screen-game"),
  roundClear: document.getElementById("screen-round-clear"),
  gameover:   document.getElementById("screen-gameover"),
  win:        document.getElementById("screen-win"),
};

const el = {
  // Puzzle
  puzzleRoundTag:  document.getElementById("puzzle-round-tag"),
  puzzleRiddle:    document.getElementById("puzzle-riddle"),
  puzzleHintWrap:  document.getElementById("puzzle-hint-wrap"),
  puzzleHintText:  document.getElementById("puzzle-hint-text"),
  btnPuzzleGo:     document.getElementById("btn-puzzle-go"),

  // Bait zone
  baitZone:        document.getElementById("bait-zone"),
  baitCountdown:   document.getElementById("bait-countdown"),

  // Entry
  streakBadge:    document.getElementById("streak-badge"),
  streakFire:     document.getElementById("streak-fire"),
  streakCount:    document.getElementById("streak-count"),
  bestRound:      document.getElementById("best-round"),
  entryGreeting:  document.getElementById("entry-greeting"),
  btnStart:       document.getElementById("btn-start"),

  // Round intro
  introRoundNum:  document.getElementById("intro-round-num"),
  introMechanic:  document.getElementById("intro-mechanic"),
  introCountdown: document.getElementById("intro-countdown"),

  // HUD
  hudRound:       document.getElementById("hud-round"),
  hudTimer:       document.getElementById("hud-timer"),
  hudTimerBar:    document.getElementById("hud-timer-bar"),
  hudEscapes:     document.getElementById("hud-escapes"),

  // Game
  tauntWrap:      document.getElementById("taunt-wrap"),
  tauntText:      document.getElementById("taunt-text"),
  arena:          document.getElementById("arena"),
  realBtn:        document.getElementById("real-btn"),
  gameRoundHint:  document.getElementById("game-round-hint"),

  // Round clear
  clearEmoji:     document.getElementById("clear-emoji"),
  clearTitle:     document.getElementById("clear-title"),
  clearSub:       document.getElementById("clear-sub"),
  clearCountdown: document.getElementById("clear-countdown"),

  // Game over
  goTitle:        document.getElementById("go-title"),
  goMessage:      document.getElementById("go-message"),
  goProgressFill: document.getElementById("go-progress-fill"),
  btnRetry:       document.getElementById("btn-retry"),

  // Win
  winEmoji:       document.getElementById("win-emoji"),
  winTitle:       document.getElementById("win-title"),
  winMessage:     document.getElementById("win-message"),
  winStreak:      document.getElementById("win-streak"),
  btnRevealCheat: document.getElementById("btn-reveal-cheat"),
  cheatCard:      document.getElementById("cheat-card"),
  cheatDay:       document.getElementById("cheat-day"),
  cheatText:      document.getElementById("cheat-text"),
  challengeSection: document.getElementById("challenge-section"),
  btnAcceptChallenge: document.getElementById("btn-accept-challenge"),
  challengeCard:  document.getElementById("challenge-card"),
  challengeText:  document.getElementById("challenge-text"),
  btnYes:         document.getElementById("btn-yes"),
  btnNo:          document.getElementById("btn-no"),
  btnPlayAgain:   document.getElementById("btn-play-again"),
};

// ── Screen switcher ───────────────────────
const SCREEN_TO_STATE = {
  entry:      STATE.ENTRY,
  puzzle:     STATE.ROUND_INTRO,
  roundIntro: STATE.ROUND_INTRO,
  game:       STATE.PLAYING,
  roundClear: STATE.ROUND_CLEAR,
  gameover:   STATE.GAME_OVER,
  win:        STATE.WIN,
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  if (SCREEN_TO_STATE[name]) currentState = SCREEN_TO_STATE[name];
}

// ── Init ──────────────────────────────────
function init() {
  gameMemory = updateStreakOnStart();
  renderEntryScreen();
  showScreen("entry");
}

// ── Entry screen ──────────────────────────
function renderEntryScreen() {
  const greeting = getEntryGreeting(gameMemory);
  el.entryGreeting.textContent = greeting;

  const streak = getStreakDisplay(gameMemory);
  el.streakFire.textContent  = streak.fire;
  el.streakCount.textContent = streak.text;
  el.bestRound.textContent   = gameMemory.bestRound ? `Round ${gameMemory.bestRound}` : "—";

  if (gameMemory.currentStreak === 0) {
    const badge = document.querySelector('.streak-badge');
    if (badge) badge.style.opacity = "0.4";
  }
}

el.btnStart.addEventListener("click", () => {
  currentRound = 0;
  escapeCount  = 0;
  startRoundIntro();
});

// ── Puzzle screen ─────────────────────────
function startRoundIntro() {
  const round = ROUNDS[currentRound];

  el.puzzleRoundTag.textContent = `ROUND ${round.number} OF 5`;
  el.puzzleRiddle.textContent   = round.puzzle.riddle;
  el.puzzleHintText.textContent = round.puzzle.hint;
  el.puzzleHintWrap.classList.add("hidden");

  showScreen("puzzle");
}

let puzzleHintShown = false;

el.btnPuzzleGo.addEventListener("click", () => {
  if (!puzzleHintShown) {
    el.puzzleHintWrap.classList.remove("hidden");
    el.btnPuzzleGo.textContent = "Got it — Let's Go ✦";
    puzzleHintShown = true;
  } else {
    puzzleHintShown = false;
    el.btnPuzzleGo.textContent = "Got it — Let's Go";
    showRoundCountdown();
  }
});

function showRoundCountdown() {
  const round = ROUNDS[currentRound];
  el.introRoundNum.textContent  = round.number;
  el.introMechanic.textContent  = round.mechanic;
  el.introCountdown.textContent = "3";

  showScreen("roundIntro");

  let count = 3;
  introInterval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(introInterval);
      startPlaying();
    } else {
      el.introCountdown.textContent = count;
    }
  }, 1000);
}

// ── Playing ───────────────────────────────
function startPlaying() {
  const round = ROUNDS[currentRound];
  timeLeft    = round.timer;
  escapeCount = 0;
  isInvisible = false;
  cheatRevealed = false;

  el.hudRound.textContent    = `${round.number}/5`;
  el.hudTimer.textContent    = timeLeft;
  el.hudTimerBar.style.width = "100%";
  el.hudTimerBar.style.background = "var(--accent)";
  el.hudEscapes.textContent  = "0";
  el.gameRoundHint.textContent = round.mechanic;
  el.tauntWrap.classList.remove("show");

  // Button label: show "REAL" only when fakes exist, else "CLICK ME"
  el.realBtn.textContent = round.hasFakes ? "REAL" : "CLICK ME";

  resetBtnPosition();
  lastEscapeTime = 0;
  el.realBtn.classList.remove("invisible", "near", "danger", "attracted");

  const transitions = ["0.28s", "0.2s", "0.15s", "0.1s", "0.07s"];
  el.realBtn.style.transition = `
    left ${transitions[currentRound]} cubic-bezier(.34,1.56,.64,1),
    top  ${transitions[currentRound]} cubic-bezier(.34,1.56,.64,1),
    opacity 0.3s, border-color 0.2s, box-shadow 0.2s, background 0.2s
  `;

  fakeOutActive = false;
  speedBurst    = false;

  setupArenaSize(round.arenaScale);
  setupFakeButtons(round);
  setupInvisible(round);
  setupBaitZone(round);
  setupSizeChange(round);
  setupRotation(round);
  setupSlowCursor(round);
  setupDrift(round);
  startSpeedBursts();
  showScreen("game");

  clearInterval(timerInterval);
  timerInterval = setInterval(tickTimer, 1000);

  clearInterval(tauntInterval);
  tauntInterval = setInterval(() => showTaunt(round), 4000);

  el.arena.addEventListener("mousemove", onMouseMove);
}

// ── Timer ─────────────────────────────────
function tickTimer() {
  const round = ROUNDS[currentRound];
  timeLeft--;
  el.hudTimer.textContent = timeLeft;

  const pct = timeLeft / round.timer * 100;
  el.hudTimerBar.style.width = pct + "%";

  if (timeLeft <= 5) {
    el.hudTimerBar.style.background = "var(--danger)";
    el.hudTimer.classList.add("pulse");
    playHeartbeat();
  } else if (timeLeft <= Math.floor(round.timer * 0.4)) {
    el.hudTimerBar.style.background = "var(--warning)";
  }

  if (timeLeft <= 0) {
    endGame(false);
  }
}

// ── Mouse move → escape logic ─────────────
let lastEscapeTime = 0;
let fakeOutActive  = false;
let speedBurst     = false;

const ROUND_ESCAPE_CONFIG = [
  { threshold: 90,  grace: 28,  cooldown: 420, fakeOutChance: 0.0  },
  { threshold: 100, grace: 22,  cooldown: 300, fakeOutChance: 0.15 },
  { threshold: 112, grace: 18,  cooldown: 210, fakeOutChance: 0.25 },
  { threshold: 122, grace: 14,  cooldown: 140, fakeOutChance: 0.35 },
  { threshold: 135, grace: 10,  cooldown: 90,  fakeOutChance: 0.45 },
];

function onMouseMove(e) {
  if (currentState !== STATE.PLAYING || isInvisible) return;

  if (slowCursorActive) {
    realMouseX = e.clientX;
    realMouseY = e.clientY;
    return;
  }

  if (!fakeOutActive) handleDistanceCheck(e.clientX, e.clientY);
}

function triggerFakeOut(cursorX, cursorY) {
  fakeOutActive = true;
  const arenaRect = el.arena.getBoundingClientRect();
  const btnRect   = el.realBtn.getBoundingClientRect();
  const btnCX     = btnRect.left + btnRect.width  / 2 - arenaRect.left;
  const btnCY     = btnRect.top  + btnRect.height / 2 - arenaRect.top;
  const curRelX   = cursorX - arenaRect.left;
  const curRelY   = cursorY - arenaRect.top;

  const towardAngle = Math.atan2(curRelY - btnCY, curRelX - btnCX);
  const teaseX = btnCX + Math.cos(towardAngle) * 20 - el.realBtn.offsetWidth  / 2;
  const teaseY = btnCY + Math.sin(towardAngle) * 20 - el.realBtn.offsetHeight / 2;

  el.realBtn.style.left = Math.max(8, teaseX) + "px";
  el.realBtn.style.top  = Math.max(8, teaseY) + "px";
  el.realBtn.style.transform = "none";

  showTauntText("Nice try... 😈", true);

  setTimeout(() => {
    if (currentState !== STATE.PLAYING) { fakeOutActive = false; return; }
    escapeButton(cursorX, cursorY);
    fakeOutActive = false;
  }, 200);
}

function startSpeedBursts() {
  function scheduleBurst() {
    const delay = 4000 + Math.random() * 5000;
    setTimeout(() => {
      if (currentState !== STATE.PLAYING) return;
      if (currentRound < 1) { scheduleBurst(); return; }

      speedBurst = true;
      el.realBtn.classList.add("speed-burst");
      showTauntText("Turbo mode. 😂", true);

      setTimeout(() => {
        speedBurst = false;
        el.realBtn.classList.remove("speed-burst");
        scheduleBurst();
      }, 1500 + Math.random() * 1000);
    }, delay);
  }
  scheduleBurst();
}

function escapeButton(cursorX, cursorY) {
  const arenaRect = el.arena.getBoundingClientRect();
  const btnRect   = el.realBtn.getBoundingClientRect();
  const pad       = 16;

  const btnCX = btnRect.left + btnRect.width  / 2;
  const btnCY = btnRect.top  + btnRect.height / 2;

  const baseAngle   = Math.atan2(btnCY - (cursorY || btnCY), btnCX - (cursorX || btnCX));
  const angleJitter = (Math.random() - 0.5) * 0.6;
  const angle       = baseAngle + angleJitter;

  const pushDist = 100 + Math.random() * 100;
  let nx = (btnRect.left - arenaRect.left) + Math.cos(angle) * pushDist;
  let ny = (btnRect.top  - arenaRect.top)  + Math.sin(angle) * pushDist;

  const maxX = arenaRect.width  - btnRect.width  - pad;
  const maxY = arenaRect.height - btnRect.height - pad;
  nx = Math.max(pad, Math.min(nx, maxX));
  ny = Math.max(pad, Math.min(ny, maxY));

  isEscaping = true;
  el.realBtn.style.left      = nx + "px";
  el.realBtn.style.top       = ny + "px";
  el.realBtn.style.transform = "none";

  setTimeout(() => { isEscaping = false; }, 250);

  escapeCount++;
  el.hudEscapes.textContent = escapeCount;
  playWhoosh();
}

function triggerNearMiss() {
  el.realBtn.classList.add("near");
  el.realBtn.classList.remove("danger");
  showTauntText(pickRandom(TAUNTS.nearMiss), true);
}

function triggerDanger() {
  el.realBtn.classList.add("danger");
  el.realBtn.classList.remove("near");
}

el.realBtn.addEventListener("click", () => {
  if (currentState !== STATE.PLAYING) return;
  clearAllIntervals();
  el.arena.removeEventListener("mousemove", onMouseMove);

  const isLastRound = currentRound === ROUNDS.length - 1;
  if (isLastRound) {
    endGame(true);
  } else {
    showRoundClear();
  }
});

// ── Fake buttons ──────────────────────────
function setupFakeButtons(round) {
  el.arena.querySelectorAll(".fake-btn").forEach(f => f.remove());
  if (!round.hasFakes) return;

  for (let i = 0; i < round.fakeCount; i++) {
    const fake = document.createElement("button");
    fake.className = "catch-btn fake-btn";
    fake.textContent = "FAKE";
    fake.dataset.real = "false";

    const arenaRect = el.arena.getBoundingClientRect();
    fake.style.position = "absolute";
    fake.style.left = (20 + Math.random() * (arenaRect.width - 120)) + "px";
    fake.style.top = (20 + Math.random() * (arenaRect.height - 60)) + "px";

    const transitions = ["0.28s", "0.2s", "0.15s", "0.1s", "0.07s"];
    fake.style.transition = `
      left ${transitions[currentRound]} cubic-bezier(.34,1.56,.64,1),
      top  ${transitions[currentRound]} cubic-bezier(.34,1.56,.64,1),
      opacity 0.3s, border-color 0.2s, box-shadow 0.2s, background 0.2s
    `;

    fake.addEventListener("mousemove", (e) => {
      if (currentState !== STATE.PLAYING) return;
      handleFakeEscape(fake, e.clientX, e.clientY);
    });

    fake.addEventListener("click", () => {
      el.arena.classList.add("shake");
      setTimeout(() => el.arena.classList.remove("shake"), 400);
      showTauntText("Wrong one. 😂", true);
    });

    el.arena.appendChild(fake);
  }
}

function handleFakeEscape(fakeBtn, cx, cy) {
  const rect = fakeBtn.getBoundingClientRect();
  const fakeCX = rect.left + rect.width / 2;
  const fakeCY = rect.top + rect.height / 2;
  const distance = Math.hypot(cx - fakeCX, cy - fakeCY);

  if (distance < 100) {
    const arenaRect = el.arena.getBoundingClientRect();
    const pad = 20;
    const maxX = arenaRect.width - rect.width - pad;
    const maxY = arenaRect.height - rect.height - pad;
    fakeBtn.style.left = Math.max(pad, Math.min(Math.random() * maxX, maxX)) + "px";
    fakeBtn.style.top  = Math.max(pad, Math.min(Math.random() * maxY, maxY)) + "px";
  }
}

// ── Invisible mechanic ────────────────────
function setupInvisible(round) {
  clearInterval(invisInterval);
  if (!round.hasInvisible) return;

  const startDelay = round.invisibleDelay || 0;

  setTimeout(() => {
    if (currentState !== STATE.PLAYING) return;
    invisInterval = setInterval(() => {
      if (currentState !== STATE.PLAYING) return;

      el.realBtn.classList.add("invisible");
      isInvisible = true;

      const hudElement = document.querySelector('.hud');
      if (hudElement) hudElement.classList.add("stealth-mode");

      setTimeout(() => {
        el.realBtn.classList.remove("invisible");
        isInvisible = false;
        if (hudElement) hudElement.classList.remove("stealth-mode");
      }, round.invisibleDuration || 1500);

    }, round.invisibleInterval || 3000);
  }, startDelay);
}

// ── Autonomous Drift ──────────────────────
let driftFrame = null;
let driftX     = 0;
let driftY     = 0;
let driftPosX  = 0;
let driftPosY  = 0;
let isEscaping = false;

function setupDrift(round) {
  cancelAnimationFrame(driftFrame);
  driftFrame = null;
  isEscaping = false;
  if (!round.hasDrift) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (currentState !== STATE.PLAYING) return;

      const arenaRect = el.arena.getBoundingClientRect();
      const btnRect   = el.realBtn.getBoundingClientRect();

      driftPosX = btnRect.left - arenaRect.left;
      driftPosY = btnRect.top  - arenaRect.top;

      const angle = Math.random() * Math.PI * 2;
      driftX = Math.cos(angle) * 1.2;
      driftY = Math.sin(angle) * 1.2;

      el.realBtn.style.transition = "opacity 0.3s, border-color 0.2s, box-shadow 0.2s, background 0.2s, scale 0.4s";

      animateDrift();
    });
  });
}

function animateDrift() {
  if (currentState !== STATE.PLAYING) return;

  if (isEscaping) {
    const ar = el.arena.getBoundingClientRect();
    const br = el.realBtn.getBoundingClientRect();
    driftPosX = br.left - ar.left;
    driftPosY = br.top  - ar.top;
    driftFrame = requestAnimationFrame(animateDrift);
    return;
  }

  const arenaRect = el.arena.getBoundingClientRect();
  const btnW = el.realBtn.offsetWidth  || 80;
  const btnH = el.realBtn.offsetHeight || 38;
  const pad  = 10;
  const maxX = arenaRect.width  - btnW - pad;
  const maxY = arenaRect.height - btnH - pad;

  driftPosX += driftX;
  driftPosY += driftY;

  if (driftPosX <= pad)  { driftPosX = pad;  driftX = Math.abs(driftX);  driftY += (Math.random() - 0.5) * 0.5; }
  if (driftPosX >= maxX) { driftPosX = maxX; driftX = -Math.abs(driftX); driftY += (Math.random() - 0.5) * 0.5; }
  if (driftPosY <= pad)  { driftPosY = pad;  driftY = Math.abs(driftY);  driftX += (Math.random() - 0.5) * 0.5; }
  if (driftPosY >= maxY) { driftPosY = maxY; driftY = -Math.abs(driftY); driftX += (Math.random() - 0.5) * 0.5; }

  const spd = Math.hypot(driftX, driftY);
  if (spd > 1.8) { driftX *= 1.8 / spd; driftY *= 1.8 / spd; }
  if (spd < 0.6) { driftX *= 0.6 / spd; driftY *= 0.6 / spd; }

  el.realBtn.style.left      = driftPosX + "px";
  el.realBtn.style.top       = driftPosY + "px";
  el.realBtn.style.transform = "none";

  driftFrame = requestAnimationFrame(animateDrift);
}

function setupArenaSize(scale) {
  const base = Math.min(window.innerWidth * 0.85, 440);
  const size = Math.floor(base * scale);
  el.arena.style.width  = size + "px";
  el.arena.style.height = size + "px";
}

// ── Bait Zone ─────────────────────────────
let baitTimeout = null;
let baitActive  = false;

function setupBaitZone(round) {
  clearTimeout(baitTimeout);
  hideBait();

  function scheduleBait() {
    baitTimeout = setTimeout(() => {
      if (currentState !== STATE.PLAYING) return;
      triggerBait(round);
    }, round.baitInterval + (Math.random() * 2000));
  }
  scheduleBait();
}

function triggerBait(round) {
  if (currentState !== STATE.PLAYING || baitActive) return;
  baitActive = true;

  const arenaRect = el.arena.getBoundingClientRect();
  const baitSize  = 60;
  const pad       = 30;

  const bx = pad + Math.random() * (arenaRect.width  - baitSize - pad * 2);
  const by = pad + Math.random() * (arenaRect.height - baitSize - pad * 2);

  el.baitZone.style.left   = bx + "px";
  el.baitZone.style.top    = by + "px";
  el.baitZone.classList.remove("hidden");

  el.realBtn.style.left      = (bx + baitSize / 2 - el.realBtn.offsetWidth / 2) + "px";
  el.realBtn.style.top       = (by + baitSize / 2 - el.realBtn.offsetHeight / 2) + "px";
  el.realBtn.style.transform = "none";
  el.realBtn.classList.add("attracted");

  let remaining = Math.ceil(round.baitWindow / 1000);
  el.baitCountdown.textContent = remaining;
  const countTick = setInterval(() => {
    remaining--;
    el.baitCountdown.textContent = remaining > 0 ? remaining : "";
  }, 1000);

  showTauntText("Now! Use the bait zone! 🎯", true);

  setTimeout(() => {
    clearInterval(countTick);
    hideBait();
    el.realBtn.classList.remove("attracted");
    baitActive = false;
    if (currentState === STATE.PLAYING) setupBaitZone(round);
  }, round.baitWindow);
}

function hideBait() {
  el.baitZone.classList.add("hidden");
  el.baitCountdown.textContent = "";
}

// ── Taunts ────────────────────────────────
function showTaunt(round) {
  if (currentState !== STATE.PLAYING) return;
  const elapsed = (round.timer - timeLeft) / round.timer;

  let pool;
  if (elapsed < 0.4)       pool = TAUNTS.early;
  else if (elapsed < 0.75) pool = TAUNTS.mid;
  else                     pool = TAUNTS.late;

  showTauntText(pickRandom(pool), false);
}

function showTauntText(text, override = false) {
  if (!override && el.tauntWrap.classList.contains("show")) return;

  el.tauntText.textContent = text;
  el.tauntText.style.color = override ? "var(--danger)" : "var(--text)";

  el.tauntWrap.classList.add("show");
  el.tauntWrap.classList.remove("fade-out");

  clearTimeout(el.tauntWrap._hideTimeout);
  el.tauntWrap._hideTimeout = setTimeout(() => {
    el.tauntWrap.classList.add("fade-out");
    setTimeout(() => el.tauntWrap.classList.remove("show", "fade-out"), 400);
  }, 2500);
}

// ── Round clear ───────────────────────────
function showRoundClear() {
  const data = ROUND_CLEAR[currentRound];
  el.clearEmoji.textContent = data.emoji;
  el.clearTitle.textContent = data.title;
  el.clearSub.textContent   = data.sub;
  el.clearCountdown.textContent = "3";

  // Update pip progress
  const pips = document.querySelectorAll('#clear-progress-pips .progress-pip');
  pips.forEach((pip, idx) => {
    pip.classList.remove('done', 'active');
    if (idx < currentRound)      pip.classList.add('done');
    else if (idx === currentRound) pip.classList.add('done'); // just cleared
  });

  showScreen("roundClear");

  let count = 3;
  clearInterval_ = setInterval(() => {
    count--;
    el.clearCountdown.textContent = count;
    if (count <= 0) {
      clearInterval(clearInterval_);
      currentRound++;
      startRoundIntro();
    }
  }, 1000);
}

// ── End game ──────────────────────────────
function endGame(won) {
  clearAllIntervals();
  el.arena.removeEventListener("mousemove", onMouseMove);
  currentState = won ? STATE.WIN : STATE.GAME_OVER;

  if (won) {
    const mem = saveWin();
    renderWinScreen(mem);
    showScreen("win");
    playWinSound();
  } else {
    const roundNum = ROUNDS[currentRound].number;
    const mem      = saveLoss(roundNum);
    renderGameOverScreen(roundNum, mem);
    showScreen("gameover");
  }
}

// ── Win screen ────────────────────────────
function renderWinScreen(mem) {
  el.winMessage.textContent = getWinMessage(mem);
  const streak = getStreakDisplay(mem);
  el.winStreak.textContent = `${streak.fire} Day ${mem.currentStreak} streak`;

  const day   = new Date().getDay();
  const cheat = LUCKY_CHEATS[day];
  el.cheatDay.textContent  = cheat.day;
  el.cheatText.textContent = cheat.cheat;
  el.challengeText.textContent = cheat.challenge;

  el.cheatCard.classList.add("hidden");
  el.challengeSection.classList.add("hidden");
  el.challengeCard.classList.add("hidden");
  el.btnRevealCheat.style.display = "";
}

// ── Game over screen ──────────────────────
function renderGameOverScreen(roundLostAt, mem) {
  el.goTitle.textContent   = `Lost at Round ${roundLostAt}.`;
  el.goMessage.textContent = getGameOverMessage(roundLostAt, mem);

  const pct = ((roundLostAt - 1) / 5) * 100;
  setTimeout(() => { el.goProgressFill.style.width = pct + "%"; }, 100);
}

// ── Win screen buttons ────────────────────
el.btnRevealCheat.addEventListener("click", () => {
  el.cheatCard.classList.remove("hidden");
  el.cheatCard.classList.add("reveal");
  el.btnRevealCheat.style.display = "none";
  el.challengeSection.classList.remove("hidden");
});

el.btnAcceptChallenge.addEventListener("click", () => {
  el.challengeCard.classList.remove("hidden");
  el.btnAcceptChallenge.style.display = "none";
});

el.btnYes.addEventListener("click", () => {
  saveChallengeDone(true);
  const msg = pickRandom(COMPLETION.yes);
  el.challengeCard.querySelector(".challenge-check").innerHTML =
    `<p class="completion-msg yes">${msg}</p>`;
});

el.btnNo.addEventListener("click", () => {
  saveChallengeDone(false);
  const msg = pickRandom(COMPLETION.no);
  el.challengeCard.querySelector(".challenge-check").innerHTML =
    `<p class="completion-msg no">${msg}</p>`;
});

el.btnPlayAgain.addEventListener("click", () => {
  showScreen("entry");
  gameMemory = getMemory();
  renderEntryScreen();
});

el.btnRetry.addEventListener("click", () => {
  currentRound = 0;
  startRoundIntro();
});

// ── Reset button position ─────────────────
function resetBtnPosition() {
  el.realBtn.style.left      = "50%";
  el.realBtn.style.top       = "50%";
  el.realBtn.style.transform = "translate(-50%, -50%)";
}

// ── Sound ─────────────────────────────────
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playWhoosh() {
  try {
    const ctx = getAudioCtx();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    src.buffer = buf;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    src.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch {}
}

function playHeartbeat() {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(60, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch {}
}

function playWinSound() {
  try {
    const ctx = getAudioCtx();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      const t    = ctx.currentTime + i * 0.12;
      osc.frequency.setValueAtTime(freq, t);
      osc.type = "sine";
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  } catch {}
}

// ── Size Change ───────────────────────────
let sizeInterval = null;
const BTN_SIZES  = [
  { scale: 1.6, label: "big"    },
  { scale: 1.0, label: "normal" },
  { scale: 0.6, label: "small"  },
  { scale: 0.35,label: "tiny"   },
];

function setupSizeChange(round) {
  clearInterval(sizeInterval);
  if (!round.hasSizeChange) {
    el.realBtn.style.scale = "";
    return;
  }
  function randomSize() {
    if (currentState !== STATE.PLAYING) return;
    const s = BTN_SIZES[Math.floor(Math.random() * BTN_SIZES.length)];
    el.realBtn.style.scale = s.scale;
    if (s.label === "big")  showTauntText("Now's your chance... or is it? 👀", false);
    if (s.label === "tiny") showTauntText("Good luck clicking THAT. 😂", false);
  }
  randomSize();
  sizeInterval = setInterval(randomSize, 2000 + Math.random() * 1500);
}

// ── Rotation ──────────────────────────────
let rotationFrame   = null;
let currentRotation = 0;

function setupRotation(round) {
  cancelAnimationFrame(rotationFrame);
  currentRotation = 0;
  el.arena.style.transform = "rotate(0deg)";
  if (!round.hasRotation) return;

  const speed = 0.25;
  function rotate() {
    if (currentState !== STATE.PLAYING) return;
    currentRotation = (currentRotation + speed) % 360;
    el.arena.style.transform = `rotate(${currentRotation}deg)`;
    rotationFrame = requestAnimationFrame(rotate);
  }
  rotate();
}

// ── Slow Cursor ───────────────────────────
let slowCursorActive = false;
let virtualX = 0, virtualY = 0;
let realMouseX = 0, realMouseY = 0;
let slowCursorFrame = null;

function setupSlowCursor(round) {
  slowCursorActive = false;
  cancelAnimationFrame(slowCursorFrame);
  if (!round.hasSlowCursor) return;

  slowCursorActive = true;
  const lerpFactor = 0.06;

  const arenaRect = el.arena.getBoundingClientRect();
  virtualX = arenaRect.left + arenaRect.width  / 2;
  virtualY = arenaRect.top  + arenaRect.height / 2;
  realMouseX = virtualX;
  realMouseY = virtualY;

  function animateCursor() {
    if (currentState !== STATE.PLAYING || !slowCursorActive) return;
    virtualX += (realMouseX - virtualX) * lerpFactor;
    virtualY += (realMouseY - virtualY) * lerpFactor;
    handleDistanceCheck(virtualX, virtualY);
    slowCursorFrame = requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

function handleDistanceCheck(cx, cy) {
  if (currentState !== STATE.PLAYING || isInvisible || fakeOutActive) return;

  const rect  = el.realBtn.getBoundingClientRect();
  const btnCX = rect.left + rect.width  / 2;
  const btnCY = rect.top  + rect.height / 2;

  const distance = Math.hypot(cx - btnCX, cy - btnCY);
  const cfg = ROUND_ESCAPE_CONFIG[currentRound];
  const now = Date.now();
  const effectiveCooldown = speedBurst ? cfg.cooldown * 0.4 : cfg.cooldown;

  if (distance < cfg.grace) {
    el.realBtn.classList.add("danger");
    el.realBtn.classList.remove("near");
  } else if (distance < cfg.threshold) {
    el.realBtn.classList.add("near");
    el.realBtn.classList.remove("danger");
    if (now - lastEscapeTime > effectiveCooldown) {
      lastEscapeTime = now;
      if (Math.random() < ROUND_ESCAPE_CONFIG[currentRound].fakeOutChance) {
        triggerFakeOut(cx, cy);
      } else {
        escapeButton(cx, cy);
      }
    }
  } else if (distance < cfg.threshold + 50) {
    el.realBtn.classList.remove("near", "danger");
    if (now - lastEscapeTime > effectiveCooldown) {
      lastEscapeTime = now;
      escapeButton(cx, cy);
    }
  } else {
    el.realBtn.classList.remove("near", "danger");
  }
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function clearAllIntervals() {
  clearInterval(timerInterval);
  clearInterval(tauntInterval);
  clearInterval(invisInterval);
  clearInterval(introInterval);
  clearInterval(clearInterval_);
  clearInterval(sizeInterval);
  clearTimeout(baitTimeout);
  cancelAnimationFrame(rotationFrame);
  cancelAnimationFrame(slowCursorFrame);
  cancelAnimationFrame(driftFrame);
  slowCursorActive = false;
  isEscaping       = false;
  hideBait();
  baitActive = false;
  el.arena.style.transform    = "rotate(0deg)";
  el.realBtn.style.scale      = "";
  el.hudTimer.classList.remove("pulse");
}

// ── Boot ──────────────────────────────────
init();