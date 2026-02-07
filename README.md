# 💖 Will You Be My Valentine? - Interactive Proposal Website

A beautiful, romantic, and interactive Valentine's Day proposal website with playful animations, emotional messages, and a fun "catch me if you can" NO button experience!

## ✨ Features

### 🎭 Interactive Elements
- **Dynamic Question Changes** - Main question evolves with each NO click to become more emotional and persuasive
- **Emotional Messages** - Heartfelt messages appear below the question to tug at heartstrings
- **Progressive YES Button** - Grows bigger and more attractive with every NO click
- **Escaping NO Button** - After 15 attempts, the NO button starts running away from the cursor (desktop hover, mobile click)
- **20-Second Countdown Timer** - After 10 NO clicks, a dramatic countdown pause appears with romantic thinking messages

### 🎨 Visual Experience
- **Animated Gradient Background** - Smooth, flowing gradient with pink, purple, and red tones
- **Floating Hearts** - Romantic hearts float across the screen continuously
- **Card Shake Animation** - Card shakes with each NO click for dramatic effect
- **Glassmorphism Design** - Modern glass-effect card with blur and transparency
- **Background Intensity Pulse** - Screen brightness pulses with each interaction
- **Success Celebration** - Heart burst animation and confetti rain on YES click

### 🎵 Audio Features
- **Background Music** - Three songs play in sequence and loop automatically
- **Mute Button** - Toggle audio on/off with a stylish mute button in the top-right corner
- **Auto-play** - Music starts on first user interaction

### 📱 Fully Responsive
- **Desktop** - Buttons stay in one row, NO button escapes on hover
- **Mobile** - Buttons wrap to two rows, NO button escapes on click
- **Adaptive Layout** - Perfect experience on all screen sizes

### 🍽️ Success Screen
- **Dosa Image** - Shows delicious dosa image on YES click
- **Celebration Message** - "Yay! 💘 I knew you'd say YES!"
- **Special Promise** - "Chalo phir, dosa khilane le chalte hain! 🤤"
- **Visual Effects** - Heart burst and colorful confetti animation

## 🚀 Setup Instructions

### 1. Clone or Download
```bash
git clone <your-repo-url>
cd valentine
```

### 2. Add Your Media Files
Place these files in the project folder:

**Images** (in `images/` folder):
- `dosa.jpeg` - Your favorite dosa image for the success screen

**Audio** (in `images/` folder):
- `s1.mp3` - First song
- `s2.mp3` - Second song
- `s3.mp3` - Third song

### 3. Open in Browser
Simply open `index.html` in your web browser. No server required!

## 🎮 How It Works

1. **Initial State**: Beautiful card with "Will you be my Valentine? 💖" question
2. **Clicking NO**:
   - Button text changes through 15 emotional messages
   - YES button grows progressively bigger
   - Question changes to more persuasive versions
   - Emotional messages appear
   - Card shakes and screen pulses
   - Extra hearts float after 5+ clicks
3. **After 10 NO Clicks**: 20-second countdown timer appears with romantic thinking messages
4. **After 15 NO Clicks**: NO button starts escaping (moves away from cursor/clicks)
5. **Clicking YES**: Success screen with dosa image, celebration message, heart burst, and confetti!

## 🎨 Customization

### Change Messages
Edit the arrays in `script.js`:
```javascript
// NO button text sequence (15 messages)
const noTexts = [...]

// Question variations (10 variations)
const questionVariations = [...]

// Emotional messages (15 messages)
const emotionalMessages = [...]

// Countdown messages
const countdownMessages = [...]
const countdownSubMessages = [...]
```

### Change Colors
Modify the gradient in `style.css`:
```css
body {
    background: linear-gradient(135deg, 
        #667eea 0%, 
        #764ba2 25%, 
        #f093fb 50%, 
        #ff6b9d 75%, 
        #feca57 100%
    );
}
```

### Change Countdown Duration
In `script.js`, modify:
```javascript
let timeLeft = 20 // Change to any number of seconds
```

### Adjust YES Button Growth
In `script.js`, modify the size increments:
```javascript
const sizeIncrements = [30, 40, 50, 35, 45] // Pixels to add each click
```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactivity and logic
- **Google Fonts** - Poppins font family

## 📱 Browser Compatibility

Works perfectly on:
- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Best Experience

1. **Use headphones** for the full romantic audio experience
2. **Share the link** don't tell them what it does!
3. **Watch their reaction** as they try to click NO 😄
4. **Test on mobile first** if they're primarily mobile users
5. **Customize the messages** to match your relationship and inside jokes

## 🎁 Perfect For

- Valentine's Day proposals
- Anniversary surprises
- Asking someone on a date
- Romantic confessions
- Just making someone smile!

## 📸 Screenshots

The website features:
- Beautiful gradient background with floating hearts
- Modern glassmorphism card design
- Progressive YES button growth
- Escaping NO button (try to catch it!)
- Emotional countdown timer
- Success screen with dosa celebration

## ⭐ Show Your Love

If this helped you win someone's heart, give it a star! ⭐

## 📝 License

Free to use for personal romantic purposes! 💕

## 🤝 Contributing

Feel free to fork, customize, and make it your own. Share your creative versions!

---

Made with ❤️ for spreading love and happiness!

**Good luck with your proposal! 💖**
