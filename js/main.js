// basic section switching logic
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('block');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('block');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    // update nav highlight after scroll starts
    if (typeof updateActiveSection === 'function') {
        updateActiveSection();
    }
}

// helper: observe elements for reveal animation
function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// theme toggle persistence
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    // load from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        toggle.textContent = '☀️';
    }
    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// mobile navigation toggle
function initMobileNav() {
    const btn = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
        links.classList.toggle('mobile-open');
    });
    // close menu when a link is chosen
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (links.classList.contains('mobile-open')) {
                links.classList.remove('mobile-open');
            }
        });
    });
}

// highlight current section link
let updateActiveSection; // will hold the function
function initSectionHighlight() {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    updateActiveSection = function() {
        let current = 'hero';
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                current = sec.id;
            }
        });
        navLinks.forEach(link => {
            if (link.dataset.section === current) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // initialize
}

// enhance navbar shadow on scroll
function initNavShadow() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('shadow-lg');
            nav.classList.remove('shadow-sm');
        } else {
            nav.classList.add('shadow-sm');
            nav.classList.remove('shadow-lg');
        }
    });
}

// ensure hero shows on load
document.addEventListener('DOMContentLoaded', () => {
    showSection('hero');
    initRevealObserver();
    initThemeToggle();
    initNavShadow();
    initMobileNav();
    initSectionHighlight();
    // initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-quart' });
    }

    // resume selector logic
    const resumeSelect = document.getElementById('resume-select');
    const resumeFrame = document.getElementById('resume-frame');
    const resumeDownload = document.getElementById('resume-download');
    if (resumeSelect && resumeFrame && resumeDownload) {
        resumeSelect.addEventListener('change', () => {
            const url = resumeSelect.value;
            resumeFrame.src = url;
            resumeDownload.href = url;
        });
    }
});
