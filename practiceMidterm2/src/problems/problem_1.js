import React, {useState} from "react";
export const description =
'The code in `src/problems/problem_1.js` is supposed to display the text "You clicked the button" after the user clicks the button. However, it does not work. In that file, modify the variable `explanation` to add a plain-English explanation of what is going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = "Because the buttonClicked will be initiated each time the function is called. Therefore, this variable can not store the change";

export function Problem () {
    const [buttonClicked, SetButton] = useState(false);

    function onClick() {
        SetButton(true);
    }

    return <>
        <div>{buttonClicked ? "CLICKED!" : "not clicked yet"}</div>
        <button className="btn btn-primary" onClick={onClick}>Click me!</button>
        <p>{explanation}</p>
    </>
}
