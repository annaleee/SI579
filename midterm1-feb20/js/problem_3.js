
const clickCounterButton = document.querySelector('#click-count');

// write your code here
var clickCount = 0;
clickCounterButton.addEventListener('click',()=>{
    clickCount++;
    console.log('click');
    clickCounterButton.textContent = `You clicked the button ${clickCount} time${pluralize(clickCount)}`;
})