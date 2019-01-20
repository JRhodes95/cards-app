import React from "react";
import Cards from "./cards";

const Deck = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      <h2>Deck</h2>
      <button className="btn btn-primary" onClick={props.onShuffle}>
        <i className="fas fa-random" /> Shuffle Deck
      </button>
      <Cards cards={cards} />
    </React.Fragment>
  );
};

export default Deck;
