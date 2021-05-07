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
        filtered && filtered.map((item, id) => (
        <tr key={id}>
                <td>
                    <img className='all__img' src={`http://img.pokemondb.net/artwork/${item.name.english.toString().toLowerCase()}.jpg`}/>
                {item.id}
            </td>
                <td>
                    <a className='all__name' href={`http://localhost:3000/${item.name.english}`}>{item.name.english}</a>
                </td>
            {
                item.type.length > 1 ?
                <div className='all__multipleType'>
                    <td className='all__typeOne'>
                    {item.type[0]}
                </td>
                <td className='all__typeTwo'>
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