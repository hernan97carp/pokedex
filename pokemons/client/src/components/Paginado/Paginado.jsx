import React from 'react'

import "./paginado.css"
export default function Paginado({ pokemonsPerPage, allPokemons, paginado, page}){
    const pageNumbers = []

    for (let i = 0 ; i < Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i + 1)
    }

    return(
        <nav>
            <ul className="pagination">
                {
                pageNumbers && pageNumbers.map( number => (
                        <li key={number} className='list'>
                            <button  className="buttons" style={ page === number ? {color:"black", background:'white'}:  {}}onClick={() => paginado(number)} >{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )

}
