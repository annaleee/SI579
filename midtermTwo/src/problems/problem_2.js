
import React, {useState} from 'react';
export const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/Nn7v8Hiw1-0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
export const description =
'The `Problem` component in `src/problem_2.js` accepts a list of attributes (`props`).\
 With three properties:\n\
 \
- `initial` is the value the counter should start at \n\
- `min` represents the lowest value the counter can go\n\
- `max` represents the highest value the counter can go\n\
 \n\
 Write code that allows users to increment/decrement the value by clicking the "+"/"-" button without going\
  over `max` or under `min`.\
 ';
export function Problem (props) {
    const [num,SetNum] = useState(props.initial);
    function increment()
    {
        if(num==props.max) return
        SetNum(num+1);
    }

    function decrement()
    {
        if(num==props.min) return
        SetNum(num-1);
    }
    return <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={decrement}>-</button>
            <span>    {" "+num+" "}    </span>
            <button type="button" className="btn btn-primary" onClick={increment}>+</button>
        </div>;
}