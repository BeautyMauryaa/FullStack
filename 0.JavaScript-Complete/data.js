// ═══════════════════════════════════════════
// DATA.JS — All content. No logic here.
// ═══════════════════════════════════════════

// ── Round config ──────────────────────────
const ROUNDS = [
  {
    number: 1,
    mechanic: "Basic escape. I move when you get close.",
    speed: 1, timer: 30, arenaScale: 1,
    hasFakes: false, hasInvisible: false, tonePlayful: 0.7,
    hasSizeChange: false, hasRotation: false, hasSlowCursor: false,
    baitInterval: 5000, baitWindow: 2500,
    puzzle: {
      riddle: "I run from where you came,\nnot where you're going.",
      hint: "Move your cursor to where the button will be — not where it is.",
    },
  },
  {
    number: 2,
    mechanic: "I change size. Big is easy. Small... isn't.",
    speed: 1.5, timer: 30, arenaScale: 1,
    hasFakes: false, hasInvisible: false, tonePlayful: 0.5,
    hasSizeChange: true,
    hasRotation: false, hasSlowCursor: false,
    baitInterval: 7000, baitWindow: 2000,
    puzzle: {
      riddle: "Size is deception.\nSmall doesn't mean gone.",
      hint: "Wait for me to grow — that's your window. Click fast.",
    },
  },
  {
    number: 3,
    mechanic: "Two fakes. One real. And the arena spins.",
    speed: 1.8, timer: 30, arenaScale: 1,
    hasFakes: true, fakeCount: 2,
    hasInvisible: false, tonePlayful: 0.4,
    hasSizeChange: false, hasRotation: true,
    hasSlowCursor: false,
    baitInterval: 9000, baitWindow: 1500,
    puzzle: {
      riddle: "One of us is lying.\nBut liars always look a little... thin.",
      hint: "Fake buttons have a thinner border. The arena spinning is just to mess with your head.",
    },
  },
  {
    number: 4,
    mechanic: "Your cursor moves like it's underwater. And I don't stop moving.",
    speed: 2.2, timer: 30, arenaScale: 0.85,
    hasFakes: false, hasInvisible: true,
    invisibleInterval: 3000, invisibleDuration: 1500,
    tonePlayful: 0.2,
    hasSizeChange: false, hasRotation: false,
    hasSlowCursor: true, hasDrift: true,
    baitInterval: 11000, baitWindow: 1000,
    puzzle: {
      riddle: "Disappearing doesn't mean gone.\nGone doesn't mean moved.",
      hint: "Invisible = still there. Your cursor is slow — plan ahead. I'm always moving now.",
    },
  },
  {
    number: 5,
    mechanic: "Everything. All at once. 10 seconds.",
    speed: 2.6, timer: 30, arenaScale: 0.65,
    hasFakes: true, fakeCount: 2,
    hasInvisible: true, invisibleDelay: 3000,
    invisibleInterval: 2500, invisibleDuration: 1200,
    tonePlayful: 0.1,
    hasSizeChange: true, hasRotation: true,
    hasSlowCursor: true, hasDrift: true,
    baitInterval: 14000, baitWindow: 800,
    puzzle: {
      riddle: "You already know\nall my secrets.",
      hint: "Thick border = real. Invisible = still there. Slow cursor = predict early. I never stop moving.",
    },
  },
];

// ── Taunts ────────────────────────────────
const TAUNTS = {
  early: [
    "Bro is chasing a button 💀",
    "My dead grandma clicks faster. RIP her.",
    "Are you even trying or just vibing? 😴",
    "You move like you're on dial-up. 🐢",
    "I'm not even scared of you yet. 😂",
    "This is genuinely embarrassing to watch. 🫣",
    "Is this your first time using a mouse? 🖱️",
    "I've been clicked by toddlers. You're worse. 👶",
    "YAWN. Wake me up when you're serious. 🥱",
    "You got slower. That's impressive. Negatively. 📉",
  ],
  mid: [
    "Tick. Tock. That's your life draining. ⏳",
    "Getting sweaty yet? You should be. 😰",
    "Oh no. Are you... actually trying? 😨",
    "The clock doesn't negotiate. Neither do I. 🕐",
    "Half your time's gone. Zero progress. Classic. 💔",
    "Panic mode incoming in 3... 2... 😬",
    "I can feel your heartbeat from here. 💓",
    "This is the part where most people rage quit. 🤬",
    "Still here? Respect. Wrong move, but respect. 🫡",
    "Your cursor is shaking. Adorable. 👋",
  ],
  late: [
    "WAIT— are you actually getting close?! 😱",
    "No. NO. BACK OFF. I MEAN IT. 🚨",
    "Don't you DARE. I will teleport. ⚡",
    "Okay I'm genuinely scared. Don't tell anyone. 🫢",
    "LAST SECONDS. This is where legends choke. 😤",
    "One click away from glory. Or humiliation. 🎲",
    "I respect the effort. Still not letting you win. 😈",
    "SO CLOSE YET SO FAR AWAY 💀💀",
    "MY ANXIETY IS THROUGH THE ROOF RN 😭",
    "I will NOT be caught today. Not today. 🏃",
  ],
  nearMiss: [
    "TOO CLOSE. ABORT. ABORT. 🚁",
    "I FELT THAT IN MY SOUL. 😤",
    "DO NOT. I REPEAT. DO NOT. 🚫",
    "You almost had me. ALMOST. 😅",
    "That was rude. That was VERY rude. 😠",
    "My heart just dropped. I have a heart now. 💔",
    "Nope. Nope nope nope nope NOPE. 🙅",
    "HOW?! HOW ARE YOU THAT CLOSE?! 😳",
  ],
  danger: [
    "...don't.",
    "I said STOP. 🛑",
    "...",
    "please. 🥺",
    "okay you're actually good. GET AWAY. 😤",
  ],
};

// ── Round clear messages ───────────────────
const ROUND_CLEAR = [
  { emoji: "😤", title: "Round 1 — Done.", sub: "Beginner's luck. Enjoy it while it lasts." },
  { emoji: "😳", title: "Round 2 — Cleared.", sub: "Okay. You can move a mouse. Gold star. 🌟" },
  { emoji: "🤯", title: "Round 3 — Seriously?!", sub: "You got the right one. Luck or skill — I'm scared either way." },
  { emoji: "😡", title: "Round 4 — FINE.", sub: "You caught an invisible button. That's just disrespectful." },
];

// ── Game over messages (memory-based) ─────
const GAMEOVER_MSGS = {
  default: {
    1: "Round 1 ended you. Let that marinate. 💀",
    2: "Speed got you. Don't feel bad. Feel bad. 😂",
    3: "Fell for the fakes. Absolutely predictable. 🎭",
    4: "Invisible + fast. You never stood a chance. 👻",
    5: "Round 5. ONE MORE SECOND and you had it. Painful. 😭",
  },
  repeat: {
    1: "Round 1. Again. We'll be here all year. 🪑",
    2: "Still Round 2. It owns your soul now. 👻",
    3: "Round 3 is your villain origin story. 🦹",
    4: "Round 4 again. The invisible button lives in your head rent-free. 🏠",
    5: "Round 5 again. It's personal now. For both of us. 🔥",
  },
  afterStreak: "That streak is ash now. How's that feel. 💨",
};

// ── Entry screen greetings (memory-based) ─
const ENTRY_GREETINGS = {
  firstTime:    "Let's see what you've actually got. 👀",
  returning:    "You came back. Glutton for punishment. 😏",
  streakDay3:   "Day {n} 🔥 Don't you dare break this now.",
  streakDay7:   "Day {n} 🔥🔥 One week. You're built different.",
  streakDay30:  "Day {n}. Seek help. Lovingly. You're not normal. 🏆",
  brokeStreak:  "You broke your streak. That's genuinely sad. 😔",
  wonYesterday: "Won yesterday. Now prove it wasn't a fluke. 🎯",
};

// ── Win screen messages (memory-based) ────
const WIN_MSGS = {
  firstWin:    "Okay. You're actually good. I hate that. 😤",
  streak3:     "3 days straight. Consistent. Dangerous. 🔥",
  afterLosing: "You lost and came back anyway. Respect. Earned. 💪",
  default:     "5 rounds. All cleared. Most people never make it here. 👑",
};

// ── Lucky Cheats (day-based) ──────────────
const LUCKY_CHEATS = {
  0: {
    day: "Sunday",
    cheat: "Rest isn't laziness — it's loading the next version of you. Recharge hard today. The grind respects the ones who know when to pause.",
    challenge: "Do one thing today with zero productivity goal. No output. Just exist. 🌿",
  },
  1: {
    day: "Monday",
    cheat: "The week is a blank slate right now. What you do in the next 2 hours sets the tone for all 5 days. Don't negotiate. Just start.",
    challenge: "No social media before 12pm. Phone flipped face down. Not negotiable. 📵",
  },
  2: {
    day: "Tuesday",
    cheat: "Tuesday is statistically the most productive day of the week — and almost nobody uses it right. You're not most people.",
    challenge: "Write exactly 3 things you WILL finish today. Not want. WILL. Go. ✍️",
  },
  3: {
    day: "Wednesday",
    cheat: "You're at the summit of the week. It's all downhill from here — in the best way. Don't coast now. Push over the top.",
    challenge: "Do your hardest task before you eat lunch today. No exceptions. 🥊",
  },
  4: {
    day: "Thursday",
    cheat: "Thursday is for closing loops. Every unfinished thing is a tiny brain drain. Pick one thing you've been avoiding and finish it.",
    challenge: "Finish one thing you've been ghosting all week. You know exactly what it is. 👻",
  },
  5: {
    day: "Friday",
    cheat: "How you finish the week is how you start the next one. Don't coast into the weekend with loose ends. End like you mean it.",
    challenge: "Write 3 wins from this week before midnight. They don't have to be big. 🏆",
  },
  6: {
    day: "Saturday",
    cheat: "Elite performers rest as hard as they work. Today is not wasted — it's an investment in next week's version of you.",
    challenge: "30 minutes of something creative with zero expectations. Draw. Write. Build. Anything. 🎨",
  },
};

// ── Completion responses ───────────────────
const COMPLETION = {
  yes: [
    "THAT'S what I'm talking about. 🔥 Lock in.",
    "Said you'd do it. Did it. That's the whole formula. 💯",
    "Consistency compounds. You just invested in yourself. 📈",
    "One day at a time. Today's done right. 👊",
    "No excuses. Just results. Respect. 🫡",
  ],
  no: [
    "The day isn't over. Go. Now. Seriously. 🏃",
    "It's not midnight yet. You still have time. Use it. ⏰",
    "The challenge doesn't care about your mood. Neither do I. Do it anyway. 😤",
    "Future you is watching. Don't let them down. 👀",
    "Not yet ≠ never. Close the gap. Tonight. 🌙",
  ],
};