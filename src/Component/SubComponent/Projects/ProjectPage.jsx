import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Allprojects = () => {
  const ProjArray = [
    {
      id: 1,
      path: "project1-VendingMachine",
      text: "VENDING MACHINE",
      caption: "Thirst Quencher Station: Sip, Savor, Repeat!",
      imgUrl:
        "https://images.unsplash.com/photo-1618506557292-ec1862b3c506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      path: "project2-RollDice",
      text: "ROLL DICE",
      caption: "Roll the Dice and Unleash the Fun! 🎲🎲",
      imgUrl:
        "https://images.unsplash.com/photo-1505855788694-023053764ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9sJTIwZGljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      path: "project3-DeckCard",
      text: "DECK CARDS",
      caption: "Shuffling Fun: Explore the Deck of Cards with React!",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1671683370315-87306b0faf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVjayUyMGNhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      path: "project4-CoinFlip",
      text: "COIN FLIP",
      caption: "Tossing Luck and Making Decisions!",
      imgUrl:
        "https://images.unsplash.com/photo-1589180176337-503fed4bcfe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    },
    {
      id: 5,
      path: "project5-DailyTodo",
      text: "DAILY TODO LIST",
      caption: " Manage Your Tasks with the React TODO List App!",
      imgUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 6,
      path: "project6-Pokemon",
      text: "POKEMON",
      caption: "Gotta Catch 'Em All: Discover the World of Pokémon with React!",
      imgUrl:
        "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      id: 7,
      path: "project7-Find-Candidate",
      text: "Find candidate",
      caption: "Filtering Jobs with Skill Selection",
      imgUrl:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectHover = (project) => {
    setActiveProject(project);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  const projCss = {
    overflowY: "scroll",
    height: "100vh",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Link to="/portfolio/Project/WebComp">
            <Button
              className="fixed-top d-flex justify-content-center align-items-center fs-3 fw-bold"
              style={{
                backgroundColor: "#444",
                fontFamily: "Brush Script MT",
                border: "2px #B3A492",
                height: "50px",
                color:'#D0D4CA'
              }}
            >
              See The Website I Made Here
            </Button>
          </Link>

          <div className="col-md-8" style={projCss}>
            <style>
              {`
          @keyframes slidein {
            from {background-position: top; background-size:3000px; }
            to {background-position: -100px 0px;background-size:2750px;}
          }

          body {
            background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
            background-size: cover;
            -webkit-animation: slidein 100s;
            animation: slidein 100s;

            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;

            -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;

            -webkit-animation-direction: alternate;
            animation-direction: alternate;
          }

          .center {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(75, 75, 250, 0.3);
            border-radius: 3px;
          }

          .center h1 {
            text-align: center;
            color: white;
            font-family: 'Source Code Pro', monospace;
            text-transform: uppercase;
          }
        `}
            </style>{" "}
            {ProjArray.map((item) => (
              <div
                style={{ marginTop: "40px" }}
                key={item.id}
                onMouseEnter={() => handleProjectHover(item)}
                onMouseLeave={handleProjectLeave}
              >
                <Link to={`/portfolio/Project/${item.path}`}>
                  <img
                    src={item.imgUrl}
                    alt="..."
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center my-3 my-md-0 d-flex justify-content-center align-items-center">
            <div>
              {activeProject ? (
                <>
                  <p
                    style={{
                      fontWeight: "600",
                      fontFamily: "Brush Script MT",

                      fontSize: "50px",
                    }}
                  >
                    {activeProject.text}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontFamily: "Brush Script MT",
                      fontSize: "20px",
                    }}
                  >
                    {activeProject.caption}
                  </p>
                </>
              ) : (
                <h2 style={{ fontFamily: "Brush Script MT" }}>
                  Point the cursor on the image and click on it
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allprojects;
