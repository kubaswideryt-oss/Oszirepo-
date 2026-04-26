// DOM Elements
const labelBtn = document.getElementById('labelBtn');
const unreleasedBtn = document.getElementById('unreleasedBtn');
const nutyBtn = document.getElementById('nutyBtn');
const collaborationBtn = document.getElementById('collaborationBtn');

const outputBox = document.getElementById('outputBox');
const outputContent = document.getElementById('outputContent');

const unreleasedModal = document.getElementById('unreleasedModal');
const closeModal = document.getElementById('closeModal');
const passwordInput = document.getElementById('passwordInput');
const submitPasswordBtn = document.getElementById('submitPasswordBtn');
const passwordResult = document.getElementById('passwordResult');

const nutyModal = document.getElementById('nutyModal');
const closeNutyModal = document.getElementById('closeNutyModal');

const unreleasedSuccessModal = document.getElementById('unreleasedSuccessModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');

// Correct password
const CORRECT_PASSWORD = 'DziwkiKoksTajskiBoks';

// Clear output and add new message
function clearOutput() {
    outputContent.innerHTML = '';
}

function addOutput(text, delay = 0) {
    setTimeout(() => {
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = text;
        outputContent.appendChild(prompt);
        outputBox.scrollTop = outputBox.scrollHeight;
    }, delay);
}

// LABEL button
labelBtn.addEventListener('click', () => {
    clearOutput();
    addOutput('LABEL: underground project in progress 🔥', 100);
});

// UNRELEASED button
unreleasedBtn.addEventListener('click', () => {
    unreleasedModal.classList.add('show');
    passwordInput.value = '';
    passwordResult.textContent = '';
    passwordResult.className = '';
    passwordInput.focus();
});

// Close UNRELEASED modal
closeModal.addEventListener('click', () => {
    unreleasedModal.classList.remove('show');
});

// Submit password
submitPasswordBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    
    if (password === CORRECT_PASSWORD) {
        passwordResult.textContent = '';
        unreleasedModal.classList.remove('show');
        unreleasedSuccessModal.classList.add('show');
        clearOutput();
        addOutput('ACCESS GRANTED 🔥', 100);
    } else if (password.length > 0) {
        passwordResult.textContent = 'WRONG PASSWORD 💀';
        passwordResult.className = 'error';
        passwordInput.value = '';
        clearOutput();
        addOutput('WRONG PASSWORD 💀', 100);
    }
});

// Allow enter key in password input
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitPasswordBtn.click();
    }
});

// NUTY button
nutyBtn.addEventListener('click', () => {
    clearOutput();
    addOutput('opening sound system... 🎧', 100);
    setTimeout(() => {
        nutyModal.classList.add('show');
    }, 500);
});

// Close NUTY modal
closeNutyModal.addEventListener('click', () => {
    nutyModal.classList.remove('show');
});

// Close UNRELEASED success modal
closeSuccessModal.addEventListener('click', () => {
    unreleasedSuccessModal.classList.remove('show');
});

// WSPÓŁPRACA button
collaborationBtn.addEventListener('click', () => {
    clearOutput();
    addOutput('na razie nie ma współpracy, cóż....', 100);
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === unreleasedModal) {
        unreleasedModal.classList.remove('show');
    }
    if (e.target === nutyModal) {
        nutyModal.classList.remove('show');
    }
    if (e.target === unreleasedSuccessModal) {
        unreleasedSuccessModal.classList.remove('show');
    }
});

// Initial message on load
window.addEventListener('load', () => {
    clearOutput();
    addOutput('Welcome to OSZI\'s underground system...', 0);
    addOutput('click buttons to explore 🔥', 300);
});

// Prevent console errors
console.log('%cOSZI Underground System v1.0', 'color: #ff6600; font-size: 16px; font-weight: bold;');
console.log('%cZYJMY ŻYCIEM NAJLEPSZYM', 'color: #ff4500; font-size: 12px;');
