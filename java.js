// import {createElement,selectedElement} from "./utils/domUtils.js";
// import{getFromLocalStorage,saveToLocalStorage}from "./utils/storageUtils.js";
// const nameEl=document.querySelector(".name");
// const name=getFromLocalStorage();

// nameEl.textContent=`hello ${name}`;
const startEl=document.querySelector(".start");
const selectEL=document.querySelector("#select");

startEl.addEventListener("click",()=>{
    if (selectEL.value === "Easy") {
        window.location.href="gameEasy.html"
    } else  if (selectEL.value === "medium") {
        {
      window.location.href="gameMedium.htm"
        }
    } else if (selectEL.value === "hard") {
         window.location.href="gameHard.html"
    }else{
        alert("Please select a difficulty.");
    }
});

