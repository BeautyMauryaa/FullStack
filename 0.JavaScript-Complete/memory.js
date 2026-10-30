// ═══════════════════════════════════════════
// MEMORY.JS — localStorage read/write only.
// All game state persistence lives here.
// ═══════════════════════════════════════════

const STORAGE_KEY = "catchme_v1";

// ── Default state ─────────────────────────
const DEFAULT_MEMORY = {
  currentStreak:      0,
  lastPlayedDate:     null,
  lastResult:         null,   // "win" | "lose"
  lastRoundReached:   0,
  lastRoundLostAt:    0,
  totalPlays:         0,
  totalWins:          0,
  bestRound:          0,
  streakBroken:       false,
  challengeCompleted: false,
  wonYesterday:       false,
};

// ── Read ──────────────────────────────────
function getMemory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_MEMORY };
    return { ...DEFAULT_MEMORY, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_MEMORY };
  }
}

// ── Write ─────────────────────────────────
function saveMemory(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage unavailable — fail silently
  }
}

// ── Update streak on game start ───────────
function updateStreakOnStart() {
  const mem = getMemory();
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  // Already played today — don't update streak again
  if (mem.lastPlayedDate === today) return mem;

  const wasYesterday = mem.lastPlayedDate === yesterday;
  const brokeStreak  = mem.lastPlayedDate && !wasYesterday && mem.currentStreak > 0;

  mem.streakBroken  = brokeStreak;
  mem.wonYesterday  = mem.lastResult === "win" && wasYesterday;
  mem.lastPlayedDate = today;
  mem.totalPlays    += 1;
  mem.challengeCompleted = false;

  if (brokeStreak) mem.currentStreak = 1;
  // streak increments only on win — handled in saveWin()

  saveMemory(mem);
  return mem;
}

// ── Save win ──────────────────────────────
function saveWin() {
  const mem = getMemory();
  mem.lastResult      = "win";
  mem.lastRoundReached = 5;
  mem.totalWins       += 1;
  mem.bestRound       = 5;
  mem.currentStreak   += 1;
  saveMemory(mem);
  return mem;
}

// ── Save loss ─────────────────────────────
function saveLoss(roundLostAt) {
  const mem = getMemory();
  mem.lastResult       = "lose";
  mem.lastRoundReached = roundLostAt;
  mem.lastRoundLostAt  = roundLostAt;
  if (roundLostAt > mem.bestRound) mem.bestRound = roundLostAt;
  // streak does NOT increase on loss
  saveMemory(mem);
  return mem;
}

// ── Save challenge completion ─────────────
function saveChallengeDone(completed) {
  const mem = getMemory();
  mem.challengeCompleted = completed;
  saveMemory(mem);
}

// ── Get entry greeting ────────────────────
function getEntryGreeting(mem) {
  const n = mem.currentStreak;

  if (mem.totalPlays === 0)       return ENTRY_GREETINGS.firstTime;
  if (mem.streakBroken)           return ENTRY_GREETINGS.brokeStreak;
  if (n >= 30)                    return ENTRY_GREETINGS.streakDay30.replace("{n}", n);
  if (n >= 7)                     return ENTRY_GREETINGS.streakDay7.replace("{n}", n);
  if (n >= 3)                     return ENTRY_GREETINGS.streakDay3.replace("{n}", n);
  if (mem.wonYesterday)           return ENTRY_GREETINGS.wonYesterday;
  return ENTRY_GREETINGS.returning;
}

// ── Get game over message ─────────────────
function getGameOverMessage(roundLostAt, mem) {
  const sameRoundAgain = mem.lastRoundLostAt === roundLostAt && mem.totalPlays > 1;

  if (mem.streakBroken && mem.currentStreak > 3) return GAMEOVER_MSGS.afterStreak;
  if (sameRoundAgain) return GAMEOVER_MSGS.repeat[roundLostAt] || GAMEOVER_MSGS.default[roundLostAt];
  return GAMEOVER_MSGS.default[roundLostAt] || "You'll get it next time.";
}

// ── Get win message ───────────────────────
function getWinMessage(mem) {
  if (mem.totalWins === 0)          return WIN_MSGS.firstWin;
  if (mem.currentStreak >= 3)       return WIN_MSGS.streak3;
  if (mem.lastResult === "lose")    return WIN_MSGS.afterLosing;
  return WIN_MSGS.default;
}

// ── Get streak display ────────────────────
function getStreakDisplay(mem) {
  const n = mem.currentStreak;
  if (n === 0)  return { text: "Day 1", fire: "" };
  if (n < 3)    return { text: `Day ${n}`, fire: "" };
  if (n < 7)    return { text: `Day ${n}`, fire: "🔥" };
  if (n < 30)   return { text: `Day ${n}`, fire: "🔥🔥" };
  return         { text: `Day ${n}`, fire: "🔥🔥🔥" };
}