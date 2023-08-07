import React from "react";
import "./Vending.css";
import DrinkComp from "./DrinkComp";

const Coca = () => {
  return (
    <>
      <div className="Coca">
        <DrinkComp
          img="https://m.media-amazon.com/images/I/71tTYGmAMGL.jpg"
          Canprice={30}
          logo="https://cdn.mos.cms.futurecdn.net/8stH5QZQriowRdziYpK6SY-1200-80.jpg"
        />
      </div>
    </>
  );
};

export default Coca;
