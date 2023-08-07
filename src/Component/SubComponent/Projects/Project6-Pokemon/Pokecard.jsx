import React from 'react';
import './PokeCard.css';

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/ditto';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
  const imgSrc = `${POKE_API} ${padToThree(props.id)}.png`;

  return (
    <div className='Pokecard'>  
      <h1 className='Pokecard-title'>{props.name}</h1>
      <div className='Pokecard-image'>
        <img src={imgSrc} alt={props.name} />
      </div>
      <div className='Pokecard-data'>Type: {props.type}</div>
      <div className='Pokecard-data'>EXP: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
