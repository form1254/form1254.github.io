/* ==========================================================
   FORM1254 Portfolio Website
   Author: Ali Salari
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio website loaded successfully.");

    /* ==========================================
       Smooth scrolling for navigation links
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});

const track = document.querySelector('.projects-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const cards = Array.from(track.querySelectorAll('.project-card'));
const gap = 16;

cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

cards.forEach(card => {
  track.insertBefore(card.cloneNode(true), track.firstChild);
});

const allCards = track.querySelectorAll('.project-card');
const cardWidth = cards[0].offsetWidth + gap;

track.scrollLeft = cardWidth * cards.length;

function moveCarousel(direction) {
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });

  setTimeout(() => {
    const maxScroll = cardWidth * (cards.length * 2);

    if (track.scrollLeft >= maxScroll) {
      track.scrollLeft = cardWidth * cards.length;
    }

    if (track.scrollLeft <= 0) {
      track.scrollLeft = cardWidth * cards.length;
    }
  }, 400);
}

nextButton.addEventListener('click', () => {
  moveCarousel(1);
});

prevButton.addEventListener('click', () => {
  moveCarousel(-1);
});


