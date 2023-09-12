import React from "react";
// import camera1 from "../../../../images/camera1.png";

const JoinUs = () => {
  return (
    <>
      <div className="contact p-5 bg-dark">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="row">
              <div className="col m-2">
                <h1 className="display-4 mb-4 text-light">Join Us</h1>
                <div className="underline mb-4 border-light"></div>
              </div>
            </div>

            <div className="row">
              <form className="col-lg-6 text-start p-3 text-white d-flex flex-column align-items-center">
                <div className="form-group w-100 p-3 mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    className="form-control input"
                    id="name"
                    aria-describedby="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group w-100 p-3 mb-2">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input
                    type="email"
                    className="form-control input"
                    id="exampleInputPassword1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-check p-3 ps-4 mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Announcement
                  </label>
                </div>
                <button className="btn btn-form tw-bold text-white w-75">
                  Subscribe
                </button>
              </form>

              <div className="text-white col-lg-6">
                <img
                  src='https://png.pngitem.com/pimgs/s/121-1210682_dumbbell-png-transparent-images-hex-dumbbells-png-download.png'
                  className="img-fluid drone"
                  width="450"
                  style={{mixBlendMode:'multiply'}}
                  alt="drone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
