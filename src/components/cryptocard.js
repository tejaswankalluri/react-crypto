import React, { useState } from "react";
export default function Cryptocard({ data }) {
  const [price, setPrice] = useState(parseFloat(data.price).toFixed(3));

  return (
    <div
      class="card m-3"
      style={{
        width: "18rem"
      }}
    >
      <img
        src={data.icon}
        class="card-img-top mt-3 m-auto"
        style={{
          width: "30%"
        }}
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{data.name}</h5>
        <p>
          <b>rank: {data.rank}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
        <a href={data.websiteUrl} class="btn btn-primary" target="_blank">
          Link
        </a>
      </div>
    </div>
  );
}
