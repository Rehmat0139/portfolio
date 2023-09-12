import React, { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/18187615/pexels-photo-18187615/free-photo-of-men-lifting-weights-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "class",
    },
    {
      src: "https://images.pexels.com/photos/18187616/pexels-photo-18187616/free-photo-of-men-on-training-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "class",
    },
    {
      src: "https://images.pexels.com/photos/18204829/pexels-photo-18204829/free-photo-of-woman-exercising-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "class",
    },
    {
      src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "class",
    },
    {
      src: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "class",
    },
    {
      src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "event",
    },
    {
      src: "https://images.pexels.com/photos/12250460/pexels-photo-12250460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "event",
    },
    {
      src: "https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "event",
    },
    {
      src: "https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "event",
    },
    {
      src: "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "event",
    },
    {
      src: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/15373906/pexels-photo-15373906/free-photo-of-men-filming-weightlifting-at-gym.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=600",
      filter: "facility",
    },
    {
      src: "https://images.pexels.com/photos/12250460/pexels-photo-12250460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      filter: "facility",
    },
  ];

  return (
    <>
      <section className="py-5" id="gallery">
        <div className="container-fluid">
          <div className="row  text-center">
            <div className="col m-4">
              <h1 className="display-4 mb-4 text-dark">Gallery</h1>
              <div className="underline mb-4 border-dark"></div>
              <p className="lead fw-normal">
                Welcome to our vibrant gallery, where we invite you to step into
                the heart of our fitness fusion community. Our carefully curated
                collection of images captures the essence of what makes our gym
                truly special. From state-of-the-art facilities and invigorating
                workouts to transformative success stories and the spirit of
                camaraderie, our gallery offers a visual journey through the
                diverse aspects of our fitness haven.{" "}
              </p>
            </div>
            <ul className="list-inline text-center text-uppercase fw-bold my-4">
              <li
                className={`list-inline-item gallery-list-item ${
                  activeFilter === "All" ? "active-item" : ""
                }`}
                onClick={() => handleFilterClick("All")}
              >
                All<span className="mx-md-5 mx-3 text-muted">/</span>
              </li>
              <li
                className={`list-inline-item gallery-list-item ${
                  activeFilter === "facility" ? "active-item" : ""
                }`}
                onClick={() => handleFilterClick("facility")}
              >
                Facility Photos
                <span className="mx-md-5 mx-3 text-muted">/</span>
              </li>
              <li
                className={`list-inline-item gallery-list-item ${
                  activeFilter === "class" ? "active-item" : ""
                }`}
                onClick={() => handleFilterClick("class")}
              >
                Class and Training Sessions
                <span className="mx-md-5 mx-3 text-muted">/</span>
              </li>
              <li
                className={`list-inline-item gallery-list-item ${
                  activeFilter === "City" ? "active-item" : ""
                }`}
                onClick={() => handleFilterClick("event")}
              >
                Community and Events
              </li>
            </ul>

            <div className="container-fluid">
              <div className="d-flex flex-wrap justify-content-center">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`filter ${image.filter} ${
                      activeFilter === "All" || activeFilter === image.filter
                        ? ""
                        : "d-none"
                    }`}
                  >
                    <img
                      src={image.src}
                      data-tilt
                      data-tilt-scale="1.8"
                      data-tilt-speed="1000"
                      data-tilt-max="1"
                      transition="true"
                      width="310"
                      height="210"
                      alt={`gallery-img-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
