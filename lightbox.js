const openBtns = Array.from(document.getElementsByClassName("grid")[0].children);

const closeBtns = document.getElementsByClassName("close");
const lightbox = document.getElementById("lightbox");
const slides = document.getElementsByClassName("slides");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let imgIndex;
// function changePic(n){
//     imgIndex = imgIndex + n;
//     console.log(imgIndex);
//     Array.from(slides[0].children)[0].src = openBtns[imgIndex].src;
//     if(imgIndex >= openBtns.length-1){
//         imgIndex=0;
//     }
// }
function changePic(n){
    imgIndex = imgIndex + n;
    if(imgIndex<0){imgIndex=0};
    if(imgIndex >= openBtns.length){
        imgIndex = openBtns.length-1;
    }
    console.log(imgIndex);
    Array.from(slides[0].children)[0].src = openBtns[imgIndex].src;
}
Array.from(closeBtns).forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target);
        console.log("Active class removed");
        lightbox.classList.remove("active");
        Array.from(lightbox.children).forEach( (child) => { if(child.classList.contains("slides")) {
            lightbox.removeChild(child)
        }})
    })
})

openBtns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target);
        console.log("Active class Added");
        lightbox.classList.add("active");
        const div = document.createElement("div");
        div.classList.add("slides");
        const img = document.createElement("img");
        img.src = e.target.src;
        img.className = e.target.id;
        imgIndex = Number(e.target.id);
        console.log(imgIndex);
        div.appendChild(img);
        lightbox.appendChild(div);
})
})