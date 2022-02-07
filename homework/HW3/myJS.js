/*
* Excercise 1
*
*/
var block = document.getElementById("color-block");
var color = document.getElementById("color-name")
var is_changed = false;
block.onclick = changeColor;
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(is_changed){
        //change the background color using JS
        block.style.backgroundColor = '#F08080';
        color.innerHTML = "#F08080";
        is_changed = false;
        //Change the text of the color using the span id color-name

    }
    else{
        //change the background color using JS
        block.style.backgroundColor = '#400D17';
        color.innerHTML = "#400D17";
        is_changed = true;
        //Change the text of the color using the span id color-name


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
var degree = document.getElementById("f-input");
var celcium = document.getElementById("c-output");
var button = document.getElementById("convertbtn");
button.onclick = convertTemp;

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    celcium.textContent = (degree.value-32)/9*5;
    //Send the calculated temperature to HTML

}


