// FIX THE CODE BELOW WITH A MINIMAL EDIT
const button = document.querySelector('#clickable-button');

button.addEventListener('click', ()=>{
    document.getElementById("clicked-feedback").textContent = "You clicked the button!";
});