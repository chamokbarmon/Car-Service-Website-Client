import React from "react";

import { Link } from "react-router-dom";

const Banar = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.carshop.com/media/carshop-og.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl mt text-slate-800 font-bold">
            Car Shop
          </h1>
          <p className="mb-5 italic">
            BDCarShop Is the Biggest Digital Online “Car Buy and Sell”
            Marketplace in Bangladesh. We Have the large Digital Cars Listing
            Inventory in BD.
          </p>
          <button className="btn btn-primary">
            <Link to="/buy">Buy Now</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banar;
