import React from "react";
import { useContext } from "react/cjs/react.development";
import { PokemonContext } from "../../contexts/PokemonContext";

import "./Card.css";

function Card() {
  const { name, img, ability, type } = useContext(PokemonContext);

  return (
    <div className="card">
        <img src={img} className="img"></img>
        <ul>
          <li>
            <h1>{name}</h1>
          </li>
          <li>
            {name ? "Ability:" : ""} <a>{ability}</a>
          </li>
          <li>
            {name ? "Type:" : ""} <a>{type}</a>
          </li>
        </ul>
      </div>
  );
}

export default Card;
