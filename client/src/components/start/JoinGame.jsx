import React from "react";
import "../../App.css";
import logo from "../../data/Logo.png";

export const JoinGame = ({ gameId, setGameId }) => {
  const handleJoin = () => {
    alert(`Joining game with ID: ${gameId}`);
  };

  return (
    <div className="page">
      <div className="card">
        <div className="logo-container">
          <img src={logo} alt="Ticket to Escape" />
        </div>

        <div className="form-box">
          <label htmlFor="gameId">Spiel ID</label>
          <input
            id="gameId"
            type="text"
            placeholder="1234"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <button onClick={handleJoin}>Spiel beitreten</button>
        </div>
      </div>
    </div>
  );
};
