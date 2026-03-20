/**
 * ROMANTIC BIRTHDAY WEBSITE - JAVASCRIPT
 * 
 * 🎂 CUSTOMIZATION GUIDE:
 * 
 * 1. QUIZ: Edit the quizQuestions array below
 * 2. LETTERS: Edit the letters array below
 * 3. EASTER EGG MESSAGES: Edit the easterEggMessages array below
 * 4. AUDIO FILES: Add paths to background music and voice message
 */

// ========== CONFIGURATION ==========

// CUSTOMIZE YOUR QUIZ QUESTIONS HERE
const quizQuestions = [
    {
        question: "What was the first thing I noticed about you? 😍",
        options: ["Your smile", "Your eyes", "Your laugh", "Your kindness"],
        correctAnswer: 1 // Index of correct answer (0-3)
    },
    {
        question: "What is our favorite song? 🎵",
        options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "Love Story"],
        correctAnswer: 0
    },
    {
        question: "Where did we have our first date? 💑",
        options: ["Coffee shop", "Restaurant", "Beach", "Park"],
        correctAnswer: 2
    },
    {
        question: "What do I love most about us? ❤️",
        options: ["Our conversations", "Our adventures", "Our laughs", "Everything"],
        correctAnswer: 3
    },
    {
        question: "What is my favorite thing to do with you? 💕",
        options: ["Watch movies", "Go on walks", "Cook together", "Just being together"],
        correctAnswer: 3
    }
];

// CUSTOMIZE YOUR LETTER MESSAGES HERE
const letters = [
    {
        title: "Open when you are sad 😢",
        message: "My love, whenever sadness touches your heart, remember that you are the sunshine of my life. Your smile is the most beautiful thing I have ever seen. I am always here for you, through every storm and every tear. You are never alone because you have all my love surrounding you. Let me be your comfort, your strength, and your reason to smile again. I love you more than words can express. 💖",
        color: "letter-blue"
    },
    {
        title: "Open when you miss me 💕",
        message: "Distance means nothing when someone means everything. Every moment without you feels incomplete, but knowing you are thinking of me makes my heart smile. Close your eyes and feel my love wrapping around you like a warm embrace. We may be apart right now, but our hearts beat as one. Until we are together again, carry my love with you always. You are my forever and always. 💝",
        color: "letter-pink"
    },
    {
        title: "Open when you can't sleep 🌙",
        message: "My dearest love, as the stars shine bright tonight, know that you are my brightest star. Let go of all your worries and anxieties. Imagine us together, under the moonlight, holding each other close. Feel my love like a gentle lullaby, soothing your mind and heart. Sweet dreams, my angel. May you drift into peaceful sleep knowing you are deeply loved and cherished. Good night, my love. 🌟",
        color: "letter-purple"
    }
];

// CUSTOMIZE YOUR EASTER EGG MESSAGES HERE
const easterEggMessages = [
    "You make my heart skip a beat! 💓",
    "You are my sunshine! ☀️",
    "I love you to the moon and back! 🌙",
    "You complete me! ✨",
    "Forever yours! 💍",
    "You are my everything! 🌟",
    "My heart belongs to you! ❤️",
    "Together forever! 💕"
];

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', function() {
    initFloatingHearts();
    initEasterEggs();
    initQuiz();
    initGame();
    checkBackgroundMusic();
});

// ========== FLOATING HEARTS BACKGROUND ==========

function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    const heartsCount = 15;

    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(heart);
    }
}

// ========== EASTER EGGS ==========

function initEasterEggs() {
    const container = document.getElementById('easter-eggs');
    const easterEggsCount = 5;

    for (let i = 0; i < easterEggsCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'easter-egg-heart';
        heart.textContent = '💖';
        heart.style.left = (Math.random() * 80 + 10) + '%';
        heart.style.top = (Math.random() * 80 + 10) + '%';
        heart.onclick = function() {
            showEasterEggMessage(this);
        };
        container.appendChild(heart);
    }
}

function showEasterEggMessage(heartElement) {
    const message = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];
    
    // Remove the heart
    heartElement.remove();
    
    // Show message popup
    const popup = document.createElement('div');
    popup.className = 'easter-egg-popup';
    popup.textContent = message;
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ec4899, #ef4444);
        color: white;
        padding: 2rem 3rem;
        border-radius: 50px;
        font-size: 1.5rem;
        font-weight: bold;
        box-shadow: 0 8px 32px rgba(236, 72, 153, 0.8);
        z-index: 1000;
        animation: popIn 0.5s;
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 2000);
}

// ========== BACKGROUND MUSIC ==========

function checkBackgroundMusic() {
    const musicBtn = document.getElementById('music-toggle');
    const audio = document.getElementById('background-music');
    
    // Check if audio source exists
    if (audio.querySelector('source')) {
        musicBtn.classList.remove('hidden');
    }
}

function toggleMusic() {
    const audio = document.getElementById('background-music');
    const icon = document.getElementById('music-icon');
    
    if (audio.paused) {
        audio.play();
        icon.textContent = '🔊';
    } else {
        audio.pause();
        icon.textContent = '🔇';
    }
}

// Make function globally accessible
window.toggleMusic = toggleMusic;

// ========== OPEN WHEN LETTERS ==========

function openLetter(index) {
    const modal = document.getElementById('letter-modal');
    const title = document.getElementById('letter-title');
    const message = document.getElementById('letter-message');
    
    title.textContent = letters[index].title;
    message.textContent = letters[index].message;
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// Make functions globally accessible
window.openLetter = openLetter;
window.closeModal = closeModal;

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ========== SECRET VIDEO REVEAL ==========

function unlockVideo() {
    const video = document.getElementById('secret-video');
    const btn = document.getElementById('unlock-btn');
    const message = document.getElementById('unlock-message');
    
    video.classList.remove('blurred');
    btn.style.display = 'none';
    message.classList.remove('hidden');
}

window.unlockVideo = unlockVideo;

// ========== LOVE QUIZ ==========

let currentQuestionIndex = 0;

function initQuiz() {
    document.getElementById('quiz-total').textContent = quizQuestions.length;
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-current').textContent = currentQuestionIndex + 1;
    document.getElementById('quiz-question').textContent = question.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-next').classList.add('hidden');
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const resultDiv = document.getElementById('quiz-result');
    const container = document.getElementById('quiz-container');
    
    // Disable all options
    options.forEach(opt => opt.disabled = true);
    
    // Mark selected answer
    options[selectedIndex].classList.add(selectedIndex === question.correctAnswer ? 'correct' : 'wrong');
    
    if (selectedIndex === question.correctAnswer) {
        // Correct answer
        resultDiv.className = 'quiz-result correct';
        resultDiv.innerHTML = `
            <div class="quiz-result-title">Correct ❤️</div>
            <div class="quiz-result-text">You know our love so well 😘</div>
        `;
        launchConfetti();
    } else {
        // Wrong answer
        resultDiv.className = 'quiz-result wrong';
        resultDiv.innerHTML = `
            <div class="quiz-result-title">😢😭 Aww wrong answer 💔</div>
            <div class="quiz-result-text">But I still love you forever ❤️</div>
        `;
        
        // Shake animation
        container.classList.add('shake');
        setTimeout(() => container.classList.remove('shake'), 500);
        
        // Red flash
        document.body.classList.add('red-flash');
        setTimeout(() => document.body.classList.remove('red-flash'), 200);
    }
    
    resultDiv.classList.remove('hidden');
    document.getElementById('quiz-next').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

window.nextQuestion = nextQuestion;

// ========== CONFETTI ==========

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FF0000'];
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            radius: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            velocityY: -(Math.random() * 10 + 5),
            velocityX: (Math.random() - 0.5) * 4,
            gravity: 0.3
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeParticles = 0;
        
        particles.forEach(particle => {
            if (particle.y < canvas.height) {
                activeParticles++;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
                
                particle.velocityY += particle.gravity;
                particle.y += particle.velocityY;
                particle.x += particle.velocityX;
            }
        });
        
        if (activeParticles > 0) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// ========== FIND THE HEART GAME ==========

function initGame() {
    generateGame();
}

function generateGame() {
    const gameGrid = document.getElementById('game-grid');
    const emojis = ['🌟', '⭐', '✨', '💫', '🌙', '☀️', '🌈', '🎈', '🎁'];
    const shuffled = emojis.sort(() => Math.random() - 0.5).slice(0, 8);
    const correctIndex = Math.floor(Math.random() * 9);
    shuffled.splice(correctIndex, 0, '💖');
    
    gameGrid.innerHTML = '';
    
    shuffled.forEach((emoji, index) => {
        const button = document.createElement('button');
        button.className = 'game-emoji';
        button.textContent = emoji;
        button.onclick = () => handleGameClick(index === correctIndex);
        gameGrid.appendChild(button);
    });
    
    document.getElementById('game-message').textContent = '';
}

function handleGameClick(isCorrect) {
    const message = document.getElementById('game-message');
    
    if (isCorrect) {
        message.textContent = 'You found my heart ❤️';
        message.className = 'game-message success';
        setTimeout(() => {
            generateGame();
        }, 2000);
    } else {
        message.textContent = 'Try again 😜';
        message.className = 'game-message try-again';
        setTimeout(() => {
            message.textContent = '';
        }, 1000);
    }
}

// ========== VOICE MESSAGE ==========

function toggleVoice() {
    const audio = document.getElementById('voice-audio');
    const icon = document.getElementById('voice-icon');
    const text = document.getElementById('voice-text');
    const btn = document.getElementById('voice-btn');
    
    // Check if audio source exists
    if (!audio.querySelector('source')) {
        return;
    }
    
    if (audio.paused) {
        audio.play();
        icon.textContent = '⏸️';
        text.textContent = 'Pause';
    } else {
        audio.pause();
        icon.textContent = '▶️';
        text.textContent = 'Listen to me ❤️';
    }
    
    audio.onended = function() {
        icon.textContent = '▶️';
        text.textContent = 'Listen to me ❤️';
    };
}

window.toggleVoice = toggleVoice;

// ========== SURPRISE BUTTON ==========

function showSurprise() {
    const modal = document.getElementById('surprise-modal');
    modal.classList.add('active');
}

window.showSurprise = showSurprise;

// ========== FAKE PROPOSAL ==========

let noButtonMoves = 0;

function handleProposalYes() {
    const message = document.getElementById('proposal-message');
    message.textContent = 'I knew you would say yes! ❤️💍';
    message.className = 'proposal-message success';
}

function handleProposalAlways() {
    const message = document.getElementById('proposal-message');
    message.textContent = 'Forever and always, my love! 💖💫';
    message.className = 'proposal-message success';
}

function moveNoButton() {
    const btn = document.getElementById('btn-no');
    const container = document.querySelector('.proposal-buttons');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate random position
    const maxX = 200;
    const maxY = 200;
    const randomX = (Math.random() - 0.5) * maxX;
    const randomY = (Math.random() - 0.5) * maxY;
    
    btn.style.position = 'absolute';
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    noButtonMoves++;
}

function handleProposalNo() {
    const message = document.getElementById('proposal-message');
    const container = document.getElementById('proposal-container');
    
    message.textContent = 'Wrong answer 😜';
    message.className = 'proposal-message wrong';
    
    container.classList.add('shake');
    setTimeout(() => {
        container.classList.remove('shake');
        message.textContent = '';
    }, 1000);
}

window.handleProposalYes = handleProposalYes;
window.handleProposalAlways = handleProposalAlways;
window.moveNoButton = moveNoButton;
window.handleProposalNo = handleProposalNo;

// ========== SMOOTH SCROLL OBSERVER ==========

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(section);
});
