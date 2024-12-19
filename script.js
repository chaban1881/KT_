document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        currentSlideIndex = index;
    }

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            showSlide(currentSlideIndex - 1);
        } else {
            showSlide(slides.length - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentSlideIndex < slides.length - 1) {
            showSlide(currentSlideIndex + 1);
        } else {
            showSlide(0);
        }
    });

    // Показать первый слайд при загрузке страницы
    showSlide(0);
});