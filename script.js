document.addEventListener('DOMContentLoaded', () => {

    const mobileToggleButton = document.getElementById('mobileToggleButton');
    const navMenu = document.getElementById('navMenu');
    const toggleIcon = mobileToggleButton.querySelector('i');

    /* MOBILE MENU TOGGLE */

    mobileToggleButton.addEventListener('click', () => {

        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {

            toggleIcon.className = 'ri-close-line';

        } else {

            toggleIcon.className = 'ri-menu-3-line';
        }
    });

    /* MOBILE DROPDOWN */

    const dropdownTriggers = document.querySelectorAll('.dt-toggle');

    dropdownTriggers.forEach(trigger => {

        trigger.addEventListener('click', function(event){

            if(window.innerWidth <= 1024){

                event.preventDefault();

                // exact dropdown target
                const dropdown =
                    this.closest('.dropdown');

                // close other dropdowns
                document.querySelectorAll('.dropdown')
                    .forEach(item => {

                    if(item !== dropdown){
                        item.classList.remove('open');
                    }
                });

                // toggle current
                dropdown.classList.toggle('open');
            }
        });
    });

    /* RESIZE RESET */

    window.addEventListener('resize', () => {

        if(window.innerWidth > 1024){

            navMenu.classList.remove('active');

            toggleIcon.className = 'ri-menu-3-line';

            document.querySelectorAll('.dropdown')
                .forEach(item => {
                    item.classList.remove('open');
                });
        }
    });

});

// Initialize user entrance scroll monitor system
AOS.init({
    duration: 1000,   /* Animation transitions load takes full 1 second speed */
    once: true,       /* Page loading condition entry trigger limits to 1 run time */
    offset: 20        /* Trigger activation boundary tracking offset */
});











document.addEventListener('DOMContentLoaded', () => {

    // Helper reusable engine to boot up all 6 sliders independently
    function initPopularSlider(sliderClassName, prevArrow, nextArrow) {
        return new Swiper(sliderClassName, {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            grabCursor: true,
            speed: 600,
            navigation: {
                nextEl: nextArrow,
                prevEl: prevArrow,
            },
            breakpoints: {
                550: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    // Initialize all 6 architectural category swipers with unique targeted controllers
    initPopularSlider('.kitchen-swiper', '.k-prev', '.k-next');
    initPopularSlider('.living-swiper', '.lr-prev', '.lr-next');
    initPopularSlider('.bedroom-swiper', '.b-prev', '.b-next');
    initPopularSlider('.pooja-swiper', '.p-prev', '.p-next');
    initPopularSlider('.office-swiper', '.ho-prev', '.ho-next');
    initPopularSlider('.foyer-swiper', '.f-prev', '.f-next');

});
























// Global execution pointer config states
let currentProcessStep = 1;
const totalProcessSteps = 5;

function updateProcessTimelineUI() {
    const nodes = document.querySelectorAll('.step-node-btn');
    const slides = document.querySelectorAll('.process-slide-card');
    const fillBar = document.getElementById('processFillBar');

    // 1. Line Progress Matrix Calculation handling matching nodes
    if (fillBar) {
        const fillPercent = ((currentProcessStep - 1) / (totalProcessSteps - 1)) * 100;
        fillBar.style.width = fillPercent + '%';
    }

    // 2. Exact state color assignment node mapper logic
    nodes.forEach((node, index) => {
        const stepNum = index + 1;
        
        // Resetting target structural classes completely
        node.classList.remove('active-node', 'passed-node');
        
        if (stepNum === currentProcessStep) {
            // High profile highlighted active element color
            node.classList.add('active-node');
        } else {
            // Nuvvu adiginattu completely clean white profile structural nodes
            node.classList.add('passed-node');
        }
    });

    // 3. View deck slide dynamic alpha translation triggers
    slides.forEach((slide, index) => {
        const slideNum = index + 1;
        if (slideNum === currentProcessStep) {
            slide.classList.add('active-slide');
        } else {
            slide.classList.remove('active-slide');
        }
    });

    // 4. INFINITE LOOP BOUNDARY MANAGEMENT (Arrows are always active now)
    const prevBtn = document.getElementById('processPrevBtn');
    const nextBtn = document.getElementById('processNextBtn');
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
}

// Node point precise custom click actions
function switchProcessStep(stepNumber) {
    if (stepNumber >= 1 && stepNumber <= totalProcessSteps) {
        currentProcessStep = stepNumber;
        updateProcessTimelineUI();
    }
}

// Seamless loop structural tracking driver core engine logic
function navigateProcess(direction) {
    if (direction === 'next') {
        if (currentProcessStep < totalProcessSteps) {
            currentProcessStep++;
        } else {
            // 5th cross avvagane dynamic redirection to first step
            currentProcessStep = 1;
        }
    } else if (direction === 'prev') {
        if (currentProcessStep > 1) {
            currentProcessStep--;
        } else {
            // Backward tracking jump loop to final node element
            currentProcessStep = totalProcessSteps;
        }
    }
    updateProcessTimelineUI();
}

// Mount run initialization loader loop script injection setup
document.addEventListener('DOMContentLoaded', () => {
    updateProcessTimelineUI();
});