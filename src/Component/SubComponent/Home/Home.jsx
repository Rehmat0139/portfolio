import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import FloatingButton from "../../Button/FloatingButton";
import Resume from "../../Resume/Resume";
import myImg from "../../../images/myimg.png";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import AboutBtn from "../../SubComponent/Aboutus/AboutBtn";

const Home = () => {
  return (
    <section>
      <div
        className="container-fluid home p-5 d-flex align-items-center justify-content-center"
        style={{ width: "100%", minHeight: "100vh", position: "relative" }}
      >
        <AboutBtn />
        <Intro />
        <Resume />
        <FloatingButton />
        <div style={{ position: "relative" }}></div>
        <div className="row home_img">
          <div className="col d-flex align-items-center justify-content-center">
            <div className="center d-flex flex-column align-items-center justify-content-center p-2">
              <img
                className="animate__animated animate__backInDown"
                src={myImg}
                alt=""
              />
              <h1
              id="typed-text"
                className="myName animate__animated animate__backInDown text-center"
                style={{
                  fontSize: "60px",
                  fontWeight: "700",
                  color: "#16a085",
                }}
              >
                REHMAT SHAIKH
              </h1>
              <h3
                className="animate__animated animate__backInDown"
                style={{ fontWeight: "700", textAlign:'center' }}
              >
                FRONT END DEVELOPER
              </h3>
              <Link to="/portfolio/Project">
                <button className="btn home_btn">PROJECTS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

function Intro() {
  const isSmallScreen = window.innerWidth <= 576;
  const styleIntro = {
    position: "fixed",
    top: isSmallScreen ? "5px" : "100px",
    left: isSmallScreen ? "20px" : "50px",
    zIndex: "1000",
    display: "flex",
    alignItems: "flex-end",
  };

  const dropdownToggleStyle = {
    background: "#16a085",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "600",
  };

  const dropdownMenuStyle = {
    background: "#16a085",
    color: "#fffff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 10px",
    cursor: "pointer",
    minWidth: "80px",
  };

  const menu = [
    {
      id: 1,
      h1: "HTML",
    },
    {
      id: 2,
      h1: "CSS",
    },
    {
      id: 3,
      h1: "BOOTSTRAP",
    },
    {
      id: 4,
      h1: "JAVASCRIPT",
    },
    {
      id: 5,
      h1: "REACTJS",
    },
    {
      id: 6,
      h1: "JQUERY",
    },
    {
      id: 7,
      h1: "MYSQL",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleHover = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={styleIntro}>
        <Dropdown
          show={isMenuOpen}
          onMouseEnter={handleToggleHover}
          onMouseLeave={handleToggleHover}
          style={{ fontWeight: "600", fontSize: "5rem" }}
          className="animate__animated animate__backInDown"
        >
          <DropdownToggle style={dropdownToggleStyle}>SKILLS</DropdownToggle>
          <DropdownMenu style={dropdownMenuStyle}>
            {menu.map((item) => (
              <DropdownItem key={item.id}>{item.h1}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
