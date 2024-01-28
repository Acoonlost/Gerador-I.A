document.getElementById('user-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const userInput = document.getElementById('user-input').value;
    const slideshowContainer = document.getElementById('slideshow-container');

    // Clear existing slides
    slideshowContainer.innerHTML = '';

    // Split user input into slides
    const slides = userInput.split('\n\n');

    slides.forEach(slide => {
        const slideElement = document.createElement('div');
        slideElement.innerHTML = `<h2>${slide.split('\n')[0]}</h2><p>${slide.split('\n').slice(1).join('<br>')}</p>`;
        slideElement.classList.add('slide');
        slideshowContainer.appendChild(slideElement);
    });
});
