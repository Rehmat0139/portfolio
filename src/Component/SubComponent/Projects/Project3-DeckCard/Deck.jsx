import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import "./Deck.css";

const base_URL = "https://deckofcardsapi.com/api/deck";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const deckData = await axios.get(`${base_URL}/new/shuffle`);
      setDeck(deckData.data);
    };
    fetchDeck();
  }, []);

  const handleClick = async () => {
    const deckId = deck.deck_id;
    try {
      const cardUrl = `${base_URL}/${deckId}/draw/`;
      const cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No card remaining!");
      }
      const card = cardRes.data.cards[0];
      setDrawn((prevDrawn) => [
        ...prevDrawn,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`,
          transform: transformCard(),
        },
      ]);
    } catch (err) {
      alert(err);
    }
  };

  const transformCard = () => {
    const angle = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    return transform;
  };

  const cards = drawn.map((c) => (
    <Card key={c.id} imgSrc={c.image} imgAlt={c.name} transform={c.transform} />
  ));

  return (
    <div className="container-fluid bg-dark">
      <div className="container Deck">
        <div className=" d-flex flex-column m-5 align-items-around ">
          <div>
            <h1
              style={{ fontFamily: '"Slabo 27px", serif' }}
              className="Deck-title"
            >
              Card Dealer
            </h1>
            <h2
              style={{ fontFamily: '"Slabo 27px", serif' }}
              className="Deck-title subtitle"
            >
              Deck of Cards
            </h2>
          </div>
          <div className="Deck-cardArea">{cards}</div>
          <button
            className="Deck-btn"
            style={{ fontWeight: 600, fontFamily: '"Slabo 27px", serif',position:'absolute',bottom:'40px' }}
            onClick={handleClick}
          >
            GIMME A CARD!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
