import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detail.scss';

function Detail(props) {
    const [pokemon, setPokemon] = useState([]);
    const name = props.match.params.name;

    useEffect(() => {
        axios
            .get('http://localhost:5000/')
            .then(res => {
                setPokemon(res.data);
        })
            .catch(err => {
                console.log(err);
        })
    }, [])

    let detail = pokemon?.filter(poke => {
        return poke.name.english.toLowerCase() === name;
    })

    return (
        <div className='detail'>
            {detail.length > 0 &&
                <>
                    <h1>{name}</h1>
                    <img className='detail__img' alt='pokemon img' src={`http://img.pokemondb.net/artwork/${name.toString().toLowerCase()}.jpg`}/>
                    <h2>Pokedex data</h2>
                        
                    <p>National No: <span>{detail[0]?.id}</span></p>
                    {
                        detail[0]?.type.length > 1 ?
                            <p>Type: <span>{detail[0]?.type[0]},   </span><span>{detail[0]?.type[1]}</span> </p>
                        : 
                            <p>Type: <span>{detail[0]?.type}</span></p>
                }
                
                    <h2>Base stats</h2>
                    <p>HP: <span>{detail[0]?.base.HP}</span></p>
                    <p>ATTACK: <span>{detail[0]?.base.Attack}</span></p>
                    <p>DEFENSE: <span>{detail[0]?.base.Defense}</span></p>
                    <p>SPEED: <span>{detail[0]?.base.Speed}</span></p>
                    <p>Total: <span className='detail__total'>{detail[0]?.base.HP + detail[0]?.base.Attack + detail[0]?.base.Defense + detail[0]?.base.Speed + detail[0]?.base.HP }</span></p> 
                </>
            }
        </div>
    )
}

export default Detail;