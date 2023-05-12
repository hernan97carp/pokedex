import React, {useState, useEffect} from 'react' ;
import { useDispatch, useSelector } from 'react-redux' ;
import { getPokemons, filterCreated, orderByNameOrStrengh, getTypes, removeDetail, filterPokemonsByType, reloadPokemons } from '../../redux/Action/action';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
// import Paginado from '../Paginado/Paginado';
import NavBar from '../NavBar/NavBar';
import random from '../../images/random.png';
import style from './Home.module.css';
import pika from '../../images/reload1.webp';
import NavSearch from '../NavSearch/NavSearch';
import pikapika from '../../images/loading.gif'


export default function Home(){

    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    const all = useSelector(state => state.allPokemons)
    const types = useSelector(state => state.types)

    const [pokLoaded, setPokLoaded] = useState(all.length ? true : false)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(removeDetail());
        dispatch(getTypes());
        if(!pokLoaded){
            dispatch(getPokemons());
        }   
    }, [pokLoaded, dispatch])

    useEffect(() => {
        setCurrentPage(1);
    }, [allPokemons.length,setCurrentPage]);

    function handleClick(e){
        e.preventDefault();
        dispatch(reloadPokemons());
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterByType(e){
        dispatch(filterPokemonsByType(e.target.value));
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByNameOrStrengh(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return(
        <div className={style.home}>
            <NavBar/>
            <NavSearch/>
            
            <button onClick={e => {handleClick(e)}} className={style.poke}><img src={pika} alt="pikachu"    className={style.pika} /> Reload</button>

            <div className={style.sortfilter}>
                <select onChange={e => handleSort(e)}>
                    <option value="normal">Normal</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                    <option value="HAttack">Highest Attack</option>
                    <option value="LAttack">Lowest Attack</option>
                </select>
                <select onChange={e => handleFilterCreated(e)}>
                    <option value="All">All</option>
                    <option value="Api">API</option>
                    <option value="Created">Created</option>
                </select>
                <select onChange={e => handleFilterByType(e)}>
                    <option value="All">All types</option>
                    {
                        types.map( type => (
                            <option value={type.name} key={type.name}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            
            {/* <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons = {allPokemons.length}
                paginado={paginado}
                page={currentPage}
            />
         */}
            <div className={style.cards}>
            {
                currentPokemons.length ? 
                typeof currentPokemons[0] === 'object' ?
                currentPokemons.map( el => {
                    return(
                        <div>
                            <Link to={"/home/" + el.id} style={{textDecoration:'none'}} key={el.id}>
                                <Card name={el.name} types={el.types} image={el.img ? el.img : random} id={el.id} weight={el.weight} height={el.height} />
                            </Link>
                        </div>
                    )
                }) :
                // FONDO  IMAGEN NOT FOUND 
                <div className={style.notfound}>
                    <img src='images/notfound.png'alt="Pokemon not found" width='100px'/>
                    <span>{currentPokemons[0]} not found</span>
                </div>
                :
                //imagen de pikachu loading
                <div className={style.loading}> 
                    <img src={pikapika}alt="Loading.." width='250px'/>
                    <p className={style.loadingtext}>Loading...</p>
                </div>
            }
            </div> 
            {/* <Paginado
                pokemonsPerPage={pokemonsPerPage}
                allPokemons = {allPokemons.length}
                paginado={paginado}
                page={currentPage}
            /> */}
        </div>
    )
}





















// import"./home.css"
// import NavBar from "../NavBar/NavBar"
// import NavSearch from "../NavSearch/NavSearch"
// import {useDispatch, useSelector} from "react-redux"
// import {useState, useEffect } from "react"
// import {getPokemons, filterCreated, orderByNameOrStrengh, getTypes, removeDetail, filterPokemonsByType, reloadPokemons } from '../../redux/Action/action';
// import random from '../../images/random.png';
// import {Link} from "react-router-dom"
// import Card from "../Card/Card"
// export default function Home(){
//     const dispatch = useDispatch()
//     const allPokemons = useSelector(state => state.pokemons)
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
//     const indexOfLastPokemon = currentPage * pokemonsPerPage;
//     const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
//     const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
//     useEffect(() => {
//             dispatch(getPokemons());
         
//     },[dispatch])


// return(

//  <>
// <NavBar></NavBar>
// <NavSearch></NavSearch>
// <div className="cards">
// {
//  currentPokemons.map( el => {
//  return(
// <div>

// <Link to={"/home/" + el.id} style={{textDecoration:'none'}} key={el.id}>
//                                 <Card name={el.name} types={el.types} image={el.img ? el.img : random} id={el.id} weight={el.weight} height={el.height} />
//                             </Link>


// </div>


//  )




//  })



// }


// </div>
//  </>

// )


// }


