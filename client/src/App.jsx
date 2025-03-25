import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { StartScreen } from "./components/start/StartScreen"
import { JoinGame } from "./components/start/JoinGame"


function App() {
  return (
  <Routes>
    <Route path="/start" element={<StartScreen />} />
    <Route path="/join" element={<JoinGame />} />
  </Routes>
);

}

export default App;
