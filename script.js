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
/* Podcast Archive */

const podcastEpisodes = [
  {
    date: "Day 1 — Back to Building — 2026.08.01",
    link: "https://drive.google.com/drive/folders/18qkBcFOTHwpdtIb731MUEw6M_fSdFLEi?usp=drive_link"
  },
  {
    date: "Day 2 — Compressing the Distance Between Learning & Building — 2026.08.02",
    link: "https://drive.google.com/drive/folders/13Dyl_xjkFklqHcxAMHbIsh4fT_nlIaQJ?usp=drive_link"
  },
  {
    date: "Day 3 — Packaging the Work — 2026.08.03",
    link: "https://drive.google.com/drive/folders/1JxOdGP2h8YxSYEEGXIjBD4SI_iZfkvzZ?usp=drive_link"
  },
  {
    date: "Day 4 — Resetting the Environment — 2026.08.04",
    link: "https://drive.google.com/drive/folders/17OPqcY0XFJOtlKvgOOvo3BsVOBy-MwYN?usp=drive_link"
  },
  {
    date: "Day 5 — Building the Network — 2026.08.05",
    link: "https://drive.google.com/drive/folders/1aGS_OZ6hGI5gFRsoaTtMjp5nJmmxIwkT?usp=drive_link"
  },
  {
    date: "Day 6 — Speaking's a Skill, Too. — 2026.08.06",
    link: "https://drive.google.com/drive/folders/1VR_Iz5-f4KGFTBcGo-s3uzTtIuTtpxpH?usp=drive_link"
  },
  {
    date: "Day 7 — The Recurring Dream — 2026.08.07",
    link: "https://drive.google.com/drive/folders/1Fsdeb7u3FX3DaZELiok4BXKe79DyL4ui?usp=drive_link"
  },
  {
    date: "Day 8 — Defaults — 2026.08.08",
    link: "https://drive.google.com/drive/folders/1TRVAGLNsIY4M763tIFMdLIxBqTBXdzhf?usp=drive_link"
  },
  {
    date: "Day 9 — AI & the Orchestra of Life — 2026.08.09",
    link: "https://drive.google.com/drive/folders/1o4Y_i4m3p6VjLjWO3Ivaoa70cplz_8CK?usp=drive_link"
  },
  {
    date: "Day 10 — Attention & Brand — 2026.08.10",
    link: "https://drive.google.com/drive/folders/1MES6FpOuMyTdPDJOSSBDUIx-ElHypzVP?usp=drive_link"
  },
  {
    date: "Day 11 — Founder Principles — 2026.08.11",
    link: "https://drive.google.com/drive/folders/1cUhd2R7-y2lZDdiJcwRdx_zy6oJE40Eb?usp=sharing"
  },
  {
    date: "Day 12 — Implementation — 2026.08.12",
    link: "https://drive.google.com/drive/folders/1m-ATQg4sR-CgNY8reF-Pwpmh8GS5bsJJ?usp=drive_link"
  },
  {
    date: "Day 13 — Good Comments — 2026.08.13",
    link: "https://drive.google.com/drive/folders/1xwL6iCj3GTG1sE5so2IlfYAx7ENse6Oe?usp=drive_link"
  },
  {
    date: "Day 14 — Outliers & Speed — 2026.08.14",
    link: "https://drive.google.com/drive/folders/1tUgGEyVwWuHGbNQG2QkLs7ZWoumKRLxV?usp=drive_link"
  },
  {
    date: "Day 15 — Delayed Gratification — 2026.08.15",
    link: "https://drive.google.com/drive/folders/1rCL1P0_J9r3U3OgTtL26FKlpanCufGiB?usp=drive_link"
  },
  {
    date: "Day 16 — Consistency / Invisible Results — 2026.08.16",
    link: "https://drive.google.com/drive/folders/1U_Lz_OoL5fE6tuI02rl_qAdSVDMMuJ3Z?usp=drive_link"
  }
];

const podcastArchive = document.getElementById("podcastArchive");

podcastEpisodes
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .forEach((episode) => {
  const item = document.createElement("a");

  item.className = "podcast-archive-item";
  item.href = episode.link;
  item.target = "_blank";
  item.rel = "noopener noreferrer";

  item.innerHTML = `
    <span class="podcast-archive-date">📁 ${episode.date}</span>
  `;

  podcastArchive.appendChild(item);
});