const rhymeWithInput = document.querySelector('#rhyme-with-input');
const showRhymeButton = document.querySelector('#show-rhymes-button');
const clearRhymeButton = document.querySelector('#clear-rhymes-button');
const rhymeList = document.querySelector('#rhymes');

/**
 * Gets rhymes from Datamuse and processes the results.
 *
 * @param {string} rel_rhy
 *   The word you want rhymed with
 * @param callback
 *   The function to invoke after the JSON results are returned from Datamuse.
 */
function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
showRhymeButton.addEventListener('click',()=>{
    getRhymes(rhymeWithInput.value,(data)=>{
        while(rhymeList.firstChild){
        rhymeList.removeChild(rhymeList.firstChild);
        }
        if(data.length == 0){
            rhymeList.textContent = "no rhymes";
        }
        for(word in data){
            console.log(data[word]);
            var ele = document.createElement('li');
            ele.classList.add('list-group-item');
            ele.textContent = data[word]['word'];
            rhymeList.appendChild(ele);
        }
    })
});
clearRhymeButton.addEventListener('click', ()=>{
    while(rhymeList.firstChild){
        rhymeList.removeChild(rhymeList.firstChild);
    }
})