// ============ CONFIGURATION ============
const CONFIG = {
    password: 'DziwkiKoksTajskiBoks',
    googleDriveLink: 'https://drive.google.com/drive/folders/1pJ6kK4lmBKyCd_dyvoWSCph5VRht89jV',
    soundcloudLink: 'https://on.soundcloud.com/jpnRsPrcZ8fVYHNGZU'
};

// ============ DOM ELEMENTS ============
const labelBtn = document.getElementById('labelBtn');
const unreleasedBtn = document.getElementById('unreleasedBtn');
const nutyBtn = document.getElementById('nutyBtn');
const collaborationBtn = document.getElementById('collaborationBtn');

const contentDisplay = document.getElementById('contentDisplay');

const passwordModal = document.getElementById('passwordModal');
const closePasswordModal = document.getElementById('closePasswordModal');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPasswordBtn');
const passwordFeedback = document.getElementById('passwordFeedback');

const linkModal = document.getElementById('linkModal');
const closeLinkModal = document.getElementById('closeLinkModal');
const linkModalTitle = document.getElementById('linkModalTitle');
const linkButton = document.getElementById('linkButton');

// ============ CANVAS ANIMATION ============
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = ['#ff0080', '#ff6600', '#00ffff', '#bf00ff'][Math.floor(Math.random() * 4)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.01;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = Array.from({ length: 50 }, () => new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;

    particles.forEach((p, i) => {
        p.update();
        p.draw();

        if (p.opacity <= 0) {
            particles[i] = new Particle();
        }
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// ============ UTILITY FUNCTIONS ============

function clearContent() {
    contentDisplay.innerHTML = '';
}

function displayText(text, color) {
    clearContent();
    const box = document.createElement('div');
    box.className = `display-box ${color}`;
    
    const textElement = document.createElement('p');
    textElement.className = 'display-text';
    textElement.textContent = text;
    
    box.appendChild(textElement);
    contentDisplay.appendChild(box);
}

function openModal(modal) {
    modal.classList.add('show');
}

function closeModal(modal) {
    modal.classList.remove('show');
}

// ============ BUTTON EVENTS ============

/**
 * LABEL Button
 */
labelBtn.addEventListener('click', () => {
    displayText('> LABEL: underground project in progress 🔥', 'red');
});

/**
 * UNRELEASED Button
 */
unreleasedBtn.addEventListener('click', () => {
    passwordFeedback.textContent = '';
    passwordInput.value = '';
    passwordFeedback.classList.remove('success', 'error');
    openModal(passwordModal);
});

/**
 * Submit Password
 */
submitPasswordBtn.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === CONFIG.password) {
        passwordFeedback.textContent = '> ACCESS GRANTED 🔥';
        passwordFeedback.classList.add('success');
        passwordFeedback.classList.remove('error');
        
        setTimeout(() => {
            closeModal(passwordModal);
            linkModalTitle.textContent = 'ACCESS GRANTED 🔥';
            linkButton.href = CONFIG.googleDriveLink;
            linkButton.textContent = '📂 GOOGLE DRIVE';
            openModal(linkModal);
            displayText('> access granted, welcome... 🔥', 'orange');
        }, 800);
    } else {
        passwordFeedback.textContent = '> WRONG PASSWORD 💀';
        passwordFeedback.classList.add('error');
        passwordFeedback.classList.remove('success');
    }
});

/**
 * Password input - Enter key
 */
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitPasswordBtn.click();
    }
});

/**
 * NUTY Button
 */
nutyBtn.addEventListener('click', () => {
    displayText('> opening sound system... 🎧', 'cyan');
    
    setTimeout(() => {
        linkModalTitle.textContent = 'OPENING SOUND SYSTEM...';
        linkButton.href = CONFIG.soundcloudLink;
        linkButton.textContent = '🎧 SOUNDCLOUD';
        openModal(linkModal);
    }, 500);
});

/**
 * WSPÓŁPRACA Button
 */
collaborationBtn.addEventListener('click', () => {
    displayText('> na razie nie ma współpracy, cóż....', 'purple');
});

// ============ MODAL CLOSE BUTTONS ============

closePasswordModal.addEventListener('click', () => {
    closeModal(passwordModal);
});

closeLinkModal.addEventListener('click', () => {
    closeModal(linkModal);
});

/**
 * Close modal on outside click
 */
window.addEventListener('click', (e) => {
    if (e.target === passwordModal) {
        closeModal(passwordModal);
    }
    if (e.target === linkModal) {
        closeModal(linkModal);
    }
});

// ============ INITIALIZATION ============
console.log('🔥 OSZI - Underground Artist Website Loaded');
console.log('✅ All systems operational');
