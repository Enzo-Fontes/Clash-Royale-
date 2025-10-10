document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const backToTopButton = document.getElementById('back-to-top');
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');

    window.showPage = (pageId) => {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active');
        }
        window.scrollTo(0, 0);
    };

    window.toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const item = header.parentElement;
            
            item.parentElement.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-content').classList.add('hidden');
                }
            });

            content.classList.toggle('hidden');
        });
    });

    const applyTheme = (theme) => {
        const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        themeToggle.querySelector('i').className = `fas ${icon}`;
        themeToggleMobile.querySelector('i').className = `fas ${icon} mr-2`;
        localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };
    
    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('hidden', 'opacity-0', 'translate-y-2');
             backToTopButton.classList.add('flex');
        } else {
            backToTopButton.classList.add('opacity-0', 'translate-y-2');
            setTimeout(() => {
                backToTopButton.classList.add('hidden');
                backToTopButton.classList.remove('flex');
            }, 300);
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const setupLikeButton = (buttonId, countId, storageKey) => {
        const likeButton = document.getElementById(buttonId);
        const likeCountSpan = document.getElementById(countId);
        let likeCount = parseInt(localStorage.getItem(storageKey) || '0');

        likeCountSpan.textContent = likeCount;

        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCountSpan.textContent = likeCount;
            localStorage.setItem(storageKey, likeCount);
            
            likeButton.classList.add('scale-110');
            setTimeout(() => {
                likeButton.classList.remove('scale-110');
            }, 150);
        });
    };

    setupLikeButton('like-cr', 'like-count-cr', 'likeCountCR');
    setupLikeButton('like-coc', 'like-count-coc', 'likeCountCOC');
    setupLikeButton('like-bs', 'like-count-bs', 'likeCountBS');
    setupLikeButton('like-sb', 'like-count-sb', 'likeCountSB');
    setupLikeButton('like-mc', 'like-count-mc', 'likeCountMC');
    setupLikeButton('like-hd', 'like-count-hd', 'likeCountHD');
    setupLikeButton('like-bb', 'like-count-bb', 'likeCountBB');

    showPage('home');
});
