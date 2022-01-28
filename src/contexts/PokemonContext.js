import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export default function PokemonContextProvider({ children }) {
  const [pokeId, setPokeId] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [name, setName] = useState(null);
  const [ability, setAbility] = useState(null);
  const [img, setImg] = useState("");
  const [type, setType] = useState(null);
  const [hp, setHp] = useState(null);
  const [atack, setAtack] = useState(null);
  const [defense, setDefense] = useState(null);
  const [sAtack, setSAtack] = useState(null);
  const [sDefense, setSDefense] = useState(null);
  const [speed, setSpeed] = useState(null);

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
    hp,
    setHp,
    defense,
    setDefense,
    atack,
    setAtack,
    sAtack,
    setSAtack,
    sDefense,
    setSDefense,
    speed,
    setSpeed,
  };

  return <PokemonContext.Provider value={state}>{children}</PokemonContext.Provider>;
}
