import {useState} from 'react';

export const description =
'The code in `src/problems/problem_2.js` is supposed to add a new list item (with the text `"Item number {x}"`) every time the user clicks the "Add an item" button. However, it does not work. In that file, modify the variable `explanation` to add a plain-English explanation of what is going wrong. Then, edit the `Problem` function to fix the bug.';

const explanation = '1. Only object.keys work for items, \n2. the items.push won\'t return anything, so you could only change the items and then set the state as items.';

let numItems = 1;
export function Problem() {
    const [items, setItems] = useState(['Item zero']);

    const itemElements = Object.keys(items).map((i) => <li key={items[i]}>{items[i]}</li>)
    function addItem() {
        items.push(`Item number ${numItems++}`)
        setItems([...items]);
    }
    return <>
        <ul>{itemElements}</ul>
        <button className="btn btn-primary" onClick={addItem}>Add an item</button>
        <p>{explanation}</p>
    </>
}
