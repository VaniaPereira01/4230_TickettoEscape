import React from "react";
import "./JoinGame.css";
import logo from "../../data/Logo.png";  // Pfad ggf. anpassen

export const JoinGame = ({ gameId, setGameId }) => {
  const handleJoin = () => {
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
            onChange={(e) => setGameId(e.target.value)} // Aktualisiert die Spiel-ID
          />
          <button onClick={handleJoin}>Spiel beitreten</button>
        </div>
      </div>
    </div>
  );
};

