import "./SavedMessages.css";
import deleteIcon from "../../public/images/delete-icon.svg";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function SavedMessages({ savedMessages, setSavedMessages }) {
  const [confirmId, setConfirmId] = useState(null);

  const askDelete = (id) => {
    setConfirmId(id);
  };

  const handleDelete = (id) => {
    setSavedMessages((prev) => {
      const updated = prev.filter((msg) => msg.id !== id);
      localStorage.setItem("savedMessages", JSON.stringify(updated));
      return updated;
    });
    setConfirmId(null);
  };

  return (
    <motion.div
      className="saved-messages"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to="/" className="saved-messages__btn">
        صفحه اصلی
      </Link>

      <motion.div className="saved-messages__wrap" layout="position">
        {savedMessages.length < 1 ? (
          <p>هنوز پیامی رو ذخیره نکردی</p>
        ) : (
          savedMessages.map((message) => (
            <div className="message__card">
              <p className="message__text">
                {message.textMessage.substring(0, 100) + "..."}
              </p>
              <p className="message__author">{message.author}</p>
              <img
                src={deleteIcon}
                className="delete"
                onClick={() => askDelete(message.id)}
              />
            </div>
          ))
        )}
      </motion.div>

      <AnimatePresence>
        {confirmId && (
          <motion.div
            className="confirm-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="confirm-modal">
              <p>این پیام حذف شود؟</p>
              <button
                className="confirm-delete-btn"
                onClick={() => handleDelete(confirmId)}
              >
                حذف
              </button>
              <button
                className="confirm-cancel-btn"
                onClick={() => setConfirmId(null)}
              >
                انصراف
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
