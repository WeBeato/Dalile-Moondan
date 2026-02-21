import { useState } from "react";
import Header from "../components/Header";
import CardMessage from "../components/CardMessage";
import Footer from "../components/Footer";
import SendMessageForm from "../components/SendMessageForm";

export default function Home({ savedMessages, setSavedMessages }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />

      <CardMessage
        savedMessages={savedMessages}
        setSavedMessages={setSavedMessages}
      />
      <Footer setIsOpen={setIsOpen} />
      {isOpen && <SendMessageForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
