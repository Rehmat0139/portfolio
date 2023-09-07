import React, { useState } from "react";
import "./Card.css";
import { content } from "./Content/Content.js";
import { X } from "lucide-react";

const CardComp = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillButtonClick = (skill) => {
    setSelectedSkills((prevSkills) => [...prevSkills, skill]);
  };

  const removeSelectedSkill = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  const clearAllSelectedSkills = () => {
    setSelectedSkills([]);
  };

  const searchContent = content.filter(
    (ele) =>
      selectedSkills.length === 0 ||
      selectedSkills.some((selectedSkill) =>
        ele.skills.some((skill) =>
          skill.toLowerCase().includes(selectedSkill.toLowerCase())
        )
      )
  );

  const isSmallScreen = window.innerWidth <= 768;
  const homeStyle = {
    backgroundImage: isSmallScreen
      ? "none"
      : "url(https://img.freepik.com/free-vector/watercolor-emerald-background_23-2150238649.jpg)",
    width: "100%",
    height: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const skillBtn = {
    border: "none",
    backgroundColor: "#d4f5f1",
    margin: "5px",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#42837b",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={homeStyle}>
          <div className="col-md-12 header">
            <div className="selected-skills">
              {selectedSkills.map((skill) => (
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                    marginLeft: "8px",
                    border: "none",
                    padding: "8px 4px",
                    borderRadius: "5px",
                    alignItems: "center",
                  }}
                  key={skill}
                >
                  {skill}
                  <X onClick={() => removeSelectedSkill(skill)} />
                </button>
              ))}
              <button
                className="clear-button"
                style={{
                  position: "absolute",
                  right: 5,
                  top: 1,
                  border: "none",
                  borderRadius: "10px",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#42837b",
                }}
                onClick={clearAllSelectedSkills}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
        <div>
          {searchContent.map((ele) => (
            <div className="col-md-12" key={ele._id.$oid}>
              <div className="body-main">
                <div className="body-card">
                  <img
                    src={ele.companyImage}
                    alt={ele.company.companyName}
                    className="img-responsive"
                  />
                  <div className="card-inside">
                    <h3>{ele.company.companyName}</h3>
                    <p>{ele.jobTitle}</p>
                    <hr />
                    <p>
                      <span style={{ fontWeight: "600" }}>Address : </span>
                      {ele.formattedAddress}
                    </p>
                  </div>
                </div>
                <div className="skill-card">
                  <ul>
                    {ele.skills.map((skill, i) => (
                      <button
                        onClick={() => handleSkillButtonClick(skill)}
                        key={i}
                        style={skillBtn}
                      >
                        {skill}
                      </button>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComp;
