import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import { useState } from "react";
import Home from "./pages/Home";
import SavedMessages from "./pages/SavedMessages";
import ReviewMessages from "./pages/ReviewMessages";

function App() {
  const [savedMessages, setSavedMessages] = useState(() => {
    const stored = localStorage.getItem("savedMessages");
    return stored ? JSON.parse(stored) : [];
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    const stored = localStorage.getItem("isAdmin");
    return stored ? JSON.parse(stored) : false;
  });

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
                isAdmin={isAdmin}
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
          <Route
            path="/webeato-admin/review-pending-messages"
            element={
              <ReviewMessages isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
