import React, { useState, useEffect } from 'react';
import axios from 'axios';

function All() {
    const [pokemon, setPokemon] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const nameFilter = (e) => {
        setName(e.target.value);
        console.log(name)
    };

    const typeFilter = (e) => {
        setType(e.target.value);
        console.log(type)
    };

    useEffect(() => {
        axios
            .get('http://localhost:5000/')
            .then(res => {
                setPokemon(res.data);
                // console.log(res.data);
        })
            .catch(err => {
                console.log(err);
        })
    }, [])


    return (
        <div className='all'>
            <label htmlFor="name">Name: </label>
            <input onChange={e => nameFilter(e)} name='name' type="text"/>

            <label htmlFor="types">Type: </label>
            <select onChange={e => typeFilter(e)} name="types" id="types">
                <option value="Grass">Grass</option>
                <option value="Poison">Poison</option>
                <option value="Fire">Fire</option>
                <option value="Flying">Flying</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Steel">Steel</option>
                <option value="Ghost">Ghost</option>
                <option value="Ice">Ice</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
            </select>
            
            <table>
                <tbody>

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
                        pokemon && pokemon.map((item, id) => (
                        <tr key={id}>
                                <td>
                                    {/* <img src={`http://img.pokemondb.net/artwork/${item.name.toString().toLowerCase()}.jpg`}/> */}
                                {item.id}
                            </td>
                            <td>{item.name.english}</td>
                            {
                                item.type.length > 1 ?
                                <div className='all_multipleType'>
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
                            <td>{item.base.HP}</td>
                            <td>{item.base.Attack}</td>
                            <td>{item.base.Defense}</td>
                            {/* <td>{item.base.Sp. Attack}</td>
                            <td>{item.base.Sp. Defense}</td> */}
                            <td>{item.base.Speed}</td>
                        </tr>
                    ))
                    }
                </tbody>    
            </table>
        </div>
    )
}

export default All;
