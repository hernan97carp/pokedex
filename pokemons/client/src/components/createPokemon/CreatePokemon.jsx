import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-use-history";
import profesorImg from "../../images/oak2.gif";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePokemon() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) =>
    state.pokemons.map((poke) => poke.name)
  );
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    types: [],
  });

  return (
    <>
      <div className="conteinerCreate">
        <Link to="/home">
          <button className="buttonBack">Back</button>
        </Link>
        <div className="page">
          <div className="header">
            <h2>Create your Pokemon</h2>
          </div>
          <form className="formPage">
            <section>
              <div className="formDive">
                <label>name</label>
                <input type="text" name="name" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>hp</label>
                <input type="number" name="hp" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>attack</label>
                <input type="number" name="attack" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>defense</label>
                <input type="number" name="defense" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>speed</label>
                <input type="number" name="speed" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>weight</label>
                <input type="number" name="weight" autoComplete="off" />
              </div>

              <div className="formDive">
                <label>height</label>
                <input type="number" name="height" autoComplete="off" />
              </div>

              <button className="buttonNext">Next</button>
            </section>

            <section>
              <div>
                <span className="choosetypes">Choose two Pokemon Types</span>
                <div className="conteinerTypes">{}</div>

                <div className="btnPreviusCreate">
                  <button className="previus">Previus</button>
                  <button className="create">Create</button>
                </div>
              </div>
            </section>
          </form>
        </div>
        <img src={profesorImg} alt="profesor img" height="400px"></img>
      </div>
    </>
  );
}
