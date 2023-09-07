import React from "react";
import { Link } from "react-router-dom";

const WebComp = () => {
  const webArray = [
    {
      id: 1,
      name: "E-commerce",
      imgUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      description: "lorem ipsum dolor sit am id, consectetur adip",
    },
    {
      id: 2,
      name: "E-courses",
      imgUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      description: "lorem ipsum dolor sit am id, consectetur adip",
    },
  ];

  return (
    <>
      <div>
        {webArray.map((item) => {
          return (
            <div className="container-fluid row">
              <div
                className="col-md-6 d-flex flex-column justify-content-center align-items-center"
                style={{ border: "1px solid red" }}
              >
                <h1>{item.name}</h1>
                <Link to={`/portfolio/Project/WebComp/${item.id}`}>
                  <img src={item.imgUrl} alt="..." />
                </Link>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WebComp;
