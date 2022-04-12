import React, { useState, useEffect } from 'react';
export const description = "";
export function Problem() {
    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count}`;
    });

    return (
    <div>
        <p>{count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Start
        </button>
    </div>
    );
}