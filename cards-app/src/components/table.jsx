import React, { Component } from "react";

import Deck from "./deck";
import Hand from "./hand";
import generateDeck from "../utils/generateDeck";
import shuffleArray from "../utils/shuffleArray";
import drawItems from "../utils/drawItems";
import DrawInput from "./drawInput";

class Table extends Component {
  state = { deck: generateDeck(), hand: [], noCards: 1 };

  handleShuffle = () => {
    let { deck } = this.state;
    this.setState(shuffleArray(deck));
  };

  handleDraw = () => {
    let { deck, noCards, hand } = this.state;
    try {
      let { newData, result } = drawItems(deck, noCards);
      let newHand = hand.concat(result);
      this.setState({ deck: newData, hand: newHand });
    } catch (e) {
      alert(
        "Cannot draw that many cards as there are not that many in the deck!"
      );
    }
  };

  handleChange = event => {
    this.setState({ noCards: event.target.value });
  };

  handleSort = () => {
    var { hand } = this.state;
    hand.sort(function(a, b) {
      var x = a["index"];
      var y = b["index"];
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.setState({ hand });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => this.handleShuffle()}
              >
                Shuffle Deck
              </button>
            </div>
            <div className="col">
              <DrawInput
                noCards={this.state.noCards}
                onChange={this.handleChange}
                onDraw={this.handleDraw}
                onSort={this.handleSort}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Deck cards={this.state.deck} />
            </div>
            <div className="col">
              <Hand cards={this.state.hand} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
