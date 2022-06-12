import React, { useState } from 'react';

export default function SectionAjout({ setlist, callback })
{
    let [input, setinput] = useState("SALI7A");

    return (
        <div>
            <input onChange={(e) => setinput(e.target.value)} type="text" />
            <button onClick={() =>
            {
                setlist((old) => [...old, { id: `${ Date.now() }`, name: input }])
                callback(input)
            }} >Ajouter</button>
        </div>
    )
}
