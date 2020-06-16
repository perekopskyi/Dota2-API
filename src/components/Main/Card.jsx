import React from "react";

const Card = ({ id, name, handleCardClick }) => (
  <div className="card" onClick={() => handleCardClick(id)}>
    {name}
  </div>
);

export default Card;
