import React, { useContext } from "react";
import "./Vending.css";
import { AppContext } from "../../../../App";;

const Order = () => {
  const { totalPrice } = useContext(AppContext);
  const { bottle } = useContext(AppContext);

  return (
    <>
      <div
        className=" text-center"
        style={{
          backgroundImage: `url("https://media.tenor.com/G5gw4qidJ8sAAAAC/vending-machines-coca-cola.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <h2>Please Wait!!! 😀</h2>
        <h1>
          Your Order of <span style={{ color: "red" }}>{bottle}</span> Can has
          been Placed!
        </h1>
        <h2>
          Please Pay the Amount of{" "}
          <span style={{ color: "red" }}>{totalPrice}</span>
        </h2>
        <h4>Thank you 😁. Your order will be processed shortly.</h4>
      </div>
    </>
  );
};

export default Order;
