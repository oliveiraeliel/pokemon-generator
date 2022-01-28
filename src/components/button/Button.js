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
    setHp,
    setDefense,
    setAtack,
    setSAtack,
    setSDefense,
    setSpeed,
  } = useContext(PokemonContext);

  function handleClick() {
    setPokeId(Math.floor(Math.random() * 880) + 1);
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemon(json);
        if (pokemon.sprites.other.dream_world.front_default === null) {
          handleClick();
          return;
        }

        setImg(pokemon.sprites.other.dream_world.front_default);
        setAbility(pokemon.abilities[0].ability.name.capitalize());
        setName(pokemon.name.capitalize());
        setHp(pokemon.stats[0].base_stat);
        setDefense(pokemon.stats[1].base_stat);
        setAtack(pokemon.stats[2].base_stat);
        setSAtack(pokemon.stats[3].base_stat);
        setSDefense(pokemon.stats[4].base_stat);
        setSpeed(pokemon.stats[5].base_stat);

        setType(pokemon.types[0].type.name.capitalize());
        if (pokemon.types[1])
          setType(
            pokemon.types[0].type.name.capitalize() +
              " + " +
              pokemon.types[1].type.name.capitalize()
          );
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
