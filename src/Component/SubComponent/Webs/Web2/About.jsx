import React from "react";
import "./Web2style.css";

const About = () => {
  const aboutContent = [
    {
      id: 1,
      icon: "fas fa-dumbbell fa-5x mb-4 iconStyle",
      boxHeading: "Strength Training",
      desc: " At Fitness Fusion, we prioritize strength training as a core component of our fitness programs. Our state-of-the-art equipment and certified trainers will help you build the strength you need to reach your fitness goals. ",
    },
    {
      id: 2,
      icon: "fas fa-heartbeat fa-5x mb-4 iconStyle",
      boxHeading: "Wellness",
      desc: " We believe in a holistic approach to wellness. Join our wellness workshops, practice yoga, and explore mindfulness techniques to achieve a balanced and healthy lifestyle.",
    },
    {
      id: 3,
      icon: "fas fa-users fa-5x mb-4 iconStyle",
      boxHeading: "Community",
      desc: `Fitness Fusion isn't just a gym it's a supportive community Connect with fellow members, participate in group challenges, and experience the motivation that comes from being part of our fitness family.`,
    },
    {
      WhatWeDo: [
        {
          id: 1,
          head: "Expert Guidance:",
          desc: "Our certified trainers are dedicated to helping you reach your fitness goals, providing personalized workout plans, and offering nutritional advice.",
        },
        {
          id: 2,
          head: "Variety of Classes:",
          desc: `Explore a wide range of fitness classes, from high-intensity interval training (HIIT) to yoga, ensuring there's somethingfor everyone.`,
        },
        {
          id: 3,
          head: "Cutting-Edge Equipment:",
          desc: `  Train with the latest fitness equipment to optimize your
          workouts and enhance your results.
        `,
        },
        {
          id: 4,
          head: "Community Support:",
          desc: `       Join a supportive community of like-minded individuals who
          share your commitment to health and fitness. Engage in group
          challenges, meet workout buddies, and make fitness a
          lifestyle.
   `,
        },
        {
          id: 5,
          head: "Wellness Services:",
          desc: `    Beyond physical fitness, we offer wellness services such as
          massage therapy, nutrition counseling, and mindfulness
          workshops to help you achieve a holistic sense of
          well-being.
`,
        },
        {
          id: 6,
          head: "Flexible Memberships:",
          desc: `   Choose from a variety of membership options to fit your
          schedule and budget. We're committed to making fitness
          accessible to everyone.
      `,
        },
      ],
    },
  ];

  const whatWeDoListItems = aboutContent[aboutContent.length - 1].WhatWeDo.map(
    (ele) => (
      <li key={ele.id}>
        <strong>{ele.head} </strong> {ele.desc}
      </li>
    )
  );

  return (
    <>
      <div className="p-5 mission" id="about">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col m-4">
              <h1 className="display-4 mb-4 text-white">About Us</h1>
              <div className="underline mb-4"></div>
              <p className="text-secondary">
                At Fitness Fusion, we believe in the power of combining strength
                training, cardio, and holistic wellness to create a well-rounded
                fitness experience. Our state-of-the-art facility is designed to
                cater to individuals of all fitness levels, from beginners to
                seasoned athletes.{" "}
              </p>
            </div>

            <div className="row my-5">
              {aboutContent.map((ele) => (
                <div className="col-md-4 text-center mb-4" key={ele.id}>
                  <i className={ele.icon}></i>
                  <h1 className="text-light mb-3">{ele.boxHeading} </h1>
                  <p className="text-secondary">{ele.desc} </p>
                </div>
              ))}
            </div>
          </div>

          <div className="container">
            <div className="row align-align-items-center">
              <div className="col-lg-5 text-center">
                <img
                  src="https://images.unsplash.com/photo-1581907311151-269c63717997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Logo"
                  width="350"
                  className="img-fluid camera-img"
                  data-aos="slide-right"
                />
              </div>
              <div className="col-lg-7 text-lg-end text-center mission-text text-light">
                <h1>We know what we do</h1>
                <ol className="text-secondary">{whatWeDoListItems} </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
