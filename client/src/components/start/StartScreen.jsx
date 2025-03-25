import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";
import logo from "../../data/Logo.png"; // Pfad ggf. anpassen

export const StartScreen = (props) => {
  const navigate = useNavigate();

  return (
    <div className="startscreen">
      <div className="card">
        <div className="logo-container">
          <img src={logo} alt="Ticket to Escape Logo" />
        </div>
        <div className="button-container">
          <button onClick={() => navigate("/new")}>Neues Spiel</button>
          <button onClick={() => navigate("/join")}>Spiel beitreten</button>
          <button onClick={() => navigate("/rules")}>Spielregeln</button>
        </div>
      </div>
    </div>
  );
};
