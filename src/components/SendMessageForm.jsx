import { useState } from "react";
import "./SendMessageForm.css";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

export default function SendMessageForm({ setIsOpen }) {
  const [textMessage, setTextMessage] = useState("");
  const [author, setAuthor] = useState("یک دوست");
  const [isLoading, setIsloading] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      textMessage,
      author: "از طرف " + author,
    };

    try {
      setIsloading(true);
      const ref = collection(db, "pendingMessages");
      await addDoc(ref, message);
      setIsloading(false);
      setIsSend(true);
      setTimeout(() => {
        setIsSend(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!isSend && (
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

            <button>{isLoading ? "درحال ارسال" : "ارسال پیام"}</button>
          </form>
        )}
        {isSend && (
          <div className="send">
            <p>♡ پیامت ثبت و بعد بررسی نشون داده میشه.</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
