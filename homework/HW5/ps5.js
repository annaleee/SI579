/**
 * Returns a list of objects grouped by some property. For example:
 * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
 *
 * returns:
 * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
 *    'red': [{name: 'Jack', team: 'red'}]
 * }
 *
 * @param {any[]} objects: An array of objects
 * @param {string|Function} property: A property to group objects by
 * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
 */
function groupBy(objects, property) {
    // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
    // value for property (obj[property])
    if(typeof property !== 'function') {
        const propName = property;
        property = (obj) => obj[propName];
    }

    const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
    for(const object of objects) {
        const groupName = property(object);
        //Make sure that the group exists
        if(!groupedObjects.has(groupName)) {
            groupedObjects.set(groupName, []);
        }
        groupedObjects.get(groupName).push(object);
    }

    // Create an object with the results. Sort the keys so that they are in a sensible "order"
    const result = {};
    for(const key of Array.from(groupedObjects.keys()).sort()) {
        result[key] = groupedObjects.get(key);
    }
    return result;
}

// Initialize DOM elements that will be used.
const outputDescription = document.querySelector('#output_description');
const wordOutput = document.querySelector('#word_output');
const showRhymesButton = document.querySelector('#show_rhymes');
const showSynonymsButton = document.querySelector('#show_synonyms');
const wordInput = document.querySelector('#word_input');
const savedWords = document.querySelector('#saved_words');
const savedWordsList = document.querySelector('#saved_word_output')

// Stores saved words.
var savedWordsArray = [];

/**
 * Makes a request to Datamuse and updates the page with the
 * results.
 * 
 * Use the getDatamuseRhymeUrl()/getDatamuseSimilarToUrl() functions to make
 * calling a given endpoint easier:
 * - RHYME: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
 * - SIMILAR TO: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
 *
 * @param {String} url
 *   The URL being fetched.
 * @param {Function} callback
 *   A function that updates the page.
 */
function datamuseRequest(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // This invokes the callback that updates the page.
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

/**
 * Gets a URL to fetch rhymes from Datamuse
 *
 * @param {string} rel_rhy
 *   The word to be rhymed with.
 *
 * @returns {string}
 *   The Datamuse request URL.
 */
function getDatamuseRhymeUrl(rel_rhy) {
    return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': wordInput.value})).toString()}`;
}

/**
 * Gets a URL to fetch 'similar to' from Datamuse.
 *
 * @param {string} ml
 *   The word to find similar words for.
 *
 * @returns {string}
 *   The Datamuse request URL.
 */
function getDatamuseSimilarToUrl(ml) {
    return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': wordInput.value})).toString()}`;
}

/**
 * Add a word to the saved words array and update the #saved_words `<span>`.
 *
 * @param {string} word
 *   The word to add.
 */
function addToSavedWords(word) {
    // You'll need to finish this...
}

// Add additional functions/callbacks here.

// Add event listeners here.
showRhymesButton.addEventListener('click',()=>{
    datamuseRequest(getDatamuseRhymeUrl(wordInput.value),(data)=>{
        outputDescription.innerHTML = `Words that rhyme with ${wordInput.value}`;
        wordOutput.innerHTML = "loading...";
        while(wordOutput.innerHTML != ''){
        wordOutput.innerHTML = '';
        }
        let result = groupBy(data,({numSyllables})=>numSyllables);
        if(savedWordsArray.length == 0){
            savedWordsList.innerHTML = "Saved words: (none)";
        }else{
            savedWordsList.innerHTML = `Saved words:${savedWordsArray.join(',')}`;
        }
        if(data.length == 0){
            wordOutput.textContent = "(no results)";
        }
        for(syllables in result){
            wordOutput.innerHTML += `<h3>Syllables: ${syllables}</h3>`;
            wordOutput.innerHTML += "<ul>"
            for(word in result[syllables]){
                wordOutput.innerHTML += `<li>${result[syllables][word].word}<button class='save' onclick="saveHandler('${data[word].word}',this)">save</button></li>`;
            }
            wordOutput.innerHTML += "</ul>";
        }

    })
});
document.onkeydown = function(event){
    var e = event || window.event;
    if(e && e.keyCode === 13){
        showSynonymsButton.click();
    }
};
showSynonymsButton.addEventListener('click',()=>{
    outputDescription.innerHTML = `Words with a meaning similar to ${wordInput.value}`;
    wordOutput.innerHTML = "loading...";
    datamuseRequest(getDatamuseSimilarToUrl(wordInput.value),(data)=>{
        while(wordOutput.innerHTML != ''){
        wordOutput.innerHTML = '';
        }
        if(savedWordsArray.length == 0){
            savedWordsList.innerHTML = "Saved words: (none)";
        }else{
            savedWordsList.innerHTML = `Saved words:${savedWordsArray.join(',')}`;
        }
        
        if(data.length == 0){
            wordOutput.textContent = "(no results)";
        }
        wordOutput.innerHTML += "<ul>"
        for(word in data){
            wordOutput.innerHTML += `<li>${data[word].word}<button class='save' onclick="saveHandler('${data[word].word}',this)">save</button></li>`;
        }
        wordOutput.innerHTML += "</ul>";

    })
});
function saveHandler(word,element) {
    if(element.textContent == 'save'){
        savedWordsArray.push(word);
        console.log(savedWordsArray);
        element.textContent = '(saved)';
        if(savedWordsArray.length == 0){
            savedWordsList.innerHTML = "Saved words: (none)";
        }else{
            savedWordsList.innerHTML = `Saved words:${savedWordsArray.join(',')}`;
        }
    }
};