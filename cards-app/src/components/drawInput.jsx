import React from "react";

const DrawInput = props => {
  return (
    <React.Fragment>
      <div className="input-group">
        <input onChange={props.onChange} type="text" value={props.noCards} />
        <button className="btn btn-primary" onClick={props.onDraw}>
          Draw
        </button>
        <button className="btn btn-primary" onClick={props.onSort}>
          Sort
        </button>
      </div>
    </React.Fragment>
  );
};

export default DrawInput;
