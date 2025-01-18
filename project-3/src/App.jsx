import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import Winner from "./components/Winner";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </Router>
  );
}

export default App;
