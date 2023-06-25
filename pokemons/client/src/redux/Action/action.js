import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("/pokemons", {});

    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function reloadPokemons() {
  return {
    type: "RELOAD_POKEMONS",
  };
}

export function getTypes() {
  try {
    return async function (dispatch) {
      let info = await axios.get("/types", {});
      return dispatch({
        type: "GET_TYPES",
        payload: info.data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log("error");
  }
}

export function postPokemon(payload) {
  return async function (dispatch) {
    const pokemon = await axios.post("/pokemons", payload);

    return {
      type: "POST_POKEMON",
      payload: pokemon,
    };
  };
}

export function getPokemonName(name) {
  return async function (dispatch) {
    try {
      const json = await axios.get("/pokemons?name=" + name);
      // console.log(json.data)

      return dispatch({
        type: "GET_POKEMON_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get("/pokemons/" + id);

      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeDetail() {
  return {
    type: "REMOVE_DETAILS",
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function orderByNameOrStrengh(payload) {
  return {
    type: "ORDER_BY_NAME_OR_STRENGH",
    payload,
  };
}

// export function getPokemons(){

// return function(dispatch){
// axios.get("http://localhost:3001/pokemons")
// .then(response=>{
//   dispatch({
//     type: GET_POKEMONS,
//     Payload: response.data // recibe un arreglo de pokemonss
//   })

// })

// }

// }
