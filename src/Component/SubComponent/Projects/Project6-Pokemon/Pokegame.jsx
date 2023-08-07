import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = ({ pokemon }) => {
  const hand1 = [];
  const hand2 = [...pokemon];

  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  console.log(exp1);
  console.log(exp2);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

Pokegame.defaultProps = {
  pokemon: [
    { id: 21, name: "CHARMENDER", type: "fire", base_experience: 62 },
    { id: 58, name: "SQUIRTLE", type: "water", base_experience: 25 },
    { id: 11, name: "METAPOD", type: "bug", base_experience: 78 },
    { id: 12, name: "BUTTERFREE", type: "flying", base_experience: 112 },
    { id: 25, name: "PIKACHU", type: "electric", base_experience: 45 },
    { id: 39, name: "JIGGLYPUFF", type: "normal", base_experience: 78 },
    { id: 94, name: "GENGER", type: "poison", base_experience: 94 },
    { id: 36, name: "RAICHU", type: "mental", base_experience: 75 },
  ],
};

export default Pokegame;
