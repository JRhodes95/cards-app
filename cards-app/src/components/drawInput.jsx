import React from "react";

const DrawInput = props => {
  return (
    <React.Fragment>
      <label for="noCards">How many cards would you like to draw?</label>
      <div className="input-group">
        <input
          onChange={props.onChange}
          type="text"
          value={props.noCards}
          id="noCards"
        />
        <button className="btn btn-primary" onClick={props.onDraw}>
          <i className="fas fa-random" /> Draw
        </button>
        <button className="btn btn-primary" onClick={props.onSort}>
          <i className="fas fa-sort-amount-down" /> Sort
        </button>
      </div>
    </React.Fragment>
  );
};

export default DrawInput;
