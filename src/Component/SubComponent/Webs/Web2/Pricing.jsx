import React from "react";

const membershipOptions = [
  {
    title: "Monthly Membership",
    price: 17,
    features: [
      "Access to Gym Facilities",
      "Unlimited Fitness Classes",
      "Personal Training Sessions",
      "Nutrition Guidance",
    ],
  },
  {
    title: "Unlimited Membership",
    price: 2777,
    features: [
      "All-Inclusive Access",
      "Priority Scheduling",
      "Personalized Workouts",
      "Wellness Seminars",
    ],
  },
  {
    title: "Annual Membership",
    price: 177,
    features: [
      "Year-round Access",
      "Exclusive Workshops",
      "Fitness Assessments",
      "Nutritional Planning",
      
    ],
  },
];

const MembershipCards = () => {
  return (
    <>
      <div className="bg-light text-center p-5" id="pricing">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col m-4 text-center">
              <h1 className="display-4 mb-4 text-dark">Join Our Fitness Fusion</h1>
              <div className="underline mb-4 border-dark"></div>
              <p className="lead fw-normal">
                Welcome to Fitness Fusion, where we blend the best of both worlds - Gym and Fitness Classes - to help you achieve your fitness goals. Explore our membership options and embark on a journey to a healthier and happier you.
              </p>
            </div>

            {membershipOptions.map((option, index) => (
              <div className="col-lg-3" key={index}>
                <div className="card card-1 text-light py-4 my-4 mx-auto">
                  <div className="card-body">
                    <h5 className="text-uppercase fw-bold mb-5">{option.title}</h5>
                    <h1 className="display-4">
                      <i
                        className="fas fa-dollar-sign"
                        style={{ color: "#F40009" }}
                      ></i>{" "}
                      {option.price}
                    </h1>
                    <ul className="list-unstyled">
                      {option.features.map((feature, i) => (
                        <li className="fw-bold py-3 card-list-item" key={i}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/signup"
                      className="btn p-2 text-uppercase fw-bold signup text-light"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="my-5 text-center">
            <h2 className="text-muted mb-4">Thank You for Choosing Fitness Fusion</h2>
            <i className="fas fa-coffee fa-3x" style={{ color: "#F40009" }}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipCards;
