//Image slider
const slider = document.querySelector(".slider");
const images = document.querySelector(".slider-images"); // We have 5 images we translate this 
const dots = document.querySelectorAll(".dot"); // We have 5 buttons for manual nav
let i=0;
let playInterval;

start();

dots.forEach((dot)=>{
    dot.addEventListener("click", (e)=>{ Manual(e) } )
    })

function Manual(e){
    clearInterval(playInterval);
    i=e.target.attributes[1].value;
    images.style.transform = `translateX(${e.target.attributes[1].value * -100}%)`;
    highlight();
    start();
    // console.log(e.target.attributes[1].value);

}
function start(){
    playInterval = setInterval(() => {
        images.style.transform = `translateX(${i * -100}%)`;
        highlight();
        i++;
        if(i > Array.from(images.children).length-1 ){
            i=0;
        }
}, 2000);
}
function highlight(){
    dots.forEach( (dot,index)=>{
        dot.classList.toggle("active", index==i);
    })
}