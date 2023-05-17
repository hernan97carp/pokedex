import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/Action/action";
import "./detail.css";
import random from "../../images/random.png";

import loading from "../../images/loang.gif";

// import style from "./Detail.module.css";

import heartImg from "../../images/cards/health.png";
import attackImg from "../../images/cards/sword.png";
import shield from "../../images/cards/shield.png";
import speed from "../../images/cards/run.png";
import happy from "../../images/cards/happy.png";
import pokedex from "../../images/cards/pokedex.png";
import height from "../../images/cards/height.svg";
import weight from "../../images/cards/weight.svg";
//useParams, that returns an object with all variables inside your route

function Detail(props) {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.detail);
  console.log(myPokemon[0]);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);
  console.log(id);

  if (myPokemon[0] === undefined)
    return (
      <div className="conteinerLoading">
        <img src={loading} className="loading" alt="loading" />
      </div>
    );

  return (
    <div className="conteinerGeneral">
      {/* myPokemon.length && myPokemon[0].id == id  */}
      <div className="titulopokemon">
        <h1>
          {myPokemon[0].name.charAt(0).toUpperCase() +
            myPokemon[0].name.slice(1)}
        </h1>
        <p>Pokedex N°{myPokemon[0].id}</p>
      </div>
      {<img src={myPokemon[0].img} alt="imagen" className="imagenPokemon" />}

      <div className="typess">
        {myPokemon[0].types ? (
          myPokemon[0].types.map((type) => {
            return (
              <img
                src={`/images/types/${type}.png`}
                key={type}
                alt="img type"
                className="typeImg"
              />
            );
          })
        ) : (
          <span>not found</span>
        )}
      </div>

      <div className="statss">
        <h1 className="details">Details</h1>

        {/* health */}
        <div className="bar">
          <div className="infoo">
            <span>
              <img src={heartImg} className="imagenes" /> Hp
            </span>
          </div>

          <div className="progress-bar red stripes shine">
            <span
              style={{
                width: myPokemon[0].hp > 100 ? "100%" : myPokemon[0].hp + "%",
              }}
              className="hp"
            >
              {myPokemon[0].hp > 100 ? "100%" : myPokemon[0].hp + "%"}
            </span>
          </div>
        </div>

        {/* attack */}
        <div className="bar">
          <div className="info">
            <span>
              <img src={attackImg} className="imagenes" />
              Attack
            </span>
          </div>
          <div className="progress-bar black stripes shine">
            <span
              style={{
                width:
                  myPokemon[0].attack > 200
                    ? "200%"
                    : myPokemon[0].attack + "%",
              }}
              per={`${myPokemon[0].attack}`}
              className="attack"
            >
              {myPokemon[0].attack > 100 ? "100%" : myPokemon[0].attack + "%"}
            </span>
          </div>
        </div>

        {/* defense*/}
        <div className="bar">
          <div className="info">
            <span>
              <img src={shield} className="imagenes" />
              Defense
            </span>
          </div>
          <div className="progress-bar blue stripes shine">
            <span
              style={{
                width:
                  myPokemon[0].defense > 100
                    ? "100%"
                    : myPokemon[0].defense + "%",
              }}
              per={`${myPokemon[0].defense}`}
              className="defense"
            >
              {myPokemon[0].defense > 100 ? "100%" : myPokemon[0].defense + "%"}
            </span>
          </div>
        </div>

        {/*speed */}
        <div className="bar">
          <div className="info">
            <span>
              <img src={speed} className="imagenes" />
              Speed
            </span>
          </div>
          <div className="progress-bar orange stripes shine">
            <span
              style={{
                width:
                  myPokemon[0].speed > 100 ? "100%" : myPokemon[0].speed + "%",
              }}
              className="speed"
            >
              {myPokemon[0].speed > 100 ? "100%" : myPokemon[0].speed + "%"}
            </span>
          </div>
        </div>

        {/*happy*/}

        <div className="bar">
          <div className="info">
            <span>
              <img src={happy} className="imagenes" />
              Happy
            </span>
          </div>
          <div className="progress-bar green stripes shine">
            <span
              style={{
                width:
                  myPokemon[0].happiness > 200
                    ? "200%"
                    : myPokemon[0].happiness + "%",
              }}
              per={`${myPokemon[0].happiness}`}
              className="happiness"
            >
              {myPokemon[0].happiness > 100
                ? "100%"
                : myPokemon[0].happiness + "%"}
            </span>
          </div>
        </div>

        {/* weight */}

        <div className="bar">
          <div className="info">
            <span>
              <img src={weight} className="imagenes" />
              Weight
            </span>
          </div>
          <div className="heightAndWeight">
            <span>{myPokemon[0].weight / 10}kg</span>
          </div>
        </div>

        {/*height*/}

        <div className="bar">
          <div className="info">
            <span>
              <img src={height} className="imagenes" />
              Height
            </span>
          </div>
          <div className="heightAndWeight">
            <span>{myPokemon[0].height / 10}m</span>
          </div>
        </div>

        {/* description */}

        <div className="bar">
          <div className="info">
            <span>
              <img src={pokedex} className="imagenes" />
              Description:
            </span>
          </div>
          <div className="description">
            <span>{myPokemon[0].description}</span>
          </div>
        </div>

        {/* div de stats  abajo*/}
      </div>
      <div className="buttonConteiner">
        <Link to="/home">
          <button className="buttonDetail">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
