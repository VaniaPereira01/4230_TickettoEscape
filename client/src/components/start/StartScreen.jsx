import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import logo from "../../data/Logo.png";

export const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <div className="logo-container">
          <img src={logo} alt="Ticket to Escape Logo" />
        </div>
        <div className="form-box">
          <button onClick={() => navigate("/new")}>Neues Spiel</button>
          <button onClick={() => navigate("/join")}>Spiel beitreten</button>
          <button onClick={() => navigate("/rules")}>Spielregeln</button>
        </div>
      </div>
    </div>
  );
};
