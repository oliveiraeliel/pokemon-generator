import React, { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";

import "./Button.css";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

export default function Button() {
  const {
    pokeId,
    setPokeId,
    pokemon,
    setPokemon,
    setAbility,
    setImg,
    setName,
    setType,

  } = useContext(PokemonContext);

  function handleClick() {
    setPokeId(Math.floor(Math.random() * 500) + 1);
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
        setAbility(pokemon.abilities[0].ability.name.capitalize());
        setImg(pokemon.sprites.other.dream_world.front_default);
        setName(pokemon.name.capitalize());

        setType(pokemon.types[0].type.name.capitalize());
        if(pokemon.types[1]) setType(pokemon.types[0].type.name.capitalize() + " + " + pokemon.types[1].type.name.capitalize());

        console.log(pokemon)
      });
  }, [pokeId]);

  return (
    <div>
      <button onClick={handleClick} className="button">
        Click to draw
      </button>
    </div>
  );
}
