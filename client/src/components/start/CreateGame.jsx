import React, { useState } from "react";
import "../../App.css";
import logo from "../../data/Logo.png";

export const CreateGame = ({ duration, setDuration, policeCount, setPoliceCount }) => {
  const handleCreateGame = () => {
    alert(`Spiel erstellt mit Dauer: ${duration} Stunden, Polizisten: ${policeCount}`);
  };

  return (
    <div className="page">
      <div className="card">
        <div className="logo-container">
          <img src={logo} alt="Ticket to Escape" />
        </div>

        <div className="form-box">
          <label htmlFor="duration">Spieldauer (Stunden)</label>
          <input
            id="duration"
            type="number"
            placeholder="z.B. 5"
            value={duration}
            min={1}
            max={10}
            onChange={(e) => setDuration(e.target.value)}
          />

          <label htmlFor="policeCount">Anzahl Polizisten</label>
          <input
            id="policeCount"
            type="number"
            placeholder="z.B. 2"
            value={policeCount}
            min={1}
            max={10}
            onChange={(e) => setPoliceCount(e.target.value)}
          />

          <button onClick={handleCreateGame}>Spiel erstellen</button>
        </div>
      </div>
    </div>
  );
};
