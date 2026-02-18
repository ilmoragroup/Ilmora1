// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(() => document.getElementById('preloader').style.display = 'none', 500);
});

// Navbar Mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing Effect
const text = "ILMORA Education";
const typingElement = document.getElementById('typing-text');
let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
window.addEventListener('load', typeWriter);

// AOS Init
AOS.init({ duration: 1200, once: true });

// Counters
const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target + '+';
        }
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) updateCount();
        });
    });
    observer.observe(counter);
});

// Logo responsive (hide text on large screen if image used)
