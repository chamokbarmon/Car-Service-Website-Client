import React from "react";
import { Link } from "react-router-dom";

const ALlShowCar = ({ car }) => {
  const {  name, description, _id } = car;
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "10px",
        backgroundImage:
          "url(https://i.ibb.co/N6zn98c/layered-waves-haikei-4.png)",
      }}
      className="card card-compact w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img className="h-64" src={car?.picture} alt="car" />
      </figure>
      <div className="card-body italic font-bold">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-center">
            <Link to={`/Carsoptions/${_id}`}>See All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ALlShowCar;

