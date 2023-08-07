import React from "react";
import "./FloatingButton.css";

const FloatingButton = () => {
  const socialMediaLinks = [
    {
      name: "Phone",
      url: "tel:+91-7506000139", 
      icon: "bi bi-telephone", 
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/rehmat.shaikh.399",
      icon: "bi bi-facebook",
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+91-7506000139",
      icon: "bi bi-whatsapp",
    },
    {
      name: "Github",
      url: "https://github.com/Rehmat0139",
      icon: "bi bi-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rehmat-shaikh-842105270/",
      icon: "bi bi-linkedin",
    },

    {
      name: "Twitter",
      url: "https://twitter.com/Rehmatshaikh69/",
      icon: "bi bi-twitter",
    },
  ];

  return (
    <div className="floating-button-container animate__animated animate__backInDown">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-button"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default FloatingButton;