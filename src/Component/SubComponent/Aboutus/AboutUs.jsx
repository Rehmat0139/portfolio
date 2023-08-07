import { CChart } from "@coreui/react-chartjs";
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section className="container-fluid" style={{backgroundColor:'#e6ffff', height:'100vh'}}>
        <section className="container d-flex flex-column justify-content-center align-items-center">
          <div className="col-md-12">
            <h1 style={{ fontWeight: 600, margin: 10 }}>Skills</h1>
            <CChart
              type="line"
              data={{
                labels: [
                  "HTML",
                  "CSS",
                  "BOOTSTRAP",
                  "JAVASCRIPT",
                  "REACT-JS",
                  "JQUERY",
                  "MYSQL",
                ],
                datasets: [
                  {
                    label: "My Skill set",
                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                    borderColor: "rgba(151, 187, 205, 1)",
                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                    pointBorderColor: "#fff",
                    data: [70, 65, 65, 65, 70, 40, 30, 100, 0],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: "black",
                    },
                  },
                },
                scales: {
                  x: {
                    grid: {
                      color: "black",
                    },
                    ticks: {
                      color: "black",
                      maxRotation: window.innerWidth <= 767 ? 90 : 0,
                      minRotation: window.innerWidth <= 767 ? 90 : 0,
                    },
                  },
                  y: {
                    height: window.innerHeight <= 576 ? "100%" : undefined,
                    grid: {
                      color: "black",
                    },
                    ticks: {
                      color: "black",
                      min: 10,
                      max: 100,
                      stepSize: 10,
                    },
                  },
                },
                height: window.innerWidth <= 767 ? 200 : undefined,
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
