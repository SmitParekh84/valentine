// Get elements
const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")
const mainCard = document.getElementById("mainCard")
const successScreen = document.getElementById("successScreen")
const heartsContainer = document.querySelector(".hearts-container")
const questionText = document.getElementById("questionText")
const emotionalMessage = document.getElementById("emotionalMessage")

// Audio elements
const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const muteBtn = document.getElementById("muteBtn")
const soundIcon = document.getElementById("soundIcon")

let isMuted = false

// Mute button handler
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted
  
  audio1.muted = isMuted
  audio2.muted = isMuted
  audio3.muted = isMuted
  
  soundIcon.textContent = isMuted ? "🔇" : "🔊"
  muteBtn.classList.toggle("muted", isMuted)
})

// Play audio sequence
function playAudioSequence() {
  audio1.play().catch((e) => console.log("Audio play failed:", e))

  audio1.addEventListener("ended", () => {
    audio2.play().catch((e) => console.log("Audio play failed:", e))
  })

  audio2.addEventListener("ended", () => {
    audio3.play().catch((e) => console.log("Audio play failed:", e))
  })

  audio3.addEventListener("ended", () => {
    // Loop back to first audio
    audio1.play().catch((e) => console.log("Audio play failed:", e))
  })
}

// Start audio on first user interaction
let audioStarted = false
document.body.addEventListener(
  "click",
  () => {
    if (!audioStarted) {
      playAudioSequence()
      audioStarted = true
    }
  },
  { once: true },
)

// NO button text sequence
const noTexts = [
  "NO 🙄",
  "Are you sure?",
  "Yaar, ek baar soch le 😕",
  "Sach me no bol rahi hai?",
  "Yaar aisa mat kar 🥺",
  "Main akela kya karunga phir?",
  "Ek chance de de na 💔",
  "Yaar teko dosa khilane le jaunga 😋",
  "Itna bhi bhaav mat kha 😅",
  "Ek baar soch le, phir mauka nahi milega!",
  "Please yaar, last chance 😭",
  "Aisa dil mat todo 💔",
  "Thoda soft ho ja 🥹",
  "Ok ok… ek last chance 🙏",
  "Chal dobara sochte hain… 😌",
]

// Question variations
const questionVariations = [
  "Will you be my Valentine? 💖",
  "Please say yes? 🥺",
  "Won't you give me a chance? 💝",
  "Can we be together? 💕",
  "Will you make me happy? 😊",
  "Pretty please? 🙏💖",
  "You're breaking my heart... 💔",
  "Just one chance? 🥹",
  "I promise to make you happy! 😍",
  "Don't leave me hanging... 😢"
]

// Emotional messages
const emotionalMessages = [
  "",
  "Every NO makes me sadder... 😢",
  "I've been thinking about this for so long... 💭",
  "You mean the world to me... 🌍💕",
  "I promise to always make you smile... 😊",
  "Life is better with you... ✨",
  "Just imagine all the fun we'll have... 🎉",
  "Dosa dates, movies, late night talks... 🌙",
  "I'll be the best Valentine ever! 🏆",
  "My heart belongs to you... ❤️",
  "Please don't break my heart... 💔",
  "You're my favorite person... 🥰",
  "I can't imagine this without you... 😭",
  "You're worth every second... ⏰💖",
  "This is my last hope... 🙏"
]

let noClickCount = 0
let isEscaping = false
let yesButtonSize = 150 // Initial size in pixels
let isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth <= 768
let isCountdownActive = false
let countdownTriggered = false

// Countdown elements
const countdownContainer = document.getElementById("countdownContainer")
const countdownTimer = document.getElementById("countdownTimer")
const countdownText = document.getElementById("countdownText")
const countdownMessage = document.getElementById("countdownMessage")

// Romantic countdown messages
const countdownMessages = [
  "Let me think... 💭",
  "Hmm, maybe I should reconsider? 🤔",
  "What if I say yes? 😊",
  "Actually, you seem really sweet... 🥰",
  "Okay okay, let me think about this... 💕"
]

const countdownSubMessages = [
  "Should I really say yes? 🤔",
  "You've been so persistent... 💝",
  "Maybe you deserve a chance... 💭",
  "Dosa does sound tempting... 😋",
  "What if this is meant to be? ✨"
]

// Start countdown
function startCountdown() {
  if (countdownTriggered) return
  countdownTriggered = true
  isCountdownActive = true
  
  // Hide buttons and question
  document.querySelector(".buttons-container").style.display = "none"
  questionText.style.display = "none"
  emotionalMessage.style.display = "none"
  countdownContainer.style.display = "block"
  
  let timeLeft = 20
  const randomMsg = Math.floor(Math.random() * countdownMessages.length)
  const randomSubMsg = Math.floor(Math.random() * countdownSubMessages.length)
  
  countdownText.textContent = countdownMessages[randomMsg]
  countdownMessage.textContent = countdownSubMessages[randomSubMsg]
  countdownTimer.textContent = timeLeft
  
  const interval = setInterval(() => {
    timeLeft--
    countdownTimer.textContent = timeLeft
    
    // Change messages midway
    if (timeLeft === 10) {
      countdownText.textContent = "Still thinking... 🤨"
      countdownMessage.textContent = "You really want this, don't you? 💖"
    }
    
    if (timeLeft <= 0) {
      clearInterval(interval)
      endCountdown()
    }
  }, 1000)
}

function endCountdown() {
  isCountdownActive = false
  
  // Show everything back
  countdownContainer.style.display = "none"
  questionText.style.display = "block"
  emotionalMessage.style.display = "block"
  document.querySelector(".buttons-container").style.display = "flex"
  
  // Continue from where we left (don't reset)
  questionText.textContent = "Okay, where were we? 😏"
  emotionalMessage.textContent = "Ready to continue? 💕"
  emotionalMessage.classList.add("show")
}

// Create floating hearts background
function createFloatingHearts() {
  const heartEmojis = ["💕", "💖", "💗", "💓", "💝", "💘", "❤️", "🩷"]

  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("div")
      heart.className = "floating-heart"
      heart.textContent =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
      heart.style.left = Math.random() * 100 + "%"
      heart.style.animationDelay = Math.random() * 5 + "s"
      heart.style.animationDuration = Math.random() * 5 + 8 + "s"
      heartsContainer.appendChild(heart)
    }, i * 200)
  }
}

// Initialize floating hearts
createFloatingHearts()

// YES button click handler
yesBtn.addEventListener("click", () => {
  // Show success screen
  successScreen.classList.add("active")

  // Create heart burst
  createHeartBurst()

  // Create confetti
  createConfetti()
})

// NO button click handler
noBtn.addEventListener("click", (e) => {
  e.preventDefault()
  
  // Don't allow clicks during countdown
  if (isCountdownActive) return

  if (noClickCount < noTexts.length - 1) {
    noClickCount++
    noBtn.textContent = noTexts[noClickCount]
    
    // Trigger countdown after 10 clicks
    if (noClickCount === 10 && !countdownTriggered) {
      setTimeout(() => startCountdown(), 500)
      return
    }
    
    // Change question text based on click count
    if (questionVariations[noClickCount]) {
      questionText.textContent = questionVariations[noClickCount]
    }
    
    // Show emotional message
    if (emotionalMessages[noClickCount]) {
      emotionalMessage.textContent = emotionalMessages[noClickCount]
      emotionalMessage.classList.add("show")
    }
    
    // Add shake effect to card
    mainCard.classList.add("shake")
    setTimeout(() => mainCard.classList.remove("shake"), 500)
    
    // Add background intensity pulse
    document.body.classList.add("intense")
    setTimeout(() => document.body.classList.remove("intense"), 500)
    
    // Add extra hearts on higher clicks
    if (noClickCount >= 5) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => createSingleHeart(), i * 200)
      }
    }

    // Grow YES button using random increments
    const sizeIncrements = [30, 40, 50, 35, 45]
    const randomIncrement =
      sizeIncrements[Math.floor(Math.random() * sizeIncrements.length)]
    yesButtonSize += randomIncrement

    // Apply the new size
    yesBtn.style.width = `${yesButtonSize}px`
    yesBtn.style.height = `${yesButtonSize}px`
    yesBtn.style.fontSize = `${Math.min(1.2 + noClickCount * 0.1, 2.5)}rem`

    // Make YES button more colorful and glowing
    const glowIntensity = 30 + noClickCount * 10
    yesBtn.style.boxShadow = `
            0 6px 20px rgba(0, 0, 0, 0.3),
            0 0 ${glowIntensity}px rgba(245, 87, 108, 1),
            0 0 ${glowIntensity * 1.5}px rgba(240, 147, 251, 0.8)
        `

    // If reached the last text, start escaping
    if (noClickCount >= noTexts.length - 1) {
      isEscaping = true
      noBtn.classList.add("escaping")
      // On mobile, move immediately when entering escape mode
      if (isMobile) {
        escapeButton()
      }
    }
  } else if (isEscaping && isMobile) {
    // On mobile, keep moving the button on each click
    escapeButton()
  }
})

// NO button hover handler for escaping (desktop only)
noBtn.addEventListener("mouseenter", () => {
  if (isEscaping && !isMobile) {
    escapeButton()
  }
})

// Create single heart animation
function createSingleHeart() {
  const heart = document.createElement("div")
  heart.className = "floating-heart"
  const heartEmojis = ["💕", "💖", "💗", "💓", "💝", "💘", "❤️", "🩷"]
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s"
  heartsContainer.appendChild(heart)
  
  setTimeout(() => heart.remove(), 10000)
}

// Escape button function
function escapeButton() {
  const btn = noBtn.getBoundingClientRect()

  // Calculate safe boundaries (within viewport but away from current position)
  const padding = 20
  const minDistance = isMobile ? 100 : 150 // Shorter distance on mobile for easier gameplay
  const maxX = window.innerWidth - btn.width - padding
  const maxY = window.innerHeight - btn.height - padding

  // Generate random position away from current position
  let newX, newY
  let attempts = 0
  do {
    newX = Math.max(padding, Math.random() * maxX)
    newY = Math.max(padding, Math.random() * maxY)
    attempts++
    // Prevent infinite loop
    if (attempts > 20) {
      break
    }
  } while (
    Math.abs(newX - btn.left) < minDistance ||
    Math.abs(newY - btn.top) < minDistance
  )

  noBtn.style.left = newX + "px"
  noBtn.style.top = newY + "px"

  // Add a little shake animation
  noBtn.style.animation = "shake 0.3s"
  setTimeout(() => {
    noBtn.style.animation = ""
  }, 300)
}

// Shake animation
const style = document.createElement("style")
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`
document.head.appendChild(style)

// Create heart burst animation
function createHeartBurst() {
  const heartBurst = document.querySelector(".heart-burst")
  const heartEmojis = ["💕", "💖", "💗", "💓", "💝", "💘", "❤️", "🩷"]

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div")
      heart.className = "burst-heart"
      heart.textContent =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)]

      // Start from center
      heart.style.left = "50%"
      heart.style.top = "50%"

      // Random direction
      const angle = (Math.PI * 2 * i) / 30
      const distance = 100 + Math.random() * 200
      const tx = Math.cos(angle) * distance
      const ty = Math.sin(angle) * distance

      heart.style.setProperty("--tx", tx + "px")
      heart.style.setProperty("--ty", ty + "px")

      heartBurst.appendChild(heart)

      // Remove after animation
      setTimeout(() => {
        heart.remove()
      }, 2000)
    }, i * 30)
  }
}

// Create confetti
function createConfetti() {
  const colors = [
    "#f093fb",
    "#f5576c",
    "#4facfe",
    "#00f2fe",
    "#feca57",
    "#ff6b6b",
  ]

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.style.left = Math.random() * 100 + "%"
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)]
      confetti.style.animationDelay = Math.random() * 0.5 + "s"
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s"
      document.body.appendChild(confetti)

      // Remove after animation
      setTimeout(() => {
        confetti.remove()
      }, 4000)
    }, i * 20)
  }
}

// Add dynamic heart burst animation to CSS
const burstStyle = document.createElement("style")
burstStyle.textContent = `
    .burst-heart {
        animation: burstOutDynamic 2s ease-out forwards;
    }
    
    @keyframes burstOutDynamic {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(-50% + var(--tx, 0px)), calc(-50% + var(--ty, 0px))) scale(2) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(burstStyle)

// Update mobile detection on window resize
window.addEventListener("resize", () => {
  isMobile =
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
})
