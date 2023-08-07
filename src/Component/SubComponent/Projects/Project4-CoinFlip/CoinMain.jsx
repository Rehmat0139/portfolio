import React from "react";
import { Link } from "react-router-dom";

const CoinMain = () => {
  return (
    <>
      <div className="container-fluid" style={{background:' #f6e27a'}}>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <h1 style={{ fontWeight: 800 }}>FLIP COIN</h1>
            <p>
              The Coin Flip Game is a fun and interactive web application built
              using React, allowing users to play a virtual coin flip game. The
              main objective of the project is to simulate the randomness of a
              coin toss and let the user guess the outcome - either "Heads" or
              "Tails."
            </p>
            <Link to='/portfolio/Project/project4-CoinFlip/Flip-Coin'>
              <img
                src="https://images.unsplash.com/photo-1587403335644-fa8fef06b261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                alt=""
                style={{ height: "350px" }}
              />
            </Link>
            <h3>
              Try It Now And guess the outcome - either "Heads" or "Tails."
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinMain;
