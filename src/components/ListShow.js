import React from "react";
import { useSelector } from "react-redux";

export default function ListShow() {
  const dataArr = useSelector((state) => state.data);
  console.log(dataArr);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {dataArr.map(
        ({
          id,
          name,
          image,
          price,
          productName,
          inStock,
          level,
          fastDelivery,
        }) => (
          <div
            key={id}
            style={{
              borderRadius: "0 0 0.5rem 0.5rem",
              textAlign: "center",
              maxWidth: "20%",
              padding: "0 0 1rem",
              overflow: "hidden",
              boxShadow: "5px 5px 10px 3px gray",
            }}
          >
            <img src={image} width="100%" height="auto" alt={productName} />
            <h3> {name} </h3>
            <div>Rs. {price}</div>
            {inStock && <div> In Stock </div>}
            {!inStock && <div> Out of Stock </div>}
            <div>{level}</div>
            {fastDelivery ? (
              <div> Fast Delivery </div>
            ) : (
              <div> 3 days minimum </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
