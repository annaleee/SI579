const timeSelectElement = document.querySelector('#time-select');
const secondsOldElement = document.querySelector('#seconds-old')
var changing;
function getInputTimestamp() {
    const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
    return timeSelectElement.valueAsNumber + timezoneOffset;
}

timeSelectElement.addEventListener('change',()=>{
    clearInterval(changing);
    changing = setInterval(()=>{
        secondsOldElement.textContent = parseInt((Date.now() - getInputTimestamp())/1000);
    },1000);
}
);