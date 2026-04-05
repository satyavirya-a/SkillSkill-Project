
const courseCards = document.getElementsByClassName("cards-container");

// Loop melalui setiap course card
for (let i = 0; i < courseCards.length; i++) {
    courseCards[i].addEventListener('mouseover', function() {
        // Cari semua img di dalam card ini
        const images = this.querySelectorAll('img');
        images.forEach(img => {
            if (img.classList.contains('logo-video')) {
                img.src = "../Assets/video-streaming-white.png";
            }
            if (img.classList.contains('logo-star')) {
                img.src = "../Assets/rating-star-white.png";
            }
        });
    });

    courseCards[i].addEventListener('mouseout', function() {
        const images = this.querySelectorAll('img');
        images.forEach(img => {
            if (img.classList.contains('logo-video')) {
                img.src = "../Assets/video-streaming.png";
            }
            if (img.classList.contains('logo-star')) {
                img.src = "../Assets/rating-star.png";
            }
        });
    });
}
