import React, { Component } from "react";
import Table from "./components/table";
import Header from "./components/header";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
