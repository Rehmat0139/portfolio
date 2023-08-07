import React from "react";
import "./Vending.css";
import { AppContext } from "../../../../App";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DrinkComp = ({ img, Canprice, logo }) => {
  const { totalPrice, setTotalPrice, bottle, setBottle } =
    useContext(AppContext);
  const [price] = useState(Canprice);
  useEffect(() => {
    setTotalPrice(price);
  }, [price, setTotalPrice]);
  return (
    <>
        <div className="container-fluid d-flex Coke">
        <div className="Drinkcard d-flex flex-column">
          <img id="graphic" src={img} alt="..." height={400} />
          <h1>
            <span style={{ color: "red" }}>Cost of {bottle} can is</span> {totalPrice}{" "}
          </h1>
          <button
            className="btn btn-success m-2"
            onClick={() => {
              setTotalPrice(totalPrice + price);
              setBottle(bottle + 1);
            }}
          >
            Add +
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              setTotalPrice(totalPrice - price);
              setBottle(bottle - 1);
            }}
          >
            Remove -
          </button>
        </div>
        <div className="container-fluid my-5">
          <img src={logo} alt="..." height={250} />
          <h1>
            <span style={{ color: "red" }}>Number of Can you selected : </span>
            <span style={{ fontWeight: "bold" }}>{bottle}</span>
          </h1>
          <h1>Total Price of purchase : {totalPrice}</h1>
          <button className="btn btn-primary">
            <Link
              to="/portfolio/Project/project1-VendingMachine/Vending-Machine/Order-Placed"
              style={{ textDecoration: "none", color: "white" }}
            >
              Place Order
            </Link>
          </button>
        </div>
        <div className="">
        </div>
      </div>
    </>
  );
};

export default DrinkComp;
