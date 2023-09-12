import React from "react";

const Banner = () => {
  return (
    <>
      <div id="banner">
        <div className="text-light text-md-end text-center banner">
          <h1 className="display-4 banner-heading" data-aos="fade-up">
            Welcome to <span className="text-uppercase fw-bold" style={{color:'#E5D283'}}>Fitness</span>
            <span className="display-2 x fw-bold">+</span>
            <p className="lead banner-par fs-4">
              Where Strength Meets Wellness{" "}
            </p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
