import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="Container-fluid Main">
        <h1
          className="fw-bold text-danger"
          style={{
            fontWeight: "600",
            fontSize: "50px",
            padding: "40px",
          }}
        >
          Select Drink !!!
        </h1>
        <div className="container Machine d-flex justify-content-center flex-wrap">
          <Link to="/portfolio/Project/project1-VendingMachine/Vending-Machine/Coca" className="text-decoration-none">
            <img
              src="https://m.media-amazon.com/images/I/71tTYGmAMGL.jpg"
              alt="Coca-Cola"
            />
            <h1 style={{ color: "red", textAlign: "center" }}>Coca-Cola</h1>
          </Link>
          <Link
            to="/portfolio/Project/project1-VendingMachine/Vending-Machine/Sprite"
            className="text-decoration-none"
          >
            <img
              src="https://m.media-amazon.com/images/I/61slsTqQruL.jpg"
              alt="Sprite"
            />
            <h1 style={{ color: "green", textAlign: "center" }}>Sprite</h1>
          </Link>
          <Link
            to="/portfolio/Project/project1-VendingMachine/Vending-Machine/Thumpsup"
            className="text-decoration-none"
          >
            <img
              src="https://m.media-amazon.com/images/I/61yecBpCDhL.jpg"
              alt="Thumps-up"
            />
            <h1 style={{ textAlign: "center", color: "blue" }}>Thumps-up</h1>
          </Link>
          <Link to="/portfolio/Project/project1-VendingMachine/Vending-Machine/Hell" className="text-decoration-none">
            <img
              src="https://www.bigbasket.com/media/uploads/p/l/40141855_3-hell-energy-drink-classic.jpg"
              alt="Hell"
            />
            <h1 style={{ textAlign: "center", color: "red" }}>Hell</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
