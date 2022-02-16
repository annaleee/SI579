var button = document.getElementById('add_task');
var descrip = document.getElementById("task_description_input");
button.addEventListener('click',event=>submitTask());
descrip.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
        submitTask();
    }
});
function submitTask(){
    var date = document.getElementById("duedate_input");
    var time = document.getElementById("duetime_input");
    addTask(descrip.value,dateAndTimeToTimestamp(date,time))
    descrip.value = "";
}
function addTask(description, dueTime){
    var ul = document.getElementById("task_list");
    var li = document.createElement("li");
    if(!dueTime){
        li.innerHTML=`${description}<button class="btn btn-sm btn-outline-danger done" type="button">Done</button>"`;
    }else{
        li.innerHTML=`${description}<span class="due">due ${new Date(dueTime).toLocaleString()} </span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button>"`;
    }
    ul.appendChild(li);
    var done = li.querySelector('button');
    done.onclick = function(){
        this.parentElement.remove();
    }
}
function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}