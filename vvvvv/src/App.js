import "./App.css";

import React, { Component } from "react";

import FunctionalCoin from "./Components/FunctionalCoin";
import Coin from "./Components/coin";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Coin /> */}
        <FunctionalCoin />
        {/* <Fun />
        <CoinData /> */}
      </div>
    );
  }
}

export default App;
