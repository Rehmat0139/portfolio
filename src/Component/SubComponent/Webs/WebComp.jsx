import React from "react";
import { Link } from "react-router-dom";
import "./WebComp.css"; 

const WebComp = () => {
  const webArray = [
    {
      id: 1,
      name: "E-commerce",
      imgUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      description: "This website is not yet completed",
    },
    {
      id: 2,
      name: "Fitness Fusion",
      imgUrl:
        "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Welcome to out GYM - FITNESS FUSION",
    },
  ];

  return (
    <div className="webcomp-container">
      {webArray.map((item) => (
        <div className="webcomp-card" key={item.id}>
          <h1>{item.name}</h1>
          <Link to={`/portfolio/Project/WebComp/${item.id}`}>
            <img src={item.imgUrl} alt={item.name} />
          </Link>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WebComp;
