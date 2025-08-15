// ======================= Image Slider =======================
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('destinationsSlider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.getElementById('sliderDots');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // --- NEW: Variables for automatic sliding ---
    const slideInterval = 3000; // Time in milliseconds (3 seconds)
    let autoSlideTimer; // Variable to hold the setInterval timer

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(i);
            // --- NEW: Reset timer on dot click ---
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        // Loop back to the end if at the beginning
        if (index < 0) {
            index = totalSlides - 1;
            // Loop back to the beginning if at the end
        } else if (index >= totalSlides) {
            index = 0;
        }

        slider.style.transform = 'translateX(' + (-index * 100) + '%)';
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // --- NEW: Functions to control automatic sliding ---

    // Function to start the automatic slide timer
    function startAutoSlide() {
        autoSlideTimer = setInterval(() => {
            goToSlide(currentIndex + 1); // Go to the next slide
        }, slideInterval);
    }

    // Function to clear the existing timer and restart it
    function resetAutoSlide() {
        clearInterval(autoSlideTimer); // Stop the current timer
        startAutoSlide(); // Start a new one
    }

    // --- MODIFIED: Event listeners now reset the timer ---

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide(); // Reset timer on manual navigation
    });

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide(); // Reset timer on manual navigation
    });

    // --- Final steps ---
    goToSlide(0); // Initialize slider to the first slide
    startAutoSlide(); // Start the automatic sliding when the page loads
});



/* Section de Vuelos */

document.addEventListener('DOMContentLoaded', function () {
    // Select all the tab buttons and all the form panels
    const tabButtons = document.querySelectorAll('.tab-button');
    const searchForms = document.querySelectorAll('.search-form');

    // Add a click event listener to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the value from the 'data-tab' attribute of the clicked button
            const tabTarget = button.getAttribute('data-tab'); // e.g., "flights", "hotels", or "cars"

            // 1. Remove the 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add the 'active' class to the button that was just clicked
            button.classList.add('active');

            // 3. Remove the 'active' class from all forms to hide them
            searchForms.forEach(form => form.classList.remove('active'));

            // 4. Find the correct form using its ID and add the 'active' class to show it
            const targetForm = document.getElementById(tabTarget + '-form'); // e.g., document.getElementById('flights-form')
            if (targetForm) {
                targetForm.classList.add('active');
            }
        });
    });
});

// ==================================================
// TRADUCCIONES Y ESTADO
// ==================================================
const translations = {
    es: {
        pageTitle: "TripAvisor - Tu próxima aventura comienza aquí",
        loading: "Preparando tu aventura...",
        navHome: "Inicio",
        navServices: "Servicios",
        navDestinations: "Destinos",
        navContact: "Contacto",
        navLogin: "Iniciar Sesión",
        navRegister: "Registrarse",
        navLogout: "Salir",
        heroTitle: "Explora el mundo con confianza",
        heroSubtitle: "Descubre destinos increíbles, reserva vuelos, hoteles y autos de alquiler con la mejor tecnología y precios garantizados.",
        heroCta: "Buscar ahora",
        whatToDoTitle: "¿Qué quieres hacer hoy?",
        whatToDoSubtitle: "Elige tu próxima aventura y nosotros nos encargamos del resto",
        cardBookFlightsTitle: "Reservar Vuelos",
        cardBookFlightsDesc: "Encuentra los mejores vuelos a precios increíbles. Compara aerolíneas y horarios.",
        cardBookFlightsBtn: "Buscar Vuelos",
        cardBookHotelsTitle: "Reservar Hoteles",
        cardBookHotelsDesc: "Descubre hoteles únicos y cómodos para tu estadía perfecta en cualquier destino.",
        cardBookHotelsBtn: "Buscar Hoteles",
        cardRentCarsTitle: "Alquilar Autos",
        cardRentCarsDesc: "Explora con libertad. Alquila el vehículo perfecto para tu aventura.",
        cardRentCarsBtn: "Buscar Autos",
        cardExploreDestinationsTitle: "Explorar Destinos",
        cardExploreDestinationsDesc: "Inspírate con nuestros destinos más populares y planifica tu próximo viaje.",
        cardExploreDestinationsBtn: "Ver Destinos",
        cardPremiumServicesTitle: "Servicios Premium",
        cardPremiumServicesDesc: "Accede a servicios exclusivos y asistencia personalizada las 24 horas.",
        cardPremiumServicesBtn: "Ver Servicios",
        cardMyCartTitle: "Mi Carrito",
        cardMyCartDesc: "Revisa tus reservas, ajusta detalles y procede al pago cuando estés listo.",
        cardMyCartBtn: "Ver Carrito",
        footerSlogan: "Tu próxima aventura comienza aquí",
        footerTerms: "Términos",
        footerPrivacy: "Privacidad",
        footerHelp: "Ayuda",
        footerAbout: "Sobre nosotros",
        footerRights: "© 2025 TripAvisor. Todos los derechos reservados.",
        greeting: "Hola",
    },
    en: {
        pageTitle: "TripAvisor - Your next adventure starts here",
        loading: "Preparing your adventure...",
        navHome: "Home",
        navServices: "Services",
        navDestinations: "Destinations",
        navContact: "Contact",
        navLogin: "Login",
        navRegister: "Register",
        navLogout: "Logout",
        heroTitle: "Explore the world with confidence",
        heroSubtitle: "Discover incredible destinations, book flights, hotels, and rental cars with the best technology and guaranteed prices.",
        heroCta: "Search now",
        whatToDoTitle: "What do you want to do today?",
        whatToDoSubtitle: "Choose your next adventure and we'll take care of the rest",
        cardBookFlightsTitle: "Book Flights",
        cardBookFlightsDesc: "Find the best flights at incredible prices. Compare airlines and schedules.",
        cardBookFlightsBtn: "Search Flights",
        cardBookHotelsTitle: "Book Hotels",
        cardBookHotelsDesc: "Discover unique and comfortable hotels for your perfect stay in any destination.",
        cardBookHotelsBtn: "Search Hotels",
        cardRentCarsTitle: "Rent Cars",
        cardRentCarsDesc: "Explore with freedom. Rent the perfect vehicle for your adventure.",
        cardRentCarsBtn: "Search Cars",
        cardExploreDestinationsTitle: "Explore Destinations",
        cardExploreDestinationsDesc: "Get inspired by our most popular destinations and plan your next trip.",
        cardExploreDestinationsBtn: "View Destinations",
        cardPremiumServicesTitle: "Premium Services",
        cardPremiumServicesDesc: "Access exclusive services and personalized 24-hour assistance.",
        cardPremiumServicesBtn: "View Services",
        cardMyCartTitle: "My Cart",
        cardMyCartDesc: "Review your bookings, adjust details, and proceed to payment when you're ready.",
        cardMyCartBtn: "View Cart",
        footerSlogan: "Your next adventure starts here",
        footerTerms: "Terms",
        footerPrivacy: "Privacy",
        footerHelp: "Help",
        footerAbout: "About us",
        footerRights: "© 2025 TripAvisor. All rights reserved.",
        greeting: "Hello",
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('tripAvisorLanguage', lang);
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    updateUserStatus(); // To update greeting language
}

function updateUserStatus() {
    const savedState = JSON.parse(localStorage.getItem('tripAvisorState') || '{}');
    const authLinks = document.getElementById('auth-links');
    const userInfo = document.getElementById('user-info');
    const userGreeting = document.getElementById('user-greeting');
    const lang = localStorage.getItem('tripAvisorLanguage') || 'es';

    if (savedState.currentUser) {
        authLinks.style.display = 'none';
        userInfo.style.display = 'flex';
        userGreeting.innerText = `${translations[lang].greeting}, ${savedState.currentUser.name}`;
    } else {
        authLinks.style.display = 'flex';
        userInfo.style.display = 'none';
    }
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 500);

    const langSwitcher = document.getElementById('language-switcher');
    const savedLang = localStorage.getItem('tripAvisorLanguage') || 'es';
    langSwitcher.value = savedLang;
    setLanguage(savedLang);

    langSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    updateUserStatus();

    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        let savedState = JSON.parse(localStorage.getItem('tripAvisorState') || '{}');
        savedState.currentUser = null;
        localStorage.setItem('tripAvisorState', JSON.stringify(savedState));
        updateUserStatus();
        window.location.reload(); // Refresh to show login buttons
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });
});