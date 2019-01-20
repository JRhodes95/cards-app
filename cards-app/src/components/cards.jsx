import React from "react";
import Card from "./card";

const Cards = props => {
  const { cards } = props;
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Value</th>
            <th>Suit</th>
          </tr>
        </thead>
        <tbody>
          {cards.map(card => (
            <Card key={card.index} value={card.value} suit={card.suit} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Cards;
