// Javascript Animation SHOW/HIDE menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Remove MENU on mobile devices
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change background of header
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header
    }
}
window.addEventListener('scroll', scrollHeader)

// FAQ's Handle Events clicked
const faqItems = document.querySelectorAll('.questions__item');

faqItems.forEach((item) => {
    const faqItemHeader = item.querySelector('.questions__header');

    faqItemHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open');

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const faqItemContent = item.querySelector('.questions__content');

    if (item.classList.contains('faq-open')) {
        faqItemContent.removeAttribute('style');
        item.classList.remove('faq-open');
    } else {
        faqItemContent.style.height = faqItemContent.scrollHeight + 'px';
        item.classList.add('faq-open')
    }

}

// Active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(curr => {
        const sectionHeight = curr.offsetHeight;
        const sectionTop = curr.offsetTop - 58;
        const sectionId = curr.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// Button SCROLL UP showing the end
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)


// Change theme DARK/LIGHT
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}

const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line';
}

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'] (iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scrollreveal 
const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duartion: 3000,
    delay: 400
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 400})
sr.reveal(`.home__socials`, {delay: 600})
sr.reveal(`.about__img`, {origin: 'left'})
sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group`, {interval: 100})