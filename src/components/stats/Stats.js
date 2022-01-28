import React, { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";

import './Stats.css';

export default function Stats() {
    const {hp, defense, atack, sAtack, sDefense, speed} = useContext(PokemonContext);
    return (
        <div className="stats">
            <table>
                <tr>
                    <td className="a">HP</td>
                    <td>{hp}</td>
                </tr>
                <tr>
                    <td className="a">Defense</td>
                    <td>{defense}</td>
                </tr>
                <tr>
                    <td className="a">Atack</td>
                    <td>{atack}</td>
                </tr>
                <tr>
                    <td className="a">Special Atack</td>
                    <td>{sAtack}</td>
                </tr>
                <tr>
                    <td className="a">Special Defense</td>
                    <td>{sDefense}</td>
                </tr>
                <tr>
                    <td className="a">Speed</td>
                    <td>{speed}</td>
                </tr>
                
            </table>
        </div>
    )
}
