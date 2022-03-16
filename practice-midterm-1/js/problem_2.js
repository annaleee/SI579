const startButton = document.querySelector('#start-button');
const finishButton = document.querySelector('#finish-button');
const timeTakenOutput = document.querySelector('#time-taken')

timeTakenOutput.textContent = `(TODO)`;

// Write your code for problem 2 below
var onclick = false;
var startTime;
var endTime;
var timing;
startButton.addEventListener("click",()=>{
    startTime = performance.now();
    onclick = true;
    timing = setInterval(myTimer,1);
})
finishButton.addEventListener("click",()=>{
    myTimer();
    onclick = false;
    clearInterval(timing);
})

function myTimer(){
    endTime = performance.now();
    timeTakenOutput.textContent = `${parseInt(endTime-startTime)}`;
}
