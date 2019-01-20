import React from "react";
import Cards from "./cards";

const Deck = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      <Cards cards={cards} />
    </React.Fragment>
  );
};

export default Deck;
