const accordions = document.querySelectorAll(".accordiation");
accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordiation-header");
    // Add event listener to each header
    header.addEventListener("click", () => {
        // Toggle the 'on' class for this accordion only
        accordion.classList.toggle("on");
    });
});