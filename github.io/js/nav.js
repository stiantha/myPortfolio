const mobileScreenWidth = 768; // Adjust as needed

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navbar = document.querySelector(".navbar-container");
    const navbarLinks = navbar.querySelectorAll("a");
    const sectionColors = ['#FF4040', '#FFFF00'];
    const svgPath = document.querySelector("svg path");

    // Function to update navbar color based on scroll position
    function updateNavbarColor() {
        const rect = sections[0].getBoundingClientRect();
        const sticky = rect.top <= 0;

        if (sticky) {
            navbar.style.backgroundColor = "rgba(19, 19, 19, 0.9)";
        } else {
            navbar.style.backgroundColor = "rgb(19, 19, 19)";
        }

        // Determine the current section based on scroll position
        let currentSectionIndex = 0;
        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionRect = sections[i].getBoundingClientRect();
            if (sectionRect.top <= 50) {
                currentSectionIndex = i;
                break;
            }
        }

        // Update link colors and SVG path fill based on the current section
        const currentSectionColor = sectionColors[currentSectionIndex - 1] || ""; // Default to empty string for no color
        navbarLinks.forEach((link) => {
            link.style.color = currentSectionColor;
        });

        if (svgPath) {
            svgPath.style.fill = currentSectionColor;
        }
    }

    // Initial update
    updateNavbarColor();

    // Listen for scroll events to update navbar color, link colors, and SVG path fill
    window.addEventListener("scroll", updateNavbarColor);
});

