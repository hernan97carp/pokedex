import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterCreated,
  orderByNameOrStrengh,
  getTypes,
  removeDetail,
  filterPokemonsByType,
  reloadPokemons,
} from "../../redux/Action/action";
import { Link } from "react-router-dom";
import Paginado from "../Paginado/Paginado";
import Card from "../Card/Card";
// import Paginado from '../Paginado/Paginado';
import NavBar from "../NavBar/NavBar";
import random from "../../images/random.png";
import "./home.css"
// import pika from "../../images/reload1.webp";
import NavSearch from "../NavSearch/NavSearch";
// import pikapika from "../../images/loading.gif";

export default function Home() {




  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const all = useSelector((state) => state.allPokemons);
  const types = useSelector((state) => state.types);

  const [pokLoaded, setPokLoaded] = useState(all.length ? true : false);
  const [orden, setOrden] = useState("");
  //numero de la pagina empieza en 1
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

useEffect(()=>{
//  Numero de la pagina comienza en 1 me trae las carts de la pagina uno
setCurrentPage(1)

},[allPokemons.length,setCurrentPage])

  return (
<>

    
    <div className="home">
    {/*BARRA NAVEGACION */}
      <NavBar />
      {/*BARRA DE BUSQUEDA */}
      <NavSearch />


    {/* PAGINADO       */}
    <Paginado
                //POKEMONES POR PAGINA QUE VA A TENER ...12
                pokemonsPerPage={pokemonsPerPage}
                
                allPokemons = {allPokemons.length}
                paginado={paginado}
               page={currentPage}
            />
      {/*SHOW CARTS */}

      {currentPokemons.map((el) => {
        return (
          <div>
            <Link
              to={"/home/" + el.id}
              style={{ textDecoration: "none" }}
              key={el.id}
            >
              <Card
                name={el.name}
                types={el.types}
                image={el.img ? el.img : random}
                id={el.id}
                weight={el.weight}
                height={el.height}
              />
            </Link>
          </div>
        );
      })}
                



    </div>
</>

  );

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
