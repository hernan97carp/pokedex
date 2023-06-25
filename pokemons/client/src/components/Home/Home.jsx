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
import notFound from "../../images/random.png";
import pika from "../../images/reload1.webp";
import NavSearch from "../NavSearch/NavSearch";
import loading from "../../images/loang.gif";
import "./home.css";
export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  //gif loading
  const [pokLoaded, setPokLoaded] = useState(allPokemons.length ? true : false);
  //setear cambio de orden
  const [orden, setOrden] = useState("");

  //numero de la pagina empieza en 1
  const [currentPage, setCurrentPage] = useState(1);

  //pokemones por pagina
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getTypes());
    if (!pokLoaded) {
      dispatch(getPokemons());
    }
  }, [pokLoaded, dispatch]);

  useEffect(() => {
    //  Numero de la pagina comienza en 1 me trae las carts de la pagina uno
    setCurrentPage(1);
  }, [allPokemons.length, setCurrentPage]);

  //Button reload

  function handlerReload(evento) {
    evento.preventDefault();
    dispatch(reloadPokemons());
  }

  // FILTRAR Y ORDENAR
  function handleOrder(evento) {
    evento.preventDefault();
    dispatch(orderByNameOrStrengh(evento.target.value));
    setCurrentPage(currentPage);
    //setear para que capte el cambio
    setOrden(evento.target.value);
  }

  function handleFilterCreated(evento) {
    dispatch(filterCreated(evento.target.value));
  }

  function handleFilterByType(evento) {
    evento.preventDefault();
    dispatch(filterPokemonsByType(evento.target.value));
  }

  return (
    <>
      <div className="home">
        {/*BARRA NAVEGACION */}
        <NavBar />

        {/*BARRA DE BUSQUEDA */}

        <NavSearch />
        {currentPokemons.length ? (
          <button
            onClick={(evento) => handlerReload(evento)}
            className="reload"
          >
            <img src={pika} className="pika" alt="imagen pikachu"></img>Reload
          </button>
        ) : (
          <i></i>
        )}

        {/* FILTRAR Y ORDENAR */}
        {currentPokemons.length ? (
          <div className="selects">
            <select onChange={(evento) => handleOrder(evento)}>
              <option value="normal">Normal</option>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
              <option value="HAttack">Highest Attack</option>
              <option value="LAttack">Lowest Attack</option>
            </select>

            <select onChange={(evento) => handleFilterCreated(evento)}>
              <option value="All">All</option>
              <option value="api">Api</option>
              <option value="Created">Created</option>
            </select>
            <select onChange={(evento) => handleFilterByType(evento)}>
              <option value="All">All types</option>
              {types.map((type) => (
                <option value={type.name} key={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <i></i>
        )}

        {/* FIN DE  FILTRAR Y ORDENAR */}

        {/* PAGINADO       */}
        {currentPokemons.length ? (
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
            page={currentPage}
          ></Paginado>
        ) : (
          <img src={loading} className="loading"></img>
        )}

        {currentPokemons.length ? (
          typeof currentPokemons[0] === "object" ? (
            currentPokemons.map((el) => {
              return (
                <div>
                  <div></div>
                  <Link
                    to={"/home/" + el.id}
                    style={{ textDecoration: "none" }}
                    key={el.id}
                  >
                    <Card
                      name={el.name}
                      types={el.types}
                      image={el.img ? el.img : notFound}
                      id={el.id}
                      weight={el.weight}
                      height={el.height}
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="notfound">
              <img
                src="images/notfound.png"
                alt="Pokemon not found"
                width="100px"
              />
              <span>{currentPokemons[0]} not found</span>
            </div>
          )
        ) : (
          <i></i>
        )}
      </div>
    </>
  );
}
