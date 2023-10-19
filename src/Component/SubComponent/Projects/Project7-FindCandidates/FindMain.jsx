import React from "react";
import { Link } from "react-router-dom";

const FindMain = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
              <h1 style={{ fontWeight: "600" }}>
                Skill-Based Job Search Interface
              </h1>
              <p>
                This React application allows users to filter job listings based
                on selected skills. Users can choose skills, and the interface
                will display job listings that either match any of the selected
                skills (using the OR operator). The selected skills are
                displayed at the top, and users can clear their selections to
                start fresh. This application simplifies job searching by
                focusing on skills that matter most to the user.{" "}
              </p>
              <span className="fs-3 text-warning">Click The Image 👇</span>
         
              <Link to="/portfolio/Project/project7-Find-Candidate/CardComp">
                <img
                  src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  style={{ height: "350px" }}
                />
              </Link>
              <h3>SkillSearch: Your Path to Perfect Matches !</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindMain;
