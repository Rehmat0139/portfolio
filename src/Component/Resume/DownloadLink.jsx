import React from "react";

const DownloadLink = ({ myResume }) => {
  const styleContent = {
    position: "fixed",
    top: "30px",
    right: "20px",
    zIndex: "1000",
    fontWeight: "700",
    boxShadow: '2px 5px 2px black'
    // border:'3px solid red',
    // color:' white'
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = `/${myResume}`;
    link.download = myResume;
    link.click();
  };

  return (
    <button
      className="btn"
      style={styleContent}
      onClick={downloadImage}
    >
      Download Resume ! 😀
    </button>
  );
};

export default DownloadLink;
