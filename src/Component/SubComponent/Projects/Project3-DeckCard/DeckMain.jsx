import React from "react";
import { Link } from "react-router-dom";

const DeckMain = () => {
  
  const isSmallScreen = window.innerWidth <= 576;

  const mediaStyle ={
    marginTop : isSmallScreen ? '100px' : '',
    color: "rgb(94, 141, 141)"
  }
  return (
    <>
      <div
        className="container-fluid"
      >
        <div className="container" 
        style={mediaStyle}>
          <div className="row">
            <div
              style={{ height: "100vh" }}
              className="d-flex flex-column justify-content-center align-items-center p-3"
            >
              <h1 style={{ fontWeight: "600" }}>
                "Welcome to the Card Dealer React App! 🎴🃏"
              </h1>
              <p style={{ fontSize: "15px" }}>
                Immerse yourself in the excitement of a virtual deck of cards.
                Shuffle the deck and click the 'GIMME A CARD!' button to draw a
                random card. Watch as the cards appear on the screen with
                dynamic animations, adding an element of surprise to each draw.
                The deck is powered by the Deck of Cards API
              </p>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Link to='/portfolio/Project/project3-DeckCard/Deck'>
                  <img
                    src="https://images.unsplash.com/photo-1529480780361-c8cb81eb5735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                    style={{
                      height: "350px",
                      width: "auto",
                      maxWidth: "100%",
                    }}
                  />
                </Link>
                <div className="mt-3">
                  <h3>
                    Try it out now and see which card fate has in store for you!
                    🌟
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeckMain;
