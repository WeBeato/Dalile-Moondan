import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SavedMessages from "./pages/SavedMessages";
import { useState } from "react";

function App() {
  const [savedMessages, setSavedMessages] = useState([]);

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                savedMessages={savedMessages}
                setSavedMessages={setSavedMessages}
              />
            }
          />
          <Route
            path="/saved-messages"
            element={
              <SavedMessages
                savedMessages={savedMessages}
                setSavedMessages={setSavedMessages}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
