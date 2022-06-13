import "./App.css";

import React, { Component } from "react";
import Coin from "./Components/coin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Coin />
        {/* <BookList /> */}
      </div>
    );
  }
}

export default App;
