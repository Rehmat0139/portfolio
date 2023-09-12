import React from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  const classContent = [
    {
      id: 1,
      imgSrc:
        "https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      text: "Strength Fusion",
      path:''
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      text: "HIIT Revolution",
      path:''
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      text: "Cardio Blast",
      paht:''
    },
  ];

  return (
    <>
      <div id="classes" className="bg-secondary py-4">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col m-4">
              <h1 className="display-4 mb-4 text-dark">Classes</h1>
              <div className="underline mb-4 border-dark"></div>
              <p className="lead fw-normal">
                Explore our wide range of fitness classes designed to help you
                achieve your fitness goals. Whether you're a beginner or an
                experienced athlete, we have the perfect class for you.
              </p>
            </div>

            <div className="row m-auto">
              {classContent.map((ele) => (
                <div className="col-lg-4 col-sm-6 my-3" key={ele.id}>
                  <div className="card border-0 card-shadow">
                    <img src={ele.imgSrc} alt="img" />
                    <Link>
                    <div className="card-img-overlay">
                      <h5 className="text-white text-uppercase fw-bold p-2 heading">
                        {ele.text}
                      </h5>
                    </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;
