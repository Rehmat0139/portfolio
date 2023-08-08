import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectHover = (project) => {
    setActiveProject(project);
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-8"
            style={{
              overflowY: "scroll",
              height: "100vh",
              backgroundImage:'url(https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwdHJhbnNwYXJlbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)'
            }}
          >
            {/* <Link to='/portfolio/Project/Websites'>
              <div className="d-flex justify-content-end m-3">
                <button style={webButtonStyle}>
                  Webs &rarr;
                </button>
              </div>
            </Link> */}
            {ProjArray.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleProjectHover(item)}
                onMouseLeave={handleProjectLeave}
              >
                <Link to={`/portfolio/Project/${item.path}`}>
                  <img
                    src={item.imgUrl}
                    alt="..."
                    style={{ width: "80%", objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
          <div style={{backgroundColor:'#ccc7c7'}} className="col-md-4 text-center my-3 my-md-0 d-flex justify-content-center align-items-center">
            <div>
              {activeProject && (
                <>
                  <p
                    style={{
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                      fontSize: "50px",
                    }}
                  >
                    {activeProject.text}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                    }}
                  >
                    {activeProject.caption}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allprojects;
