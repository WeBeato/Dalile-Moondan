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
      <div className="card-message__buttons">
        <button className="card-message__next">یکی دیگه</button>
        <button className="card-message__save">ذخیره پیام</button>
      </div>
    </div>
  );
}
