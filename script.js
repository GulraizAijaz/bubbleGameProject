var timer = 10;
var Target = 0;
var score = 0;
const scoreReal = document.getElementById("score");
const panelMsg = document.getElementById("pannel-message")
const gameBody = document.getElementById('game-body');

function makeBubble(){
    var bubbles = "";
    for(var i = 0; i<70; i++){
        var randomNum =  Math.ceil(Math.random()*9);
        bubbles += `<div class="bubble"> <span>${randomNum}</span> </div>` ;
    }
    gameBody.innerHTML = bubbles;

}

function increaseScore(){
    score += 5;
    scoreReal.textContent = Number(score);
}

function decreaseScore(){
    score -= 5;
    scoreReal.textContent = Number(score);
    timer -= 3;
}


function runTimer(){
    var timerInt = setInterval(function () {
          if(timer>0){
              timer--;
              document.getElementById("time").textContent = Number(timer);
          }
          else{
              clearInterval(timerInt);
              gameBody.innerHTML = `<h1>Game Over</h1>`;
          }
      }, 1000);
  
  }

function getNewTarget(){
    randomTarget = Math.ceil(Math.random()*9);
    document.getElementById("target").textContent = Number(randomTarget);
}



gameBody.addEventListener("click",function(e){
    var userInput = Number(e.target.textContent);
    console.log(userInput)
    if(userInput === randomTarget){
       increaseScore();
       getNewTarget();
       makeBubble();
       timer += 10;
       document.getElementById("guidlines").innerText ="++++GOOD++++"
       panelMsg.style.background = "#5fff3f";
   }
   else{
       document.getElementById("guidlines").innerText ="please enter valid number";
       panelMsg.style.background = "#ff0c0c"
       decreaseScore();
   }

}) 

runTimer();
makeBubble();
getNewTarget();

