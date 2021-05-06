import React, { useState, useEffect } from 'react';
import axios from 'axios';

function All() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/')
            .then(res => {
                setPokemon(res.data);
                console.log(res.data);
        })
            .catch(err => {
                console.log(err);
        })
    }, [])

    return (
        <div className='all'>
            <table>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    {/* <th>Sp. Attack</th>
                    <th>Sp. Defense</th> */}
                    <th>Speed</th>
                </tr>

                {
                    pokemon && pokemon.map(item => (
                        <tr>
                            <td>{ item.id}</td>
                            <td>{item.name.english}</td>
                            {
                                item.type.length > 1 ?
                                <div>
                                    <td>
                                    {item.type[0]}
                                </td>
                                <td>
                                    {item.type[1]}
                                </td>
                                </div>
                                : <td>
                                    {item.type}
                                </td>
                                
                            }
                            <td>{ item.base.HP}</td>
                            <td>{ item.base.Attack}</td>
                            <td>{ item.base.Defense}</td>
                            {/* <td>{ item.base.Sp. Attack}</td>
                            <td>{ item.base.Sp. Defense}</td> */}
                            <td>{ item.base.Speed}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default All;
