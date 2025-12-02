// Update last update time
function updateLastUpdateTime() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement) {
        const now = new Date();
        const formattedDate = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        lastUpdateElement.textContent = formattedDate;
    }
}

// Smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Update timestamp
    updateLastUpdateTime();

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Console message for developers
    console.log('%c🚀 AWS CodePipeline Demo', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%cThis website was deployed automatically using:', 'color: #764ba2; font-size: 14px;');
    console.log('%c- AWS CodePipeline', 'color: #333; font-size: 12px;');
    console.log('%c- AWS CodeBuild', 'color: #333; font-size: 12px;');
    console.log('%c- Amazon S3', 'color: #333; font-size: 12px;');
    console.log('%c- GitHub', 'color: #333; font-size: 12px;');
    console.log('%c\nEvery git push triggers automatic deployment! ⚡', 'color: #4caf50; font-size: 14px; font-weight: bold;');

    // Display build info if available (from environment variables or build process)
    displayBuildInfo();
});

// Function to display build information
function displayBuildInfo() {
    // In a real scenario, you might inject these from environment variables during build
    const buildInfo = {
        version: '1.0.0',
        buildNumber: 'AUTO',
        branch: 'main',
        environment: 'Production'
    };

    console.log('%cBuild Information:', 'color: #2c3e50; font-size: 14px; font-weight: bold;');
    console.log('Version:', buildInfo.version);
    console.log('Build:', buildInfo.buildNumber);
    console.log('Branch:', buildInfo.branch);
    console.log('Environment:', buildInfo.environment);
}

// Add interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .benefit');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Pipeline status simulator (for demo purposes)
function simulatePipelineExecution() {
    console.log('%c⏳ Simulating Pipeline Execution...', 'color: #ff9800; font-size: 14px; font-weight: bold;');

    const stages = [
        { name: 'Source', duration: 5, icon: '📦' },
        { name: 'Build', duration: 60, icon: '🔨' },
        { name: 'Deploy', duration: 15, icon: '🚀' }
    ];

    let currentTime = 0;

    stages.forEach((stage, index) => {
        setTimeout(() => {
            console.log(`${stage.icon} Stage ${index + 1}: ${stage.name} - Started`);

            setTimeout(() => {
                console.log(`✅ Stage ${index + 1}: ${stage.name} - Completed`);

                if (index === stages.length - 1) {
                    console.log('%c🎉 Pipeline execution completed successfully!', 'color: #4caf50; font-size: 16px; font-weight: bold;');
                }
            }, stage.duration * 1000);
        }, currentTime * 1000);

        currentTime += stage.duration;
    });
}

// Uncomment the line below to simulate pipeline execution in console
// simulatePipelineExecution();

// Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('ServiceWorker registered'))
    //     .catch(err => console.log('ServiceWorker registration failed'));
}

// Performance monitoring
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page load time: ${pageLoadTime}ms`);
    }
});

// Add copy functionality for code blocks (if any)
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('code, pre');

    codeBlocks.forEach(block => {
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';

        block.addEventListener('click', function() {
            const text = this.textContent;

            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showCopyNotification();
                });
            }
        });
    });
});

// Show copy notification
function showCopyNotification() {
    const notification = document.createElement('div');
    notification.textContent = 'Copied to clipboard!';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Easter egg - Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    console.log('%c🎮 KONAMI CODE ACTIVATED!', 'color: #ff00ff; font-size: 24px; font-weight: bold;');
    console.log('%c🚀 Pipeline deployment speed: MAXIMUM OVERDRIVE!', 'color: #00ff00; font-size: 16px;');
    document.body.style.animation = 'rainbow 2s linear infinite';
}
