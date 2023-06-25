import React from "react";
import random from "../../images/random.png";
import "./card.css";
export default function Card({ name, types, image, weight, height }) {
  return (
    <div className="card">
      <span className="name">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>

      {
        <img
          src={image ? image : random}
          alt="Img not found"
          height="190px"
          className="img"
        />
      }
      <span className="typetitle">Types</span>
      <div className="types">
        {types ? (
          types.map((el) => {
            return (
              <img
                src={`/images/types/${el}.png`}
                alt="Types"
                height="50px"
                key={el}
              />
            );
          })
        ) : (
          <span>Types not found</span>
        )}
      </div>

      <span className="aboutitle">About</span>
      <div className="about">
        <span className="pokweight">Weight: {weight / 10}kg</span>

        <img
          className="icon"
          src={"images/cards/weight.svg"}
          alt="Weight Icon"
        />

        <span className="pokheight">Height: {height / 10}m</span>
        <img
          className="icon"
          src={"images/cards/height.svg"}
          alt="Height Icon"
        />
      </div>
    </div>
  );
}
