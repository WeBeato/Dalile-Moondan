import { useState } from "react";
import "./SendMessageForm.css";

export default function SendMessageForm({ setIsOpen }) {
  const [textMessage, setTextMessage] = useState("");
  const [author, setAuthor] = useState("یک دوست");

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      textMessage,
      author,
    };

    console.log(message);
    setIsOpen(false);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <form className="form" onSubmit={handleSubmit}>
        <h3>یه پیام برای کسی که حالش خوب نیست</h3>
        <textarea
          placeholder="هرچیزی که دوست داشتی یکی بهت بگه..."
          onChange={(e) => setTextMessage(e.target.value)}
          value={textMessage}
          required
        ></textarea>

        <label className="form__label">
          <span>اسم شما (اختیاری):</span>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <p>* پیام ها قبل از نمایش بررسی می‌شوند. *</p>

        <button>ارسال پیام</button>
      </form>
    </div>
  );
}
