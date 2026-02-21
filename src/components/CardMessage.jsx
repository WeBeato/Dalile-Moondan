import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import "./CardMessage.css";

export default function CardMessage({ savedMessages, setSavedMessages }) {
  const { docs: messages, isLoading } = useFirestore("messages");
  const [currentMessage, setCurrentMessage] = useState(null);

  function getRandomInit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomMessage() {
    if (messages.length === 0) return null;

    if (messages.length === 1) {
      return messages[0];
    }

    let randomMessage;

    do {
      const messageIndex = getRandomInit(0, messages.length - 1);
      randomMessage = messages[messageIndex];
    } while (randomMessage.id === currentMessage?.id);

    return randomMessage;
  }

  useEffect(() => {
    if (messages.length > 0) {
      setCurrentMessage(getRandomMessage());
    }
  }, [messages]);

  const handleNext = () => {
    setCurrentMessage(getRandomMessage());
  };

  const handelSave = () => {
    if (savedMessages.some((message) => message.id === currentMessage.id))
      return null;

    setSavedMessages((prev) => [...prev, currentMessage]);
  };

  useEffect(() => {
    localStorage.setItem("savedMessages", JSON.stringify(savedMessages));
  }, [savedMessages]);

  return (
    <div className="card-message">
      {isLoading && <p>درحال دریافت پیام...</p>}
      {currentMessage && (
        <div className="message" key={currentMessage.id}>
          <p className="message__text">{currentMessage.textMessage}</p>
          <p className="message__author">{currentMessage.author}</p>
        </div>
      )}
      <div className="card-message__buttons">
        <button className="card-message__next" onClick={handleNext}>
          یکی دیگه
        </button>
        <button className="card-message__save" onClick={handelSave}>
          ذخیره پیام
        </button>
      </div>
    </div>
  );
}
