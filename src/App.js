import "./App.css";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import React from "react";

export const KeyPress = React.createContext(null);

function App() {
  const [keyPress, setKeyPress] = React.useState(null);

  document.addEventListener("keydown", (ev) => {
    setKeyPress(ev);
  });

  document.addEventListener("keyup", (ev) => {
    setKeyPress(ev);
  });

  return (
    <KeyPress.Provider value={keyPress}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </KeyPress.Provider>
  );
}

export default App;
