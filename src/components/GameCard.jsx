//components/GameCard.jsx

// this is gamecard
import React from "react";
import "../App.css"; 

function GameCard({ imageSrc, title, playerCount }) {
  return (
    <div className="gamecard">
      <img src={imageSrc} alt={title} />
      <h5>{title}</h5>
      <p>{playerCount}</p>
      <div className="registernow">
        <button>Register Now</button>
      </div>
    </div>
  );
}

export default GameCard;
