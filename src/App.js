import React from "react";
import "./App.css";

import { Card, Button, Stats } from "./components/index";
import PokemonContextProvider from "./contexts/PokemonContext";

export function App() {
  return (
    <div>
      <PokemonContextProvider>
        <div className="container">
          <div className="main_card">
            <Card />
            <Button />
          </div>
          <div className="stats_bar">
            <Stats />
          </div>
        </div>
      </PokemonContextProvider>
    </div>
  );
}
