import React,{useState} from "react";
export const description =
'Write code to create a `<button className="btn btn-secondary" />` element that displays how many times it has been clicked. If it has been clicked {n} times it should say "Clicked {n} time(s)". Your code should correctly handle pluralization (for example, "Clicked 1 time" or "Clicked 2 time**s**")';

export function Problem() {
    const [time,SetTime] = useState(0);
    function onClick(){
        SetTime(time+1);
    }
    return <button onClick = {onClick} className="btn btn-primary">{time==1?"Clicked "+time+" time":"Clicked "+time+" times"}</button>
}
