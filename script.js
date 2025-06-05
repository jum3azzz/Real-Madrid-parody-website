// Prevent closing the window with multiple methods
window.onbeforeunload = function(e) {
    e.preventDefault();
    e.returnValue = "You can't leave! You must click Yes!";
    return "You can't leave! You must click Yes!";
};

// Force window to stay open
window.onblur = function() {
    window.focus();
};

// Prevent window from being closed
window.onclose = function(e) {
    e.preventDefault();
    window.focus();
    return false;
};

// Keep window focused
setInterval(function() {
    window.focus();
}, 100);

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable ALL keyboard shortcuts and function keys
document.addEventListener('keydown', function(e) {
    // Prevent ALL modifier key combinations
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
        e.preventDefault();
        return false;
    }
    // Prevent ALL function keys
    if (e.keyCode >= 112 && e.keyCode <= 123) {
        e.preventDefault();
        return false;
    }
    // Prevent Escape, Tab, F5, etc.
    if (e.key === 'Escape' || e.key === 'Tab' || e.key === 'F5' || e.key === 'F11') {
        e.preventDefault();
        return false;
    }
});

// Disable browser back button and prevent navigation
history.pushState(null, null, location.href);
window.onpopstate = function() {
    history.go(1);
};

// Prevent leaving the page
window.onunload = function(e) {
    e.preventDefault();
    e.returnValue = "You can't leave! You must click Yes!";
    return "You can't leave! You must click Yes!";
};

// Disable browser refresh
window.onbeforeunload = function(e) {
    e.preventDefault();
    e.returnValue = "You can't leave! You must click Yes!";
    return "You can't leave! You must click Yes!";
};

// Disable browser developer tools
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
        return false;
    }
});

// Prevent window from losing focus
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        window.focus();
    }
});

// Make the No button run away
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const memeContainer = document.querySelector('.meme-container');

noBtn.addEventListener('mouseover', function(e) {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// When Yes is clicked
yesBtn.addEventListener('click', function() {
    memeContainer.style.display = 'block';
    memeContainer.style.animation = 'fadeIn 0.3s ease-in';
    setTimeout(() => {
        alert('I knew it u was a klja! happy pride month tho 🏳‍🌈  ');
        // Re-enable window controls after clicking Yes
        window.onbeforeunload = null;
        window.onunload = null;
        window.onblur = null;
        window.onclose = null;
        document.removeEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        document.removeEventListener('keydown', function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) {
                e.preventDefault();
                return false;
            }
        });
    }, 300);
}); 