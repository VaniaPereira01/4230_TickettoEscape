import React, { useState } from "react";
import "./JoinGame.css";
import logo from "../../data/Logo.png"; // Adjust the path based on your folder structure

export const JoinGame = () => {
  const [gameId, setGameId] = useState("");

  const handleJoin = () => {
    // Your join logic here
    alert(`Joining game with ID: ${gameId}`);
  };

  return (
    <div className="joingame">
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
