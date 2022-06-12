import React from 'react'
import { selimeStyle } from './style'

export default function AfficherList({ list, setlist })
{
    const handleSupprim = (id) =>
    {
        setlist((old) => old.filter(e => e.id !== id))
        setlist(list.filter(e => e.id !== id))
    }
    const handleVAccin = (id) =>
    {
        setlist((old) => old.map((e) =>
        // haw logbject
        ({
            ...e,
            vaccine: e.id == id ? true : e.vaccine
        })
            // haw taskira mta logbject

        ))
    }

    return (
        <div style={selimeStyle('bonbon', "gray")}  >
            <div className={'enregistre'} >
                <h3>List enregistre</h3>
                <ul>
                    {list?.filter((e) => !e.vaccine).map(e => <li>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} >
                            <p>{e?.name}</p>
                            <button onClick={() => handleVAccin(e?.id)}>Vaccanlou</button>
                        </div>
                    </li>)}
                </ul>
            </div>
            <div className='vaccine' >
                <h3>List vaccine</h3>
                <ul>
                    {list?.filter((e) => e.vaccine).map((e) => <li>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} >
                            <p>{e?.name}</p>
                            <button onClick={() => handleSupprim(e.id)} >fas5ou</button>
                        </div>
                    </li>)}
                </ul>
            </div>

        </div>
    )
}
