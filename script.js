var timer = 10;
var randomTarget = 0;
var score = 0;
function increaseScore(){
    score += 5;
    document.getElementById("score-val").textContent = score;
}
function decreaseScore(){
    score -= 5;
    document.getElementById("score-val").textContent = score;
}

function getNewTarget(){
    randomTarget = Math.floor(Math.random()*10);
    document.getElementById("target-val").textContent = randomTarget;
}

function bubblemaker(){
var clutter = "";
for(var i = 1; i<109; i++){
    var rn =  Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>` ;
}

document.querySelector(".panel-bottom").innerHTML = clutter;
}


function runTimer(){
  var timerInt = setInterval(function () {
        if(timer>0){
            timer--;
            document.getElementById("timer-val").textContent = Number(timer);
        }
        else{
            clearInterval(timerInt);
            document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);

}


        document.getElementById("pbtm").addEventListener("click",function(e){
         var userInput = Number(e.target.textContent);
         
         if(userInput === randomTarget){
            increaseScore();
            getNewTarget();
            bubblemaker();
            timer += 10;
            document.getElementById("hello").innerText ="++++GOOD++++"
           
        }
        else{
            document.getElementById("hello").innerText ="please enter valid number"
            decreaseScore();
        }

    }) 
   
    

    



runTimer();
bubblemaker();
getNewTarget();





