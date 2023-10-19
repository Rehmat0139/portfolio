import React from "react";
import { Link } from "react-router-dom";

const DiceMain = () => {
  const isSmallScreen = window.innerWidth <= 576;

  const mediaStyle = {
    marginTop: isSmallScreen ? "100px" : "",
    color: "rgb(94, 141, 141)",
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="container d-flex justify-content-center align-items-center"
          style={mediaStyle}
        >
          <div className="row">
            <div
              style={{ height: "100vh" }}
              className="d-flex flex-column justify-content-center align-items-center p-3"
            >
              <h1 style={{ fontWeight: "700" }}>
                Welcome to the exciting world of the Roll Dice React Project!
                🎲🎲
              </h1>
              <p>
                Are you ready to embrace the thrill of rolling the dice and
                letting fate decide your destiny? Look no further! This
                interactive web application is designed to bring joy,
                entertainment, and a dose of randomness to your day.
              </p>
              <div className="d-flex flex-column justify-content-center align-items-center">
              <span className="fs-3 text-warning">Click The Image 👇</span>
         
                <Link to="/portfolio/Project/project2-RollDice/Roll-Dice">
                  <img
                    src="https://images.unsplash.com/photo-1522069213448-443a614da9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9sJTIwZGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ height: "350px", width: "auto", maxWidth: "100%" }}
                    alt=""
                  />
                </Link>
                <h3>
                  So, what are you waiting for? Let the dice take control 🎲
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiceMain;
