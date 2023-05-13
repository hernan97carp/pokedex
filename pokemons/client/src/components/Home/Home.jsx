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
import Card from "../Card/Card";
// import Paginado from '../Paginado/Paginado';
import NavBar from "../NavBar/NavBar";
import random from "../../images/random.png";
import style from "./Home.module.css";
import pika from "../../images/reload1.webp";
import NavSearch from "../NavSearch/NavSearch";
import pikapika from "../../images/loading.gif";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const all = useSelector((state) => state.allPokemons);
  const types = useSelector((state) => state.types);

  const [pokLoaded, setPokLoaded] = useState(all.length ? true : false);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
    dispatch(getPokemons());
  }, []);

  return (
    <div className={style.home}>
      <NavBar />
      <NavSearch />

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
  );
}
