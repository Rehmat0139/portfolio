import React, { useState } from "react";
import './FlipCoin.css';
import Head from './image/Head.png'
import Tail from './image/Tail.png';

const FlipCoin = () => {
  const [isSwitch, setIsSwitch] = useState(true);
  const [headCounter, setHeadCounter] = useState(0);
  const [tailCounter, setTailCounter] = useState(0);
  const [flipTotal, setFlipTotal] = useState(0);
  const [display, setDisplay] = useState(false);

  const flip = () => {
    setDisplay(true);
    Math.random() < 0.5
      ? setIsSwitch(false, setHeadCounter((prev) => prev + 1))
      : setIsSwitch(true, setTailCounter((prev) => prev + 1));

    setFlipTotal((prev) => prev + 1);

    if (flipTotal === 10) {
      setFlipTotal(0);
      setHeadCounter(0);
      setTailCounter(0);
      setDisplay(false);
    }
  };

  return (
    <div className="Flip ">
      <Title title="Lets Flip the Coin.!" />

      <Coin switch={isSwitch} display={display}  Head={Head} Tail={Tail}/>

      <Button method={flip} titleBtn="Flip Me" />

      <ResultPanel tHeads={headCounter} tTails={tailCounter} tFlips={flipTotal} />
    </div>
  );
};

export default FlipCoin;

function Title({ title }) {
    return <h1 className='Flip'>{title}</h1>;
  }
  
  function Coin({ switch: isSwitch, display, Head, Tail }) {
    return (
      <img
        src={isSwitch ? Tail : Head} 
        style={{ display: display ? "block" : "none" }}
        alt=""
      />
    );
  }
  

  function Button ({titleBtn, method}) {
    return (
        <button className="FlipBtn" onClick={method}>
        {titleBtn}
      </button>
    )
  }

  function ResultPanel({tHeads,tFlips,tTails}){
    return (
        <p className="flipP">
          Total of {tFlips}, there have been {tHeads} heads and {tTails} tails.
        </p>
      );
  }


  
  