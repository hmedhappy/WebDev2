import React, { useState } from 'react';

export default function Effect()
{
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");


    console.log("ahmed");
    return (
        <div>
            {<h1>{"user"}</h1>}
            <p>INPUT 1</p>
            <input type="text" onChange={(e) => setinput1(e.target.value)} />
            <p>INPUT 2</p>
            <input type="text" onChange={(e) => setinput2(e.target.value)} />
        </div>
    )
}





