import React from "react";

const DownloadLink = ({ myResume }) => {
  const styleContent = {
    position: "fixed",
    top: "30px",
    right: "20px",
    zIndex: "1000",
    fontWeight: "700",
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = `/${myResume}`;
    link.download = myResume;
    link.click();
  };

  return (
    <button
      className="btn border-dark"
      style={styleContent}
      onClick={downloadImage}
    >
      Download Resume ! 😀
    </button>
  );
};

export default DownloadLink;
