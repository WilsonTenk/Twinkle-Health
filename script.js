// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const donateBtn = document.querySelector('.donate-btn');
const floatingDonateBtn = document.querySelector('.floating-btn');
const getStartedBtn = document.querySelector('.btn-primary');
const learnMoreBtn = document.querySelector('.btn-secondary');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#FFFFFF';
        header.style.backdropFilter = 'none';
    }
});

// Services Carousel Functionality - Proper Conditional Rendering
class ServicesCarousel {
    constructor() {
        this.serviceSets = document.querySelectorAll('.service-set');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.paginationDots = document.querySelectorAll('.pagination-dot');
        this.currentSet = 0; // 0 for Set 1, 1 for Set 2
        this.totalSets = 2; // Always 2 sets
        
        this.init();
    }
    
    init() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Add pagination dot click handlers
        this.paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSet(index));
        });
        
        // Initialize the carousel
        this.updateCarousel();
        this.updateButtons();
        this.updatePagination();
    }
    
    prev() {
        if (this.currentSet > 0) {
            this.currentSet--;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    next() {
        if (this.currentSet < this.totalSets - 1) {
            this.currentSet++;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    goToSet(setIndex) {
        if (setIndex >= 0 && setIndex < this.totalSets) {
            this.currentSet = setIndex;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    updateCarousel() {
        // Remove active class from all sets
        this.serviceSets.forEach(set => {
            set.classList.remove('active');
        });
        
        // Add active class to current set
        if (this.serviceSets[this.currentSet]) {
            this.serviceSets[this.currentSet].classList.add('active');
        }
    }
    
    updateButtons() {
        this.prevBtn.disabled = this.currentSet === 0;
        this.nextBtn.disabled = this.currentSet >= this.totalSets - 1;
    }
    
    updatePagination() {
        this.paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSet);
        });
    }
}

// Touch/Swipe support for mobile devices
class TouchCarousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.track = document.querySelector('.services-track');
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Mouse events for desktop
        this.track.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.track.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.track.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.track.addEventListener('mouseleave', (e) => this.handleMouseUp(e));
    }
    
    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.isDragging = true;
    }
    
    handleTouchMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.currentX = e.touches[0].clientX;
    }
    
    handleTouchEnd(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const diffX = this.startX - this.currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                this.carousel.next();
            } else {
                this.carousel.prev();
            }
        }
    }
    
    handleMouseDown(e) {
        this.startX = e.clientX;
        this.isDragging = true;
        e.preventDefault();
    }
    
    handleMouseMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.currentX = e.clientX;
    }
    
    handleMouseUp(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const diffX = this.startX - this.currentX;
        const threshold = 50;
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                this.carousel.next();
            } else {
                this.carousel.prev();
            }
        }
    }
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new ServicesCarousel();
    new TouchCarousel(carousel);
});

// Blog Carousel Functionality
class BlogCarousel {
    constructor() {
        this.blogSets = document.querySelectorAll('.blog-set');
        this.prevBtn = document.querySelector('.blog-navigation .prev-btn');
        this.nextBtn = document.querySelector('.blog-navigation .next-btn');
        this.paginationDots = document.querySelectorAll('.blog-pagination-dot');
        this.currentSet = 0; // 0 for Set 1, 1 for Set 2
        this.totalSets = 2; // Always 2 sets
        
        this.init();
    }
    
    init() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Add pagination dot click handlers
        this.paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSet(index));
        });
        
        // Add click handlers for blog cards
        this.addBlogCardClickHandlers();
        
        // Initialize the carousel
        this.updateCarousel();
        this.updateButtons();
        this.updatePagination();
    }
    
    addBlogCardClickHandlers() {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking on read more link
                if (!e.target.classList.contains('blog-read-more')) {
                    const postId = card.getAttribute('data-post');
                    this.handleBlogCardClick(postId);
                }
            });
        });
        
        // Handle read more links
        const readMoreLinks = document.querySelectorAll('.blog-read-more');
        readMoreLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const card = link.closest('.blog-card');
                const postId = card.getAttribute('data-post');
                this.handleBlogCardClick(postId);
            });
        });
    }
    
    handleBlogCardClick(postId) {
        // In a real implementation, this would navigate to the full blog post
        console.log(`Opening blog post ${postId}`);
        // For now, show an alert
        alert(`Opening blog post ${postId}. In a real implementation, this would navigate to the full article.`);
    }
    
    prev() {
        if (this.currentSet > 0) {
            this.currentSet--;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    next() {
        if (this.currentSet < this.totalSets - 1) {
            this.currentSet++;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    goToSet(setIndex) {
        if (setIndex >= 0 && setIndex < this.totalSets) {
            this.currentSet = setIndex;
            this.updateCarousel();
            this.updateButtons();
            this.updatePagination();
        }
    }
    
    updateCarousel() {
        // Remove active class from all sets
        this.blogSets.forEach(set => {
            set.classList.remove('active');
        });
        
        // Add active class to current set
        if (this.blogSets[this.currentSet]) {
            this.blogSets[this.currentSet].classList.add('active');
        }
    }
    
    updateButtons() {
        this.prevBtn.disabled = this.currentSet === 0;
        this.nextBtn.disabled = this.currentSet >= this.totalSets - 1;
    }
    
    updatePagination() {
        this.paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSet);
        });
    }
}

// Initialize blog carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogCarousel();
});

// FAQ Accordion Functionality
let currentOpenFAQ = 1; // First FAQ is open by default

function toggleFAQ(faqNumber) {
    const faqItem = document.querySelector(`[data-faq="${faqNumber}"]`);
    const faqIcon = faqItem.querySelector('.faq-icon i');
    
    if (faqItem.classList.contains('active')) {
        // Close the current FAQ
        faqItem.classList.remove('active');
        faqIcon.className = 'fas fa-plus';
        currentOpenFAQ = null;
    } else {
        // Close any other open FAQ
        const allFAQs = document.querySelectorAll('.faq-item');
        allFAQs.forEach(faq => {
            faq.classList.remove('active');
            const icon = faq.querySelector('.faq-icon i');
            icon.className = 'fas fa-plus';
        });
        
        // Open the clicked FAQ
        faqItem.classList.add('active');
        faqIcon.className = 'fas fa-minus';
        currentOpenFAQ = faqNumber;
        
        // Smooth scroll to the opened FAQ
        setTimeout(() => {
            faqItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    }
}

// Enhanced FAQ functionality with keyboard support
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach((question, index) => {
        // Add keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const faqNumber = parseInt(question.closest('.faq-item').getAttribute('data-faq'));
                toggleFAQ(faqNumber);
            }
        });
        
        // Add ARIA attributes for accessibility
        const faqItem = question.closest('.faq-item');
        const faqNumber = parseInt(faqItem.getAttribute('data-faq'));
        const faqAnswer = faqItem.querySelector('.faq-answer');
        
        question.setAttribute('aria-expanded', faqNumber === 1 ? 'true' : 'false');
        question.setAttribute('aria-controls', `faq-answer-${faqNumber}`);
        faqAnswer.setAttribute('id', `faq-answer-${faqNumber}`);
        
        // Update ARIA attributes when FAQ is toggled
        const originalToggleFAQ = window.toggleFAQ;
        window.toggleFAQ = function(number) {
            originalToggleFAQ(number);
            const item = document.querySelector(`[data-faq="${number}"]`);
            const btn = item.querySelector('.faq-question');
            btn.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
        };
    });
});

// Donate button functionality
function handleDonateClick() {
    // You can integrate with a payment gateway here
    alert('Thank you for your interest in donating! Please contact us at info@twinklehealth.org for donation options.');
}

donateBtn.addEventListener('click', handleDonateClick);
floatingDonateBtn.addEventListener('click', handleDonateClick);

// Get Started button functionality
getStartedBtn.addEventListener('click', () => {
    const involveSection = document.querySelector('#involve');
    if (involveSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = involveSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

// Learn More button functionality
learnMoreBtn.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = aboutSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});

// Form handling
const contactForms = document.querySelectorAll('.contact-form');
contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                field.style.borderColor = '#e0e0e0';
            }
        });
        
        if (isValid) {
            // Show success message
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
        } else {
            showNotification('Please fill in all required fields.', 'error');
        }
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#27ae60';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        default:
            notification.style.backgroundColor = '#3498db';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .about-text, .about-images, .involve-option');
animateElements.forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .about-text,
    .about-images,
    .involve-option {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .service-card.animate-in,
    .about-text.animate-in,
    .about-images.animate-in,
    .involve-option.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: var(--white);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.1);
            padding: 20px 0;
            border-top: 1px solid #f0f0f0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 15px 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero decorations
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const decorations = document.querySelectorAll('.dot-pattern, .triangle-pattern, .circle-pattern');
    
    decorations.forEach((decoration, index) => {
        const speed = 0.5 + (index * 0.1);
        decoration.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Performance optimization: Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        img.alt = 'Image not available';
    });
});

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics tracking code
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('button_click', {
            button_text: button.textContent.trim(),
            button_class: button.className
        });
    });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        trackEvent('form_submit', {
            form_class: form.className
        });
    });
});

// Community count animation
function animateCountUp() {
    const countElement = document.getElementById('community-count');
    if (!countElement) return;
    
    const targetCount = 200;
    const duration = 3000; // 3 seconds for smoother animation
    let startTime = null;
    
    function updateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * targetCount);
        
        countElement.textContent = currentCount + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Start count animation when page loads
document.addEventListener('DOMContentLoaded', animateCountUp);

console.log('Twinkle Health Foundation website loaded successfully!');
