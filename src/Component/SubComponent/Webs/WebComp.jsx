import React from "react";
import { Link } from "react-router-dom";
import "./WebComp.css";

const UniqueCard = ({ title, body, imgUrl, id }) => {
  const previewStyle = {
    textDecoration:'none',
    color:'black',
    padding:'10px 40px',
    backgroundColor: '#fff',
    border: "none",
    borderRadius: "45px",
    boxShadow: "0px 8px 10px black inset",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
    fontWeight: "bold",
  }
  return (
    <body className="bodyCard">
      <div className="unique-card">
        <div className="unique-card-content d-flex flex-column align-items-center">
          <h2 className="unique-card-title">{title}</h2>
          <p className="unique-card-body">{body}</p>
          <img src={imgUrl} alt={title} className="unique-card-image" />
          <Link
            style={previewStyle}
            to={`/portfolio/Project/WebComp/${id}`}
          >
            Preview
          </Link>
        </div>
      </div>
    </body>
  );
};

const WebComp = () => {
  const webArray = [
    {
      id: 1,
      name: "E-commerce",
      imgUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      description: "Welcome  to my store",
    },
    {
      id: 2,
      name: "Fitness Fusion",
      imgUrl:
        "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Welcome to our GYM - FITNESS FUSION",
    },
  ];

  return (
    <div className="webcomp-container">
      {webArray.map((item) => (
        <UniqueCard
          key={item.id}
          title={item.name}
          imgUrl={item.imgUrl}
          body={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default WebComp;

