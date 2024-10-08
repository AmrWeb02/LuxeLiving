// Language Switcher
const btn = document.getElementsByClassName("btn");
const contentList = document.querySelectorAll(".lang");
console.log("before:");
console.log(contentList);
console.log(btn);
Array.from(btn).forEach( btnElement => btnElement.addEventListener('click',toggleSwitch) )
function toggleSwitch(){
    contentList.forEach( (element,index) =>{
      console.log(element);
      if(element.classList.contains("en")){
        element.classList.remove("en");
        element.classList.add("ar");
      }
      else{
        element.classList.remove("ar");
        element.classList.add("en");
      }
    })
}

// English Navigation menu
const menuBtnEnglish = document.getElementsByClassName("burger")[0];
let topBarEnglish = menuBtnEnglish.firstElementChild;
let middleBarEnglish = menuBtnEnglish.children[1];document.getElementsByClassName("burger")
let bottomBarEnglish = menuBtnEnglish.lastElementChild;
// sideBar & overlay
const sideBarEnglish = document.getElementsByClassName("side-bar")[0];
// const overlay = document.getElementsByClassName("overlay")[0];
const menuToggleEN = () =>{

  if(sideBarEnglish.classList.contains("hidden") ){//open menu
    topBarEnglish.classList.add("topBarClockWise");
    middleBarEnglish.classList.add("midBar");
    bottomBarEnglish.classList.add("bottomBarCounterWise");
  
    sideBarEnglish.classList.remove("hidden");
    // overlay.style.visibility="visible";
    // overlay.style.opacity="1";
      setTimeout(() => {
        sideBarEnglish.style.transform = 'translateX(0)';
      }, 200);
      sideBarEnglish.classList.add("visible");

  }
  else{ //close menu
    topBarEnglish.classList.remove("topBarClockWise");
    middleBarEnglish.classList.remove("midBar");
    bottomBarEnglish.classList.remove("bottomBarCounterWise");
    // overlay.style.opacity="0";
    // overlay.style.visibility="hidden";
      sideBarEnglish.style.transform = 'translateX(-25rem)';
      setTimeout(() => {
        sideBarEnglish.classList.remove("visible");
        sideBarEnglish.classList.add("hidden");
      }, 400);
    }
}

// Arabic nav menu
const menuBtnArabic = document.getElementsByClassName("burger")[1];
let topBarArabic = menuBtnArabic.firstElementChild;
let middleBarArabic = menuBtnArabic.children[1];document.getElementsByClassName("burger")
let bottomBarArabic = menuBtnArabic.lastElementChild;
// sideBar & overlay
const sideBarArabic = document.getElementsByClassName("side-bar")[1];
// const overlayAR = document.getElementsByClassName("overlay")[1];

const menuToggleAR = () =>{

  if(sideBarArabic.classList.contains("hidden") ){
    // open menu
    topBarArabic.classList.add("topBarClockWise");
    middleBarArabic.classList.add("midBar");
    bottomBarArabic.classList.add("bottomBarCounterWise");
  
    sideBarArabic.classList.remove("hidden");
    // overlayAR.style.visibility="visible";
    // overlayAR.style.opacity="1";

      setTimeout(() => {
        sideBarArabic.style.transform = 'translateX(0)';
      }, 200);
      sideBarArabic.classList.add("visible");

  }
  else{
    //close the menu
    topBarArabic.classList.remove("topBarClockWise");
    middleBarArabic.classList.remove("midBar");
    bottomBarArabic.classList.remove("bottomBarCounterWise");
    // overlayAR.style.opacity="0";
    // overlayAR.style.visibility="hidden";
      sideBarArabic.style.transform = 'translateX(25rem)';
      setTimeout(() => {
        sideBarArabic.classList.remove("visible");
        sideBarArabic.classList.add("hidden");
      }, 400);      
}
}
menuBtnEnglish.addEventListener("click",menuToggleEN)
menuBtnArabic.addEventListener("click",menuToggleAR)

