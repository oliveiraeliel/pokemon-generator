import React from "react";
import "./App.css";

import { Card, Button } from "./components/index";
import PokemonContextProvider from "./contexts/PokemonContext";

export function App() {
  return (
    <div >
      <PokemonContextProvider>
        <Card />
        <Button />
      </PokemonContextProvider>
    </div>
  );
}
