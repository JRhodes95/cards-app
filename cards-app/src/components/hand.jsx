import React from "react";
import Cards from "./cards";
import DrawInput from "./drawInput";

const Deck = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      <h2>Hand</h2>
      <DrawInput
        noCards={props.noCards}
        onChange={props.onChange}
        onDraw={props.onDraw}
        onSort={props.onSort}
      />
      {cards.length > 0 ? (
        <Cards cards={cards} />
      ) : (
        <h3>No cards to show, draw cards from the deck!</h3>
      )}
    </React.Fragment>
  );
};

export default Deck;
