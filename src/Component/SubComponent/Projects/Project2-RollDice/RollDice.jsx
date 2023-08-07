import React, { useState } from "react";

const RollDice = () => {
  const diceFaces = [
    "bi bi-dice-1-fill",
    "bi bi-dice-2-fill",
    "bi bi-dice-3-fill",
    "bi bi-dice-4-fill",
    "bi bi-dice-5-fill",
    "bi bi-dice-6-fill",
  ];

  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(5);
  const [btnTitle, setBtnTitle] = useState("Roll Dice");
  const [dieShaking, setDieShaking] = useState("");

  const roll = () => {
    setBtnTitle("Rolling...");
    setDieShaking("rotate");

    setTimeout(() => {
      const newDie1 = Math.floor(Math.random() * 6);
      const newDie2 = Math.floor(Math.random() * 6);

      setDie1(newDie1);
      setDie2(newDie2);
      setBtnTitle("Roll Dice");
      setDieShaking("");
    }, 1000);
  };

  return (
    <div
      className="DIE d-flex justify-content-center align-items-center"
      style={{
        background: "url(https://images.unsplash.com/photo-1548175429-b3b9d408afd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="container d-flex flex-column text-center p-5"
        style={{
          width: "80vw",
        }}
      >
        <h1 className="title" style={{ fontWeight: 600 }}>
          Dice Game
        </h1>
        <div className="rollDice">
          <h1 style={{ fontSize: "8rem"}}>
            <i className={`${diceFaces[die1]} ${dieShaking}`}></i>
          </h1>
          <h1 style={{ fontSize: "8rem"}}>
            <i className={`${diceFaces[die2]} ${dieShaking}`}></i>
          </h1>
        </div>
        <div className=" d-flex justify-content-center mt-3">
          <button
            className="btn btnDice"
            onClick={roll}
            style={{
              fontWeight: 800,
              border: "5px solid maroon",
              color:'black',
              borderRadius: "2rem",
            }}
          >
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RollDice;
