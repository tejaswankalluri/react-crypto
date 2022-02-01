import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Cryptocard from "./components/cryptocard";

export default function App() {
  const [cryptodata, setCryptodata] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setpage] = useState(0);
  useEffect(() => {
    async function getdata() {
      const coindata = await fetch(
        `https://api.coinstats.app/public/v1/coins?skip=${page}&limit=50`
      );
      const resdata = await coindata.json();
      setCryptodata((prev) => [...prev, ...resdata.coins]);
    }
    getdata();
  }, [page]);

  const filteredCoins = cryptodata.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Navbar search={setSearch} />
      <div class="container">
        <div class="d-flex flex-row flex-wrap mt-4">
          {filteredCoins.map((crypto, key) => {
            return <Cryptocard data={crypto} key={key} />;
          })}
        </div>
        <button
          class="btn btn-success my-3 m-auto"
          style={{ width: "100%" }}
          onClick={() => setpage(page + 50)}
        >
          load more
        </button>
      </div>
    </>
  );
}
