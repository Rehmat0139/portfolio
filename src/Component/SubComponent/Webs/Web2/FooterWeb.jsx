import React from "react";

const footerLinks = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Classes", url: "/classes" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact", url: "/contact" },
];

const Footer = () => {
  return (
    <>
      <div className="px-5 text-start mass-primary">
        <div className="container-fluid">
          <div className="row text-light py-4">
            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">About Us</h5>
              <p className="small">
                At Fitness Fusion, we're passionate about helping you achieve your fitness goals. Our state-of-the-art facilities and expert trainers are here to support you on your fitness journey.
              </p>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h5 className="pb-3">Quick Links</h5>
              <ul className="list-unstyled">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="footer-link menu-item">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h5 className="pb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="footer-link menu-item">
                    customer service
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link menu-item">
                    online chat
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link menu-item">
                    support
                  </a>
                </li>
                <li>
                  <a href="mailto:info@fitnessfusiongym.com" className="footer-link menu-item">
                    info@fitnessfusiongym.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-sm-6">
              <h5 className="pb-3">Stay Connected</h5>
              <p className="small">
                Stay updated with the latest news, fitness tips, and promotions by subscribing to our newsletter.
              </p>
              <form className="mb-3">
                <div className="input-group">
                  <input
                    className="form-control input rounded-0 border-0"
                    placeholder="Email Address"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn rounded-0 tw-bold text-white"
                      style={{ background: "#F40009" }}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
