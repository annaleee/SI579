// The following function accepts one argument (a callback function)
// and calls it back with two arguments:
function getDayEvents(callback) {
    fetch('https://events.umich.edu/day/json')
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

const showEventsButton = document.querySelector('#problem-3 #show-events');
const problemOutputEl = document.querySelector('#p3-events-output');

//problemOutputEl.append('(TODO)');

// An example call to getDayEvents:
showEventsButton.addEventListener('click', () => {
    getDayEvents((data)=>{
        for(eachEvent in data){
            console.log(eachEvent);
            let title = document.createElement("h3");
            title.innerHTML = `<h3>${data[eachEvent]['event_title']}</h3>`;
            problemOutputEl.append(title);
            if('image_url' in data[eachEvent]){
                let img = document.createElement("img");
                img.src = `${data[eachEvent]['image_url']}`
                problemOutputEl.append(img);
            }
            let pword = document.createElement("P");
            pword.append(`${data[eachEvent]['description']}`);
            problemOutputEl.append(pword);
            console.log(data[eachEvent]);
        }
    })
})