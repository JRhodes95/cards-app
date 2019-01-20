import React from "react";

const Card = props => {
  const { value, suit } = props;
  return (
    <tr>
      <td>{value}</td>
      <td>{suit}</td>
    </tr>
  );
};

export default Card;
