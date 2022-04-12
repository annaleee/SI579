import React, {useState} from 'react';
export const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/heSbM0VqH7E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
export const description =
'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem () {
    let counter = localStorage.getItem('myCounter')==null?0:localStorage.getItem('myCounter');
    const [word,SetNum] = useState(counter==1?counter+' time':counter+' times');
    function onCount()
    {
        counter ++;
        SetNum(counter==1?counter+' time':counter+' times')
        localStorage.setItem('myCounter', counter);
    }
    return <div className="btn-group">
            <button className="btn btn-primary" onClick={onCount} >Clicked {word}</button>
            <button className="btn btn-secondary" onClick={()=>{localStorage.removeItem('myCounter');SetNum('0 time')}}>Reset</button>
        </div>;
    ;
}