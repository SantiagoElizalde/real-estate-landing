import React from "react";

const Price = ({ price = 0, classes }) => {
  return (
    <div id="Price" className={`${classes || ""} fontExtraBold`}>
      {price > 0 ? `U$S${price.toLocaleString()}` : "No data"}
    </div>
  );
};

export default Price;
