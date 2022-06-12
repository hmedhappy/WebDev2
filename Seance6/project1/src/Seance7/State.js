import React, { useState } from 'react';
import AfficherList from './AfficherList';
import SectionAjout from './SectionAjout';

export default function State()
{


    // const getText2 = (id) =>
    // {
    //     return new Promise((resolve, reject) =>
    //     {

    //         const user = users.find(e => e.id == id);
    //         if (!user) reject('mafamech')
    //         resolve(user.name)

    //     })
    // }

    // function getTxt()
    // {

    // }




    // if (getTxt) { getTxt() }

    // (async () =>
    // {
    //     const name = await getText2("3");
    //     getText2("1").then(value =>
    //     {
    //         console.log({ value });
    //     })
    //     // alert(name);

    // })()


    const [list, setlist] = useState([
        { id: "1", name: "ahmed", vaccine: true },
        { id: "2", name: "monji", vaccine: false },
        { id: "3", name: "lam3i", vaccine: false },
    ])

    const callbacktallertielvaluer = (lena) =>
    {
        alert(lena)
    }

    return (
        <div>
            <h1>Corona App</h1>
            <SectionAjout callback={callbacktallertielvaluer} setlist={setlist} />
            <AfficherList list={list} setlist={setlist} />

        </div>
    )
}
