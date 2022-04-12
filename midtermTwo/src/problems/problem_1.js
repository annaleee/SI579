import {useState} from 'react';

export const description =
'The code in `src/problem_1.js` is supposed to allow users to enter a Fahrenheit temperature in the `<input />` element\
 and show the equivalent Celsius temperature underneath it. However, the Celsius temperature does not update.\
 Modify the value of `explanation` to briefly explain (in 1-3 sentences) why the current code does not work.\
 Then, update the code so that it works properly.\n\n\
 *Note: you do **not** need to handle non-numeric input. It\'s OK to have "NaN °F is NaN °C" if the user enters\
 something non-numeric for the Fahrenheit temperature.*\
 ';

export const video = <iframe width="560" height="250" src="https://www.youtube.com/embed/Mez3xQEOMy0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
const explanation = `The celsius is only valid with in the problem, so each time when the function problem run, it will be initiated as 40, but when the button change, celsius will be updated to the correct value, and then the problem will be run again to refresh this page, in this time, the celsius will be initialized to 40 again.`;

function fToC(f) {
    return (f-32)/1.8;
}

export function Problem () {
    const [fahrenheit, setFahrenheit] = useState(-40);

    function fahrenheitUpdated(ev) {
        const f = parseFloat(ev.target.value);
        setFahrenheit(f);

    }

    return <>
        <label>Enter a Fahrenheit temperature: </label><input value={fahrenheit} onChange={fahrenheitUpdated} type='number' />
        <hr />
        {fahrenheit} &deg;F is {fToC(fahrenheit).toFixed(2)} &deg;C
        <p>{explanation}</p>
    </>
}