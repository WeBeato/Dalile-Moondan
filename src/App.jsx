import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import SavedMessages from "./pages/SavedMessages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-messages" element={<SavedMessages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
