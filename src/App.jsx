import "./App.css";
import Header from "./components/Header";
import CardMessage from "./components/CardMessage";
import Footer from "./components/Footer";
import { useState } from "react";
import SendMessageForm from "./components/SendMessageForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Header />
      <CardMessage />
      <Footer setIsOpen={setIsOpen} />
      {isOpen && <SendMessageForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
