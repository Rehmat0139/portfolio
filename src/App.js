import { Route, Routes } from "react-router";
import "./App.css";
import { useState, createContext } from "react";
import Home from "./Component/SubComponent/Home/Home";
import ProjectPage from "./Component/SubComponent/Projects/ProjectPage";
import AboutUs from "./Component/SubComponent/Aboutus/AboutUs";

// ---------------------Project1 Vending Machine--------------------
import VendingMain from "./Component/SubComponent/Projects/Project1-VendingMachine/VendingMain";
import Main from "./Component/SubComponent/Projects/Project1-VendingMachine/Main";
import Coca from "./Component/SubComponent/Projects/Project1-VendingMachine/Coca";
import Sprite from "./Component/SubComponent/Projects/Project1-VendingMachine/Sprite";
import Thumpsup from "./Component/SubComponent/Projects/Project1-VendingMachine/Thumpsup";
import Hell from "./Component/SubComponent/Projects/Project1-VendingMachine/Hell";
import Order from "./Component/SubComponent/Projects/Project1-VendingMachine/Order";

// ----------------------Project2 Roll Dice--------------------------------
import DiceMain from "./Component/SubComponent/Projects/Project2-RollDice/DiceMain";
import RollDice from "./Component/SubComponent/Projects/Project2-RollDice/RollDice";

// ------------------------Project3 Deck Card----------------------------
import DeckMain from "./Component/SubComponent/Projects/Project3-DeckCard/DeckMain";
import Deck from "./Component/SubComponent/Projects/Project3-DeckCard/Deck";

// -----------------------Project4 Flip Coin ------------------------
import CoinMain from "./Component/SubComponent/Projects/Project4-CoinFlip/CoinMain";
import FlipCoin from "./Component/SubComponent/Projects/Project4-CoinFlip/FlipCoin";

// -------------------------Project5 Daily TodoList------------------------
import TodoMain from "./Component/SubComponent/Projects/Project5-DailyTodo/TodoMain";
import TodoList from "./Component/SubComponent/Projects/Project5-DailyTodo/TodoList";

// -----------------------------Project6 Pokemon --------------------------------
import PokemonMain from "./Component/SubComponent/Projects/Project6-Pokemon/PokemonMain";
import Pokegame from "./Component/SubComponent/Projects/Project6-Pokemon/Pokegame";

// -------------------------------Candidate-Finder-------------------------------
import FindMain from "./Component/SubComponent/Projects/Project7-FindCandidates/FindMain";

// --------------------------------- Web -------------------------------
import WebComp from "./Component/SubComponent/Webs/WebComp";
import MainWeb2 from "./Component/SubComponent/Webs/Web2/MainWeb2";
import CardComp from "./Component/SubComponent/Projects/Project7-FindCandidates/CardComp";

//------------------------------- store web --------------------------------
import HomePage from "./Component/SubComponent/Webs/Web1/HomePage";
import { GlobalStateProvider } from "./Component/SubComponent/Webs/Web1/Global/GlobalState";
import ProductDetails from "./Component/SubComponent/Webs/Web1/ProductDetail";
import Cart from "./Component/SubComponent/Webs/Web1/Cart";

const AppContext = createContext(null);

function App() {
  const [totalPrice, setTotalPrice] = useState(null);
  const [bottle, setBottle] = useState(1);

  return (
    <div className="App">
      <GlobalStateProvider>
        {" "}
        <AppContext.Provider
          value={{ totalPrice, setTotalPrice, bottle, setBottle }}
        >
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/About" element={<AboutUs />} />
            <Route path="/portfolio/Project" element={<ProjectPage />} />

            {/* --------------------Vending Machines-------------------- */}

            <Route
              path="/portfolio/Project/project1-VendingMachine"
              element={<VendingMain />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine"
              element={<Main />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine/Coca"
              element={<Coca />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine/Sprite"
              element={<Sprite />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine/Thumpsup"
              element={<Thumpsup />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine/Hell"
              element={<Hell />}
            />
            <Route
              path="/portfolio/Project/project1-VendingMachine/Vending-Machine/Order-Placed"
              element={<Order />}
            />

            {/* -----------------------Roll Dice---------------------------------------- */}

            <Route
              path="/portfolio/Project/project2-RollDice"
              element={<DiceMain />}
            />
            <Route
              path="/portfolio/Project/project2-RollDice/Roll-Dice"
              element={<RollDice />}
            />

            {/* ----------------------------Deck Card---------------------------- */}

            <Route
              path="/portfolio/Project/project3-DeckCard"
              element={<DeckMain />}
            />
            <Route
              path="/portfolio/Project/project3-DeckCard/Deck"
              element={<Deck />}
            />

            {/* --------------------------------Flip Coin ------------------------------- */}

            <Route
              path="/portfolio/Project/project4-CoinFlip"
              element={<CoinMain />}
            />
            <Route
              path="/portfolio/Project/project4-CoinFlip/Flip-Coin"
              element={<FlipCoin />}
            />

            {/* -----------------------Daily Todo ------------------------------- */}

            <Route
              path="/portfolio/Project/project5-DailyTodo"
              element={<TodoMain />}
            />
            <Route
              path="/portfolio/Project/project5-DailyTodo/Daily-Todo"
              element={<TodoList />}
            />

            {/* ----------------------------------Pokemon---------------------------------- */}

            <Route
              path="/portfolio/Project/project6-Pokemon"
              element={<PokemonMain />}
            />
            <Route
              path="/portfolio/Project/project6-Pokemon/Pokemon-Game"
              element={<Pokegame />}
            />

            {/* -----------------------------FindMains------------------------ */}
            <Route
              path="/portfolio/Project/project7-Find-Candidate"
              element={<FindMain />}
            />
            <Route
              path="/portfolio/Project/project7-Find-Candidate/CardComp"
              element={<CardComp />}
            />

            {/* ----------------------------------- Web ------------------------------------- */}
            <Route path="/portfolio/Project/WebComp" element={<WebComp />} />
            <Route path="/portfolio/Project/WebComp/2" element={<MainWeb2 />} />

            {/* --------------------------Store Web ----------------------------- */}
            <Route path="/portfolio/Project/WebComp/1" element={<HomePage />} />
            <Route path="/portfolio/Project/WebComp/1/ProductDetails" element={<ProductDetails />} />
            <Route path="/portfolio/Project/WebComp/1/Cart" element={<Cart />} />

          </Routes>

        </AppContext.Provider>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
export { AppContext };
