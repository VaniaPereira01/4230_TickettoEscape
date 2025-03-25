import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { StartScreen } from "./components/start/StartScreen"
import { JoinGame } from "./components/start/JoinGame"
import { CreateGame } from "./components/start/CreateGame"


function App() {

  const [gameId, setGameId] = useState("");
  const [duration, setDuration] = useState("");
  const [policeCount, setPoliceCount] = useState("");

  return (
  <Routes>
    <Route path="/start" element={<StartScreen />} />
    <Route
          path="/join"
          element={<JoinGame gameId={gameId} setGameId={setGameId} />}
    />
    <Route
        path="/new"
        element={
          <CreateGame
            duration={duration}
            setDuration={setDuration}
            policeCount={policeCount}
            setPoliceCount={setPoliceCount}
          />
        }
      />
  </Routes>
);

}

export default App;
