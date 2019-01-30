import React from "react";
import Cards from "./cards";

const Deck = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      <h2>Deck</h2>

      {cards.length > 0 ? (
        <div>
          <button className="btn btn-primary" onClick={props.onShuffle}>
            <i className="fas fa-random" /> Shuffle Deck
          </button>
          <Cards cards={cards} />
        </div>
      ) : (
        <h3>No cards to show, the deck is empty!</h3>
      )}
    </React.Fragment>
  );
};

export default Deck;
