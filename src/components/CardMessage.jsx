import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import "./CardMessage.css";
import { motion, AnimatePresence } from "framer-motion";

export default function CardMessage({ savedMessages, setSavedMessages }) {
  const { docs: messages, isLoading } = useFirestore("messages");
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

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
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2500);
  };

  useEffect(() => {
    localStorage.setItem("savedMessages", JSON.stringify(savedMessages));
  }, [savedMessages]);

  return (
    <motion.div className="card-message" layout="size">
      {isSaved && (
        <motion.div
          className="notif"
          initial={{ opacity: 0, x: "20px" }}
          animate={{ opacity: 1, x: "-20px" }}
        >
          <p>پیام سیو شد</p>
        </motion.div>
      )}
      {isLoading && <p>درحال دریافت پیام...</p>}
      <AnimatePresence mode="wait">
        {currentMessage && (
          <motion.div
            className="message"
            key={currentMessage.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ willChange: "opacity" }}
          >
            <p className="message__text">{currentMessage.textMessage}</p>
            <p className="message__author">{currentMessage.author}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="card-message__buttons">
        <button className="card-message__next" onClick={handleNext}>
          یکی دیگه
        </button>
        <button className="card-message__save" onClick={handelSave}>
          ذخیره پیام
        </button>
      </div>
    </motion.div>
  );
}
