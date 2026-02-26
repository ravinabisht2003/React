import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        alt=""
      />
      <h1>{props.user}</h1>
      <p>{props.intr}</p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
