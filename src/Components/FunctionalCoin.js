import React, { useEffect, useState } from "react";
import axios from "axios";
import { udata } from "./response";

const FunctionalCoin = () => {
  var coins = [{ cName: "Coin Base", rate: udata.data.amount }];
  // var coinsp;
  const [amt1, setAmt1] = useState("");
  const [name1, setName1] = useState("");
  const [amt2, setAmt2] = useState("");
  const [name2, setName2] = useState("");
  const [rCoins, setrCoins] = useState(coins);

  const Higher = () => {
    coins = coins.sort((a, b) => {
      if (parseFloat(a.rate) > parseFloat(b.rate)) {
        return -1;
      }
      if (parseFloat(a.rate) < parseFloat(b.rate)) {
        return 1;
      }
    });
    console.log(coins);
    setrCoins(coins);
  };
  const Lower = () => {
    coins.sort((a, b) => {
      if (parseFloat(a.rate) < parseFloat(b.rate)) {
        return -1;
      }
      if (parseFloat(a.rate) > parseFloat(b.rate)) {
        return 1;
      }
    });
    console.log(coins);
    setrCoins(coins);
  };
  const req1 = axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
  const req2 = axios.get("https://api.coincap.io/v2/assets");
  useEffect(() => {
    axios
      .all([req1, req2])
      .then(
        axios.spread((...responses) => {
          const response1 = responses[0];
          const response2 = responses[1];
          let rate = response1?.data?.bpi?.USD?.rate;
          let price1 = parseFloat(rate.replace(/\,/g, "")).toFixed(2);

          setAmt1(price1);
          setName1("Coin Desk");
          let desiredCoin = response2?.data?.data?.filter(
            (c) => c.id === "usd-coin"
          );
          let price2 = parseFloat(desiredCoin[0].supply).toFixed(2);
          setAmt2(price2);
          setName2("Coin Cap");
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);
  coins = [
    ...coins,
    { cName: name1, rate: amt1 },
    { cName: name2, rate: amt2 },
  ];
  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <ul>
          {rCoins?.map((coin, index) => {
            return (
              <li key={index}>
                {coin.cName} :- {coin.rate} USD
              </li>
            );
          })}
        </ul>
      </div>

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
          onClick={Higher}
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
          onClick={Lower}
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
};

export default FunctionalCoin;
