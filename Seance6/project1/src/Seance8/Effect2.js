import React, { useEffect, useState } from 'react';

export default function Effect2()
{
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");


    useEffect(() =>
    {
        // alert('loula tbadlet')
    }, [])

    console.log({});
    return (
        <div>
            <p>INPUT 1</p>
            <input type="text" onChange={(e) => setinput1(e.target.value)} />
            <p>INPUT 2</p>
            <input type="text" onChange={(e) => setinput2(e.target.value)} />
        </div>
    )
}
