// const elem = document.getElementById("myBar");
// let width = 20;
// function move() {
// let id = setInterval( () => {
//     if (width >= 100) {
//         clearInterval(id);
//     } 
//     else {
//         width++; 
//         elem.style.width = width + '%'; 
//         elem.innerHTML = width * 1  + '%';
//     }
//     }, 10);
// }
// document.addEventListener("DOMContentLoaded",move);

const bars = document.querySelectorAll(".bar");

document.addEventListener("DOMContentLoaded", () => {
    
    bars.forEach(bar => {
        let width = 20;
        let target = parseInt(bar.getAttribute("data-target"));
        function move() {
            let id = setInterval(() => {
                if (width >= target) {
                    clearInterval(id);
                } else {
                    width++;
                    bar.style.width = width + '%'; // Apply width to the current element
                    bar.innerHTML = width * 1 + '%'; // Update the text inside the current element
                }
            }, 10);
        }
        move(); // Call move for each bar element
    });
});
