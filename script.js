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