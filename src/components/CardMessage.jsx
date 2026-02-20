import { useFirestore } from "../hooks/useFirestore";
import "./CardMessage.css";

export default function CardMessage() {
  const { docs: messages } = useFirestore("messages");

  return (
    <div className="card-message">
      {messages &&
        messages.map((message) => (
          <div className="message">
            <p className="message__text">{message.textMessage}</p>
            <p className="message__author">{message.author}</p>
          </div>
        ))}
        <button className="card-message__btn">
          یکی دیگه
        </button>
    </div>
  );
}
