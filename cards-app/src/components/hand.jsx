import React from "react";
import Cards from "./cards";

const Deck = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      {cards.length > 0 ? (
        <Cards cards={cards} />
      ) : (
        <h3>No cards to show, draw cards from the deck!</h3>
      )}
    </React.Fragment>
  );
};

export default Deck;
