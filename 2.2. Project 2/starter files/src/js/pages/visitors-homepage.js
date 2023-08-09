document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("[data-carousel='slide']");
    const carouselItems = Array.from(
        document.querySelectorAll("[data-carousel-item]")
    );
    const carouselPrev = document.querySelector("[data-carousel-prev]");
    const carouselNext = document.querySelector("[data-carousel-next]");
    const carouselIndicators = Array.from(
        document.querySelectorAll("[data-carousel-slide-to]")
    );

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
        updateIndicators(index);
    }

    // Function to update the indicators
    function updateIndicators(index) {
        carouselIndicators.forEach((indicator, i) => {
            indicator.setAttribute("aria-current", i === index);
        });
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }

    // Add event listeners to the buttons
    carouselPrev.addEventListener("click", prevSlide);
    carouselNext.addEventListener("click", nextSlide);

    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // Start the carousel with the first slide
    showSlide(currentSlide);

    // Optionally, add an automatic slide change with a set interval
    // Uncomment the line below and set the interval time in milliseconds
    // setInterval(nextSlide, 5000); // Change slide every 5 seconds
    setInterval(nextSlide, 5000)
});
