import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export default function PokemonContextProvider({ children }) {
  const [pokeId, setPokeId] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState(null);
  const [ability, setAbility] = useState(null);
  const [img, setImg] = useState("");
  const [type, setType] = useState(null);

  const state = {
    pokeId,
    setPokeId,
    pokemon,
    setPokemon,
    ability,
    setAbility,
    img,
    setImg,
    name,
    setName,
    type,
    setType,
  };

  return (
    <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>
  );
}
