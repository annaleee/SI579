const flashingBlock = document.querySelector('#color-timer-target');
var blue = true;
flashingBlock.classList.add("blue");
setInterval(()=>{
    if(blue){
        flashingBlock.classList.add("yellow");
        flashingBlock.classList.remove("blue");
        blue = false;
    }else{
        flashingBlock.classList.remove("yellow");
        flashingBlock.classList.add("blue");
        blue = true;
    }
},2000)