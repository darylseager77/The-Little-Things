// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show the requested screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // Scroll to top when changing screens
        window.scrollTo(0, 0);
    }
}

// Quiz Answer Selection (with auto-advance)
function selectAnswer(nextScreen, element) {
    // Add a brief visual feedback
    if (element) {
        element.style.backgroundColor = '#f5f3ff';
        element.style.borderColor = '#4f46e5';
    }

    // Wait 300ms for visual feedback, then advance
    setTimeout(() => {
        showScreen(nextScreen);
    }, 300);
}

// Submit Check-in
function submitCheckin() {
    // Show success message
    alert('Thank you! Your check-in has been recorded.');
    // Return to dashboard
    showScreen('dashboard');
}

// Send Recognition
function sendRecognition() {
    // Get the message
    const messageInput = document.querySelector('#recognition textarea');
    const message = messageInput ? messageInput.value : '';

    if (!message.trim()) {
        alert('Please write a message before sending.');
        return;
    }

    // Show success message
    alert('Recognition sent! 🎉');
    // Clear the form
    if (messageInput) messageInput.value = '';
    // Return to dashboard
    showScreen('dashboard');
}

// Handle initial load - check for hash navigation to manager view
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash === '#manager-start') {
        // Show manager dashboard directly
        showScreen('manager-dashboard');
    }
});

// Radio button visual feedback
document.addEventListener('DOMContentLoaded', function() {
    // Handle radio button clicks for better UX
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });

    // Handle type button clicks in recognition screen
    const typeButtons = document.querySelectorAll('.type-btn');
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            typeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Animate result bars on results screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.bar-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
            }
        });
    });

    const resultsScreen = document.getElementById('results');
    if (resultsScreen) {
        observer.observe(resultsScreen);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes modals/check-ins
    if (e.key === 'Escape') {
        const currentScreen = document.querySelector('.screen.active');
        if (currentScreen && (currentScreen.id === 'checkin-1' || currentScreen.id === 'checkin-2')) {
            showScreen('dashboard');
        }
    }
});

// Simulate loading state for buttons
function simulateLoading(button, callback) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        if (callback) callback();
    }, 500);
}

// Add click handlers to submit buttons with loading state
document.addEventListener('DOMContentLoaded', function() {
    const submitButtons = document.querySelectorAll('.btn-primary');
    submitButtons.forEach(button => {
        // Store original onclick
        const originalOnclick = button.onclick;

        // Only add loading for certain buttons
        if (button.textContent.includes('Submit') || button.textContent.includes('Send')) {
            button.addEventListener('click', function(e) {
                if (!this.disabled) {
                    simulateLoading(this, null);
                }
            });
        }
    });
});

// Mobile menu toggle (placeholder for future)
function toggleMenu() {
    // Future: add menu functionality
    console.log('Menu clicked');
}

// Notification bell (placeholder for future)
function showNotifications() {
    // Future: show notifications panel
    alert('No new notifications');
}

// Add menu and notification handlers
document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.querySelectorAll('.menu-icon');
    menuIcons.forEach(icon => {
        icon.addEventListener('click', toggleMenu);
    });

    const notificationIcons = document.querySelectorAll('.notification-icon');
    notificationIcons.forEach(icon => {
        icon.addEventListener('click', showNotifications);
    });
});
