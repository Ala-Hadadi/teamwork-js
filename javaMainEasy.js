// import{getFromLocalStorage,saveToLocalStorage}from "./utils/storageUtils.js";
const pstartEl=document.querySelector(".pStart");
const penadEl=document.querySelector('.pEnd');
let timein=5;
let timesec=0;
let number=10;
// time & number
pstartEl.textContent=`Remaining Guesses : ${number}`; // تعداد دفعات 
penadEl.textContent=`time left:${timein}:${timesec < 10 ? '0' + timesec : timesec}` ;// زمان
const intervalId = setInterval(() => {
   if (timein > 0 || timesec > 0) {
      if (timesec > 0) {
        timesec--;
      } else {
        timein--;
        timesec = 59;
      }
      penadEl.textContent = `Time left: ${timein}:${timesec < 10 ? '0' + timesec : timesec}`;
      if (timesec < 10) {
        penadEl.style.color = "red";
      }
    } else {
      clearInterval(intervalId); 
      alert("Your time is up!");
    }
}, 1000);
// guess
const circleEl=document.querySelectorAll('.circle');
const yourguess1El=document.querySelector('.yourguess1');
let arrColor=[];
circleEl.forEach(circleE => {
    circleE.addEventListener('click',(e)=>{
      
      const circlechids = yourguess1El.children.length;
      console.log(circlechids);
      if (circlechids < 6) {
        const cirEl=document.createElement('div');
        cirEl.classList.add("colors");
        cirEl.classList.add('circleguess');
        yourguess1El.append(cirEl);
        if (e.target.classList.contains("circle1")){
           cirEl.classList.add("circle1");
           arrColor.push("red");
        } else if(e.target.classList.contains("circle2")){
           cirEl.classList.add("circle2");
           arrColor.push("blue");
        }else if(e.target.classList.contains("circle3")){
           cirEl.classList.add("circle3");
           arrColor.push("yellow");
        }else if(e.target.classList.contains("circle4")){
           cirEl.classList.add("circle4");
           arrColor.push("purple");
        }else if(e.target.classList.contains("circle5")){
           cirEl.classList.add("circle5");
           arrColor.push("green");
        }else if(e.target.classList.contains("circle6")){
           cirEl.classList.add("circle6");
           arrColor.push("orange");
        }
      }else {
         alert("You have to choose 6 colors")
      }
       })
});

 let arr=['red','blue','yellow','purple','green','orange'];
 let randomColor1=Math.floor(Math.random()*6);
 let randomColor2=Math.floor(Math.random()*6);
 let randomColor3=Math.floor(Math.random()*6);
 let randomColor4=Math.floor(Math.random()*6);
 let randomColor5=Math.floor(Math.random()*6);
 let randomColor6=Math.floor(Math.random()*6);
 let randomColors = [arr[randomColor1], arr[randomColor2], arr[randomColor3], arr[randomColor4], arr[randomColor5], arr[randomColor6]];
console.log(randomColors);
 const submitEl=document.querySelector('.Submit');
 const yourguess2El=document.querySelector('.yourguess2');
 const winnerEl=document.querySelector('.winner')
 const pwinner=document.querySelector('.pwinner')
 function guess (){
   
   const circlechids = yourguess1El.children.length;
   if(circlechids===6){
    yourguess1El.textContent="";
 if (number>0) {
   number--;
   pstartEl.textContent=`Remaining Guesses:${number}`; 
   const divEl0=document.createElement('div');
   divEl0.style.display = "flex";
   yourguess2El.append(divEl0);
   const divEl=document.createElement('div');
   divEl.classList.add('card2')
   divEl0.append(divEl); 
   console.log(arrColor);
   arrColor.forEach(color => {
      const cirEl=document.createElement('div');
        cirEl.classList.add("colors");
        cirEl.classList.add('circleguess');
        cirEl.style.backgroundColor=color;
        divEl.append(cirEl);
   });
   const paraEl=document.createElement('p');
   divEl0.append(paraEl);
   let correct = 0;
   let misplaced = 0;
   let usedIndexes = [];
   for (let i = 0; i < 6; i++) {
      if (randomColors[i] === arrColor[i]) {
          correct++;
          usedIndexes.push(i);
      }
  }
  for (let i = 0; i < 6; i++) {
   if (!usedIndexes.includes(i)) {
       for (let j = 0; j < 6; j++) {
           if (!usedIndexes.includes(j) && randomColors[i] === arrColor[j]) {
               misplaced++;
               usedIndexes.push(j);
               break;
           }
       }
   }
}
  paraEl.textContent=`Correct:${correct},Misplaced:${misplaced}`;
  arrColor = [];


  
 } else {
   alert("you lost...")
   randomColors.forEach(color => {
      const cirEl=document.createElement('div');
        cirEl.classList.add("colors");
        cirEl.classList.add('circleguess');
        cirEl.style.backgroundColor=color;
        winnerEl.append(cirEl);
   });
   pwinner.textContent="your color :winning colors"
 }
}else{
   alert('You have to choose 6 colors')
}
 }
 submitEl.addEventListener("click",guess);
