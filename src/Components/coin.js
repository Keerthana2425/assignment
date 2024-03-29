import React, { Component } from "react";
import axios from "axios";
import { udata } from "./response";
class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [{ Cname: "Coin Base", rate: udata.data.amount }],
    };
    this.Higher = this.Higher.bind(this);
    this.lower = this.lower.bind(this);
  }
  Higher() {
    let high = this.state.coins.sort((a, b) => {
      if (parseFloat(a.rate) > parseFloat(b.rate)) {
        return -1;
      }
      if (parseFloat(a.rate) < parseFloat(b.rate)) {
        return 1;
      }
    });
    console.log(this.state.coins);
    this.setState({ coins: high });
  }

  lower() {
    let low = this.state.coins.sort((a, b) => {
      if (parseFloat(a.rate) < parseFloat(b.rate)) {
        return -1;
      }
      if (parseFloat(a.rate) > parseFloat(b.rate)) {
        return 1;
      }
    });
    this.setState({ coins: low });
    console.log(this.state.coins);
  }

  componentDidMount() {
    console.log("component did mount");
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((data) => {
        console.log(data);
        let rate = data.data.bpi.USD.rate;
        let price1 = parseFloat(rate.replace(/\,/g, "")).toFixed(2);
        this.setState({
          coins: [...this.state.coins, { Cname: "Coin Desk", rate: price1 }],
        });
      })
      .catch((err) => console.log(err));
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((data) => {
        let desiredCoin = data.data.data.filter((c) => c.id === "usd-coin");
        let price2 = parseFloat(desiredCoin[0].supply).toFixed(2);
        this.setState({
          coins: [...this.state.coins, { Cname: "Coin Cap", rate: price2 }],
        });
        console.log(this.state.coins);
      })
      .catch((err) => console.log(err));
  }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  render() {
    return (
      <div>
        <h4>Coin Data</h4>
        <ul>
          {this.state.coins.map((c, i) => {
            return (
              <li key={i}>
                company name: {c.Cname} - Rate-{c.rate}USD
              </li>
            );
          })}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "10%",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        >
          <button
            onClick={this.Higher}
            style={{
              color: "white",
              backgroundColor: "blueviolet",
              height: "5vh",
              width: "90px",
              border: "none",
              borderRadius: "19px",
              fontSize: "1.1rem",
            }}
          >
            High
          </button>
          <button
            onClick={this.lower}
            style={{
              color: "white",
              backgroundColor: "blueviolet",
              height: "5vh",
              width: "90px",
              border: "none",
              borderRadius: "19px",
              fontSize: "1.1rem",
            }}
          >
            Low
          </button>
        </div>
      </div>
    );
  }
}

export default Coin;
