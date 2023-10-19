import React from "react";
import { Link } from "react-router-dom";

const VendingMain = () => {
  // const isSmallScreen = window.innerWidth <= 576;

  // const mediaStyle = {
  //   marginTop: isSmallScreen ? "100px" : "",
  //   color: "rgb(94, 141, 141)",
  // };
  return (
    <div className="container-fluid">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ color: "rgb(94, 141, 141)" }}
      >
        <div className="row">
          <div
            style={{ height: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center p-3"
          >
            <h1 style={{ fontWeight: "700" }}>
              Welcome to the Virtual Vending Machine! 🥤
            </h1>
            <p>
              Experience the ultimate convenience of modern vending in our
              React-powered project. Interact with a sleek user interface,
              select your beverages, and watch the magic happen as the machine
              delivers your cravings right before your eyes
            </p>

            <div className="d-flex flex-column justify-content-center align-items-center">
              <span className="fs-3 text-warning">Click The Image 👇</span>
              <Link to="/portfolio/Project/project1-VendingMachine/Vending-Machine">
                <img
                  src="https://images.unsplash.com/photo-1519944781502-4ac8148b55e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVuZGluZyUyMG1hY2hpbmUlMjBvZiUyMGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  style={{
                    height: "350px",
                    width: "auto",
                    maxWidth: "100%",
                  }}
                />
              </Link>
              <h3>Get Your Thirst Away With Our Drinks ! 🍷</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMain;
