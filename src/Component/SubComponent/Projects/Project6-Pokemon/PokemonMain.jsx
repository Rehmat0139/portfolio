import React from "react";
import { Link } from "react-router-dom";

const   PokemonMain = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
              <h1 style={{ fontWeight: "600" }}>POKEMON - GAME</h1>
              <p>
                Play a fun game within the app to determine which set of Pokemon
                would win in a battle. The app calculates and displays the total
                experience points for two sets of randomly generated Pokemon
              </p>
              <Link to='/portfolio/Project/project6-Pokemon/Pokemon-Game'>
                <img
                  src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  style={{height:'350px'}}
                />
              </Link>
              <h3>Give A Try And Win In The Game !</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonMain;
