import React, {useState, useRef, useEffect}from "react";
export const video = <iframe width="560" height="180" src="https://www.youtube.com/embed/DXCE32wTcBk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
export const description =
'Modify the code in `src/problem_3.js` so that the greeting message updates as the user types into the `<input />`\
 element, the greeting message updates. For example, if the user types `"Jane"` then the greeting\
 message should say `"Hello, Jane!"`. The updates should happen **as** the user types into the `<input />` element.';

export function Problem () {
    const [output, setOutput] = useState('Hello, ...!');
    const inputRef = useRef();

    function handleChange(){
        setOutput(`Hello, ${inputRef.current.value}!`);
        inputRef.current.focus();
    }
    return <>
        <label>Enter your name: </label><input ref = {inputRef} onChange={handleChange}/>
        <div>{output}</div>
    </>;
}
